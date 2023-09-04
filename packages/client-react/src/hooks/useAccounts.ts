import type { Account } from "@ledgerhq/wallet-api-client";
import { useCallback, useContext, useEffect, useMemo } from "react";
import { WalletAPIProviderContext } from "../components/WalletAPIProvider/context";
import { updateLoadableInState } from "../components/WalletAPIProvider/helpers";

type UseAccountsReturn = {
  accounts: Account[] | null;
  updatedAt: Date | null;
  error: unknown;
  loading: boolean;
  updateData: () => Promise<void>;
};

export function useAccounts(): UseAccountsReturn {
  const { client, state, setState } = useContext(WalletAPIProviderContext);

  const { accounts } = state;

  const updateData = useCallback(async () => {
    if (!client) {
      return;
    }

    updateLoadableInState(setState, "accounts", { loading: true });

    try {
      const newAccounts = await client.account.list();

      updateLoadableInState(setState, "accounts", {
        value: newAccounts,
        updatedAt: new Date(),
        loading: false,
      });
    } catch (error) {
      updateLoadableInState(setState, "accounts", {
        error,
        updatedAt: new Date(),
        loading: false,
      });
    }
  }, [client, setState]);

  useEffect(() => {
    if (!accounts.value && !accounts.loading && !accounts.error) {
      void updateData();
    }
  }, [accounts.error, accounts.loading, accounts.value, updateData]);

  const results = useMemo(
    () => ({
      accounts: accounts.value,
      updatedAt: accounts.updatedAt,
      loading: accounts.loading,
      error: accounts.error,
      updateData,
    }),
    [
      accounts.error,
      accounts.loading,
      accounts.updatedAt,
      accounts.value,
      updateData,
    ],
  );

  return results;
}
