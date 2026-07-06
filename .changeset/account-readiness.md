---
"@ledgerhq/wallet-api-core": minor
---

Add an optional `readiness` field to the `Account` type to let live-apps know whether an account is ready for outgoing operations (send, swap, etc.).

The field is a structured object `{ ready: boolean; reason?: string }` and stays chain-agnostic, covering activation concepts such as Tezos key revelation and Sei address association. A documented starter set of `reason` values is exported as `AccountReadinessReason` (e.g. `"activationRequired"`). When `readiness` is omitted, the account is assumed ready.
