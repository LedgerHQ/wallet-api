import { useCallback, useContext, useEffect, useMemo } from "react";
import { WalletAPIProviderContext } from "../components/WalletAPIProvider/context";
import { updateLoadableInState } from "../components/WalletAPIProvider/helpers";

type UseCapabilitiesReturn = {
  capabilities: string[] | null;
  updatedAt: Date | null;
  error: unknown;
  loading: boolean;
  updateData: () => Promise<void>;
};

export function useCapabilities(): UseCapabilitiesReturn {
  const { client, state, setState } = useContext(WalletAPIProviderContext);

  const { capabilities } = state;

  const updateData = useCallback(async () => {
    if (!client) {
      return;
    }

    updateLoadableInState(setState, "capabilities", { loading: true });

    try {
      const newCapabilities = await client.wallet.capabilities();

      updateLoadableInState(setState, "capabilities", {
        value: newCapabilities,
        updatedAt: new Date(),
        loading: false,
      });
    } catch (error) {
      updateLoadableInState(setState, "capabilities", {
        error,
        updatedAt: new Date(),
        loading: false,
      });
    }
  }, [client, setState]);

  useEffect(() => {
    if (!capabilities.value && !capabilities.loading && !capabilities.error) {
      void updateData();
    }
  }, [
    capabilities.error,
    capabilities.loading,
    capabilities.value,
    updateData,
  ]);

  const results = useMemo(
    () => ({
      capabilities: capabilities.value,
      updatedAt: capabilities.updatedAt,
      loading: capabilities.loading,
      error: capabilities.error,
      updateData,
    }),
    [
      capabilities.error,
      capabilities.loading,
      capabilities.updatedAt,
      capabilities.value,
      updateData,
    ],
  );

  return results;
}
