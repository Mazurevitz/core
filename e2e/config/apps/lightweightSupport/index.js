const controlMethodName = 'G42Core.E2E.Lightweight.Control';

/* { [intentName: string]: Listener } */
let intentListeners = {};

const raiseIntent = async ({ intent }, success, error) => {
    try {
        await glue.intents.raise(intent);
        success();
    } catch (err) {
        error(err);
    }
};

const addIntentListener = async({ intent }, success, error) => {
    try {
        const listener = await glue.intents.addIntentListener(intent, (context) => {
            return context;
        });

        intentListeners[intent] = listener;

        success();
    } catch (err) {
        error(err)
    }
};

const registerIntent = async({ intent }, success, error) => {
    try {
        const listener = await glue.intents.register(intent, (context) => {
            return context;
        });

        intentListeners[intent] = listener;

        success();
    } catch (err) {
        error(err);
    }
}

const unregisterIntent = async({ intent }, success, error) => {
    const listener = intentListeners[intent];

    if (!listener) {
        error(`No intent listener for intent ${intent}`);
    }

    try {
        listener.unsubscribe();
        success();
    } catch (err) {
        error(err);
    }
};

const operations = [
    { name: "raiseIntent", execute: raiseIntent },
    { name: "addIntentListener", execute: addIntentListener },
    { name: "registerIntent", execute: registerIntent },
    { name: "unregisterIntent", execute: unregisterIntent }
]

const handleControl = (args, _, success, error) => {
    const operation = args.operation;
    const params = args.params;

    const foundOperation = operations.find((op) => op.name === operation);

    if (!foundOperation) {
        error(`Unrecognized operation: ${operation}`);
        return;
    }

    foundOperation.execute(params, success, error);
};

const glueConfig = {
    intents: {
        enableIntentsResolverUI: false
    }
};

GlueWeb(glueConfig)
    .then((glue) => {
        window.glue = glue;

        return glue.interop.registerAsync(controlMethodName, handleControl);
    })
    .catch(console.error);