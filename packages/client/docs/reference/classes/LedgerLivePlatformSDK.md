[@ledgerhq/live-app-sdk](../README.md) / [Exports](../modules.md) / LedgerLivePlatformSDK

# Class: LedgerLivePlatformSDK

## Table of contents

### Constructors

- [constructor](LedgerLivePlatformSDK.md#constructor)

### Properties

- [logger](LedgerLivePlatformSDK.md#logger)
- [serverAndClient](LedgerLivePlatformSDK.md#serverandclient)
- [transport](LedgerLivePlatformSDK.md#transport)

### Methods

- [_request](LedgerLivePlatformSDK.md#_request)
- [broadcastSignedTransaction](LedgerLivePlatformSDK.md#broadcastsignedtransaction)
- [completeExchange](LedgerLivePlatformSDK.md#completeexchange)
- [connect](LedgerLivePlatformSDK.md#connect)
- [disconnect](LedgerLivePlatformSDK.md#disconnect)
- [listAccounts](LedgerLivePlatformSDK.md#listaccounts)
- [listCurrencies](LedgerLivePlatformSDK.md#listcurrencies)
- [receive](LedgerLivePlatformSDK.md#receive)
- [requestAccount](LedgerLivePlatformSDK.md#requestaccount)
- [signTransaction](LedgerLivePlatformSDK.md#signtransaction)
- [startExchange](LedgerLivePlatformSDK.md#startexchange)

## Constructors

### constructor

• **new LedgerLivePlatformSDK**(`transport`, `logger?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `transport` | [`Transport`](../interfaces/Transport.md) |
| `logger` | `default` |

#### Defined in

[LedgerLivePlatformSDK/index.ts:51](https://github.com/LedgerHQ/live-app-sdk/blob/72b3e13/src/LedgerLivePlatformSDK/index.ts#L51)

## Properties

### logger

• `Private` **logger**: `default`

**`internal`**

#### Defined in

[LedgerLivePlatformSDK/index.ts:44](https://github.com/LedgerHQ/live-app-sdk/blob/72b3e13/src/LedgerLivePlatformSDK/index.ts#L44)

___

### serverAndClient

• `Private` `Optional` **serverAndClient**: `JSONRPCServerAndClient`<`void`, `void`\>

**`internal`**

#### Defined in

[LedgerLivePlatformSDK/index.ts:49](https://github.com/LedgerHQ/live-app-sdk/blob/72b3e13/src/LedgerLivePlatformSDK/index.ts#L49)

___

### transport

• `Private` **transport**: [`Transport`](../interfaces/Transport.md)

**`internal`**

#### Defined in

[LedgerLivePlatformSDK/index.ts:39](https://github.com/LedgerHQ/live-app-sdk/blob/72b3e13/src/LedgerLivePlatformSDK/index.ts#L39)

## Methods

### \_request

▸ `Private` **_request**<`T`\>(`method`, `params?`): `Promise`<`T`\>

**`internal`**
Wrapper to api request for logging

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `method` | `string` |
| `params?` | `JSONRPCParams` |

#### Returns

`Promise`<`T`\>

#### Defined in

[LedgerLivePlatformSDK/index.ts:60](https://github.com/LedgerHQ/live-app-sdk/blob/72b3e13/src/LedgerLivePlatformSDK/index.ts#L60)

___

### broadcastSignedTransaction

▸ **broadcastSignedTransaction**(`accountId`, `signedTransaction`): `Promise`<`string`\>

Broadcast a previously signed transaction through Ledger Live

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `accountId` | `string` | LL id of the account |
| `signedTransaction` | [`RawSignedTransaction`](../modules.md#rawsignedtransaction) | A [RawSignedTransaction](../modules.md#rawsignedtransaction) returned by LL when signing with [signTransaction](Mock.md#signtransaction) |

#### Returns

`Promise`<`string`\>

The hash of the transaction

#### Defined in

[LedgerLivePlatformSDK/index.ts:228](https://github.com/LedgerHQ/live-app-sdk/blob/72b3e13/src/LedgerLivePlatformSDK/index.ts#L228)

___

### completeExchange

▸ **completeExchange**(`options`): `Promise`<[`RawSignedTransaction`](../modules.md#rawsignedtransaction)\>

**`alpha`**
Complete an exchange process by passing by the exchange content and its signature.
User will be prompted on its device to approve the exchange.
If the exchange is validated, the transaction is then signed and broadcasted to the network.

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |
| `options.binaryPayload` | `string` |
| `options.exchangeType` | [`ExchangeType`](../enums/ExchangeType.md) |
| `options.feesStrategy` | [`FeesLevel`](../enums/FeesLevel.md) |
| `options.fromAccountId` | `string` |
| `options.provider` | `string` |
| `options.signature` | `string` |
| `options.toAccountId?` | `string` |
| `options.transaction` | [`Transaction`](../modules.md#transaction) |

#### Returns

`Promise`<[`RawSignedTransaction`](../modules.md#rawsignedtransaction)\>

- The broadcasted transaction details.

#### Defined in

[LedgerLivePlatformSDK/index.ts:161](https://github.com/LedgerHQ/live-app-sdk/blob/72b3e13/src/LedgerLivePlatformSDK/index.ts#L161)

___

### connect

▸ **connect**(): `void`

Connect the SDK to the Ledger Live instance

**`remarks`**
Establish the connection with Ledger Live through the [[transport]] instance provided at initialization

#### Returns

`void`

#### Defined in

[LedgerLivePlatformSDK/index.ts:86](https://github.com/LedgerHQ/live-app-sdk/blob/72b3e13/src/LedgerLivePlatformSDK/index.ts#L86)

___

### disconnect

▸ **disconnect**(): `void`

Disconnect the SDK.

#### Returns

`void`

#### Defined in

[LedgerLivePlatformSDK/index.ts:102](https://github.com/LedgerHQ/live-app-sdk/blob/72b3e13/src/LedgerLivePlatformSDK/index.ts#L102)

___

### listAccounts

▸ **listAccounts**(): `Promise`<[`Account`](../modules.md#account)[]\>

List accounts added by user on Ledger Live

#### Returns

`Promise`<[`Account`](../modules.md#account)[]\>

The list of accounts added by the current user on Ledger Live

#### Defined in

[LedgerLivePlatformSDK/index.ts:243](https://github.com/LedgerHQ/live-app-sdk/blob/72b3e13/src/LedgerLivePlatformSDK/index.ts#L243)

___

### listCurrencies

▸ **listCurrencies**(`params?`): `Promise`<[`Currency`](../modules.md#currency)[]\>

List cryptocurrencies supported by Ledger Live, providing filters by name or ticker

**`beta`** Filtering not yet implemented

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params?` | `Object` | Filters for currencies |
| `params.name?` | `string` | name of the currency |
| `params.ticker?` | `string` | ticker of the currency |

#### Returns

`Promise`<[`Currency`](../modules.md#currency)[]\>

The list of corresponding cryptocurrencies

#### Defined in

[LedgerLivePlatformSDK/index.ts:301](https://github.com/LedgerHQ/live-app-sdk/blob/72b3e13/src/LedgerLivePlatformSDK/index.ts#L301)

___

### receive

▸ **receive**(`accountId`): `Promise`<`string`\>

Let user verify it's account address on his device through Ledger Live

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `accountId` | `string` | LL id of the account |

#### Returns

`Promise`<`string`\>

The verified address

#### Defined in

[LedgerLivePlatformSDK/index.ts:277](https://github.com/LedgerHQ/live-app-sdk/blob/72b3e13/src/LedgerLivePlatformSDK/index.ts#L277)

___

### requestAccount

▸ **requestAccount**(`params?`): `Promise`<[`Account`](../modules.md#account)\>

Let user choose an account in a Ledger Live, providing filters for choosing currency or allowing add account.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | `Object` | Parameters for the request modal |
| `params.allowAddAccount?` | `boolean` | - |
| `params.currencies?` | `string`[] | - |

#### Returns

`Promise`<[`Account`](../modules.md#account)\>

The account selected by the user

#### Defined in

[LedgerLivePlatformSDK/index.ts:256](https://github.com/LedgerHQ/live-app-sdk/blob/72b3e13/src/LedgerLivePlatformSDK/index.ts#L256)

___

### signTransaction

▸ **signTransaction**(`accountId`, `transaction`, `params?`): `Promise`<[`RawSignedTransaction`](../modules.md#rawsignedtransaction)\>

Let user sign a transaction through Ledger Live

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `accountId` | `string` | LL id of the account |
| `transaction` | [`Transaction`](../modules.md#transaction) | The transaction object in the currency family-specific format |
| `params?` | `Object` | Parameters for the sign modal |
| `params.useApp` | `string` | The name of the Ledger Nano app to use for the signing process |

#### Returns

`Promise`<[`RawSignedTransaction`](../modules.md#rawsignedtransaction)\>

The raw signed transaction to broadcast

#### Defined in

[LedgerLivePlatformSDK/index.ts:204](https://github.com/LedgerHQ/live-app-sdk/blob/72b3e13/src/LedgerLivePlatformSDK/index.ts#L204)

___

### startExchange

▸ **startExchange**(`options`): `Promise`<`string`\>

**`alpha`**
Start the exchange process by generating a nonce on Ledger device

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |
| `options.exchangeType` | [`ExchangeType`](../enums/ExchangeType.md) |

#### Returns

`Promise`<`string`\>

- A transaction ID used to complete the exchange process

#### Defined in

[LedgerLivePlatformSDK/index.ts:137](https://github.com/LedgerHQ/live-app-sdk/blob/72b3e13/src/LedgerLivePlatformSDK/index.ts#L137)
