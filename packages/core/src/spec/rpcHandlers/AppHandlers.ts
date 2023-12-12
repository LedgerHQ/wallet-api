// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type UnknownCustomEvent = Record<`event.${string}`, any>;

export type AppHandlers<GenericCustomEvent = UnknownCustomEvent> = {
  "event.account.updated": undefined;
} & GenericCustomEvent;
