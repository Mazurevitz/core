/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-use-before-define */
import { Glue42Workspaces } from "@glue42/workspaces-api";
import { anyJson, array, boolean, constant, Decoder, intersection, lazy, number, object, oneOf, optional, string } from "decoder-validate";
import { nonEmptyStringDecoder, nonNegativeNumberDecoder, windowLayoutItemDecoder } from "../../shared/decoders";
import { AddContainerConfig, AddItemResult, AddWindowConfig, BaseChildSnapshotConfig, BundleItemConfig, BundleWorkspaceConfig, ChildSnapshotResult, ColumnDefinitionConfig, ContainerStreamData, ContainerSummaryResult, DeleteLayoutConfig, ExportedLayoutsResult, FrameBounds, FrameBoundsResult, FrameHello, FrameInitializationConfigProtocol, FrameSnapshotConfig, FrameSnapshotResult, FrameStateConfig, FrameStateResult, FrameStreamData, FrameSummariesResult, FrameSummaryResult, GetFrameSummaryConfig, GetWorkspacesLayoutsConfig, GetWorkspacesLayoutsResponse, GetWorkspaceWindowsOnLayoutSaveContextConfig, GetWorkspaceWindowsOnLayoutSaveContextResult, GroupDefinitionConfig, IsWindowInSwimlaneResult, LayoutSummariesResult, LayoutSummary, LockColumnConfig, LockContainerConfig, LockGroupConfig, LockRowConfig, LockWindowConfig, LockWorkspaceConfig, MoveFrameConfig, MoveWindowConfig, OpenWorkspaceConfig, ParentSnapshotConfig, PingResult, PinWorkspaceConfig, ResizeItemConfig, RowDefinitionConfig, SetItemTitleConfig, SetMaximizationBoundaryConfig, SetWorkspaceIconConfig, SimpleItemConfig, SimpleWindowOperationSuccessResult, SwimlaneWindowSnapshotConfig, WindowStreamData, WorkspaceConfigResult, WorkspaceCreateConfigProtocol, WorkspaceEventAction, WorkspaceEventType, WorkspaceIconResult, WorkspaceSelector, WorkspacesLayoutImportConfig, WorkspaceSnapshotResult, WorkspacesOperationsTypes, WorkspaceStreamData, WorkspaceSummariesResult, WorkspaceSummaryResult, WorkspaceWindowData, WorkspaceWindowOnSaveData } from "./types";

export const workspacesOperationDecoder: Decoder<WorkspacesOperationsTypes> = oneOf<
    "isWindowInWorkspace" | "createWorkspace" | "getAllFramesSummaries" | "getFrameSummary" |
    "getAllWorkspacesSummaries" | "getWorkspaceSnapshot" | "getAllLayoutsSummaries" | "openWorkspace" |
    "deleteLayout" | "saveLayout" | "importLayout" | "exportAllLayouts" | "restoreItem" | "maximizeItem" |
    "focusItem" | "closeItem" | "resizeItem" | "moveFrame" | "getFrameSnapshot" | "forceLoadWindow" |
    "ejectWindow" | "setItemTitle" | "moveWindowTo" | "addWindow" | "addContainer" |
    "bundleWorkspace" | "bundleItem"|"changeFrameState" | "getFrameState" | "getFrameBounds" | "frameHello" | "hibernateWorkspace" | "resumeWorkspace" | "getWorkspacesConfig" |
    "lockWorkspace" | "lockContainer" | "lockWindow" | "pinWorkspace" | "unpinWorkspace" | "getWorkspaceIcon" | "setWorkspaceIcon" | "createFrame" | "initFrame" | "checkStarted" | "getPlatformFrameId" |
    "getWorkspaceWindowsOnLayoutSaveContext" | "getWorkspacesLayouts" | "setMaximizationBoundary" | "operationCheck" | "getWorkspaceWindowFrameBounds" | "focusChange"
