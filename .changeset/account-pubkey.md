---
"@ledgerhq/wallet-api-core": minor
---

Add an optional `publicKey` field to `Account` (type, schema, serializer), exposing an account's public key for account-based families that have one. Enables dApp flows that need the public key up front.
