import type { WalletAPIClient } from "@ledgerhq/wallet-api-client";
import { useCallback, useContext, useMemo, useState } from "react";
import { WalletAPIProviderContext } from "../components/WalletAPIProvider/context";

type UseSignMessageState = {
  pending: boolean;
  signature: Buffer | null;
  error: unknown;
};

type SignMessageParams = Parameters<WalletAPIClient["message"]["sign"]>;

type UseSignMessageReturn = {
  signMessage: (...params: SignMessageParams) => Promise<void>;
} & UseSignMessageState;

const initialState: UseSignMessageState = {
  pending: false,
  signature: null,
  error: null,
};

export function useSignMessage(): UseSignMessageReturn {
  const { client } = useContext(WalletAPIProviderContext);
  const [state, setState] = useState<UseSignMessageState>(initialState);

  const signMessage = useCallback(
    async (...params: SignMessageParams) => {
      try {
        setState((oldState) => ({
          ...oldState,
          pending: true,
          error: null,
        }));

        if (!client) {
          throw new Error("WalletAPIClient is not initialised");
        }

        const signature = await client.message.sign(...params);

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
      signMessage,
      ...state,
    }),
    [signMessage, state],
  );

  return result;
}
