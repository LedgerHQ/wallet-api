---
"@ledgerhq/wallet-api-tools": minor
"@ledgerhq/wallet-api-simulator": minor
"@ledgerhq/wallet-api-client": minor
"@ledgerhq/wallet-api-server": minor
"@ledgerhq/wallet-api-core": minor
"@ledgerhq/wallet-api-docs": minor
---

feat(bitcoin): add `getAddresses` across wallet-api stack

Introduce `bitcoin.getAddresses` end-to-end in core/client/server/simulator and tooling (types, handlers, permissions, command selector, and docs). Also fix server intention filtering so mixed requests keep supported `"payment"` intentions instead of dropping all results, with simulator tests covering unsupported and mixed intention cases.
