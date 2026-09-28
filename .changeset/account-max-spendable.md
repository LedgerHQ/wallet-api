---
"@ledgerhq/wallet-api-core": minor
---

Add an optional `maxSpendable` field to the `Account` type for the heuristic single-transaction send-max amount (fees, UTXO/input limits, etc.). Typically ≤ `spendableBalance`; omitted when not computed by the host.
