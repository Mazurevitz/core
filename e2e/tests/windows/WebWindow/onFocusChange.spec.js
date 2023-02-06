// cannot implement more focusing tests with webWindow.focus due to transient activation limitations
// need to extend e2e with selenium for reliable focusing
describe("onFocusChanged()", () => {

    before(() => {
        return coreReady;
    });

    afterEach(() => {
        return Promise.all([gtf.windows.closeAllOtherWindows(), gtf.clearWindowActiveHooks()]);
    });

    it("should not throw when called with a function", async () => {
        const unsub = glue.windows.my().onFocusChanged(() => {});

        gtf.addWindowHook(unsub);
    });

    it("should return a function", async () => {
        const unsub = glue.windows.my().onFocusChanged(() => {});

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
                const unsub = glue.windows.my().onFocusChanged(input);

                gtf.addWindowHook(unsub);

                return Promise.reject("Should not have resolved");
            } catch (error) {
                return;
            }
        });
    });

});
