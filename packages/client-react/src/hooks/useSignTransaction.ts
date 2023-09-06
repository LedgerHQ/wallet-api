import type { WalletAPIClient } from "@ledgerhq/wallet-api-client";
import { useCallback, useContext, useMemo, useState } from "react";
import { WalletAPIProviderContext } from "../components/WalletAPIProvider/context";

type UseSignTransactionState = {
  pending: boolean;
  signature: Buffer | null;
  error: unknown;
};

type SignTransactionParams = Parameters<WalletAPIClient["transaction"]["sign"]>;

type UseSignTransactionReturn = {
  signTransaction: (...params: SignTransactionParams) => Promise<void>;
} & UseSignTransactionState;

const initialState: UseSignTransactionState = {
  pending: false,
  signature: null,
  error: null,
};

export function useSignTransaction(): UseSignTransactionReturn {
  const { client } = useContext(WalletAPIProviderContext);
  const [state, setState] = useState<UseSignTransactionState>(initialState);

  const signTransaction = useCallback(
    async (...params: SignTransactionParams) => {
      try {
        setState((oldState) => ({
          ...oldState,
          pending: true,
          error: null,
        }));

        if (!client) {
          throw new Error("WalletAPIClient is not initialised");
        }

        const signature = await client.transaction.sign(...params);

        setState((oldState) => ({
          ...oldState,
          pending: false,
          signature,
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
      signTransaction,
      ...state,
    }),
    [signTransaction, state],
  );

  return result;
}
