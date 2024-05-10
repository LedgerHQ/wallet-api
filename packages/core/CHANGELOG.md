# @ledgerhq/wallet-api-core

## 1.10.1

### Patch Changes

- [#346](https://github.com/LedgerHQ/wallet-api/pull/346) [`a738747`](https://github.com/LedgerHQ/wallet-api/commit/a7387476e6fc071927152417ad16f6fdd1433f35) Thanks [@Justkant](https://github.com/Justkant)! - fix: loosen family validation to provide better forward compatibility

- [#349](https://github.com/LedgerHQ/wallet-api/pull/349) [`11a705f`](https://github.com/LedgerHQ/wallet-api/commit/11a705fa42ecf0f17234bbf536a7e7b8254aeed9) Thanks [@Justkant](https://github.com/Justkant)! - fix: serializeError handling and allow passthrough for unknown errors

## 1.10.0

### Minor Changes

- [#344](https://github.com/LedgerHQ/wallet-api/pull/344) [`2f325fe`](https://github.com/LedgerHQ/wallet-api/commit/2f325fe0b4e13b209af9eced302c383483d8eee3) Thanks [@Wozacosta](https://github.com/Wozacosta)! - feat: add casper family

- [#343](https://github.com/LedgerHQ/wallet-api/pull/343) [`a2af615`](https://github.com/LedgerHQ/wallet-api/commit/a2af615eb368cd17511a37f296a5c8e1910a144e) Thanks [@Wozacosta](https://github.com/Wozacosta)! - feat: add internet_computer family

### Patch Changes

- [#334](https://github.com/LedgerHQ/wallet-api/pull/334) [`091cf53`](https://github.com/LedgerHQ/wallet-api/commit/091cf534f5637f37789877bcdba34a2dec7d6c5d) Thanks [@Wozacosta](https://github.com/Wozacosta)! - update manifest json schema

## 1.9.0

### Minor Changes

- [#335](https://github.com/LedgerHQ/wallet-api/pull/335) [`0719773`](https://github.com/LedgerHQ/wallet-api/commit/0719773948ef4e754fdcee179f094539a3edc31b) Thanks [@Wozacosta](https://github.com/Wozacosta)! - feat: add stacks family

## 1.8.0

### Minor Changes

- [#332](https://github.com/LedgerHQ/wallet-api/pull/332) [`1f5bd03`](https://github.com/LedgerHQ/wallet-api/commit/1f5bd03406bd0648685e46753089f32af7837269) Thanks [@Justkant](https://github.com/Justkant)! - feat: add vechain family

## 1.7.2

### Patch Changes

- [#310](https://github.com/LedgerHQ/wallet-api/pull/310) [`e1c2efa`](https://github.com/LedgerHQ/wallet-api/commit/e1c2efaa103d05b57d06c40897490cbf21394c57) Thanks [@ofreyssinet-ledger](https://github.com/ofreyssinet-ledger)! - add "europa" to DeviceType

## 1.7.1

### Patch Changes

- [#302](https://github.com/LedgerHQ/wallet-api/pull/302) [`181edfd`](https://github.com/LedgerHQ/wallet-api/commit/181edfd78d43bba156919afedd2b12b4e3e24290) Thanks [@Wozacosta](https://github.com/Wozacosta)! - handle parentAccount when requesting an account

## 1.7.0

### Minor Changes

- [#288](https://github.com/LedgerHQ/wallet-api/pull/288) [`5fabdc6`](https://github.com/LedgerHQ/wallet-api/commit/5fabdc62fb10fae8e55b2a3f5a802feff9bd5911) Thanks [@Philippoes](https://github.com/Philippoes)! - add support for tron 2.0 staking

## 1.6.2

### Patch Changes

- [#289](https://github.com/LedgerHQ/wallet-api/pull/289) [`6f98647`](https://github.com/LedgerHQ/wallet-api/commit/6f986478bb04901fa5eb3828a2f3b9c0953d2b1a) Thanks [@Wozacosta](https://github.com/Wozacosta)! - Allows tokenCurrency field for handlers also accepting an account id

## 1.6.1

### Patch Changes

- [#290](https://github.com/LedgerHQ/wallet-api/pull/290) [`d183e61`](https://github.com/LedgerHQ/wallet-api/commit/d183e61bd70b72a56d8fe293fcaaac0cd918bbbd) Thanks [@Justkant](https://github.com/Justkant)! - chore: scope all packages

## 1.6.0

### Minor Changes

- [#277](https://github.com/LedgerHQ/wallet-api/pull/277) [`51b9152`](https://github.com/LedgerHQ/wallet-api/commit/51b91524dd1f7142810009b88384aca299372122) Thanks [@sprohaszka-ledger](https://github.com/sprohaszka-ledger)! - add start exchange ng

- [#278](https://github.com/LedgerHQ/wallet-api/pull/278) [`e7e609e`](https://github.com/LedgerHQ/wallet-api/commit/e7e609e23203357b1d31927c860e33a37bcae9a8) Thanks [@ComradeAERGO](https://github.com/ComradeAERGO)! - Adding type support for custom events

## 1.5.0

### Minor Changes

- [#274](https://github.com/LedgerHQ/wallet-api/pull/274) [`a466649`](https://github.com/LedgerHQ/wallet-api/commit/a4666492fe8312f8fdfca135e30afc5d34cae865) Thanks [@Justkant](https://github.com/Justkant)! - feat: improve custom handler types

- [#271](https://github.com/LedgerHQ/wallet-api/pull/271) [`6a5771c`](https://github.com/LedgerHQ/wallet-api/commit/6a5771c0ec0349f68f8be1c07d6adfce2a418a25) Thanks [@jdomingos](https://github.com/jdomingos)! - add optional attributes for PolkadotTransaction

### Patch Changes

- [#270](https://github.com/LedgerHQ/wallet-api/pull/270) [`0bd66f5`](https://github.com/LedgerHQ/wallet-api/commit/0bd66f57e23e0f5704e2b780bd8e6eae7b1eba25) Thanks [@Wozacosta](https://github.com/Wozacosta)! - allow empty (void) values to be returned by the RPCNode requests

- [#273](https://github.com/LedgerHQ/wallet-api/pull/273) [`0eda7fa`](https://github.com/LedgerHQ/wallet-api/commit/0eda7fa899e9405eec46fa55cf8ea986d1b14484) Thanks [@Justkant](https://github.com/Justkant)! - fix: WindowMessageTransport accepts same origin messages

  In order to support browserViews in electron

## 1.4.0

### Minor Changes

- [#266](https://github.com/LedgerHQ/wallet-api/pull/266) [`746a6ab`](https://github.com/LedgerHQ/wallet-api/commit/746a6ab9e2e826625d41d5df3d516ffe30b3941d) Thanks [@Justkant](https://github.com/Justkant)! - feat(exchange): add optional tokenCurrency

## 1.3.1

### Patch Changes

- [#261](https://github.com/LedgerHQ/wallet-api/pull/261) [`2cb974c`](https://github.com/LedgerHQ/wallet-api/commit/2cb974c0e6ed4ed3c6a707cbf27b6a8ff12c5ca1) Thanks [@RamyEB](https://github.com/RamyEB)! - Enable blockHeight to be undefined

## 1.3.0

### Minor Changes

- [#237](https://github.com/LedgerHQ/wallet-api/pull/237) [`f897a3d`](https://github.com/LedgerHQ/wallet-api/commit/f897a3dd0553a02e3fd8358098de2ac9c6b7d73c) Thanks [@Justkant](https://github.com/Justkant)! - feat: add custom handlers support

## 1.2.0

### Minor Changes

- [`f1b8f8c`](https://github.com/LedgerHQ/wallet-api/commit/f1b8f8c51689885cc0f9b8ff29f38c25392e095e) Thanks [@Justkant](https://github.com/Justkant)! - feat: add params to save swap history (#228)

## 1.1.0

### Minor Changes

- [#220](https://github.com/LedgerHQ/wallet-api/pull/220) [`aa5e239`](https://github.com/LedgerHQ/wallet-api/commit/aa5e2394c934b378b727cf9ab503e61712e26d6d) Thanks [@Philippoes](https://github.com/Philippoes)! - Add optional validator properties to CosmosTransaction

## 1.0.2

### Patch Changes

- [#212](https://github.com/LedgerHQ/wallet-api/pull/212) [`e0d3933`](https://github.com/LedgerHQ/wallet-api/commit/e0d3933c3df5e1be56d17c61ba0dc316b37e15b5) Thanks [@sarneijim](https://github.com/sarneijim)! - Add custom fee to swap

## 1.0.1

### Patch Changes

- [#206](https://github.com/LedgerHQ/wallet-api/pull/206) [`a863980`](https://github.com/LedgerHQ/wallet-api/commit/a8639807c69bd31113d820275ffb27d5b3ef6a8e) Thanks [@Justkant](https://github.com/Justkant)! - fix: missing baseUrl for prod tsconfig

## 1.0.0

### Major Changes

- [#199](https://github.com/LedgerHQ/wallet-api/pull/199) [`9dd2fe3`](https://github.com/LedgerHQ/wallet-api/commit/9dd2fe3bec50c0856fe1ca761fa229bf67e9c386) Thanks [@ComradeAERGO](https://github.com/ComradeAERGO)! - Releasing Wallet API v1.0

### Minor Changes

- [#173](https://github.com/LedgerHQ/wallet-api/pull/173) [`34dad9f`](https://github.com/LedgerHQ/wallet-api/commit/34dad9fa26e0b6cb947cfc2544d63841abdda443) Thanks [@Justkant](https://github.com/Justkant)! - feat: add `device.select` and `device.open`

  Split `device.transport` into `device.select` and `device.open` in order to be able to call multiple times `device.open` without having to select a device again

## 0.18.0

### Minor Changes

- [#164](https://github.com/LedgerHQ/wallet-api/pull/164) [`4f69de3`](https://github.com/LedgerHQ/wallet-api/commit/4f69de36f08fbbe5fa7fc5ecfb123d1cf63d7132) Thanks [@bill0x2A](https://github.com/bill0x2A)! - Adds an enum with the valid values for a StellarTransaction memoType - replacing the current string type

## 0.17.1

### Patch Changes

- [#159](https://github.com/LedgerHQ/wallet-api/pull/159) [`524f96b`](https://github.com/LedgerHQ/wallet-api/commit/524f96bb0faba8238be546b96271689ea70b3d16) Thanks [@IAmMorrow](https://github.com/IAmMorrow)! - Added optional meta object to all sign operations

## 0.17.0

### Minor Changes

- [#157](https://github.com/LedgerHQ/wallet-api/pull/157) [`7f56de7`](https://github.com/LedgerHQ/wallet-api/commit/7f56de7e147a59a7f383c19067aafcf33e6ca2dc) Thanks [@IAmMorrow](https://github.com/IAmMorrow)! - Added EIP-1559 support to the ethereum family transaction object

## 0.16.0

### Minor Changes

- [#148](https://github.com/LedgerHQ/wallet-api/pull/148) [`900319a`](https://github.com/LedgerHQ/wallet-api/commit/900319ada2377c2660f7bf43fdaf6718bbc63602) Thanks [@RamyEB](https://github.com/RamyEB)! - support cardano family

- [#133](https://github.com/LedgerHQ/wallet-api/pull/133) [`bb79e38`](https://github.com/LedgerHQ/wallet-api/commit/bb79e3863020f48ae90c12922a06ab429d44a569) Thanks [@RamyEB](https://github.com/RamyEB)! - support elrond family

- [#132](https://github.com/LedgerHQ/wallet-api/pull/132) [`c7ffb18`](https://github.com/LedgerHQ/wallet-api/commit/c7ffb182a5d895d7c60a9ecfddf1ab0066b20408) Thanks [@RamyEB](https://github.com/RamyEB)! - support solana family

- [#131](https://github.com/LedgerHQ/wallet-api/pull/131) [`3b42a93`](https://github.com/LedgerHQ/wallet-api/commit/3b42a935d701a346cc418f078945011109c9e9ae) Thanks [@JunichiSugiura](https://github.com/JunichiSugiura)! - Support Neo family

- [#130](https://github.com/LedgerHQ/wallet-api/pull/130) [`fa9508e`](https://github.com/LedgerHQ/wallet-api/commit/fa9508e23314a0060028f99febf0373d463e0941) Thanks [@JunichiSugiura](https://github.com/JunichiSugiura)! - Support Near family

### Patch Changes

- [#147](https://github.com/LedgerHQ/wallet-api/pull/147) [`3420226`](https://github.com/LedgerHQ/wallet-api/commit/3420226c6c932f83153893ff2acb5a7bff495faf) Thanks [@JunichiSugiura](https://github.com/JunichiSugiura)! - Add (de)serializer tests for Near and Neo family

## 0.15.0

### Minor Changes

- [#122](https://github.com/LedgerHQ/wallet-api/pull/122) [`10f0321`](https://github.com/LedgerHQ/wallet-api/commit/10f03217bc435c7e9af3de614940c80a65752a1d) Thanks [@JunichiSugiura](https://github.com/JunichiSugiura)! - Support OP_RETURN data in Bitcoin transaction

## 0.14.0

### Minor Changes

- [#119](https://github.com/LedgerHQ/wallet-api/pull/119) [`331a0af`](https://github.com/LedgerHQ/wallet-api/commit/331a0af27d2aa2af6d8e2d6f5a3ea0c4a0ca43ac) Thanks [@IAmMorrow](https://github.com/IAmMorrow)! - Backported exchange capabilities from platform API

## 0.13.0

### Minor Changes

- [#110](https://github.com/LedgerHQ/wallet-api/pull/110) [`17560c6`](https://github.com/LedgerHQ/wallet-api/commit/17560c643fac448b3b49f35244472dce97c454e0) Thanks [@IAmMorrow](https://github.com/IAmMorrow)! - Added simple storage API permission and error

## 0.12.0

### Minor Changes

- [#48](https://github.com/LedgerHQ/wallet-api/pull/48) [`c1a5cb2`](https://github.com/LedgerHQ/wallet-api/commit/c1a5cb23f72b7f741d4072e73fd2d3718776e407) Thanks [@IAmMorrow](https://github.com/IAmMorrow)! - add storage module

- [#91](https://github.com/LedgerHQ/wallet-api/pull/91) [`cf6537a`](https://github.com/LedgerHQ/wallet-api/commit/cf6537a7c8824eb5732fa94b6785b15644047a3b) Thanks [@IAmMorrow](https://github.com/IAmMorrow)! - add wallet module including info and userId methods. Moving capabilities in this new module

## 0.11.0

### Minor Changes

- [#86](https://github.com/LedgerHQ/wallet-api/pull/86) [`4eb4024`](https://github.com/LedgerHQ/wallet-api/commit/4eb4024e9c8bde5cbd416778c72a11f5fb041d69) Thanks [@Justkant](https://github.com/Justkant)! - feat(core): export FAMILIES const

### Patch Changes

- [#77](https://github.com/LedgerHQ/wallet-api/pull/77) [`e80df07`](https://github.com/LedgerHQ/wallet-api/commit/e80df07ea1efe03f815f3fd3b45b93d9bfbf9ed3) Thanks [@chabroA](https://github.com/chabroA)! - fix type on server handlers to match signature on client side

## 0.10.0

### Minor Changes

- [#69](https://github.com/LedgerHQ/wallet-api/pull/69) [`22465a1`](https://github.com/LedgerHQ/wallet-api/commit/22465a17057ba07454485356bd8e0c043432989a) Thanks [@chabroA](https://github.com/chabroA)! - Add bitcoin module with getXPub method

## 0.9.2

### Patch Changes

- [`ec07069`](https://github.com/LedgerHQ/wallet-api/commit/ec07069b2a5c0ed455df17aaac5e9690a73896c3) Thanks [@Justkant](https://github.com/Justkant)! - fix: WindowMessageTransport for android webview

## 0.9.1

### Patch Changes

- [`10a732e`](https://github.com/LedgerHQ/wallet-api/commit/10a732e5986e482077b28679b7a68c078e9c4884) Thanks [@Justkant](https://github.com/Justkant)! - fix: rename nanoFTS to stax

## 0.9.0

### Minor Changes

- [#70](https://github.com/LedgerHQ/wallet-api/pull/70) [`4c75e55`](https://github.com/LedgerHQ/wallet-api/commit/4c75e55da8bffd1a76e97bb3f3eb48dab56223f8) Thanks [@IAmMorrow](https://github.com/IAmMorrow)! - Refactored error strategy to have two levels of error protocol

## 0.8.0

### Minor Changes

- [#51](https://github.com/LedgerHQ/wallet-api/pull/51) [`fcb24f5`](https://github.com/LedgerHQ/wallet-api/commit/fcb24f541ad04698185ad7a58280513d42d2669f) Thanks [@Justkant](https://github.com/Justkant)! - refactor: deviceId to transportId

- [#52](https://github.com/LedgerHQ/wallet-api/pull/52) [`0dd40b3`](https://github.com/LedgerHQ/wallet-api/commit/0dd40b31c74fe2fa5f87d2df47944aa5fe652a9a) Thanks [@Justkant](https://github.com/Justkant)! - feat: add optional params to device.transport

## 0.7.0

### Minor Changes

- [#41](https://github.com/LedgerHQ/wallet-api/pull/41) [`4572761`](https://github.com/LedgerHQ/wallet-api/commit/45727617dd415589f39fe7fcd6474a4ec681b0ce) Thanks [@Justkant](https://github.com/Justkant)! - feat: device.transport support

## 0.6.0

### Minor Changes

- [#37](https://github.com/LedgerHQ/wallet-api/pull/37) [`016d399`](https://github.com/LedgerHQ/wallet-api/commit/016d399d9e1daa98eae30dc1050c4c5bf44980c6) Thanks [@IAmMorrow](https://github.com/IAmMorrow)! - fixed errors; added permissions

## 0.5.3

### Patch Changes

- [`c0913d5`](https://github.com/LedgerHQ/wallet-api/commit/c0913d517f2aab12e3a4054329b26ef4cdedd4f6) Thanks [@Justkant](https://github.com/Justkant)! - Revert "fix: use zod nativeEnum for currencies"

## 0.5.2

### Patch Changes

- [`da17a69`](https://github.com/LedgerHQ/wallet-api/commit/da17a691fc8534190c5839b5b38a9cdae8591914) Thanks [@Justkant](https://github.com/Justkant)! - fix: TokenCurrency parent should be a string

## 0.5.1

### Patch Changes

- [`c26f86a`](https://github.com/LedgerHQ/wallet-api/commit/c26f86abdd5685fd8a7f06a135633b2bd9ea5765) Thanks [@Justkant](https://github.com/Justkant)! - fix: use nativeEnum for currencies

## 0.5.0

### Minor Changes

- [`4a91ced`](https://github.com/LedgerHQ/wallet-api/commit/4a91cede76d82d14c6c4f15fa112e5e20244d9bb) Thanks [@IAmMorrow](https://github.com/IAmMorrow)! - Reworked type system

## 0.4.0

### Minor Changes

- [`6382409`](https://github.com/LedgerHQ/wallet-api/commit/6382409a7a8eae0a2eb759da418f6666ed890f2c) Thanks [@IAmMorrow](https://github.com/IAmMorrow)! - Added WalletAPIClient handlers

## 0.3.0

### Minor Changes

- [#27](https://github.com/LedgerHQ/wallet-api/pull/27) [`933e0e2`](https://github.com/LedgerHQ/wallet-api/commit/933e0e29853a22328bc9e193f0de968a05d4593e) Thanks [@IAmMorrow](https://github.com/IAmMorrow)! - Reintroduced WalletAPIClient

## 0.2.0

### Minor Changes

- [#23](https://github.com/LedgerHQ/wallet-api/pull/23) [`3125934`](https://github.com/LedgerHQ/wallet-api/commit/3125934f3137f292231c59df1d1fa7d220a10eb7) Thanks [@IAmMorrow](https://github.com/IAmMorrow)! - Implemented most of the wallet-api-server.