>(
    constant("isWindowInWorkspace"),
    constant("createWorkspace"),
    constant("createFrame"),
    constant("initFrame"),
    constant("getAllFramesSummaries"),
    constant("getFrameSummary"),
    constant("getAllWorkspacesSummaries"),
    constant("getWorkspaceSnapshot"),
    constant("getAllLayoutsSummaries"),
    constant("openWorkspace"),
    constant("deleteLayout"),
    constant("saveLayout"),
    constant("importLayout"),
    constant("exportAllLayouts"),
    constant("restoreItem"),
    constant("maximizeItem"),
    constant("focusItem"),
    constant("closeItem"),
    constant("resizeItem"),
    constant("moveFrame"),
    constant("getFrameSnapshot"),
    constant("forceLoadWindow"),
    constant("ejectWindow"),
    constant("setItemTitle"),
    constant("moveWindowTo"),
    constant("addWindow"),
    constant("addContainer"),
    constant("bundleWorkspace"),
    constant("bundleItem"),
    constant("changeFrameState"),
    constant("getFrameState"),
    constant("getFrameBounds"),
    constant("frameHello"),
    constant("hibernateWorkspace"),
    constant("resumeWorkspace"),
    constant("getWorkspacesConfig"),
    constant("lockWorkspace"),
    constant("lockContainer"),
    constant("lockWindow"),
    constant("pinWorkspace"),
    constant("unpinWorkspace"),
    constant("getWorkspaceIcon"),
    constant("setWorkspaceIcon"),
    constant("checkStarted"),
    constant("getPlatformFrameId"),
    constant("getWorkspaceWindowsOnLayoutSaveContext"),
    constant("getWorkspacesLayouts"),
    constant("setMaximizationBoundary"),
    constant("operationCheck"),
    constant("getWorkspaceWindowFrameBounds"),
    constant("focusChange")
);

export const frameHelloDecoder: Decoder<FrameHello> = object({
    windowId: optional(nonEmptyStringDecoder)
});

export const workspaceWindowDataDecoder: Decoder<WorkspaceWindowData> = object({
    name: nonEmptyStringDecoder,
    windowId: nonEmptyStringDecoder,
    frameId: nonEmptyStringDecoder,
    appName: optional(nonEmptyStringDecoder),
    context: optional(anyJson()),
    title: optional(nonEmptyStringDecoder)
});

export const isWindowInSwimlaneResultDecoder: Decoder<IsWindowInSwimlaneResult> = object({
    inWorkspace: boolean()
});

export const allParentDecoder: Decoder<"workspace" | "row" | "column" | "group"> = oneOf<"workspace" | "row" | "column" | "group">(
    constant("workspace"),
    constant("row"),
    constant("column"),
    constant("group")
);

export const subParentDecoder: Decoder<"row" | "column" | "group"> = oneOf<"row" | "column" | "group">(
    constant("row"),
    constant("column"),
    constant("group")
);

export const frameStateDecoder: Decoder<"maximized" | "minimized" | "normal"> = oneOf<"maximized" | "minimized" | "normal">(
    constant("maximized"),
    constant("minimized"),
    constant("normal")
);

export const checkThrowCallback = (callback: unknown, allowUndefined?: boolean): void => {
    const argumentType = typeof callback;

    if (allowUndefined && argumentType !== "function" && argumentType !== "undefined") {
        throw new Error(`Provided argument must be either undefined or of type function, provided: ${argumentType}`);
    }

    if (!allowUndefined && argumentType !== "function") {
        throw new Error(`Provided argument must be of type function, provided: ${argumentType}`);
    }
};

export const workspaceBuilderCreateConfigDecoder: Decoder<Glue42Workspaces.WorkspaceCreateConfig> = object({
    saveLayout: optional(boolean())
});

export const deleteLayoutConfigDecoder: Decoder<DeleteLayoutConfig> = object({
    name: nonEmptyStringDecoder
});


export const swimlaneWindowDefinitionDecoder: Decoder<Glue42Workspaces.WorkspaceWindowDefinition> = object({
    type: optional(constant("window")),
    appName: optional(nonEmptyStringDecoder),
    windowId: optional(nonEmptyStringDecoder),
    context: optional(anyJson())
});

export const strictSwimlaneWindowDefinitionDecoder: Decoder<Glue42Workspaces.WorkspaceWindowDefinition> = object({
    type: constant("window"),
    appName: optional(nonEmptyStringDecoder),
    windowId: optional(nonEmptyStringDecoder),
    context: optional(anyJson())
});

export const parentDefinitionDecoder: Decoder<Glue42Workspaces.BoxDefinition> = object({
    type: optional(subParentDecoder),
    children: optional(
        lazy(() => array(
            oneOf<Glue42Workspaces.WorkspaceWindowDefinition | Glue42Workspaces.BoxDefinition>(
                swimlaneWindowDefinitionDecoder,
                parentDefinitionDecoder
            )
        ))
    ),
    config: optional(anyJson())
});

