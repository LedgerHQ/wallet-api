[@ledgerhq/live-app-sdk](../README.md) / [Exports](../modules.md) / Mock

# Class: Mock

## Implements

- `MockOf`<[`LedgerLivePlatformSDK`](LedgerLivePlatformSDK.md), ``"bridgeApp"`` \| ``"bridgeDashboard"`` \| ``"completeExchange"`` \| ``"startExchange"`` \| ``"listApps"`` \| ``"synchronizeAccount"`` \| ``"getLastConnectedDeviceInfo"``\>

## Table of contents

### Constructors

- [constructor](Mock.md#constructor)

### Properties

- [connected](Mock.md#connected)

### Methods

- [broadcastSignedTransaction](Mock.md#broadcastsignedtransaction)
- [connect](Mock.md#connect)
- [disconnect](Mock.md#disconnect)
- [getAccount](Mock.md#getaccount)
- [listAccounts](Mock.md#listaccounts)
- [listCurrencies](Mock.md#listcurrencies)
- [receive](Mock.md#receive)
- [requestAccount](Mock.md#requestaccount)
- [signMessage](Mock.md#signmessage)
- [signTransaction](Mock.md#signtransaction)

## Constructors

### constructor

• **new Mock**()

## Properties

### connected

• **connected**: `boolean` = `false`

#### Defined in

[mock/index.ts:34](https://github.com/LedgerHQ/live-app-sdk/blob/5608a83/src/mock/index.ts#L34)

## Methods

### broadcastSignedTransaction

▸ **broadcastSignedTransaction**(`_accountId`, `_signedTransaction`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_accountId` | `string` |
| `_signedTransaction` | [`RawSignedTransaction`](../modules.md#rawsignedtransaction) |

#### Returns

`Promise`<`string`\>

#### Implementation of

MockOf.broadcastSignedTransaction

#### Defined in

[mock/index.ts:113](https://github.com/LedgerHQ/live-app-sdk/blob/5608a83/src/mock/index.ts#L113)

___

### connect

▸ **connect**(): `void`

#### Returns

`void`

#### Implementation of

MockOf.connect

#### Defined in

[mock/index.ts:36](https://github.com/LedgerHQ/live-app-sdk/blob/5608a83/src/mock/index.ts#L36)

___

### disconnect

▸ **disconnect**(): `void`

#### Returns

`void`

#### Implementation of

MockOf.disconnect

#### Defined in

[mock/index.ts:40](https://github.com/LedgerHQ/live-app-sdk/blob/5608a83/src/mock/index.ts#L40)

___

### getAccount

▸ **getAccount**(`accountId`): `Promise`<[`Account`](../modules.md#account)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `accountId` | `string` |

#### Returns

`Promise`<[`Account`](../modules.md#account)\>

#### Defined in

[mock/index.ts:65](https://github.com/LedgerHQ/live-app-sdk/blob/5608a83/src/mock/index.ts#L65)

___

### listAccounts

▸ **listAccounts**(): `Promise`<[`Account`](../modules.md#account)[]\>

#### Returns

`Promise`<[`Account`](../modules.md#account)[]\>

#### Implementation of

MockOf.listAccounts

#### Defined in

[mock/index.ts:58](https://github.com/LedgerHQ/live-app-sdk/blob/5608a83/src/mock/index.ts#L58)

___

### listCurrencies

▸ **listCurrencies**(): `Promise`<[`Currency`](../modules.md#currency)[]\>

#### Returns

`Promise`<[`Currency`](../modules.md#currency)[]\>

#### Implementation of

MockOf.listCurrencies

#### Defined in

[mock/index.ts:50](https://github.com/LedgerHQ/live-app-sdk/blob/5608a83/src/mock/index.ts#L50)

___

### receive

▸ **receive**(`accountId`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `accountId` | `string` |

#### Returns

`Promise`<`string`\>

#### Implementation of

MockOf.receive

#### Defined in

[mock/index.ts:79](https://github.com/LedgerHQ/live-app-sdk/blob/5608a83/src/mock/index.ts#L79)

___

### requestAccount

▸ **requestAccount**(): `Promise`<[`Account`](../modules.md#account)\>

Legder Live Methods

#### Returns

`Promise`<[`Account`](../modules.md#account)\>

#### Implementation of

MockOf.requestAccount

#### Defined in

[mock/index.ts:46](https://github.com/LedgerHQ/live-app-sdk/blob/5608a83/src/mock/index.ts#L46)

___

### signMessage

▸ **signMessage**(`_accountId`, `_message`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_accountId` | `string` |
| `_message` | `Buffer` |

#### Returns

`Promise`<`string`\>

#### Implementation of

MockOf.signMessage

#### Defined in

[mock/index.ts:109](https://github.com/LedgerHQ/live-app-sdk/blob/5608a83/src/mock/index.ts#L109)

___

### signTransaction

▸ **signTransaction**(`_accountId`, `_transaction`): `Promise`<[`RawSignedTransaction`](../modules.md#rawsignedtransaction)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_accountId` | `string` |
| `_transaction` | `unknown` |

#### Returns

`Promise`<[`RawSignedTransaction`](../modules.md#rawsignedtransaction)\>

#### Implementation of

MockOf.signTransaction

#### Defined in

[mock/index.ts:94](https://github.com/LedgerHQ/live-app-sdk/blob/5608a83/src/mock/index.ts#L94)
