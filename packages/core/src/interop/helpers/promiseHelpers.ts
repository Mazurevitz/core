/* eslint-disable @typescript-eslint/no-explicit-any */
export const waitFor = async (ms = 0, callback: () => void) => {
    await resolveAfter(ms);
    callback();
};

function resolveAfter(ms = 0): Promise<void> {
    return new Promise((resolve) => setTimeout(() => resolve(), ms));
}

export function rejectAfter<T>(ms = 0, promise: Promise<T>, error?: T): Promise<T> {
    let timeout: any;
    const clearTimeoutIfThere = () => {
        if (timeout) {
            clearTimeout(timeout);
        }
    };
    promise
        .then(() => {
            clearTimeoutIfThere();
        })
        .catch(() => {
            clearTimeoutIfThere();
        });

    return new Promise((resolve, reject) => {
        timeout = setTimeout(() => reject(error), ms);
    });
}
