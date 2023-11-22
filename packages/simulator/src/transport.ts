import type { Transport } from "@ledgerhq/wallet-api-core";
import {
  CustomHandlers,
  WalletAPIServer,
  defaultLogger,
} from "@ledgerhq/wallet-api-server";
import { applyProfile } from "./helpers";
import type { SimulatorProfile } from "./types";

export function getSimulatorTransport(
  profile: SimulatorProfile,
  customHandlers?: CustomHandlers
): Transport {
  const serverTransport: Transport = {
    onMessage: undefined,
    send: (payload) => {
      console.info("wallet -> app", payload);
      if (clientTransport.onMessage) {
        clientTransport.onMessage(payload);
      }
    },
  };

  const clientTransport: Transport = {
    onMessage: undefined,
    send: (payload) => {
      console.info("app -> wallet", payload);
      if (serverTransport.onMessage) {
        serverTransport.onMessage(payload);
      }
    },
  };

  const serverInstance = new WalletAPIServer(
    serverTransport,
    profile.config,
    defaultLogger,
    customHandlers
  );

  applyProfile(serverInstance, profile);

  return clientTransport;
}
