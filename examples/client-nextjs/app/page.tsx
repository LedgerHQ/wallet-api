"use client";

import { WindowMessageTransport } from "@ledgerhq/wallet-api-client";
import { WalletAPIProvider } from "@ledgerhq/wallet-api-client-react";
import {
  getSimulatorTransport,
  profiles,
} from "@ledgerhq/wallet-api-simulator";
import { AccountsList } from "../components/AccountsList";

const isSimulator =
  typeof window === "undefined"
    ? false
    : new URLSearchParams(window.location.search).get("simulator");

function getWalletAPITransport() {
  if (typeof window === "undefined") {
    return {
      onMessage: undefined,
      send: () => {},
    };
  }

  if (isSimulator) {
    return getSimulatorTransport(profiles.STANDARD);
  }

  const transport = new WindowMessageTransport();
  transport.connect();
  return transport;
}

const transport = getWalletAPITransport();

export default function Page() {
  return (
    <WalletAPIProvider transport={transport}>
      <AccountsList />
    </WalletAPIProvider>
  );
}
