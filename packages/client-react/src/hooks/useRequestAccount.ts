import type { Account, WalletAPIClient } from "@ledgerhq/wallet-api-client";
import { useCallback, useContext, useMemo, useState } from "react";
import { WalletAPIProviderContext } from "../components/WalletAPIProvider/context";

type UseRequestAccountState = {
  pending: boolean;
  account: Account | null;
  error: unknown;
};

type RequestAccountParams = Parameters<WalletAPIClient["account"]["request"]>;

type UseRequestAccountReturn = {
  requestAccount: (...params: RequestAccountParams) => Promise<void>;
} & UseRequestAccountState;

const initialState: UseRequestAccountState = {
  pending: false,
  account: null,
  error: null,
};

export function useRequestAccount(): UseRequestAccountReturn {
  const { client } = useContext(WalletAPIProviderContext);
  const [state, setState] = useState<UseRequestAccountState>(initialState);

  const requestAccount = useCallback(
    async (...params: RequestAccountParams) => {
      try {
        setState((oldState) => ({
          ...oldState,
          pending: true,
          error: null,
        }));

        if (!client) {
          throw new Error("WalletAPIClient is not initialised");
        }

        const account = await client.account.request(...params);

        setState((oldState) => ({
          ...oldState,
          pending: false,
          account,
        }));
      } catch (error) {
        setState((oldState) => ({
          ...oldState,
          pending: false,
          error,
        }));
      }
    },
    [client],
  );

  const result = useMemo(
    () => ({
      requestAccount,
      ...state,
    }),
    [requestAccount, state],
  );

  return result;
}
