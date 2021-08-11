import ChaiSpies from "chai-spies";
import chai, { expect, AssertionError } from "chai";
import logger from "../../utils/Logger.mock";
import WindowMock from "../../utils/Window.mock";
import MessageEventMock from "../../utils/MessageEvent.mock";
import WindowMessageTransport from "../../../src/transports/windowMessageTransport";

chai.use(ChaiSpies);

const makeMessageEvent = (
  payload: Record<string, unknown>,
  origin?: string
): MessageEventMock => {
  return new MessageEventMock("TestEvent", {
    data: JSON.stringify(payload),
    origin,
  });
};

describe("windowMessageTransport", () => {
  describe("constructor", () => {
    it("should construct with default window", () => {
      // @ts-ignore: testing the default value
      global.window = { name: "default" };
      const transport = new WindowMessageTransport();
      // @ts-ignore: accessing private property
      expect(transport.target).to.be.eq(global.window);
    });

    it("should construct with the provided target", () => {
      const providedWindow = { name: "test" };
      // @ts-ignore: testing the default value
      const transport = new WindowMessageTransport(providedWindow);
      // @ts-ignore: accessing private property
      expect(transport.target).to.deep.eq({ name: "test" });
    });
  });

  describe("connect", () => {
    it("should succeed to connect with a window + document", (done) => {
      const window = new WindowMock();
      // @ts-ignore Mocking Window
      const transport = new WindowMessageTransport(window, logger);

      let spyCalled = 0;
      chai.spy.on(transport, "_onMessageEvent", () => {
        spyCalled += 1;

        // Spy should be called 2 times
        // 1 time for the listener of Window and 1 time for the one of Document
        if (spyCalled === 2) {
          done();
        }
      });

      transport.connect();
      window.MOCK_emit("connected");
    });

    it("should succeed to connect with a window only", (done) => {
      const window = new WindowMock({ withDocument: false });
      // @ts-ignore Mocking Window
      const transport = new WindowMessageTransport(window, logger);

      chai.spy.on(transport, "_onMessageEvent", () => {
        done();
      });

      transport.connect();
      window.MOCK_emit("connected");
    });
  });

  describe("disconnect", () => {
    it("should succeed to disconnect with a window and document", (done) => {
      const window = new WindowMock();
      // @ts-ignore Mocking Window
      const transport = new WindowMessageTransport(window, logger);

      chai.spy.on(transport, "_onMessageEvent");

      transport.disconnect();
      window.MOCK_emit("connected");

      setTimeout(() => {
        expect(
          transport._onMessageEvent,
          "WindowMessageTransport._onMessageEvent should not have been called \n"
        ).to.not.have.been.called();
        done();
      });
    });

    it("should connect with a window only", (done) => {
      const window = new WindowMock({ withDocument: false });
      // @ts-ignore Mocking Window
      const transport = new WindowMessageTransport(window, logger);

      chai.spy.on(transport, "_onMessageEvent");

      transport.disconnect();
      window.MOCK_emit("connected");

      setTimeout(() => {
        expect(
          transport._onMessageEvent,
          "WindowMessageTransport._onMessageEvent should not have been called \n"
        ).to.not.have.been.called();
        done();
      });
    });
  });

  describe("_onMessageEvent", () => {
    it("should succeed to catch a JSON RPC payload on message", () => {
      const window = new WindowMock();
      // @ts-ignore
      const transport = new WindowMessageTransport(window, logger);
      transport.connect();

      let onMessageResponse: unknown;
      transport.onMessage = (payload) =>
        new Promise(() => {
          onMessageResponse = payload;
        });

      const payload = {
        jsonrpc: "hello",
      };
      const message = makeMessageEvent(payload);
      window.MOCK_emit(message);

      setTimeout(() => {
        expect(onMessageResponse).to.deep.equal(payload);
      });
    });

    it("should log if no onMessage handler", () => {
      const spy = chai.spy.on(logger, "debug") as ChaiSpies.Spy;
      const window = new WindowMock();
      // @ts-ignore
      const transport = new WindowMessageTransport(window, logger);
      transport.connect();

      const payload = {
        jsonrpc: "hello",
      };
      const message = makeMessageEvent(payload);
      window.MOCK_emit(message);

      expect(spy).to.have.been.called.with("no handler registered");
      chai.spy.restore(spy);
    });

    it("should log if message event has the same origin as window", () => {
      const spy = chai.spy.on(logger, "debug") as ChaiSpies.Spy;
      const window = new WindowMock();
      // @ts-ignore
      const transport = new WindowMessageTransport(window, logger);
      transport.connect();

      let onMessageResponse: unknown;
      transport.onMessage = (payload) =>
        new Promise(() => {
          onMessageResponse = payload;
        });

      const payload = {
        jsonrpc: "hello",
      };
      const message = makeMessageEvent(payload, "mock-window.ledger");
      window.MOCK_emit(message);

      expect(spy).to.have.been.called.with("ignoring message same origin");
      expect(onMessageResponse).to.be.eq(undefined);
      chai.spy.restore(spy);
    });

    it("should log if message event's data has no json-rpc key", () => {
      const spy = chai.spy.on(logger, "debug") as ChaiSpies.Spy;
      const window = new WindowMock();
      // @ts-ignore
      const transport = new WindowMessageTransport(window, logger);
      transport.connect();

      let onMessageResponse: unknown;
      transport.onMessage = (payload) =>
        new Promise(() => {
          onMessageResponse = payload;
        });

      const payload = {
        test: "hello",
      };
      const message = makeMessageEvent(payload);
      window.MOCK_emit(message);

      expect(spy).to.have.been.called.with("not a jsonrpc message");
      expect(onMessageResponse).to.be.eq(undefined);
      chai.spy.restore(spy);
    });

    it("should log and respond error when it throws", () => {
      const spy = chai.spy.on(logger, "warn") as ChaiSpies.Spy;
      const window = new WindowMock();
      // @ts-ignore
      const transport = new WindowMessageTransport(window, logger);
      transport.connect();

      let onMessageResponse: unknown;
      transport.onMessage = (payload) =>
        new Promise(() => {
          onMessageResponse = payload;
        });

      // eslint-disable-next-line @typescript-eslint/unbound-method
      const logBackup = logger.log;
      // make logger.log throw to trigger the try catch
      logger.log = () => {
        throw new Error();
      };

      const payload = {
        jsonrpc: "hello",
      };
      const message = makeMessageEvent(payload);
      window.MOCK_emit(message);

      expect(spy).to.have.been.called.with("parse error");
      expect(onMessageResponse).to.be.an("error");

      chai.spy.restore(spy);
      logger.log = logBackup;
    });
  });

  describe("onMessage", () => {
    it("should be settable and gettable", () => {
      const window = new WindowMock();
      // @ts-ignore
      const transport = new WindowMessageTransport(window, logger);

      const onMessagePromise = (): Promise<void> => new Promise(() => {});
      transport.onMessage = onMessagePromise;

      expect(transport.onMessage).to.be.eq(onMessagePromise);
    });
  });

  describe("send", () => {
    it("should postMessage react native webview", async () => {
      const window = new WindowMock({ native: true });
      // @ts-ignore
      const transport = new WindowMessageTransport(window, logger);
      transport.connect();

      const spy = chai.spy.on(
        // @ts-ignore
        window.ReactNativeWebView,
        "postMessage"
      ) as ChaiSpies.Spy;

      await transport.send({ test: "hello" });

      expect(spy).to.have.been.called.with(JSON.stringify({ test: "hello" }));
      chai.spy.restore(spy);
    });

    it("should postMessage to electron web view", async () => {
      const window = new WindowMock({ electron: true });
      // @ts-ignore
      const transport = new WindowMessageTransport(window, logger);
      transport.connect();

      const spy = chai.spy.on(
        // @ts-ignore
        window.ElectronWebview,
        "postMessage"
      ) as ChaiSpies.Spy;

      await transport.send({ test: "hello" });

      expect(spy).to.have.been.called.with(JSON.stringify({ test: "hello" }));
      chai.spy.restore(spy);
    });

    it("should postMessage to top", async () => {
      const window = new WindowMock({ top: true });
      // @ts-ignore
      const transport = new WindowMessageTransport(window, logger);
      transport.connect();

      // @ts-ignore
      const spy = chai.spy.on(window.top, "postMessage") as ChaiSpies.Spy;

      await transport.send({ test: "hello" });

      expect(spy).to.have.been.called.with(JSON.stringify({ test: "hello" }));
      chai.spy.restore(spy);
    });

    it("should throw an error on send", async () => {
      const window = new WindowMock({ top: true });
      // @ts-ignore
      const transport = new WindowMessageTransport(window, logger);
      transport.connect();

      const testError = new Error("test");
      // eslint-disable-next-line @typescript-eslint/unbound-method
      const logBackup = logger.log;
      logger.log = () => {
        throw testError;
      };

      try {
        await transport.send({ test: "hello" });
        expect.fail();
      } catch (error) {
        expect(error).to.not.be.an.instanceOf(AssertionError);
        expect(error).to.be.eq(testError);
      } finally {
        logger.log = logBackup;
      }
    });
  });
});
