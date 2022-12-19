[@ledgerhq/wallet-api-client](../README.md) / [Exports](../modules.md) / WalletAPIClient

# Class: WalletAPIClient

## Hierarchy

- [`RpcNode`](RpcNode.md)<typeof `requestHandlers`, [`WalletHandlers`](../interfaces/WalletHandlers.md)\>

  ↳ **`WalletAPIClient`**

## Table of contents

### Constructors

- [constructor](WalletAPIClient.md#constructor)

### Properties

- [logger](WalletAPIClient.md#logger)
- [requestHandlers](WalletAPIClient.md#requesthandlers)

### Methods

- [capabilities](WalletAPIClient.md#capabilities)
- [deviceTransport](WalletAPIClient.md#devicetransport)
- [listAccounts](WalletAPIClient.md#listaccounts)
- [listCurrencies](WalletAPIClient.md#listcurrencies)
- [notify](WalletAPIClient.md#notify)
- [onRequest](WalletAPIClient.md#onrequest)
- [request](WalletAPIClient.md#request)
- [requestAccount](WalletAPIClient.md#requestaccount)
- [signMessage](WalletAPIClient.md#signmessage)
- [signTransaction](WalletAPIClient.md#signtransaction)
- [signTransactionAndBroadcast](WalletAPIClient.md#signtransactionandbroadcast)

## Constructors

### constructor

• **new WalletAPIClient**(`transport`, `logger?`)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `transport` | [`Transport`](../interfaces/Transport.md) | `undefined` |
| `logger` | [`Logger`](Logger.md) | `defaultLogger` |

#### Overrides

[RpcNode](RpcNode.md).[constructor](RpcNode.md#constructor)

#### Defined in

[packages/client/src/WalletAPIClient.ts:48](https://github.com/LedgerHQ/wallet-api/blob/main/packages/client/src/WalletAPIClient.ts#L48)

## Properties

### logger

• `Private` **logger**: [`Logger`](Logger.md)

#### Defined in

[packages/client/src/WalletAPIClient.ts:46](https://github.com/LedgerHQ/wallet-api/blob/main/packages/client/src/WalletAPIClient.ts#L46)

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

#### Returns

`Promise`<`string`[]\>

#### Defined in

[packages/client/src/WalletAPIClient.ts:276](https://github.com/LedgerHQ/wallet-api/blob/main/packages/client/src/WalletAPIClient.ts#L276)

___

### deviceTransport

▸ **deviceTransport**(`params`): `Promise`<[`HWTransport`](HWTransport.md)\>

Open low-level transport in the connected wallet

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

[packages/client/src/WalletAPIClient.ts:247](https://github.com/LedgerHQ/wallet-api/blob/main/packages/client/src/WalletAPIClient.ts#L247)

___

### listAccounts

▸ **listAccounts**(`params?`): `Promise`<[`Account`](../modules.md#account)[]\>

List accounts added by user on the connected wallet

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params?` | `Object` | - |
| `params.currencyIds?` | `string`[] | Select a set of currencies by id to filter accounts against. |

#### Returns

`Promise`<[`Account`](../modules.md#account)[]\>

The list of accounts on the connected wallet

#### Defined in

[packages/client/src/WalletAPIClient.ts:161](https://github.com/LedgerHQ/wallet-api/blob/main/packages/client/src/WalletAPIClient.ts#L161)

___

### listCurrencies

▸ **listCurrencies**(`params?`): `Promise`<({ `color`: `string` ; `decimals`: `number` ; `family`: ``"algorand"`` \| ``"bitcoin"`` \| ``"cosmos"`` \| ``"crypto_org"`` \| ``"ethereum"`` \| ``"polkadot"`` \| ``"ripple"`` \| ``"stellar"`` \| ``"tezos"`` \| ``"tron"`` ; `id`: `string` ; `name`: `string` ; `ticker`: `string` ; `type`: ``"CryptoCurrency"``  } \| { `color`: `string` ; `contract`: `string` ; `decimals`: `number` ; `id`: `string` ; `name`: `string` ; `parent`: `string` ; `standard`: ``"ERC20"`` ; `ticker`: `string` ; `type`: ``"TokenCurrency"``  })[]\>

List cryptocurrencies supported by the connected wallet, providing filters by name or ticker

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params?` | `Object` | Filters for currencies |
| `params.currencyIds?` | `string`[] | Select a set of currencies by id. Globing is enabled |

#### Returns

`Promise`<({ `color`: `string` ; `decimals`: `number` ; `family`: ``"algorand"`` \| ``"bitcoin"`` \| ``"cosmos"`` \| ``"crypto_org"`` \| ``"ethereum"`` \| ``"polkadot"`` \| ``"ripple"`` \| ``"stellar"`` \| ``"tezos"`` \| ``"tron"`` ; `id`: `string` ; `name`: `string` ; `ticker`: `string` ; `type`: ``"CryptoCurrency"``  } \| { `color`: `string` ; `contract`: `string` ; `decimals`: `number` ; `id`: `string` ; `name`: `string` ; `parent`: `string` ; `standard`: ``"ERC20"`` ; `ticker`: `string` ; `type`: ``"TokenCurrency"``  })[]\>

The list of corresponding cryptocurrencies

 Filtering not yet implemented

#### Defined in

[packages/client/src/WalletAPIClient.ts:219](https://github.com/LedgerHQ/wallet-api/blob/main/packages/client/src/WalletAPIClient.ts#L219)

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

[packages/client/src/WalletAPIClient.ts:53](https://github.com/LedgerHQ/wallet-api/blob/main/packages/client/src/WalletAPIClient.ts#L53)

___

### request

▸ **request**<`K`, `TError`\>(`method`, `params`): `Promise`<[`RpcResponse`](../modules.md#rpcresponse)<`ReturnTypeOfMethodIfExists`<[`WalletHandlers`](../interfaces/WalletHandlers.md), `K`\>, `TError`\>\>

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

`Promise`<[`RpcResponse`](../modules.md#rpcresponse)<`ReturnTypeOfMethodIfExists`<[`WalletHandlers`](../interfaces/WalletHandlers.md), `K`\>, `TError`\>\>

#### Inherited from

[RpcNode](RpcNode.md).[request](RpcNode.md#request)

#### Defined in

packages/core/lib/JSONRPC/RpcNode.d.ts:14

___

### requestAccount

▸ **requestAccount**(`params?`): `Promise`<[`Account`](../modules.md#account)\>

Ask the connected wallet for an account matching a specific set of critterias.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params?` | `Object` | Parameters of the request. |
| `params.currencyIds?` | `string`[] | Select a set of currencies by id. Globing is enabled |

#### Returns

`Promise`<[`Account`](../modules.md#account)\>

The account selected by the user

#### Defined in

[packages/client/src/WalletAPIClient.ts:189](https://github.com/LedgerHQ/wallet-api/blob/main/packages/client/src/WalletAPIClient.ts#L189)

___

### signMessage

▸ **signMessage**(`accountId`, `message`): `Promise`<`Buffer`\>

Let the user sign the provided message.
In Ethereum context, this is an [EIP-191 message](https://github.com/ethereum/EIPs/blob/master/EIPS/eip-191.md) or an [EIP-712 message](https://github.com/ethereum/EIPs/blob/master/EIPS/eip-712.md)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `accountId` | `string` | Ledger Live id of the account |
| `message` | `Buffer` | Message the user should sign |

#### Returns

`Promise`<`Buffer`\>

Message signed

#### Defined in

[packages/client/src/WalletAPIClient.ts:139](https://github.com/LedgerHQ/wallet-api/blob/main/packages/client/src/WalletAPIClient.ts#L139)

___

### signTransaction

▸ **signTransaction**(`accountId`, `transaction`, `options?`): `Promise`<`Buffer`\>

Let the user sign a transaction that won't be broadcasted by the connected wallet

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `accountId` | `string` | id of the account |
| `transaction` | [`Transaction`](../modules.md#transaction) | The transaction object in the currency family-specific format |
| `options?` | `Object` | Extra parameters |
| `options.hwAppId?` | `string` | - |

#### Returns

`Promise`<`Buffer`\>

The raw signed transaction

#### Defined in

[packages/client/src/WalletAPIClient.ts:76](https://github.com/LedgerHQ/wallet-api/blob/main/packages/client/src/WalletAPIClient.ts#L76)

___

### signTransactionAndBroadcast

▸ **signTransactionAndBroadcast**(`accountId`, `transaction`, `options?`): `Promise`<`string`\>

Let the user sign and broadcast a transaction

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `accountId` | `string` | id of the account |
| `transaction` | [`Transaction`](../modules.md#transaction) | The transaction object in the currency family-specific format |
| `options?` | `Object` | Extra parameters |
| `options.hwAppId?` | `string` | - |

#### Returns

`Promise`<`string`\>

The transaction hash

#### Defined in

[packages/client/src/WalletAPIClient.ts:106](https://github.com/LedgerHQ/wallet-api/blob/main/packages/client/src/WalletAPIClient.ts#L106)
