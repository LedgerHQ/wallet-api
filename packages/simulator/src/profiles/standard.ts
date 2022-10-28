import { Account, deserializeAccount, RFC } from "@ledgerhq/wallet-api-core";
import type { WalletAPIServer } from "@ledgerhq/wallet-api-server";
import { firstValueFrom } from "rxjs";

const cryptoAccounts: Account[] = [
  {
    id: "account-btc-1",
    name: "Bitcoin 1",
    address: "address",
    currency: "bitcoin",
    balance: "42",
    spendableBalance: "42",
    blockHeight: 1,
    lastSyncDate: "1995-12-17T03:24:00",
  },
  {
    id: "account-eth-1",
    name: "Ethereum 1",
    address: "address",
    currency: "ethereum",
    balance: "42",
    spendableBalance: "42",
    blockHeight: 1,
    lastSyncDate: "1995-12-17T03:24:00",
  },
].map(deserializeAccount);

export function setProfile(serverInstance: WalletAPIServer) {
  serverInstance.setAccounts(cryptoAccounts);

  serverInstance.setHandler(
    RFC.MethodId.ACCOUNT_REQUEST,
    async ({ accounts$ }) => {
      const accounts = await firstValueFrom(accounts$);

      if (!accounts[0]) {
        throw new Error("nope");
      }
      return accounts[0];
    }
  );

  serverInstance.setHandler(
    RFC.MethodId.TRANSACTION_SIGN_AND_BROADCAST,
    async () => {
      return "0xtxHash";
    }
  );

  serverInstance.setHandler(RFC.MethodId.TRANSACTION_SIGN, async () => {
    return Buffer.from(
      "0x123O182493423928734983247923847293847293847923847293487"
    );
  });

  serverInstance.setHandler(RFC.MethodId.MESSAGE_SIGN, async () => {
    return Buffer.from("0x123456789123456789");
  });

  serverInstance.setHandler(RFC.MethodId.ACCOUNT_RECEIVE, async () => {
    return "eth address";
  });
}
