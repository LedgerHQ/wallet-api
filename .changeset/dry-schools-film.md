---
"@ledgerhq/wallet-api-simulator": major
---

refactor(simulator): adapt to new server architecture without RxJS

- Remove RxJS dependency from simulator package
- Update SimulatorProfile type to remove accounts and currencies arrays
- Implement account.list and currency.list handlers in standard profile
- Update account.request handler to filter accounts directly instead of using observables
- Remove observable subscriptions from profile application logic
- Simplify helper functions by removing setAccounts and setCurrencies calls
