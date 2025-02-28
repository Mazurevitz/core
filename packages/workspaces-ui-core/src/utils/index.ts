import GoldenLayout, { Container } from "@glue42/golden-layout";
import { generate } from "shortid";
import { ControlArguments } from "../interop/types";
import { ColumnItem, GroupItem, RowItem, WindowItem, WindowSummary, WorkspaceItem } from "../types/internal";

export const idAsString = (id: string | string[]) => Array.isArray(id) ? id[0] : id;

export const getAllWindowsFromConfig = (contents: GoldenLayout.ItemConfig[] = []): GoldenLayout.ComponentConfig[] => {
    const recursiveElementTraversal = (currItem: GoldenLayout.ItemConfig) => {
        if (currItem.type === "component") {
            return currItem.id ? [currItem] : [];
        }

        return currItem.content.reduce((acc: GoldenLayout.ItemConfig[], currContent: GoldenLayout.ItemConfig) => {
            acc = [...acc, ...recursiveElementTraversal(currContent)];
            return acc;
        }, []);
    };

    return contents.reduce((acc, ci) => {
        return [...acc, ...recursiveElementTraversal(ci)];
    }, []);
};

export const getAllWindowsFromItem = (item: WorkspaceItem | RowItem | ColumnItem | GroupItem): WindowItem[] => {
    const result: WindowItem[] = [];

    const recursiveTraversal = (item: WorkspaceItem | RowItem | ColumnItem | GroupItem | WindowItem) => {
        if (item.type === "window") {
            result.push(item);
            return;
        }

        item.children.forEach((c) => recursiveTraversal(c));
    }

    recursiveTraversal(item);

    return result;
}

export const getAllItemsFromConfig = (contents: GoldenLayout.ItemConfig[]): GoldenLayout.ItemConfig[] => {
    const recursiveElementTraversal = (currItem: GoldenLayout.ItemConfig) => {
        if (currItem.type === "component") {
            return currItem.id ? [currItem] : [];
        }

        const resultArray = currItem.content.reduce((acc: any, currContent: any) => {
            acc = [...acc, ...recursiveElementTraversal(currContent)];
            return acc;
        }, []);

        return [...resultArray, currItem];
    };

    return contents.reduce((acc, ci) => {
        return [...acc, ...recursiveElementTraversal(ci)];
    }, []);
};

export const getElementBounds = (element: Element | Container | JQuery<Element>) => {
    const rawBounds = ($(element) as JQuery)[0].getBoundingClientRect();
    return {
        x: Math.round(rawBounds.x),
        y: Math.round(rawBounds.y),
        left: Math.round(rawBounds.left),
        top: Math.round(rawBounds.top),
        width: Math.round(rawBounds.width),
        height: Math.round(rawBounds.height),
    };
};

export const createWaitFor = (signalsToWait: number, timeout?: number) => {
    let resolve: (result?: object) => void;
    let reject: (error?: Error) => void;
    let signals = 0;

    const t = setTimeout(() => {
        reject();
    }, timeout || 10000);

    const signal = () => {
        signals++;
        if (signals >= signalsToWait) {
            clearTimeout(t);
            resolve();
        }
    };
    const rejectWaitFor = (e: Error) => {
        clearTimeout(t);
        reject(e);
    };
    const promise = new Promise((res, rej) => {
        resolve = res;
        reject = rej;
    });

    return {
        reject: rejectWaitFor,
        signal,
        promise
    };
};

export const getWorkspaceContextName = (id: string): string => `___workspace___${id}`;

export const getRealHeight = (obj: JQuery<HTMLElement>): number => {
    if (!obj || !obj[0]) {
        return 0;
    }
    const clone = obj.clone();
    clone.css("visibility", "hidden");
    $("body").append(clone);
    const height = clone.height();
    clone.remove();
    return height;
};

export const generateWindowId = () => {
    return `g42-${generate()}`;
}

export const isOperationSupported = (operation: ControlArguments["operation"]): boolean => {
    const returnIsNotSupported = (invalidOperation: never): never => {
        return { isSupported: false } as never;
    }
    switch (operation) {
        case "isWindowInWorkspace":
        case "addWindow":
        case "addContainer":
        case "getWorkspaceSnapshot":
        case "openWorkspace":
        case "saveLayout":
        case "exportAllLayouts":
        case "deleteLayout":
        case "getAllWorkspacesSummaries":
        case "maximizeItem":
        case "restoreItem":
        case "closeItem":
        case "setItemTitle":
        case "addWorkspaceChildren":
        case "ejectWindow":
        case "createWorkspace":
        case "forceLoadWindow":
        case "focusItem":
        case "bundleWorkspace":
        case "bundleItem":
        case "getFrameSummary":
        case "moveFrame":
        case "getFrameSnapshot":
        case "getSnapshot":
        case "moveWindowTo":
        case "generateLayout":
        case "ping":
        case "hibernateWorkspace":
        case "resumeWorkspace":
        case "lockWorkspace":
        case "lockContainer":
        case "lockWindow":
        case "resizeItem":
        case "pinWorkspace":
        case "unpinWorkspace":
        case "getWorkspaceIcon":
        case "setWorkspaceIcon":
        case "initFrame":
        case "createFrame":
        case "initFrameFromSnapshot":
        case "getWorkspacesLayouts":
        case "setMaximizationBoundary":
        case "operationCheck":
            return true;
        default:
            return returnIsNotSupported(operation);
    }
}

export const extractWindowSummariesFromSnapshot = (snapshot: GoldenLayout.Config): WindowSummary[] => {
    const result: WindowSummary[] = [];
    const getAllWindows = (item: GoldenLayout.ItemConfig, parentId: string): void => {
        if (item.type === "component") {
            result.push({
                itemId: idAsString(item.id),
                parentId,
                config: item.workspacesConfig as any
            });
            return;
        }

        item.content.forEach((c) => getAllWindows(c, idAsString(item.id)));
    };

    getAllWindows(snapshot as unknown as GoldenLayout.ItemConfig, undefined);

    return result;
}
