import chai, { expect, AssertionError } from "chai";
import BigNumber from "bignumber.js";
import ChaiSpies from "chai-spies";
import { before } from "mocha";
import logger from "../../utils/Logger.mock";
import WindowMock from "../../utils/Window.mock";
import {
  Account,
  Currency,
  CurrencyType,
  ExchangeDeviceTxId,
  ExchangeType,
  FeesLevel,
} from "../../../src/types";
import MessageEventMock from "../../utils/MessageEvent.mock";
import LedgerLivePlatformSDK from "../../../src/LedgerLivePlatformSDK";
import WindowMessageTransport from "../../../src/transports/windowMessageTransport";
import {
  BitcoinTransaction,
  FAMILIES,
  RawAccount,
  RawSignedTransaction,
} from "../../../src";

chai.use(ChaiSpies);

const date = new Date();

const makeMessageEvent = (
  payload: Record<string, unknown>,
  origin?: string
): MessageEventMock => {
  return new MessageEventMock("TestEvent", {
    data: JSON.stringify(payload),
    origin,
  });
};

describe("LedgerLivePlatformSDK/index.ts", () => {
  describe("constructor", () => {
    it("should construct with default logger", () => {
      const window = new WindowMock();
      // @ts-ignore
      const transport = new WindowMessageTransport(window, logger);
      const SDK = new LedgerLivePlatformSDK(transport);

      // @ts-ignore
      expect(SDK.logger).to.not.eq(undefined);
    });

    it("should construct with a specific logger", () => {
      const window = new WindowMock();
      // @ts-ignore
      const transport = new WindowMessageTransport(window, logger);
      const SDK = new LedgerLivePlatformSDK(transport, logger);

      // @ts-ignore
      expect(SDK.logger).to.eq(logger);
    });
  });

  describe("connect", () => {
    it("should not throw and set onMessage of transport", () => {
      const window = new WindowMock();
      // @ts-ignore
      const transport = new WindowMessageTransport(window, logger);
      const SDK = new LedgerLivePlatformSDK(transport, logger);

      expect(() => {
        SDK.connect();
      }).to.not.throw();
      expect(transport.onMessage).to.not.eq(undefined);
    });
  });

  describe("disconnect", () => {
    it("should succeed to disconnect transport and delete jsonrpc property", () => {
      const window = new WindowMock();
      // @ts-ignore
      const transport = new WindowMessageTransport(window, logger);
      const SDK = new LedgerLivePlatformSDK(transport, logger);
      const spy = chai.spy.on(transport, "disconnect") as ChaiSpies.Spy;

      SDK.connect();
      SDK.disconnect();

      expect(spy).to.have.been.called();
      // @ts-ignore
      expect(SDK.serverAndClient).to.be.eq(undefined);
    });
  });

  describe("JSON-RPC Requests", () => {
    let window: WindowMock;
    let SDK: LedgerLivePlatformSDK;

    beforeEach(() => {
      window = new WindowMock({ top: true });
      // @ts-ignore
      const transport = new WindowMessageTransport(window, logger);
      SDK = new LedgerLivePlatformSDK(transport, logger);
    });

    afterEach(() => {
      chai.spy.restore();
    });

    describe("_request", () => {
      it("should throw if SDK is not connected", async () => {
        try {
          // @ts-ignore
          await SDK._request("test");
          expect.fail();
        } catch (error) {
          expect(error).to.not.be.an.instanceOf(AssertionError);
          expect(error).to.have.property(
            "message",
            "Ledger Live API not connected"
          );
        }
      });

      it("should return an expected result", async () => {
        SDK.connect();

        // @ts-ignore
        chai.spy.on(SDK.serverAndClient, "request", () => "ok");

        // @ts-ignore
        const result = await SDK._request("test");

        expect(result).to.be.eq("ok");
      });

      it("should throw if JSON-RPC throws", async () => {
        const window = new WindowMock();
        // @ts-ignore
        const transport = new WindowMessageTransport(window, logger);
        const SDK = new LedgerLivePlatformSDK(transport, logger);
        SDK.connect();

        // @ts-ignore
        chai.spy.on(SDK.serverAndClient, "request", () => {
          throw new Error("TestError");
        });

        try {
          // @ts-ignore
          await SDK._request("test");
        } catch (error) {
          expect(error).to.not.be.an.instanceOf(AssertionError);
          expect(error).to.have.property("message", "TestError");
        }
      });
    });

    describe("broadcastSignedTransaction", () => {
      it("should succeed to broadcast a signed transaction", async () => {
        SDK.connect();

        const optimisticOperationHash = "optimisticOperation.hash";
        const accountId = "accountId";
        const signedTransaction: RawSignedTransaction = {
          operation: null,
          signature: "signature",
          expirationDate: null,
        };

        /**
         * JSON-RPC Event response object shape is available here:
         * @see https://www.jsonrpc.org/specification#response_object
         */
        const e = makeMessageEvent({
          id: 1, // This assumes that the event request object id was also 1
          jsonrpc: "2.0",
          result: optimisticOperationHash,
        });
        // @ts-ignore
        const spy = chai.spy.on(window.top, "postMessage", () => {
          window.MOCK_emit(e);
        }) as ChaiSpies.Spy;

        const res = await SDK.broadcastSignedTransaction(
          accountId,
          signedTransaction
        );
        expect(res).to.eq(optimisticOperationHash);
        expect(spy).to.be.have.been.called.with(
          `{"jsonrpc":"2.0","method":"transaction.broadcast","params":{"accountId":"${accountId}","signedTransaction":${JSON.stringify(
            signedTransaction
          )}},"id":1}`
        );
      });
    });

    describe("listAccounts", () => {
      it("should succeed to list accounts ", async () => {
        SDK.connect();

        const dummyAccountList: Array<Account> = [
          {
            id: "test-id",
            name: "name",
            address: "address",
            currency: "bitcoin",
            balance: new BigNumber(0),
            spendableBalance: new BigNumber(0),
            blockHeight: 0,
            lastSyncDate: date,
          },
        ];

        /**
         * JSON-RPC Event response object shape is available here:
         * @see https://www.jsonrpc.org/specification#response_object
         */
        const e = makeMessageEvent({
          id: 1, // This assumes that the event request object id was also 1
          jsonrpc: "2.0",
          result: dummyAccountList,
        });
        // @ts-ignore
        const spy = chai.spy.on(window.top, "postMessage", () => {
          window.MOCK_emit(e);
        }) as ChaiSpies.Spy;

        const res = await SDK.listAccounts();

        console.log({
          res,
          dummyAccountList,
        });
        expect(res).to.deep.eq(dummyAccountList);
        expect(spy).to.be.have.been.called.with(
          '{"jsonrpc":"2.0","method":"account.list","params":{},"id":1}'
        );
      });
    });

    describe("listCurrencies", () => {
      it("should succeed to list currencies", async () => {
        SDK.connect();

        const dummyCurrencyList: Array<Currency> = [
          {
            type: CurrencyType.CryptoCurrency,
            color: "color",
            ticker: "ticker",
            id: "id",
            name: "name",
            family: "bitcoin",
            units: [
              {
                name: "name",
                code: "code",
                magnitude: 1,
              },
            ],
          },
        ];

        /**
         * JSON-RPC Event response object shape is available here:
         * @see https://www.jsonrpc.org/specification#response_object
         */
        const e = makeMessageEvent({
          id: 1, // This assumes that the event request object id was also 1
          jsonrpc: "2.0",
          result: dummyCurrencyList,
        });
        // @ts-ignore
        const spy = chai.spy.on(window.top, "postMessage", () => {
          window.MOCK_emit(e);
        }) as ChaiSpies.Spy;

        const res = await SDK.listCurrencies();
        expect(res).to.deep.eq(dummyCurrencyList);
        expect(spy).to.be.have.been.called.with(
          '{"jsonrpc":"2.0","method":"currency.list","params":{},"id":1}'
        );
      });
    });

    describe("receive", () => {
      it("should succeed to get an account address", async () => {
        SDK.connect();

        const freshAddress: Account["address"] = "0xL3dG3r";
        /**
         * JSON-RPC Event response object shape is available here:
         * @see https://www.jsonrpc.org/specification#response_object
         */
        const e = makeMessageEvent({
          id: 1, // This assumes that the event request object id was also 1
          jsonrpc: "2.0",
          result: freshAddress,
        });
        // @ts-ignore
        const spy = chai.spy.on(window.top, "postMessage", () => {
          window.MOCK_emit(e);
        }) as ChaiSpies.Spy;

        const res = await SDK.receive("accountId");
        expect(res).to.be.eq(freshAddress);
        expect(spy).to.be.have.been.called.with(
          '{"jsonrpc":"2.0","method":"account.receive","params":{"accountId":"accountId"},"id":1}'
        );
      });
    });

    describe("requestAccount", () => {
      const rawAccount: RawAccount = {
        id: "id",
        name: "name",
        address: "address",
        currency: "currency",
        balance: "0",
        spendableBalance: "0",
        blockHeight: 0,
        lastSyncDate: date.toISOString(),
      };

      it("should succeed to request an account with params", async () => {
        SDK.connect();

        /**
         * JSON-RPC Event response object shape is available here:
         * @see https://www.jsonrpc.org/specification#response_object
         */
        const e = makeMessageEvent({
          id: 1, // This assumes that the event request object id was also 1
          jsonrpc: "2.0",
          result: rawAccount,
        });
        // @ts-ignore
        const spy = chai.spy.on(window.top, "postMessage", () => {
          window.MOCK_emit(e);
        }) as ChaiSpies.Spy;

        const res = await SDK.requestAccount({
          currencies: ["bitcoin"],
          allowAddAccount: false,
        });
        expect(res).to.deep.eq({
          id: "id",
          name: "name",
          address: "address",
          currency: "currency",
          balance: new BigNumber("0"),
          spendableBalance: new BigNumber("0"),
          blockHeight: 0,
          lastSyncDate: date,
        });
        expect(spy).to.be.have.been.called.with(
          '{"jsonrpc":"2.0","method":"account.request","params":{"currencies":["bitcoin"],"allowAddAccount":false},"id":1}'
        );
      });

      it("should succeed to request an account without params", async () => {
        SDK.connect();

        /**
         * JSON-RPC Event response object shape is available here:
         * @see https://www.jsonrpc.org/specification#response_object
         */
        const e = makeMessageEvent({
          id: 1, // This assumes that the event request object id was also 1
          jsonrpc: "2.0",
          result: rawAccount,
        });
        // @ts-ignore
        const spy = chai.spy.on(window.top, "postMessage", () => {
          window.MOCK_emit(e);
        }) as ChaiSpies.Spy;

        const res = await SDK.requestAccount();
        expect(res).to.deep.eq({
          id: "id",
          name: "name",
          address: "address",
          currency: "currency",
          balance: new BigNumber("0"),
          spendableBalance: new BigNumber("0"),
          blockHeight: 0,
          lastSyncDate: date,
        });
        expect(spy).to.be.have.been.called.with(
          '{"jsonrpc":"2.0","method":"account.request","params":{},"id":1}'
        );
      });
    });

    describe("signTransaction", () => {
      it("should succeed to sign a transaction", async () => {
        SDK.connect();

        const accountId = "accountId";
        const transaction: BitcoinTransaction = {
          family: FAMILIES.BITCOIN,
          amount: new BigNumber(0),
          recipient: "recipient",
        };
        const rawSignedTransaction: RawSignedTransaction = {
          operation: null,
          signature: "signature",
          expirationDate: date.toISOString(),
        };

        /**
         * JSON-RPC Event response object shape is available here:
         * @see https://www.jsonrpc.org/specification#response_object
         */
        const e = makeMessageEvent({
          id: 1, // This assumes that the event request object id was also 1
          jsonrpc: "2.0",
          result: rawSignedTransaction,
        });
        // @ts-ignore
        const spy = chai.spy.on(window.top, "postMessage", () => {
          window.MOCK_emit(e);
        }) as ChaiSpies.Spy;

        const res = await SDK.signTransaction(accountId, transaction);
        expect(res).to.deep.eq(rawSignedTransaction);
        expect(spy).to.be.have.been.called.with(
          `{"jsonrpc":"2.0","method":"transaction.sign","params":{"accountId":"${accountId}","transaction":${JSON.stringify(
            transaction
          )},"params":{}},"id":1}`
        );
      });
    });

    describe("startExchange", () => {
      it("should succeed to init an exchange", async () => {
        SDK.connect();

        const exchangeType = ExchangeType.SWAP;

        const nonce: ExchangeDeviceTxId = "nonce";

        /**
         * JSON-RPC Event response object shape is available here:
         * @see https://www.jsonrpc.org/specification#response_object
         */
        const e = makeMessageEvent({
          id: 1, // This assumes that the event request object id was also 1
          jsonrpc: "2.0",
          result: nonce,
        });
        // @ts-ignore
        const spy = chai.spy.on(window.top, "postMessage", () => {
          window.MOCK_emit(e);
        }) as ChaiSpies.Spy;

        const res = await SDK.startExchange({ exchangeType });

        expect(res).to.eq(nonce);
        expect(spy).to.be.have.been.called.with(
          `{"jsonrpc":"2.0","method":"exchange.start","params":{"exchangeType":${exchangeType}},"id":1}`
        );
      });
    });

    describe("completeExchange", () => {
      it("should succeed to complete a SWAP exchange", async () => {
        SDK.connect();

        const exchangeType = ExchangeType.SWAP;

        const recipientAccountId = "recipientAccountId";

        const tx: BitcoinTransaction = {
          family: FAMILIES.BITCOIN,
          amount: new BigNumber(10),
          recipient: recipientAccountId,
        };

        const completeExchangeParams = {
          provider: "PROVIDER",
          fromAccountId: "FROM_ACCOUNT_ID",
          toAccountId: recipientAccountId,
          transaction: tx,
          binaryPayload: Buffer.from("payload", "utf-8"),
          signature: Buffer.from("signature", "utf-8"),
          feesStrategy: FeesLevel.Fast,
          exchangeType,
        };

        const rawSignedTransaction: RawSignedTransaction = {
          operation: null,
          signature: "signature",
          expirationDate: date.toISOString(),
        };

        /**
         * JSON-RPC Event response object shape is available here:
         * @see https://www.jsonrpc.org/specification#response_object
         */
        const e = makeMessageEvent({
          id: 1, // This assumes that the event request object id was also 1
          jsonrpc: "2.0",
          result: rawSignedTransaction,
        });
        // @ts-ignore
        const spy = chai.spy.on(window.top, "postMessage", () => {
          window.MOCK_emit(e);
        }) as ChaiSpies.Spy;

        const res = await SDK.completeExchange(completeExchangeParams);

        expect(res).to.deep.eq({
          operation: null,
          expirationDate: date.toISOString(),
          signature: "signature",
        });

        expect(spy).to.be.have.been.called.with(
          `{"jsonrpc":"2.0","method":"exchange.complete","params":${JSON.stringify(
            {
              ...completeExchangeParams,
              binaryPayload:
                completeExchangeParams.binaryPayload.toString("hex"),
              signature: completeExchangeParams.signature.toString("hex"),
            }
          )},"id":1}`
        );
      });

      it("should throw if no 'toAccountId' provided and exchange type is SWAP", async () => {
        SDK.connect();

        const exchangeType = ExchangeType.SWAP;

        const recipientAccountId = "recipientAccountId";

        const tx: BitcoinTransaction = {
          family: FAMILIES.BITCOIN,
          amount: new BigNumber(10),
          recipient: recipientAccountId,
        };

        const completeExchangeParams = {
          provider: "PROVIDER",
          fromAccountId: "FROM_ACCOUNT_ID",
          transaction: tx,
          binaryPayload: Buffer.from("payload", "utf-8"),
          signature: Buffer.from("signature", "utf-8"),
          feesStrategy: FeesLevel.Fast,
          exchangeType,
        };

        try {
          await SDK.completeExchange(completeExchangeParams);
          expect.fail();
        } catch (error) {
          expect(error).to.not.be.an.instanceOf(AssertionError);
          expect(error).to.have.property(
            "message",
            "Missing parameter 'toAccountId' for a swap operation"
          );
        }
      });
    });
  });

  describe("Missing implementations", () => {
    let SDK: LedgerLivePlatformSDK;

    before(() => {
      const window = new WindowMock();
      // @ts-ignore
      const transport = new WindowMessageTransport(window, logger);
      SDK = new LedgerLivePlatformSDK(transport, logger);
    });

    describe("bridgeApp", () => {
      it("should throw", async () => {
        try {
          // @ts-ignore
          await SDK.bridgeApp();
          expect.fail();
        } catch (error) {
          expect(error).to.not.be.an.instanceOf(AssertionError);
          expect(error).to.have.property(
            "message",
            "Function is not implemented yet"
          );
        }
      });
    });

    describe("bridgeDashboard", () => {
      it("should throw", async () => {
        try {
          // @ts-ignore
          await SDK.bridgeDashboard();
          expect.fail();
        } catch (error) {
          expect(error).to.not.be.an.instanceOf(AssertionError);
          expect(error).to.have.property(
            "message",
            "Function is not implemented yet"
          );
        }
      });
    });

    describe("getLastConnectedDeviceInfo", () => {
      it("should throw", async () => {
        try {
          // @ts-ignore
          await SDK.getLastConnectedDeviceInfo();
          expect.fail();
        } catch (error) {
          expect(error).to.not.be.an.instanceOf(AssertionError);
          expect(error).to.have.property(
            "message",
            "Function is not implemented yet"
          );
        }
      });
    });

    describe("listApps", () => {
      it("should throw", async () => {
        try {
          // @ts-ignore
          await SDK.listApps();
          expect.fail();
        } catch (error) {
          expect(error).to.not.be.an.instanceOf(AssertionError);
          expect(error).to.have.property(
            "message",
            "Function is not implemented yet"
          );
        }
      });
    });

    describe("synchronizeAccount", () => {
      it("should throw", async () => {
        try {
          // @ts-ignore
          await SDK.synchronizeAccount();
          expect.fail();
        } catch (error) {
          expect(error).to.not.be.an.instanceOf(AssertionError);
          expect(error).to.have.property(
            "message",
            "Function is not implemented yet"
          );
        }
      });
    });
  });
});
