import { TransportStatusError } from "@ledgerhq/errors";
import {
  WalletAPIClient,
  deserializeAccount,
} from "@ledgerhq/wallet-api-client";
import BigNumber from "bignumber.js";
import { getSimulatorTransport, profiles } from "../src";

const profileWithNoPermissions = {
  ...profiles.STANDARD,
  permissions: {
    ...profiles.STANDARD.permissions,
    methodIds: [],
  },
};

const profileWithUnhandledMethods = {
  ...profiles.STANDARD,
  methods: {},
};

const profileWithFakeCurrency = {
  ...profiles.STANDARD,
  permissions: {
    ...profiles.STANDARD.permissions,
    currencyIds: ["**"], // Check that we support glob with unknown currency
  },
  currencies: [
    ...profiles.STANDARD.currencies,
    {
      type: "CryptoCurrency",
      id: "fake", // Check support for fake currency
      ticker: "FAKE",
      name: "Fake",
      family: "fake",
      color: "#facfac",
      decimals: 69,
    } as const,
  ],
  accounts: [
    ...profiles.STANDARD.accounts,
    deserializeAccount({
      id: "account-fake-1",
      name: "Fake 1",
      address: "address",
      currency: "fake", // Check support for fake account
      balance: "42",
      spendableBalance: "42",
      blockHeight: 1,
      lastSyncDate: "1995-12-17T03:24:00",
    }),
  ],
};

