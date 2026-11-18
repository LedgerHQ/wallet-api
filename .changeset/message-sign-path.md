---
"@ledgerhq/wallet-api-core": minor
---

Accept an optional `options.path` on `message.sign`: the derivation path of the address to sign with, for example `m/84'/0'/0'/0/5`. It lets a dapp ask for a signature from an address of the account other than the current receive address, using a path it got from `bitcoin.getAddresses`. Which paths are accepted is up to the wallet. Requests without `path` are unchanged. A host must upgrade core and server together: a server built against an older core strips `path` silently.
