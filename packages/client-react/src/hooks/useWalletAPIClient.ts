import { useContext, useMemo } from "react";
import { WalletAPIProviderContext } from "../components/WalletAPIProvider/context";
import { RegisteredClient } from "../components/WalletAPIProvider/types";

type UseWalletAPIClientReturn = {
  client?: RegisteredClient;
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
