---
"@ledgerhq/wallet-api-core": minor
"@ledgerhq/wallet-api-client": minor
"@ledgerhq/wallet-api-server": minor
---

Add an optional `balances` breakdown (`value`, `locked`, `pool`, `private`) to the account, and optional `pools` and `private` filters to `account.getMaxSpendable`. The client takes the filters as a trailing `options` parameter. Accounts and requests without them are unchanged. A host must upgrade core and server together: a server built against an older core strips the filters silently and answers the unfiltered max.
