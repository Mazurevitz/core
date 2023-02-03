import { ResolverIntentHandlerDecoder } from '../shared/decoders';
import { Intent, IntentRequest, InvocationResult, UnsubscribeFunction } from '../types/glue';
import { IntentsResolver, ResolverIntentHandler } from '../types/types';
import { GlueController } from './glue';

export class MainController {
    constructor(private readonly glueController: GlueController) { }

    public toApi(): IntentsResolver {
        const api = {
            intent: this.glueController.intent,
            sendResponse: this.sendResponse.bind(this),
            onHandlerAdded: this.onHandlerAdded.bind(this),
            onHandlerRemoved: this.onHandlerRemoved.bind(this),
        };

        return Object.freeze(api) as IntentsResolver;
    }

    private async sendResponse(args: ResolverIntentHandler): Promise<InvocationResult | undefined> {
        const handler = ResolverIntentHandlerDecoder.runWithException(args);

        if (!handler.applicationName && !handler.instanceId) {
            throw new Error(`Handler must have either applicationName or instanceId property`);
        }

        return this.glueController.sendInteropMethodResponse(handler);
    }

    private onHandlerAdded(callback: (handler: ResolverIntentHandler) => void): UnsubscribeFunction {
        // target: startNew => subscribe only for apps handling the raised intent
        if ((this.glueController.intent as IntentRequest).target === "startNew") {
            return this.glueController.subscribeOnAppAdded(callback);
        }

        // target: undefined => show apps and instances
        // target: reuse => show instances and apps with NO running instances
        const unsubFromAppAdded = this.glueController.subscribeOnAppAdded(callback);
        const unsubFromServerMethodAdded = this.glueController.subscribeForServerMethodAdded(callback);

        return () => {
            unsubFromAppAdded();
            unsubFromServerMethodAdded();
        }
    }

    private onHandlerRemoved(callback: (handler: ResolverIntentHandler) => void): UnsubscribeFunction {
        // target: startNew => subscribe only for apps handling the raised intent
        if ((this.glueController.intent as IntentRequest).target === "startNew") {
            return this.glueController.subscribeOnAppRemoved(callback);
        }

        // target: undefined => apps and instances
        // target: reuse => instances and apps with NO running instances
        const unsubFromAppRemoved = this.glueController.subscribeOnAppRemoved(callback);
        const unsubFromServerMethodRemoved = this.glueController.subscribeForServerMethodRemoved(callback);


        return () => {
            unsubFromAppRemoved();
            unsubFromServerMethodRemoved();
        }
    }
}
