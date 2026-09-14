---
"@ledgerhq/wallet-api-client": patch
"@ledgerhq/wallet-api-simulator": patch
---

chore(deps): bump @ledgerhq/hw-transport to 6.36.0 and drop its patch

`@ledgerhq/hw-transport` moved out of the `ledger-live` monorepo into the new
`LedgerHQ/ts-libs` monorepo and was republished from there as `6.36.0` with no
API change. It pulls `@ledgerhq/devices` `8.18.0` and `@ledgerhq/logs` `6.19.0`.

The `@ledgerhq/hw-transport@6.35.3` patch is removed: it existed only to retype
`Transport._events` from `EventEmitter<[never]>` to a plain `EventEmitter` so
`tsc` declaration emit would pass under `@types/node` 25. `6.36.0` ships
`EventEmitter<any>`, which satisfies the `EventMap` constraint on its own.
