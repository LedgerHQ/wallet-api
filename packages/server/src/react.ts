import type {
  Account,
  Currency,
  Logger,
  Permission,
  Transport,
} from "@ledgerhq/wallet-api-core";
import { useCallback, useEffect, useMemo } from "react";
import type { ServerConfig } from "./types";
import { WalletAPIServer } from "./WalletAPIServer";

export function useWalletAPIServer({
  transport,
  config,
  logger,
  accounts,
  currencies,
  permission,
}: {
  transport: Transport;
  config: ServerConfig;
  logger?: Logger;
  accounts: Account[];
  currencies: Currency[];
  permission: Permission;
}) {
  const server = useMemo(() => {
    return new WalletAPIServer(transport, config, logger);
  }, [config, logger, transport]);

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
