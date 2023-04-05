import type { Account } from "@ledgerhq/wallet-api-client";
import type { AccountModule } from "@ledgerhq/wallet-api-client/lib/modules/Account";
import { useCallback, useContext, useMemo, useState } from "react";
import { WalletAPIProviderContext } from "../components/WalletAPIProvider/context";

type UseRequestAccountReturn = {
  requestAccount: (
    ...params: Parameters<AccountModule["request"]>
  ) => Promise<Account>;
  pending: boolean;
};

export function useRequestAccount(): UseRequestAccountReturn {
  const { client } = useContext(WalletAPIProviderContext);
  const [pending, setPending] = useState(false);

  const requestAccount = useCallback(
    async (...params: Parameters<AccountModule["request"]>) => {
      if (!client) {
        throw new Error("WalletAPIClient is not initialised");
      }

      try {
        setPending(true);
        const result = await client.account.request(...params);
        setPending(false);
        return result;
      } catch (error) {
        setPending(false);
        throw error;
      }
    },
    [client]
  );

  const result = useMemo(
    () => ({
      requestAccount,
      pending,
    }),
    [requestAccount, pending]
  );

  return result;
}
