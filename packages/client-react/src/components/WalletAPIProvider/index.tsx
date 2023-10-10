import { WalletAPIClient } from "@ledgerhq/wallet-api-client";
import { useEffect, useMemo, useState } from "react";
import { WalletAPIProviderContext, initialContextValue } from "./context";
import type {
  WalletAPIProviderContextState,
  WalletAPIProviderContextValue,
  WalletAPIProviderProps,
} from "./types";

export function WalletAPIProvider({
  children,
  transport,
}: WalletAPIProviderProps) {
  const [client, setClient] = useState<WalletAPIClient | null>(null);
  const [state, setState] = useState<WalletAPIProviderContextState>(
    initialContextValue.state,
  );

  useEffect(() => {
    const walletApiClient = new WalletAPIClient(transport);

    setClient(walletApiClient);
  }, [transport]);

  const value: WalletAPIProviderContextValue = useMemo(
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
