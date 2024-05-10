# @ledgerhq/wallet-api-server

## 1.5.10

### Patch Changes

- [#352](https://github.com/LedgerHQ/wallet-api/pull/352) [`c456f57`](https://github.com/LedgerHQ/wallet-api/commit/c456f57340bc2a24ccb3170b599312134df6ba99) Thanks [@Justkant](https://github.com/Justkant)! - perf: optimize match currencies

  fixes duplicates issue too

- Updated dependencies [[`a738747`](https://github.com/LedgerHQ/wallet-api/commit/a7387476e6fc071927152417ad16f6fdd1433f35), [`11a705f`](https://github.com/LedgerHQ/wallet-api/commit/11a705fa42ecf0f17234bbf536a7e7b8254aeed9)]:
  - @ledgerhq/wallet-api-core@1.10.1

## 1.5.9

### Patch Changes

- Updated dependencies [[`2f325fe`](https://github.com/LedgerHQ/wallet-api/commit/2f325fe0b4e13b209af9eced302c383483d8eee3), [`091cf53`](https://github.com/LedgerHQ/wallet-api/commit/091cf534f5637f37789877bcdba34a2dec7d6c5d), [`a2af615`](https://github.com/LedgerHQ/wallet-api/commit/a2af615eb368cd17511a37f296a5c8e1910a144e)]:
  - @ledgerhq/wallet-api-core@1.10.0

## 1.5.8

### Patch Changes

- Updated dependencies [[`0719773`](https://github.com/LedgerHQ/wallet-api/commit/0719773948ef4e754fdcee179f094539a3edc31b)]:
  - @ledgerhq/wallet-api-core@1.9.0

## 1.5.7

### Patch Changes

- Updated dependencies [[`1f5bd03`](https://github.com/LedgerHQ/wallet-api/commit/1f5bd03406bd0648685e46753089f32af7837269)]:
  - @ledgerhq/wallet-api-core@1.8.0

## 1.5.6

### Patch Changes

- Updated dependencies [[`e1c2efa`](https://github.com/LedgerHQ/wallet-api/commit/e1c2efaa103d05b57d06c40897490cbf21394c57)]:
  - @ledgerhq/wallet-api-core@1.7.2

## 1.5.5

### Patch Changes

- [#308](https://github.com/LedgerHQ/wallet-api/pull/308) [`25305e8`](https://github.com/LedgerHQ/wallet-api/commit/25305e8153fc0ad534be41839e5e76411731d8a2) Thanks [@Justkant](https://github.com/Justkant)! - fix(simulator): remove process usage

  bumping picomatch to remove process usage
  refactor device simulator profile to remove process usage

## 1.5.4

### Patch Changes

- Updated dependencies [[`181edfd`](https://github.com/LedgerHQ/wallet-api/commit/181edfd78d43bba156919afedd2b12b4e3e24290)]:
  - @ledgerhq/wallet-api-core@1.7.1

## 1.5.3

### Patch Changes

- Updated dependencies [[`5fabdc6`](https://github.com/LedgerHQ/wallet-api/commit/5fabdc62fb10fae8e55b2a3f5a802feff9bd5911)]:
  - @ledgerhq/wallet-api-core@1.7.0

## 1.5.2

### Patch Changes

- [#289](https://github.com/LedgerHQ/wallet-api/pull/289) [`6f98647`](https://github.com/LedgerHQ/wallet-api/commit/6f986478bb04901fa5eb3828a2f3b9c0953d2b1a) Thanks [@Wozacosta](https://github.com/Wozacosta)! - Allows tokenCurrency field for handlers also accepting an account id

- Updated dependencies [[`6f98647`](https://github.com/LedgerHQ/wallet-api/commit/6f986478bb04901fa5eb3828a2f3b9c0953d2b1a)]:
  - @ledgerhq/wallet-api-core@1.6.2

## 1.5.1

### Patch Changes

- [#290](https://github.com/LedgerHQ/wallet-api/pull/290) [`d183e61`](https://github.com/LedgerHQ/wallet-api/commit/d183e61bd70b72a56d8fe293fcaaac0cd918bbbd) Thanks [@Justkant](https://github.com/Justkant)! - chore: scope all packages

- Updated dependencies [[`d183e61`](https://github.com/LedgerHQ/wallet-api/commit/d183e61bd70b72a56d8fe293fcaaac0cd918bbbd)]:
  - @ledgerhq/wallet-api-core@1.6.1

## 1.5.0

### Minor Changes

- [#278](https://github.com/LedgerHQ/wallet-api/pull/278) [`e7e609e`](https://github.com/LedgerHQ/wallet-api/commit/e7e609e23203357b1d31927c860e33a37bcae9a8) Thanks [@ComradeAERGO](https://github.com/ComradeAERGO)! - Adding sendMessage to the server to push messages to live apps with permissions check

### Patch Changes

- Updated dependencies [[`51b9152`](https://github.com/LedgerHQ/wallet-api/commit/51b91524dd1f7142810009b88384aca299372122), [`e7e609e`](https://github.com/LedgerHQ/wallet-api/commit/e7e609e23203357b1d31927c860e33a37bcae9a8)]:
  - @ledgerhq/wallet-api-core@1.6.0

## 1.4.1

### Patch Changes

- [#272](https://github.com/LedgerHQ/wallet-api/pull/272) [`e6da3b3`](https://github.com/LedgerHQ/wallet-api/commit/e6da3b3712f039b36b7595f055775c71b0aa14ca) Thanks [@Justkant](https://github.com/Justkant)! - fix: remove react exports from main index file

  A React hooks was exported, making it impossible to import the server code from the main index file in other frameworks

- Updated dependencies [[`a466649`](https://github.com/LedgerHQ/wallet-api/commit/a4666492fe8312f8fdfca135e30afc5d34cae865), [`6a5771c`](https://github.com/LedgerHQ/wallet-api/commit/6a5771c0ec0349f68f8be1c07d6adfce2a418a25), [`0bd66f5`](https://github.com/LedgerHQ/wallet-api/commit/0bd66f57e23e0f5704e2b780bd8e6eae7b1eba25), [`0eda7fa`](https://github.com/LedgerHQ/wallet-api/commit/0eda7fa899e9405eec46fa55cf8ea986d1b14484)]:
  - @ledgerhq/wallet-api-core@1.5.0

## 1.4.0

### Minor Changes

- [#266](https://github.com/LedgerHQ/wallet-api/pull/266) [`746a6ab`](https://github.com/LedgerHQ/wallet-api/commit/746a6ab9e2e826625d41d5df3d516ffe30b3941d) Thanks [@Justkant](https://github.com/Justkant)! - feat(exchange): add optional tokenCurrency

### Patch Changes

- Updated dependencies [[`746a6ab`](https://github.com/LedgerHQ/wallet-api/commit/746a6ab9e2e826625d41d5df3d516ffe30b3941d)]:
  - @ledgerhq/wallet-api-core@1.4.0

## 1.3.1

### Patch Changes

- Updated dependencies [[`2cb974c`](https://github.com/LedgerHQ/wallet-api/commit/2cb974c0e6ed4ed3c6a707cbf27b6a8ff12c5ca1)]:
  - @ledgerhq/wallet-api-core@1.3.1

## 1.3.0

### Minor Changes

- [#237](https://github.com/LedgerHQ/wallet-api/pull/237) [`f897a3d`](https://github.com/LedgerHQ/wallet-api/commit/f897a3dd0553a02e3fd8358098de2ac9c6b7d73c) Thanks [@Justkant](https://github.com/Justkant)! - feat: add custom handlers support

### Patch Changes

- Updated dependencies [[`f897a3d`](https://github.com/LedgerHQ/wallet-api/commit/f897a3dd0553a02e3fd8358098de2ac9c6b7d73c)]:
  - @ledgerhq/wallet-api-core@1.3.0

## 1.2.0

### Minor Changes

- [`f1b8f8c`](https://github.com/LedgerHQ/wallet-api/commit/f1b8f8c51689885cc0f9b8ff29f38c25392e095e) Thanks [@Justkant](https://github.com/Justkant)! - feat: add params to save swap history (#228)

### Patch Changes

- Updated dependencies [[`f1b8f8c`](https://github.com/LedgerHQ/wallet-api/commit/f1b8f8c51689885cc0f9b8ff29f38c25392e095e)]:
  - @ledgerhq/wallet-api-core@1.2.0

## 1.1.2

### Patch Changes

- Updated dependencies [[`aa5e239`](https://github.com/LedgerHQ/wallet-api/commit/aa5e2394c934b378b727cf9ab503e61712e26d6d)]:
  - @ledgerhq/wallet-api-core@1.1.0

## 1.1.1

### Patch Changes

- [#217](https://github.com/LedgerHQ/wallet-api/pull/217) [`96dd717`](https://github.com/LedgerHQ/wallet-api/commit/96dd717a9d41cf9d62328c46167af5937b8cf5a4) Thanks [@Justkant](https://github.com/Justkant)! - fix: react hook return value

## 1.1.0

### Minor Changes

- [#210](https://github.com/LedgerHQ/wallet-api/pull/210) [`e7afa6e`](https://github.com/LedgerHQ/wallet-api/commit/e7afa6e7ee3e53459e7f27dcd3df8590530ae1c1) Thanks [@Justkant](https://github.com/Justkant)! - feat(server): react hooks use ref instead of memo

  Add setConfig to server class

### Patch Changes

- Updated dependencies [[`e0d3933`](https://github.com/LedgerHQ/wallet-api/commit/e0d3933c3df5e1be56d17c61ba0dc316b37e15b5)]:
  - @ledgerhq/wallet-api-core@1.0.2

## 1.0.1

### Patch Changes

- [#206](https://github.com/LedgerHQ/wallet-api/pull/206) [`a863980`](https://github.com/LedgerHQ/wallet-api/commit/a8639807c69bd31113d820275ffb27d5b3ef6a8e) Thanks [@Justkant](https://github.com/Justkant)! - fix: missing baseUrl for prod tsconfig

- Updated dependencies [[`a863980`](https://github.com/LedgerHQ/wallet-api/commit/a8639807c69bd31113d820275ffb27d5b3ef6a8e)]:
  - @ledgerhq/wallet-api-core@1.0.1

## 1.0.0

### Major Changes

- [#199](https://github.com/LedgerHQ/wallet-api/pull/199) [`9dd2fe3`](https://github.com/LedgerHQ/wallet-api/commit/9dd2fe3bec50c0856fe1ca761fa229bf67e9c386) Thanks [@ComradeAERGO](https://github.com/ComradeAERGO)! - Releasing Wallet API v1.0

### Minor Changes

- [#173](https://github.com/LedgerHQ/wallet-api/pull/173) [`34dad9f`](https://github.com/LedgerHQ/wallet-api/commit/34dad9fa26e0b6cb947cfc2544d63841abdda443) Thanks [@Justkant](https://github.com/Justkant)! - feat: add `device.select` and `device.open`

  Split `device.transport` into `device.select` and `device.open` in order to be able to call multiple times `device.open` without having to select a device again

### Patch Changes

- Updated dependencies [[`9dd2fe3`](https://github.com/LedgerHQ/wallet-api/commit/9dd2fe3bec50c0856fe1ca761fa229bf67e9c386), [`34dad9f`](https://github.com/LedgerHQ/wallet-api/commit/34dad9fa26e0b6cb947cfc2544d63841abdda443)]:
  - @ledgerhq/wallet-api-core@1.0.0

## 0.13.5

### Patch Changes

- Updated dependencies [[`4f69de3`](https://github.com/LedgerHQ/wallet-api/commit/4f69de36f08fbbe5fa7fc5ecfb123d1cf63d7132)]:
  - @ledgerhq/wallet-api-core@0.18.0

## 0.13.4

### Patch Changes

- [#159](https://github.com/LedgerHQ/wallet-api/pull/159) [`524f96b`](https://github.com/LedgerHQ/wallet-api/commit/524f96bb0faba8238be546b96271689ea70b3d16) Thanks [@IAmMorrow](https://github.com/IAmMorrow)! - Added optional meta object to all sign operations

- Updated dependencies [[`524f96b`](https://github.com/LedgerHQ/wallet-api/commit/524f96bb0faba8238be546b96271689ea70b3d16)]:
  - @ledgerhq/wallet-api-core@0.17.1

## 0.13.3

### Patch Changes

- Updated dependencies [[`7f56de7`](https://github.com/LedgerHQ/wallet-api/commit/7f56de7e147a59a7f383c19067aafcf33e6ca2dc)]:
  - @ledgerhq/wallet-api-core@0.17.0

## 0.13.2

### Patch Changes

- Updated dependencies [[`900319a`](https://github.com/LedgerHQ/wallet-api/commit/900319ada2377c2660f7bf43fdaf6718bbc63602), [`3420226`](https://github.com/LedgerHQ/wallet-api/commit/3420226c6c932f83153893ff2acb5a7bff495faf), [`bb79e38`](https://github.com/LedgerHQ/wallet-api/commit/bb79e3863020f48ae90c12922a06ab429d44a569), [`c7ffb18`](https://github.com/LedgerHQ/wallet-api/commit/c7ffb182a5d895d7c60a9ecfddf1ab0066b20408), [`3b42a93`](https://github.com/LedgerHQ/wallet-api/commit/3b42a935d701a346cc418f078945011109c9e9ae), [`fa9508e`](https://github.com/LedgerHQ/wallet-api/commit/fa9508e23314a0060028f99febf0373d463e0941)]:
  - @ledgerhq/wallet-api-core@0.16.0

## 0.13.1

### Patch Changes

- Updated dependencies [[`10f0321`](https://github.com/LedgerHQ/wallet-api/commit/10f03217bc435c7e9af3de614940c80a65752a1d)]:
  - @ledgerhq/wallet-api-core@0.15.0

## 0.13.0

### Minor Changes

- [#119](https://github.com/LedgerHQ/wallet-api/pull/119) [`331a0af`](https://github.com/LedgerHQ/wallet-api/commit/331a0af27d2aa2af6d8e2d6f5a3ea0c4a0ca43ac) Thanks [@IAmMorrow](https://github.com/IAmMorrow)! - Backported exchange capabilities from platform API

### Patch Changes

- Updated dependencies [[`331a0af`](https://github.com/LedgerHQ/wallet-api/commit/331a0af27d2aa2af6d8e2d6f5a3ea0c4a0ca43ac)]:
  - @ledgerhq/wallet-api-core@0.14.0

## 0.12.0

### Minor Changes

- [#110](https://github.com/LedgerHQ/wallet-api/pull/110) [`17560c6`](https://github.com/LedgerHQ/wallet-api/commit/17560c643fac448b3b49f35244472dce97c454e0) Thanks [@IAmMorrow](https://github.com/IAmMorrow)! - Added simple storage API permission and error

### Patch Changes

- Updated dependencies [[`17560c6`](https://github.com/LedgerHQ/wallet-api/commit/17560c643fac448b3b49f35244472dce97c454e0)]:
  - @ledgerhq/wallet-api-core@0.13.0

## 0.11.0

### Minor Changes

- [#96](https://github.com/LedgerHQ/wallet-api/pull/96) [`08597c5`](https://github.com/LedgerHQ/wallet-api/commit/08597c5fb17bcf9a03a34632979899684b342ebc) Thanks [@JunichiSugiura](https://github.com/JunichiSugiura)! - feat: new useWalletAPIServer react hook

- [#48](https://github.com/LedgerHQ/wallet-api/pull/48) [`c1a5cb2`](https://github.com/LedgerHQ/wallet-api/commit/c1a5cb23f72b7f741d4072e73fd2d3718776e407) Thanks [@IAmMorrow](https://github.com/IAmMorrow)! - add storage module

- [#91](https://github.com/LedgerHQ/wallet-api/pull/91) [`cf6537a`](https://github.com/LedgerHQ/wallet-api/commit/cf6537a7c8824eb5732fa94b6785b15644047a3b) Thanks [@IAmMorrow](https://github.com/IAmMorrow)! - add wallet module including info and userId methods. Moving capabilities in this new module

### Patch Changes

- Updated dependencies [[`c1a5cb2`](https://github.com/LedgerHQ/wallet-api/commit/c1a5cb23f72b7f741d4072e73fd2d3718776e407), [`cf6537a`](https://github.com/LedgerHQ/wallet-api/commit/cf6537a7c8824eb5732fa94b6785b15644047a3b)]:
  - @ledgerhq/wallet-api-core@0.12.0

## 0.10.1

### Patch Changes

- [#77](https://github.com/LedgerHQ/wallet-api/pull/77) [`e80df07`](https://github.com/LedgerHQ/wallet-api/commit/e80df07ea1efe03f815f3fd3b45b93d9bfbf9ed3) Thanks [@chabroA](https://github.com/chabroA)! - fix type on server handlers to match signature on client side

- Updated dependencies [[`e80df07`](https://github.com/LedgerHQ/wallet-api/commit/e80df07ea1efe03f815f3fd3b45b93d9bfbf9ed3), [`4eb4024`](https://github.com/LedgerHQ/wallet-api/commit/4eb4024e9c8bde5cbd416778c72a11f5fb041d69)]:
  - @ledgerhq/wallet-api-core@0.11.0

## 0.10.0

### Minor Changes

- [#69](https://github.com/LedgerHQ/wallet-api/pull/69) [`22465a1`](https://github.com/LedgerHQ/wallet-api/commit/22465a17057ba07454485356bd8e0c043432989a) Thanks [@chabroA](https://github.com/chabroA)! - Add bitcoin module with getXPub method

### Patch Changes

- Updated dependencies [[`22465a1`](https://github.com/LedgerHQ/wallet-api/commit/22465a17057ba07454485356bd8e0c043432989a)]:
  - @ledgerhq/wallet-api-core@0.10.0

## 0.9.2

### Patch Changes

- [`0ada3a0`](https://github.com/LedgerHQ/wallet-api/commit/0ada3a0e0480ba8baffbe9fb9f7a2a1268640969) Thanks [@Justkant](https://github.com/Justkant)! - chore: bump version

- Updated dependencies [[`ec07069`](https://github.com/LedgerHQ/wallet-api/commit/ec07069b2a5c0ed455df17aaac5e9690a73896c3)]:
  - @ledgerhq/wallet-api-core@0.9.2

## 0.9.1

### Patch Changes

- Updated dependencies [[`10a732e`](https://github.com/LedgerHQ/wallet-api/commit/10a732e5986e482077b28679b7a68c078e9c4884)]:
  - @ledgerhq/wallet-api-core@0.9.1

## 0.9.0

### Minor Changes

- [#70](https://github.com/LedgerHQ/wallet-api/pull/70) [`4c75e55`](https://github.com/LedgerHQ/wallet-api/commit/4c75e55da8bffd1a76e97bb3f3eb48dab56223f8) Thanks [@IAmMorrow](https://github.com/IAmMorrow)! - Refactored error strategy to have two levels of error protocol

### Patch Changes

- Updated dependencies [[`4c75e55`](https://github.com/LedgerHQ/wallet-api/commit/4c75e55da8bffd1a76e97bb3f3eb48dab56223f8)]:
  - @ledgerhq/wallet-api-core@0.9.0

## 0.8.1

### Patch Changes

- [`acab9b3`](https://github.com/LedgerHQ/wallet-api/commit/acab9b31d1463fc792d4f467308b9036c82fff28) Thanks [@Justkant](https://github.com/Justkant)! - fix: missing params for device.transport

## 0.8.0

### Minor Changes

- [#51](https://github.com/LedgerHQ/wallet-api/pull/51) [`fcb24f5`](https://github.com/LedgerHQ/wallet-api/commit/fcb24f541ad04698185ad7a58280513d42d2669f) Thanks [@Justkant](https://github.com/Justkant)! - refactor: deviceId to transportId

### Patch Changes

- Updated dependencies [[`fcb24f5`](https://github.com/LedgerHQ/wallet-api/commit/fcb24f541ad04698185ad7a58280513d42d2669f), [`0dd40b3`](https://github.com/LedgerHQ/wallet-api/commit/0dd40b31c74fe2fa5f87d2df47944aa5fe652a9a)]:
  - @ledgerhq/wallet-api-core@0.8.0

## 0.7.1

### Patch Changes

- [#45](https://github.com/LedgerHQ/wallet-api/pull/45) [`b63f820`](https://github.com/LedgerHQ/wallet-api/commit/b63f820722caf18a236105bdc2e80ec4f73935a3) Thanks [@Justkant](https://github.com/Justkant)! - fix: apduHex params naming

## 0.7.0

### Minor Changes

- [#41](https://github.com/LedgerHQ/wallet-api/pull/41) [`4572761`](https://github.com/LedgerHQ/wallet-api/commit/45727617dd415589f39fe7fcd6474a4ec681b0ce) Thanks [@Justkant](https://github.com/Justkant)! - feat: device.transport support

### Patch Changes

- Updated dependencies [[`4572761`](https://github.com/LedgerHQ/wallet-api/commit/45727617dd415589f39fe7fcd6474a4ec681b0ce)]:
  - @ledgerhq/wallet-api-core@0.7.0

## 0.6.0

### Minor Changes

- [#37](https://github.com/LedgerHQ/wallet-api/pull/37) [`016d399`](https://github.com/LedgerHQ/wallet-api/commit/016d399d9e1daa98eae30dc1050c4c5bf44980c6) Thanks [@IAmMorrow](https://github.com/IAmMorrow)! - fixed errors; added permissions

### Patch Changes

- Updated dependencies [[`016d399`](https://github.com/LedgerHQ/wallet-api/commit/016d399d9e1daa98eae30dc1050c4c5bf44980c6)]:
  - @ledgerhq/wallet-api-core@0.6.0

## 0.5.4

### Patch Changes

- Updated dependencies [[`c0913d5`](https://github.com/LedgerHQ/wallet-api/commit/c0913d517f2aab12e3a4054329b26ef4cdedd4f6)]:
  - @ledgerhq/wallet-api-core@0.5.3

## 0.5.3

### Patch Changes

- Updated dependencies [[`da17a69`](https://github.com/LedgerHQ/wallet-api/commit/da17a691fc8534190c5839b5b38a9cdae8591914)]:
  - @ledgerhq/wallet-api-core@0.5.2

## 0.5.2

### Patch Changes

- Updated dependencies [[`c26f86a`](https://github.com/LedgerHQ/wallet-api/commit/c26f86abdd5685fd8a7f06a135633b2bd9ea5765)]:
  - @ledgerhq/wallet-api-core@0.5.1

## 0.5.1

### Patch Changes

- [`1fcf7bc`](https://github.com/LedgerHQ/wallet-api/commit/1fcf7bc963a77498b2073a9b31ce913517be5126) Thanks [@Justkant](https://github.com/Justkant)! - fix: export errors, types & rxjs

## 0.5.0

### Minor Changes

- [`4a91ced`](https://github.com/LedgerHQ/wallet-api/commit/4a91cede76d82d14c6c4f15fa112e5e20244d9bb) Thanks [@IAmMorrow](https://github.com/IAmMorrow)! - Reworked type system

### Patch Changes

- Updated dependencies [[`4a91ced`](https://github.com/LedgerHQ/wallet-api/commit/4a91cede76d82d14c6c4f15fa112e5e20244d9bb)]:
  - @ledgerhq/wallet-api-core@0.5.0

## 0.4.0

### Minor Changes

- [`6382409`](https://github.com/LedgerHQ/wallet-api/commit/6382409a7a8eae0a2eb759da418f6666ed890f2c) Thanks [@IAmMorrow](https://github.com/IAmMorrow)! - Added WalletAPIClient handlers

### Patch Changes

- Updated dependencies [[`6382409`](https://github.com/LedgerHQ/wallet-api/commit/6382409a7a8eae0a2eb759da418f6666ed890f2c)]:
  - @ledgerhq/wallet-api-core@0.4.0

## 0.3.0

### Minor Changes

- [#27](https://github.com/LedgerHQ/wallet-api/pull/27) [`933e0e2`](https://github.com/LedgerHQ/wallet-api/commit/933e0e29853a22328bc9e193f0de968a05d4593e) Thanks [@IAmMorrow](https://github.com/IAmMorrow)! - Reintroduced WalletAPIClient

### Patch Changes

- Updated dependencies [[`933e0e2`](https://github.com/LedgerHQ/wallet-api/commit/933e0e29853a22328bc9e193f0de968a05d4593e)]:
  - @ledgerhq/wallet-api-core@0.3.0

## 0.2.0

### Minor Changes

- [#23](https://github.com/LedgerHQ/wallet-api/pull/23) [`3125934`](https://github.com/LedgerHQ/wallet-api/commit/3125934f3137f292231c59df1d1fa7d220a10eb7) Thanks [@IAmMorrow](https://github.com/IAmMorrow)! - Implemented most of the wallet-api-server.

### Patch Changes

- Updated dependencies [[`3125934`](https://github.com/LedgerHQ/wallet-api/commit/3125934f3137f292231c59df1d1fa7d220a10eb7)]:
  - @ledgerhq/wallet-api-core@0.2.0
