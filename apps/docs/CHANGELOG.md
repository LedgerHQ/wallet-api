# @ledgerhq/wallet-api-docs

## 0.4.0

### Minor Changes

- [#515](https://github.com/LedgerHQ/wallet-api/pull/515) [`d5ad3af`](https://github.com/LedgerHQ/wallet-api/commit/d5ad3af905b5661a579235493f9059f91117dc11) Thanks [@Justkant](https://github.com/Justkant)! - feat(bitcoin): add `getAddresses` across wallet-api stack

  Introduce `bitcoin.getAddresses` end-to-end in core/client/server/simulator and tooling (types, handlers, permissions, command selector, and docs). Also fix server intention filtering so mixed requests keep supported `"payment"` intentions instead of dropping all results, with simulator tests covering unsupported and mixed intention cases.

## 0.3.2

### Patch Changes

- [#490](https://github.com/LedgerHQ/wallet-api/pull/490) [`59e6b33`](https://github.com/LedgerHQ/wallet-api/commit/59e6b33c106d965603b2e414aec9ebb387146414) Thanks [@Justkant](https://github.com/Justkant)! - chore: update some dependencies

## 0.3.1

### Patch Changes

- [#482](https://github.com/LedgerHQ/wallet-api/pull/482) [`38988e6`](https://github.com/LedgerHQ/wallet-api/commit/38988e60159a7b374175e6c73b197c314c2701e5) Thanks [@philipptpunkt](https://github.com/philipptpunkt)! - add sponsored param to serializer for ethereum transactions

## 0.3.0

### Minor Changes

- [`de70134`](https://github.com/LedgerHQ/wallet-api/commit/de70134eac5d0b68ee38debcf597da954e233aa1) Thanks [@ComradeAERGO](https://github.com/ComradeAERGO)! - Add missing link

- [#237](https://github.com/LedgerHQ/wallet-api/pull/237) [`f897a3d`](https://github.com/LedgerHQ/wallet-api/commit/f897a3dd0553a02e3fd8358098de2ac9c6b7d73c) Thanks [@Justkant](https://github.com/Justkant)! - feat: add custom handlers support

## 0.2.0

### Minor Changes

- [`f1b8f8c`](https://github.com/LedgerHQ/wallet-api/commit/f1b8f8c51689885cc0f9b8ff29f38c25392e095e) Thanks [@Justkant](https://github.com/Justkant)! - feat: add params to save swap history (#228)
