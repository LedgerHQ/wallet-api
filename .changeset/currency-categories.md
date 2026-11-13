---
"@ledgerhq/wallet-api-core": minor
---

Add an optional `categories: string[]` to `Currency` (for example `["stocks"]` or `["stablecoins"]`), on crypto and token currencies. `currency.list` keeps the field when the wallet sends it. An empty array means that the wallet knows no category for this currency. The field is absent when the wallet has no category data for this currency, for example on a `CryptoCurrency` in Ledger Wallet. The client changes an invalid value to `undefined`, so one bad currency does not fail `currency.list`. A live app must use a client built against this core version, because an older client removes `categories` when it parses the result.
