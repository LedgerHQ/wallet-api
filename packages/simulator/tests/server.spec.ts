import { WalletAPIClient } from "@ledgerhq/wallet-api-client";
import {
  Account,
  BitcoinTransaction,
  schemaFamilies,
} from "@ledgerhq/wallet-api-core";
import BigNumber from "bignumber.js";
import { getSimulatorTransport, profiles } from "../src";

function createBitcoinTx(): BitcoinTransaction {
  return {
    family: schemaFamilies.enum.bitcoin,
    amount: new BigNumber(0),
    recipient: (profiles.STANDARD.accounts[0] as Account).address,
  };
}

function createClient() {
  const transport = getSimulatorTransport(profiles.STANDARD);
  return new WalletAPIClient(transport);
}

describe("Server", () => {
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
            accountId: (profiles.STANDARD.accounts[0] as Account).id,
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
