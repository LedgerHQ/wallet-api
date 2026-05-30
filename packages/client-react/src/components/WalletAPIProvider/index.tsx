import { WalletAPIClient } from "@ledgerhq/wallet-api-client";
import { useEffect, useMemo, useState } from "react";
import { WalletAPIProviderContext, initialContextValue } from "./context";
import type {
  WalletAPIProviderContextState,
  WalletAPIProviderContextValue,
  WalletAPIProviderProps,
} from "./types";

export * from "./types";

export function WalletAPIProvider({
  children,
  transport,
  logger,
  getCustomModule,
  eventHandlers,
  client: providedClient,
}: WalletAPIProviderProps) {
  const [state, setState] = useState<WalletAPIProviderContextState>(
    initialContextValue.state,
  );

  const [client] = useState<WalletAPIClient | undefined>(
    () =>
      providedClient ??
      new WalletAPIClient(transport, logger, getCustomModule, eventHandlers),
  );

  useEffect(() => {
    if (eventHandlers) {
      client?.setEventHandlers(eventHandlers);
    }
  }, [client, eventHandlers]);

  const value = useMemo<WalletAPIProviderContextValue>(
    () => ({
      client,
      state,
      setState,
    }),
    [client, state, setState],
  );

  return (
    <WalletAPIProviderContext.Provider value={value}>
      {children}
    </WalletAPIProviderContext.Provider>
  );
}
