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

[server/src/types.ts:23](https://github.com/LedgerHQ/wallet-api/blob/main/packages/server/src/types.ts#L23)

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

[server/src/types.ts:80](https://github.com/LedgerHQ/wallet-api/blob/main/packages/server/src/types.ts#L80)

___

### TransformHandler

Ƭ **TransformHandler**<`T`\>: { [K in keyof T]: RPCHandler<ReturnTypeOfMethodIfExists<T, K\>\> }

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

[server/src/types.ts:71](https://github.com/LedgerHQ/wallet-api/blob/main/packages/server/src/types.ts#L71)

___

### WalletContext

Ƭ **WalletContext**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `accounts$` | `Subject`<`Account`[]\> |
| `config` | [`ServerConfig`](#serverconfig) |
| `currencies$` | `Subject`<`Currency`[]\> |
| `selectedAccount$` | `Subject`<`Account` \| ``null``\> |

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

[server/src/types.ts:75](https://github.com/LedgerHQ/wallet-api/blob/main/packages/server/src/types.ts#L75)

## Functions

### useWalletAPIServer

▸ **useWalletAPIServer**(`«destructured»`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `accounts` | `Account`[] |
| › `config` | [`ServerConfig`](#serverconfig) |
| › `currencies` | ({ `color`: `string` ; `decimals`: `number` ; `family`: ``"bitcoin"`` \| ``"ethereum"`` \| ``"algorand"`` \| ``"crypto_org"`` \| ``"ripple"`` \| ``"cosmos"`` \| ``"tezos"`` \| ``"polkadot"`` \| ``"stellar"`` \| ``"tron"`` ; `id`: `string` ; `name`: `string` ; `ticker`: `string` ; `type`: ``"CryptoCurrency"``  } \| { `color`: `string` ; `contract`: `string` ; `decimals`: `number` ; `id`: `string` ; `name`: `string` ; `parent`: `string` ; `standard`: ``"ERC20"`` ; `ticker`: `string` ; `type`: ``"TokenCurrency"``  })[] |
| › `logger?` | `Logger` |
| › `permission` | `Permission` |
| › `selectedAccountId` | `string` |
| › `transport` | `Transport` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `onMessage` | (`event`: `string`) => `void` |
| `server` | [`WalletAPIServer`](classes/WalletAPIServer.md) |

#### Defined in

[server/src/react.ts:12](https://github.com/LedgerHQ/wallet-api/blob/main/packages/server/src/react.ts#L12)
