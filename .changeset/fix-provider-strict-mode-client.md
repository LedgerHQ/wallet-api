---
"@ledgerhq/wallet-api-client-react": patch
---

fix(client-react): create WalletAPIClient once in WalletAPIProvider

`WalletAPIProvider` created its client inside a `useState` initializer. Because
the `WalletAPIClient` constructor has a side effect — it registers itself on
`transport.onMessage` — React strict mode's double-invocation constructed a
second, discarded client whose constructor hijacked the transport. Responses
were then routed to a client with no pending requests, throwing
`no ongoingRequest`.

The client is now instantiated exactly once via the ref "create once" pattern,
so a single instance owns the transport even under strict mode.
