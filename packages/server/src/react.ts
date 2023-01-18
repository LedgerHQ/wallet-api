import { useEffect, useRef, useCallback, useState } from "react";
import type {
  Account,
  Currency,
  Permission,
  Transport,
} from "@ledgerhq/wallet-api-core";
import { WalletAPIServer } from "./WalletAPIServer";
import type { WalletHandlers } from "./types";

export function useWalletAPIServer({
  transport,
  accounts,
  currencies,
  permission,
}: {
  transport?: Transport | null;
  accounts: Account[];
  currencies: Currency[];
  permission?: Permission;
}): {
  isReady: boolean;
  setHandler: SetHandler;
  onMessage: (event: string) => void;
} {
  const serverRef = useRef<WalletAPIServer>();
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    if (!transport) return;

    serverRef.current = new WalletAPIServer(transport);
    setIsReady(true);
  }, [transport]);

  useEffect(() => {
    if (!isReady) return;

    if (permission) {
      serverRef.current?.setPermissions(permission);
    }

    serverRef.current?.setCurrencies(currencies);
  }, [isReady, permission, accounts, currencies]);

  useEffect(() => {
    if (!isReady || !permission) return;

    serverRef.current?.setPermissions(permission);
  }, [isReady, permission]);

  useEffect(() => {
    if (!isReady) return;

    serverRef.current?.setAccounts(accounts);
  }, [isReady, accounts]);

  useEffect(() => {
    if (!isReady) return;

    serverRef.current?.setCurrencies(currencies);
  }, [isReady, currencies]);

  const setHandler: SetHandler = useCallback((...args) => {
    serverRef.current?.setHandler(...args);
  }, []);

  const onMessage = useCallback(
    (event: string) => {
      transport?.onMessage?.(event);
    },
    [transport]
  );

  return {
    isReady,
    setHandler,
    onMessage,
  };
}

interface SetHandler {
  <K extends keyof WalletHandlers>(
    methodName: K,
    method: WalletHandlers[K]
  ): void;
}
