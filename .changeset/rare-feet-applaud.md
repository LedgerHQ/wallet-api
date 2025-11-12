---
"@ledgerhq/wallet-api-server": major
---

refactor(server)!: remove RxJS dependency and simplify architecture

BREAKING CHANGE: Major API changes to WalletAPIServer

- Remove RxJS dependency from server package
- Remove observable-based state management (accounts$, currencies$, etc.)
- Simplify WalletHandlers interface to accept accountId strings instead of Account objects
- Remove setAccounts() and setCurrencies() methods from WalletAPIServer
- Update all internal handlers to delegate data fetching to wallet implementations
- Convert permissions from observables to simple Set data structure
- Add new wallet handlers: account.list and currency.list
- Update React hook to remove accounts and currencies props
- Simplify WalletContext by removing observable properties
- Update exchange handlers to accept accountId instead of Account objects

Migration guide:

- Wallet integrations must now implement account.list and currency.list handlers
- Replace account parameter with accountId in all wallet handlers
- Remove direct calls to setAccounts() and setCurrencies()
- Update useWalletAPIServer hook usage to remove accounts/currencies props
