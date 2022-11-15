import type { Transport } from "@ledgerhq/wallet-api-core";
import { WalletAPIServer } from "@ledgerhq/wallet-api-server";
import { setProfile } from "./profiles/standard";

export function getSimulatorTransport(_profileId: string): Transport {
  let clientTransport: Transport | undefined;

  const serverTransport: Transport = {
    onMessage: undefined,
    send: (payload) => {
      console.log("wallet -> app", payload);
      if (clientTransport && clientTransport.onMessage) {
        clientTransport.onMessage(payload);
      }
    },
  };

  clientTransport = {
    onMessage: undefined,
    send: (payload) => {
      console.log("app -> wallet", payload);
      if (serverTransport && serverTransport.onMessage) {
        serverTransport.onMessage(payload);
      }
    },
  };

  const serverInstance = new WalletAPIServer(serverTransport);
  serverInstance.setPermissions({
    methodIds: [
      "account.request",
      "account.list",
      "currency.list",
      "transaction.signAndBroadcast",
    ],
    currencyIds: ["eth*"],
  });

  setProfile(serverInstance);

  return clientTransport;
}
