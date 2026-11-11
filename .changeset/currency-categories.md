---
"@ledgerhq/wallet-api-core": minor
---

Add an optional `categories: string[]` to `Currency` (for example `["stocks"]` or `["stablecoins"]`), on crypto and token currencies. `currency.list` keeps the field when the wallet sends it. An empty array means that the wallet knows no category. The field is absent when the wallet does not send it. A live app must use a client built against this core version, because an older client removes `categories` when it parses the result.
