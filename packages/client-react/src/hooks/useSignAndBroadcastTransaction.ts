import type { TransactionModule } from "@ledgerhq/wallet-api-client/lib/modules/Transaction";
import { useCallback, useContext, useMemo, useState } from "react";
import { WalletAPIProviderContext } from "../components/WalletAPIProvider/context";

type UseSignAndBroadcastTransactionReturn = {
  signAndBroadcastTransaction: (
    ...params: Parameters<TransactionModule["signAndBroadcast"]>
  ) => Promise<string>;
  pending: boolean;
};

export function useSignAndBroadcastTransaction(): UseSignAndBroadcastTransactionReturn {
  const { client } = useContext(WalletAPIProviderContext);
  const [pending, setPending] = useState(false);

  const signAndBroadcastTransaction = useCallback(
    async (...params: Parameters<TransactionModule["signAndBroadcast"]>) => {
      if (!client) {
        throw new Error("WalletAPIClient is not initialised");
      }

      setPending(true);
      const result = await client.transaction.signAndBroadcast(...params);
      setPending(false);

      return result;
    },
    [client]
  );

  const result = useMemo(
    () => ({
      signAndBroadcastTransaction,
      pending,
    }),
    [signAndBroadcastTransaction, pending]
  );

  return result;
}
