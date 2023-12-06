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
}: WalletAPIProviderProps) {
  const [client, setClient] = useState<WalletAPIClient>();
  const [state, setState] = useState<WalletAPIProviderContextState>(
    initialContextValue.state,
  );

  useEffect(() => {
    const walletApiClient = new WalletAPIClient(
      transport,
      logger,
      getCustomModule,
    );

    setClient(walletApiClient);
  }, [getCustomModule, logger, transport]);

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
