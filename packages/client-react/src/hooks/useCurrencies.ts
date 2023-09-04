import type { Currency } from "@ledgerhq/wallet-api-client";
import { useCallback, useContext, useEffect, useMemo } from "react";
import { WalletAPIProviderContext } from "../components/WalletAPIProvider/context";
import { updateLoadableInState } from "../components/WalletAPIProvider/helpers";

type UseCurrenciesReturn = {
  currencies: Currency[] | null;
  updatedAt: Date | null;
  error: unknown;
  loading: boolean;
  updateData: () => Promise<void>;
};

export function useCurrencies(): UseCurrenciesReturn {
  const { client, state, setState } = useContext(WalletAPIProviderContext);

  const { currencies } = state;

  const updateData = useCallback(async () => {
    if (!client) {
      return;
    }

    updateLoadableInState(setState, "currencies", { loading: true });

    try {
      const newCurrencies = await client.currency.list();

      updateLoadableInState(setState, "currencies", {
        value: newCurrencies,
        updatedAt: new Date(),
        loading: false,
      });
    } catch (error) {
      updateLoadableInState(setState, "currencies", {
        error,
        updatedAt: new Date(),
        loading: false,
      });
    }
  }, [client, setState]);

  useEffect(() => {
    if (!currencies.value && !currencies.loading && !currencies.error) {
      void updateData();
    }
  }, [currencies.error, currencies.loading, currencies.value, updateData]);

  const results = useMemo(
    () => ({
      currencies: currencies.value,
      updatedAt: currencies.updatedAt,
      loading: currencies.loading,
      error: currencies.error,
      updateData,
    }),
    [
      currencies.error,
      currencies.loading,
      currencies.updatedAt,
      currencies.value,
      updateData,
    ],
  );

  return results;
}
