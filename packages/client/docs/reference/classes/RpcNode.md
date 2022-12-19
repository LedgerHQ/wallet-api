[@ledgerhq/wallet-api-client](../README.md) / [Exports](../modules.md) / RpcNode

# Class: RpcNode<TSHandlers, TCHandlers\>

## Type parameters

| Name |
| :------ |
| `TSHandlers` |
| `TCHandlers` |

## Hierarchy

- **`RpcNode`**

  ↳ [`WalletAPIClient`](WalletAPIClient.md)

## Table of contents

### Constructors

- [constructor](RpcNode.md#constructor)

### Properties

- [\_notify](RpcNode.md#_notify)
- [\_request](RpcNode.md#_request)
- [handleMessage](RpcNode.md#handlemessage)
- [handleRpcRequest](RpcNode.md#handlerpcrequest)
- [handleRpcResponse](RpcNode.md#handlerpcresponse)
- [ongoingRequests](RpcNode.md#ongoingrequests)
- [requestHandlers](RpcNode.md#requesthandlers)
- [transport](RpcNode.md#transport)

### Methods

- [notify](RpcNode.md#notify)
- [onRequest](RpcNode.md#onrequest)
- [request](RpcNode.md#request)

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

▸ **request**<`K`, `TError`\>(`method`, `params`): `Promise`<[`RpcResponse`](../modules.md#rpcresponse)<`ReturnTypeOfMethodIfExists`<`TCHandlers`, `K`\>, `TError`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends `string` \| `number` \| `symbol` |
| `TError` | `unknown` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `method` | `K` |
| `params` | `MethodParamsIfExists`<`TCHandlers`, `K`\> |

#### Returns

`Promise`<[`RpcResponse`](../modules.md#rpcresponse)<`ReturnTypeOfMethodIfExists`<`TCHandlers`, `K`\>, `TError`\>\>

#### Defined in

packages/core/lib/JSONRPC/RpcNode.d.ts:14
