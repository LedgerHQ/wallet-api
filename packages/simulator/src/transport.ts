import type { Transport } from "@ledgerhq/wallet-api-core";
import { WalletAPIServer } from "@ledgerhq/wallet-api-server";
import { applyProfile } from "./helpers";
import type { SimulatorProfile } from "./types";

export function getSimulatorTransport(profile: SimulatorProfile): Transport {
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
  applyProfile(serverInstance, profile);

  return clientTransport;
}
