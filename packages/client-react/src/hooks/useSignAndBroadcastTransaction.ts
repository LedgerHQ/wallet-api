import type { TransactionModule } from "@ledgerhq/wallet-api-client/lib/modules/Transaction";
import { useCallback, useContext, useMemo, useState } from "react";
import { WalletAPIProviderContext } from "../components/WalletAPIProvider/context";

type UseSignAndBroadcastTransactionState = {
  pending: boolean;
  transactionHash: string | null;
  error: unknown;
};

type UseSignAndBroadcastTransactionReturn = {
  signAndBroadcastTransaction: (
    ...params: Parameters<TransactionModule["signAndBroadcast"]>
  ) => Promise<void>;
} & UseSignAndBroadcastTransactionState;

const initialState: UseSignAndBroadcastTransactionState = {
  pending: false,
  transactionHash: null,
  error: null,
};

export function useSignAndBroadcastTransaction(): UseSignAndBroadcastTransactionReturn {
  const { client } = useContext(WalletAPIProviderContext);
  const [state, setState] = useState(initialState);

  const signAndBroadcastTransaction = useCallback(
    async (...params: Parameters<TransactionModule["signAndBroadcast"]>) => {
      try {
        setState((oldState) => ({
          ...oldState,
          pending: true,
          error: null,
        }));

        if (!client) {
          throw new Error("WalletAPIClient is not initialised");
        }

        const transactionHash = await client.transaction.signAndBroadcast(
          ...params
        );

        setState((oldState) => ({
          ...oldState,
          pending: false,
          transactionHash,
        }));
      } catch (error) {
        setState((oldState) => ({
          ...oldState,
          pending: false,
          error,
        }));
      }
    },
    [client]
  );

  const result = useMemo(
    () => ({
      signAndBroadcastTransaction,
      ...state,
    }),
    [signAndBroadcastTransaction, state]
  );

  return result;
}
