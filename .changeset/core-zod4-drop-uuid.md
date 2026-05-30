---
"@ledgerhq/wallet-api-core": patch
"@ledgerhq/wallet-api-client": patch
"@ledgerhq/wallet-api-client-react": patch
"@ledgerhq/wallet-api-server": patch
"@ledgerhq/wallet-api-simulator": patch
"@ledgerhq/wallet-api-manifest-validator": patch
"@ledgerhq/wallet-api-manifest-validator-cli": patch
---

chore(deps): upgrade core to zod 4, drop uuid, bump TypeScript to 6

Bumps `zod` in `@ledgerhq/wallet-api-core` from `^3.22.4` to `^4.0.0` (resolves
to 4.3.6, capped by the existing `zod@>=4.4.0` override). zod 4's type
definitions require TypeScript >= 5.4, and because core re-exports zod schemas
as part of its public API, every package that type-checks against core is
bumped from TypeScript `^5.3.3` to `^6.0.3`. Each library `tsconfig.json` gains
`ignoreDeprecations: "6.0"` (Node10 module resolution / baseUrl stay for now)
and the build configs set an explicit `rootDir`.

Also replaces the single `uuid` v4 usage in `RpcNode` with the native
`crypto.randomUUID()`, removing the `uuid` and `@types/uuid` dependencies
(uuid v14 is ESM-only and incompatible with the package's CommonJS build).
Note: `crypto.randomUUID()` requires a secure context in browsers (HTTPS or
`localhost`); `RpcNode.request` will throw if called over plain HTTP. This is
consistent with wallet-api's dapp/wallet usage, which always runs over HTTPS.
