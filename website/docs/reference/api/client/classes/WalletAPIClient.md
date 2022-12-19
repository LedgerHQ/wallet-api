---
id: "WalletAPIClient"
title: "Class: WalletAPIClient"
sidebar_label: "WalletAPIClient"
sidebar_position: 0
custom_edit_url: null
---

WalletAPI Client which rely on WindowMessage communication

## Hierarchy

- [`RpcNode`](RpcNode.md)<typeof `requestHandlers`, [`WalletHandlers`](../interfaces/WalletHandlers.md)\>

  ↳ **`WalletAPIClient`**

## Constructors

### constructor

• **new WalletAPIClient**(`transport`, `logger?`)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `transport` | [`Transport`](../interfaces/Transport.md) | `undefined` |
| `logger` | `Logger` | `defaultLogger` |

#### Overrides

[RpcNode](RpcNode.md).[constructor](RpcNode.md#constructor)

#### Defined in

[packages/client/src/WalletAPIClient.ts:52](https://github.com/LedgerHQ/wallet-api/blob/main/packages/client/src/WalletAPIClient.ts#L52)

## Properties

### logger

• `Private` **logger**: `Logger`

#### Defined in

[packages/client/src/WalletAPIClient.ts:50](https://github.com/LedgerHQ/wallet-api/blob/main/packages/client/src/WalletAPIClient.ts#L50)

___

### requestHandlers

• `Protected` **requestHandlers**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `event.account.updated` | (`_request`: [`RpcRequest`](../interfaces/RpcRequest.md)<`string`, `unknown`\>) => `Promise`<`void`\> |

#### Inherited from

[RpcNode](RpcNode.md).[requestHandlers](RpcNode.md#requesthandlers)

#### Defined in

packages/core/lib/JSONRPC/RpcNode.d.ts:9

## Methods

### capabilities

▸ **capabilities**(): `Promise`<`string`[]\>

List the wallet's implemented methodIds

**`Throws`**

[RpcError](RpcError.md) if an error occured on server side

 Filtering not yet implemented

#### Returns

`Promise`<`string`[]\>

The list of implemented method ids

#### Defined in

[packages/client/src/WalletAPIClient.ts:314](https://github.com/LedgerHQ/wallet-api/blob/main/packages/client/src/WalletAPIClient.ts#L314)

___

### deviceTransport

▸ **deviceTransport**(`params`): `Promise`<[`HWTransport`](HWTransport.md)\>

Open low-level transport in the connected wallet

**`Throws`**

[RpcError](RpcError.md) if an error occured on server side

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | `Object` | Params for the transport |
| `params.appName?` | `string` | - |
| `params.appVersionRange?` | `string` | - |
| `params.devices?` | [``"blue"`` \| ``"nanoS"`` \| ``"nanoSP"`` \| ``"nanoX"`` \| ``"nanoFTS"``, ...("blue" \| "nanoS" \| "nanoSP" \| "nanoX" \| "nanoFTS")[]] | - |
| `params.firmwareVersionRange?` | `string` | - |
| `params.seeded?` | `boolean` | - |

#### Returns

`Promise`<[`HWTransport`](HWTransport.md)\>

An instance of Transport compatible with @ledgerhq/hw-transport

#### Defined in

[packages/client/src/WalletAPIClient.ts:284](https://github.com/LedgerHQ/wallet-api/blob/main/packages/client/src/WalletAPIClient.ts#L284)

___

### listAccounts

▸ **listAccounts**(`params?`): `Promise`<[`Account`](../#account)[]\>

List accounts added by user on the connected wallet

**`Throws`**

[RpcError](RpcError.md) if an error occured on server side

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params?` | `Object` | Filters for currencies |
| `params.currencyIds?` | `string`[] | Select a set of currencies by id to filter accounts against. |

#### Returns

`Promise`<[`Account`](../#account)[]\>

The list of accounts on the connected wallet

#### Defined in

[packages/client/src/WalletAPIClient.ts:172](https://github.com/LedgerHQ/wallet-api/blob/main/packages/client/src/WalletAPIClient.ts#L172)

___

### listCurrencies

▸ **listCurrencies**(`params?`): `Promise`<({ `color`: `string` ; `decimals`: `number` ; `family`: ``"algorand"`` \| ``"bitcoin"`` \| ``"cosmos"`` \| ``"crypto_org"`` \| ``"ethereum"`` \| ``"polkadot"`` \| ``"ripple"`` \| ``"stellar"`` \| ``"tezos"`` \| ``"tron"`` ; `id`: `string` ; `name`: `string` ; `ticker`: `string` ; `type`: ``"CryptoCurrency"``  } \| { `color`: `string` ; `contract`: `string` ; `decimals`: `number` ; `id`: `string` ; `name`: `string` ; `parent`: `string` ; `standard`: ``"ERC20"`` ; `ticker`: `string` ; `type`: ``"TokenCurrency"``  })[]\>

List cryptocurrencies supported by the connected wallet, providing filters by name or ticker

**`Throws`**

[RpcError](RpcError.md) if an error occured on server side

 Filtering not yet implemented

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params?` | `Object` | Filters for currencies |
| `params.currencyIds?` | `string`[] | Select a set of currencies by id. Globing is enabled |

#### Returns

`Promise`<({ `color`: `string` ; `decimals`: `number` ; `family`: ``"algorand"`` \| ``"bitcoin"`` \| ``"cosmos"`` \| ``"crypto_org"`` \| ``"ethereum"`` \| ``"polkadot"`` \| ``"ripple"`` \| ``"stellar"`` \| ``"tezos"`` \| ``"tron"`` ; `id`: `string` ; `name`: `string` ; `ticker`: `string` ; `type`: ``"CryptoCurrency"``  } \| { `color`: `string` ; `contract`: `string` ; `decimals`: `number` ; `id`: `string` ; `name`: `string` ; `parent`: `string` ; `standard`: ``"ERC20"`` ; `ticker`: `string` ; `type`: ``"TokenCurrency"``  })[]\>

The list of corresponding cryptocurrencies

#### Defined in

[packages/client/src/WalletAPIClient.ts:255](https://github.com/LedgerHQ/wallet-api/blob/main/packages/client/src/WalletAPIClient.ts#L255)

___

### notify

▸ **notify**<`K`\>(`method`, `params`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof [`WalletHandlers`](../interfaces/WalletHandlers.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `method` | `K` |
| `params` | `MethodParamsIfExists`<[`WalletHandlers`](../interfaces/WalletHandlers.md), `K`\> |

#### Returns

`void`

#### Inherited from

[RpcNode](RpcNode.md).[notify](RpcNode.md#notify)

#### Defined in

packages/core/lib/JSONRPC/RpcNode.d.ts:15

___

### onRequest

▸ `Protected` **onRequest**(`request`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | [`RpcRequest`](../interfaces/RpcRequest.md)<`string`, `unknown`\> |

#### Returns

`Promise`<`void`\>

#### Overrides

[RpcNode](RpcNode.md).[onRequest](RpcNode.md#onrequest)

#### Defined in

[packages/client/src/WalletAPIClient.ts:57](https://github.com/LedgerHQ/wallet-api/blob/main/packages/client/src/WalletAPIClient.ts#L57)

___

### receive

▸ **receive**(`accountId`): `Promise`<`string`\>

Let user verify it's account address on his device through Ledger Live

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `accountId` | `string` | id of the account |

#### Returns

`Promise`<`string`\>

The verified address or an error message if the verification doesn't succeed

#### Defined in

[packages/client/src/WalletAPIClient.ts:229](https://github.com/LedgerHQ/wallet-api/blob/main/packages/client/src/WalletAPIClient.ts#L229)

___

### request

▸ **request**<`K`, `TError`\>(`method`, `params`): `Promise`<[`RpcResponse`](../#rpcresponse)<`ReturnTypeOfMethodIfExists`<[`WalletHandlers`](../interfaces/WalletHandlers.md), `K`\>, `TError`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof [`WalletHandlers`](../interfaces/WalletHandlers.md) |
| `TError` | `unknown` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `method` | `K` |
| `params` | `MethodParamsIfExists`<[`WalletHandlers`](../interfaces/WalletHandlers.md), `K`\> |

#### Returns

`Promise`<[`RpcResponse`](../#rpcresponse)<`ReturnTypeOfMethodIfExists`<[`WalletHandlers`](../interfaces/WalletHandlers.md), `K`\>, `TError`\>\>

#### Inherited from

[RpcNode](RpcNode.md).[request](RpcNode.md#request)

#### Defined in

packages/core/lib/JSONRPC/RpcNode.d.ts:14

___

### requestAccount

▸ **requestAccount**(`params?`): `Promise`<[`Account`](../#account)\>

Ask the connected wallet for an account matching a specific set of critterias.

**`Throws`**

[RpcError](RpcError.md) if an error occured on server side

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params?` | `Object` | Parameters of the request. |
| `params.currencyIds?` | `string`[] | Select a set of currencies by id. Globing is enabled |

#### Returns

`Promise`<[`Account`](../#account)\>

The account selected by the user

#### Defined in

[packages/client/src/WalletAPIClient.ts:201](https://github.com/LedgerHQ/wallet-api/blob/main/packages/client/src/WalletAPIClient.ts#L201)

___

### signMessage

▸ **signMessage**(`accountId`, `message`): `Promise`<`Buffer`\>

Let the user sign the provided message.
In Ethereum context, this is an [EIP-191 message](https://github.com/ethereum/EIPs/blob/master/EIPS/eip-191.md)
or an [EIP-712 message](https://github.com/ethereum/EIPs/blob/master/EIPS/eip-712.md)

**`Throws`**

[RpcError](RpcError.md) if an error occured on server side

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `accountId` | `string` | Ledger Live id of the account |
| `message` | `Buffer` | Message the user should sign |

#### Returns

`Promise`<`Buffer`\>

Message signed

#### Defined in

[packages/client/src/WalletAPIClient.ts:147](https://github.com/LedgerHQ/wallet-api/blob/main/packages/client/src/WalletAPIClient.ts#L147)

___

### signTransaction

▸ **signTransaction**(`accountId`, `transaction`, `options?`): `Promise`<`Buffer`\>

Let the user sign a transaction that won't be broadcasted by the connected wallet

**`Throws`**

[RpcError](RpcError.md) if an error occured on server side

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `accountId` | `string` | id of the account |
| `transaction` | [`Transaction`](../#transaction) | The transaction object in the currency family-specific format |
| `options?` | `Object` | Extra parameters |
| `options.hwAppId?` | `string` | - |

#### Returns

`Promise`<`Buffer`\>

The raw signed transaction

#### Defined in

[packages/client/src/WalletAPIClient.ts:81](https://github.com/LedgerHQ/wallet-api/blob/main/packages/client/src/WalletAPIClient.ts#L81)

___

### signTransactionAndBroadcast

▸ **signTransactionAndBroadcast**(`accountId`, `transaction`, `options?`): `Promise`<`string`\>

Let the user sign and broadcast a transaction

**`Throws`**

[RpcError](RpcError.md) if an error occured on server side

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `accountId` | `string` | id of the account |
| `transaction` | [`Transaction`](../#transaction) | The transaction object in the currency family-specific format |
| `options?` | `Object` | Extra parameters |
| `options.hwAppId?` | `string` | - |

#### Returns

`Promise`<`string`\>

The transaction hash

#### Defined in

[packages/client/src/WalletAPIClient.ts:112](https://github.com/LedgerHQ/wallet-api/blob/main/packages/client/src/WalletAPIClient.ts#L112)
