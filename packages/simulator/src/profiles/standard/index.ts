import {
  Account,
  Currency,
  deserializeAccount,
} from "@ledgerhq/wallet-api-core";

import type { SimulatorProfile } from "../../types";

import rawAccounts from "./accounts.json";
import rawCurrencies from "./currencies.json";

const allCurrencies: Currency[] = rawCurrencies as Currency[];

const allAccounts: Account[] = rawAccounts.map(deserializeAccount);

const storage: Record<string, Map<string, string>> = {};

export const standardProfile: SimulatorProfile = {
  config: {
    appId: "standard-simulator",
    userId: "standard-profile-user",
    tracking: false,
    wallet: {
      name: "wallet-api-simulator",
      version: "0.0.0",
    },
  },
  permissions: {
    methodIds: [
      "account.request",
      "currency.list",
      "account.list",
      "transaction.signAndBroadcast",
      "transaction.sign",
      "message.sign",
      "account.receive",
      "wallet.capabilities",
      "storage.set",
      "storage.get",
      "wallet.userId",
      "wallet.info",
      "bitcoin.getAddress",
      "bitcoin.getAddresses",
      "bitcoin.getPublicKey",
      "bitcoin.getXPub",
      "exchange.start",
      "exchange.complete",
    ],
  },
  accounts: allAccounts,
  currencies: allCurrencies,
  methods: ({ accounts, currencies }) => ({
    "account.request": ({ currencyIds }) => {
      let filteredAccounts = accounts;

      if (currencyIds && currencyIds.length > 0) {
        filteredAccounts = accounts.filter((account) =>
          currencyIds.includes(account.currency),
        );
      }

      if (!filteredAccounts[0]) {
        throw new Error("No account available for the requested currencies");
      }

      return filteredAccounts[0];
    },
    "account.list": ({ currencyIds }) => {
      if (currencyIds && currencyIds.length > 0) {
        return accounts.filter((account) =>
          currencyIds.includes(account.currency),
        );
      }
      return accounts;
    },
    "currency.list": ({ currencyIds }) => {
      if (currencyIds && currencyIds.length > 0) {
        return currencies.filter((currency) =>
          currencyIds.includes(currency.id),
        );
      }
      return currencies;
    },
    "transaction.signAndBroadcast": () => "0xtxHash",
    "transaction.sign": () =>
      Buffer.from("0x123O182493423928734983247923847293847293847923847293487"),
    "message.sign": () => Buffer.from("0x123456789123456789"),
    "account.receive": () => "eth address",
    "storage.set": ({ value, key, storeId }) => {
      if (!storage[storeId]) {
        storage[storeId] = new Map();
      }

      const store = storage[storeId];

      if (store) {
        store.set(key, value);
      }
    },
    "storage.get": ({ key, storeId }) => {
      const store = storage[storeId];

      if (!store) {
        return undefined;
      }

      return store.get(key);
    },
    "bitcoin.getAddress": () => "address",
    "bitcoin.getAddresses": () => [
      {
        address: "bc1qcr8te4kr609gcawutmrza0j4xv80jy8z306fyu",
        publicKey:
          "0330d54fd0dd420a6e5f8d3624f5f3482cae350f79d5f0753bf5beef9c2d91af3c",
        path: "m/84'/0'/0'/0/0",
        intention: "payment",
      },
    ],
    "bitcoin.getPublicKey": () => "publicKey",
    "bitcoin.getXPub": () => "xpub",
    "exchange.start": ({ exchangeType }) =>
      `simulator-dummy-transaction-id-${exchangeType}`,
    "exchange.complete": () => `simulator-dummy-transaction-hash`,
  }),
};
