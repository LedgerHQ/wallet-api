import { WalletAPIClient } from "@ledgerhq/wallet-api-client";
import { getSimulatorTransport, profiles } from "../src";
import BigNumber from "bignumber.js";

describe("Simulator", () => {
  describe("bitcoin.getXPub", () => {
    it("should return the xpub", async () => {
      const transport = getSimulatorTransport(profiles.STANDARD);
      const client = new WalletAPIClient(transport);

      const xPub = await client.bitcoin.getXPub("accountId");

      expect(xPub).toBe("xpub");
    });

    it("should throw an error if permission not granted", async () => {
      const profile = {
        ...profiles.STANDARD,
        permissions: {
          ...profiles.STANDARD.permissions,
          methodIds: [],
        },
      };

      const transport = getSimulatorTransport(profile);
      const client = new WalletAPIClient(transport);

      await expect(client.bitcoin.getXPub("accountId")).rejects.toThrow(
        "permission",
      );
    });

    it("should throw an error if method not handled by server", async () => {
      const profile = {
        ...profiles.STANDARD,
        methods: {},
      };

      const transport = getSimulatorTransport(profile);
      const client = new WalletAPIClient(transport);

      await expect(client.bitcoin.getXPub("accountId")).rejects.toThrow(
        "not implemented",
      );
    });
  });
});