export const groupDefinitionConfigDecoder: Decoder<GroupDefinitionConfig> = object({
    minWidth: optional(number()),
    maxWidth: optional(number()),
    minHeight: optional(number()),
    maxHeight: optional(number()),
    allowExtract: optional(boolean()),
    allowReorder: optional(boolean()),
    allowDrop: optional(boolean()),
    allowDropHeader: optional(boolean()),
    allowDropLeft: optional(boolean()),
    allowDropTop: optional(boolean()),
    allowDropRight: optional(boolean()),
    allowDropBottom: optional(boolean()),
    showMaximizeButton: optional(boolean()),
    showEjectButton: optional(boolean()),
    showAddWindowButton: optional(boolean())
});

export const rowDefinitionConfigDecoder: Decoder<RowDefinitionConfig> = object({
    minHeight: optional(number()),
    maxHeight: optional(number()),
    allowDrop: optional(boolean()),
    allowSplitters: optional(boolean()),
    isPinned: optional(boolean()),
    maximizationBoundary: optional(boolean())
});

export const columnDefinitionConfigDecoder: Decoder<ColumnDefinitionConfig> = object({
    minWidth: optional(number()),
    maxWidth: optional(number()),
    allowDrop: optional(boolean()),
    allowSplitters: optional(boolean()),
    isPinned: optional(boolean()),
    maximizationBoundary: optional(boolean())
});

export const strictColumnDefinitionDecoder: Decoder<Glue42Workspaces.BoxDefinition> = object({
    type: constant("column"),
    children: optional(
        lazy(() => array(
            oneOf<Glue42Workspaces.WorkspaceWindowDefinition | Glue42Workspaces.BoxDefinition>(
                strictSwimlaneWindowDefinitionDecoder,
                strictParentDefinitionDecoder
            )
        ))
    ),
    config: optional(columnDefinitionConfigDecoder)
});

export const strictRowDefinitionDecoder: Decoder<Glue42Workspaces.BoxDefinition> = object({
    type: constant("row"),
    children: optional(
        lazy(() => array(
            oneOf<Glue42Workspaces.WorkspaceWindowDefinition | Glue42Workspaces.BoxDefinition>(
                strictSwimlaneWindowDefinitionDecoder,
                strictParentDefinitionDecoder
            )
        ))
    ),
    config: optional(rowDefinitionConfigDecoder)
});

export const strictGroupDefinitionDecoder: Decoder<Glue42Workspaces.BoxDefinition> = object({
    type: constant("group"),
    children: optional(
        lazy(() => array(
            oneOf<Glue42Workspaces.WorkspaceWindowDefinition | Glue42Workspaces.BoxDefinition>(
                strictSwimlaneWindowDefinitionDecoder,
                strictParentDefinitionDecoder
            )
        ))
    ),
    config: optional(groupDefinitionConfigDecoder)
});

export const strictParentDefinitionDecoder: Decoder<Glue42Workspaces.BoxDefinition> = oneOf(strictGroupDefinitionDecoder, strictColumnDefinitionDecoder, strictRowDefinitionDecoder);

export const stateDecoder: Decoder<"maximized" | "normal"> = oneOf<"maximized" | "normal">(
    (string().where((s) => s.toLowerCase() === "maximized", "Expected a case insensitive variation of 'maximized'") as Decoder<"maximized">),
    (string().where((s) => s.toLowerCase() === "normal", "Expected a case insensitive variation of 'normal'") as Decoder<"normal">)
);

export const newFrameConfigDecoder: Decoder<Glue42Workspaces.NewFrameConfig> = object({
    bounds: optional(object({
        left: optional(number()),
        top: optional(number()),
        width: optional(nonNegativeNumberDecoder),
        height: optional(nonNegativeNumberDecoder)
    })),
    frameId: optional(nonEmptyStringDecoder)
});

export const loadStrategyDecoder: Decoder<Glue42Workspaces.LoadingStrategy> = oneOf<"direct" | "delayed" | "lazy">(
    constant("direct"),
    constant("delayed"),
    constant("lazy"),
);

export const restoreWorkspaceConfigDecoder: Decoder<Glue42Workspaces.RestoreWorkspaceConfig> = object({
    app: optional(nonEmptyStringDecoder),
    context: optional(anyJson()),
    loadStrategy: optional(loadStrategyDecoder),
    title: optional(nonEmptyStringDecoder),
    reuseWorkspaceId: optional(nonEmptyStringDecoder),
    frameId: optional(nonEmptyStringDecoder),
    lockdown: optional(boolean()),
    activateFrame: optional(boolean()),
    newFrame: optional(oneOf<Glue42Workspaces.NewFrameConfig | boolean>(
        newFrameConfigDecoder,
        boolean()
    )),
    noTabHeader: optional(boolean()),
    inMemoryLayout: optional(boolean()),
    isPinned: optional(boolean()),
    icon: optional(nonEmptyStringDecoder),
    isSelected: optional(boolean()),
    positionIndex: optional(nonNegativeNumberDecoder)
});

