describe('register()', () => {
    const GlueWebIntentsPrefix = "Tick42.FDC3.Intents.";

    // the listener returned by `register()`.
    let currentListener;

    before(() => {
        return coreReady;
    });

    afterEach(() => {
        if (!currentListener) {
            return;
        }

        currentListener.unsubscribe();
        currentListener = undefined;

        gtf.clearWindowActiveHooks();
    });

    it("Should throw when no argument is passed", done => {
        glue.intents.register()
            .then((listener) => {
                currentListener = listener;
                done("Should have thrown");
            })
            .catch(() => done());
    });

    [undefined, null, true, false, "", 42, { test: 42 }, [], [{ test: 42 }], () => { }].forEach(invalidArg => {
        it(`Should throw when an invalid first argument (${JSON.stringify(invalidArg)}) is passed`, (done) => {
            glue.intents.register(invalidArg, () => { })
                .then((listener) => {
                    currentListener = listener;
                    done("Should have thrown");
                })
                .catch(() => done());
        });
    });

    [undefined, null, true, false, "", 42, { test: 42 }, [], [{ test: 42 }], () => { }].forEach(invalidArg => {
        it(`Should throw when an invalid first argument is passed as { intent: ${JSON.stringify(invalidArg)}}`, (done) => {
            glue.intents.register({ intent: invalidArg }, () => { })
                .then((listener) => {
                    currentListener = listener;
                    done("Should have thrown");
                })
                .catch(() => done());
        });
    });

    [undefined, null, true, false, "", 42, { test: 42 }, [], [{ test: 42 }]].forEach(invalidArg => {
        it(`Should throw when an invalid second argument (${JSON.stringify(invalidArg)}) is passed`, (done) => {
            const intentName = `glue.intent.${Date.now()}`;

            glue.intents.register(intentName, invalidArg)
                .then((listener) => {
                    currentListener = listener;
                    done("Should have thrown");
                })
                .catch(() => done());
        });
    });

    it("Should invoke the handler when the intent is raised", async () => {
        const intentName = `glue.intents.${Date.now()}`;
        const context = { type: `glue.intents.context`, data: { test: 42 } };

        const invokedPromise = gtf.wrapPromise();

        currentListener = await glue.intents.register(intentName, () => {
            invokedPromise.resolve();
        });

        await glue.intents.raise({ intent: intentName, context });

        await invokedPromise.promise;
    });

    it("Should invoke the handler with the correct context when the intent is raised", async () => {
        const intentName = `glue.intents.${Date.now()}`;
        const context = { type: `glue.intents.context`, data: { test: 42 } };

        const invokedPromise = gtf.wrapPromise();

        currentListener = await glue.intents.register(intentName, (ctx) => {
            try {
                expect(ctx).to.eql(context);
                invokedPromise.resolve();
            } catch (error) {
                invokedPromise.reject(error);
            }
        });

        await glue.intents.raise({ intent: intentName, context });

        await invokedPromise.promise;
    });

    it("Should return a listener with working unsubscribe function", async () => {
        const intentName = `glue.intents.${Date.now()}`;
        const invocationPromise = gtf.wrapPromise();

        const listener = await glue.intents.register(intentName, () => {
            invocationPromise.reject();
        });

        listener.unsubscribe();

        try {
            await glue.intents.raise(intentName);
            invocationPromise.reject(`Raise should have rejected since there's no longer an intent with passed name`);
        } catch (error) {
            invocationPromise.resolve();
        }

        await invocationPromise.promise;
    });

    it("Should throw when called twice for the same intent", async () => {
        const intentName = `glue.intents.${Date.now()}`;
        const errorThrownPromise = gtf.wrapPromise();

        currentListener = await glue.intents.register(intentName, () => { });

        try {
            await glue.intents.register(intentName, () => { });
            errorThrownPromise.reject("Should have thrown")
        } catch (err) {
            errorThrownPromise.resolve();
        }

        await errorThrownPromise.promise;
    });

    it('Should not throw an error when called twice for the same intent after unregistering the first one.', async () => {
        const intentName = `glue.intents.${Date.now()}`;

        const listener1 = await glue.intents.register(intentName, () => { });
        listener1.unsubscribe();

        const listener2 = await glue.intents.register(intentName, () => { });
        currentListener = listener2;
    });

    it('Should find interop method with such intent name after register() has resolved', async () => {
        const intentName = `glue.intents.${Date.now()}`;
        const methodAddedPromise = gtf.wrapPromise();

        const expectedMethodName = `${GlueWebIntentsPrefix}${intentName}`;

        const un = glue.interop.methodAdded((method) => {
            if (method.name === expectedMethodName) {
                methodAddedPromise.resolve();
            }
        });

        gtf.addWindowHook(un);

        currentListener = await glue.intents.register(intentName, () => { });

        await expectedMethodName.promise;
    });

    it('Should register and unregister interop method with such intent name when invoking the unsubscribe function', async() => {
        const intentName = `glue.intents.${Date.now()}`;
        const interopMethodName = `${GlueWebIntentsPrefix}${intentName}`;

        const methodAddedPromise = gtf.wrapPromise();
        const methodRemovedPromise = gtf.wrapPromise();

        const unsubMethodAdded = glue.interop.methodAdded((method) => {
            if (method.name === interopMethodName) {
                methodAddedPromise.resolve();
            }
        });

        gtf.addWindowHook(unsubMethodAdded);

        const unsubMethodRemoved = glue.interop.methodRemoved((method) => {
            if (method.name === interopMethodName) {
                methodRemovedPromise.resolve();
            }
        });

        gtf.addWindowHook(unsubMethodRemoved);

        const listener = await glue.intents.register(intentName, () => { });
        listener.unsubscribe();

        await Promise.all([ methodAddedPromise, methodRemovedPromise ]);
    });

    it("Should not throw when registering an intent and immediately unsubscribing and then registering an intent with the same name again", async() => {
        const intentName = `glue.intents.${Date.now()}`;

        const listener = await glue.intents.register(intentName, () => {});

        listener.unsubscribe();

        currentListener = await glue.intents.register(intentName, () => {});
    });

    it("Should remove the intent from all() when registering and immediately unsubscribing intent with the same name", async() => {
        const intentName = `glue.intents.${Date.now()}`;

        const listener = await glue.intents.register(intentName, () => {});

        listener.unsubscribe();
               
        const all = await glue.intents.all();

        expect(all.some(intent => intent.name === intentName)).to.be.false;
    });

    it("Should remove the intent from find() when registering and immediately unsubscribing intent with the same name", async() => {
        const intentName = `glue.intents.${Date.now()}`;

        const listener = await glue.intents.register(intentName, () => {});

        listener.unsubscribe();
               
        const found = await glue.intents.find(intentName);

        expect(found.some(intent => intent.name === intentName)).to.be.false;
    });
});
