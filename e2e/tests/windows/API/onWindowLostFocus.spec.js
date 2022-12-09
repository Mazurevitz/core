// cannot implement more focusing tests with webWindow.focus due to transient activation limitations
// need to extend e2e with selenium for reliable focusing
describe("onWindowLostFocus()", () => {
    before(() => {
        return coreReady;
    });

    afterEach(() => {
        return Promise.all([gtf.windows.closeAllOtherWindows(), gtf.clearWindowActiveHooks()]);
    });

    it("should not throw when called with a function", async () => {
        const unsub = glue.windows.onWindowLostFocus(() => { });

        gtf.addWindowHook(unsub);
    });

    it("should return a function", async () => {
        const unsub = glue.windows.onWindowLostFocus(() => { });

        gtf.addWindowHook(unsub);

        expect(unsub).to.be.a("function");
    });

    [
        42,
        true,
        "function",
        { test: 42 },
        [() => { }],
        null,
        undefined
    ].forEach((input) => {
        it(`should throw when called with an invalid argument - ${JSON.stringify(input)}`, async () => {
            try {
                const unsub = glue.windows.onWindowLostFocus(input);

                gtf.addWindowHook(unsub);

                return Promise.reject("Should not have resolved");
            } catch (error) {
                return;
            }
        });
    });

    it("should invoke the callback with a valid webWindow object", async () => {
        const wrapper = gtf.wrapPromise();

        const windowName = gtf.windows.getWindowName();

        const unsub = glue.windows.onWindowLostFocus((webWindow) => {
            try {
                gtf.windows.checkIsValidWebWindow(webWindow, expect);
                wrapper.resolve();
            } catch (error) {
                wrapper.reject(error);
            }
        });

        gtf.addWindowHook(unsub);

        await glue.windows.open(windowName, gtf.windows.SUPPORT_DETAILS.url);

        await wrapper.promise;
    });

    it("should invoke the callback when a new window is opened", async () => {
        const wrapper = gtf.wrapPromise();

        const windowName = gtf.windows.getWindowName();

        const unsub = glue.windows.onWindowLostFocus(() => {
            wrapper.resolve();
        });

        gtf.addWindowHook(unsub);

        await glue.windows.open(windowName, gtf.windows.SUPPORT_DETAILS.url);

        await wrapper.promise;
    });

    it("should not invoke the callback when no window is opened and no focus was called (3000ms)", async () => {
        const wrapper = gtf.wrapPromise();

        gtf.wait(3000, () => wrapper.resolve());

        const unsub = glue.windows.onWindowLostFocus(() => {
            wrapper.reject("Should not have been called");
        });

        unsub();
        gtf.addWindowHook(unsub);

        await wrapper.promise;
    });

    it("should not invoke the callback when unsubscribe was called and then a new window was opened (3000ms)", async () => {
        const wrapper = gtf.wrapPromise();

        gtf.wait(3000, () => wrapper.resolve());

        const windowName = gtf.windows.getWindowName();

        const unsub = glue.windows.onWindowLostFocus(() => {
            wrapper.reject("Should not have been called");
        });

        unsub();
        gtf.addWindowHook(unsub);

        await glue.windows.open(windowName, gtf.windows.SUPPORT_DETAILS.url);

        await wrapper.promise;
    });

});