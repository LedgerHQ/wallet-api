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
| `errorData` | { `code`: ``"NOT_IMPLEMENTED_BY_WALLET"`` ; `data`: { methodId: string; } ; `message`: `string`  } \| { `code`: ``"ACCOUNT_NOT_FOUND"`` ; `data`: { accountId: string; } ; `message`: `string`  } \| { `code`: ``"CURRENCY_NOT_FOUND"`` ; `data`: { currencyId: string; } ; `message`: `string`  } \| { `code`: ``"PERMISSION_DENIED"`` ; `data`: { methodId: string; } ; `message`: `string`  } \| { `code`: ``"UNKNOWN_ERROR"`` ; `data`: { name?: string \| undefined; message?: string \| undefined; stack?: string \| undefined; cause?: unknown; code?: string \| undefined; } ; `message`: `string`  } \| { `code`: ``"UNAUTHORIZED_STORE"`` ; `data`: { storeId: string; } ; `message`: `string`  } |

#### Overrides

Error.constructor

#### Defined in

[packages/core/src/errors/ServerError.ts:6](https://github.com/LedgerHQ/wallet-api/blob/main/packages/core/src/errors/ServerError.ts#L6)

## Properties

### errorData

• `Private` `Readonly` **errorData**: { `code`: ``"NOT_IMPLEMENTED_BY_WALLET"`` ; `data`: { methodId: string; } ; `message`: `string`  } \| { `code`: ``"ACCOUNT_NOT_FOUND"`` ; `data`: { accountId: string; } ; `message`: `string`  } \| { `code`: ``"CURRENCY_NOT_FOUND"`` ; `data`: { currencyId: string; } ; `message`: `string`  } \| { `code`: ``"PERMISSION_DENIED"`` ; `data`: { methodId: string; } ; `message`: `string`  } \| { `code`: ``"UNKNOWN_ERROR"`` ; `data`: { name?: string \| undefined; message?: string \| undefined; stack?: string \| undefined; cause?: unknown; code?: string \| undefined; } ; `message`: `string`  } \| { `code`: ``"UNAUTHORIZED_STORE"`` ; `data`: { storeId: string; } ; `message`: `string`  }

#### Defined in

[packages/core/src/errors/ServerError.ts:4](https://github.com/LedgerHQ/wallet-api/blob/main/packages/core/src/errors/ServerError.ts#L4)

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

▸ **getCode**(): ``"NOT_IMPLEMENTED_BY_WALLET"`` \| ``"ACCOUNT_NOT_FOUND"`` \| ``"CURRENCY_NOT_FOUND"`` \| ``"PERMISSION_DENIED"`` \| ``"UNKNOWN_ERROR"`` \| ``"UNAUTHORIZED_STORE"``

Retrieve error code

#### Returns

``"NOT_IMPLEMENTED_BY_WALLET"`` \| ``"ACCOUNT_NOT_FOUND"`` \| ``"CURRENCY_NOT_FOUND"`` \| ``"PERMISSION_DENIED"`` \| ``"UNKNOWN_ERROR"`` \| ``"UNAUTHORIZED_STORE"``

error code

#### Defined in

[packages/core/src/errors/ServerError.ts:15](https://github.com/LedgerHQ/wallet-api/blob/main/packages/core/src/errors/ServerError.ts#L15)

___

### getData

▸ **getData**(): { `code`: ``"NOT_IMPLEMENTED_BY_WALLET"`` ; `data`: { methodId: string; } ; `message`: `string`  } \| { `code`: ``"ACCOUNT_NOT_FOUND"`` ; `data`: { accountId: string; } ; `message`: `string`  } \| { `code`: ``"CURRENCY_NOT_FOUND"`` ; `data`: { currencyId: string; } ; `message`: `string`  } \| { `code`: ``"PERMISSION_DENIED"`` ; `data`: { methodId: string; } ; `message`: `string`  } \| { `code`: ``"UNKNOWN_ERROR"`` ; `data`: { name?: string \| undefined; message?: string \| undefined; stack?: string \| undefined; cause?: unknown; code?: string \| undefined; } ; `message`: `string`  } \| { `code`: ``"UNAUTHORIZED_STORE"`` ; `data`: { storeId: string; } ; `message`: `string`  }

Retrieve underlying data info

#### Returns

{ `code`: ``"NOT_IMPLEMENTED_BY_WALLET"`` ; `data`: { methodId: string; } ; `message`: `string`  } \| { `code`: ``"ACCOUNT_NOT_FOUND"`` ; `data`: { accountId: string; } ; `message`: `string`  } \| { `code`: ``"CURRENCY_NOT_FOUND"`` ; `data`: { currencyId: string; } ; `message`: `string`  } \| { `code`: ``"PERMISSION_DENIED"`` ; `data`: { methodId: string; } ; `message`: `string`  } \| { `code`: ``"UNKNOWN_ERROR"`` ; `data`: { name?: string \| undefined; message?: string \| undefined; stack?: string \| undefined; cause?: unknown; code?: string \| undefined; } ; `message`: `string`  } \| { `code`: ``"UNAUTHORIZED_STORE"`` ; `data`: { storeId: string; } ; `message`: `string`  }

data info

#### Defined in

[packages/core/src/errors/ServerError.ts:23](https://github.com/LedgerHQ/wallet-api/blob/main/packages/core/src/errors/ServerError.ts#L23)

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
