import type {
  Account,
  Currency,
  Logger,
  Permission,
  Transport,
} from "@ledgerhq/wallet-api-core";
import { useCallback, useEffect, useRef } from "react";
import { WalletAPIServer } from "./WalletAPIServer";
import type { ServerConfig } from "./types";

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
  const server = useRef<WalletAPIServer>();
  // I don't really like this but it comes from the doc
  // https://react.dev/reference/react/useRef#avoiding-recreating-the-ref-contents
  if (server.current === undefined) {
    server.current = new WalletAPIServer(transport, config, logger);
  }

  useEffect(() => {
    server.current?.setConfig(config);
  }, [config]);

  useEffect(() => {
    server.current?.setPermissions(permission);
  }, [permission]);

  useEffect(() => {
    server.current?.setCurrencies(currencies);
  }, [currencies]);

  useEffect(() => {
    server.current?.setAccounts(accounts);
  }, [accounts]);

  const onMessage = useCallback(
    (event: string) => {
      transport.onMessage?.(event);
    },
    [transport]
  );

  return {
    server: server.current,
    onMessage,
  };
}
