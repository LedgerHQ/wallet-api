import type { TransactionModule } from "@ledgerhq/wallet-api-client/lib/modules/Transaction";
import { useCallback, useContext, useMemo, useState } from "react";
import { WalletAPIProviderContext } from "../components/WalletAPIProvider/context";

type UseSignTransactionReturn = {
  signTransaction: (
    ...params: Parameters<TransactionModule["sign"]>
  ) => Promise<Buffer>;
  pending: boolean;
};

export function useSignTransaction(): UseSignTransactionReturn {
  const { client } = useContext(WalletAPIProviderContext);
  const [pending, setPending] = useState(false);

  const signTransaction = useCallback(
    async (...params: Parameters<TransactionModule["sign"]>) => {
      if (!client) {
        throw new Error("WalletAPIClient is not initialised");
      }

      setPending(true);
      const result = await client.transaction.sign(...params);
      setPending(false);

      return result;
    },
    [client]
  );

  const result = useMemo(
    () => ({
      signTransaction,
      pending,
    }),
    [signTransaction, pending]
  );

  return result;
}
