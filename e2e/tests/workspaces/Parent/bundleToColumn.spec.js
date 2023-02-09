describe("group.bundleToColumn() Should", () => {
    const config = {
        children: [
            {
                type: "row",
                children: [
                    {
                        type: "group",
                        children: [
                            {
                                type: "window",
                                appName: "dummyApp"
                            }
                        ]
                    },
                    {
                        type: "column",
                        children: [
                            {
                                type: "group",
                                children: [
                                    {
                                        type: "window",
                                        appName: "dummyApp"
                                    }
                                ]
                            }
                        ]
                    },

                ]
            }
        ]
    };

    let workspace = undefined;
    before(() => coreReady);

    beforeEach(async () => {
        workspace = await glue.workspaces.createWorkspace(config);
    });

    afterEach(async () => {
        const frames = await glue.workspaces.getAllFrames();
        await Promise.all(frames.map((f) => f.close()));
    });

    it("change the parent to a column when the parent of the group is a row", async () => {
        const groupUnderTest = workspace.getAllGroups().find(g => g.parent.type === "row");

        await groupUnderTest.bundleToColumn();

        expect(groupUnderTest.parent.type).to.eql("column");
    });

    it("change the parent to a column when the parent of the groups is the workspace", async () => {
        const wspsConfig = {
            children: [
                {
                    type: "group",
                    children: [
                        {
                            type: "window",
                            appName: "dummyApp"
                        }
                    ]
                }
            ]
        };

        const workspace = await glue.workspaces.createWorkspace(wspsConfig);
        const groupUnderTest = workspace.getAllGroups()[0];

        await groupUnderTest.bundleToColumn();

        expect(groupUnderTest.parent.type).to.eql("column");
    });

    it("change the parent to a column only to this group when the parent of the groups is a row and there are multiple groups", async () => {
        const wspsConfig = {
            children: [
                {
                    type: "row",
                    children: [
                        {
                            type: "group",
                            children: [
                                {
                                    type: "window",
                                    appName: "dummyApp"
                                }
                            ]
                        },
                        {
                            type: "group",
                            children: [
                                {
                                    type: "window",
                                    appName: "dummyApp"
                                }
                            ]
                        },
                    ]
                }
            ]
        };

        const workspace = await glue.workspaces.createWorkspace(wspsConfig);
        const groupUnderTest = workspace.getAllGroups()[0];
        const secondGroupUnderTest = workspace.getAllGroups()[1];

        await groupUnderTest.bundleToColumn();

        expect(groupUnderTest.parent.type).to.eql("column");
        expect(secondGroupUnderTest.parent.type).to.eql("row");
    });

    it("throw an error when the parent of the group is a column", (done) => {
        const groupUnderTest = workspace.getAllGroups().find(g => g.parent.type === "column");

        groupUnderTest.bundleToColumn().then(() => done("Should not resolve")).catch(() => done());
    });
});