export const openWorkspaceConfigDecoder: Decoder<OpenWorkspaceConfig> = object({
    name: nonEmptyStringDecoder,
    restoreOptions: optional(restoreWorkspaceConfigDecoder)
});

export const workspaceDefinitionDecoder: Decoder<Glue42Workspaces.WorkspaceDefinition> = object({
    children: optional(array(oneOf<Glue42Workspaces.WorkspaceWindowDefinition | Glue42Workspaces.BoxDefinition>(
        swimlaneWindowDefinitionDecoder,
        parentDefinitionDecoder
    ))),
    context: optional(anyJson()),
    config: optional(object({
        title: optional(nonEmptyStringDecoder),
        position: optional(nonNegativeNumberDecoder),
        isFocused: optional(boolean()),
        loadStrategy: optional(loadStrategyDecoder),
        noTabHeader: optional(boolean()),
        allowDrop: optional(boolean()),
        allowDropLeft: optional(boolean()),
        allowDropTop: optional(boolean()),
        allowDropRight: optional(boolean()),
        allowDropBottom: optional(boolean()),
        allowExtract: optional(boolean()),
        allowWindowReorder: optional(boolean()),
        showSaveButton: optional(boolean()),
        allowWorkspaceTabReorder: optional(boolean()),
        allowWorkspaceTabExtract: optional(boolean()),
        showCloseButton: optional(boolean()),
        allowSplitters: optional(boolean()),
        positionIndex: optional(nonNegativeNumberDecoder)
    })),
    frame: optional(object({
        reuseFrameId: optional(nonEmptyStringDecoder),
        newFrame: optional(oneOf<boolean | Glue42Workspaces.NewFrameConfig>(
            boolean(),
            newFrameConfigDecoder
        ))
    }))
});

export const builderConfigDecoder: Decoder<Glue42Workspaces.BuilderConfig> = object({
    type: allParentDecoder,
    definition: optional(oneOf<Glue42Workspaces.WorkspaceDefinition | Glue42Workspaces.BoxDefinition>(
        workspaceDefinitionDecoder,
        parentDefinitionDecoder
    ))
});

export const workspaceCreateConfigDecoder: Decoder<WorkspaceCreateConfigProtocol> = intersection(
    workspaceDefinitionDecoder,
    object({
        saveConfig: optional(object({
            saveLayout: optional(boolean())
        }))
    })
);

export const getFrameSummaryConfigDecoder: Decoder<GetFrameSummaryConfig> = object({
    itemId: nonEmptyStringDecoder
});

export const frameSummaryDecoder: Decoder<FrameSummaryResult> = object({
    id: nonEmptyStringDecoder,
    isFocused: optional(boolean()),
    isInitialized: optional(boolean()),
    initializationContext: optional(object({
        context: optional(anyJson())
    }))
});

export const workspaceSummaryDecoder: Decoder<Glue42Workspaces.WorkspaceSummary> = object({
    id: nonEmptyStringDecoder,
    frameId: nonEmptyStringDecoder,
    positionIndex: number(),
    title: nonEmptyStringDecoder,
    focused: boolean(),
    layoutName: optional(nonEmptyStringDecoder),
    isSelected: optional(boolean())
});

export const containerSummaryDecoder: Decoder<Glue42Workspaces.BoxSummary> = object({
    type: subParentDecoder,
    id: nonEmptyStringDecoder,
    frameId: nonEmptyStringDecoder,
    workspaceId: nonEmptyStringDecoder,
    positionIndex: number()
});

export const eventTypeDecoder: Decoder<WorkspaceEventType> = oneOf<"frame" | "workspace" | "container" | "window">(
    constant("frame"),
    constant("workspace"),
    constant("container"),
    constant("window")
);

export const streamRequestArgumentsDecoder: Decoder<{ type: WorkspaceEventType; branch: string }> = object({
    type: eventTypeDecoder,
    branch: nonEmptyStringDecoder
});

export const workspaceEventActionDecoder: Decoder<WorkspaceEventAction> = oneOf<"opened" | "closing" | "closed" | "focus" | "added" | "loaded" | "removed" | "childrenUpdate" | "containerChange" | "maximized" | "restored" | "minimized" | "normal" | "selected">(
    constant("opened"),
    constant("closing"),
    constant("closed"),
    constant("focus"),
    constant("added"),
    constant("loaded"),
    constant("removed"),
    constant("childrenUpdate"),
    constant("containerChange"),
    constant("maximized"),
    constant("restored"),
    constant("minimized"),
    constant("normal"),
    constant("selected")
);

