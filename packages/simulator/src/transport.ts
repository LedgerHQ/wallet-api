import type { Transport } from "@ledgerhq/wallet-api-core";
import {
  WalletAPIServer,
  WalletAPIServerOptions,
} from "@ledgerhq/wallet-api-server";
import { applyProfile } from "./helpers";
import type { SimulatorProfile } from "./types";

export function getSimulatorTransport(
  profile: SimulatorProfile,
  customHandlers?: WalletAPIServerOptions["customHandlers"],
): Transport {
  // eslint-disable-next-line prefer-const
  let clientTransport: Transport | undefined;

  const serverTransport: Transport = {
    onMessage: undefined,
    send: (payload) => {
      console.log("wallet -> app", payload);
      if (clientTransport?.onMessage) {
        clientTransport.onMessage(payload);
      }
    },
  };

  clientTransport = {
    onMessage: undefined,
    send: (payload) => {
      console.log("app -> wallet", payload);
      if (serverTransport?.onMessage) {
        serverTransport.onMessage(payload);
      }
    },
  };

  const serverInstance = new WalletAPIServer(serverTransport, profile.config, {
    customHandlers,
  });

  applyProfile(serverInstance, profile);

  return clientTransport;
}
