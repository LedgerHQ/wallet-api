---
id: "index"
title: "@ledgerhq/wallet-api-client"
sidebar_label: "Exports"
sidebar_position: 0.5
custom_edit_url: null
---

## Enumerations

- [DeviceModel](enums/DeviceModel.md)
- [ExchangeType](enums/ExchangeType.md)
- [FeesLevel](enums/FeesLevel.md)
- [RpcErrorCode](enums/RpcErrorCode.md)

## Classes

- [RpcError](classes/RpcError.md)
- [RpcNode](classes/RpcNode.md)
- [ServerError](classes/ServerError.md)
- [TransportWalletAPI](classes/TransportWalletAPI.md)
- [WalletAPIClient](classes/WalletAPIClient.md)
- [WindowMessageTransport](classes/WindowMessageTransport.md)

## Interfaces

- [AlgorandTransaction](interfaces/AlgorandTransaction.md)
- [AppHandlers](interfaces/AppHandlers.md)
- [BitcoinTransaction](interfaces/BitcoinTransaction.md)
- [CosmosTransaction](interfaces/CosmosTransaction.md)
- [CryptoOrgTransaction](interfaces/CryptoOrgTransaction.md)
- [EthereumTransaction](interfaces/EthereumTransaction.md)
- [PolkadotTransaction](interfaces/PolkadotTransaction.md)
- [RippleTransaction](interfaces/RippleTransaction.md)
- [RpcRequest](interfaces/RpcRequest.md)
- [RpcResponseCommon](interfaces/RpcResponseCommon.md)
- [RpcResponseError](interfaces/RpcResponseError.md)
- [RpcResponseFailed](interfaces/RpcResponseFailed.md)
- [RpcResponseSuccess](interfaces/RpcResponseSuccess.md)
- [StellarTransaction](interfaces/StellarTransaction.md)
- [TezosTransaction](interfaces/TezosTransaction.md)
- [TransactionCommon](interfaces/TransactionCommon.md)
- [Transport](interfaces/Transport.md)
- [TronTransaction](interfaces/TronTransaction.md)
- [WalletHandlers](interfaces/WalletHandlers.md)

## Type Aliases

### Account

Ƭ **Account**: `Object`

A ledger live cryptocurrency account

**`Remarks`**

This is a slightly modified subset of the Account type used by the Ledger Live platform.

**`See`**

