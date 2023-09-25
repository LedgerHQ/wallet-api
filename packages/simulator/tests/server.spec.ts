import { CustomModule, WalletAPIClient } from "@ledgerhq/wallet-api-client";
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

// Module client
class CustomLog extends CustomModule {
  log(message: string) {
    return this.request("log", { message });
  }
}

function createClient() {
  const transport = getSimulatorTransport(
    {
      ...profiles.STANDARD,
      permissions: {
        ...profiles.STANDARD.permissions,
        methodIds: [...profiles.STANDARD.permissions.methodIds, "custom.log"],
      },
    },
    {
      // Handler server
      "custom.log": customWrapper((params) => {
        console.log(params);
        return { res: "hello" };
      }),
    },
  );
  return new WalletAPIClient<CustomLog>(transport, {
    getCustomModule(client) {
      return new CustomLog(client);
    },
  });
}

describe("Server", () => {
  describe("Custom handler", () => {
    it.only("should allow adding custom handlers", async () => {
      const client = createClient();

      const res = await client.custom?.log("test");

      console.log(res);

      expect(res).not.toBeFalsy();
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
