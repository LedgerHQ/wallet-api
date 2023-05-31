---
id: "RpcError"
title: "Class: RpcError<TError>"
sidebar_label: "RpcError"
sidebar_position: 0
custom_edit_url: null
---

## Type parameters

| Name | Type |
| :------ | :------ |
| `TError` | `unknown` |

## Hierarchy

- `Error`

  ↳ **`RpcError`**

## Constructors

### constructor

• **new RpcError**<`TError`\>(`err`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TError` | `unknown` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `err` | [`RpcResponseError`](../interfaces/RpcResponseError.md)<`TError`\> |

#### Overrides

Error.constructor

#### Defined in

[packages/core/src/JSONRPC/RPCError.ts:6](https://github.com/LedgerHQ/wallet-api/blob/main/packages/core/src/JSONRPC/RPCError.ts#L6)

## Properties

### err

• `Private` `Readonly` **err**: [`RpcResponseError`](../interfaces/RpcResponseError.md)<`TError`\>

#### Defined in

[packages/core/src/JSONRPC/RPCError.ts:4](https://github.com/LedgerHQ/wallet-api/blob/main/packages/core/src/JSONRPC/RPCError.ts#L4)

___

### message

• **message**: `string`

#### Inherited from

Error.message

#### Defined in

node_modules/.pnpm/typescript@5.0.4/node_modules/typescript/lib/lib.es5.d.ts:1055

___

### name

• **name**: `string`

#### Inherited from

Error.name

#### Defined in

node_modules/.pnpm/typescript@5.0.4/node_modules/typescript/lib/lib.es5.d.ts:1054

___

### stack

• `Optional` **stack**: `string`

#### Inherited from

Error.stack

#### Defined in

node_modules/.pnpm/typescript@5.0.4/node_modules/typescript/lib/lib.es5.d.ts:1056

___

### prepareStackTrace

▪ `Static` `Optional` **prepareStackTrace**: (`err`: `Error`, `stackTraces`: `CallSite`[]) => `any`

#### Type declaration

▸ (`err`, `stackTraces`): `any`

Optional override for formatting stack traces

**`See`**

https://v8.dev/docs/stack-trace-api#customizing-stack-traces

##### Parameters

| Name | Type |
| :------ | :------ |
| `err` | `Error` |
| `stackTraces` | `CallSite`[] |

##### Returns

`any`

#### Inherited from

Error.prepareStackTrace

#### Defined in

node_modules/.pnpm/@types+node@20.2.5/node_modules/@types/node/globals.d.ts:11

___

### stackTraceLimit

▪ `Static` **stackTraceLimit**: `number`

#### Inherited from

Error.stackTraceLimit

#### Defined in

node_modules/.pnpm/@types+node@20.2.5/node_modules/@types/node/globals.d.ts:13

## Methods

### getCode

▸ **getCode**(): `number`

Retrieve error code

#### Returns

`number`

error code

#### Defined in

[packages/core/src/JSONRPC/RPCError.ts:15](https://github.com/LedgerHQ/wallet-api/blob/main/packages/core/src/JSONRPC/RPCError.ts#L15)

___

### getData

▸ **getData**(): `undefined` \| `TError`

Retrieve underlying data info

#### Returns

`undefined` \| `TError`

data info

#### Defined in

[packages/core/src/JSONRPC/RPCError.ts:23](https://github.com/LedgerHQ/wallet-api/blob/main/packages/core/src/JSONRPC/RPCError.ts#L23)

___

### captureStackTrace

▸ `Static` **captureStackTrace**(`targetObject`, `constructorOpt?`): `void`

Create .stack property on a target object

#### Parameters

| Name | Type |
| :------ | :------ |
| `targetObject` | `object` |
| `constructorOpt?` | `Function` |

#### Returns

`void`

#### Inherited from

Error.captureStackTrace

#### Defined in

node_modules/.pnpm/@types+node@20.2.5/node_modules/@types/node/globals.d.ts:4
