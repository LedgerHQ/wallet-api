import { useEffect, useMemo, useState } from "react";
import { WalletAPIClient } from "@ledgerhq/wallet-api-client";
import { initialContextValue, WalletAPIProviderContext } from "./context";
import type {
  WalletAPIProviderContextState,
  WalletAPIProviderContextValue,
  WalletAPIProviderProps,
} from "./types";

export function WalletAPIProvider(props: WalletAPIProviderProps) {
  const { children, transport } = props;
  const [client, setClient] = useState<WalletAPIClient | null>(null);
  const [state, setState] = useState<WalletAPIProviderContextState>(
    initialContextValue.state
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
    [client, state, setState]
  );

  return (
    <WalletAPIProviderContext.Provider value={value}>
      {children}
    </WalletAPIProviderContext.Provider>
  );
}
