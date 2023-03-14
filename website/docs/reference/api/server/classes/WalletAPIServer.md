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

[server/src/WalletAPIServer.ts:99](https://github.com/LedgerHQ/wallet-api/blob/main/packages/server/src/WalletAPIServer.ts#L99)

## Properties

### allAccounts$

• `Private` **allAccounts$**: `BehaviorSubject`<`Account`[]\>

#### Defined in

[server/src/WalletAPIServer.ts:31](https://github.com/LedgerHQ/wallet-api/blob/main/packages/server/src/WalletAPIServer.ts#L31)

___

### allCurrencies$

• `Private` **allCurrencies$**: `BehaviorSubject`<({ `color`: `string` ; `decimals`: `number` ; `family`: ``"bitcoin"`` \| ``"ethereum"`` \| ``"algorand"`` \| ``"crypto_org"`` \| ``"ripple"`` \| ``"cosmos"`` \| ``"celo"`` \| ``"hedera"`` \| ``"filecoin"`` \| ``"tezos"`` \| ``"polkadot"`` \| ``"stellar"`` \| ``"tron"`` \| ``"near"`` ; `id`: `string` ; `name`: `string` ; `ticker`: `string` ; `type`: ``"CryptoCurrency"``  } \| { `color`: `string` ; `contract`: `string` ; `decimals`: `number` ; `id`: `string` ; `name`: `string` ; `parent`: `string` ; `standard`: ``"ERC20"`` ; `ticker`: `string` ; `type`: ``"TokenCurrency"``  })[]\>

#### Defined in

[server/src/WalletAPIServer.ts:35](https://github.com/LedgerHQ/wallet-api/blob/main/packages/server/src/WalletAPIServer.ts#L35)

___

### logger

• `Private` **logger**: `Logger`

#### Defined in

[server/src/WalletAPIServer.ts:27](https://github.com/LedgerHQ/wallet-api/blob/main/packages/server/src/WalletAPIServer.ts#L27)

___

### permissions

• `Private` **permissions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `currencyIds$` | `BehaviorSubject`<`string`[]\> |
| `methodIds$` | `BehaviorSubject`<`string`[]\> |

#### Defined in

[server/src/WalletAPIServer.ts:41](https://github.com/LedgerHQ/wallet-api/blob/main/packages/server/src/WalletAPIServer.ts#L41)

___

### requestHandlers

• `Protected` **requestHandlers**: [`TransformHandler`](../#transformhandler)<`WalletHandlers`\>

#### Inherited from

RpcNode.requestHandlers

#### Defined in

core/lib/JSONRPC/RpcNode.d.ts:9

___

### walletContext

• `Private` **walletContext**: [`WalletContext`](../#walletcontext)

#### Defined in

[server/src/WalletAPIServer.ts:29](https://github.com/LedgerHQ/wallet-api/blob/main/packages/server/src/WalletAPIServer.ts#L29)

___

### walletHandlers

• `Private` **walletHandlers**: `Partial`<[`WalletHandlers`](../interfaces/WalletHandlers.md)\> = `{}`

#### Defined in

[server/src/WalletAPIServer.ts:39](https://github.com/LedgerHQ/wallet-api/blob/main/packages/server/src/WalletAPIServer.ts#L39)

## Methods

### notify

▸ **notify**<`K`\>(`method`, `params`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends ``"event.account.updated"`` |

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

[server/src/WalletAPIServer.ts:73](https://github.com/LedgerHQ/wallet-api/blob/main/packages/server/src/WalletAPIServer.ts#L73)

___

### request

▸ **request**<`K`\>(`method`, `params`): `Promise`<`ReturnTypeOfMethodIfExists`<`AppHandlers`, `K`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends ``"event.account.updated"`` |

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

### setAccounts

▸ **setAccounts**(`accounts`): [`WalletAPIServer`](WalletAPIServer.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `accounts` | `Account`[] |

#### Returns

[`WalletAPIServer`](WalletAPIServer.md)

#### Defined in

[server/src/WalletAPIServer.ts:60](https://github.com/LedgerHQ/wallet-api/blob/main/packages/server/src/WalletAPIServer.ts#L60)

___

### setCurrencies

▸ **setCurrencies**(`currencies`): [`WalletAPIServer`](WalletAPIServer.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `currencies` | ({ `color`: `string` ; `decimals`: `number` ; `family`: ``"bitcoin"`` \| ``"ethereum"`` \| ``"algorand"`` \| ``"crypto_org"`` \| ``"ripple"`` \| ``"cosmos"`` \| ``"celo"`` \| ``"hedera"`` \| ``"filecoin"`` \| ``"tezos"`` \| ``"polkadot"`` \| ``"stellar"`` \| ``"tron"`` \| ``"near"`` ; `id`: `string` ; `name`: `string` ; `ticker`: `string` ; `type`: ``"CryptoCurrency"``  } \| { `color`: `string` ; `contract`: `string` ; `decimals`: `number` ; `id`: `string` ; `name`: `string` ; `parent`: `string` ; `standard`: ``"ERC20"`` ; `ticker`: `string` ; `type`: ``"TokenCurrency"``  })[] |

#### Returns

[`WalletAPIServer`](WalletAPIServer.md)

#### Defined in

[server/src/WalletAPIServer.ts:55](https://github.com/LedgerHQ/wallet-api/blob/main/packages/server/src/WalletAPIServer.ts#L55)

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

[server/src/WalletAPIServer.ts:65](https://github.com/LedgerHQ/wallet-api/blob/main/packages/server/src/WalletAPIServer.ts#L65)

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

[server/src/WalletAPIServer.ts:49](https://github.com/LedgerHQ/wallet-api/blob/main/packages/server/src/WalletAPIServer.ts#L49)
