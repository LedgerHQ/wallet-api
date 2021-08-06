import { EventEmitter } from "events";

type UpdateEventListenerSignature = (
  event: string,
  listener: () => void,
  opts?: { once: boolean }
) => void;

type WindowMockConstructorParams = {
  eventListener?: EventEmitter;
  withDocument?: boolean;
  electron?: boolean;
  native?: boolean;
  top?: boolean;
};

type PostMessagable = {
  postMessage: typeof postMessage;
};

const postMessage = (message: string): string => {
  return message;
};

export default class WindowMock {
  private eventListener: EventEmitter;

  public ReactNativeWebView?: PostMessagable;

  public ElectronWebview?: PostMessagable;

  public top?: PostMessagable;

  private document?: {
    addEventListener: UpdateEventListenerSignature;
    removeEventListener: UpdateEventListenerSignature;
  };

  private _location: string;

  constructor({
    eventListener = new EventEmitter(),
    withDocument = true,
    electron = false,
    native = false,
    top = false,
  }: WindowMockConstructorParams = {}) {
    this._location = "mock-window.ledger";
    this.eventListener = eventListener;

    if (withDocument) {
      this.document = {
        addEventListener: (event, listener, opts) => {
          this.addEventListener(event, listener, opts);
        },
        removeEventListener: (event, listener, opts) => {
          this.removeEventListener(event, listener, opts);
        },
      };
    }

    if (electron) {
      this.ElectronWebview = {
        postMessage,
      };
    }

    if (native) {
      this.ReactNativeWebView = {
        postMessage,
      };
    }

    if (top) {
      this.top = {
        postMessage,
      };
    }
  }

  MOCK_emit(payload: unknown): void {
    this.eventListener.emit("message", payload);
  }

  addEventListener: UpdateEventListenerSignature = (event, listener, opts) => {
    if (opts?.once) {
      this.eventListener.once(event, listener);
    } else {
      this.eventListener.on(event, listener);
    }
  };

  removeEventListener: UpdateEventListenerSignature = (event, listener) => {
    this.eventListener.off(event, listener);
  };

  get location(): { origin: string } {
    return { origin: this._location };
  }
}
