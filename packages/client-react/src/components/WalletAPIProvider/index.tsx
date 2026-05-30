import { WalletAPIClient } from "@ledgerhq/wallet-api-client";
import { useEffect, useMemo, useRef, useState } from "react";
import { WalletAPIProviderContext, initialContextValue } from "./context";
import type {
  WalletAPIProviderContextState,
  WalletAPIProviderContextValue,
  WalletAPIProviderProps,
} from "./types";

export * from "./types";

export function WalletAPIProvider({
  children,
  transport,
  logger,
  getCustomModule,
  eventHandlers,
  client: providedClient,
}: WalletAPIProviderProps) {
  const [state, setState] = useState<WalletAPIProviderContextState>(
    initialContextValue.state,
  );

  // A WalletAPIClient registers itself on `transport.onMessage` in its
  // constructor, so it must be instantiated exactly once. A `useState`
  // initializer is unsafe here: React strict mode invokes it twice, which
  // constructs a second (discarded) client whose constructor hijacks the
  // transport, leaving responses routed to a client with no pending requests
  // ("no ongoingRequest"). The ref "create once" pattern guarantees a single
  // instance that owns the transport.
  const clientRef = useRef<WalletAPIClient | undefined>(undefined);
  clientRef.current ??=
    providedClient ??
    new WalletAPIClient(transport, logger, getCustomModule, eventHandlers);
  // Reading the ref during render is intentional here: the client is created
  // once (above) and its identity is stable for the lifetime of the provider,
  // so it can safely be passed down without triggering re-renders.
  // eslint-disable-next-line react-hooks/refs -- stable create-once instance
  const client = clientRef.current;

  useEffect(() => {
    if (eventHandlers) {
      client?.setEventHandlers(eventHandlers);
    }
  }, [client, eventHandlers]);

  const value = useMemo<WalletAPIProviderContextValue>(
    () => ({
      client,
      state,
      setState,
    }),
    [client, state, setState],
  );

  return (
    <WalletAPIProviderContext.Provider value={value}>
      {children}
    </WalletAPIProviderContext.Provider>
  );
}
