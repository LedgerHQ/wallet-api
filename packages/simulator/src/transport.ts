import type { Transport } from "@ledgerhq/wallet-api-core";
import {
  CustomHandlers,
  WalletAPIServer,
  defaultLogger,
} from "@ledgerhq/wallet-api-server";
import { applyProfile } from "./helpers";
import type { SimulatorProfile } from "./types";

export { declarativeHandlers } from "./helpers";

export function getSimulatorTransport(
  profile: SimulatorProfile,
  customHandlers?: CustomHandlers,
): Transport {
  const serverTransport: Transport = {
    onMessage: undefined,
    send: (payload) => {
      console.info("wallet -> app", payload);
      // Using setTimeout to simulate async call (Do we want to keep this sync ?)
      // It also avoids an act warning when using RTL to test components
      setTimeout(() => {
        if (clientTransport.onMessage) {
          clientTransport.onMessage(payload);
        }
      }, 0);
    },
  };

  const clientTransport: Transport = {
    onMessage: undefined,
    send: (payload) => {
      console.info("app -> wallet", payload);
      // Using setTimeout to simulate async call (Do we want to keep this sync ?)
      // It also avoids an act warning when using RTL to test components
      setTimeout(() => {
        if (serverTransport.onMessage) {
          serverTransport.onMessage(payload);
        }
      }, 0);
    },
  };

  const serverInstance = new WalletAPIServer(
    serverTransport,
    profile.config,
    defaultLogger,
    customHandlers,
  );

  applyProfile(serverInstance, profile);

  return clientTransport;
}
