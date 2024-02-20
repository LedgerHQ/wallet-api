import {
  Account,
  Currency,
  deserializeAccount,
} from "@ledgerhq/wallet-api-core";

import { firstValueFrom } from "rxjs";

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
    currencyIds: ["ethereum", "bitcoin"],
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
      "bitcoin.getXPub",
      "exchange.start",
      "exchange.complete",
    ],
  },
  accounts: allAccounts,
  currencies: allCurrencies,
  methods: {
    "account.request": async ({ accounts$ }) => {
      const accounts = await firstValueFrom(accounts$);

      if (!accounts[0]) {
        throw new Error("No accounts available");
      }

      return accounts[0];
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
    "bitcoin.getXPub": () => "xpub",
    "exchange.start": ({ exchangeType }) =>
      `simulator-dummy-transaction-id-${exchangeType}`,
    "exchange.complete": () => `simulator-dummy-transaction-hash`,
  },
};
