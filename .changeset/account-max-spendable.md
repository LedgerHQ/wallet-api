---
"@ledgerhq/wallet-api-core": minor
"@ledgerhq/wallet-api-client": minor
"@ledgerhq/wallet-api-server": minor
"@ledgerhq/wallet-api-simulator": minor
---

Add `account.getMaxSpendable({ accountId }) -> { maxSpendable }`. The wallet returns the single-transaction send-max heuristic for one account (atomic amount as a string). Hosts that do not implement the method reject with "not implemented".
