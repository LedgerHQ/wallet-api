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

[server/src/types.ts:82](https://github.com/LedgerHQ/wallet-api/blob/main/packages/server/src/types.ts#L82)

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

[server/src/types.ts:74](https://github.com/LedgerHQ/wallet-api/blob/main/packages/server/src/types.ts#L74)

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

[server/src/types.ts:22](https://github.com/LedgerHQ/wallet-api/blob/main/packages/server/src/types.ts#L22)

___

### ServerConfig

Ƭ **ServerConfig**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `appId` | `string` |
| `tracking` | `boolean` |
| `userId` | `string` |
| `wallet` | [`WalletInfo`](#walletinfo) |

#### Defined in

[server/src/types.ts:92](https://github.com/LedgerHQ/wallet-api/blob/main/packages/server/src/types.ts#L92)

___

### TransformHandler

Ƭ **TransformHandler**<`T`\>: { [K in keyof T]: RPCHandler<ReturnTypeOfMethodIfExists<T, K\>\> }

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

[server/src/types.ts:70](https://github.com/LedgerHQ/wallet-api/blob/main/packages/server/src/types.ts#L70)

___

### WalletContext

Ƭ **WalletContext**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `accounts$` | `Observable`<`Account`[]\> |
| `config` | [`ServerConfig`](#serverconfig) |
| `currencies$` | `Observable`<`Currency`[]\> |

#### Defined in

[server/src/types.ts:16](https://github.com/LedgerHQ/wallet-api/blob/main/packages/server/src/types.ts#L16)

___

### WalletInfo

Ƭ **WalletInfo**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `version` | `string` |

#### Defined in

[server/src/types.ts:87](https://github.com/LedgerHQ/wallet-api/blob/main/packages/server/src/types.ts#L87)
