/* eslint-disable max-classes-per-file */
import {
  CustomModule,
  WalletAPIClient,
  defaultLogger,
} from "@ledgerhq/wallet-api-client";
import { BitcoinTransaction, schemaFamilies } from "@ledgerhq/wallet-api-core";
import { customWrapper } from "@ledgerhq/wallet-api-server";
import BigNumber from "bignumber.js";
import { getSimulatorTransport, profiles } from "../src";

function createBitcoinTx(): BitcoinTransaction {
  return {
    family: schemaFamilies.enum.bitcoin,
    amount: new BigNumber(0),
    recipient: profiles.STANDARD.accounts[0]!.address,
  };
}

type CustomLogHandlersType = {
  "custom.log": (message: string) => Promise<{ res: "hello" }>;
};
const CustomLogHandlers = {
  // Handler server
  "custom.log": customWrapper<
    Parameters<CustomLogHandlersType["custom.log"]>[0],
    ReturnType<CustomLogHandlersType["custom.log"]>
  >((message) => {
    console.log(message);
    return Promise.resolve({ res: "hello" });
  }),
} as const;

// Module client
class CustomLog extends CustomModule {
  log(message: string) {
    return this.request<
      Parameters<CustomLogHandlersType["custom.log"]>[0],
      ReturnType<CustomLogHandlersType["custom.log"]>
    >("custom.log", message);
  }
}

type CustomLog2HandlersType = {
  "custom.log2": (params: { message: string }) => { res: string };
};

const CustomLog2Handlers = {
  // Handler server
  "custom.log2": customWrapper<
    Parameters<CustomLog2HandlersType["custom.log2"]>[0],
    ReturnType<CustomLog2HandlersType["custom.log2"]>
  >((params) => {
    console.log(params);
    return { res: params?.message ?? "" };
  }),
} as const;

class CustomLog2 extends CustomModule {
  log(message: string) {
    return this.request<
      Parameters<CustomLog2HandlersType["custom.log2"]>[0],
      ReturnType<CustomLog2HandlersType["custom.log2"]>
    >("custom.log2", { message });
  }
}

type CustomDeviceHandlersType = {
  "custom.device.open": (params: { id: string }) => { id: string };
};
const CustomDeviceHandlers = {
  // Handler server
  "custom.device.open": customWrapper<
    Parameters<CustomDeviceHandlersType["custom.device.open"]>[0],
    ReturnType<CustomDeviceHandlersType["custom.device.open"]>
  >((params) => {
    console.log(params);
    return { id: params?.id ?? "" };
  }),
} as const;

class CustomDevice extends CustomModule {
  open(id: string) {
    return this.request<
      Parameters<CustomDeviceHandlersType["custom.device.open"]>[0],
      ReturnType<CustomDeviceHandlersType["custom.device.open"]>
    >("custom.device.open", { id });
  }
}

function createClient() {
  const transport = getSimulatorTransport(
    {
      ...profiles.STANDARD,
      permissions: {
        ...profiles.STANDARD.permissions,
        methodIds: [
          ...profiles.STANDARD.permissions.methodIds,
          "custom.log",
          "custom.log2",
          "custom.device.open",
        ],
      },
    },
    {
      ...CustomLogHandlers,
      ...CustomLog2Handlers,
      ...CustomDeviceHandlers,
    },
  );

  const customGetter = function (client: WalletAPIClient) {
    return {
      log: new CustomLog(client),
      log2: new CustomLog2(client),
      device: new CustomDevice(client),
    };
  };

  return new WalletAPIClient(transport, defaultLogger, customGetter);
}

describe("Server", () => {
  describe("Custom handler", () => {
    it("should allow adding custom handlers", async () => {
      const client = createClient();

      const res = await client.custom.log.log("test");
      const res2 = await client.custom.log2.log("test2");
      const device = await client.custom.device.open("fake-id");

      expect(res).not.toBeFalsy();
      expect(res2).not.toBeFalsy();
      expect(device).not.toBeFalsy();
    });
  });

  describe("family", () => {
    describe("bitcoin", () => {
      function setupBitcoin() {
        return {
          client: createClient(),
          tx: createBitcoinTx(),
        };
      }

      describe("opReturnData", () => {
        function setup() {
          return {
            ...setupBitcoin(),
            data: "We're no strangers to love You know the rules and so do I A full commitment's what...",
            accountId: profiles.STANDARD.accounts[0]!.id,
          };
        }

        it("should accept opReturnData param", async () => {
          const { client, tx, data, accountId } = setup();
          const res = await client.transaction.sign(accountId, {
            ...tx,
            opReturnData: Buffer.from(data.slice(0, 80)), // Max load
          });

          expect(res).not.toBeFalsy();
        });

        it("should reject opReturnData more than 80 bytes (160 chars)", async () => {
          const { client, tx, data, accountId } = setup();

          const sign = () =>
            client.transaction.sign(accountId, {
              ...tx,
              opReturnData: Buffer.from(data.slice(0, 81)),
            });

          await expect(sign).rejects.toThrow();
        });
      });
    });
  });
});
