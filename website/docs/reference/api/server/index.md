---
id: "index"
title: "@ledgerhq/wallet-api-server"
sidebar_label: "Exports"
sidebar_position: 0.5
custom_edit_url: null
---

## Classes

- [WalletAPIServer](classes/WalletAPIServer.md)

## Interfaces

- [WalletHandlers](interfaces/WalletHandlers.md)

## Type Aliases

### ClientContext

Ƭ **ClientContext**: { `accounts$`: `BehaviorSubject`<`Account`[]\> ; `currencies$`: `BehaviorSubject`<`Currency`[]\>  } & [`ClientParams`](#clientparams)

#### Defined in

[server/src/types.ts:70](https://github.com/LedgerHQ/wallet-api/blob/7ac1734/packages/server/src/types.ts#L70)

___

### ClientParams

Ƭ **ClientParams**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `permissions` | { `currencies`: `string`[] ; `methods`: `string`[]  } |
| `permissions.currencies` | `string`[] |
| `permissions.methods` | `string`[] |

#### Defined in

[server/src/types.ts:62](https://github.com/LedgerHQ/wallet-api/blob/7ac1734/packages/server/src/types.ts#L62)

___

### RPCHandler

Ƭ **RPCHandler**<`TResult`\>: (`request`: `RpcRequest`<`string`, `unknown`\>, `context`: [`WalletContext`](#walletcontext), `handlers`: `Partial`<[`WalletHandlers`](interfaces/WalletHandlers.md)\>) => `Promise`<`TResult`\>

#### Type parameters

| Name |
| :------ |
| `TResult` |

#### Type declaration

▸ (`request`, `context`, `handlers`): `Promise`<`TResult`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `request` | `RpcRequest`<`string`, `unknown`\> |
| `context` | [`WalletContext`](#walletcontext) |
| `handlers` | `Partial`<[`WalletHandlers`](interfaces/WalletHandlers.md)\> |

##### Returns

`Promise`<`TResult`\>

#### Defined in

[server/src/types.ts:20](https://github.com/LedgerHQ/wallet-api/blob/7ac1734/packages/server/src/types.ts#L20)

___

### TransformHandler

Ƭ **TransformHandler**<`T`\>: { [K in keyof T]: RPCHandler<ReturnTypeOfMethodIfExists<T, K\>\> }

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

[server/src/types.ts:58](https://github.com/LedgerHQ/wallet-api/blob/7ac1734/packages/server/src/types.ts#L58)

___

### WalletContext

Ƭ **WalletContext**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `accounts$` | `Observable`<`Account`[]\> |
| `currencies$` | `Observable`<`Currency`[]\> |

#### Defined in

[server/src/types.ts:15](https://github.com/LedgerHQ/wallet-api/blob/7ac1734/packages/server/src/types.ts#L15)

## Variables

### ACCOUNT\_NOT\_FOUND

• `Const` **ACCOUNT\_NOT\_FOUND**: `RpcResponseError`

#### Defined in

[server/src/errors.ts:8](https://github.com/LedgerHQ/wallet-api/blob/7ac1734/packages/server/src/errors.ts#L8)

___

### CURRENCY\_NOT\_FOUND

• `Const` **CURRENCY\_NOT\_FOUND**: `RpcResponseError`

#### Defined in

[server/src/errors.ts:13](https://github.com/LedgerHQ/wallet-api/blob/7ac1734/packages/server/src/errors.ts#L13)

___

### NOT\_IMPLEMENTED\_BY\_WALLET

• `Const` **NOT\_IMPLEMENTED\_BY\_WALLET**: `RpcResponseError`

#### Defined in

[server/src/errors.ts:3](https://github.com/LedgerHQ/wallet-api/blob/7ac1734/packages/server/src/errors.ts#L3)

___

### PERMISSION\_DENIED

• `Const` **PERMISSION\_DENIED**: `RpcResponseError`

#### Defined in

[server/src/errors.ts:18](https://github.com/LedgerHQ/wallet-api/blob/7ac1734/packages/server/src/errors.ts#L18)