export const workspaceConfigResultDecoder: Decoder<WorkspaceConfigResult> = object({
    frameId: nonEmptyStringDecoder,
    title: nonEmptyStringDecoder,
    positionIndex: nonNegativeNumberDecoder,
    name: nonEmptyStringDecoder,
    layoutName: optional(nonEmptyStringDecoder),
    isHibernated: boolean(),
    isSelected: boolean(),
    lastActive: number(),
    allowDrop: optional(boolean()),
    allowExtract: optional(boolean()),
    allowWindowReorder: optional(boolean()),
    allowSplitters: optional(boolean()),
    showCloseButton: optional(boolean()),
    showSaveButton: optional(boolean()),
    allowWorkspaceTabReorder: optional(boolean()),
    allowDropLeft: optional(boolean()),
    allowDropTop: optional(boolean()),
    allowDropRight: optional(boolean()),
    allowDropBottom: optional(boolean()),
    showAddWindowButtons: optional(boolean()),
    showEjectButtons: optional(boolean()),
    showWindowCloseButtons: optional(boolean()),
    minWidth: optional(number()),
    maxWidth: optional(number()),
    minHeight: optional(number()),
    maxHeight: optional(number()),
    widthInPx: optional(number()),
    heightInPx: optional(number())
});

// todo: remove number positionIndex when fixed
export const baseChildSnapshotConfigDecoder: Decoder<BaseChildSnapshotConfig> = object({
    frameId: nonEmptyStringDecoder,
    workspaceId: nonEmptyStringDecoder,
    positionIndex: number()
});

export const parentSnapshotConfigDecoder: Decoder<ParentSnapshotConfig> = anyJson();

// todo: remove this after isMaximized is fixed
export const swimlaneWindowSnapshotConfigDecoder: Decoder<SwimlaneWindowSnapshotConfig> = intersection(
    baseChildSnapshotConfigDecoder,
    object({
        windowId: optional(nonEmptyStringDecoder),
        isMaximized: optional(boolean()),
        isFocused: boolean(),
        isSelected: optional(boolean()),
        title: optional(string()),
        appName: optional(nonEmptyStringDecoder),
        context: optional(anyJson())
    })
) as any;

export const childSnapshotResultDecoder: Decoder<ChildSnapshotResult> = object({
    id: optional(nonEmptyStringDecoder),
    config: oneOf<ParentSnapshotConfig | SwimlaneWindowSnapshotConfig>(
        parentSnapshotConfigDecoder,
        swimlaneWindowSnapshotConfigDecoder
    ),
    children: optional(lazy(() => array(childSnapshotResultDecoder))),
    type: oneOf<"window" | "row" | "column" | "group">(
        constant("window"),
        constant("row"),
        constant("column"),
        constant("group")
    )
});

export const workspaceSnapshotResultDecoder: Decoder<WorkspaceSnapshotResult> = object({
    id: nonEmptyStringDecoder,
    config: workspaceConfigResultDecoder,
    children: array(childSnapshotResultDecoder),
    frameSummary: frameSummaryDecoder,
    context: optional(anyJson())
});

export const customWorkspaceChildSnapshotDecoder: Decoder<ChildSnapshotResult> = object({
    id: nonEmptyStringDecoder,
    config: oneOf<ParentSnapshotConfig | SwimlaneWindowSnapshotConfig>(
        parentSnapshotConfigDecoder,
        swimlaneWindowSnapshotConfigDecoder
    ),
    children: optional(lazy(() => array(customWorkspaceChildSnapshotDecoder))),
    type: oneOf<"window" | "row" | "column" | "group">(
        constant("window"),
        constant("row"),
        constant("column"),
        constant("group")
    )
});

export const groupLayoutItemDecoder: Decoder<Glue42Workspaces.GroupLayoutItem> = object({
    type: constant("group"),
    config: anyJson(),
    children: array(oneOf<Glue42Workspaces.WindowLayoutItem>(
        windowLayoutItemDecoder
    ))
});

export const columnLayoutItemDecoder: Decoder<Glue42Workspaces.ColumnLayoutItem> = object({
    type: constant("column"),
    config: anyJson(),
    children: array(oneOf<Glue42Workspaces.RowLayoutItem | Glue42Workspaces.ColumnLayoutItem | Glue42Workspaces.GroupLayoutItem | Glue42Workspaces.WindowLayoutItem>(
        groupLayoutItemDecoder,
        windowLayoutItemDecoder,
        lazy(() => columnLayoutItemDecoder),
        lazy(() => rowLayoutItemDecoder)
    ))
});

