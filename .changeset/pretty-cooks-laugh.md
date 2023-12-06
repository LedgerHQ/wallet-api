---
"@ledgerhq/wallet-api-server": patch
---

fix: remove react exports from main index file

A React hooks was exported, making it impossible to import the server code from the main index file in other frameworks
