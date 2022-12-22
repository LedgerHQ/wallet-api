---
id: "ServerError"
title: "Class: ServerError"
sidebar_label: "ServerError"
sidebar_position: 0
custom_edit_url: null
---

## Hierarchy

- `Error`

  ↳ **`ServerError`**

## Constructors

### constructor

• **new ServerError**(`errorData`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `errorData` | { `code`: ``"NOT_IMPLEMENTED_BY_WALLET"`` ; `data`: { `methodId`: `string`  } ; `message`: `string`  } \| { `code`: ``"ACCOUNT_NOT_FOUND"`` ; `data`: { `accountId`: `string`  } ; `message`: `string`  } \| { `code`: ``"CURRENCY_NOT_FOUND"`` ; `data`: { `currencyId`: `string`  } ; `message`: `string`  } \| { `code`: ``"PERMISSION_DENIED"`` ; `data`: { `methodId`: `string`  } ; `message`: `string`  } \| { `code`: ``"UNKNOWN_ERROR"`` ; `data`: { `cause?`: `unknown` ; `code?`: `string` ; `message?`: `string` ; `name?`: `string` ; `stack?`: `string`  } ; `message`: `string`  } |

#### Overrides

Error.constructor

#### Defined in

packages/core/lib/errors/ServerError.d.ts:4

## Properties

### errorData

• `Private` `Readonly` **errorData**: `any`

#### Defined in

packages/core/lib/errors/ServerError.d.ts:3

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

▸ **getCode**(): ``"NOT_IMPLEMENTED_BY_WALLET"`` \| ``"ACCOUNT_NOT_FOUND"`` \| ``"CURRENCY_NOT_FOUND"`` \| ``"PERMISSION_DENIED"`` \| ``"UNKNOWN_ERROR"``

Retrieve error code

#### Returns

``"NOT_IMPLEMENTED_BY_WALLET"`` \| ``"ACCOUNT_NOT_FOUND"`` \| ``"CURRENCY_NOT_FOUND"`` \| ``"PERMISSION_DENIED"`` \| ``"UNKNOWN_ERROR"``

error code

#### Defined in

packages/core/lib/errors/ServerError.d.ts:9

___

### getData

▸ **getData**(): { `code`: ``"NOT_IMPLEMENTED_BY_WALLET"`` ; `data`: { `methodId`: `string`  } ; `message`: `string`  } \| { `code`: ``"ACCOUNT_NOT_FOUND"`` ; `data`: { `accountId`: `string`  } ; `message`: `string`  } \| { `code`: ``"CURRENCY_NOT_FOUND"`` ; `data`: { `currencyId`: `string`  } ; `message`: `string`  } \| { `code`: ``"PERMISSION_DENIED"`` ; `data`: { `methodId`: `string`  } ; `message`: `string`  } \| { `code`: ``"UNKNOWN_ERROR"`` ; `data`: { `cause?`: `unknown` ; `code?`: `string` ; `message?`: `string` ; `name?`: `string` ; `stack?`: `string`  } ; `message`: `string`  }

Retrieve underlying data info

#### Returns

{ `code`: ``"NOT_IMPLEMENTED_BY_WALLET"`` ; `data`: { `methodId`: `string`  } ; `message`: `string`  } \| { `code`: ``"ACCOUNT_NOT_FOUND"`` ; `data`: { `accountId`: `string`  } ; `message`: `string`  } \| { `code`: ``"CURRENCY_NOT_FOUND"`` ; `data`: { `currencyId`: `string`  } ; `message`: `string`  } \| { `code`: ``"PERMISSION_DENIED"`` ; `data`: { `methodId`: `string`  } ; `message`: `string`  } \| { `code`: ``"UNKNOWN_ERROR"`` ; `data`: { `cause?`: `unknown` ; `code?`: `string` ; `message?`: `string` ; `name?`: `string` ; `stack?`: `string`  } ; `message`: `string`  }

data info

#### Defined in

packages/core/lib/errors/ServerError.d.ts:14

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
