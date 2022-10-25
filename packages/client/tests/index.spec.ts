import { describe, expect, it, jest } from "@jest/globals";
import LedgerLivePlatformSDK, { WindowMessageTransport } from "../src";
import logger from "./utils/Logger.mock";

describe("LedgerLivePlatformSDK/index.ts", () => {
  describe("constructor", () => {
    it("should construct with default logger", () => {
      const transport = new WindowMessageTransport(window, logger);
      const SDK = new LedgerLivePlatformSDK(transport);

      // @ts-ignore
      expect(SDK.logger).not.toBe(undefined);
    });

    it("should construct with a specific logger", () => {
      const transport = new WindowMessageTransport(window, logger);
      const SDK = new LedgerLivePlatformSDK(transport, logger);

      // @ts-ignore
      expect(SDK.logger).toEqual(logger);
    });
  });

  describe("connect", () => {
    it("should not throw and set onMessage of transport", () => {
      const transport = new WindowMessageTransport(window, logger);
      const SDK = new LedgerLivePlatformSDK(transport, logger);

      expect(() => {
        SDK.connect();
      }).not.toThrow();
      expect(transport.onMessage).not.toBe(undefined);
    });
  });

  describe("disconnect", () => {
    it("should succeed to disconnect transport and delete jsonrpc property", () => {
      const transport = new WindowMessageTransport(window, logger);
      const SDK = new LedgerLivePlatformSDK(transport, logger);
      transport.disconnect = jest.fn();

      SDK.connect();
      SDK.disconnect();

      expect(transport.disconnect).toHaveBeenCalled();
      // @ts-ignore
      expect(SDK.serverAndClient).toBe(undefined);
    });
  });

  describe("JSON-RPC Requests", () => {
    let SDK: LedgerLivePlatformSDK;

    beforeEach(() => {
      const transport = new WindowMessageTransport(window, logger);
      SDK = new LedgerLivePlatformSDK(transport, logger);
    });

    describe("_request", () => {
      it("should throw if SDK is not connected", async () => {
        // @ts-ignore
        await expect(SDK._request("test")).rejects.toThrow(
          "Ledger Live API not connected"
        );
      });

      it("should return an expected result", async () => {
        SDK.connect();
        // @ts-ignore
        SDK.serverAndClient.request = jest.fn(() => "ok");
        // @ts-ignore
        const result = await SDK._request("test");
        expect(result).toBe("ok");
      });

      it("should throw if JSON-RPC throws", async () => {
        SDK.connect();
        // @ts-ignore
        SDK.serverAndClient.request = jest.fn(() => {
          throw new Error("TestError");
        });
        // @ts-ignore
        await expect(SDK._request("test")).rejects.toThrow("TestError");
      });
    });
  });
});
