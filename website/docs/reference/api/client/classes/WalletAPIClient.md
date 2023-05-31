---
id: "WalletAPIClient"
title: "Class: WalletAPIClient"
sidebar_label: "WalletAPIClient"
sidebar_position: 0
custom_edit_url: null
---

WalletAPI Client which rely on WindowMessage communication

## Hierarchy

- [`RpcNode`](RpcNode.md)<typeof `requestHandlers`, [`WalletHandlers`](../interfaces/WalletHandlers.md)\>

  ↳ **`WalletAPIClient`**

## Constructors

### constructor

• **new WalletAPIClient**(`transport`, `logger?`)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `transport` | [`Transport`](../interfaces/Transport.md) | `undefined` |
| `logger` | `Logger` | `defaultLogger` |

#### Overrides

[RpcNode](RpcNode.md).[constructor](RpcNode.md#constructor)

#### Defined in

[packages/client/src/WalletAPIClient.ts:87](https://github.com/LedgerHQ/wallet-api/blob/main/packages/client/src/WalletAPIClient.ts#L87)

## Properties

### account

• **account**: `AccountModule`

Instance of the Account module

#### Defined in

[packages/client/src/WalletAPIClient.ts:43](https://github.com/LedgerHQ/wallet-api/blob/main/packages/client/src/WalletAPIClient.ts#L43)

___

### bitcoin

• **bitcoin**: `BitcoinModule`

Instance of the Bitcoin module

#### Defined in

[packages/client/src/WalletAPIClient.ts:48](https://github.com/LedgerHQ/wallet-api/blob/main/packages/client/src/WalletAPIClient.ts#L48)

___

### currency

• **currency**: `CurrencyModule`

Instance of the Currency module

#### Defined in

[packages/client/src/WalletAPIClient.ts:53](https://github.com/LedgerHQ/wallet-api/blob/main/packages/client/src/WalletAPIClient.ts#L53)

___

### device

• **device**: `DeviceModule`

Instance of the Device module

#### Defined in

[packages/client/src/WalletAPIClient.ts:58](https://github.com/LedgerHQ/wallet-api/blob/main/packages/client/src/WalletAPIClient.ts#L58)

___

### exchange

• **exchange**: `ExchangeModule`

Instance of the Wallet module

#### Defined in

[packages/client/src/WalletAPIClient.ts:83](https://github.com/LedgerHQ/wallet-api/blob/main/packages/client/src/WalletAPIClient.ts#L83)

___

### logger

• `Private` **logger**: `Logger`

#### Defined in

[packages/client/src/WalletAPIClient.ts:85](https://github.com/LedgerHQ/wallet-api/blob/main/packages/client/src/WalletAPIClient.ts#L85)

___

### message

• **message**: `MessageModule`

Instance of the Message module

#### Defined in

[packages/client/src/WalletAPIClient.ts:63](https://github.com/LedgerHQ/wallet-api/blob/main/packages/client/src/WalletAPIClient.ts#L63)

___

### requestHandlers

• `Protected` **requestHandlers**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `event.account.updated` | (`_request`: [`RpcRequest`](../interfaces/RpcRequest.md)<`string`, `unknown`\>) => `Promise`<`void`\> |

#### Inherited from

[RpcNode](RpcNode.md).[requestHandlers](RpcNode.md#requesthandlers)

#### Defined in

[packages/core/src/JSONRPC/RpcNode.ts:28](https://github.com/LedgerHQ/wallet-api/blob/main/packages/core/src/JSONRPC/RpcNode.ts#L28)

___

### storage

• **storage**: `StorageModule`

Instance of the Storage module

#### Defined in

[packages/client/src/WalletAPIClient.ts:68](https://github.com/LedgerHQ/wallet-api/blob/main/packages/client/src/WalletAPIClient.ts#L68)

___

### transaction

• **transaction**: `TransactionModule`

Instance of the Transaction module

#### Defined in

[packages/client/src/WalletAPIClient.ts:73](https://github.com/LedgerHQ/wallet-api/blob/main/packages/client/src/WalletAPIClient.ts#L73)

___

### wallet

• **wallet**: `WalletModule`

Instance of the Wallet module

#### Defined in

[packages/client/src/WalletAPIClient.ts:78](https://github.com/LedgerHQ/wallet-api/blob/main/packages/client/src/WalletAPIClient.ts#L78)

## Methods

### notify

▸ **notify**<`K`\>(`method`, `params`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof [`WalletHandlers`](../interfaces/WalletHandlers.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `method` | `K` |
| `params` | `MethodParamsIfExists`<[`WalletHandlers`](../interfaces/WalletHandlers.md), `K`\> |

#### Returns

`void`

#### Inherited from

[RpcNode](RpcNode.md).[notify](RpcNode.md#notify)

#### Defined in

[packages/core/src/JSONRPC/RpcNode.ts:102](https://github.com/LedgerHQ/wallet-api/blob/main/packages/core/src/JSONRPC/RpcNode.ts#L102)

___

### onRequest

▸ `Protected` **onRequest**(`request`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | [`RpcRequest`](../interfaces/RpcRequest.md)<`string`, `unknown`\> |

#### Returns

`Promise`<`void`\>

#### Overrides

[RpcNode](RpcNode.md).[onRequest](RpcNode.md#onrequest)

#### Defined in

[packages/client/src/WalletAPIClient.ts:101](https://github.com/LedgerHQ/wallet-api/blob/main/packages/client/src/WalletAPIClient.ts#L101)

___

### request

▸ **request**<`K`\>(`method`, `params`): `Promise`<`ReturnTypeOfMethodIfExists`<[`WalletHandlers`](../interfaces/WalletHandlers.md), `K`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof [`WalletHandlers`](../interfaces/WalletHandlers.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `method` | `K` |
| `params` | `MethodParamsIfExists`<[`WalletHandlers`](../interfaces/WalletHandlers.md), `K`\> |

#### Returns

`Promise`<`ReturnTypeOfMethodIfExists`<[`WalletHandlers`](../interfaces/WalletHandlers.md), `K`\>\>

#### Inherited from

[RpcNode](RpcNode.md).[request](RpcNode.md#request)

#### Defined in

[packages/core/src/JSONRPC/RpcNode.ts:89](https://github.com/LedgerHQ/wallet-api/blob/main/packages/core/src/JSONRPC/RpcNode.ts#L89)