describe("Simulator", () => {
  describe("account.list", () => {
    it("should return the list of accounts", async () => {
      const transport = getSimulatorTransport(profiles.STANDARD);
      const client = new WalletAPIClient(transport);

      const accounts = await client.account.list();

      expect(accounts).toBeInstanceOf(Array);
    });

    it("should throw an error if permission not granted", async () => {
      const profile = {
        ...profiles.STANDARD,
        permissions: {
          ...profiles.STANDARD.permissions,
          methodIds: [],
        },
      };

      const transport = getSimulatorTransport(profile);
      const client = new WalletAPIClient(transport);

      await expect(client.account.list()).rejects.toThrow("permission");
    });
  });

  describe("account.request", () => {
    it("should return the requested account", async () => {
      const transport = getSimulatorTransport(profiles.STANDARD);
      const client = new WalletAPIClient(transport);

      const account = await client.account.request({
        currencyIds: ["bitcoin"],
      });

      expect(account).toBeDefined();
    });

    it("should throw an error if permission not granted", async () => {
      const profile = {
        ...profiles.STANDARD,
        permissions: {
          ...profiles.STANDARD.permissions,
          methodIds: [],
        },
      };

      const transport = getSimulatorTransport(profile);
      const client = new WalletAPIClient(transport);

      await expect(
        client.account.request({ currencyIds: ["bitcoin"] }),
      ).rejects.toThrow("permission");
    });
  });

  describe("account.receive", () => {
    it("should return the account address", async () => {
      const transport = getSimulatorTransport(profiles.STANDARD);
      const client = new WalletAPIClient(transport);

      const address = await client.account.receive("accountId");

      expect(address).toBeDefined();
    });

    it("should throw an error if permission not granted", async () => {
      const profile = {
        ...profiles.STANDARD,
        permissions: {
          ...profiles.STANDARD.permissions,
          methodIds: [],
        },
      };

      const transport = getSimulatorTransport(profile);
      const client = new WalletAPIClient(transport);

      await expect(client.account.receive("accountId")).rejects.toThrow(
        "permission",
      );
    });
  });

  describe("currency.list", () => {
    it("should return a list of currencies", async () => {
      const transport = getSimulatorTransport(profiles.STANDARD);
      const client = new WalletAPIClient(transport);

      const currencies = await client.currency.list();

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
      const transport = getSimulatorTransport(profiles.STANDARD);
      const client = new WalletAPIClient(transport);

      const currencyIds = ["btc", "eth"];
      const currencies = await client.currency.list({ currencyIds });

      expect(currencies).toBeDefined();
      expect(currencies.length).toBe(currencyIds.length);
      expect(currencies[0]?.id).toBe(currencyIds[0]);
      expect(currencies[1]?.id).toBe(currencyIds[1]);
    });

    it("should throw an error if permission not granted", async () => {
      const profile = {
        ...profiles.STANDARD,
        permissions: {
          ...profiles.STANDARD.permissions,
          methodIds: [],
        },
      };

      const transport = getSimulatorTransport(profile);
      const client = new WalletAPIClient(transport);

      await expect(client.currency.list()).rejects.toThrow("permission");
    });
  });

  describe("message.sign", () => {
    it("should return the signed message", async () => {
      const transport = getSimulatorTransport(profiles.STANDARD);
      const client = new WalletAPIClient(transport);

      const message = Buffer.from("Hello, world!", "utf-8");
      const signedMessage = await client.message.sign("accountId", message);

      expect(signedMessage).toBeInstanceOf(Buffer);
    });

    it("should throw an error if permission not granted", async () => {
      const profile = {
        ...profiles.STANDARD,
        permissions: {
          ...profiles.STANDARD.permissions,
          methodIds: [],
        },
      };

      const transport = getSimulatorTransport(profile);
      const client = new WalletAPIClient(transport);

      const message = Buffer.from("Hello, world!", "utf-8");
      await expect(client.message.sign("accountId", message)).rejects.toThrow(
        "permission",
      );
    });

    it("should throw an error if method not handled by server", async () => {
      const profile = {
        ...profiles.STANDARD,
        methods: {},
      };

      const transport = getSimulatorTransport(profile);
      const client = new WalletAPIClient(transport);

      const message = Buffer.from("Hello, world!", "utf-8");
      await expect(client.message.sign("accountId", message)).rejects.toThrow(
        "not implemented",
      );
    });
  });

  describe("storage.get & storage.set", () => {
    it("should set and get a value", async () => {
      const transport = getSimulatorTransport(profiles.STANDARD);
      const client = new WalletAPIClient(transport);

      const key = "testKey";
      const value = "testValue";

      await client.storage.set(key, value);
      const retrievedValue = await client.storage.get(key);

      expect(retrievedValue).toBe(value);
    });

    it("should throw an error if permission not granted", async () => {
      const profile = {
        ...profiles.STANDARD,
        permissions: {
          ...profiles.STANDARD.permissions,
          methodIds: [],
        },
      };

      const transport = getSimulatorTransport(profile);
      const client = new WalletAPIClient(transport);

      const key = "testKey";
      const value = "testValue";

      await expect(client.storage.set(key, value)).rejects.toThrow(
        "permission",
      );
      await expect(client.storage.get(key)).rejects.toThrow("permission");
    });

    it("should throw an error if method not handled by server", async () => {
      const profile = {
        ...profiles.STANDARD,
        methods: {},
      };

      const transport = getSimulatorTransport(profile);
      const client = new WalletAPIClient(transport);

      const key = "testKey";
      const value = "testValue";

      await expect(client.storage.set(key, value)).rejects.toThrow(
        "not implemented",
      );
      await expect(client.storage.get(key)).rejects.toThrow("not implemented");
    });
  });

  describe("transaction.sign", () => {
    it("should return the signed transaction", async () => {
      const transport = getSimulatorTransport(profiles.STANDARD);
      const client = new WalletAPIClient(transport);

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
      const signedTransaction = await client.transaction.sign(
        "accountId",
        transaction,
      );

      expect(signedTransaction).toBe("signedTransaction");
    });

    it("should throw an error if permission not granted", async () => {
      const profile = {
        ...profiles.STANDARD,
        permissions: {
          ...profiles.STANDARD.permissions,
          methodIds: [],
        },
      };

      const transport = getSimulatorTransport(profile);
      const client = new WalletAPIClient(transport);

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
      await expect(
        client.transaction.sign("accountId", transaction),
      ).rejects.toThrow("permission");
    });

    it("should throw an error if method not handled by server", async () => {
      const profile = {
        ...profiles.STANDARD,
        methods: {},
      };

      const transport = getSimulatorTransport(profile);
      const client = new WalletAPIClient(transport);

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
      await expect(
        client.transaction.sign("accountId", transaction),
      ).rejects.toThrow("not implemented");
    });
  });

  describe("wallet.userId", () => {
    it("should return the userId", async () => {
      const transport = getSimulatorTransport(profiles.STANDARD);
      const client = new WalletAPIClient(transport);

      const userId = await client.wallet.userId();

      expect(userId).toBe("userId");
    });

    it("should throw an error if permission not granted", async () => {
      const profile = {
        ...profiles.STANDARD,
        permissions: {
          ...profiles.STANDARD.permissions,
          methodIds: [],
        },
      };

      const transport = getSimulatorTransport(profile);
      const client = new WalletAPIClient(transport);

      await expect(client.wallet.userId()).rejects.toThrow("permission");
    });

    it("should throw an error if method not handled by server", async () => {
      const profile = {
        ...profiles.STANDARD,
        methods: {},
      };

      const transport = getSimulatorTransport(profile);
      const client = new WalletAPIClient(transport);

      await expect(client.wallet.userId()).rejects.toThrow("not implemented");
    });
  });
});
