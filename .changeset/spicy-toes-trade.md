---
"@ledgerhq/wallet-api-simulator": minor
"@ledgerhq/wallet-api-client": minor
"@ledgerhq/wallet-api-server": minor
"@ledgerhq/wallet-api-core": minor
---

feat: add `device.select` and `device.open`

Split `device.transport` into `device.select` and `device.open` in order to be able to call multiple times `device.open` without having to select a device again
