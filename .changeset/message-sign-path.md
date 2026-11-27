---
"@ledgerhq/wallet-api-core": minor
---

Accept an optional `options.path` on `message.sign`: the full derivation path of the address to sign with, for example `m/84'/0'/0'/0/5`. It lets a dapp ask for a signature from an address of the account other than the current receive address, using a path it got from `bitcoin.getAddresses`. Wallets must reject a path that does not belong to `accountId`. On single-address accounts such as EVM, only the account's own path is valid. Requests without `path` are unchanged. A host must upgrade core and server together: a server built against an older core strips `path` silently.
