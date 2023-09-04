import { useCallback, useContext, useEffect, useMemo } from "react";
import { WalletAPIProviderContext } from "../components/WalletAPIProvider/context";
import { updateLoadableInState } from "../components/WalletAPIProvider/helpers";

type UseUserIdReturn = {
  userId: string | null;
  updatedAt: Date | null;
  error: unknown;
  loading: boolean;
  updateData: () => Promise<void>;
};

export function useUserId(): UseUserIdReturn {
  const { client, state, setState } = useContext(WalletAPIProviderContext);

  const { userId } = state;

  const updateData = useCallback(async () => {
    if (!client) {
      return;
    }

    updateLoadableInState(setState, "userId", { loading: true });

    try {
      const newUserId = await client.wallet.userId();

      updateLoadableInState(setState, "userId", {
        value: newUserId,
        updatedAt: new Date(),
        loading: false,
      });
    } catch (error) {
      updateLoadableInState(setState, "userId", {
        error,
        updatedAt: new Date(),
        loading: false,
      });
    }
  }, [client, setState]);

  useEffect(() => {
    if (!userId.value && !userId.loading && !userId.error) {
      void updateData();
    }
  }, [userId.value, updateData, userId.loading, userId.error]);

  const results = useMemo(
    () => ({
      userId: userId.value,
      updatedAt: userId.updatedAt,
      loading: userId.loading,
      error: userId.error,
      updateData,
    }),
    [userId.error, userId.loading, userId.updatedAt, userId.value, updateData],
  );

  return results;
}
