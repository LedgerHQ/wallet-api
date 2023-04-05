import type { MessageModule } from "@ledgerhq/wallet-api-client/lib/modules/Message";
import { useCallback, useContext, useMemo, useState } from "react";
import { WalletAPIProviderContext } from "../components/WalletAPIProvider/context";

type UseSignMessageReturn = {
  signMessage: (
    ...params: Parameters<MessageModule["sign"]>
  ) => Promise<Buffer>;
  pending: boolean;
};

export function useSignMessage(): UseSignMessageReturn {
  const { client } = useContext(WalletAPIProviderContext);
  const [pending, setPending] = useState(false);

  const signMessage = useCallback(
    async (...params: Parameters<MessageModule["sign"]>) => {
      if (!client) {
        throw new Error("WalletAPIClient is not initialised");
      }

      try {
        setPending(true);
        const result = await client.message.sign(...params);
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
      signMessage,
      pending,
    }),
    [signMessage, pending]
  );

  return result;
}
