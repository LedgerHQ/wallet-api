---
"@ledgerhq/wallet-api-core": major
"@ledgerhq/wallet-api-client": major
"@ledgerhq/wallet-api-client-react": major
"@ledgerhq/wallet-api-server": major
"@ledgerhq/wallet-api-simulator": major
"@ledgerhq/wallet-api-manifest-validator": major
"@ledgerhq/wallet-api-manifest-validator-cli": patch
---

Support `bignumber.js` 11. `bignumber.js` moves from `dependencies` to `peerDependencies` (`^9.1.2 || ^11.1.5`), so hosts must install it. The host and wallet-api then resolve a single version and share the `BigNumber` type. A host that loads both the ESM and CJS builds can still end up with two copies, as it already could on 9.

Raw transaction schemas validate every numeric field. An amount or fee must be a string of at most 100 characters: a decimal (optionally signed, with an exponent of at most 4 digits) or `0x`/`0o`/`0b` with the matching digits. Values like `"abc"`, `"12,5"`, `"1_000"`, `"NaN"`, `"Infinity"`, `"1e10000"`, or `""` for a required field are rejected. TON payload integers must be strings that `BigInt` accepts, and cannot be `""`. Empty optional fees, an empty VeChain `estimatedFees`, and empty nullable TON `queryId`/`appId` keep their previous meaning. `transaction.sign`, `transaction.signAndBroadcast` and `exchange.complete` answer `INVALID_PARAMS` with the field path, and never pass a `NaN` amount to the wallet.

Account `balance` and `spendableBalance` must look like `BigNumber#toString` output (a decimal with an optional exponent, `"NaN"`, `"Infinity"` or `"-Infinity"`). Otherwise `account.list` and `account.request` reject on the client with the usual zod error, for the whole response, instead of throwing a raw bignumber.js error.

Not changed: negative and fractional transaction values, which the wallet handlers still check. With `bignumber.js` 11, calling `deserializeTransaction` or `deserializeAccount` directly on a non-numeric string throws instead of returning `NaN`.
