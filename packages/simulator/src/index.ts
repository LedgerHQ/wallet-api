import {
  Account,
  deserializeAccount,
  JSONRPC,
  RFC,
  Transport,
} from "@ledgerhq/wallet-api-core";

import WalletAPIServer from "@ledgerhq/wallet-api-server";
import { firstValueFrom } from "rxjs";

const dummyTransport: Transport = {
  connect: () => {},
  disconnect: () => {},
  onMessage: undefined,
  send: async (payload) =>
    console.log("responded: ", JSON.stringify(payload, null, 3)),
};

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

const serverInstance = new WalletAPIServer(dummyTransport);
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

if (dummyTransport.onMessage) {
  const testMessage: JSONRPC.RpcRequest<
    RFC.MethodId,
    RFC.AccountRequestParams
  > = {
    id: 1,
    jsonrpc: "2.0",
    method: RFC.MethodId.ACCOUNT_REQUEST,
    params: {
      currencies: ["ethereum"],
    },
  };
  dummyTransport.onMessage(testMessage).catch(console.log);
}
