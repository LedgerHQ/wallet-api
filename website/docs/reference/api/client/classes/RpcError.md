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

packages/core/lib/JSONRPC/RPCError.d.ts:4

## Properties

### err

• `Private` `Readonly` **err**: `any`

#### Defined in

packages/core/lib/JSONRPC/RPCError.d.ts:3

___

### message

• **message**: `string`

#### Inherited from

Error.message

#### Defined in

node_modules/.pnpm/typescript@4.8.4/node_modules/typescript/lib/lib.es5.d.ts:1041

___

### name

• **name**: `string`

#### Inherited from

Error.name

#### Defined in

node_modules/.pnpm/typescript@4.8.4/node_modules/typescript/lib/lib.es5.d.ts:1040

___

### stack

• `Optional` **stack**: `string`

#### Inherited from

Error.stack

#### Defined in

node_modules/.pnpm/typescript@4.8.4/node_modules/typescript/lib/lib.es5.d.ts:1042

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

node_modules/.pnpm/@types+node@18.11.8/node_modules/@types/node/ts4.8/globals.d.ts:11

___

### stackTraceLimit

▪ `Static` **stackTraceLimit**: `number`

#### Inherited from

Error.stackTraceLimit

#### Defined in

node_modules/.pnpm/@types+node@18.11.8/node_modules/@types/node/ts4.8/globals.d.ts:13

## Methods

### getCode

▸ **getCode**(): `number`

Retrieve error code

#### Returns

`number`

error code

#### Defined in

packages/core/lib/JSONRPC/RPCError.d.ts:9

___

### getData

▸ **getData**(): `undefined` \| `TError`

Retrieve underlying data info

#### Returns

`undefined` \| `TError`

data info

#### Defined in

packages/core/lib/JSONRPC/RPCError.d.ts:14

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

node_modules/.pnpm/@types+node@18.11.8/node_modules/@types/node/ts4.8/globals.d.ts:4