export const rowLayoutItemDecoder: Decoder<Glue42Workspaces.RowLayoutItem> = object({
    type: constant("row"),
    config: anyJson(),
    children: array(oneOf<Glue42Workspaces.RowLayoutItem | Glue42Workspaces.ColumnLayoutItem | Glue42Workspaces.GroupLayoutItem | Glue42Workspaces.WindowLayoutItem>(
        columnLayoutItemDecoder,
        groupLayoutItemDecoder,
        windowLayoutItemDecoder,
        lazy(() => rowLayoutItemDecoder)
    ))
});

export const workspaceLayoutDecoder: Decoder<Glue42Workspaces.WorkspaceLayout> = object({
    name: nonEmptyStringDecoder,
    type: constant("Workspace"),
    metadata: optional(anyJson()),
    components: array(object({
        type: constant("Workspace"),
        application: optional(nonEmptyStringDecoder),
        state: object({
            config: anyJson(),
            context: anyJson(),
            children: array(oneOf<Glue42Workspaces.RowLayoutItem | Glue42Workspaces.ColumnLayoutItem | Glue42Workspaces.GroupLayoutItem | Glue42Workspaces.WindowLayoutItem>(
                rowLayoutItemDecoder,
                columnLayoutItemDecoder,
                groupLayoutItemDecoder,
                windowLayoutItemDecoder
            ))
        })
    }))
});

export const workspacesLayoutImportConfigDecoder: Decoder<WorkspacesLayoutImportConfig> = object({
    layout: workspaceLayoutDecoder,
    mode: oneOf<"replace" | "merge">(
        constant("replace"),
        constant("merge")
    )
});

export const exportedLayoutsResultDecoder: Decoder<ExportedLayoutsResult> = object({
    layouts: array(workspaceLayoutDecoder)
});

export const frameSummaryResultDecoder: Decoder<FrameSummaryResult> = frameSummaryDecoder;

export const frameSummariesResultDecoder: Decoder<FrameSummariesResult> = object({
    summaries: array(frameSummaryResultDecoder)
});

export const workspaceSummaryResultDecoder: Decoder<WorkspaceSummaryResult> = object({
    id: nonEmptyStringDecoder,
    config: workspaceConfigResultDecoder
});

export const workspaceSummariesResultDecoder: Decoder<WorkspaceSummariesResult> = object({
    summaries: array(workspaceSummaryResultDecoder)
});

export const frameSnapshotResultDecoder: Decoder<FrameSnapshotResult> = object({
    id: nonEmptyStringDecoder,
    config: anyJson(),
    workspaces: array(workspaceSnapshotResultDecoder)
});

export const layoutSummaryDecoder: Decoder<LayoutSummary> = object({
    name: nonEmptyStringDecoder
});

export const layoutSummariesDecoder: Decoder<LayoutSummariesResult> = object({
    summaries: array(layoutSummaryDecoder)
});

export const simpleWindowOperationSuccessResultDecoder: Decoder<SimpleWindowOperationSuccessResult> = object({
    windowId: nonEmptyStringDecoder
});

export const voidResultDecoder: Decoder<{}> = anyJson();

export const frameStateResultDecoder: Decoder<FrameStateResult> = object({
    state: frameStateDecoder
});

export const frameBoundsDecoder: Decoder<FrameBounds> = object({
    top: number(),
    left: number(),
    width: nonNegativeNumberDecoder,
    height: nonNegativeNumberDecoder
});

export const frameBoundsResultDecoder: Decoder<FrameBoundsResult> = object({
    bounds: frameBoundsDecoder
});

export const resizeConfigDecoder: Decoder<Glue42Workspaces.ResizeConfig> = object({
    width: optional(nonNegativeNumberDecoder),
    height: optional(nonNegativeNumberDecoder),
    relative: optional(boolean())
});

export const moveConfigDecoder: Decoder<Glue42Workspaces.MoveConfig> = object({
    top: optional(number()),
    left: optional(number()),
    relative: optional(boolean())
});

export const simpleItemConfigDecoder: Decoder<SimpleItemConfig> = object({
    itemId: nonEmptyStringDecoder
});

export const frameSnapshotConfigDecoder: Decoder<FrameSnapshotConfig> = object({
    itemId: nonEmptyStringDecoder,
    excludeIds: optional(boolean())
});

export const frameStateConfigDecoder: Decoder<FrameStateConfig> = object({
    frameId: nonEmptyStringDecoder,
    requestedState: frameStateDecoder
});

export const setItemTitleConfigDecoder: Decoder<SetItemTitleConfig> = object({
    itemId: nonEmptyStringDecoder,
    title: nonEmptyStringDecoder
});

