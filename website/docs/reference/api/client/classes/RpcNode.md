---
id: "RpcNode"
title: "Class: RpcNode<TSHandlers, TCHandlers>"
sidebar_label: "RpcNode"
sidebar_position: 0
custom_edit_url: null
---

## Type parameters

| Name |
| :------ |
| `TSHandlers` |
| `TCHandlers` |

## Hierarchy

- **`RpcNode`**

  ↳ [`WalletAPIClient`](WalletAPIClient.md)

## Constructors

### constructor

• **new RpcNode**<`TSHandlers`, `TCHandlers`\>(`transport`, `requestHandlers`)

#### Type parameters

| Name |
| :------ |
| `TSHandlers` |
| `TCHandlers` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `transport` | [`Transport`](../interfaces/Transport.md) |
| `requestHandlers` | `TSHandlers` |

#### Defined in

[packages/core/src/JSONRPC/RpcNode.ts:39](https://github.com/LedgerHQ/wallet-api/blob/main/packages/core/src/JSONRPC/RpcNode.ts#L39)

## Properties

### ongoingRequests

• `Private` **ongoingRequests**: `Object` = `{}`

#### Index signature

▪ [requestId: `number` \| `string`]: `Resolver`<[`RpcResponse`](../#rpcresponse)<`ReturnTypeOfMethodIfExists`<`TCHandlers`, keyof `TCHandlers`\>, `unknown`\>\>

#### Defined in

[packages/core/src/JSONRPC/RpcNode.ts:30](https://github.com/LedgerHQ/wallet-api/blob/main/packages/core/src/JSONRPC/RpcNode.ts#L30)

___

### requestHandlers

• `Protected` **requestHandlers**: `TSHandlers`

#### Defined in

[packages/core/src/JSONRPC/RpcNode.ts:28](https://github.com/LedgerHQ/wallet-api/blob/main/packages/core/src/JSONRPC/RpcNode.ts#L28)

___

### transport

• `Private` **transport**: [`Transport`](../interfaces/Transport.md)

#### Defined in

[packages/core/src/JSONRPC/RpcNode.ts:26](https://github.com/LedgerHQ/wallet-api/blob/main/packages/core/src/JSONRPC/RpcNode.ts#L26)

## Methods

### \_notify

▸ `Private` **_notify**<`K`\>(`request`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends `string` \| `number` \| `symbol` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | [`RpcRequest`](../interfaces/RpcRequest.md)<`K`, `MethodParamsIfExists`<`TCHandlers`, `K`\>\> |

#### Returns

`void`

#### Defined in

[packages/core/src/JSONRPC/RpcNode.ts:83](https://github.com/LedgerHQ/wallet-api/blob/main/packages/core/src/JSONRPC/RpcNode.ts#L83)

___

### \_request

▸ `Private` **_request**<`K`\>(`request`): `Promise`<`ReturnTypeOfMethodIfExists`<`TCHandlers`, `K`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends `string` \| `number` \| `symbol` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | [`RpcRequest`](../interfaces/RpcRequest.md)<`K`, `MethodParamsIfExists`<`TCHandlers`, `K`\>\> |

#### Returns

`Promise`<`ReturnTypeOfMethodIfExists`<`TCHandlers`, `K`\>\>

#### Defined in

[packages/core/src/JSONRPC/RpcNode.ts:47](https://github.com/LedgerHQ/wallet-api/blob/main/packages/core/src/JSONRPC/RpcNode.ts#L47)

___

### handleMessage

▸ `Private` **handleMessage**(`message`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` |

#### Returns

`Promise`<`void`\>

#### Defined in

[packages/core/src/JSONRPC/RpcNode.ts:151](https://github.com/LedgerHQ/wallet-api/blob/main/packages/core/src/JSONRPC/RpcNode.ts#L151)

___

### handleRpcRequest

▸ `Private` **handleRpcRequest**(`request`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | [`RpcRequest`](../interfaces/RpcRequest.md)<`string`, `unknown`\> |

#### Returns

`Promise`<`void`\>

#### Defined in

[packages/core/src/JSONRPC/RpcNode.ts:113](https://github.com/LedgerHQ/wallet-api/blob/main/packages/core/src/JSONRPC/RpcNode.ts#L113)

___

### handleRpcResponse

▸ `Private` **handleRpcResponse**(`response`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | [`RpcResponse`](../#rpcresponse)<`ReturnTypeOfMethodIfExists`<`TCHandlers`, keyof `TCHandlers`\>, `unknown`\> |

#### Returns

`void`

#### Defined in

[packages/core/src/JSONRPC/RpcNode.ts:196](https://github.com/LedgerHQ/wallet-api/blob/main/packages/core/src/JSONRPC/RpcNode.ts#L196)

___

### notify

▸ **notify**<`K`\>(`method`, `params`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends `string` \| `number` \| `symbol` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `method` | `K` |
| `params` | `MethodParamsIfExists`<`TCHandlers`, `K`\> |

#### Returns

`void`

#### Defined in

[packages/core/src/JSONRPC/RpcNode.ts:102](https://github.com/LedgerHQ/wallet-api/blob/main/packages/core/src/JSONRPC/RpcNode.ts#L102)

___

### onRequest

▸ `Protected` `Abstract` **onRequest**(`request`): `Promise`<`unknown`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | [`RpcRequest`](../interfaces/RpcRequest.md)<`string`, `unknown`\> |

#### Returns

`Promise`<`unknown`\>

#### Defined in

[packages/core/src/JSONRPC/RpcNode.ts:194](https://github.com/LedgerHQ/wallet-api/blob/main/packages/core/src/JSONRPC/RpcNode.ts#L194)

___

### request

▸ **request**<`K`\>(`method`, `params`): `Promise`<`ReturnTypeOfMethodIfExists`<`TCHandlers`, `K`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends `string` \| `number` \| `symbol` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `method` | `K` |
| `params` | `MethodParamsIfExists`<`TCHandlers`, `K`\> |

#### Returns

`Promise`<`ReturnTypeOfMethodIfExists`<`TCHandlers`, `K`\>\>

#### Defined in

[packages/core/src/JSONRPC/RpcNode.ts:89](https://github.com/LedgerHQ/wallet-api/blob/main/packages/core/src/JSONRPC/RpcNode.ts#L89)
