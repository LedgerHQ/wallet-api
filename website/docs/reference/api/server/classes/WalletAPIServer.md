---
id: "WalletAPIServer"
title: "Class: WalletAPIServer"
sidebar_label: "WalletAPIServer"
sidebar_position: 0
custom_edit_url: null
---

## Hierarchy

- `RpcNode`<typeof `internalHandlers`, `AppHandlers`\>

  ↳ **`WalletAPIServer`**

## Constructors

### constructor

• **new WalletAPIServer**(`transport`, `config`, `logger?`)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `transport` | `Transport` | `undefined` |
| `config` | [`ServerConfig`](../#serverconfig) | `undefined` |
| `logger` | `Logger` | `defaultLogger` |

#### Overrides

RpcNode&lt;
  typeof internalHandlers,
  AppHandlers
\&gt;.constructor

#### Defined in

[server/src/WalletAPIServer.ts:127](https://github.com/LedgerHQ/wallet-api/blob/main/packages/server/src/WalletAPIServer.ts#L127)

## Properties

### allAccounts$

• `Private` **allAccounts$**: `BehaviorSubject`<`Account`[]\>

#### Defined in

[server/src/WalletAPIServer.ts:32](https://github.com/LedgerHQ/wallet-api/blob/main/packages/server/src/WalletAPIServer.ts#L32)

___

### allCurrencies$

• `Private` **allCurrencies$**: `BehaviorSubject`<({ `color`: `string` ; `decimals`: `number` ; `family`: ``"bitcoin"`` \| ``"ethereum"`` \| ``"algorand"`` \| ``"crypto_org"`` \| ``"ripple"`` \| ``"cosmos"`` \| ``"tezos"`` \| ``"polkadot"`` \| ``"stellar"`` \| ``"tron"`` ; `id`: `string` ; `name`: `string` ; `ticker`: `string` ; `type`: ``"CryptoCurrency"``  } \| { `color`: `string` ; `contract`: `string` ; `decimals`: `number` ; `id`: `string` ; `name`: `string` ; `parent`: `string` ; `standard`: ``"ERC20"`` ; `ticker`: `string` ; `type`: ``"TokenCurrency"``  })[]\>

#### Defined in

[server/src/WalletAPIServer.ts:36](https://github.com/LedgerHQ/wallet-api/blob/main/packages/server/src/WalletAPIServer.ts#L36)

___

### logger

• `Private` **logger**: `Logger`

#### Defined in

[server/src/WalletAPIServer.ts:28](https://github.com/LedgerHQ/wallet-api/blob/main/packages/server/src/WalletAPIServer.ts#L28)

___

### permissions

• `Private` **permissions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `currencyIds$` | `BehaviorSubject`<`string`[]\> |
| `methodIds$` | `BehaviorSubject`<`string`[]\> |

#### Defined in

[server/src/WalletAPIServer.ts:45](https://github.com/LedgerHQ/wallet-api/blob/main/packages/server/src/WalletAPIServer.ts#L45)

___

### requestHandlers

• `Protected` **requestHandlers**: [`TransformHandler`](../#transformhandler)<`WalletHandlers`\>

#### Inherited from

RpcNode.requestHandlers

#### Defined in

core/lib/JSONRPC/RpcNode.d.ts:9

___

### selectedAccountId$

• `Private` **selectedAccountId$**: `BehaviorSubject`<``null`` \| `string`\>

#### Defined in

[server/src/WalletAPIServer.ts:40](https://github.com/LedgerHQ/wallet-api/blob/main/packages/server/src/WalletAPIServer.ts#L40)

___

### walletContext

• `Private` **walletContext**: [`WalletContext`](../#walletcontext)

#### Defined in

[server/src/WalletAPIServer.ts:30](https://github.com/LedgerHQ/wallet-api/blob/main/packages/server/src/WalletAPIServer.ts#L30)

___

### walletHandlers

• `Private` **walletHandlers**: `Partial`<[`WalletHandlers`](../interfaces/WalletHandlers.md)\> = `{}`

#### Defined in

[server/src/WalletAPIServer.ts:43](https://github.com/LedgerHQ/wallet-api/blob/main/packages/server/src/WalletAPIServer.ts#L43)

## Methods

### getWalletContext

▸ **getWalletContext**(): [`WalletContext`](../#walletcontext)

#### Returns

[`WalletContext`](../#walletcontext)

#### Defined in

[server/src/WalletAPIServer.ts:74](https://github.com/LedgerHQ/wallet-api/blob/main/packages/server/src/WalletAPIServer.ts#L74)

___

### notify

▸ **notify**<`K`\>(`method`, `params`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof `AppHandlers` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `method` | `K` |
| `params` | `MethodParamsIfExists`<`AppHandlers`, `K`\> |

#### Returns

`void`

#### Inherited from

RpcNode.notify

#### Defined in

core/lib/JSONRPC/RpcNode.d.ts:15

___

### onRequest

▸ `Protected` **onRequest**(`request`): `Promise`<`unknown`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | `RpcRequest`<`string`, `unknown`\> |

#### Returns

`Promise`<`unknown`\>

#### Overrides

RpcNode.onRequest

#### Defined in

[server/src/WalletAPIServer.ts:101](https://github.com/LedgerHQ/wallet-api/blob/main/packages/server/src/WalletAPIServer.ts#L101)

___

### request

▸ **request**<`K`\>(`method`, `params`): `Promise`<`ReturnTypeOfMethodIfExists`<`AppHandlers`, `K`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof `AppHandlers` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `method` | `K` |
| `params` | `MethodParamsIfExists`<`AppHandlers`, `K`\> |

#### Returns

`Promise`<`ReturnTypeOfMethodIfExists`<`AppHandlers`, `K`\>\>

#### Inherited from

RpcNode.request

#### Defined in

core/lib/JSONRPC/RpcNode.d.ts:14

___

### selectAccount

▸ **selectAccount**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[server/src/WalletAPIServer.ts:78](https://github.com/LedgerHQ/wallet-api/blob/main/packages/server/src/WalletAPIServer.ts#L78)

___

### setAccounts

▸ **setAccounts**(`accounts`): [`WalletAPIServer`](WalletAPIServer.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `accounts` | `Account`[] |

#### Returns

[`WalletAPIServer`](WalletAPIServer.md)

#### Defined in

[server/src/WalletAPIServer.ts:64](https://github.com/LedgerHQ/wallet-api/blob/main/packages/server/src/WalletAPIServer.ts#L64)

___

### setCurrencies

▸ **setCurrencies**(`currencies`): [`WalletAPIServer`](WalletAPIServer.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `currencies` | ({ `color`: `string` ; `decimals`: `number` ; `family`: ``"bitcoin"`` \| ``"ethereum"`` \| ``"algorand"`` \| ``"crypto_org"`` \| ``"ripple"`` \| ``"cosmos"`` \| ``"tezos"`` \| ``"polkadot"`` \| ``"stellar"`` \| ``"tron"`` ; `id`: `string` ; `name`: `string` ; `ticker`: `string` ; `type`: ``"CryptoCurrency"``  } \| { `color`: `string` ; `contract`: `string` ; `decimals`: `number` ; `id`: `string` ; `name`: `string` ; `parent`: `string` ; `standard`: ``"ERC20"`` ; `ticker`: `string` ; `type`: ``"TokenCurrency"``  })[] |

#### Returns

[`WalletAPIServer`](WalletAPIServer.md)

#### Defined in

[server/src/WalletAPIServer.ts:59](https://github.com/LedgerHQ/wallet-api/blob/main/packages/server/src/WalletAPIServer.ts#L59)

___

### setHandler

▸ **setHandler**<`K`\>(`methodName`, `method`): [`WalletAPIServer`](WalletAPIServer.md)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof [`WalletHandlers`](../interfaces/WalletHandlers.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `methodName` | `K` |
| `method` | [`WalletHandlers`](../interfaces/WalletHandlers.md)[`K`] |

#### Returns

[`WalletAPIServer`](WalletAPIServer.md)

#### Defined in

[server/src/WalletAPIServer.ts:93](https://github.com/LedgerHQ/wallet-api/blob/main/packages/server/src/WalletAPIServer.ts#L93)

___

### setPermissions

▸ **setPermissions**(`permission`): [`WalletAPIServer`](WalletAPIServer.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `permission` | `Permission` |

#### Returns

[`WalletAPIServer`](WalletAPIServer.md)

#### Defined in

[server/src/WalletAPIServer.ts:53](https://github.com/LedgerHQ/wallet-api/blob/main/packages/server/src/WalletAPIServer.ts#L53)

___

### setSelectedAccountId

▸ **setSelectedAccountId**(`accountId`): [`WalletAPIServer`](WalletAPIServer.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `accountId` | `string` |

#### Returns

[`WalletAPIServer`](WalletAPIServer.md)

#### Defined in

[server/src/WalletAPIServer.ts:69](https://github.com/LedgerHQ/wallet-api/blob/main/packages/server/src/WalletAPIServer.ts#L69)