describe("Simulator", () => {
  describe("bitcoin.getXPub", () => {
    it("should return the xpub", async () => {
      // GIVEN
      const transport = getSimulatorTransport(profiles.STANDARD);
      const client = new WalletAPIClient(transport);

      // WHEN
      const xPub = await client.bitcoin.getXPub("accountId");

      // THEN
      expect(xPub).toBe("xpub");
    });

    it("should throw an error if permission not granted", async () => {
      // GIVEN
      const transport = getSimulatorTransport(profileWithNoPermissions);
      const client = new WalletAPIClient(transport);

      // THEN
      await expect(client.bitcoin.getXPub("accountId")).rejects.toThrow(
        "permission",
      );
    });

    it("should throw an error if method not handled by server", async () => {
      // GIVEN
      const transport = getSimulatorTransport(profileWithUnhandledMethods);
      const client = new WalletAPIClient(transport);

      // THEN
      await expect(client.bitcoin.getXPub("accountId")).rejects.toThrow(
        "not implemented",
      );
    });
  });

  describe("account.list", () => {
    it("should return the list of accounts", async () => {
      // GIVEN
      const transport = getSimulatorTransport(profiles.STANDARD);
      const client = new WalletAPIClient(transport);
      const accountIds = ["account-btc-1", "account-eth-1"];

      // WHEN
      const accounts = await client.account.list();

      // THEN
      expect(accounts).toBeInstanceOf(Array);
      accounts.forEach((account) => {
        expect(account).toHaveProperty("id");
        expect(account).toHaveProperty("name");
        expect(account).toHaveProperty("address");
        expect(account).toHaveProperty("currency");
        expect(account).toHaveProperty("balance");
        expect(account).toHaveProperty("spendableBalance");
        expect(account).toHaveProperty("blockHeight");
        expect(account).toHaveProperty("lastSyncDate");
      });

      const receivedIds = accounts.map((account) => account.id);
      expect(receivedIds.at(0)).toEqual(accountIds.at(0));
      expect(receivedIds.at(1)).toEqual(accountIds.at(1));
    });

    it("should throw an error if permission not granted", async () => {
      // GIVEN
      const transport = getSimulatorTransport(profileWithNoPermissions);
      const client = new WalletAPIClient(transport);

      // THEN
      await expect(client.account.list()).rejects.toThrow("permission");
    });

    it("should support unknown accounts", async () => {
      // GIVEN
      const transport = getSimulatorTransport(profileWithFakeCurrency);
      const client = new WalletAPIClient(transport);

      // WHEN
      const accounts = await client.account.list();

      // THEN
      expect(accounts).toBeDefined();
      expect(accounts).toHaveLength(3);
      expect(accounts).toEqual(
        expect.arrayContaining([expect.objectContaining({ currency: "fake" })]),
      );
    });
  });

  describe("account.request", () => {
    it("should return the requested account", async () => {
      // GIVEN
      const transport = getSimulatorTransport(profiles.STANDARD);
      const client = new WalletAPIClient(transport);

      // WHEN
      const account = await client.account.request({
        currencyIds: ["bitcoin"],
      });

      // THEN
      expect(account).toBeDefined();
    });

    it("should throw an error if permission not granted", async () => {
      // GIVEN
      const transport = getSimulatorTransport(profileWithNoPermissions);
      const client = new WalletAPIClient(transport);

      // THEN
      await expect(
        client.account.request({ currencyIds: ["bitcoin"] }),
      ).rejects.toThrow("permission");
    });
  });

  describe("account.receive", () => {
    it("should return the account address", async () => {
      // GIVEN
      const transport = getSimulatorTransport(profiles.STANDARD);
      const client = new WalletAPIClient(transport);

      // WHEN
      const address = await client.account.receive("account-eth-1");

      // THEN
      expect(address).toBeDefined();
    });

    it("should throw an error if permission not granted", async () => {
      const transport = getSimulatorTransport(profileWithNoPermissions);
      const client = new WalletAPIClient(transport);

      // THEN
      await expect(client.account.receive("accountId")).rejects.toThrow(
        "permission",
      );
    });
  });

  describe("currency.list", () => {
    it("should return a list of currencies", async () => {
      // GIVEN
      const transport = getSimulatorTransport(profiles.STANDARD);
      const client = new WalletAPIClient(transport);

      // WHEN
      const currencies = await client.currency.list();

      // THEN
      expect(currencies).toBeInstanceOf(Array);
      currencies.forEach((currency) => {
        expect(currency).toHaveProperty("color");
        expect(currency).toHaveProperty("ticker");
        expect(currency).toHaveProperty("id");
        expect(currency).toHaveProperty("name");
        expect(currency).toHaveProperty("decimals");
        expect(currency).toHaveProperty("type");
        if (currency.type === "CryptoCurrency") {
          expect(currency).toHaveProperty("family");
        } else if (currency.type === "TokenCurrency") {
          expect(currency).toHaveProperty("parent");
          expect(currency).toHaveProperty("standard");
          expect(currency).toHaveProperty("contract");
        }
      });
    });

    it("should return a filtered list of currencies", async () => {
      // GIVEN
      const transport = getSimulatorTransport(profiles.STANDARD);
      const client = new WalletAPIClient(transport);

      // WHEN
      const currencyIds = ["ethereum", "bitcoin"];
      const currencies = await client.currency.list({ currencyIds });

      // THEN
      expect(currencies).toBeDefined();
      expect(currencies.length).toBe(currencyIds.length);
      expect(currencies[0]?.id).toBe(currencyIds[1]);
      expect(currencies[1]?.id).toBe(currencyIds[0]);
      // Notice that the order of the list isn't defined by the order of the arguments in the query
    });

    it("should return a filtered list of currencies with no duplicates", async () => {
      // GIVEN
      const transport = getSimulatorTransport(profiles.STANDARD);
      const client = new WalletAPIClient(transport);

      // WHEN
      const currencyIds = ["ethereum", "bitcoin", "ethereum"];
      const currencies = await client.currency.list({ currencyIds });

      // THEN
      expect(currencies).toBeDefined();
      expect(currencies.length).toBe(currencyIds.length - 1);
      expect(currencies[0]?.id).toBe(currencyIds[1]);
      expect(currencies[1]?.id).toBe(currencyIds[0]);
      // Notice that the order of the list isn't defined by the order of the arguments in the query
    });

    it("should return a filtered list of currencies with no duplicates in manifest", async () => {
      // GIVEN
      const currencyIds = ["ethereum", "bitcoin", "ethereum"];
      const transport = getSimulatorTransport({
        ...profiles.STANDARD,
        permissions: {
          ...profiles.STANDARD.permissions,
          currencyIds,
        },
      });
      const client = new WalletAPIClient(transport);

      // WHEN
      const currencies = await client.currency.list();

      // THEN
      expect(currencies).toBeDefined();
      expect(currencies.length).toBe(currencyIds.length - 1);
      expect(currencies[0]?.id).toBe(currencyIds[1]);
      expect(currencies[1]?.id).toBe(currencyIds[0]);
      // Notice that the order of the list isn't defined by the order of the arguments in the query
    });

    it("should throw an error if permission not granted", async () => {
      // GIVEN
      const transport = getSimulatorTransport(profileWithNoPermissions);
      const client = new WalletAPIClient(transport);

      // THEN
      await expect(client.currency.list()).rejects.toThrow("permission");
    });

    it("should support unknown currencies", async () => {
      // GIVEN
      const transport = getSimulatorTransport(profileWithFakeCurrency);
      const client = new WalletAPIClient(transport);

      // WHEN
      const currencies = await client.currency.list();

      // THEN
      expect(currencies).toBeDefined();
      expect(currencies).toHaveLength(3);
      expect(currencies).toEqual(
        expect.arrayContaining([expect.objectContaining({ id: "fake" })]),
      );
    });
  });

  describe("message.sign", () => {
    it("should return the signed message", async () => {
      // GIVEN
      const transport = getSimulatorTransport(profiles.STANDARD);
      const client = new WalletAPIClient(transport);

      // WHEN
      const message = Buffer.from("Hello, world!", "utf-8");
      const signedMessage = await client.message.sign("account-eth-1", message);

      // THEN
      expect(signedMessage).toBeInstanceOf(Buffer);
    });

    it("should throw an error if permission not granted", async () => {
      // GIVEN
      const transport = getSimulatorTransport(profileWithNoPermissions);
      const client = new WalletAPIClient(transport);
      const message = Buffer.from("Hello, world!", "utf-8");

      // THEN
      await expect(
        client.message.sign("account-eth-1", message),
      ).rejects.toThrow("permission");
    });

    it("should throw an error if method not handled by server", async () => {
      // GIVEN
      const transport = getSimulatorTransport(profileWithUnhandledMethods);
      const client = new WalletAPIClient(transport);
      const message = Buffer.from("Hello, world!", "utf-8");

      // THEN
      await expect(
        client.message.sign("account-eth-1", message),
      ).rejects.toThrow("not implemented");
    });
  });

  describe("storage.get & storage.set", () => {
    it("should set and get a value", async () => {
      // GIVEN
      const transport = getSimulatorTransport(profiles.STANDARD);
      const client = new WalletAPIClient(transport);

      // WHEN
      const key = "testKey";
      const value = "testValue";
      await client.storage.set(key, value);
      const retrievedValue = await client.storage.get(key);

      // THEN
      expect(retrievedValue).toBe(value);
    });

    it("should throw an error if permission not granted", async () => {
      // GIVEN
      const transport = getSimulatorTransport(profileWithNoPermissions);
      const client = new WalletAPIClient(transport);

      const key = "testKey";
      const value = "testValue";

      // THEN
      await expect(client.storage.set(key, value)).rejects.toThrow(
        "permission",
      );
      await expect(client.storage.get(key)).rejects.toThrow("permission");
    });

    it("should throw an error if method not handled by server", async () => {
      // GIVEN
      const transport = getSimulatorTransport(profileWithUnhandledMethods);
      const client = new WalletAPIClient(transport);

      const key = "testKey";
      const value = "testValue";

      // THEN
      await expect(client.storage.set(key, value)).rejects.toThrow(
        "not implemented",
      );
      await expect(client.storage.get(key)).rejects.toThrow("not implemented");
    });
  });

  describe("transaction.sign", () => {
    const transaction = {
      family: "ethereum",
      amount: new BigNumber(1000000000000000000), // 1 ETH in wei
      recipient: "0xAb5801a7D398351b8bE11C439e05C5B3259aeC9B", // Vitalik Buterin's address
      gasPrice: new BigNumber(20000000000), // 20 Gwei
      gasLimit: new BigNumber(21000),
      networkInfo: {
        family: "ethereum",
        feeItems: {
          items: [
            {
              key: "0",
              speed: "high",
              gasPrice: "20000000000",
            },
            {
              key: "1",
              speed: "standard",
              gasPrice: "20000000000",
            },
            {
              key: "2",
              speed: "low",
              gasPrice: "20000000000",
            },
          ],
          defaultFee: "20000000000",
        },
      },
    } as const;

    it("should return the signed transaction", async () => {
      // GIVEN
      const transport = getSimulatorTransport(profiles.STANDARD);
      const client = new WalletAPIClient(transport);

      // WHEN
      const signedTransaction = await client.transaction.sign(
        "account-eth-1",
        transaction,
      );
      const stringifiedSignedTxn = JSON.stringify(signedTransaction);

      // THEN
      expect(signedTransaction).toBeInstanceOf(Buffer);
      expect(stringifiedSignedTxn).toBe(
        `{"type":"Buffer","data":[48,120,49,50,51,79,49,56,50,52,57,51,52,50,51,57,50,56,55,51,52,57,56,51,50,52,55,57,50,51,56,52,55,50,57,51,56,52,55,50,57,51,56,52,55,57,50,51,56,52,55,50,57,51,52,56,55]}`,
      );
    });

    it("should throw an error if permission not granted", async () => {
      // GIVEN
      const transport = getSimulatorTransport(profileWithNoPermissions);
      const client = new WalletAPIClient(transport);

      // THEN
      await expect(
        client.transaction.sign("account-eth-1", transaction),
      ).rejects.toThrow("permission");
    });

    it("should throw an error if method not handled by server", async () => {
      // GIVEN
      const profile = {
        ...profiles.STANDARD,
        methods: {},
      };

      const transport = getSimulatorTransport(profile);
      const client = new WalletAPIClient(transport);

      // THEN
      await expect(
        client.transaction.sign("account-eth-1", transaction),
      ).rejects.toThrow("not implemented");
    });
  });

  describe("wallet.userId", () => {
    it("should return the userId", async () => {
      // GIVEN
      const transport = getSimulatorTransport(profiles.STANDARD);
      const client = new WalletAPIClient(transport);

      // WHEN
      const userId = await client.wallet.userId();

      // THEN
      expect(userId).toBe("standard-profile-user");
    });

    it("should throw an error if permission not granted", async () => {
      // GIVEN
      const transport = getSimulatorTransport(profileWithNoPermissions);
      const client = new WalletAPIClient(transport);

      // THEN
      await expect(client.wallet.userId()).rejects.toThrow("permission");
    });
  });

  describe("errors", () => {
    it("should handle unknown errors", async () => {
      // GIVEN
      const profileWithErrors = {
        ...profiles.STANDARD,
        methods: {
          ...profiles.STANDARD.methods,
          "message.sign": () => {
            throw new TransportStatusError(27905);
          },
        },
      };
      const transport = getSimulatorTransport(profileWithErrors);
      const client = new WalletAPIClient(transport);

      // THEN
      await expect(
        client.message.sign("account-btc-1", Buffer.from("")),
      ).rejects.toThrow("Ledger device: UNKNOWN_ERROR (0x6d01)");
    });

    it("should handle simple string errors", async () => {
      // GIVEN
      const profileWithErrors = {
        ...profiles.STANDARD,
        methods: {
          ...profiles.STANDARD.methods,
          "message.sign": () => {
            throw new Error("simple string");
          },
        },
      };
      const transport = getSimulatorTransport(profileWithErrors);
      const client = new WalletAPIClient(transport);

      // THEN
      await expect(
        client.message.sign("account-btc-1", Buffer.from("")),
      ).rejects.toThrow("simple string");
    });

    it("should handle empty string errors", async () => {
      // GIVEN
      const profileWithErrors = {
        ...profiles.STANDARD,
        methods: {
          ...profiles.STANDARD.methods,
          "message.sign": () => {
            throw new Error();
          },
        },
      };
      const transport = getSimulatorTransport(profileWithErrors);
      const client = new WalletAPIClient(transport);

      // THEN
      await expect(
        client.message.sign("account-btc-1", Buffer.from("")),
      ).rejects.toThrow("");
    });

    it("should handle simple string", async () => {
      // GIVEN
      const profileWithErrors = {
        ...profiles.STANDARD,
        methods: {
          ...profiles.STANDARD.methods,
          "message.sign": () => {
            throw "simple string";
          },
        },
      };
      const transport = getSimulatorTransport(profileWithErrors);
      const client = new WalletAPIClient(transport);

      // THEN
      await expect(
        client.message.sign("account-btc-1", Buffer.from("")),
      ).rejects.toThrow("simple string");
    });

    it("should handle empty string", async () => {
      // GIVEN
      const profileWithErrors = {
        ...profiles.STANDARD,
        methods: {
          ...profiles.STANDARD.methods,
          "message.sign": () => {
            throw "";
          },
        },
      };
      const transport = getSimulatorTransport(profileWithErrors);
      const client = new WalletAPIClient(transport);

      // THEN
      await expect(
        client.message.sign("account-btc-1", Buffer.from("")),
      ).rejects.toThrow("");
    });

    it("should handle undefined", async () => {
      // GIVEN
      const profileWithErrors = {
        ...profiles.STANDARD,
        methods: {
          ...profiles.STANDARD.methods,
          "message.sign": () => {
            throw undefined;
          },
        },
      };
      const transport = getSimulatorTransport(profileWithErrors);
      const client = new WalletAPIClient(transport);

      // THEN
      try {
        await client.message.sign("account-btc-1", Buffer.from(""));
        expect(false).toBeTruthy();
      } catch (error) {
        expect(error).toBeUndefined();
      }
    });
  });
});
