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

[server/src/types.ts:112](https://github.com/LedgerHQ/wallet-api/blob/main/packages/server/src/types.ts#L112)

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

[server/src/types.ts:104](https://github.com/LedgerHQ/wallet-api/blob/main/packages/server/src/types.ts#L104)

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

[server/src/types.ts:122](https://github.com/LedgerHQ/wallet-api/blob/main/packages/server/src/types.ts#L122)

___

### TransformHandler

Ƭ **TransformHandler**<`T`\>: { [K in keyof T]: RPCHandler<ReturnTypeOfMethodIfExists<T, K\>\> }

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

[server/src/types.ts:100](https://github.com/LedgerHQ/wallet-api/blob/main/packages/server/src/types.ts#L100)

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

[server/src/types.ts:17](https://github.com/LedgerHQ/wallet-api/blob/main/packages/server/src/types.ts#L17)

___

### WalletInfo

Ƭ **WalletInfo**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `version` | `string` |

#### Defined in

[server/src/types.ts:117](https://github.com/LedgerHQ/wallet-api/blob/main/packages/server/src/types.ts#L117)

## Functions

### useWalletAPIServer

▸ **useWalletAPIServer**(`«destructured»`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `accounts` | `Account`[] |
| › `config` | [`ServerConfig`](#serverconfig) |
| › `currencies` | ({ `color`: `string` ; `decimals`: `number` ; `family`: ``"bitcoin"`` \| ``"ethereum"`` \| ``"algorand"`` \| ``"crypto_org"`` \| ``"ripple"`` \| ``"cosmos"`` \| ``"celo"`` \| ``"hedera"`` \| ``"filecoin"`` \| ``"tezos"`` \| ``"polkadot"`` \| ``"stellar"`` \| ``"tron"`` \| ``"near"`` \| ``"neo"`` ; `id`: `string` ; `name`: `string` ; `ticker`: `string` ; `type`: ``"CryptoCurrency"``  } \| { `color`: `string` ; `contract`: `string` ; `decimals`: `number` ; `id`: `string` ; `name`: `string` ; `parent`: `string` ; `standard`: ``"ERC20"`` ; `ticker`: `string` ; `type`: ``"TokenCurrency"``  })[] |
| › `logger?` | `Logger` |
| › `permission` | `Permission` |
| › `transport` | `Transport` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `onMessage` | (`event`: `string`) => `void` |
| `server` | [`WalletAPIServer`](classes/WalletAPIServer.md) |

#### Defined in

[server/src/react.ts:12](https://github.com/LedgerHQ/wallet-api/blob/main/packages/server/src/react.ts#L12)
