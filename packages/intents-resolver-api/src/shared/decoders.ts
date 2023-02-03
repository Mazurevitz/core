import { Decoder, string, object, optional, oneOf, constant, number, anyJson, array } from "decoder-validate";
import { IntentContext, IntentHandler, IntentRequest, RelativeDirection, SharedContext, WindowSettings } from '../types/glue';
import { ResolverIntentHandler } from '../types/types';

export const nonEmptyStringDecoder: Decoder<string> = string().where((s) => s.length > 0, "Expected a non-empty string");
export const nonNegativeNumberDecoder: Decoder<number> = number().where((num) => num >= 0, "Expected a non-negative number");

export const windowRelativeDirectionDecoder: Decoder<RelativeDirection> = oneOf<"top" | "left" | "right" | "bottom">(
    constant("top"),
    constant("left"),
    constant("right"),
    constant("bottom")
);

export const windowOpenSettingsDecoder: Decoder<WindowSettings | undefined> = optional(object({
    top: optional(number()),
    left: optional(number()),
    width: optional(nonNegativeNumberDecoder),
    height: optional(nonNegativeNumberDecoder),
    context: optional(anyJson()),
    relativeTo: optional(nonEmptyStringDecoder),
    relativeDirection: optional(windowRelativeDirectionDecoder),
    windowId: optional(nonEmptyStringDecoder)
}));

const intentTargetDecoder: Decoder<"startNew" | "reuse" | { app?: string; instance?: string }> = oneOf<"startNew" | "reuse" | { app?: string; instance?: string }>(
    constant("startNew"),
    constant("reuse"),
    object({
        app: optional(nonEmptyStringDecoder),
        instance: optional(nonEmptyStringDecoder)
    })
);

const intentContextDecoder: Decoder<IntentContext> = object({
    type: optional(nonEmptyStringDecoder),
    data: optional(object())
});

export const IntentHandlerDecoder: Decoder<IntentHandler> = object({
    applicationName: nonEmptyStringDecoder,
    applicationTitle: string(),
    applicationDescription: optional(string()),
    applicationIcon: optional(string()),
    type: oneOf<"app" | "instance">(constant("app"), constant("instance")),
    displayName: optional(string()),
    contextTypes: optional(array(nonEmptyStringDecoder)),
    instanceId: optional(string()),
    instanceTitle: optional(string()),
    resultType: optional(string())
})

const intentRequestDecoder: Decoder<IntentRequest> = object({
    intent: nonEmptyStringDecoder,
    target: optional(intentTargetDecoder),
    context: optional(intentContextDecoder),
    options: optional(windowOpenSettingsDecoder),
    handlers: optional(array(IntentHandlerDecoder))
});

const StartContextIntentDecoder: Decoder<string | IntentRequest> = oneOf<string | IntentRequest>(
    nonEmptyStringDecoder,
    intentRequestDecoder
);

export const StartContextDecoder: Decoder<SharedContext> = object({
    intent: StartContextIntentDecoder,
    callerId: nonEmptyStringDecoder,
    methodName: nonEmptyStringDecoder
});

export const ResolverIntentHandlerDecoder: Decoder<ResolverIntentHandler> = object({
    applicationName: string(),
    applicationIcon: optional(string()),
    instanceId: optional(string()),
});
