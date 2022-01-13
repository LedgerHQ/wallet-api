[@ledgerhq/live-app-sdk](../README.md) / [Exports](../modules.md) / LedgerLivePlatformSDK

# Class: LedgerLivePlatformSDK

## Table of contents

### Constructors

- [constructor](LedgerLivePlatformSDK.md#constructor)

### Methods

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

[LedgerLivePlatformSDK/index.ts:54](https://github.com/LedgerHQ/live-app-sdk/blob/1d8d8d5/src/LedgerLivePlatformSDK/index.ts#L54)

## Methods

### broadcastSignedTransaction

▸ **broadcastSignedTransaction**(`accountId`, `signedTransaction`): `Promise`<`string`\>

Broadcast a previously signed transaction through Ledger Live

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `accountId` | `string` | Ledger Live id of the account |
| `signedTransaction` | [`RawSignedTransaction`](../modules.md#rawsignedtransaction) | A [RawSignedTransaction](../modules.md#rawsignedtransaction) returned by Ledger Live when signing with [signTransaction](Mock.md#signtransaction) |

#### Returns

`Promise`<`string`\>

The hash of the transaction

#### Defined in

[LedgerLivePlatformSDK/index.ts:232](https://github.com/LedgerHQ/live-app-sdk/blob/1d8d8d5/src/LedgerLivePlatformSDK/index.ts#L232)

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
| `options.binaryPayload` | `Buffer` |
| `options.exchangeType` | [`ExchangeType`](../enums/ExchangeType.md) |
| `options.feesStrategy` | [`FeesLevel`](../enums/FeesLevel.md) |
| `options.fromAccountId` | `string` |
| `options.provider` | `string` |
| `options.signature` | `Buffer` |
| `options.toAccountId?` | `string` |
| `options.transaction` | [`Transaction`](../modules.md#transaction) |

#### Returns

`Promise`<[`RawSignedTransaction`](../modules.md#rawsignedtransaction)\>

- The broadcasted transaction details.

#### Defined in

[LedgerLivePlatformSDK/index.ts:165](https://github.com/LedgerHQ/live-app-sdk/blob/1d8d8d5/src/LedgerLivePlatformSDK/index.ts#L165)

___

### connect

▸ **connect**(): `void`

Connect the SDK to the Ledger Live instance

**`remarks`**
Establish the connection with Ledger Live through the [[transport]] instance provided at initialization

#### Returns

`void`

#### Defined in

[LedgerLivePlatformSDK/index.ts:90](https://github.com/LedgerHQ/live-app-sdk/blob/1d8d8d5/src/LedgerLivePlatformSDK/index.ts#L90)

___

### disconnect

▸ **disconnect**(): `void`

Disconnect the SDK.

#### Returns

`void`

#### Defined in

[LedgerLivePlatformSDK/index.ts:106](https://github.com/LedgerHQ/live-app-sdk/blob/1d8d8d5/src/LedgerLivePlatformSDK/index.ts#L106)

___

### listAccounts

▸ **listAccounts**(): `Promise`<[`Account`](../modules.md#account)[]\>

List accounts added by user on Ledger Live

#### Returns

`Promise`<[`Account`](../modules.md#account)[]\>

The list of accounts added by the current user on Ledger Live

#### Defined in

[LedgerLivePlatformSDK/index.ts:247](https://github.com/LedgerHQ/live-app-sdk/blob/1d8d8d5/src/LedgerLivePlatformSDK/index.ts#L247)

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

[LedgerLivePlatformSDK/index.ts:305](https://github.com/LedgerHQ/live-app-sdk/blob/1d8d8d5/src/LedgerLivePlatformSDK/index.ts#L305)

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

[LedgerLivePlatformSDK/index.ts:281](https://github.com/LedgerHQ/live-app-sdk/blob/1d8d8d5/src/LedgerLivePlatformSDK/index.ts#L281)

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

[LedgerLivePlatformSDK/index.ts:260](https://github.com/LedgerHQ/live-app-sdk/blob/1d8d8d5/src/LedgerLivePlatformSDK/index.ts#L260)

___

### signTransaction

▸ **signTransaction**(`accountId`, `transaction`, `params?`): `Promise`<[`RawSignedTransaction`](../modules.md#rawsignedtransaction)\>

Let the user sign a transaction through Ledger Live

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `accountId` | `string` | Ledger Live id of the account |
| `transaction` | [`Transaction`](../modules.md#transaction) | The transaction object in the currency family-specific format |
| `params?` | `Object` | Parameters for the sign modal |
| `params.useApp` | `string` | The name of the Ledger Nano app to use for the signing process |

#### Returns

`Promise`<[`RawSignedTransaction`](../modules.md#rawsignedtransaction)\>

The raw signed transaction to broadcast

#### Defined in

[LedgerLivePlatformSDK/index.ts:208](https://github.com/LedgerHQ/live-app-sdk/blob/1d8d8d5/src/LedgerLivePlatformSDK/index.ts#L208)

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

[LedgerLivePlatformSDK/index.ts:141](https://github.com/LedgerHQ/live-app-sdk/blob/1d8d8d5/src/LedgerLivePlatformSDK/index.ts#L141)