export const moveWindowConfigDecoder: Decoder<MoveWindowConfig> = object({
    itemId: nonEmptyStringDecoder,
    containerId: nonEmptyStringDecoder
});

export const resizeItemConfigDecoder: Decoder<ResizeItemConfig> = intersection(
    simpleItemConfigDecoder,
    resizeConfigDecoder
);

export const moveFrameConfigDecoder: Decoder<MoveFrameConfig> = intersection(
    simpleItemConfigDecoder,
    moveConfigDecoder
);

export const simpleParentDecoder: Decoder<{ id: string; type: "row" | "column" | "group" }> = object({
    id: nonEmptyStringDecoder,
    type: subParentDecoder
});

export const addWindowConfigDecoder: Decoder<AddWindowConfig> = object({
    definition: swimlaneWindowDefinitionDecoder,
    parentId: nonEmptyStringDecoder,
    parentType: allParentDecoder
});

export const addContainerConfigDecoder: Decoder<AddContainerConfig> = object({
    definition: strictParentDefinitionDecoder,
    parentId: nonEmptyStringDecoder,
    parentType: allParentDecoder
});

export const addItemResultDecoder: Decoder<AddItemResult> = object({
    itemId: nonEmptyStringDecoder,
    windowId: optional(nonEmptyStringDecoder)
});

export const pingResultDecoder: Decoder<PingResult> = object({
    live: boolean()
});

export const bundleWorkspaceConfigDecoder: Decoder<BundleWorkspaceConfig> = object({
    type: oneOf<"row" | "column">(
        constant("row"),
        constant("column")
    ),
    workspaceId: nonEmptyStringDecoder
});

export const bundleItemConfigDecoder: Decoder<BundleItemConfig> = object({
    type: oneOf<"row" | "column">(
        constant("row"),
        constant("column")
    ),
    itemId: nonEmptyStringDecoder
});

export const workspaceSelectorDecoder: Decoder<WorkspaceSelector> = object({
    workspaceId: nonEmptyStringDecoder
});

export const containerSummaryResultDecoder: Decoder<ContainerSummaryResult> = object({
    itemId: nonEmptyStringDecoder,
    config: parentSnapshotConfigDecoder
});

export const frameStreamDataDecoder: Decoder<FrameStreamData> = object({
    frameSummary: frameSummaryDecoder,
    frameBounds: optional(frameBoundsDecoder)
});

export const workspaceStreamDataDecoder: Decoder<WorkspaceStreamData> = object({
    workspaceSummary: workspaceSummaryResultDecoder,
    frameSummary: frameSummaryDecoder,
    frameBounds: optional(frameBoundsDecoder)
});

export const containerStreamDataDecoder: Decoder<ContainerStreamData> = object({
    containerSummary: containerSummaryResultDecoder
});

export const windowStreamDataDecoder: Decoder<WindowStreamData> = object({
    windowSummary: object({
        itemId: nonEmptyStringDecoder,
        parentId: nonEmptyStringDecoder,
        config: swimlaneWindowSnapshotConfigDecoder
    })
});

export const workspaceLayoutSaveConfigDecoder: Decoder<Glue42Workspaces.WorkspaceLayoutSaveConfig> = object({
    name: nonEmptyStringDecoder,
    workspaceId: nonEmptyStringDecoder,
    saveContext: optional(boolean())
});

export const lockWorkspaceDecoder: Decoder<LockWorkspaceConfig> = object({
    workspaceId: nonEmptyStringDecoder,
    config: optional(object({
        allowDrop: optional(boolean()),
        allowDropLeft: optional(boolean()),
        allowDropTop: optional(boolean()),
        allowDropRight: optional(boolean()),
        allowDropBottom: optional(boolean()),
        allowExtract: optional(boolean()),
        allowWindowReorder: optional(boolean()),
        allowSplitters: optional(boolean()),
        showCloseButton: optional(boolean()),
        showSaveButton: optional(boolean()),
        allowWorkspaceTabReorder: optional(boolean()),
        showWindowCloseButtons: optional(boolean()),
        showEjectButtons: optional(boolean()),
        showAddWindowButtons: optional(boolean())
    }))
});

export const lockWindowDecoder: Decoder<LockWindowConfig> = object({
    windowPlacementId: nonEmptyStringDecoder,
    config: optional(object({
        allowExtract: optional(boolean()),
        allowReorder: optional(boolean()),
        showCloseButton: optional(boolean())
    }))
});

