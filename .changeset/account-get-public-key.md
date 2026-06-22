---
"@ledgerhq/wallet-api-core": minor
"@ledgerhq/wallet-api-client": minor
"@ledgerhq/wallet-api-server": minor
"@ledgerhq/wallet-api-simulator": minor
---

Add `account.getPublicKey({ accountId, derivationPath? }) -> { publicKey }`. The wallet resolves the key per family in its native encoding (e.g. base58 for Tezos); unsupported families reject with "not implemented".

Deprecate `Account.publicKey` in favor of this method; the field is not populated by the wallet.
