import type { WalletAPIClient } from "@ledgerhq/wallet-api-client";
import { useContext, useMemo } from "react";
import { WalletAPIProviderContext } from "../components/WalletAPIProvider/context";

type UseWalletAPIClientReturn = {
  client?: WalletAPIClient;
};

export function useWalletAPIClient(): UseWalletAPIClientReturn {
  const { client } = useContext(WalletAPIProviderContext);

  const results = useMemo(
    () => ({
      client,
    }),
    [client],
  );

  return results;
}
