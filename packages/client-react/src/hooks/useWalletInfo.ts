import type { WalletInfo } from "@ledgerhq/wallet-api-client";
import { useCallback, useContext, useEffect, useMemo } from "react";
import { WalletAPIProviderContext } from "../components/WalletAPIProvider/context";
import { updateLoadableInState } from "../components/WalletAPIProvider/helpers";

type UseAccountReturn = {
  walletInfo: WalletInfo["result"] | null;
  updatedAt: Date | null;
  error: unknown;
  loading: boolean;
  updateData: () => Promise<void>;
};

export function useWalletInfo(): UseAccountReturn {
  const { client, state, setState } = useContext(WalletAPIProviderContext);

  const { walletInfo } = state;

  const updateData = useCallback(async () => {
    if (!client) {
      return;
    }

    updateLoadableInState(setState, "walletInfo", { loading: true });

    try {
      const newWalletInfo = await client.wallet.info();

      updateLoadableInState(setState, "walletInfo", {
        value: newWalletInfo,
        updatedAt: new Date(),
        loading: false,
      });
    } catch (error) {
      updateLoadableInState(setState, "walletInfo", {
        error,
        updatedAt: new Date(),
        loading: false,
      });
    }
  }, [client, setState]);

  useEffect(() => {
    if (!walletInfo.value && !walletInfo.loading && !walletInfo.error) {
      void updateData();
    }
  }, [walletInfo.value, updateData, walletInfo.loading, walletInfo.error]);

  const results = useMemo(
    () => ({
      walletInfo: walletInfo.value,
      updatedAt: walletInfo.updatedAt,
      loading: walletInfo.loading,
      error: walletInfo.error,
      updateData,
    }),
    [
      walletInfo.error,
      walletInfo.loading,
      walletInfo.updatedAt,
      walletInfo.value,
      updateData,
    ],
  );

  return results;
}
