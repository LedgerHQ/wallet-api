---
"@ledgerhq/wallet-api-server": major
---

refactor!: remove useWalletAPIServer React hook from server package

BREAKING CHANGE: The useWalletAPIServer React hook has been removed from
@ledgerhq/wallet-api-server (v3.0.0). Users should instantiate WalletAPIServer
directly using the constructor or implement their own React hook.

Changes:
- Remove useWalletAPIServer hook and react.ts file from server package
- Remove React peer dependencies from package.json
- Update documentation to reflect removal and provide migration guide
- Update examples to use WalletAPIServer constructor directly
- Remove setAccounts() and setCurrencies() references (v2.0.0 changes)
- Add callouts explaining new account.list and currency.list handler requirements
- Update Ledger Live integration docs to clarify custom hook implementation

Migration:
- Use WalletAPIServer constructor directly for simple use cases
- Implement custom React hook for advanced state management (see Ledger Live example)
