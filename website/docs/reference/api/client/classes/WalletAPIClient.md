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

[packages/client/src/WalletAPIClient.ts:81](https://github.com/LedgerHQ/wallet-api/blob/main/packages/client/src/WalletAPIClient.ts#L81)

## Properties

### account

• **account**: `AccountModule`

Instance of the Account module

#### Defined in

[packages/client/src/WalletAPIClient.ts:42](https://github.com/LedgerHQ/wallet-api/blob/main/packages/client/src/WalletAPIClient.ts#L42)

___

### bitcoin

• **bitcoin**: `BitcoinModule`

Instance of the Bitcoin module

#### Defined in

[packages/client/src/WalletAPIClient.ts:47](https://github.com/LedgerHQ/wallet-api/blob/main/packages/client/src/WalletAPIClient.ts#L47)

___

### currency

• **currency**: `CurrencyModule`

Instance of the Currency module

#### Defined in

[packages/client/src/WalletAPIClient.ts:52](https://github.com/LedgerHQ/wallet-api/blob/main/packages/client/src/WalletAPIClient.ts#L52)

___

### device

• **device**: `DeviceModule`

Instance of the Device module

#### Defined in

[packages/client/src/WalletAPIClient.ts:57](https://github.com/LedgerHQ/wallet-api/blob/main/packages/client/src/WalletAPIClient.ts#L57)

___

### logger

• `Private` **logger**: `Logger`

#### Defined in

[packages/client/src/WalletAPIClient.ts:79](https://github.com/LedgerHQ/wallet-api/blob/main/packages/client/src/WalletAPIClient.ts#L79)

___

### message

• **message**: `MessageModule`

Instance of the Message module

#### Defined in

[packages/client/src/WalletAPIClient.ts:62](https://github.com/LedgerHQ/wallet-api/blob/main/packages/client/src/WalletAPIClient.ts#L62)

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

packages/core/lib/JSONRPC/RpcNode.d.ts:9

___

### storage

• **storage**: `StorageModule`

Instance of the Storage module

#### Defined in

[packages/client/src/WalletAPIClient.ts:67](https://github.com/LedgerHQ/wallet-api/blob/main/packages/client/src/WalletAPIClient.ts#L67)

___

### transaction

• **transaction**: `TransactionModule`

Instance of the Transaction module

#### Defined in

[packages/client/src/WalletAPIClient.ts:72](https://github.com/LedgerHQ/wallet-api/blob/main/packages/client/src/WalletAPIClient.ts#L72)

___

### wallet

• **wallet**: `WalletModule`

Instance of the Wallet module

#### Defined in

[packages/client/src/WalletAPIClient.ts:77](https://github.com/LedgerHQ/wallet-api/blob/main/packages/client/src/WalletAPIClient.ts#L77)

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

packages/core/lib/JSONRPC/RpcNode.d.ts:15

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

[packages/client/src/WalletAPIClient.ts:94](https://github.com/LedgerHQ/wallet-api/blob/main/packages/client/src/WalletAPIClient.ts#L94)

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

packages/core/lib/JSONRPC/RpcNode.d.ts:14
