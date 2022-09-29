import { Logger } from "../logger";
import type { MessageHandler, Transport } from "../types";

const defaultLogger = new Logger("WindowMessage");

export default class WindowMessageTransport implements Transport {
  private target: Window;

  private logger: Logger;

  private _onMessage: MessageHandler | undefined;

  constructor(target: Window = window, logger: Logger = defaultLogger) {
    this.target = target;
    this.logger = logger;
  }

  connect = (): void => {
    this.target.addEventListener("message", this._onMessageEvent, false);
    this.logger.debug("event listeners registered");
  };

  disconnect = (): void => {
    this.target.removeEventListener("message", this._onMessageEvent, false);
    this.logger.debug("event listeners unregistered");
  };

  _onMessageEvent = (event: MessageEvent): void => {
    if (this._onMessage) {
      this.logger.debug("received message event", event);
      if (
        event.origin !== this.target.location.origin &&
        event.data &&
        typeof event.data === "string"
      ) {
        try {
          const payload = JSON.parse(event.data.toString());

          // TODO: find a better way to ensure message comes from LL
          if (payload.jsonrpc) {
            this.logger.log("received message", payload);
            // FIXME
            // eslint-disable-next-line @typescript-eslint/no-floating-promises
            this._onMessage(payload);
          } else {
            this.logger.debug("not a jsonrpc message");
          }
        } catch (error) {
          this.logger.warn("parse error");
          // FIXME
          // eslint-disable-next-line @typescript-eslint/no-floating-promises
          this._onMessage(error);
        }
      } else {
        this.logger.debug("ignoring message same origin");
      }
    } else {
      this.logger.debug("no handler registered");
    }
  };

  set onMessage(handler: MessageHandler | undefined) {
    this._onMessage = handler;
  }

  get onMessage(): MessageHandler | undefined {
    return this._onMessage;
  }

  send = (response: unknown): Promise<void> => {
    try {
      // @ts-ignore
      if (this.target.ReactNativeWebView) {
        this.logger.log("sending message (ReactNativeWebview)", response);
        // @ts-ignore
        this.target.ReactNativeWebView.postMessage(JSON.stringify(response));
      }
      // @ts-ignore
      else if (this.target.ElectronWebview) {
        this.logger.log("sending message (ElectronWebview)", response);
        // @ts-ignore
        this.target.ElectronWebview.postMessage(JSON.stringify(response));
      } else {
        this.logger.log("sending message", response);
        // @ts-ignore
        this.target.top.postMessage(JSON.stringify(response), "*");
      }
      return Promise.resolve();
    } catch (error) {
      this.logger.error("unexpected error on send", error);
      return Promise.reject(error);
    }
  };
}
