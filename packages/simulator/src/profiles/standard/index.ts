import {
  Account,
  Currency,
  deserializeAccount,
} from "@ledgerhq/wallet-api-core";

import { firstValueFrom } from "rxjs";
import packageJson from "../../../package.json";

import type { SimulatorProfile } from "../../types";

import rawAccounts from "./accounts.json";
import rawCurrencies from "./currencies.json";

const allCurrencies: Currency[] = rawCurrencies as Currency[];

const allAccounts: Account[] = rawAccounts.map(deserializeAccount);

export const standardProfile: SimulatorProfile = {
  config: {
    userId: "standard-profile-user",
    tracking: false,
    wallet: {
      name: "wallet-api-simulator",
      version: packageJson.version,
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
      "wallet.userId",
      "wallet.info",
      "bitcoin.getXPub",
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
    "transaction.signAndBroadcast": () => {
      return "0xtxHash";
    },
    "transaction.sign": () => {
      return Buffer.from(
        "0x123O182493423928734983247923847293847293847923847293487"
      );
    },
    "message.sign": () => {
      return Buffer.from("0x123456789123456789");
    },
    "account.receive": () => {
      return "eth address";
    },
    "bitcoin.getXPub": () => {
      return "xpub";
    },
  },
};