[reference](https://github.com/LedgerHQ/ledger-live-common/blob/master/docs/account.md|Account) in Ledger Live Common doc for more infos

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `address` | `string` | The "next" public address where a user should receive funds. In the context of Bitcoin, the address is "renewed" each time funds are received in order to allow some privacy. In other blockchains, the address might never change |
| `balance` | `BigNumber` | The total amount of assets that this account holds |
| `blockHeight` | `number` | Tracks the current blockchain block height |
| `currency` | `string` | The associated cryptocurrency id of the Account |
| `id` | `string` | The unique identifier of this account used internally by Ledger Live software |
| `lastSyncDate` | `Date` | The date of the last time a synchronization was performed. In other words, tracks how up-to-date the Account data is |
| `name` | `string` | The account’s name set by the user. |
| `spendableBalance` | `BigNumber` | The amount of the balance that can be spent. Most of the time it will be equal to the balance, but this can vary in some blockchains |

#### Defined in

packages/core/lib/accounts/types.d.ts:12

___

### AccountList

Ƭ **AccountList**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `params` | `z.infer`<typeof `schemaAccountListParams`\> |
| `result` | `z.infer`<typeof `schemaAccountListResults`\> |

#### Defined in

packages/core/lib/spec/types/AccountList.d.ts:122

___

### AccountListHandler

Ƭ **AccountListHandler**: (`params`: [`AccountList`](#accountlist)[``"params"``]) => [`AccountList`](#accountlist)[``"result"``]

#### Type declaration

▸ (`params`): [`AccountList`](#accountlist)[``"result"``]

##### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`AccountList`](#accountlist)[``"params"``] |

##### Returns

[`AccountList`](#accountlist)[``"result"``]

#### Defined in

packages/core/lib/spec/types/AccountList.d.ts:126

___

### AccountNotFound

Ƭ **AccountNotFound**: `z.infer`<typeof [`schemaAccountNotFound`](#schemaaccountnotfound)\>

#### Defined in

packages/core/lib/errors/types.d.ts:51

___

### AccountReceive

Ƭ **AccountReceive**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `params` | `z.infer`<typeof `schemaAccountReceiveParams`\> |
| `result` | `z.infer`<typeof `schemaAccountReceiveResults`\> |

#### Defined in

packages/core/lib/spec/types/AccountReceive.d.ts:32

___

### AccountReceiveHandler

Ƭ **AccountReceiveHandler**: (`params`: [`AccountReceive`](#accountreceive)[``"params"``]) => [`AccountReceive`](#accountreceive)[``"result"``]

#### Type declaration

▸ (`params`): [`AccountReceive`](#accountreceive)[``"result"``]

##### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`AccountReceive`](#accountreceive)[``"params"``] |

##### Returns

[`AccountReceive`](#accountreceive)[``"result"``]

#### Defined in

packages/core/lib/spec/types/AccountReceive.d.ts:36

___

### AccountRequest

Ƭ **AccountRequest**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `params` | `z.infer`<typeof `schemaAccountRequestParams`\> |
| `result` | `z.infer`<typeof `schemaAccountRequestResults`\> |

#### Defined in

packages/core/lib/spec/types/AccountRequest.d.ts:122

___

### AccountRequestHandler

Ƭ **AccountRequestHandler**: (`params`: [`AccountRequest`](#accountrequest)[``"params"``]) => [`AccountRequest`](#accountrequest)[``"result"``]

#### Type declaration

▸ (`params`): [`AccountRequest`](#accountrequest)[``"result"``]

##### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`AccountRequest`](#accountrequest)[``"params"``] |

##### Returns

[`AccountRequest`](#accountrequest)[``"result"``]

#### Defined in

packages/core/lib/spec/types/AccountRequest.d.ts:126

___

### AlgorandOperationMode

Ƭ **AlgorandOperationMode**: `z.infer`<typeof `schemaAlgorandOperationMode`\>

#### Defined in

packages/core/lib/families/algorand/types.d.ts:5

___

### ApplicationDetails

Ƭ **ApplicationDetails**: `Object`

Informations about a device application

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | Name of the application |
| `version` | `string` | Version of the application (SemVer) |

#### Defined in

packages/core/lib/types/index.d.ts:63

___

### BitcoinGetXPub

Ƭ **BitcoinGetXPub**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `params` | `z.infer`<typeof `schemaBitcoinGetXPubParams`\> |
| `result` | `z.infer`<typeof `schemaBitcoinGetXPubResults`\> |

#### Defined in

packages/core/lib/spec/types/BitcoinGetXPub.d.ts:32

___

### BitcoinGetXPubHandler

Ƭ **BitcoinGetXPubHandler**: (`params`: [`BitcoinGetXPub`](#bitcoingetxpub)[``"params"``]) => [`BitcoinGetXPub`](#bitcoingetxpub)[``"result"``]

#### Type declaration

▸ (`params`): [`BitcoinGetXPub`](#bitcoingetxpub)[``"result"``]

##### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`BitcoinGetXPub`](#bitcoingetxpub)[``"params"``] |

##### Returns

[`BitcoinGetXPub`](#bitcoingetxpub)[``"result"``]

#### Defined in

packages/core/lib/spec/types/BitcoinGetXPub.d.ts:36

___

### CosmosOperationMode

Ƭ **CosmosOperationMode**: `z.infer`<typeof `schemaCosmosOperationMode`\>

#### Defined in

packages/core/lib/families/cosmos/types.d.ts:5

___

### CryptoCurrency

Ƭ **CryptoCurrency**: `z.infer`<typeof [`schemaCryptoCurrency`](#schemacryptocurrency)\>

Crypto currency model

#### Defined in

packages/core/lib/currencies/types.d.ts:14

___

### Currency

Ƭ **Currency**: `z.infer`<typeof [`schemaCurrency`](#schemacurrency)\>

#### Defined in

packages/core/lib/currencies/types.d.ts:19

___

### CurrencyList

Ƭ **CurrencyList**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `params` | `z.infer`<typeof `schemaCurrencyListParams`\> |
| `result` | `z.infer`<typeof `schemaCurrencyListResult`\> |

#### Defined in

packages/core/lib/spec/types/CurrencyList.d.ts:218

___

### CurrencyListHandler

Ƭ **CurrencyListHandler**: (`params`: [`CurrencyList`](#currencylist)[``"params"``]) => [`CurrencyList`](#currencylist)[``"result"``]

#### Type declaration

▸ (`params`): [`CurrencyList`](#currencylist)[``"result"``]

##### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`CurrencyList`](#currencylist)[``"params"``] |

##### Returns

[`CurrencyList`](#currencylist)[``"result"``]

#### Defined in

packages/core/lib/spec/types/CurrencyList.d.ts:222

___

### CurrencyNotFound

Ƭ **CurrencyNotFound**: `z.infer`<typeof [`schemaCurrencyNotFound`](#schemacurrencynotfound)\>

#### Defined in

packages/core/lib/errors/types.d.ts:75

___

### CurrencyType

Ƭ **CurrencyType**: `z.infer`<typeof [`schemaCurrencyType`](#schemacurrencytype)\>

Currency types

#### Defined in

packages/core/lib/currencies/types.d.ts:6

___

### DeviceClose

Ƭ **DeviceClose**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `params` | `z.infer`<typeof `schemaDeviceCloseParams`\> |
| `result` | `z.infer`<typeof `schemaDeviceCloseResults`\> |

#### Defined in

packages/core/lib/spec/types/DeviceClose.d.ts:32

___

### DeviceCloseHandler

Ƭ **DeviceCloseHandler**: (`params`: [`DeviceClose`](#deviceclose)[``"params"``]) => [`DeviceClose`](#deviceclose)[``"result"``]

#### Type declaration

▸ (`params`): [`DeviceClose`](#deviceclose)[``"result"``]

##### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`DeviceClose`](#deviceclose)[``"params"``] |

##### Returns

[`DeviceClose`](#deviceclose)[``"result"``]

#### Defined in

packages/core/lib/spec/types/DeviceClose.d.ts:36

___

### DeviceExchange

Ƭ **DeviceExchange**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `params` | `z.infer`<typeof `schemaDeviceExchangeParams`\> |
| `result` | `z.infer`<typeof `schemaDeviceExchangeResults`\> |

#### Defined in

packages/core/lib/spec/types/DeviceExchange.d.ts:38

___

### DeviceExchangeHandler

Ƭ **DeviceExchangeHandler**: (`params`: [`DeviceExchange`](#deviceexchange)[``"params"``]) => [`DeviceExchange`](#deviceexchange)[``"result"``]

#### Type declaration

▸ (`params`): [`DeviceExchange`](#deviceexchange)[``"result"``]

##### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`DeviceExchange`](#deviceexchange)[``"params"``] |

##### Returns

[`DeviceExchange`](#deviceexchange)[``"result"``]

#### Defined in

packages/core/lib/spec/types/DeviceExchange.d.ts:42

___

### DeviceInfo

Ƭ **DeviceInfo**: `Object`

Information about a device

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `modelId` | [`DeviceModel`](enums/DeviceModel.md) | The [model](enums/DeviceModel.md) of the device |
| `version` | `string` | The version of the firmware |

#### Defined in

packages/core/lib/types/index.d.ts:42

___

### DeviceTransport

Ƭ **DeviceTransport**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `params` | `z.infer`<typeof `schemaDeviceTransportParams`\> |
| `result` | `z.infer`<typeof `schemaDeviceTransportResults`\> |

#### Defined in

packages/core/lib/spec/types/DeviceTransport.d.ts:88

___

### DeviceTransportHandler

Ƭ **DeviceTransportHandler**: (`params`: [`DeviceTransport`](#devicetransport)[``"params"``]) => [`DeviceTransport`](#devicetransport)[``"result"``]

#### Type declaration

▸ (`params`): [`DeviceTransport`](#devicetransport)[``"result"``]

##### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`DeviceTransport`](#devicetransport)[``"params"``] |

##### Returns

[`DeviceTransport`](#devicetransport)[``"result"``]

#### Defined in

packages/core/lib/spec/types/DeviceTransport.d.ts:92

___

### DeviceType

Ƭ **DeviceType**: `z.infer`<typeof `schemaDeviceType`\>

#### Defined in

packages/core/lib/spec/types/DeviceTransport.d.ts:3

___

### ERC20TokenCurrency

Ƭ **ERC20TokenCurrency**: `z.infer`<typeof [`schemaERC20TokenCurrency`](#schemaerc20tokencurrency)\>

ERC20 token currency model

#### Defined in

packages/core/lib/currencies/types.d.ts:18

___

### EcdsaSignature

Ƭ **EcdsaSignature**: `Buffer`

The ECDSA signature of the [payload](#exchangepayload)

#### Defined in

packages/core/lib/types/index.d.ts:12

___

### ExchangeDeviceTxId

Ƭ **ExchangeDeviceTxId**: `string`

A transaction ID used to complete the exchange process

#### Defined in

packages/core/lib/types/index.d.ts:16

___

### ExchangePayload

Ƭ **ExchangePayload**: `Buffer`

Metadata used to describe a secure exchange between a Ledger device
and a partner (for sell, swap and funding)
@ref: https://github.com/LedgerHQ/app-exchange/blob/master/src/proto/protocol.proto

#### Defined in

packages/core/lib/types/index.d.ts:8

___

### Families

Ƭ **Families**: `z.infer`<typeof [`schemaFamilies`](#schemafamilies)\>

Supported coin families

#### Defined in

packages/core/lib/families/types.d.ts:18

___

### MessageHandler

Ƭ **MessageHandler**: (`message`: `string`) => `void`

#### Type declaration

▸ (`message`): `void`

Simple contract for handling a Message received through a [Transport](interfaces/Transport.md) protocol

##### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` |

##### Returns

`void`

#### Defined in

packages/core/lib/transports/types.d.ts:6

___

### MessageSign

Ƭ **MessageSign**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `params` | `z.infer`<typeof `schemaMessageSignParams`\> |
| `result` | `z.infer`<typeof `schemaMessageSignResults`\> |

#### Defined in

packages/core/lib/spec/types/MessageSign.d.ts:38

___

### MessageSignHandler

Ƭ **MessageSignHandler**: (`params`: [`MessageSign`](#messagesign)[``"params"``]) => [`MessageSign`](#messagesign)[``"result"``]

#### Type declaration

▸ (`params`): [`MessageSign`](#messagesign)[``"result"``]

##### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`MessageSign`](#messagesign)[``"params"``] |

##### Returns

[`MessageSign`](#messagesign)[``"result"``]

#### Defined in

packages/core/lib/spec/types/MessageSign.d.ts:42

___

### MethodId

Ƭ **MethodId**: `z.infer`<typeof [`schemaRPCMethod`](#schemarpcmethod)\>

#### Defined in

packages/core/lib/spec/methods.d.ts:2

___

### NotImplementedByWallet

Ƭ **NotImplementedByWallet**: `z.infer`<typeof [`schemaNotImplementedByWallet`](#schemanotimplementedbywallet)\>

#### Defined in

packages/core/lib/errors/types.d.ts:27

___

### Permission

Ƭ **Permission**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `currencyIds` | `string`[] |
| `methodIds` | `string`[] |

#### Defined in

packages/core/lib/types/index.d.ts:73

___

### PermissionDenied

Ƭ **PermissionDenied**: `z.infer`<typeof [`schemaPermissionDenied`](#schemapermissiondenied)\>

#### Defined in

packages/core/lib/errors/types.d.ts:99

___

### PolkadotOperationMode

Ƭ **PolkadotOperationMode**: `z.infer`<typeof `schemaPolkadotOperationMode`\>

#### Defined in

packages/core/lib/families/polkadot/types.d.ts:5

___

### Promisable

Ƭ **Promisable**<`T`\>: `T` \| `PromiseLike`<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

packages/core/lib/types/index.d.ts:2

___

### RPCHandler

Ƭ **RPCHandler**<`Result`\>: (`request`: [`RpcRequest`](interfaces/RpcRequest.md)) => `Promise`<`Result`\>

#### Type parameters

| Name |
| :------ |
| `Result` |

#### Type declaration

▸ (`request`): `Promise`<`Result`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `request` | [`RpcRequest`](interfaces/RpcRequest.md) |

##### Returns

`Promise`<`Result`\>

#### Defined in

[packages/client/src/WalletAPIClient.ts:23](https://github.com/LedgerHQ/wallet-api/blob/main/packages/client/src/WalletAPIClient.ts#L23)

___

### RawAccount

Ƭ **RawAccount**: `z.infer`<typeof [`schemaRawAccount`](#schemarawaccount)\>

The raw representation of the [Account](#account) type

**`See`**

[Account](#account) for information regarding individual fields. Each field type is the serialized version of the corresponding [Account](#account) type

#### Defined in

packages/core/lib/accounts/types.d.ts:51

___

### RawAlgorandTransaction

Ƭ **RawAlgorandTransaction**: `z.infer`<typeof `schemaRawAlgorandTransaction`\>

#### Defined in

packages/core/lib/families/algorand/types.d.ts:13

___

### RawBitcoinTransaction

Ƭ **RawBitcoinTransaction**: `z.infer`<typeof `schemaRawBitcoinTransaction`\>

#### Defined in

packages/core/lib/families/bitcoin/types.d.ts:9

___

### RawCosmosTransaction

Ƭ **RawCosmosTransaction**: `z.infer`<typeof `schemaRawCosmosTransaction`\>

#### Defined in

packages/core/lib/families/cosmos/types.d.ts:13

___

### RawCryptoOrgTransaction

Ƭ **RawCryptoOrgTransaction**: `z.infer`<typeof `schemaRawCryptoOrgTransaction`\>

#### Defined in

packages/core/lib/families/crypto_org/types.d.ts:10

___

### RawEthereumTransaction

Ƭ **RawEthereumTransaction**: `z.infer`<typeof `schemaRawEthereumTransaction`\>

#### Defined in

packages/core/lib/families/ethereum/types.d.ts:13

___

### RawPolkadotTransaction

Ƭ **RawPolkadotTransaction**: `z.infer`<typeof `schemaRawPolkadotTransaction`\>

#### Defined in

packages/core/lib/families/polkadot/types.d.ts:12

___

### RawRippleTransaction

Ƭ **RawRippleTransaction**: `z.infer`<typeof `schemaRawRippleTransaction`\>

#### Defined in

packages/core/lib/families/ripple/types.d.ts:10

___

### RawStellarTransaction

Ƭ **RawStellarTransaction**: `z.infer`<typeof `schemaRawStellarTransaction`\>

#### Defined in

packages/core/lib/families/stellar/types.d.ts:11

___

### RawTezosTransaction

Ƭ **RawTezosTransaction**: `z.infer`<typeof `schemaRawTezosTransaction`\>

#### Defined in

packages/core/lib/families/tezos/types.d.ts:12

___

### RawTransaction

Ƭ **RawTransaction**: `z.infer`<typeof [`schemaRawTransaction`](#schemarawtransaction)\>

The raw representation of the generic [Transaction](#transaction) type.

#### Defined in

packages/core/lib/families/types.d.ts:46

___

### RawTransactionCommon

Ƭ **RawTransactionCommon**: `z.infer`<typeof [`schemaRawTransaction`](#schemarawtransaction)\>

The raw representation of the common transaction fields found in [TransactionCommon](interfaces/TransactionCommon.md) type

**`See`**

[TransactionCommon](interfaces/TransactionCommon.md) for information regarding individual fields. Each field type is the serialized version of the corresponding [TransactionCommon](interfaces/TransactionCommon.md) type

#### Defined in

packages/core/lib/families/types.d.ts:24

___

### RawTronTransaction

Ƭ **RawTronTransaction**: `z.infer`<typeof `schemaRawTronTransaction`\>

#### Defined in

packages/core/lib/families/tron/types.d.ts:12

___

### RpcResponse

Ƭ **RpcResponse**<`TResult`, `TErrorData`\>: [`RpcResponseSuccess`](interfaces/RpcResponseSuccess.md)<`TResult`\> \| [`RpcResponseFailed`](interfaces/RpcResponseFailed.md)<`TErrorData`\>

When a rpc call is made, the Server **MUST** reply with a Response
except for in the case of Notifications.
The Response is expressed as a single JSON Object

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TResult` | `unknown` |
| `TErrorData` | `unknown` |

#### Defined in

packages/core/lib/JSONRPC/types.d.ts:98

___

### ServerErrorCode

Ƭ **ServerErrorCode**: `z.infer`<typeof [`schemaServerErrorCode`](#schemaservererrorcode)\>

#### Defined in

packages/core/lib/errors/types.d.ts:3

___

### ServerErrorData

Ƭ **ServerErrorData**: `z.infer`<typeof [`schemaServerErrorData`](#schemaservererrordata)\>

#### Defined in

packages/core/lib/errors/types.d.ts:321

___

### StorageGet

Ƭ **StorageGet**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `params` | `z.infer`<typeof `schemaStorageGetParams`\> |
| `result` | `z.infer`<typeof `schemaStorageGetResults`\> |

#### Defined in

packages/core/lib/spec/types/StorageGet.d.ts:38

___

### StorageGetHandler

Ƭ **StorageGetHandler**: (`params`: [`StorageGet`](#storageget)[``"params"``]) => [`StorageGet`](#storageget)[``"result"``]

#### Type declaration

▸ (`params`): [`StorageGet`](#storageget)[``"result"``]

##### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`StorageGet`](#storageget)[``"params"``] |

##### Returns

[`StorageGet`](#storageget)[``"result"``]

#### Defined in

packages/core/lib/spec/types/StorageGet.d.ts:42

___

### StorageSet

Ƭ **StorageSet**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `params` | `z.infer`<typeof `schemaStorageSetParams`\> |
| `result` | `z.infer`<typeof `schemaStorageSetResults`\> |

#### Defined in

packages/core/lib/spec/types/StorageSet.d.ts:32

___

### StorageSetHandler

Ƭ **StorageSetHandler**: (`params`: [`StorageSet`](#storageset)[``"params"``]) => [`StorageSet`](#storageset)[``"result"``]

#### Type declaration

▸ (`params`): [`StorageSet`](#storageset)[``"result"``]

##### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`StorageSet`](#storageset)[``"params"``] |

##### Returns

[`StorageSet`](#storageset)[``"result"``]

#### Defined in

packages/core/lib/spec/types/StorageSet.d.ts:36

___

### TezosOperationMode

Ƭ **TezosOperationMode**: `z.infer`<typeof `schemaTezosOperationMode`\>

#### Defined in

packages/core/lib/families/tezos/types.d.ts:5

___

### TokenStandard

Ƭ **TokenStandard**: `z.infer`<typeof [`schemaTokenStandard`](#schematokenstandard)\>

Token standards

#### Defined in

packages/core/lib/currencies/types.d.ts:10

___

### Transaction

Ƭ **Transaction**: [`EthereumTransaction`](interfaces/EthereumTransaction.md) \| [`BitcoinTransaction`](interfaces/BitcoinTransaction.md) \| [`AlgorandTransaction`](interfaces/AlgorandTransaction.md) \| [`CryptoOrgTransaction`](interfaces/CryptoOrgTransaction.md) \| [`RippleTransaction`](interfaces/RippleTransaction.md) \| [`CosmosTransaction`](interfaces/CosmosTransaction.md) \| [`TezosTransaction`](interfaces/TezosTransaction.md) \| [`PolkadotTransaction`](interfaces/PolkadotTransaction.md) \| [`StellarTransaction`](interfaces/StellarTransaction.md) \| [`TronTransaction`](interfaces/TronTransaction.md)

Description of an unsigned transaction. This type is used to build
transactions and then sign them with a Ledger device and finally broadcast
them to the network upon user validation.

#### Defined in

packages/core/lib/families/types.d.ts:52

___

### TransactionSign

Ƭ **TransactionSign**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `params` | `z.infer`<typeof `schemaTransactionSignParams`\> |
| `result` | `z.infer`<typeof `schemaTransactionSignResults`\> |

#### Defined in

packages/core/lib/spec/types/TransactionSign.d.ts:774

___

### TransactionSignAndBroadcast

Ƭ **TransactionSignAndBroadcast**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `params` | `z.infer`<typeof `schemaTransactionSignAndBroadcastParams`\> |
| `result` | `z.infer`<typeof `schemaTransactionSignAndBroadcastResults`\> |

#### Defined in

packages/core/lib/spec/types/TransactionSignAndBroadcast.d.ts:774

___

### TransactionSignAndBroadcastHandler

Ƭ **TransactionSignAndBroadcastHandler**: (`params`: [`TransactionSignAndBroadcast`](#transactionsignandbroadcast)[``"params"``]) => [`TransactionSignAndBroadcast`](#transactionsignandbroadcast)[``"result"``]

#### Type declaration

▸ (`params`): [`TransactionSignAndBroadcast`](#transactionsignandbroadcast)[``"result"``]

##### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`TransactionSignAndBroadcast`](#transactionsignandbroadcast)[``"params"``] |

##### Returns

[`TransactionSignAndBroadcast`](#transactionsignandbroadcast)[``"result"``]

#### Defined in

packages/core/lib/spec/types/TransactionSignAndBroadcast.d.ts:778

___

### TransactionSignHandler

Ƭ **TransactionSignHandler**: (`params`: [`TransactionSign`](#transactionsign)[``"params"``]) => [`TransactionSign`](#transactionsign)[``"result"``]

#### Type declaration

▸ (`params`): [`TransactionSign`](#transactionsign)[``"result"``]

##### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`TransactionSign`](#transactionsign)[``"params"``] |

##### Returns

[`TransactionSign`](#transactionsign)[``"result"``]

#### Defined in

packages/core/lib/spec/types/TransactionSign.d.ts:778

___

### TronOperationMode

Ƭ **TronOperationMode**: `z.infer`<typeof `schemaTronOperationMode`\>

#### Defined in

packages/core/lib/families/tron/types.d.ts:4

___

### TronResource

Ƭ **TronResource**: `z.infer`<typeof `schemaTronResource`\>

#### Defined in

packages/core/lib/families/tron/types.d.ts:5

___

### UnauthorizedStore

Ƭ **UnauthorizedStore**: `z.infer`<typeof [`schemaUnauthorizedStore`](#schemaunauthorizedstore)\>

#### Defined in

packages/core/lib/errors/types.d.ts:167

___

### UnknownError

Ƭ **UnknownError**: `z.infer`<typeof [`schemaUnknownError`](#schemaunknownerror)\>

#### Defined in

packages/core/lib/errors/types.d.ts:143

___

### WalletCapabilities

Ƭ **WalletCapabilities**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `params` | `z.infer`<typeof `schemaWalletCapabilitiesParams`\> |
| `result` | `z.infer`<typeof `schemaWalletCapabilitiesResults`\> |

#### Defined in

packages/core/lib/spec/types/WalletCapabilities.d.ts:20

___

### WalletCapabilitiesHandler

Ƭ **WalletCapabilitiesHandler**: (`params`: [`WalletCapabilities`](#walletcapabilities)[``"params"``]) => [`WalletCapabilities`](#walletcapabilities)[``"result"``]

#### Type declaration

▸ (`params`): [`WalletCapabilities`](#walletcapabilities)[``"result"``]

##### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`WalletCapabilities`](#walletcapabilities)[``"params"``] |

##### Returns

[`WalletCapabilities`](#walletcapabilities)[``"result"``]

#### Defined in

packages/core/lib/spec/types/WalletCapabilities.d.ts:24

___

### WalletInfo

Ƭ **WalletInfo**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `params` | `z.infer`<typeof `schemaWalletInfoParams`\> |
| `result` | `z.infer`<typeof `schemaWalletInfoResults`\> |

#### Defined in

packages/core/lib/spec/types/WalletInfo.d.ts:56

___

### WalletInfoHandler

Ƭ **WalletInfoHandler**: (`params`: [`WalletInfo`](#walletinfo)[``"params"``]) => [`WalletInfo`](#walletinfo)[``"result"``]

#### Type declaration

▸ (`params`): [`WalletInfo`](#walletinfo)[``"result"``]

##### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`WalletInfo`](#walletinfo)[``"params"``] |

##### Returns

[`WalletInfo`](#walletinfo)[``"result"``]

#### Defined in

packages/core/lib/spec/types/WalletInfo.d.ts:60

___

### WalletUserId

Ƭ **WalletUserId**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `params` | `z.infer`<typeof `schemaWalletUserIdParams`\> |
| `result` | `z.infer`<typeof `schemaWalletUserIdResults`\> |

#### Defined in

packages/core/lib/spec/types/WalletUserId.d.ts:20

___

### WalletUserIdHandler

Ƭ **WalletUserIdHandler**: (`params`: [`WalletUserId`](#walletuserid)[``"params"``]) => [`WalletUserId`](#walletuserid)[``"result"``]

#### Type declaration

▸ (`params`): [`WalletUserId`](#walletuserid)[``"result"``]

##### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`WalletUserId`](#walletuserid)[``"params"``] |

##### Returns

[`WalletUserId`](#walletuserid)[``"result"``]

#### Defined in

packages/core/lib/spec/types/WalletUserId.d.ts:24

## Variables

### FAMILIES

• `Const` **FAMILIES**: readonly [``"bitcoin"``, ``"ethereum"``, ``"algorand"``, ``"crypto_org"``, ``"ripple"``, ``"cosmos"``, ``"ripple"``, ``"cosmos"``, ``"tezos"``, ``"polkadot"``, ``"stellar"``, ``"tron"``]

#### Defined in

packages/core/lib/families/common.d.ts:12

___

### schemaAccountList

• `Const` **schemaAccountList**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `params` | `z.ZodOptional`<`z.ZodObject`<{ `currencyIds`: `z.ZodOptional`<`z.ZodArray`<`z.ZodString`, ``"many"``\>\>  }, ``"strip"``, `z.ZodTypeAny`, { `currencyIds?`: `string`[]  }, { `currencyIds?`: `string`[]  }\>\> |
| `result` | `z.ZodObject`<{ `rawAccounts`: `z.ZodArray`<`z.ZodObject`<{ `address`: `z.ZodString` ; `balance`: `z.ZodString` ; `blockHeight`: `z.ZodNumber` ; `currency`: `z.ZodString` ; `id`: `z.ZodString` ; `lastSyncDate`: `z.ZodString` ; `name`: `z.ZodString` ; `spendableBalance`: `z.ZodString`  }, ``"strip"``, `z.ZodTypeAny`, { `address`: `string` ; `balance`: `string` ; `blockHeight`: `number` ; `currency`: `string` ; `id`: `string` ; `lastSyncDate`: `string` ; `name`: `string` ; `spendableBalance`: `string`  }, { `address`: `string` ; `balance`: `string` ; `blockHeight`: `number` ; `currency`: `string` ; `id`: `string` ; `lastSyncDate`: `string` ; `name`: `string` ; `spendableBalance`: `string`  }\>, ``"many"``\>  }, ``"strip"``, `z.ZodTypeAny`, { `rawAccounts`: { `address`: `string` ; `balance`: `string` ; `blockHeight`: `number` ; `currency`: `string` ; `id`: `string` ; `lastSyncDate`: `string` ; `name`: `string` ; `spendableBalance`: `string`  }[]  }, { `rawAccounts`: { `address`: `string` ; `balance`: `string` ; `blockHeight`: `number` ; `currency`: `string` ; `id`: `string` ; `lastSyncDate`: `string` ; `name`: `string` ; `spendableBalance`: `string`  }[]  }\> |

#### Defined in

packages/core/lib/spec/types/AccountList.d.ts:61

___

### schemaAccountNotFound

• `Const` **schemaAccountNotFound**: `z.ZodObject`<{ `code`: `z.ZodLiteral`<``"ACCOUNT_NOT_FOUND"``\> ; `data`: `z.ZodObject`<{ `accountId`: `z.ZodString`  }, ``"strip"``, `z.ZodTypeAny`, { `accountId`: `string`  }, { `accountId`: `string`  }\> ; `message`: `z.ZodString`  }, ``"strip"``, `z.ZodTypeAny`, { `code`: ``"ACCOUNT_NOT_FOUND"`` ; `data`: { `accountId`: `string`  } ; `message`: `string`  }, { `code`: ``"ACCOUNT_NOT_FOUND"`` ; `data`: { `accountId`: `string`  } ; `message`: `string`  }\>

#### Defined in

packages/core/lib/errors/types.d.ts:28

___

### schemaAccountReceive

• `Const` **schemaAccountReceive**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `params` | `z.ZodObject`<{ `accountId`: `z.ZodString`  }, ``"strip"``, `z.ZodTypeAny`, { `accountId`: `string`  }, { `accountId`: `string`  }\> |
| `result` | `z.ZodObject`<{ `address`: `z.ZodString`  }, ``"strip"``, `z.ZodTypeAny`, { `address`: `string`  }, { `address`: `string`  }\> |

#### Defined in

packages/core/lib/spec/types/AccountReceive.d.ts:16

___

### schemaAccountRequest

• `Const` **schemaAccountRequest**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `params` | `z.ZodObject`<{ `currencyIds`: `z.ZodOptional`<`z.ZodArray`<`z.ZodString`, ``"many"``\>\>  }, ``"strip"``, `z.ZodTypeAny`, { `currencyIds?`: `string`[]  }, { `currencyIds?`: `string`[]  }\> |
| `result` | `z.ZodObject`<{ `rawAccount`: `z.ZodObject`<{ `address`: `z.ZodString` ; `balance`: `z.ZodString` ; `blockHeight`: `z.ZodNumber` ; `currency`: `z.ZodString` ; `id`: `z.ZodString` ; `lastSyncDate`: `z.ZodString` ; `name`: `z.ZodString` ; `spendableBalance`: `z.ZodString`  }, ``"strip"``, `z.ZodTypeAny`, { `address`: `string` ; `balance`: `string` ; `blockHeight`: `number` ; `currency`: `string` ; `id`: `string` ; `lastSyncDate`: `string` ; `name`: `string` ; `spendableBalance`: `string`  }, { `address`: `string` ; `balance`: `string` ; `blockHeight`: `number` ; `currency`: `string` ; `id`: `string` ; `lastSyncDate`: `string` ; `name`: `string` ; `spendableBalance`: `string`  }\>  }, ``"strip"``, `z.ZodTypeAny`, { `rawAccount`: { `address`: `string` ; `balance`: `string` ; `blockHeight`: `number` ; `currency`: `string` ; `id`: `string` ; `lastSyncDate`: `string` ; `name`: `string` ; `spendableBalance`: `string`  }  }, { `rawAccount`: { `address`: `string` ; `balance`: `string` ; `blockHeight`: `number` ; `currency`: `string` ; `id`: `string` ; `lastSyncDate`: `string` ; `name`: `string` ; `spendableBalance`: `string`  }  }\> |

#### Defined in

packages/core/lib/spec/types/AccountRequest.d.ts:61

___

### schemaBaseCurrency

• `Const` **schemaBaseCurrency**: `z.ZodObject`<{ `color`: `z.ZodString` ; `decimals`: `z.ZodNumber` ; `id`: `z.ZodString` ; `name`: `z.ZodString` ; `ticker`: `z.ZodString`  }, ``"strip"``, `z.ZodTypeAny`, { `color`: `string` ; `decimals`: `number` ; `id`: `string` ; `name`: `string` ; `ticker`: `string`  }, { `color`: `string` ; `decimals`: `number` ; `id`: `string` ; `name`: `string` ; `ticker`: `string`  }\>

#### Defined in

packages/core/lib/currencies/validation.d.ts:4

___

### schemaBitcoinGetXPub

• `Const` **schemaBitcoinGetXPub**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `params` | `z.ZodObject`<{ `accountId`: `z.ZodString`  }, ``"strip"``, `z.ZodTypeAny`, { `accountId`: `string`  }, { `accountId`: `string`  }\> |
| `result` | `z.ZodObject`<{ `xPub`: `z.ZodString`  }, ``"strip"``, `z.ZodTypeAny`, { `xPub`: `string`  }, { `xPub`: `string`  }\> |

#### Defined in

packages/core/lib/spec/types/BitcoinGetXPub.d.ts:16

___

### schemaCryptoCurrency

• `Const` **schemaCryptoCurrency**: `z.ZodObject`<`z.extendShape`<{ `color`: `z.ZodString` ; `decimals`: `z.ZodNumber` ; `id`: `z.ZodString` ; `name`: `z.ZodString` ; `ticker`: `z.ZodString`  }, { `family`: `z.ZodEnum`<[``"bitcoin"``, ``"ethereum"``, ``"algorand"``, ``"crypto_org"``, ``"ripple"``, ``"cosmos"``, ``"ripple"``, ``"cosmos"``, ``"tezos"``, ``"polkadot"``, ``"stellar"``, ``"tron"``]\> ; `type`: `z.ZodLiteral`<``"CryptoCurrency"``\>  }\>, ``"strip"``, `z.ZodTypeAny`, { `color`: `string` ; `decimals`: `number` ; `family`: ``"bitcoin"`` \| ``"ethereum"`` \| ``"algorand"`` \| ``"crypto_org"`` \| ``"ripple"`` \| ``"cosmos"`` \| ``"tezos"`` \| ``"polkadot"`` \| ``"stellar"`` \| ``"tron"`` ; `id`: `string` ; `name`: `string` ; `ticker`: `string` ; `type`: ``"CryptoCurrency"``  }, { `color`: `string` ; `decimals`: `number` ; `family`: ``"bitcoin"`` \| ``"ethereum"`` \| ``"algorand"`` \| ``"crypto_org"`` \| ``"ripple"`` \| ``"cosmos"`` \| ``"tezos"`` \| ``"polkadot"`` \| ``"stellar"`` \| ``"tron"`` ; `id`: `string` ; `name`: `string` ; `ticker`: `string` ; `type`: ``"CryptoCurrency"``  }\>

#### Defined in

packages/core/lib/currencies/validation.d.ts:23

___

### schemaCurrency

• `Const` **schemaCurrency**: `z.ZodDiscriminatedUnion`<``"type"``, `z.Primitive`, `z.ZodObject`<`z.extendShape`<{ `color`: `z.ZodString` ; `decimals`: `z.ZodNumber` ; `id`: `z.ZodString` ; `name`: `z.ZodString` ; `ticker`: `z.ZodString`  }, { `family`: `z.ZodEnum`<[``"bitcoin"``, ``"ethereum"``, ``"algorand"``, ``"crypto_org"``, ``"ripple"``, ``"cosmos"``, ``"ripple"``, ``"cosmos"``, ``"tezos"``, ``"polkadot"``, ``"stellar"``, ``"tron"``]\> ; `type`: `z.ZodLiteral`<``"CryptoCurrency"``\>  }\>, ``"strip"``, `z.ZodTypeAny`, { `color`: `string` ; `decimals`: `number` ; `family`: ``"bitcoin"`` \| ``"ethereum"`` \| ``"algorand"`` \| ``"crypto_org"`` \| ``"ripple"`` \| ``"cosmos"`` \| ``"tezos"`` \| ``"polkadot"`` \| ``"stellar"`` \| ``"tron"`` ; `id`: `string` ; `name`: `string` ; `ticker`: `string` ; `type`: ``"CryptoCurrency"``  }, { `color`: `string` ; `decimals`: `number` ; `family`: ``"bitcoin"`` \| ``"ethereum"`` \| ``"algorand"`` \| ``"crypto_org"`` \| ``"ripple"`` \| ``"cosmos"`` \| ``"tezos"`` \| ``"polkadot"`` \| ``"stellar"`` \| ``"tron"`` ; `id`: `string` ; `name`: `string` ; `ticker`: `string` ; `type`: ``"CryptoCurrency"``  }\> \| `z.ZodObject`<`z.extendShape`<`z.extendShape`<{ `color`: `z.ZodString` ; `decimals`: `z.ZodNumber` ; `id`: `z.ZodString` ; `name`: `z.ZodString` ; `ticker`: `z.ZodString`  }, { `parent`: `z.ZodString` ; `type`: `z.ZodLiteral`<``"TokenCurrency"``\>  }\>, { `contract`: `z.ZodString` ; `standard`: `z.ZodEnum`<[``"ERC20"``]\>  }\>, ``"strip"``, `z.ZodTypeAny`, { `color`: `string` ; `contract`: `string` ; `decimals`: `number` ; `id`: `string` ; `name`: `string` ; `parent`: `string` ; `standard`: ``"ERC20"`` ; `ticker`: `string` ; `type`: ``"TokenCurrency"``  }, { `color`: `string` ; `contract`: `string` ; `decimals`: `number` ; `id`: `string` ; `name`: `string` ; `parent`: `string` ; `standard`: ``"ERC20"`` ; `ticker`: `string` ; `type`: ``"TokenCurrency"``  }\>\>

#### Defined in

packages/core/lib/currencies/validation.d.ts:108

___

### schemaCurrencyList

• `Const` **schemaCurrencyList**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `params` | `z.ZodOptional`<`z.ZodObject`<{ `currencyIds`: `z.ZodOptional`<`z.ZodArray`<`z.ZodString`, ``"many"``\>\>  }, ``"strip"``, `z.ZodTypeAny`, { `currencyIds?`: `string`[]  }, { `currencyIds?`: `string`[]  }\>\> |
| `result` | `z.ZodObject`<{ `currencies`: `z.ZodArray`<`z.ZodDiscriminatedUnion`<``"type"``, `z.Primitive`, `z.ZodObject`<`z.extendShape`<{ `color`: `z.ZodString` ; `decimals`: `z.ZodNumber` ; `id`: `z.ZodString` ; `name`: `z.ZodString` ; `ticker`: `z.ZodString`  }, { `family`: `z.ZodEnum`<[``"bitcoin"``, ``"ethereum"``, ``"algorand"``, ``"crypto_org"``, ``"ripple"``, ``"cosmos"``, ``"ripple"``, ``"cosmos"``, ``"tezos"``, ``"polkadot"``, ``"stellar"``, ``"tron"``]\> ; `type`: `z.ZodLiteral`<``"CryptoCurrency"``\>  }\>, ``"strip"``, `z.ZodTypeAny`, { `color`: `string` ; `decimals`: `number` ; `family`: ``"bitcoin"`` \| ``"ethereum"`` \| ``"algorand"`` \| ``"crypto_org"`` \| ``"ripple"`` \| ``"cosmos"`` \| ``"tezos"`` \| ``"polkadot"`` \| ``"stellar"`` \| ``"tron"`` ; `id`: `string` ; `name`: `string` ; `ticker`: `string` ; `type`: ``"CryptoCurrency"``  }, { `color`: `string` ; `decimals`: `number` ; `family`: ``"bitcoin"`` \| ``"ethereum"`` \| ``"algorand"`` \| ``"crypto_org"`` \| ``"ripple"`` \| ``"cosmos"`` \| ``"tezos"`` \| ``"polkadot"`` \| ``"stellar"`` \| ``"tron"`` ; `id`: `string` ; `name`: `string` ; `ticker`: `string` ; `type`: ``"CryptoCurrency"``  }\> \| `z.ZodObject`<`z.extendShape`<`z.extendShape`<{ `color`: `z.ZodString` ; `decimals`: `z.ZodNumber` ; `id`: `z.ZodString` ; `name`: `z.ZodString` ; `ticker`: `z.ZodString`  }, { `parent`: `z.ZodString` ; `type`: `z.ZodLiteral`<``"TokenCurrency"``\>  }\>, { `contract`: `z.ZodString` ; `standard`: `z.ZodEnum`<[``"ERC20"``]\>  }\>, ``"strip"``, `z.ZodTypeAny`, { `color`: `string` ; `contract`: `string` ; `decimals`: `number` ; `id`: `string` ; `name`: `string` ; `parent`: `string` ; `standard`: ``"ERC20"`` ; `ticker`: `string` ; `type`: ``"TokenCurrency"``  }, { `color`: `string` ; `contract`: `string` ; `decimals`: `number` ; `id`: `string` ; `name`: `string` ; `parent`: `string` ; `standard`: ``"ERC20"`` ; `ticker`: `string` ; `type`: ``"TokenCurrency"``  }\>\>, ``"many"``\>  }, ``"strip"``, `z.ZodTypeAny`, { `currencies`: ({ `color`: `string` ; `decimals`: `number` ; `family`: ``"bitcoin"`` \| ``"ethereum"`` \| ``"algorand"`` \| ``"crypto_org"`` \| ``"ripple"`` \| ``"cosmos"`` \| ``"tezos"`` \| ``"polkadot"`` \| ``"stellar"`` \| ``"tron"`` ; `id`: `string` ; `name`: `string` ; `ticker`: `string` ; `type`: ``"CryptoCurrency"``  } \| { `color`: `string` ; `contract`: `string` ; `decimals`: `number` ; `id`: `string` ; `name`: `string` ; `parent`: `string` ; `standard`: ``"ERC20"`` ; `ticker`: `string` ; `type`: ``"TokenCurrency"``  })[]  }, { `currencies`: ({ `color`: `string` ; `decimals`: `number` ; `family`: ``"bitcoin"`` \| ``"ethereum"`` \| ``"algorand"`` \| ``"crypto_org"`` \| ``"ripple"`` \| ``"cosmos"`` \| ``"tezos"`` \| ``"polkadot"`` \| ``"stellar"`` \| ``"tron"`` ; `id`: `string` ; `name`: `string` ; `ticker`: `string` ; `type`: ``"CryptoCurrency"``  } \| { `color`: `string` ; `contract`: `string` ; `decimals`: `number` ; `id`: `string` ; `name`: `string` ; `parent`: `string` ; `standard`: ``"ERC20"`` ; `ticker`: `string` ; `type`: ``"TokenCurrency"``  })[]  }\> |

#### Defined in

packages/core/lib/spec/types/CurrencyList.d.ts:109

___

### schemaCurrencyNotFound

• `Const` **schemaCurrencyNotFound**: `z.ZodObject`<{ `code`: `z.ZodLiteral`<``"CURRENCY_NOT_FOUND"``\> ; `data`: `z.ZodObject`<{ `currencyId`: `z.ZodString`  }, ``"strip"``, `z.ZodTypeAny`, { `currencyId`: `string`  }, { `currencyId`: `string`  }\> ; `message`: `z.ZodString`  }, ``"strip"``, `z.ZodTypeAny`, { `code`: ``"CURRENCY_NOT_FOUND"`` ; `data`: { `currencyId`: `string`  } ; `message`: `string`  }, { `code`: ``"CURRENCY_NOT_FOUND"`` ; `data`: { `currencyId`: `string`  } ; `message`: `string`  }\>

#### Defined in

packages/core/lib/errors/types.d.ts:52

___

### schemaCurrencyType

• `Const` **schemaCurrencyType**: `z.ZodEnum`<[``"CryptoCurrency"``, ``"TokenCurrency"``]\>

#### Defined in

packages/core/lib/currencies/validation.d.ts:2

___

### schemaDeviceClose

• `Const` **schemaDeviceClose**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `params` | `z.ZodObject`<{ `transportId`: `z.ZodString`  }, ``"strip"``, `z.ZodTypeAny`, { `transportId`: `string`  }, { `transportId`: `string`  }\> |
| `result` | `z.ZodObject`<{ `transportId`: `z.ZodString`  }, ``"strip"``, `z.ZodTypeAny`, { `transportId`: `string`  }, { `transportId`: `string`  }\> |

#### Defined in

packages/core/lib/spec/types/DeviceClose.d.ts:16

___

### schemaDeviceExchange

• `Const` **schemaDeviceExchange**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `params` | `z.ZodObject`<{ `apduHex`: `z.ZodString` ; `transportId`: `z.ZodString`  }, ``"strip"``, `z.ZodTypeAny`, { `apduHex`: `string` ; `transportId`: `string`  }, { `apduHex`: `string` ; `transportId`: `string`  }\> |
| `result` | `z.ZodObject`<{ `responseHex`: `z.ZodString`  }, ``"strip"``, `z.ZodTypeAny`, { `responseHex`: `string`  }, { `responseHex`: `string`  }\> |

#### Defined in

packages/core/lib/spec/types/DeviceExchange.d.ts:19

___

### schemaDeviceTransport

• `Const` **schemaDeviceTransport**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `params` | `z.ZodObject`<{ `appName`: `z.ZodOptional`<`z.ZodString`\> ; `appVersionRange`: `z.ZodOptional`<`z.ZodString`\> ; `devices`: `z.ZodOptional`<`z.ZodArray`<`z.ZodEnum`<[``"blue"``, ``"nanoS"``, ``"nanoSP"``, ``"nanoX"``, ``"stax"``]\>, ``"atleastone"``\>\> ; `firmwareVersionRange`: `z.ZodOptional`<`z.ZodString`\> ; `seeded`: `z.ZodOptional`<`z.ZodBoolean`\>  }, ``"strip"``, `z.ZodTypeAny`, { `appName?`: `string` ; `appVersionRange?`: `string` ; `devices?`: [``"blue"`` \| ``"nanoS"`` \| ``"nanoSP"`` \| ``"nanoX"`` \| ``"stax"``, ...("blue" \| "nanoS" \| "nanoSP" \| "nanoX" \| "stax")[]] ; `firmwareVersionRange?`: `string` ; `seeded?`: `boolean`  }, { `appName?`: `string` ; `appVersionRange?`: `string` ; `devices?`: [``"blue"`` \| ``"nanoS"`` \| ``"nanoSP"`` \| ``"nanoX"`` \| ``"stax"``, ...("blue" \| "nanoS" \| "nanoSP" \| "nanoX" \| "stax")[]] ; `firmwareVersionRange?`: `string` ; `seeded?`: `boolean`  }\> |
| `result` | `z.ZodObject`<{ `transportId`: `z.ZodString`  }, ``"strip"``, `z.ZodTypeAny`, { `transportId`: `string`  }, { `transportId`: `string`  }\> |

#### Defined in

packages/core/lib/spec/types/DeviceTransport.d.ts:45

___

### schemaERC20TokenCurrency

• `Const` **schemaERC20TokenCurrency**: `z.ZodObject`<`z.extendShape`<`z.extendShape`<{ `color`: `z.ZodString` ; `decimals`: `z.ZodNumber` ; `id`: `z.ZodString` ; `name`: `z.ZodString` ; `ticker`: `z.ZodString`  }, { `parent`: `z.ZodString` ; `type`: `z.ZodLiteral`<``"TokenCurrency"``\>  }\>, { `contract`: `z.ZodString` ; `standard`: `z.ZodEnum`<[``"ERC20"``]\>  }\>, ``"strip"``, `z.ZodTypeAny`, { `color`: `string` ; `contract`: `string` ; `decimals`: `number` ; `id`: `string` ; `name`: `string` ; `parent`: `string` ; `standard`: ``"ERC20"`` ; `ticker`: `string` ; `type`: ``"TokenCurrency"``  }, { `color`: `string` ; `contract`: `string` ; `decimals`: `number` ; `id`: `string` ; `name`: `string` ; `parent`: `string` ; `standard`: ``"ERC20"`` ; `ticker`: `string` ; `type`: ``"TokenCurrency"``  }\>

#### Defined in

packages/core/lib/currencies/validation.d.ts:75

___

### schemaFamilies

• `Const` **schemaFamilies**: `z.ZodEnum`<[``"bitcoin"``, ``"ethereum"``, ``"algorand"``, ``"crypto_org"``, ``"ripple"``, ``"cosmos"``, ``"ripple"``, ``"cosmos"``, ``"tezos"``, ``"polkadot"``, ``"stellar"``, ``"tron"``]\>

#### Defined in

packages/core/lib/families/common.d.ts:13

___

### schemaMessageSign

• `Const` **schemaMessageSign**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `params` | `z.ZodObject`<{ `accountId`: `z.ZodString` ; `hexMessage`: `z.ZodString`  }, ``"strip"``, `z.ZodTypeAny`, { `accountId`: `string` ; `hexMessage`: `string`  }, { `accountId`: `string` ; `hexMessage`: `string`  }\> |
| `result` | `z.ZodObject`<{ `hexSignedMessage`: `z.ZodString`  }, ``"strip"``, `z.ZodTypeAny`, { `hexSignedMessage`: `string`  }, { `hexSignedMessage`: `string`  }\> |

#### Defined in

packages/core/lib/spec/types/MessageSign.d.ts:19

___

### schemaNotImplementedByWallet

• `Const` **schemaNotImplementedByWallet**: `z.ZodObject`<{ `code`: `z.ZodLiteral`<``"NOT_IMPLEMENTED_BY_WALLET"``\> ; `data`: `z.ZodObject`<{ `methodId`: `z.ZodString`  }, ``"strip"``, `z.ZodTypeAny`, { `methodId`: `string`  }, { `methodId`: `string`  }\> ; `message`: `z.ZodString`  }, ``"strip"``, `z.ZodTypeAny`, { `code`: ``"NOT_IMPLEMENTED_BY_WALLET"`` ; `data`: { `methodId`: `string`  } ; `message`: `string`  }, { `code`: ``"NOT_IMPLEMENTED_BY_WALLET"`` ; `data`: { `methodId`: `string`  } ; `message`: `string`  }\>

#### Defined in

packages/core/lib/errors/types.d.ts:4

___

### schemaPermissionDenied

• `Const` **schemaPermissionDenied**: `z.ZodObject`<{ `code`: `z.ZodLiteral`<``"PERMISSION_DENIED"``\> ; `data`: `z.ZodObject`<{ `methodId`: `z.ZodString`  }, ``"strip"``, `z.ZodTypeAny`, { `methodId`: `string`  }, { `methodId`: `string`  }\> ; `message`: `z.ZodString`  }, ``"strip"``, `z.ZodTypeAny`, { `code`: ``"PERMISSION_DENIED"`` ; `data`: { `methodId`: `string`  } ; `message`: `string`  }, { `code`: ``"PERMISSION_DENIED"`` ; `data`: { `methodId`: `string`  } ; `message`: `string`  }\>

#### Defined in

packages/core/lib/errors/types.d.ts:76

___

### schemaRPCCall

• `Const` **schemaRPCCall**: `z.ZodUnion`<[`z.ZodObject`<{ `id`: `z.ZodOptional`<`z.ZodUnion`<[`z.ZodString`, `z.ZodNumber`, `z.ZodNull`]\>\> ; `jsonrpc`: `z.ZodLiteral`<``"2.0"``\> ; `method`: `z.ZodString` ; `params`: `z.ZodAny`  }, ``"strict"``, `z.ZodTypeAny`, { `id?`: `string` \| `number` \| ``null`` ; `jsonrpc`: ``"2.0"`` ; `method`: `string` ; `params?`: `any`  }, { `id?`: `string` \| `number` \| ``null`` ; `jsonrpc`: ``"2.0"`` ; `method`: `string` ; `params?`: `any`  }\>, `z.ZodUnion`<[`z.ZodObject`<{ `error`: `z.ZodObject`<{ `code`: `z.ZodNumber` ; `data`: `z.ZodOptional`<`z.ZodAny`\> ; `message`: `z.ZodString`  }, ``"strict"``, `z.ZodTypeAny`, { `code`: `number` ; `data?`: `any` ; `message`: `string`  }, { `code`: `number` ; `data?`: `any` ; `message`: `string`  }\> ; `id`: `z.ZodUnion`<[`z.ZodString`, `z.ZodNumber`, `z.ZodNull`]\> ; `jsonrpc`: `z.ZodLiteral`<``"2.0"``\>  }, ``"strict"``, `z.ZodTypeAny`, { `error`: { `code`: `number` ; `data?`: `any` ; `message`: `string`  } ; `id`: `string` \| `number` \| ``null`` ; `jsonrpc`: ``"2.0"``  }, { `error`: { `code`: `number` ; `data?`: `any` ; `message`: `string`  } ; `id`: `string` \| `number` \| ``null`` ; `jsonrpc`: ``"2.0"``  }\>, `z.ZodObject`<{ `id`: `z.ZodUnion`<[`z.ZodString`, `z.ZodNumber`, `z.ZodNull`]\> ; `jsonrpc`: `z.ZodLiteral`<``"2.0"``\> ; `result`: `z.ZodObject`<{}, ``"passthrough"``, `z.ZodTypeAny`, {}, {}\>  }, ``"strict"``, `z.ZodTypeAny`, { `id`: `string` \| `number` \| ``null`` ; `jsonrpc`: ``"2.0"`` ; `result`: {}  }, { `id`: `string` \| `number` \| ``null`` ; `jsonrpc`: ``"2.0"`` ; `result`: {}  }\>]\>]\>

#### Defined in

packages/core/lib/JSONRPC/validation.d.ts:122

___

### schemaRPCMethod

• `Const` **schemaRPCMethod**: `z.ZodEnum`<[``"account.list"``, ``"account.receive"``, ``"account.request"``, ``"currency.list"``, ``"device.close"``, ``"device.exchange"``, ``"device.transport"``, ``"message.sign"``, ``"transaction.sign"``, ``"transaction.signAndBroadcast"``, ``"wallet.capabilities"``, ``"wallet.info"``, ``"wallet.userId"``]\>

#### Defined in

packages/core/lib/spec/methods.d.ts:3

___

### schemaRPCRequest

• `Const` **schemaRPCRequest**: `z.ZodObject`<{ `id`: `z.ZodOptional`<`z.ZodUnion`<[`z.ZodString`, `z.ZodNumber`, `z.ZodNull`]\>\> ; `jsonrpc`: `z.ZodLiteral`<``"2.0"``\> ; `method`: `z.ZodString` ; `params`: `z.ZodAny`  }, ``"strict"``, `z.ZodTypeAny`, { `id?`: `string` \| `number` \| ``null`` ; `jsonrpc`: ``"2.0"`` ; `method`: `string` ; `params?`: `any`  }, { `id?`: `string` \| `number` \| ``null`` ; `jsonrpc`: ``"2.0"`` ; `method`: `string` ; `params?`: `any`  }\>

#### Defined in

packages/core/lib/JSONRPC/validation.d.ts:2

___

### schemaRPCResponse

• `Const` **schemaRPCResponse**: `z.ZodUnion`<[`z.ZodObject`<{ `error`: `z.ZodObject`<{ `code`: `z.ZodNumber` ; `data`: `z.ZodOptional`<`z.ZodAny`\> ; `message`: `z.ZodString`  }, ``"strict"``, `z.ZodTypeAny`, { `code`: `number` ; `data?`: `any` ; `message`: `string`  }, { `code`: `number` ; `data?`: `any` ; `message`: `string`  }\> ; `id`: `z.ZodUnion`<[`z.ZodString`, `z.ZodNumber`, `z.ZodNull`]\> ; `jsonrpc`: `z.ZodLiteral`<``"2.0"``\>  }, ``"strict"``, `z.ZodTypeAny`, { `error`: { `code`: `number` ; `data?`: `any` ; `message`: `string`  } ; `id`: `string` \| `number` \| ``null`` ; `jsonrpc`: ``"2.0"``  }, { `error`: { `code`: `number` ; `data?`: `any` ; `message`: `string`  } ; `id`: `string` \| `number` \| ``null`` ; `jsonrpc`: ``"2.0"``  }\>, `z.ZodObject`<{ `id`: `z.ZodUnion`<[`z.ZodString`, `z.ZodNumber`, `z.ZodNull`]\> ; `jsonrpc`: `z.ZodLiteral`<``"2.0"``\> ; `result`: `z.ZodObject`<{}, ``"passthrough"``, `z.ZodTypeAny`, {}, {}\>  }, ``"strict"``, `z.ZodTypeAny`, { `id`: `string` \| `number` \| ``null`` ; `jsonrpc`: ``"2.0"`` ; `result`: {}  }, { `id`: `string` \| `number` \| ``null`` ; `jsonrpc`: ``"2.0"`` ; `result`: {}  }\>]\>

#### Defined in

packages/core/lib/JSONRPC/validation.d.ts:77

___

### schemaRPCResponseError

• `Const` **schemaRPCResponseError**: `z.ZodObject`<{ `error`: `z.ZodObject`<{ `code`: `z.ZodNumber` ; `data`: `z.ZodOptional`<`z.ZodAny`\> ; `message`: `z.ZodString`  }, ``"strict"``, `z.ZodTypeAny`, { `code`: `number` ; `data?`: `any` ; `message`: `string`  }, { `code`: `number` ; `data?`: `any` ; `message`: `string`  }\> ; `id`: `z.ZodUnion`<[`z.ZodString`, `z.ZodNumber`, `z.ZodNull`]\> ; `jsonrpc`: `z.ZodLiteral`<``"2.0"``\>  }, ``"strict"``, `z.ZodTypeAny`, { `error`: { `code`: `number` ; `data?`: `any` ; `message`: `string`  } ; `id`: `string` \| `number` \| ``null`` ; `jsonrpc`: ``"2.0"``  }, { `error`: { `code`: `number` ; `data?`: `any` ; `message`: `string`  } ; `id`: `string` \| `number` \| ``null`` ; `jsonrpc`: ``"2.0"``  }\>

#### Defined in

packages/core/lib/JSONRPC/validation.d.ts:44

___

### schemaRPCResponseErrorData

• `Const` **schemaRPCResponseErrorData**: `z.ZodObject`<{ `code`: `z.ZodNumber` ; `data`: `z.ZodOptional`<`z.ZodAny`\> ; `message`: `z.ZodString`  }, ``"strict"``, `z.ZodTypeAny`, { `code`: `number` ; `data?`: `any` ; `message`: `string`  }, { `code`: `number` ; `data?`: `any` ; `message`: `string`  }\>

#### Defined in

packages/core/lib/JSONRPC/validation.d.ts:18

___

### schemaRPCResponseSuccess

• `Const` **schemaRPCResponseSuccess**: `z.ZodObject`<{ `id`: `z.ZodUnion`<[`z.ZodString`, `z.ZodNumber`, `z.ZodNull`]\> ; `jsonrpc`: `z.ZodLiteral`<``"2.0"``\> ; `result`: `z.ZodObject`<{}, ``"passthrough"``, `z.ZodTypeAny`, {}, {}\>  }, ``"strict"``, `z.ZodTypeAny`, { `id`: `string` \| `number` \| ``null`` ; `jsonrpc`: ``"2.0"`` ; `result`: {}  }, { `id`: `string` \| `number` \| ``null`` ; `jsonrpc`: ``"2.0"`` ; `result`: {}  }\>

#### Defined in

packages/core/lib/JSONRPC/validation.d.ts:31

___

### schemaRawAccount

• `Const` **schemaRawAccount**: `z.ZodObject`<{ `address`: `z.ZodString` ; `balance`: `z.ZodString` ; `blockHeight`: `z.ZodNumber` ; `currency`: `z.ZodString` ; `id`: `z.ZodString` ; `lastSyncDate`: `z.ZodString` ; `name`: `z.ZodString` ; `spendableBalance`: `z.ZodString`  }, ``"strip"``, `z.ZodTypeAny`, { `address`: `string` ; `balance`: `string` ; `blockHeight`: `number` ; `currency`: `string` ; `id`: `string` ; `lastSyncDate`: `string` ; `name`: `string` ; `spendableBalance`: `string`  }, { `address`: `string` ; `balance`: `string` ; `blockHeight`: `number` ; `currency`: `string` ; `id`: `string` ; `lastSyncDate`: `string` ; `name`: `string` ; `spendableBalance`: `string`  }\>

#### Defined in

packages/core/lib/accounts/validation.d.ts:2

___

### schemaRawTransaction

• `Const` **schemaRawTransaction**: `z.ZodDiscriminatedUnion`<``"family"``, `z.Primitive`, `z.ZodObject`<`z.extendShape`<{ `amount`: `z.ZodString` ; `recipient`: `z.ZodString`  }, { `assetId`: `z.ZodOptional`<`z.ZodString`\> ; `family`: `z.ZodLiteral`<``"algorand"``\> ; `fees`: `z.ZodOptional`<`z.ZodString`\> ; `memo`: `z.ZodOptional`<`z.ZodString`\> ; `mode`: `z.ZodEnum`<[``"send"``, ``"optIn"``, ``"claimReward"``, ``"optOut"``]\>  }\>, ``"strip"``, `z.ZodTypeAny`, { `amount`: `string` ; `assetId?`: `string` ; `family`: ``"algorand"`` ; `fees?`: `string` ; `memo?`: `string` ; `mode`: ``"send"`` \| ``"optIn"`` \| ``"claimReward"`` \| ``"optOut"`` ; `recipient`: `string`  }, { `amount`: `string` ; `assetId?`: `string` ; `family`: ``"algorand"`` ; `fees?`: `string` ; `memo?`: `string` ; `mode`: ``"send"`` \| ``"optIn"`` \| ``"claimReward"`` \| ``"optOut"`` ; `recipient`: `string`  }\> \| `z.ZodObject`<`z.extendShape`<{ `amount`: `z.ZodString` ; `recipient`: `z.ZodString`  }, { `family`: `z.ZodLiteral`<``"bitcoin"``\> ; `feePerByte`: `z.ZodOptional`<`z.ZodString`\>  }\>, ``"strip"``, `z.ZodTypeAny`, { `amount`: `string` ; `family`: ``"bitcoin"`` ; `feePerByte?`: `string` ; `recipient`: `string`  }, { `amount`: `string` ; `family`: ``"bitcoin"`` ; `feePerByte?`: `string` ; `recipient`: `string`  }\> \| `z.ZodObject`<`z.extendShape`<{ `amount`: `z.ZodString` ; `recipient`: `z.ZodString`  }, { `family`: `z.ZodLiteral`<``"cosmos"``\> ; `fees`: `z.ZodOptional`<`z.ZodString`\> ; `gas`: `z.ZodOptional`<`z.ZodString`\> ; `memo`: `z.ZodOptional`<`z.ZodString`\> ; `mode`: `z.ZodEnum`<[``"send"``, ``"delegate"``, ``"undelegate"``, ``"redelegate"``, ``"claimReward"``, ``"claimRewardCompound"``]\>  }\>, ``"strip"``, `z.ZodTypeAny`, { `amount`: `string` ; `family`: ``"cosmos"`` ; `fees?`: `string` ; `gas?`: `string` ; `memo?`: `string` ; `mode`: ``"send"`` \| ``"claimReward"`` \| ``"delegate"`` \| ``"undelegate"`` \| ``"redelegate"`` \| ``"claimRewardCompound"`` ; `recipient`: `string`  }, { `amount`: `string` ; `family`: ``"cosmos"`` ; `fees?`: `string` ; `gas?`: `string` ; `memo?`: `string` ; `mode`: ``"send"`` \| ``"claimReward"`` \| ``"delegate"`` \| ``"undelegate"`` \| ``"redelegate"`` \| ``"claimRewardCompound"`` ; `recipient`: `string`  }\> \| `z.ZodObject`<`z.extendShape`<{ `amount`: `z.ZodString` ; `recipient`: `z.ZodString`  }, { `family`: `z.ZodLiteral`<``"crypto_org"``\> ; `fees`: `z.ZodOptional`<`z.ZodString`\> ; `mode`: `z.ZodString`  }\>, ``"strip"``, `z.ZodTypeAny`, { `amount`: `string` ; `family`: ``"crypto_org"`` ; `fees?`: `string` ; `mode`: `string` ; `recipient`: `string`  }, { `amount`: `string` ; `family`: ``"crypto_org"`` ; `fees?`: `string` ; `mode`: `string` ; `recipient`: `string`  }\> \| `z.ZodObject`<`z.extendShape`<{ `amount`: `z.ZodString` ; `recipient`: `z.ZodString`  }, { `data`: `z.ZodOptional`<`z.ZodString`\> ; `family`: `z.ZodLiteral`<``"ethereum"``\> ; `gasLimit`: `z.ZodOptional`<`z.ZodString`\> ; `gasPrice`: `z.ZodOptional`<`z.ZodString`\> ; `nonce`: `z.ZodOptional`<`z.ZodNumber`\>  }\>, ``"strip"``, `z.ZodTypeAny`, { `amount`: `string` ; `data?`: `string` ; `family`: ``"ethereum"`` ; `gasLimit?`: `string` ; `gasPrice?`: `string` ; `nonce?`: `number` ; `recipient`: `string`  }, { `amount`: `string` ; `data?`: `string` ; `family`: ``"ethereum"`` ; `gasLimit?`: `string` ; `gasPrice?`: `string` ; `nonce?`: `number` ; `recipient`: `string`  }\> \| `z.ZodObject`<`z.extendShape`<{ `amount`: `z.ZodString` ; `recipient`: `z.ZodString`  }, { `era`: `z.ZodOptional`<`z.ZodNumber`\> ; `family`: `z.ZodLiteral`<``"polkadot"``\> ; `fee`: `z.ZodOptional`<`z.ZodString`\> ; `mode`: `z.ZodEnum`<[``"send"``, ``"bond"``, ``"unbond"``, ``"rebond"``, ``"withdrawUnbonded"``, ``"setController"``, ``"nominate"``, ``"chill"``, ``"claimReward"``]\>  }\>, ``"strip"``, `z.ZodTypeAny`, { `amount`: `string` ; `era?`: `number` ; `family`: ``"polkadot"`` ; `fee?`: `string` ; `mode`: ``"send"`` \| ``"claimReward"`` \| ``"bond"`` \| ``"unbond"`` \| ``"rebond"`` \| ``"withdrawUnbonded"`` \| ``"setController"`` \| ``"nominate"`` \| ``"chill"`` ; `recipient`: `string`  }, { `amount`: `string` ; `era?`: `number` ; `family`: ``"polkadot"`` ; `fee?`: `string` ; `mode`: ``"send"`` \| ``"claimReward"`` \| ``"bond"`` \| ``"unbond"`` \| ``"rebond"`` \| ``"withdrawUnbonded"`` \| ``"setController"`` \| ``"nominate"`` \| ``"chill"`` ; `recipient`: `string`  }\> \| `z.ZodObject`<`z.extendShape`<{ `amount`: `z.ZodString` ; `recipient`: `z.ZodString`  }, { `family`: `z.ZodLiteral`<``"ripple"``\> ; `fee`: `z.ZodOptional`<`z.ZodString`\> ; `tag`: `z.ZodNumber`  }\>, ``"strip"``, `z.ZodTypeAny`, { `amount`: `string` ; `family`: ``"ripple"`` ; `fee?`: `string` ; `recipient`: `string` ; `tag`: `number`  }, { `amount`: `string` ; `family`: ``"ripple"`` ; `fee?`: `string` ; `recipient`: `string` ; `tag`: `number`  }\> \| `z.ZodObject`<`z.extendShape`<{ `amount`: `z.ZodString` ; `recipient`: `z.ZodString`  }, { `family`: `z.ZodLiteral`<``"stellar"``\> ; `fees`: `z.ZodOptional`<`z.ZodString`\> ; `memoType`: `z.ZodOptional`<`z.ZodString`\> ; `memoValue`: `z.ZodOptional`<`z.ZodString`\>  }\>, ``"strip"``, `z.ZodTypeAny`, { `amount`: `string` ; `family`: ``"stellar"`` ; `fees?`: `string` ; `memoType?`: `string` ; `memoValue?`: `string` ; `recipient`: `string`  }, { `amount`: `string` ; `family`: ``"stellar"`` ; `fees?`: `string` ; `memoType?`: `string` ; `memoValue?`: `string` ; `recipient`: `string`  }\> \| `z.ZodObject`<`z.extendShape`<{ `amount`: `z.ZodString` ; `recipient`: `z.ZodString`  }, { `family`: `z.ZodLiteral`<``"tezos"``\> ; `fees`: `z.ZodOptional`<`z.ZodString`\> ; `gasLimit`: `z.ZodOptional`<`z.ZodString`\> ; `mode`: `z.ZodEnum`<[``"send"``, ``"delegate"``, ``"undelegate"``]\>  }\>, ``"strip"``, `z.ZodTypeAny`, { `amount`: `string` ; `family`: ``"tezos"`` ; `fees?`: `string` ; `gasLimit?`: `string` ; `mode`: ``"send"`` \| ``"delegate"`` \| ``"undelegate"`` ; `recipient`: `string`  }, { `amount`: `string` ; `family`: ``"tezos"`` ; `fees?`: `string` ; `gasLimit?`: `string` ; `mode`: ``"send"`` \| ``"delegate"`` \| ``"undelegate"`` ; `recipient`: `string`  }\> \| `z.ZodObject`<`z.extendShape`<{ `amount`: `z.ZodString` ; `recipient`: `z.ZodString`  }, { `duration`: `z.ZodOptional`<`z.ZodNumber`\> ; `family`: `z.ZodLiteral`<``"tron"``\> ; `mode`: `z.ZodEnum`<[``"send"``, ``"freeze"``, ``"unfreeze"``, ``"vote"``, ``"claimReward"``]\> ; `resource`: `z.ZodOptional`<`z.ZodEnum`<[``"BANDWIDTH"``, ``"ENERGY"``]\>\>  }\>, ``"strip"``, `z.ZodTypeAny`, { `amount`: `string` ; `duration?`: `number` ; `family`: ``"tron"`` ; `mode`: ``"send"`` \| ``"claimReward"`` \| ``"freeze"`` \| ``"unfreeze"`` \| ``"vote"`` ; `recipient`: `string` ; `resource?`: ``"BANDWIDTH"`` \| ``"ENERGY"``  }, { `amount`: `string` ; `duration?`: `number` ; `family`: ``"tron"`` ; `mode`: ``"send"`` \| ``"claimReward"`` \| ``"freeze"`` \| ``"unfreeze"`` \| ``"vote"`` ; `recipient`: `string` ; `resource?`: ``"BANDWIDTH"`` \| ``"ENERGY"``  }\>\>

#### Defined in

packages/core/lib/families/validation.d.ts:2

___

### schemaServerErrorCode

• `Const` **schemaServerErrorCode**: `z.ZodEnum`<[``"NOT_IMPLEMENTED_BY_WALLET"``, ``"ACCOUNT_NOT_FOUND"``, ``"CURRENCY_NOT_FOUND"``, ``"PERMISSION_DENIED"``, ``"UNKNOWN_ERROR"``, ``"UNAUTHORIZED_STORE"``]\>

#### Defined in

packages/core/lib/errors/types.d.ts:2

___

### schemaServerErrorData

• `Const` **schemaServerErrorData**: `z.ZodDiscriminatedUnion`<``"code"``, `z.Primitive`, `z.ZodObject`<{ `code`: `z.ZodLiteral`<``"NOT_IMPLEMENTED_BY_WALLET"``\> ; `data`: `z.ZodObject`<{ `methodId`: `z.ZodString`  }, ``"strip"``, `z.ZodTypeAny`, { `methodId`: `string`  }, { `methodId`: `string`  }\> ; `message`: `z.ZodString`  }, ``"strip"``, `z.ZodTypeAny`, { `code`: ``"NOT_IMPLEMENTED_BY_WALLET"`` ; `data`: { `methodId`: `string`  } ; `message`: `string`  }, { `code`: ``"NOT_IMPLEMENTED_BY_WALLET"`` ; `data`: { `methodId`: `string`  } ; `message`: `string`  }\> \| `z.ZodObject`<{ `code`: `z.ZodLiteral`<``"ACCOUNT_NOT_FOUND"``\> ; `data`: `z.ZodObject`<{ `accountId`: `z.ZodString`  }, ``"strip"``, `z.ZodTypeAny`, { `accountId`: `string`  }, { `accountId`: `string`  }\> ; `message`: `z.ZodString`  }, ``"strip"``, `z.ZodTypeAny`, { `code`: ``"ACCOUNT_NOT_FOUND"`` ; `data`: { `accountId`: `string`  } ; `message`: `string`  }, { `code`: ``"ACCOUNT_NOT_FOUND"`` ; `data`: { `accountId`: `string`  } ; `message`: `string`  }\> \| `z.ZodObject`<{ `code`: `z.ZodLiteral`<``"CURRENCY_NOT_FOUND"``\> ; `data`: `z.ZodObject`<{ `currencyId`: `z.ZodString`  }, ``"strip"``, `z.ZodTypeAny`, { `currencyId`: `string`  }, { `currencyId`: `string`  }\> ; `message`: `z.ZodString`  }, ``"strip"``, `z.ZodTypeAny`, { `code`: ``"CURRENCY_NOT_FOUND"`` ; `data`: { `currencyId`: `string`  } ; `message`: `string`  }, { `code`: ``"CURRENCY_NOT_FOUND"`` ; `data`: { `currencyId`: `string`  } ; `message`: `string`  }\> \| `z.ZodObject`<{ `code`: `z.ZodLiteral`<``"PERMISSION_DENIED"``\> ; `data`: `z.ZodObject`<{ `methodId`: `z.ZodString`  }, ``"strip"``, `z.ZodTypeAny`, { `methodId`: `string`  }, { `methodId`: `string`  }\> ; `message`: `z.ZodString`  }, ``"strip"``, `z.ZodTypeAny`, { `code`: ``"PERMISSION_DENIED"`` ; `data`: { `methodId`: `string`  } ; `message`: `string`  }, { `code`: ``"PERMISSION_DENIED"`` ; `data`: { `methodId`: `string`  } ; `message`: `string`  }\> \| `z.ZodObject`<{ `code`: `z.ZodLiteral`<``"UNKNOWN_ERROR"``\> ; `data`: `z.ZodObject`<{ `cause`: `z.ZodOptional`<`z.ZodUnknown`\> ; `code`: `z.ZodOptional`<`z.ZodString`\> ; `message`: `z.ZodOptional`<`z.ZodString`\> ; `name`: `z.ZodOptional`<`z.ZodString`\> ; `stack`: `z.ZodOptional`<`z.ZodString`\>  }, ``"strip"``, `z.ZodTypeAny`, { `cause?`: `unknown` ; `code?`: `string` ; `message?`: `string` ; `name?`: `string` ; `stack?`: `string`  }, { `cause?`: `unknown` ; `code?`: `string` ; `message?`: `string` ; `name?`: `string` ; `stack?`: `string`  }\> ; `message`: `z.ZodString`  }, ``"strip"``, `z.ZodTypeAny`, { `code`: ``"UNKNOWN_ERROR"`` ; `data`: { `cause?`: `unknown` ; `code?`: `string` ; `message?`: `string` ; `name?`: `string` ; `stack?`: `string`  } ; `message`: `string`  }, { `code`: ``"UNKNOWN_ERROR"`` ; `data`: { `cause?`: `unknown` ; `code?`: `string` ; `message?`: `string` ; `name?`: `string` ; `stack?`: `string`  } ; `message`: `string`  }\> \| `z.ZodObject`<{ `code`: `z.ZodLiteral`<``"UNAUTHORIZED_STORE"``\> ; `data`: `z.ZodObject`<{ `storeId`: `z.ZodString`  }, ``"strip"``, `z.ZodTypeAny`, { `storeId`: `string`  }, { `storeId`: `string`  }\> ; `message`: `z.ZodString`  }, ``"strip"``, `z.ZodTypeAny`, { `code`: ``"UNAUTHORIZED_STORE"`` ; `data`: { `storeId`: `string`  } ; `message`: `string`  }, { `code`: ``"UNAUTHORIZED_STORE"`` ; `data`: { `storeId`: `string`  } ; `message`: `string`  }\>\>

#### Defined in

packages/core/lib/errors/types.d.ts:168

___

### schemaStorageGet

• `Const` **schemaStorageGet**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `params` | `z.ZodObject`<{ `key`: `z.ZodString` ; `storeId`: `z.ZodOptional`<`z.ZodString`\>  }, ``"strip"``, `z.ZodTypeAny`, { `key`: `string` ; `storeId?`: `string`  }, { `key`: `string` ; `storeId?`: `string`  }\> |
| `result` | `z.ZodObject`<{ `value`: `z.ZodOptional`<`z.ZodString`\>  }, ``"strip"``, `z.ZodTypeAny`, { `value?`: `string`  }, { `value?`: `string`  }\> |

#### Defined in

packages/core/lib/spec/types/StorageGet.d.ts:19

___

### schemaStorageSet

• `Const` **schemaStorageSet**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `params` | `z.ZodObject`<{ `key`: `z.ZodString` ; `storeId`: `z.ZodOptional`<`z.ZodString`\> ; `value`: `z.ZodString`  }, ``"strip"``, `z.ZodTypeAny`, { `key`: `string` ; `storeId?`: `string` ; `value`: `string`  }, { `key`: `string` ; `storeId?`: `string` ; `value`: `string`  }\> |
| `result` | `z.ZodVoid` |

#### Defined in

packages/core/lib/spec/types/StorageSet.d.ts:16

___

### schemaTokenCurrency

• `Const` **schemaTokenCurrency**: `z.ZodObject`<`z.extendShape`<{ `color`: `z.ZodString` ; `decimals`: `z.ZodNumber` ; `id`: `z.ZodString` ; `name`: `z.ZodString` ; `ticker`: `z.ZodString`  }, { `parent`: `z.ZodString` ; `type`: `z.ZodLiteral`<``"TokenCurrency"``\>  }\>, ``"strip"``, `z.ZodTypeAny`, { `color`: `string` ; `decimals`: `number` ; `id`: `string` ; `name`: `string` ; `parent`: `string` ; `ticker`: `string` ; `type`: ``"TokenCurrency"``  }, { `color`: `string` ; `decimals`: `number` ; `id`: `string` ; `name`: `string` ; `parent`: `string` ; `ticker`: `string` ; `type`: ``"TokenCurrency"``  }\>

#### Defined in

packages/core/lib/currencies/validation.d.ts:49

___

### schemaTokenStandard

• `Const` **schemaTokenStandard**: `z.ZodEnum`<[``"ERC20"``]\>

#### Defined in

packages/core/lib/currencies/validation.d.ts:3

___

### schemaTransactionCommon

• `Const` **schemaTransactionCommon**: `z.ZodObject`<{ `amount`: `z.ZodString` ; `recipient`: `z.ZodString`  }, ``"strip"``, `z.ZodTypeAny`, { `amount`: `string` ; `recipient`: `string`  }, { `amount`: `string` ; `recipient`: `string`  }\>

#### Defined in

packages/core/lib/families/common.d.ts:2

___

### schemaTransactionSign

• `Const` **schemaTransactionSign**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `params` | `z.ZodObject`<{ `accountId`: `z.ZodString` ; `options`: `z.ZodOptional`<`z.ZodObject`<{ `hwAppId`: `z.ZodOptional`<`z.ZodString`\>  }, ``"strip"``, `z.ZodTypeAny`, { `hwAppId?`: `string`  }, { `hwAppId?`: `string`  }\>\> ; `rawTransaction`: `z.ZodDiscriminatedUnion`<``"family"``, `z.Primitive`, `z.ZodObject`<`z.extendShape`<{ `amount`: `z.ZodString` ; `recipient`: `z.ZodString`  }, { `assetId`: `z.ZodOptional`<`z.ZodString`\> ; `family`: `z.ZodLiteral`<``"algorand"``\> ; `fees`: `z.ZodOptional`<`z.ZodString`\> ; `memo`: `z.ZodOptional`<`z.ZodString`\> ; `mode`: `z.ZodEnum`<[``"send"``, ``"optIn"``, ``"claimReward"``, ``"optOut"``]\>  }\>, ``"strip"``, `z.ZodTypeAny`, { `amount`: `string` ; `assetId?`: `string` ; `family`: ``"algorand"`` ; `fees?`: `string` ; `memo?`: `string` ; `mode`: ``"send"`` \| ``"optIn"`` \| ``"claimReward"`` \| ``"optOut"`` ; `recipient`: `string`  }, { `amount`: `string` ; `assetId?`: `string` ; `family`: ``"algorand"`` ; `fees?`: `string` ; `memo?`: `string` ; `mode`: ``"send"`` \| ``"optIn"`` \| ``"claimReward"`` \| ``"optOut"`` ; `recipient`: `string`  }\> \| `z.ZodObject`<`z.extendShape`<{ `amount`: `z.ZodString` ; `recipient`: `z.ZodString`  }, { `family`: `z.ZodLiteral`<``"bitcoin"``\> ; `feePerByte`: `z.ZodOptional`<`z.ZodString`\>  }\>, ``"strip"``, `z.ZodTypeAny`, { `amount`: `string` ; `family`: ``"bitcoin"`` ; `feePerByte?`: `string` ; `recipient`: `string`  }, { `amount`: `string` ; `family`: ``"bitcoin"`` ; `feePerByte?`: `string` ; `recipient`: `string`  }\> \| `z.ZodObject`<`z.extendShape`<{ `amount`: `z.ZodString` ; `recipient`: `z.ZodString`  }, { `family`: `z.ZodLiteral`<``"cosmos"``\> ; `fees`: `z.ZodOptional`<`z.ZodString`\> ; `gas`: `z.ZodOptional`<`z.ZodString`\> ; `memo`: `z.ZodOptional`<`z.ZodString`\> ; `mode`: `z.ZodEnum`<[``"send"``, ``"delegate"``, ``"undelegate"``, ``"redelegate"``, ``"claimReward"``, ``"claimRewardCompound"``]\>  }\>, ``"strip"``, `z.ZodTypeAny`, { `amount`: `string` ; `family`: ``"cosmos"`` ; `fees?`: `string` ; `gas?`: `string` ; `memo?`: `string` ; `mode`: ``"send"`` \| ``"claimReward"`` \| ``"delegate"`` \| ``"undelegate"`` \| ``"redelegate"`` \| ``"claimRewardCompound"`` ; `recipient`: `string`  }, { `amount`: `string` ; `family`: ``"cosmos"`` ; `fees?`: `string` ; `gas?`: `string` ; `memo?`: `string` ; `mode`: ``"send"`` \| ``"claimReward"`` \| ``"delegate"`` \| ``"undelegate"`` \| ``"redelegate"`` \| ``"claimRewardCompound"`` ; `recipient`: `string`  }\> \| `z.ZodObject`<`z.extendShape`<{ `amount`: `z.ZodString` ; `recipient`: `z.ZodString`  }, { `family`: `z.ZodLiteral`<``"crypto_org"``\> ; `fees`: `z.ZodOptional`<`z.ZodString`\> ; `mode`: `z.ZodString`  }\>, ``"strip"``, `z.ZodTypeAny`, { `amount`: `string` ; `family`: ``"crypto_org"`` ; `fees?`: `string` ; `mode`: `string` ; `recipient`: `string`  }, { `amount`: `string` ; `family`: ``"crypto_org"`` ; `fees?`: `string` ; `mode`: `string` ; `recipient`: `string`  }\> \| `z.ZodObject`<`z.extendShape`<{ `amount`: `z.ZodString` ; `recipient`: `z.ZodString`  }, { `data`: `z.ZodOptional`<`z.ZodString`\> ; `family`: `z.ZodLiteral`<``"ethereum"``\> ; `gasLimit`: `z.ZodOptional`<`z.ZodString`\> ; `gasPrice`: `z.ZodOptional`<`z.ZodString`\> ; `nonce`: `z.ZodOptional`<`z.ZodNumber`\>  }\>, ``"strip"``, `z.ZodTypeAny`, { `amount`: `string` ; `data?`: `string` ; `family`: ``"ethereum"`` ; `gasLimit?`: `string` ; `gasPrice?`: `string` ; `nonce?`: `number` ; `recipient`: `string`  }, { `amount`: `string` ; `data?`: `string` ; `family`: ``"ethereum"`` ; `gasLimit?`: `string` ; `gasPrice?`: `string` ; `nonce?`: `number` ; `recipient`: `string`  }\> \| `z.ZodObject`<`z.extendShape`<{ `amount`: `z.ZodString` ; `recipient`: `z.ZodString`  }, { `era`: `z.ZodOptional`<`z.ZodNumber`\> ; `family`: `z.ZodLiteral`<``"polkadot"``\> ; `fee`: `z.ZodOptional`<`z.ZodString`\> ; `mode`: `z.ZodEnum`<[``"send"``, ``"bond"``, ``"unbond"``, ``"rebond"``, ``"withdrawUnbonded"``, ``"setController"``, ``"nominate"``, ``"chill"``, ``"claimReward"``]\>  }\>, ``"strip"``, `z.ZodTypeAny`, { `amount`: `string` ; `era?`: `number` ; `family`: ``"polkadot"`` ; `fee?`: `string` ; `mode`: ``"send"`` \| ``"claimReward"`` \| ``"bond"`` \| ``"unbond"`` \| ``"rebond"`` \| ``"withdrawUnbonded"`` \| ``"setController"`` \| ``"nominate"`` \| ``"chill"`` ; `recipient`: `string`  }, { `amount`: `string` ; `era?`: `number` ; `family`: ``"polkadot"`` ; `fee?`: `string` ; `mode`: ``"send"`` \| ``"claimReward"`` \| ``"bond"`` \| ``"unbond"`` \| ``"rebond"`` \| ``"withdrawUnbonded"`` \| ``"setController"`` \| ``"nominate"`` \| ``"chill"`` ; `recipient`: `string`  }\> \| `z.ZodObject`<`z.extendShape`<{ `amount`: `z.ZodString` ; `recipient`: `z.ZodString`  }, { `family`: `z.ZodLiteral`<``"ripple"``\> ; `fee`: `z.ZodOptional`<`z.ZodString`\> ; `tag`: `z.ZodNumber`  }\>, ``"strip"``, `z.ZodTypeAny`, { `amount`: `string` ; `family`: ``"ripple"`` ; `fee?`: `string` ; `recipient`: `string` ; `tag`: `number`  }, { `amount`: `string` ; `family`: ``"ripple"`` ; `fee?`: `string` ; `recipient`: `string` ; `tag`: `number`  }\> \| `z.ZodObject`<`z.extendShape`<{ `amount`: `z.ZodString` ; `recipient`: `z.ZodString`  }, { `family`: `z.ZodLiteral`<``"stellar"``\> ; `fees`: `z.ZodOptional`<`z.ZodString`\> ; `memoType`: `z.ZodOptional`<`z.ZodString`\> ; `memoValue`: `z.ZodOptional`<`z.ZodString`\>  }\>, ``"strip"``, `z.ZodTypeAny`, { `amount`: `string` ; `family`: ``"stellar"`` ; `fees?`: `string` ; `memoType?`: `string` ; `memoValue?`: `string` ; `recipient`: `string`  }, { `amount`: `string` ; `family`: ``"stellar"`` ; `fees?`: `string` ; `memoType?`: `string` ; `memoValue?`: `string` ; `recipient`: `string`  }\> \| `z.ZodObject`<`z.extendShape`<{ `amount`: `z.ZodString` ; `recipient`: `z.ZodString`  }, { `family`: `z.ZodLiteral`<``"tezos"``\> ; `fees`: `z.ZodOptional`<`z.ZodString`\> ; `gasLimit`: `z.ZodOptional`<`z.ZodString`\> ; `mode`: `z.ZodEnum`<[``"send"``, ``"delegate"``, ``"undelegate"``]\>  }\>, ``"strip"``, `z.ZodTypeAny`, { `amount`: `string` ; `family`: ``"tezos"`` ; `fees?`: `string` ; `gasLimit?`: `string` ; `mode`: ``"send"`` \| ``"delegate"`` \| ``"undelegate"`` ; `recipient`: `string`  }, { `amount`: `string` ; `family`: ``"tezos"`` ; `fees?`: `string` ; `gasLimit?`: `string` ; `mode`: ``"send"`` \| ``"delegate"`` \| ``"undelegate"`` ; `recipient`: `string`  }\> \| `z.ZodObject`<`z.extendShape`<{ `amount`: `z.ZodString` ; `recipient`: `z.ZodString`  }, { `duration`: `z.ZodOptional`<`z.ZodNumber`\> ; `family`: `z.ZodLiteral`<``"tron"``\> ; `mode`: `z.ZodEnum`<[``"send"``, ``"freeze"``, ``"unfreeze"``, ``"vote"``, ``"claimReward"``]\> ; `resource`: `z.ZodOptional`<`z.ZodEnum`<[``"BANDWIDTH"``, ``"ENERGY"``]\>\>  }\>, ``"strip"``, `z.ZodTypeAny`, { `amount`: `string` ; `duration?`: `number` ; `family`: ``"tron"`` ; `mode`: ``"send"`` \| ``"claimReward"`` \| ``"freeze"`` \| ``"unfreeze"`` \| ``"vote"`` ; `recipient`: `string` ; `resource?`: ``"BANDWIDTH"`` \| ``"ENERGY"``  }, { `amount`: `string` ; `duration?`: `number` ; `family`: ``"tron"`` ; `mode`: ``"send"`` \| ``"claimReward"`` \| ``"freeze"`` \| ``"unfreeze"`` \| ``"vote"`` ; `recipient`: `string` ; `resource?`: ``"BANDWIDTH"`` \| ``"ENERGY"``  }\>\>  }, ``"strip"``, `z.ZodTypeAny`, { `accountId`: `string` ; `options?`: { `hwAppId?`: `string`  } ; `rawTransaction`: { `amount`: `string` ; `assetId?`: `string` ; `family`: ``"algorand"`` ; `fees?`: `string` ; `memo?`: `string` ; `mode`: ``"send"`` \| ``"optIn"`` \| ``"claimReward"`` \| ``"optOut"`` ; `recipient`: `string`  } \| { `amount`: `string` ; `family`: ``"bitcoin"`` ; `feePerByte?`: `string` ; `recipient`: `string`  } \| { `amount`: `string` ; `family`: ``"cosmos"`` ; `fees?`: `string` ; `gas?`: `string` ; `memo?`: `string` ; `mode`: ``"send"`` \| ``"claimReward"`` \| ``"delegate"`` \| ``"undelegate"`` \| ``"redelegate"`` \| ``"claimRewardCompound"`` ; `recipient`: `string`  } \| { `amount`: `string` ; `family`: ``"crypto_org"`` ; `fees?`: `string` ; `mode`: `string` ; `recipient`: `string`  } \| { `amount`: `string` ; `data?`: `string` ; `family`: ``"ethereum"`` ; `gasLimit?`: `string` ; `gasPrice?`: `string` ; `nonce?`: `number` ; `recipient`: `string`  } \| { `amount`: `string` ; `era?`: `number` ; `family`: ``"polkadot"`` ; `fee?`: `string` ; `mode`: ``"send"`` \| ``"claimReward"`` \| ``"bond"`` \| ``"unbond"`` \| ``"rebond"`` \| ``"withdrawUnbonded"`` \| ``"setController"`` \| ``"nominate"`` \| ``"chill"`` ; `recipient`: `string`  } \| { `amount`: `string` ; `family`: ``"ripple"`` ; `fee?`: `string` ; `recipient`: `string` ; `tag`: `number`  } \| { `amount`: `string` ; `family`: ``"stellar"`` ; `fees?`: `string` ; `memoType?`: `string` ; `memoValue?`: `string` ; `recipient`: `string`  } \| { `amount`: `string` ; `family`: ``"tezos"`` ; `fees?`: `string` ; `gasLimit?`: `string` ; `mode`: ``"send"`` \| ``"delegate"`` \| ``"undelegate"`` ; `recipient`: `string`  } \| { `amount`: `string` ; `duration?`: `number` ; `family`: ``"tron"`` ; `mode`: ``"send"`` \| ``"claimReward"`` \| ``"freeze"`` \| ``"unfreeze"`` \| ``"vote"`` ; `recipient`: `string` ; `resource?`: ``"BANDWIDTH"`` \| ``"ENERGY"``  }  }, { `accountId`: `string` ; `options?`: { `hwAppId?`: `string`  } ; `rawTransaction`: { `amount`: `string` ; `assetId?`: `string` ; `family`: ``"algorand"`` ; `fees?`: `string` ; `memo?`: `string` ; `mode`: ``"send"`` \| ``"optIn"`` \| ``"claimReward"`` \| ``"optOut"`` ; `recipient`: `string`  } \| { `amount`: `string` ; `family`: ``"bitcoin"`` ; `feePerByte?`: `string` ; `recipient`: `string`  } \| { `amount`: `string` ; `family`: ``"cosmos"`` ; `fees?`: `string` ; `gas?`: `string` ; `memo?`: `string` ; `mode`: ``"send"`` \| ``"claimReward"`` \| ``"delegate"`` \| ``"undelegate"`` \| ``"redelegate"`` \| ``"claimRewardCompound"`` ; `recipient`: `string`  } \| { `amount`: `string` ; `family`: ``"crypto_org"`` ; `fees?`: `string` ; `mode`: `string` ; `recipient`: `string`  } \| { `amount`: `string` ; `data?`: `string` ; `family`: ``"ethereum"`` ; `gasLimit?`: `string` ; `gasPrice?`: `string` ; `nonce?`: `number` ; `recipient`: `string`  } \| { `amount`: `string` ; `era?`: `number` ; `family`: ``"polkadot"`` ; `fee?`: `string` ; `mode`: ``"send"`` \| ``"claimReward"`` \| ``"bond"`` \| ``"unbond"`` \| ``"rebond"`` \| ``"withdrawUnbonded"`` \| ``"setController"`` \| ``"nominate"`` \| ``"chill"`` ; `recipient`: `string`  } \| { `amount`: `string` ; `family`: ``"ripple"`` ; `fee?`: `string` ; `recipient`: `string` ; `tag`: `number`  } \| { `amount`: `string` ; `family`: ``"stellar"`` ; `fees?`: `string` ; `memoType?`: `string` ; `memoValue?`: `string` ; `recipient`: `string`  } \| { `amount`: `string` ; `family`: ``"tezos"`` ; `fees?`: `string` ; `gasLimit?`: `string` ; `mode`: ``"send"`` \| ``"delegate"`` \| ``"undelegate"`` ; `recipient`: `string`  } \| { `amount`: `string` ; `duration?`: `number` ; `family`: ``"tron"`` ; `mode`: ``"send"`` \| ``"claimReward"`` \| ``"freeze"`` \| ``"unfreeze"`` \| ``"vote"`` ; `recipient`: `string` ; `resource?`: ``"BANDWIDTH"`` \| ``"ENERGY"``  }  }\> |
| `result` | `z.ZodObject`<{ `signedTransactionHex`: `z.ZodString`  }, ``"strip"``, `z.ZodTypeAny`, { `signedTransactionHex`: `string`  }, { `signedTransactionHex`: `string`  }\> |

#### Defined in

packages/core/lib/spec/types/TransactionSign.d.ts:387

___

### schemaTransactionSignAndBroadcast

• `Const` **schemaTransactionSignAndBroadcast**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `params` | `z.ZodObject`<{ `accountId`: `z.ZodString` ; `options`: `z.ZodOptional`<`z.ZodObject`<{ `hwAppId`: `z.ZodOptional`<`z.ZodString`\>  }, ``"strip"``, `z.ZodTypeAny`, { `hwAppId?`: `string`  }, { `hwAppId?`: `string`  }\>\> ; `rawTransaction`: `z.ZodDiscriminatedUnion`<``"family"``, `z.Primitive`, `z.ZodObject`<`z.extendShape`<{ `amount`: `z.ZodString` ; `recipient`: `z.ZodString`  }, { `assetId`: `z.ZodOptional`<`z.ZodString`\> ; `family`: `z.ZodLiteral`<``"algorand"``\> ; `fees`: `z.ZodOptional`<`z.ZodString`\> ; `memo`: `z.ZodOptional`<`z.ZodString`\> ; `mode`: `z.ZodEnum`<[``"send"``, ``"optIn"``, ``"claimReward"``, ``"optOut"``]\>  }\>, ``"strip"``, `z.ZodTypeAny`, { `amount`: `string` ; `assetId?`: `string` ; `family`: ``"algorand"`` ; `fees?`: `string` ; `memo?`: `string` ; `mode`: ``"send"`` \| ``"optIn"`` \| ``"claimReward"`` \| ``"optOut"`` ; `recipient`: `string`  }, { `amount`: `string` ; `assetId?`: `string` ; `family`: ``"algorand"`` ; `fees?`: `string` ; `memo?`: `string` ; `mode`: ``"send"`` \| ``"optIn"`` \| ``"claimReward"`` \| ``"optOut"`` ; `recipient`: `string`  }\> \| `z.ZodObject`<`z.extendShape`<{ `amount`: `z.ZodString` ; `recipient`: `z.ZodString`  }, { `family`: `z.ZodLiteral`<``"bitcoin"``\> ; `feePerByte`: `z.ZodOptional`<`z.ZodString`\>  }\>, ``"strip"``, `z.ZodTypeAny`, { `amount`: `string` ; `family`: ``"bitcoin"`` ; `feePerByte?`: `string` ; `recipient`: `string`  }, { `amount`: `string` ; `family`: ``"bitcoin"`` ; `feePerByte?`: `string` ; `recipient`: `string`  }\> \| `z.ZodObject`<`z.extendShape`<{ `amount`: `z.ZodString` ; `recipient`: `z.ZodString`  }, { `family`: `z.ZodLiteral`<``"cosmos"``\> ; `fees`: `z.ZodOptional`<`z.ZodString`\> ; `gas`: `z.ZodOptional`<`z.ZodString`\> ; `memo`: `z.ZodOptional`<`z.ZodString`\> ; `mode`: `z.ZodEnum`<[``"send"``, ``"delegate"``, ``"undelegate"``, ``"redelegate"``, ``"claimReward"``, ``"claimRewardCompound"``]\>  }\>, ``"strip"``, `z.ZodTypeAny`, { `amount`: `string` ; `family`: ``"cosmos"`` ; `fees?`: `string` ; `gas?`: `string` ; `memo?`: `string` ; `mode`: ``"send"`` \| ``"claimReward"`` \| ``"delegate"`` \| ``"undelegate"`` \| ``"redelegate"`` \| ``"claimRewardCompound"`` ; `recipient`: `string`  }, { `amount`: `string` ; `family`: ``"cosmos"`` ; `fees?`: `string` ; `gas?`: `string` ; `memo?`: `string` ; `mode`: ``"send"`` \| ``"claimReward"`` \| ``"delegate"`` \| ``"undelegate"`` \| ``"redelegate"`` \| ``"claimRewardCompound"`` ; `recipient`: `string`  }\> \| `z.ZodObject`<`z.extendShape`<{ `amount`: `z.ZodString` ; `recipient`: `z.ZodString`  }, { `family`: `z.ZodLiteral`<``"crypto_org"``\> ; `fees`: `z.ZodOptional`<`z.ZodString`\> ; `mode`: `z.ZodString`  }\>, ``"strip"``, `z.ZodTypeAny`, { `amount`: `string` ; `family`: ``"crypto_org"`` ; `fees?`: `string` ; `mode`: `string` ; `recipient`: `string`  }, { `amount`: `string` ; `family`: ``"crypto_org"`` ; `fees?`: `string` ; `mode`: `string` ; `recipient`: `string`  }\> \| `z.ZodObject`<`z.extendShape`<{ `amount`: `z.ZodString` ; `recipient`: `z.ZodString`  }, { `data`: `z.ZodOptional`<`z.ZodString`\> ; `family`: `z.ZodLiteral`<``"ethereum"``\> ; `gasLimit`: `z.ZodOptional`<`z.ZodString`\> ; `gasPrice`: `z.ZodOptional`<`z.ZodString`\> ; `nonce`: `z.ZodOptional`<`z.ZodNumber`\>  }\>, ``"strip"``, `z.ZodTypeAny`, { `amount`: `string` ; `data?`: `string` ; `family`: ``"ethereum"`` ; `gasLimit?`: `string` ; `gasPrice?`: `string` ; `nonce?`: `number` ; `recipient`: `string`  }, { `amount`: `string` ; `data?`: `string` ; `family`: ``"ethereum"`` ; `gasLimit?`: `string` ; `gasPrice?`: `string` ; `nonce?`: `number` ; `recipient`: `string`  }\> \| `z.ZodObject`<`z.extendShape`<{ `amount`: `z.ZodString` ; `recipient`: `z.ZodString`  }, { `era`: `z.ZodOptional`<`z.ZodNumber`\> ; `family`: `z.ZodLiteral`<``"polkadot"``\> ; `fee`: `z.ZodOptional`<`z.ZodString`\> ; `mode`: `z.ZodEnum`<[``"send"``, ``"bond"``, ``"unbond"``, ``"rebond"``, ``"withdrawUnbonded"``, ``"setController"``, ``"nominate"``, ``"chill"``, ``"claimReward"``]\>  }\>, ``"strip"``, `z.ZodTypeAny`, { `amount`: `string` ; `era?`: `number` ; `family`: ``"polkadot"`` ; `fee?`: `string` ; `mode`: ``"send"`` \| ``"claimReward"`` \| ``"bond"`` \| ``"unbond"`` \| ``"rebond"`` \| ``"withdrawUnbonded"`` \| ``"setController"`` \| ``"nominate"`` \| ``"chill"`` ; `recipient`: `string`  }, { `amount`: `string` ; `era?`: `number` ; `family`: ``"polkadot"`` ; `fee?`: `string` ; `mode`: ``"send"`` \| ``"claimReward"`` \| ``"bond"`` \| ``"unbond"`` \| ``"rebond"`` \| ``"withdrawUnbonded"`` \| ``"setController"`` \| ``"nominate"`` \| ``"chill"`` ; `recipient`: `string`  }\> \| `z.ZodObject`<`z.extendShape`<{ `amount`: `z.ZodString` ; `recipient`: `z.ZodString`  }, { `family`: `z.ZodLiteral`<``"ripple"``\> ; `fee`: `z.ZodOptional`<`z.ZodString`\> ; `tag`: `z.ZodNumber`  }\>, ``"strip"``, `z.ZodTypeAny`, { `amount`: `string` ; `family`: ``"ripple"`` ; `fee?`: `string` ; `recipient`: `string` ; `tag`: `number`  }, { `amount`: `string` ; `family`: ``"ripple"`` ; `fee?`: `string` ; `recipient`: `string` ; `tag`: `number`  }\> \| `z.ZodObject`<`z.extendShape`<{ `amount`: `z.ZodString` ; `recipient`: `z.ZodString`  }, { `family`: `z.ZodLiteral`<``"stellar"``\> ; `fees`: `z.ZodOptional`<`z.ZodString`\> ; `memoType`: `z.ZodOptional`<`z.ZodString`\> ; `memoValue`: `z.ZodOptional`<`z.ZodString`\>  }\>, ``"strip"``, `z.ZodTypeAny`, { `amount`: `string` ; `family`: ``"stellar"`` ; `fees?`: `string` ; `memoType?`: `string` ; `memoValue?`: `string` ; `recipient`: `string`  }, { `amount`: `string` ; `family`: ``"stellar"`` ; `fees?`: `string` ; `memoType?`: `string` ; `memoValue?`: `string` ; `recipient`: `string`  }\> \| `z.ZodObject`<`z.extendShape`<{ `amount`: `z.ZodString` ; `recipient`: `z.ZodString`  }, { `family`: `z.ZodLiteral`<``"tezos"``\> ; `fees`: `z.ZodOptional`<`z.ZodString`\> ; `gasLimit`: `z.ZodOptional`<`z.ZodString`\> ; `mode`: `z.ZodEnum`<[``"send"``, ``"delegate"``, ``"undelegate"``]\>  }\>, ``"strip"``, `z.ZodTypeAny`, { `amount`: `string` ; `family`: ``"tezos"`` ; `fees?`: `string` ; `gasLimit?`: `string` ; `mode`: ``"send"`` \| ``"delegate"`` \| ``"undelegate"`` ; `recipient`: `string`  }, { `amount`: `string` ; `family`: ``"tezos"`` ; `fees?`: `string` ; `gasLimit?`: `string` ; `mode`: ``"send"`` \| ``"delegate"`` \| ``"undelegate"`` ; `recipient`: `string`  }\> \| `z.ZodObject`<`z.extendShape`<{ `amount`: `z.ZodString` ; `recipient`: `z.ZodString`  }, { `duration`: `z.ZodOptional`<`z.ZodNumber`\> ; `family`: `z.ZodLiteral`<``"tron"``\> ; `mode`: `z.ZodEnum`<[``"send"``, ``"freeze"``, ``"unfreeze"``, ``"vote"``, ``"claimReward"``]\> ; `resource`: `z.ZodOptional`<`z.ZodEnum`<[``"BANDWIDTH"``, ``"ENERGY"``]\>\>  }\>, ``"strip"``, `z.ZodTypeAny`, { `amount`: `string` ; `duration?`: `number` ; `family`: ``"tron"`` ; `mode`: ``"send"`` \| ``"claimReward"`` \| ``"freeze"`` \| ``"unfreeze"`` \| ``"vote"`` ; `recipient`: `string` ; `resource?`: ``"BANDWIDTH"`` \| ``"ENERGY"``  }, { `amount`: `string` ; `duration?`: `number` ; `family`: ``"tron"`` ; `mode`: ``"send"`` \| ``"claimReward"`` \| ``"freeze"`` \| ``"unfreeze"`` \| ``"vote"`` ; `recipient`: `string` ; `resource?`: ``"BANDWIDTH"`` \| ``"ENERGY"``  }\>\>  }, ``"strip"``, `z.ZodTypeAny`, { `accountId`: `string` ; `options?`: { `hwAppId?`: `string`  } ; `rawTransaction`: { `amount`: `string` ; `assetId?`: `string` ; `family`: ``"algorand"`` ; `fees?`: `string` ; `memo?`: `string` ; `mode`: ``"send"`` \| ``"optIn"`` \| ``"claimReward"`` \| ``"optOut"`` ; `recipient`: `string`  } \| { `amount`: `string` ; `family`: ``"bitcoin"`` ; `feePerByte?`: `string` ; `recipient`: `string`  } \| { `amount`: `string` ; `family`: ``"cosmos"`` ; `fees?`: `string` ; `gas?`: `string` ; `memo?`: `string` ; `mode`: ``"send"`` \| ``"claimReward"`` \| ``"delegate"`` \| ``"undelegate"`` \| ``"redelegate"`` \| ``"claimRewardCompound"`` ; `recipient`: `string`  } \| { `amount`: `string` ; `family`: ``"crypto_org"`` ; `fees?`: `string` ; `mode`: `string` ; `recipient`: `string`  } \| { `amount`: `string` ; `data?`: `string` ; `family`: ``"ethereum"`` ; `gasLimit?`: `string` ; `gasPrice?`: `string` ; `nonce?`: `number` ; `recipient`: `string`  } \| { `amount`: `string` ; `era?`: `number` ; `family`: ``"polkadot"`` ; `fee?`: `string` ; `mode`: ``"send"`` \| ``"claimReward"`` \| ``"bond"`` \| ``"unbond"`` \| ``"rebond"`` \| ``"withdrawUnbonded"`` \| ``"setController"`` \| ``"nominate"`` \| ``"chill"`` ; `recipient`: `string`  } \| { `amount`: `string` ; `family`: ``"ripple"`` ; `fee?`: `string` ; `recipient`: `string` ; `tag`: `number`  } \| { `amount`: `string` ; `family`: ``"stellar"`` ; `fees?`: `string` ; `memoType?`: `string` ; `memoValue?`: `string` ; `recipient`: `string`  } \| { `amount`: `string` ; `family`: ``"tezos"`` ; `fees?`: `string` ; `gasLimit?`: `string` ; `mode`: ``"send"`` \| ``"delegate"`` \| ``"undelegate"`` ; `recipient`: `string`  } \| { `amount`: `string` ; `duration?`: `number` ; `family`: ``"tron"`` ; `mode`: ``"send"`` \| ``"claimReward"`` \| ``"freeze"`` \| ``"unfreeze"`` \| ``"vote"`` ; `recipient`: `string` ; `resource?`: ``"BANDWIDTH"`` \| ``"ENERGY"``  }  }, { `accountId`: `string` ; `options?`: { `hwAppId?`: `string`  } ; `rawTransaction`: { `amount`: `string` ; `assetId?`: `string` ; `family`: ``"algorand"`` ; `fees?`: `string` ; `memo?`: `string` ; `mode`: ``"send"`` \| ``"optIn"`` \| ``"claimReward"`` \| ``"optOut"`` ; `recipient`: `string`  } \| { `amount`: `string` ; `family`: ``"bitcoin"`` ; `feePerByte?`: `string` ; `recipient`: `string`  } \| { `amount`: `string` ; `family`: ``"cosmos"`` ; `fees?`: `string` ; `gas?`: `string` ; `memo?`: `string` ; `mode`: ``"send"`` \| ``"claimReward"`` \| ``"delegate"`` \| ``"undelegate"`` \| ``"redelegate"`` \| ``"claimRewardCompound"`` ; `recipient`: `string`  } \| { `amount`: `string` ; `family`: ``"crypto_org"`` ; `fees?`: `string` ; `mode`: `string` ; `recipient`: `string`  } \| { `amount`: `string` ; `data?`: `string` ; `family`: ``"ethereum"`` ; `gasLimit?`: `string` ; `gasPrice?`: `string` ; `nonce?`: `number` ; `recipient`: `string`  } \| { `amount`: `string` ; `era?`: `number` ; `family`: ``"polkadot"`` ; `fee?`: `string` ; `mode`: ``"send"`` \| ``"claimReward"`` \| ``"bond"`` \| ``"unbond"`` \| ``"rebond"`` \| ``"withdrawUnbonded"`` \| ``"setController"`` \| ``"nominate"`` \| ``"chill"`` ; `recipient`: `string`  } \| { `amount`: `string` ; `family`: ``"ripple"`` ; `fee?`: `string` ; `recipient`: `string` ; `tag`: `number`  } \| { `amount`: `string` ; `family`: ``"stellar"`` ; `fees?`: `string` ; `memoType?`: `string` ; `memoValue?`: `string` ; `recipient`: `string`  } \| { `amount`: `string` ; `family`: ``"tezos"`` ; `fees?`: `string` ; `gasLimit?`: `string` ; `mode`: ``"send"`` \| ``"delegate"`` \| ``"undelegate"`` ; `recipient`: `string`  } \| { `amount`: `string` ; `duration?`: `number` ; `family`: ``"tron"`` ; `mode`: ``"send"`` \| ``"claimReward"`` \| ``"freeze"`` \| ``"unfreeze"`` \| ``"vote"`` ; `recipient`: `string` ; `resource?`: ``"BANDWIDTH"`` \| ``"ENERGY"``  }  }\> |
| `result` | `z.ZodObject`<{ `transactionHash`: `z.ZodString`  }, ``"strip"``, `z.ZodTypeAny`, { `transactionHash`: `string`  }, { `transactionHash`: `string`  }\> |

#### Defined in

packages/core/lib/spec/types/TransactionSignAndBroadcast.d.ts:387

___

### schemaUnauthorizedStore

• `Const` **schemaUnauthorizedStore**: `z.ZodObject`<{ `code`: `z.ZodLiteral`<``"UNAUTHORIZED_STORE"``\> ; `data`: `z.ZodObject`<{ `storeId`: `z.ZodString`  }, ``"strip"``, `z.ZodTypeAny`, { `storeId`: `string`  }, { `storeId`: `string`  }\> ; `message`: `z.ZodString`  }, ``"strip"``, `z.ZodTypeAny`, { `code`: ``"UNAUTHORIZED_STORE"`` ; `data`: { `storeId`: `string`  } ; `message`: `string`  }, { `code`: ``"UNAUTHORIZED_STORE"`` ; `data`: { `storeId`: `string`  } ; `message`: `string`  }\>

#### Defined in

packages/core/lib/errors/types.d.ts:144

___

### schemaUnknownError

• `Const` **schemaUnknownError**: `z.ZodObject`<{ `code`: `z.ZodLiteral`<``"UNKNOWN_ERROR"``\> ; `data`: `z.ZodObject`<{ `cause`: `z.ZodOptional`<`z.ZodUnknown`\> ; `code`: `z.ZodOptional`<`z.ZodString`\> ; `message`: `z.ZodOptional`<`z.ZodString`\> ; `name`: `z.ZodOptional`<`z.ZodString`\> ; `stack`: `z.ZodOptional`<`z.ZodString`\>  }, ``"strip"``, `z.ZodTypeAny`, { `cause?`: `unknown` ; `code?`: `string` ; `message?`: `string` ; `name?`: `string` ; `stack?`: `string`  }, { `cause?`: `unknown` ; `code?`: `string` ; `message?`: `string` ; `name?`: `string` ; `stack?`: `string`  }\> ; `message`: `z.ZodString`  }, ``"strip"``, `z.ZodTypeAny`, { `code`: ``"UNKNOWN_ERROR"`` ; `data`: { `cause?`: `unknown` ; `code?`: `string` ; `message?`: `string` ; `name?`: `string` ; `stack?`: `string`  } ; `message`: `string`  }, { `code`: ``"UNKNOWN_ERROR"`` ; `data`: { `cause?`: `unknown` ; `code?`: `string` ; `message?`: `string` ; `name?`: `string` ; `stack?`: `string`  } ; `message`: `string`  }\>

#### Defined in

packages/core/lib/errors/types.d.ts:100

___

### schemaWalletCapabilities

• `Const` **schemaWalletCapabilities**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `params` | `z.ZodObject`<{}, ``"strip"``, `z.ZodTypeAny`, {}, {}\> |
| `result` | `z.ZodObject`<{ `methodIds`: `z.ZodArray`<`z.ZodString`, ``"many"``\>  }, ``"strip"``, `z.ZodTypeAny`, { `methodIds`: `string`[]  }, { `methodIds`: `string`[]  }\> |

#### Defined in

packages/core/lib/spec/types/WalletCapabilities.d.ts:10

___

### schemaWalletInfo

• `Const` **schemaWalletInfo**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `params` | `z.ZodObject`<{}, ``"strip"``, `z.ZodTypeAny`, {}, {}\> |
| `result` | `z.ZodObject`<{ `tracking`: `z.ZodBoolean` ; `wallet`: `z.ZodObject`<{ `name`: `z.ZodString` ; `version`: `z.ZodString`  }, ``"strip"``, `z.ZodTypeAny`, { `name`: `string` ; `version`: `string`  }, { `name`: `string` ; `version`: `string`  }\>  }, ``"strip"``, `z.ZodTypeAny`, { `tracking`: `boolean` ; `wallet`: { `name`: `string` ; `version`: `string`  }  }, { `tracking`: `boolean` ; `wallet`: { `name`: `string` ; `version`: `string`  }  }\> |

#### Defined in

packages/core/lib/spec/types/WalletInfo.d.ts:28

___

### schemaWalletUserId

• `Const` **schemaWalletUserId**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `params` | `z.ZodObject`<{}, ``"strip"``, `z.ZodTypeAny`, {}, {}\> |
| `result` | `z.ZodObject`<{ `userId`: `z.ZodString`  }, ``"strip"``, `z.ZodTypeAny`, { `userId`: `string`  }, { `userId`: `string`  }\> |

#### Defined in

packages/core/lib/spec/types/WalletUserId.d.ts:10

## Functions

### createAccountNotFound

▸ **createAccountNotFound**(`accountId`): [`AccountNotFound`](#accountnotfound)

#### Parameters

| Name | Type |
| :------ | :------ |
| `accountId` | `string` |

#### Returns

[`AccountNotFound`](#accountnotfound)

#### Defined in

packages/core/lib/errors/creators.d.ts:5

___

### createCurrencyNotFound

▸ **createCurrencyNotFound**(`currencyId`): [`CurrencyNotFound`](#currencynotfound)

#### Parameters

| Name | Type |
| :------ | :------ |
| `currencyId` | `string` |

#### Returns

[`CurrencyNotFound`](#currencynotfound)

#### Defined in

packages/core/lib/errors/creators.d.ts:4

___

### createNotImplementedByWallet

▸ **createNotImplementedByWallet**(`methodId`): [`NotImplementedByWallet`](#notimplementedbywallet)

#### Parameters

| Name | Type |
| :------ | :------ |
| `methodId` | `string` |

#### Returns

[`NotImplementedByWallet`](#notimplementedbywallet)

#### Defined in

packages/core/lib/errors/creators.d.ts:2

___

### createPermissionDenied

▸ **createPermissionDenied**(`methodId`): [`PermissionDenied`](#permissiondenied)

#### Parameters

| Name | Type |
| :------ | :------ |
| `methodId` | `string` |

#### Returns

[`PermissionDenied`](#permissiondenied)

#### Defined in

packages/core/lib/errors/creators.d.ts:3

___

### createRpcRequest

▸ **createRpcRequest**<`T`\>(`params`): [`RpcRequest`](interfaces/RpcRequest.md)<`string`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | `CreateRpcRequestParams`<`T`\> |

#### Returns

[`RpcRequest`](interfaces/RpcRequest.md)<`string`, `T`\>

#### Defined in

packages/core/lib/JSONRPC/helpers.d.ts:8

___

### createRpcResponse

▸ **createRpcResponse**<`T`, `E`\>(`params`): [`RpcResponse`](#rpcresponse)<`T`, `E`\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `E` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | `CreateRpcResponseParams`<`T`, `E`\> |

#### Returns

[`RpcResponse`](#rpcresponse)<`T`, `E`\>

#### Defined in

packages/core/lib/JSONRPC/helpers.d.ts:16

___

### createUnauthorizedStore

▸ **createUnauthorizedStore**(`storeId`): [`UnauthorizedStore`](#unauthorizedstore)

#### Parameters

| Name | Type |
| :------ | :------ |
| `storeId` | `string` |

#### Returns

[`UnauthorizedStore`](#unauthorizedstore)

#### Defined in

packages/core/lib/errors/creators.d.ts:7

___

### createUnknownError

▸ **createUnknownError**(`error`): [`UnknownError`](#unknownerror)

#### Parameters

| Name | Type |
| :------ | :------ |
| `error` | `Object` |
| `error.cause?` | `unknown` |
| `error.code?` | `string` |
| `error.message?` | `string` |
| `error.name?` | `string` |
| `error.stack?` | `string` |

#### Returns

[`UnknownError`](#unknownerror)

#### Defined in

packages/core/lib/errors/creators.d.ts:6

___

### deserializeAccount

▸ **deserializeAccount**(`rawAccount`): [`Account`](#account)

Deserialize a [RawAccount](#rawaccount) object after it has been received over JSON-RPC
protocol from the Ledger Live platform

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `rawAccount` | `Object` | The raw account representation to deserialize |
| `rawAccount.address` | `string` | - |
| `rawAccount.balance` | `string` | - |
| `rawAccount.blockHeight` | `number` | - |
| `rawAccount.currency` | `string` | - |
| `rawAccount.id` | `string` | - |
| `rawAccount.lastSyncDate` | `string` | - |
| `rawAccount.name` | `string` | - |
| `rawAccount.spendableBalance` | `string` | - |

#### Returns

[`Account`](#account)

The object account of the provided raw account representation

#### Defined in

packages/core/lib/accounts/serializers.d.ts:17

___

### deserializeTransaction

▸ **deserializeTransaction**(`rawTransaction`): [`Transaction`](#transaction)

Deserialize a [RawTransaction](#rawtransaction) object after it has been received over
JSON-RPC protocol from the Ledger Live platform

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `rawTransaction` | { `amount`: `string` ; `assetId?`: `string` ; `family`: ``"algorand"`` ; `fees?`: `string` ; `memo?`: `string` ; `mode`: ``"send"`` \| ``"optIn"`` \| ``"claimReward"`` \| ``"optOut"`` ; `recipient`: `string`  } \| { `amount`: `string` ; `family`: ``"bitcoin"`` ; `feePerByte?`: `string` ; `recipient`: `string`  } \| { `amount`: `string` ; `family`: ``"cosmos"`` ; `fees?`: `string` ; `gas?`: `string` ; `memo?`: `string` ; `mode`: ``"send"`` \| ``"claimReward"`` \| ``"delegate"`` \| ``"undelegate"`` \| ``"redelegate"`` \| ``"claimRewardCompound"`` ; `recipient`: `string`  } \| { `amount`: `string` ; `family`: ``"crypto_org"`` ; `fees?`: `string` ; `mode`: `string` ; `recipient`: `string`  } \| { `amount`: `string` ; `data?`: `string` ; `family`: ``"ethereum"`` ; `gasLimit?`: `string` ; `gasPrice?`: `string` ; `nonce?`: `number` ; `recipient`: `string`  } \| { `amount`: `string` ; `era?`: `number` ; `family`: ``"polkadot"`` ; `fee?`: `string` ; `mode`: ``"send"`` \| ``"claimReward"`` \| ``"bond"`` \| ``"unbond"`` \| ``"rebond"`` \| ``"withdrawUnbonded"`` \| ``"setController"`` \| ``"nominate"`` \| ``"chill"`` ; `recipient`: `string`  } \| { `amount`: `string` ; `family`: ``"ripple"`` ; `fee?`: `string` ; `recipient`: `string` ; `tag`: `number`  } \| { `amount`: `string` ; `family`: ``"stellar"`` ; `fees?`: `string` ; `memoType?`: `string` ; `memoValue?`: `string` ; `recipient`: `string`  } \| { `amount`: `string` ; `family`: ``"tezos"`` ; `fees?`: `string` ; `gasLimit?`: `string` ; `mode`: ``"send"`` \| ``"delegate"`` \| ``"undelegate"`` ; `recipient`: `string`  } \| { `amount`: `string` ; `duration?`: `number` ; `family`: ``"tron"`` ; `mode`: ``"send"`` \| ``"claimReward"`` \| ``"freeze"`` \| ``"unfreeze"`` \| ``"vote"`` ; `recipient`: `string` ; `resource?`: ``"BANDWIDTH"`` \| ``"ENERGY"``  } | The raw transaction representation to deserialize |

#### Returns

[`Transaction`](#transaction)

The object transaction of the provided raw transaction representation

#### Defined in

packages/core/lib/families/serializer.d.ts:17

___

### parseRPCCall

▸ **parseRPCCall**(`data`): [`RpcRequest`](interfaces/RpcRequest.md) \| [`RpcResponse`](#rpcresponse)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `string` |

#### Returns

[`RpcRequest`](interfaces/RpcRequest.md) \| [`RpcResponse`](#rpcresponse)

#### Defined in

packages/core/lib/JSONRPC/helpers.d.ts:2

___

### serializeAccount

▸ **serializeAccount**(`account`): [`RawAccount`](#rawaccount)

Serialize an [Account](#account) object in order to send it over JSON-RPC protocol
to the Ledger Live platform

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `account` | [`Account`](#account) | The account object to serialize |

#### Returns

[`RawAccount`](#rawaccount)

The raw representation of the provided account object

#### Defined in

packages/core/lib/accounts/serializers.d.ts:9

___

### serializeTransaction

▸ **serializeTransaction**(`transaction`): [`RawTransaction`](#rawtransaction)

Serialize an [Transaction](#transaction) object in order to send it over JSON-RPC
protocol to the Ledger Live platform

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `transaction` | [`Transaction`](#transaction) | The transaction object to serialize |

#### Returns

[`RawTransaction`](#rawtransaction)

The raw representation of the provided transaction object

#### Defined in

packages/core/lib/families/serializer.d.ts:9
