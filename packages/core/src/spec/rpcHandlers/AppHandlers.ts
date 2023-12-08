export type UnknownCustomEvent = Record<`event.${string}`, undefined>;

export type AppHandlers<GenericCustomEvent = UnknownCustomEvent> = {
  "event.account.updated": undefined;
} & GenericCustomEvent;
