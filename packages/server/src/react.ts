import type {
  Account,
  Currency,
  Permission,
  Transport,
} from "@ledgerhq/wallet-api-core";
import { useCallback, useEffect, useMemo } from "react";
import { WalletAPIServer } from "./WalletAPIServer";

export function useWalletAPIServer({
  transport,
  accounts,
  currencies,
  permission,
}: {
  transport: Transport;
  accounts: Account[];
  currencies: Currency[];
  permission: Permission;
}) {
  const server = useMemo(() => {
    return new WalletAPIServer(transport);
  }, [transport]);

  useEffect(() => {
    server.setPermissions(permission);
  }, [permission, server]);

  useEffect(() => {
    server.setCurrencies(currencies);
  }, [currencies, server]);

  useEffect(() => {
    server.setAccounts(accounts);
  }, [accounts, server]);

  const onMessage = useCallback(
    (event: string) => {
      transport.onMessage?.(event);
    },
    [transport]
  );

  return {
    server,
    onMessage,
  };
}