export const lockRowDecoder: Decoder<LockRowConfig> = object({
    itemId: nonEmptyStringDecoder,
    type: constant("row"),
    config: optional(object({
        allowDrop: optional(boolean()),
        allowSplitters: optional(boolean()),
    }))
});

export const lockColumnDecoder: Decoder<LockColumnConfig> = object({
    itemId: nonEmptyStringDecoder,
    type: constant("column"),
    config: optional(object({
        allowDrop: optional(boolean()),
        allowSplitters: optional(boolean()),

    }))
});

export const lockGroupDecoder: Decoder<LockGroupConfig> = object({
    itemId: nonEmptyStringDecoder,
    type: constant("group"),
    config: optional(object({
        allowExtract: optional(boolean()),
        allowReorder: optional(boolean()),
        allowDrop: optional(boolean()),
        allowDropHeader: optional(boolean()),
        allowDropLeft: optional(boolean()),
        allowDropTop: optional(boolean()),
        allowDropRight: optional(boolean()),
        allowDropBottom: optional(boolean()),
        showMaximizeButton: optional(boolean()),
        showEjectButton: optional(boolean()),
        showAddWindowButton: optional(boolean()),
    }))
});

export const lockContainerDecoder: Decoder<LockContainerConfig> = oneOf<LockColumnConfig | LockGroupConfig | LockRowConfig>(lockColumnDecoder, lockGroupDecoder, lockRowDecoder);

export const pinWorkspaceDecoder: Decoder<PinWorkspaceConfig> = object({
    workspaceId: nonEmptyStringDecoder,
    icon: optional(nonEmptyStringDecoder)
});

export const setWorkspaceIconDecoder: Decoder<SetWorkspaceIconConfig> = object({
    workspaceId: nonEmptyStringDecoder,
    icon: optional(nonEmptyStringDecoder)
});

export const workspaceIconDecoder: Decoder<WorkspaceIconResult> = object({
    icon: optional(nonEmptyStringDecoder)
});

export const emptyFrameDefinitionDecoder: Decoder<Glue42Workspaces.EmptyFrameDefinition> = object({
    applicationName: optional(string()),
    frameConfig: optional(newFrameConfigDecoder),
    context: optional(object()),
    layoutComponentId: optional(nonEmptyStringDecoder)
});

export const restoreWorkspaceDefinitionDecoder: Decoder<Glue42Workspaces.RestoreWorkspaceDefinition> = object({
    name: nonEmptyStringDecoder,
    restoreOptions: optional(restoreWorkspaceConfigDecoder)
});

export const frameInitProtocolConfigDecoder: Decoder<FrameInitializationConfigProtocol> = object({
    frameId: nonEmptyStringDecoder,
    workspaces: array(oneOf<Glue42Workspaces.WorkspaceDefinition | Glue42Workspaces.RestoreWorkspaceDefinition>(
        workspaceDefinitionDecoder,
        restoreWorkspaceDefinitionDecoder
    ))
});

export const getWorkspaceWindowsOnLayoutSaveContextConfigDecoder: Decoder<GetWorkspaceWindowsOnLayoutSaveContextConfig> = object({
    layoutType: oneOf<"Global" | "Workspace">(
        constant("Global"),
        constant("Workspace")
    ),
    layoutName: nonEmptyStringDecoder,
    windowIds: array(nonEmptyStringDecoder),
    context: optional(anyJson()),
    instances: optional(array(nonEmptyStringDecoder)),
    ignoreInstances: optional(array(nonEmptyStringDecoder))
});

export const setMaximizationBoundaryConfigDecoder: Decoder<SetMaximizationBoundaryConfig> = object({
    itemId: nonEmptyStringDecoder,
    enabled: boolean()
});

export const workspaceWindowOnSaveDataDecoder: Decoder<WorkspaceWindowOnSaveData> = object({
    windowId: nonEmptyStringDecoder,
    windowContext: optional(anyJson())
})

export const getWorkspaceWindowsOnLayoutSaveContextResult: Decoder<GetWorkspaceWindowsOnLayoutSaveContextResult> = object({
    windowsOnSaveData: array(workspaceWindowOnSaveDataDecoder)
});

export const getWorkspacesLayoutsConfigDecoder: Decoder<GetWorkspacesLayoutsConfig> = object({
    frameId: nonEmptyStringDecoder,
    layoutName: nonEmptyStringDecoder,
    layoutType: oneOf<"Global" | "Workspace">(
        constant("Global"),
        constant("Workspace")
    ),
    context: optional(anyJson())
});

export const getWorkspacesLayoutsResponseDecoder: Decoder<GetWorkspacesLayoutsResponse> = object({
    workspaces: array(workspaceSnapshotResultDecoder)
});
