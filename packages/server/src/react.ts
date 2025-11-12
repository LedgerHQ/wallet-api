import type { Logger, Permission, Transport } from "@ledgerhq/wallet-api-core";
import { useCallback, useEffect, useRef } from "react";
import { WalletAPIServer } from "./WalletAPIServer";
import type { CustomHandlers, ServerConfig } from "./types";

export function useWalletAPIServer({
  transport,
  config,
  logger,
  permission,
  customHandlers,
}: {
  transport: Transport;
  config: ServerConfig;
  logger?: Logger;
  // TODO: remove omit<Permission, "currencyIds"> in next major release of core
  permission: Omit<Permission, "currencyIds">;
  customHandlers?: CustomHandlers;
}) {
  const server = useRef<WalletAPIServer>();
  // I don't really like this but it comes from the doc
  // https://react.dev/reference/react/useRef#avoiding-recreating-the-ref-contents
  if (server.current === undefined) {
    server.current = new WalletAPIServer(
      transport,
      config,
      logger,
      customHandlers,
    );
  }

  useEffect(() => {
    if (customHandlers) {
      server.current?.setCustomHandlers(customHandlers);
    }
  }, [customHandlers]);

  useEffect(() => {
    server.current?.setConfig(config);
  }, [config]);

  useEffect(() => {
    server.current?.setPermissions(permission);
  }, [permission]);

  const onMessage = useCallback(
    (event: string) => {
      transport.onMessage?.(event);
    },
    [transport],
  );

  return {
    server: server.current,
    onMessage,
  };
}
