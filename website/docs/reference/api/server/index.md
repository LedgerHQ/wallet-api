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

[server/src/types.ts:72](https://github.com/LedgerHQ/wallet-api/blob/main/packages/server/src/types.ts#L72)

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

[server/src/types.ts:64](https://github.com/LedgerHQ/wallet-api/blob/main/packages/server/src/types.ts#L64)

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

[server/src/types.ts:21](https://github.com/LedgerHQ/wallet-api/blob/main/packages/server/src/types.ts#L21)

___

### TransformHandler

Ƭ **TransformHandler**<`T`\>: { [K in keyof T]: RPCHandler<ReturnTypeOfMethodIfExists<T, K\>\> }

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

[server/src/types.ts:60](https://github.com/LedgerHQ/wallet-api/blob/main/packages/server/src/types.ts#L60)

___

### WalletContext

Ƭ **WalletContext**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `accounts$` | `Observable`<`Account`[]\> |
| `currencies$` | `Observable`<`Currency`[]\> |

#### Defined in

[server/src/types.ts:16](https://github.com/LedgerHQ/wallet-api/blob/main/packages/server/src/types.ts#L16)
