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

packages/core/lib/JSONRPC/RpcNode.d.ts:11

## Properties

### \_notify

• `Private` **\_notify**: `any`

#### Defined in

packages/core/lib/JSONRPC/RpcNode.d.ts:13

___

### \_request

• `Private` **\_request**: `any`

#### Defined in

packages/core/lib/JSONRPC/RpcNode.d.ts:12

___

### handleMessage

• `Private` **handleMessage**: `any`

#### Defined in

packages/core/lib/JSONRPC/RpcNode.d.ts:17

___

### handleRpcRequest

• `Private` **handleRpcRequest**: `any`

#### Defined in

packages/core/lib/JSONRPC/RpcNode.d.ts:16

___

### handleRpcResponse

• `Private` **handleRpcResponse**: `any`

#### Defined in

packages/core/lib/JSONRPC/RpcNode.d.ts:19

___

### ongoingRequests

• `Private` **ongoingRequests**: `any`

#### Defined in

packages/core/lib/JSONRPC/RpcNode.d.ts:10

___

### requestHandlers

• `Protected` **requestHandlers**: `TSHandlers`

#### Defined in

packages/core/lib/JSONRPC/RpcNode.d.ts:9

___

### transport

• `Private` **transport**: `any`

#### Defined in

packages/core/lib/JSONRPC/RpcNode.d.ts:8

## Methods

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

packages/core/lib/JSONRPC/RpcNode.d.ts:15

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

packages/core/lib/JSONRPC/RpcNode.d.ts:18

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

packages/core/lib/JSONRPC/RpcNode.d.ts:14
