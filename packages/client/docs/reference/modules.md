[@ledgerhq/wallet-api-client](README.md) / Exports

# @ledgerhq/wallet-api-client

## Table of contents

### Enumerations

- [DeviceModel](enums/DeviceModel.md)
- [ExchangeType](enums/ExchangeType.md)
- [FeesLevel](enums/FeesLevel.md)
- [RpcErrorCode](enums/RpcErrorCode.md)

### Classes

- [HWTransport](classes/HWTransport.md)
- [Logger](classes/Logger.md)
- [RpcError](classes/RpcError.md)
- [RpcNode](classes/RpcNode.md)
- [TransportWalletAPI](classes/TransportWalletAPI.md)
- [WalletAPIClient](classes/WalletAPIClient.md)
- [WindowMessageTransport](classes/WindowMessageTransport.md)

### Interfaces

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

### Type Aliases

- [Account](modules.md#account)
- [AccountList](modules.md#accountlist)
- [AccountListHandler](modules.md#accountlisthandler)
- [AccountReceive](modules.md#accountreceive)
- [AccountReceiveHandler](modules.md#accountreceivehandler)
- [AccountRequest](modules.md#accountrequest)
- [AccountRequestHandler](modules.md#accountrequesthandler)
- [AlgorandOperationMode](modules.md#algorandoperationmode)
- [ApplicationDetails](modules.md#applicationdetails)
- [CosmosOperationMode](modules.md#cosmosoperationmode)
- [CryptoCurrency](modules.md#cryptocurrency)
- [Currency](modules.md#currency)
- [CurrencyList](modules.md#currencylist)
- [CurrencyListHandler](modules.md#currencylisthandler)
- [CurrencyType](modules.md#currencytype)
- [DeviceClose](modules.md#deviceclose)
- [DeviceCloseHandler](modules.md#deviceclosehandler)
- [DeviceExchange](modules.md#deviceexchange)
- [DeviceExchangeHandler](modules.md#deviceexchangehandler)
- [DeviceInfo](modules.md#deviceinfo)
- [DeviceTransport](modules.md#devicetransport)
- [DeviceTransportHandler](modules.md#devicetransporthandler)
- [DeviceType](modules.md#devicetype)
- [ERC20TokenCurrency](modules.md#erc20tokencurrency)
- [EcdsaSignature](modules.md#ecdsasignature)
- [ExchangeDeviceTxId](modules.md#exchangedevicetxid)
- [ExchangePayload](modules.md#exchangepayload)
- [Families](modules.md#families)
- [MessageHandler](modules.md#messagehandler)
- [MessageSign](modules.md#messagesign)
- [MessageSignHandler](modules.md#messagesignhandler)
- [MethodId](modules.md#methodid)
- [Permission](modules.md#permission)
- [PolkadotOperationMode](modules.md#polkadotoperationmode)
- [Promisable](modules.md#promisable)
- [RPCHandler](modules.md#rpchandler)
- [RawAccount](modules.md#rawaccount)
- [RawAlgorandTransaction](modules.md#rawalgorandtransaction)
- [RawBitcoinTransaction](modules.md#rawbitcointransaction)
- [RawCosmosTransaction](modules.md#rawcosmostransaction)
- [RawCryptoOrgTransaction](modules.md#rawcryptoorgtransaction)
- [RawEthereumTransaction](modules.md#rawethereumtransaction)
- [RawPolkadotTransaction](modules.md#rawpolkadottransaction)
- [RawRippleTransaction](modules.md#rawrippletransaction)
- [RawStellarTransaction](modules.md#rawstellartransaction)
- [RawTezosTransaction](modules.md#rawtezostransaction)
- [RawTransaction](modules.md#rawtransaction)
- [RawTransactionCommon](modules.md#rawtransactioncommon)
- [RawTronTransaction](modules.md#rawtrontransaction)
- [RpcResponse](modules.md#rpcresponse)
- [TezosOperationMode](modules.md#tezosoperationmode)
- [TokenStandard](modules.md#tokenstandard)
- [Transaction](modules.md#transaction)
- [TransactionSign](modules.md#transactionsign)
- [TransactionSignAndBroadcast](modules.md#transactionsignandbroadcast)
- [TransactionSignAndBroadcastHandler](modules.md#transactionsignandbroadcasthandler)
- [TransactionSignHandler](modules.md#transactionsignhandler)
- [TronOperationMode](modules.md#tronoperationmode)
- [TronResource](modules.md#tronresource)
- [WalletCapabilities](modules.md#walletcapabilities)
- [WalletCapabilitiesHandler](modules.md#walletcapabilitieshandler)

### Variables

- [schemaAccountList](modules.md#schemaaccountlist)
- [schemaAccountReceive](modules.md#schemaaccountreceive)
- [schemaAccountRequest](modules.md#schemaaccountrequest)
- [schemaBaseCurrency](modules.md#schemabasecurrency)
- [schemaCryptoCurrency](modules.md#schemacryptocurrency)
- [schemaCurrency](modules.md#schemacurrency)
- [schemaCurrencyList](modules.md#schemacurrencylist)
- [schemaCurrencyType](modules.md#schemacurrencytype)
- [schemaDeviceClose](modules.md#schemadeviceclose)
- [schemaDeviceExchange](modules.md#schemadeviceexchange)
- [schemaDeviceTransport](modules.md#schemadevicetransport)
- [schemaERC20TokenCurrency](modules.md#schemaerc20tokencurrency)
- [schemaFamilies](modules.md#schemafamilies)
- [schemaMessageSign](modules.md#schemamessagesign)
- [schemaRPCCall](modules.md#schemarpccall)
- [schemaRPCMethod](modules.md#schemarpcmethod)
- [schemaRPCRequest](modules.md#schemarpcrequest)
- [schemaRPCResponse](modules.md#schemarpcresponse)
- [schemaRPCResponseError](modules.md#schemarpcresponseerror)
- [schemaRPCResponseErrorData](modules.md#schemarpcresponseerrordata)
- [schemaRPCResponseSuccess](modules.md#schemarpcresponsesuccess)
- [schemaRawAccount](modules.md#schemarawaccount)
- [schemaRawTransaction](modules.md#schemarawtransaction)
- [schemaTokenCurrency](modules.md#schematokencurrency)
- [schemaTokenStandard](modules.md#schematokenstandard)
- [schemaTransactionCommon](modules.md#schematransactioncommon)
- [schemaTransactionSign](modules.md#schematransactionsign)
- [schemaTransactionSignAndBroadcast](modules.md#schematransactionsignandbroadcast)
- [schemaWalletCapabilities](modules.md#schemawalletcapabilities)

### Functions

- [createRpcRequest](modules.md#createrpcrequest)
- [createRpcResponse](modules.md#createrpcresponse)
- [deserializeAccount](modules.md#deserializeaccount)
- [deserializeTransaction](modules.md#deserializetransaction)
- [parseRPCCall](modules.md#parserpccall)
- [serializeAccount](modules.md#serializeaccount)
- [serializeTransaction](modules.md#serializetransaction)

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

Ƭ **AccountListHandler**: (`params`: [`AccountList`](modules.md#accountlist)[``"params"``]) => [`AccountList`](modules.md#accountlist)[``"result"``]

#### Type declaration

▸ (`params`): [`AccountList`](modules.md#accountlist)[``"result"``]

##### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`AccountList`](modules.md#accountlist)[``"params"``] |

##### Returns

[`AccountList`](modules.md#accountlist)[``"result"``]

#### Defined in

packages/core/lib/spec/types/AccountList.d.ts:126

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

Ƭ **AccountReceiveHandler**: (`params`: [`AccountReceive`](modules.md#accountreceive)[``"params"``]) => [`AccountReceive`](modules.md#accountreceive)[``"result"``]

#### Type declaration

▸ (`params`): [`AccountReceive`](modules.md#accountreceive)[``"result"``]

##### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`AccountReceive`](modules.md#accountreceive)[``"params"``] |

##### Returns

[`AccountReceive`](modules.md#accountreceive)[``"result"``]

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

Ƭ **AccountRequestHandler**: (`params`: [`AccountRequest`](modules.md#accountrequest)[``"params"``]) => [`AccountRequest`](modules.md#accountrequest)[``"result"``]

#### Type declaration

▸ (`params`): [`AccountRequest`](modules.md#accountrequest)[``"result"``]

##### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`AccountRequest`](modules.md#accountrequest)[``"params"``] |

##### Returns

[`AccountRequest`](modules.md#accountrequest)[``"result"``]

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

### CosmosOperationMode

Ƭ **CosmosOperationMode**: `z.infer`<typeof `schemaCosmosOperationMode`\>

#### Defined in

packages/core/lib/families/cosmos/types.d.ts:5

___

### CryptoCurrency

Ƭ **CryptoCurrency**: `z.infer`<typeof [`schemaCryptoCurrency`](modules.md#schemacryptocurrency)\>

Crypto currency model

#### Defined in

packages/core/lib/currencies/types.d.ts:14

___

### Currency

Ƭ **Currency**: `z.infer`<typeof [`schemaCurrency`](modules.md#schemacurrency)\>

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

Ƭ **CurrencyListHandler**: (`params`: [`CurrencyList`](modules.md#currencylist)[``"params"``]) => [`CurrencyList`](modules.md#currencylist)[``"result"``]

#### Type declaration

▸ (`params`): [`CurrencyList`](modules.md#currencylist)[``"result"``]

##### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`CurrencyList`](modules.md#currencylist)[``"params"``] |

##### Returns

[`CurrencyList`](modules.md#currencylist)[``"result"``]

#### Defined in

packages/core/lib/spec/types/CurrencyList.d.ts:222

___

### CurrencyType

Ƭ **CurrencyType**: `z.infer`<typeof [`schemaCurrencyType`](modules.md#schemacurrencytype)\>

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

Ƭ **DeviceCloseHandler**: (`params`: [`DeviceClose`](modules.md#deviceclose)[``"params"``]) => [`DeviceClose`](modules.md#deviceclose)[``"result"``]

#### Type declaration

▸ (`params`): [`DeviceClose`](modules.md#deviceclose)[``"result"``]

##### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`DeviceClose`](modules.md#deviceclose)[``"params"``] |

##### Returns

[`DeviceClose`](modules.md#deviceclose)[``"result"``]

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

Ƭ **DeviceExchangeHandler**: (`params`: [`DeviceExchange`](modules.md#deviceexchange)[``"params"``]) => [`DeviceExchange`](modules.md#deviceexchange)[``"result"``]

#### Type declaration

▸ (`params`): [`DeviceExchange`](modules.md#deviceexchange)[``"result"``]

##### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`DeviceExchange`](modules.md#deviceexchange)[``"params"``] |

##### Returns

[`DeviceExchange`](modules.md#deviceexchange)[``"result"``]

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

Ƭ **DeviceTransportHandler**: (`params`: [`DeviceTransport`](modules.md#devicetransport)[``"params"``]) => [`DeviceTransport`](modules.md#devicetransport)[``"result"``]

#### Type declaration

▸ (`params`): [`DeviceTransport`](modules.md#devicetransport)[``"result"``]

##### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`DeviceTransport`](modules.md#devicetransport)[``"params"``] |

##### Returns

[`DeviceTransport`](modules.md#devicetransport)[``"result"``]

#### Defined in

packages/core/lib/spec/types/DeviceTransport.d.ts:92

___

### DeviceType

Ƭ **DeviceType**: `z.infer`<typeof `schemaDeviceType`\>

#### Defined in

packages/core/lib/spec/types/DeviceTransport.d.ts:3

___

### ERC20TokenCurrency

Ƭ **ERC20TokenCurrency**: `z.infer`<typeof [`schemaERC20TokenCurrency`](modules.md#schemaerc20tokencurrency)\>

ERC20 token currency model

#### Defined in

packages/core/lib/currencies/types.d.ts:18

___

### EcdsaSignature

Ƭ **EcdsaSignature**: `Buffer`

The ECDSA signature of the [payload](modules.md#exchangepayload)

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

Ƭ **Families**: `z.infer`<typeof [`schemaFamilies`](modules.md#schemafamilies)\>

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

Ƭ **MessageSignHandler**: (`params`: [`MessageSign`](modules.md#messagesign)[``"params"``]) => [`MessageSign`](modules.md#messagesign)[``"result"``]

#### Type declaration

▸ (`params`): [`MessageSign`](modules.md#messagesign)[``"result"``]

##### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`MessageSign`](modules.md#messagesign)[``"params"``] |

##### Returns

[`MessageSign`](modules.md#messagesign)[``"result"``]

#### Defined in

packages/core/lib/spec/types/MessageSign.d.ts:42

___

### MethodId

Ƭ **MethodId**: `z.infer`<typeof [`schemaRPCMethod`](modules.md#schemarpcmethod)\>

#### Defined in

packages/core/lib/spec/methods.d.ts:2

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

[packages/client/src/WalletAPIClient.ts:33](https://github.com/LedgerHQ/wallet-api/blob/main/packages/client/src/WalletAPIClient.ts#L33)

___

### RawAccount

Ƭ **RawAccount**: `z.infer`<typeof [`schemaRawAccount`](modules.md#schemarawaccount)\>

The raw representation of the [Account](modules.md#account) type

**`See`**

[Account](modules.md#account) for information regarding individual fields. Each field type is the serialized version of the corresponding [Account](modules.md#account) type

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

Ƭ **RawTransaction**: `z.infer`<typeof [`schemaRawTransaction`](modules.md#schemarawtransaction)\>

The raw representation of the generic [Transaction](modules.md#transaction) type.

#### Defined in

packages/core/lib/families/types.d.ts:46

___

### RawTransactionCommon

Ƭ **RawTransactionCommon**: `z.infer`<typeof [`schemaRawTransaction`](modules.md#schemarawtransaction)\>

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

packages/core/lib/JSONRPC/types.d.ts:94

___

### TezosOperationMode

Ƭ **TezosOperationMode**: `z.infer`<typeof `schemaTezosOperationMode`\>

#### Defined in

packages/core/lib/families/tezos/types.d.ts:5

___

### TokenStandard

Ƭ **TokenStandard**: `z.infer`<typeof [`schemaTokenStandard`](modules.md#schematokenstandard)\>

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

Ƭ **TransactionSignAndBroadcastHandler**: (`params`: [`TransactionSignAndBroadcast`](modules.md#transactionsignandbroadcast)[``"params"``]) => [`TransactionSignAndBroadcast`](modules.md#transactionsignandbroadcast)[``"result"``]

#### Type declaration

▸ (`params`): [`TransactionSignAndBroadcast`](modules.md#transactionsignandbroadcast)[``"result"``]

##### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`TransactionSignAndBroadcast`](modules.md#transactionsignandbroadcast)[``"params"``] |

##### Returns

[`TransactionSignAndBroadcast`](modules.md#transactionsignandbroadcast)[``"result"``]

#### Defined in

packages/core/lib/spec/types/TransactionSignAndBroadcast.d.ts:778

___

### TransactionSignHandler

Ƭ **TransactionSignHandler**: (`params`: [`TransactionSign`](modules.md#transactionsign)[``"params"``]) => [`TransactionSign`](modules.md#transactionsign)[``"result"``]

#### Type declaration

▸ (`params`): [`TransactionSign`](modules.md#transactionsign)[``"result"``]

##### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`TransactionSign`](modules.md#transactionsign)[``"params"``] |

##### Returns

[`TransactionSign`](modules.md#transactionsign)[``"result"``]

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

Ƭ **WalletCapabilitiesHandler**: (`params`: [`WalletCapabilities`](modules.md#walletcapabilities)[``"params"``]) => [`WalletCapabilities`](modules.md#walletcapabilities)[``"result"``]

#### Type declaration

▸ (`params`): [`WalletCapabilities`](modules.md#walletcapabilities)[``"result"``]

##### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`WalletCapabilities`](modules.md#walletcapabilities)[``"params"``] |

##### Returns

[`WalletCapabilities`](modules.md#walletcapabilities)[``"result"``]

#### Defined in

packages/core/lib/spec/types/WalletCapabilities.d.ts:24

## Variables

### schemaAccountList

• `Const` **schemaAccountList**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `params` | `z.ZodObject`<{ `currencyIds`: `z.ZodOptional`<`z.ZodArray`<`z.ZodString`, ``"many"``\>\>  }, ``"strip"``, `z.ZodTypeAny`, { `currencyIds?`: `string`[]  }, { `currencyIds?`: `string`[]  }\> |
| `result` | `z.ZodObject`<{ `rawAccounts`: `z.ZodArray`<`z.ZodObject`<{ `address`: `z.ZodString` ; `balance`: `z.ZodString` ; `blockHeight`: `z.ZodNumber` ; `currency`: `z.ZodString` ; `id`: `z.ZodString` ; `lastSyncDate`: `z.ZodString` ; `name`: `z.ZodString` ; `spendableBalance`: `z.ZodString`  }, ``"strip"``, `z.ZodTypeAny`, { `address`: `string` ; `balance`: `string` ; `blockHeight`: `number` ; `currency`: `string` ; `id`: `string` ; `lastSyncDate`: `string` ; `name`: `string` ; `spendableBalance`: `string`  }, { `address`: `string` ; `balance`: `string` ; `blockHeight`: `number` ; `currency`: `string` ; `id`: `string` ; `lastSyncDate`: `string` ; `name`: `string` ; `spendableBalance`: `string`  }\>, ``"many"``\>  }, ``"strip"``, `z.ZodTypeAny`, { `rawAccounts`: { `address`: `string` ; `balance`: `string` ; `blockHeight`: `number` ; `currency`: `string` ; `id`: `string` ; `lastSyncDate`: `string` ; `name`: `string` ; `spendableBalance`: `string`  }[]  }, { `rawAccounts`: { `address`: `string` ; `balance`: `string` ; `blockHeight`: `number` ; `currency`: `string` ; `id`: `string` ; `lastSyncDate`: `string` ; `name`: `string` ; `spendableBalance`: `string`  }[]  }\> |

#### Defined in

packages/core/lib/spec/types/AccountList.d.ts:61

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
| `params` | `z.ZodObject`<{ `currencyIds`: `z.ZodOptional`<`z.ZodArray`<`z.ZodString`, ``"many"``\>\>  }, ``"strip"``, `z.ZodTypeAny`, { `currencyIds?`: `string`[]  }, { `currencyIds?`: `string`[]  }\> |
| `result` | `z.ZodObject`<{ `currencies`: `z.ZodArray`<`z.ZodDiscriminatedUnion`<``"type"``, `z.Primitive`, `z.ZodObject`<`z.extendShape`<{ `color`: `z.ZodString` ; `decimals`: `z.ZodNumber` ; `id`: `z.ZodString` ; `name`: `z.ZodString` ; `ticker`: `z.ZodString`  }, { `family`: `z.ZodEnum`<[``"bitcoin"``, ``"ethereum"``, ``"algorand"``, ``"crypto_org"``, ``"ripple"``, ``"cosmos"``, ``"ripple"``, ``"cosmos"``, ``"tezos"``, ``"polkadot"``, ``"stellar"``, ``"tron"``]\> ; `type`: `z.ZodLiteral`<``"CryptoCurrency"``\>  }\>, ``"strip"``, `z.ZodTypeAny`, { `color`: `string` ; `decimals`: `number` ; `family`: ``"bitcoin"`` \| ``"ethereum"`` \| ``"algorand"`` \| ``"crypto_org"`` \| ``"ripple"`` \| ``"cosmos"`` \| ``"tezos"`` \| ``"polkadot"`` \| ``"stellar"`` \| ``"tron"`` ; `id`: `string` ; `name`: `string` ; `ticker`: `string` ; `type`: ``"CryptoCurrency"``  }, { `color`: `string` ; `decimals`: `number` ; `family`: ``"bitcoin"`` \| ``"ethereum"`` \| ``"algorand"`` \| ``"crypto_org"`` \| ``"ripple"`` \| ``"cosmos"`` \| ``"tezos"`` \| ``"polkadot"`` \| ``"stellar"`` \| ``"tron"`` ; `id`: `string` ; `name`: `string` ; `ticker`: `string` ; `type`: ``"CryptoCurrency"``  }\> \| `z.ZodObject`<`z.extendShape`<`z.extendShape`<{ `color`: `z.ZodString` ; `decimals`: `z.ZodNumber` ; `id`: `z.ZodString` ; `name`: `z.ZodString` ; `ticker`: `z.ZodString`  }, { `parent`: `z.ZodString` ; `type`: `z.ZodLiteral`<``"TokenCurrency"``\>  }\>, { `contract`: `z.ZodString` ; `standard`: `z.ZodEnum`<[``"ERC20"``]\>  }\>, ``"strip"``, `z.ZodTypeAny`, { `color`: `string` ; `contract`: `string` ; `decimals`: `number` ; `id`: `string` ; `name`: `string` ; `parent`: `string` ; `standard`: ``"ERC20"`` ; `ticker`: `string` ; `type`: ``"TokenCurrency"``  }, { `color`: `string` ; `contract`: `string` ; `decimals`: `number` ; `id`: `string` ; `name`: `string` ; `parent`: `string` ; `standard`: ``"ERC20"`` ; `ticker`: `string` ; `type`: ``"TokenCurrency"``  }\>\>, ``"many"``\>  }, ``"strip"``, `z.ZodTypeAny`, { `currencies`: ({ `color`: `string` ; `decimals`: `number` ; `family`: ``"bitcoin"`` \| ``"ethereum"`` \| ``"algorand"`` \| ``"crypto_org"`` \| ``"ripple"`` \| ``"cosmos"`` \| ``"tezos"`` \| ``"polkadot"`` \| ``"stellar"`` \| ``"tron"`` ; `id`: `string` ; `name`: `string` ; `ticker`: `string` ; `type`: ``"CryptoCurrency"``  } \| { `color`: `string` ; `contract`: `string` ; `decimals`: `number` ; `id`: `string` ; `name`: `string` ; `parent`: `string` ; `standard`: ``"ERC20"`` ; `ticker`: `string` ; `type`: ``"TokenCurrency"``  })[]  }, { `currencies`: ({ `color`: `string` ; `decimals`: `number` ; `family`: ``"bitcoin"`` \| ``"ethereum"`` \| ``"algorand"`` \| ``"crypto_org"`` \| ``"ripple"`` \| ``"cosmos"`` \| ``"tezos"`` \| ``"polkadot"`` \| ``"stellar"`` \| ``"tron"`` ; `id`: `string` ; `name`: `string` ; `ticker`: `string` ; `type`: ``"CryptoCurrency"``  } \| { `color`: `string` ; `contract`: `string` ; `decimals`: `number` ; `id`: `string` ; `name`: `string` ; `parent`: `string` ; `standard`: ``"ERC20"`` ; `ticker`: `string` ; `type`: ``"TokenCurrency"``  })[]  }\> |

#### Defined in

packages/core/lib/spec/types/CurrencyList.d.ts:109

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
| `params` | `z.ZodObject`<{ `appName`: `z.ZodOptional`<`z.ZodString`\> ; `appVersionRange`: `z.ZodOptional`<`z.ZodString`\> ; `devices`: `z.ZodOptional`<`z.ZodArray`<`z.ZodEnum`<[``"blue"``, ``"nanoS"``, ``"nanoSP"``, ``"nanoX"``, ``"nanoFTS"``]\>, ``"atleastone"``\>\> ; `firmwareVersionRange`: `z.ZodOptional`<`z.ZodString`\> ; `seeded`: `z.ZodOptional`<`z.ZodBoolean`\>  }, ``"strip"``, `z.ZodTypeAny`, { `appName?`: `string` ; `appVersionRange?`: `string` ; `devices?`: [``"blue"`` \| ``"nanoS"`` \| ``"nanoSP"`` \| ``"nanoX"`` \| ``"nanoFTS"``, ...("blue" \| "nanoS" \| "nanoSP" \| "nanoX" \| "nanoFTS")[]] ; `firmwareVersionRange?`: `string` ; `seeded?`: `boolean`  }, { `appName?`: `string` ; `appVersionRange?`: `string` ; `devices?`: [``"blue"`` \| ``"nanoS"`` \| ``"nanoSP"`` \| ``"nanoX"`` \| ``"nanoFTS"``, ...("blue" \| "nanoS" \| "nanoSP" \| "nanoX" \| "nanoFTS")[]] ; `firmwareVersionRange?`: `string` ; `seeded?`: `boolean`  }\> |
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

packages/core/lib/families/common.d.ts:12

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

### schemaRPCCall

• `Const` **schemaRPCCall**: `z.ZodUnion`<[`z.ZodObject`<{ `id`: `z.ZodOptional`<`z.ZodUnion`<[`z.ZodString`, `z.ZodNumber`, `z.ZodNull`]\>\> ; `jsonrpc`: `z.ZodLiteral`<``"2.0"``\> ; `method`: `z.ZodString` ; `params`: `z.ZodAny`  }, ``"strict"``, `z.ZodTypeAny`, { `id?`: `string` \| `number` \| ``null`` ; `jsonrpc`: ``"2.0"`` ; `method`: `string` ; `params?`: `any`  }, { `id?`: `string` \| `number` \| ``null`` ; `jsonrpc`: ``"2.0"`` ; `method`: `string` ; `params?`: `any`  }\>, `z.ZodUnion`<[`z.ZodObject`<{ `error`: `z.ZodObject`<{ `code`: `z.ZodNumber` ; `data`: `z.ZodOptional`<`z.ZodAny`\> ; `message`: `z.ZodString`  }, ``"strict"``, `z.ZodTypeAny`, { `code`: `number` ; `data?`: `any` ; `message`: `string`  }, { `code`: `number` ; `data?`: `any` ; `message`: `string`  }\> ; `id`: `z.ZodUnion`<[`z.ZodString`, `z.ZodNumber`, `z.ZodNull`]\> ; `jsonrpc`: `z.ZodLiteral`<``"2.0"``\>  }, ``"strict"``, `z.ZodTypeAny`, { `error`: { `code`: `number` ; `data?`: `any` ; `message`: `string`  } ; `id`: `string` \| `number` \| ``null`` ; `jsonrpc`: ``"2.0"``  }, { `error`: { `code`: `number` ; `data?`: `any` ; `message`: `string`  } ; `id`: `string` \| `number` \| ``null`` ; `jsonrpc`: ``"2.0"``  }\>, `z.ZodObject`<{ `id`: `z.ZodUnion`<[`z.ZodString`, `z.ZodNumber`, `z.ZodNull`]\> ; `jsonrpc`: `z.ZodLiteral`<``"2.0"``\> ; `result`: `z.ZodOptional`<`z.ZodUnknown`\>  }, ``"strict"``, `z.ZodTypeAny`, { `id`: `string` \| `number` \| ``null`` ; `jsonrpc`: ``"2.0"`` ; `result?`: `unknown`  }, { `id`: `string` \| `number` \| ``null`` ; `jsonrpc`: ``"2.0"`` ; `result?`: `unknown`  }\>]\>]\>

#### Defined in

packages/core/lib/JSONRPC/validation.d.ts:122

___

### schemaRPCMethod

• `Const` **schemaRPCMethod**: `z.ZodEnum`<[``"account.list"``, ``"account.receive"``, ``"account.request"``, ``"currency.list"``, ``"device.close"``, ``"device.exchange"``, ``"device.transport"``, ``"message.sign"``, ``"transaction.sign"``, ``"transaction.signAndBroadcast"``, ``"wallet.capabilities"``]\>

#### Defined in

packages/core/lib/spec/methods.d.ts:3

___

### schemaRPCRequest

• `Const` **schemaRPCRequest**: `z.ZodObject`<{ `id`: `z.ZodOptional`<`z.ZodUnion`<[`z.ZodString`, `z.ZodNumber`, `z.ZodNull`]\>\> ; `jsonrpc`: `z.ZodLiteral`<``"2.0"``\> ; `method`: `z.ZodString` ; `params`: `z.ZodAny`  }, ``"strict"``, `z.ZodTypeAny`, { `id?`: `string` \| `number` \| ``null`` ; `jsonrpc`: ``"2.0"`` ; `method`: `string` ; `params?`: `any`  }, { `id?`: `string` \| `number` \| ``null`` ; `jsonrpc`: ``"2.0"`` ; `method`: `string` ; `params?`: `any`  }\>

#### Defined in

packages/core/lib/JSONRPC/validation.d.ts:2

___

### schemaRPCResponse

• `Const` **schemaRPCResponse**: `z.ZodUnion`<[`z.ZodObject`<{ `error`: `z.ZodObject`<{ `code`: `z.ZodNumber` ; `data`: `z.ZodOptional`<`z.ZodAny`\> ; `message`: `z.ZodString`  }, ``"strict"``, `z.ZodTypeAny`, { `code`: `number` ; `data?`: `any` ; `message`: `string`  }, { `code`: `number` ; `data?`: `any` ; `message`: `string`  }\> ; `id`: `z.ZodUnion`<[`z.ZodString`, `z.ZodNumber`, `z.ZodNull`]\> ; `jsonrpc`: `z.ZodLiteral`<``"2.0"``\>  }, ``"strict"``, `z.ZodTypeAny`, { `error`: { `code`: `number` ; `data?`: `any` ; `message`: `string`  } ; `id`: `string` \| `number` \| ``null`` ; `jsonrpc`: ``"2.0"``  }, { `error`: { `code`: `number` ; `data?`: `any` ; `message`: `string`  } ; `id`: `string` \| `number` \| ``null`` ; `jsonrpc`: ``"2.0"``  }\>, `z.ZodObject`<{ `id`: `z.ZodUnion`<[`z.ZodString`, `z.ZodNumber`, `z.ZodNull`]\> ; `jsonrpc`: `z.ZodLiteral`<``"2.0"``\> ; `result`: `z.ZodOptional`<`z.ZodUnknown`\>  }, ``"strict"``, `z.ZodTypeAny`, { `id`: `string` \| `number` \| ``null`` ; `jsonrpc`: ``"2.0"`` ; `result?`: `unknown`  }, { `id`: `string` \| `number` \| ``null`` ; `jsonrpc`: ``"2.0"`` ; `result?`: `unknown`  }\>]\>

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

• `Const` **schemaRPCResponseSuccess**: `z.ZodObject`<{ `id`: `z.ZodUnion`<[`z.ZodString`, `z.ZodNumber`, `z.ZodNull`]\> ; `jsonrpc`: `z.ZodLiteral`<``"2.0"``\> ; `result`: `z.ZodOptional`<`z.ZodUnknown`\>  }, ``"strict"``, `z.ZodTypeAny`, { `id`: `string` \| `number` \| ``null`` ; `jsonrpc`: ``"2.0"`` ; `result?`: `unknown`  }, { `id`: `string` \| `number` \| ``null`` ; `jsonrpc`: ``"2.0"`` ; `result?`: `unknown`  }\>

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

### schemaWalletCapabilities

• `Const` **schemaWalletCapabilities**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `params` | `z.ZodObject`<{}, ``"strip"``, `z.ZodTypeAny`, {}, {}\> |
| `result` | `z.ZodObject`<{ `methodIds`: `z.ZodArray`<`z.ZodString`, ``"many"``\>  }, ``"strip"``, `z.ZodTypeAny`, { `methodIds`: `string`[]  }, { `methodIds`: `string`[]  }\> |

#### Defined in

packages/core/lib/spec/types/WalletCapabilities.d.ts:10

## Functions

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

▸ **createRpcResponse**<`T`, `E`\>(`params`): [`RpcResponse`](modules.md#rpcresponse)<`T`, `E`\>

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

[`RpcResponse`](modules.md#rpcresponse)<`T`, `E`\>

#### Defined in

packages/core/lib/JSONRPC/helpers.d.ts:16

___

### deserializeAccount

▸ **deserializeAccount**(`rawAccount`): [`Account`](modules.md#account)

Deserialize a [RawAccount](modules.md#rawaccount) object after it has been received over JSON-RPC
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

[`Account`](modules.md#account)

The object account of the provided raw account representation

#### Defined in

packages/core/lib/accounts/serializers.d.ts:17

___

### deserializeTransaction

▸ **deserializeTransaction**(`rawTransaction`): [`Transaction`](modules.md#transaction)

Deserialize a [RawTransaction](modules.md#rawtransaction) object after it has been received over
JSON-RPC protocol from the Ledger Live platform

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `rawTransaction` | { `amount`: `string` ; `assetId?`: `string` ; `family`: ``"algorand"`` ; `fees?`: `string` ; `memo?`: `string` ; `mode`: ``"send"`` \| ``"optIn"`` \| ``"claimReward"`` \| ``"optOut"`` ; `recipient`: `string`  } \| { `amount`: `string` ; `family`: ``"bitcoin"`` ; `feePerByte?`: `string` ; `recipient`: `string`  } \| { `amount`: `string` ; `family`: ``"cosmos"`` ; `fees?`: `string` ; `gas?`: `string` ; `memo?`: `string` ; `mode`: ``"send"`` \| ``"claimReward"`` \| ``"delegate"`` \| ``"undelegate"`` \| ``"redelegate"`` \| ``"claimRewardCompound"`` ; `recipient`: `string`  } \| { `amount`: `string` ; `family`: ``"crypto_org"`` ; `fees?`: `string` ; `mode`: `string` ; `recipient`: `string`  } \| { `amount`: `string` ; `data?`: `string` ; `family`: ``"ethereum"`` ; `gasLimit?`: `string` ; `gasPrice?`: `string` ; `nonce?`: `number` ; `recipient`: `string`  } \| { `amount`: `string` ; `era?`: `number` ; `family`: ``"polkadot"`` ; `fee?`: `string` ; `mode`: ``"send"`` \| ``"claimReward"`` \| ``"bond"`` \| ``"unbond"`` \| ``"rebond"`` \| ``"withdrawUnbonded"`` \| ``"setController"`` \| ``"nominate"`` \| ``"chill"`` ; `recipient`: `string`  } \| { `amount`: `string` ; `family`: ``"ripple"`` ; `fee?`: `string` ; `recipient`: `string` ; `tag`: `number`  } \| { `amount`: `string` ; `family`: ``"stellar"`` ; `fees?`: `string` ; `memoType?`: `string` ; `memoValue?`: `string` ; `recipient`: `string`  } \| { `amount`: `string` ; `family`: ``"tezos"`` ; `fees?`: `string` ; `gasLimit?`: `string` ; `mode`: ``"send"`` \| ``"delegate"`` \| ``"undelegate"`` ; `recipient`: `string`  } \| { `amount`: `string` ; `duration?`: `number` ; `family`: ``"tron"`` ; `mode`: ``"send"`` \| ``"claimReward"`` \| ``"freeze"`` \| ``"unfreeze"`` \| ``"vote"`` ; `recipient`: `string` ; `resource?`: ``"BANDWIDTH"`` \| ``"ENERGY"``  } | The raw transaction representation to deserialize |

#### Returns

[`Transaction`](modules.md#transaction)

The object transaction of the provided raw transaction representation

#### Defined in

packages/core/lib/families/serializer.d.ts:17

___

### parseRPCCall

▸ **parseRPCCall**(`data`): [`RpcRequest`](interfaces/RpcRequest.md) \| [`RpcResponse`](modules.md#rpcresponse)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `string` |

#### Returns

[`RpcRequest`](interfaces/RpcRequest.md) \| [`RpcResponse`](modules.md#rpcresponse)

#### Defined in

packages/core/lib/JSONRPC/helpers.d.ts:2

___

### serializeAccount

▸ **serializeAccount**(`account`): [`RawAccount`](modules.md#rawaccount)

Serialize an [Account](modules.md#account) object in order to send it over JSON-RPC protocol
to the Ledger Live platform

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `account` | [`Account`](modules.md#account) | The account object to serialize |

#### Returns

[`RawAccount`](modules.md#rawaccount)

The raw representation of the provided account object

#### Defined in

packages/core/lib/accounts/serializers.d.ts:9

___

### serializeTransaction

▸ **serializeTransaction**(`transaction`): [`RawTransaction`](modules.md#rawtransaction)

Serialize an [Transaction](modules.md#transaction) object in order to send it over JSON-RPC
protocol to the Ledger Live platform

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `transaction` | [`Transaction`](modules.md#transaction) | The transaction object to serialize |

#### Returns

[`RawTransaction`](modules.md#rawtransaction)

The raw representation of the provided transaction object

#### Defined in

packages/core/lib/families/serializer.d.ts:9
