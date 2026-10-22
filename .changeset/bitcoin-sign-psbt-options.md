---
"@ledgerhq/wallet-api-core": minor
"@ledgerhq/wallet-api-client": minor
"@ledgerhq/wallet-api-server": minor
---

Accept an optional `options` (`hwAppId`, `dependencies`) on `bitcoin.signPsbt`, with the same shape as `transaction.signRaw`. The server forwards it to the wallet handler, and the client takes it as a trailing parameter. `hwAppId` names the device app that signs; which apps are accepted is up to the wallet. Requests without `options` are unchanged. A host must upgrade core and server together: a server built against an older core strips `options` silently.
