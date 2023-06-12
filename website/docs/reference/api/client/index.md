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
- [CardanoTransaction](interfaces/CardanoTransaction.md)
- [CeloTransaction](interfaces/CeloTransaction.md)
- [CosmosTransaction](interfaces/CosmosTransaction.md)
- [CryptoOrgTransaction](interfaces/CryptoOrgTransaction.md)
- [ElrondTransaction](interfaces/ElrondTransaction.md)
- [EthereumTransaction](interfaces/EthereumTransaction.md)
- [FilecoinTransaction](interfaces/FilecoinTransaction.md)
- [HederaTransaction](interfaces/HederaTransaction.md)
- [NearTransaction](interfaces/NearTransaction.md)
- [NeoTransaction](interfaces/NeoTransaction.md)
- [PolkadotTransaction](interfaces/PolkadotTransaction.md)
- [RippleTransaction](interfaces/RippleTransaction.md)
- [RpcRequest](interfaces/RpcRequest.md)
- [RpcResponseCommon](interfaces/RpcResponseCommon.md)
- [RpcResponseError](interfaces/RpcResponseError.md)
- [RpcResponseFailed](interfaces/RpcResponseFailed.md)
- [RpcResponseSuccess](interfaces/RpcResponseSuccess.md)
- [SolanaTransaction](interfaces/SolanaTransaction.md)
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

[packages/core/src/accounts/types.ts:13](https://github.com/LedgerHQ/wallet-api/blob/main/packages/core/src/accounts/types.ts#L13)

___

### AccountList

Ƭ **AccountList**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `params` | `z.infer`<typeof `schemaAccountListParams`\> |
| `result` | `z.infer`<typeof `schemaAccountListResults`\> |

#### Defined in

[packages/core/src/spec/types/AccountList.ts:19](https://github.com/LedgerHQ/wallet-api/blob/main/packages/core/src/spec/types/AccountList.ts#L19)

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

[packages/core/src/spec/types/AccountList.ts:24](https://github.com/LedgerHQ/wallet-api/blob/main/packages/core/src/spec/types/AccountList.ts#L24)

___

### AccountNotFound

Ƭ **AccountNotFound**: `z.infer`<typeof [`schemaAccountNotFound`](#schemaaccountnotfound)\>

#### Defined in

[packages/core/src/errors/types.ts:47](https://github.com/LedgerHQ/wallet-api/blob/main/packages/core/src/errors/types.ts#L47)

___

### AccountReceive

Ƭ **AccountReceive**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `params` | `z.infer`<typeof `schemaAccountReceiveParams`\> |
| `result` | `z.infer`<typeof `schemaAccountReceiveResults`\> |

#### Defined in

[packages/core/src/spec/types/AccountReceive.ts:16](https://github.com/LedgerHQ/wallet-api/blob/main/packages/core/src/spec/types/AccountReceive.ts#L16)

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

[packages/core/src/spec/types/AccountReceive.ts:21](https://github.com/LedgerHQ/wallet-api/blob/main/packages/core/src/spec/types/AccountReceive.ts#L21)

___

### AccountRequest

Ƭ **AccountRequest**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `params` | `z.infer`<typeof `schemaAccountRequestParams`\> |
| `result` | `z.infer`<typeof `schemaAccountRequestResults`\> |

#### Defined in

[packages/core/src/spec/types/AccountRequest.ts:17](https://github.com/LedgerHQ/wallet-api/blob/main/packages/core/src/spec/types/AccountRequest.ts#L17)

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

[packages/core/src/spec/types/AccountRequest.ts:22](https://github.com/LedgerHQ/wallet-api/blob/main/packages/core/src/spec/types/AccountRequest.ts#L22)

___

### AlgorandOperationMode

Ƭ **AlgorandOperationMode**: `z.infer`<typeof `schemaAlgorandOperationMode`\>

#### Defined in

[packages/core/src/families/algorand/types.ts:9](https://github.com/LedgerHQ/wallet-api/blob/main/packages/core/src/families/algorand/types.ts#L9)

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

[packages/core/src/types/index.ts:70](https://github.com/LedgerHQ/wallet-api/blob/main/packages/core/src/types/index.ts#L70)

___

### BitcoinGetXPub

Ƭ **BitcoinGetXPub**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `params` | `z.infer`<typeof `schemaBitcoinGetXPubParams`\> |
| `result` | `z.infer`<typeof `schemaBitcoinGetXPubResults`\> |

#### Defined in

[packages/core/src/spec/types/BitcoinGetXPub.ts:16](https://github.com/LedgerHQ/wallet-api/blob/main/packages/core/src/spec/types/BitcoinGetXPub.ts#L16)

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

[packages/core/src/spec/types/BitcoinGetXPub.ts:21](https://github.com/LedgerHQ/wallet-api/blob/main/packages/core/src/spec/types/BitcoinGetXPub.ts#L21)

___

### Command

Ƭ **Command**: [`TransferCommand`](#transfercommand) \| [`TokenTransferCommand`](#tokentransfercommand) \| [`TokenCreateATACommand`](#tokencreateatacommand) \| [`StakeCreateAccountCommand`](#stakecreateaccountcommand) \| [`StakeDelegateCommand`](#stakedelegatecommand) \| [`StakeUndelegateCommand`](#stakeundelegatecommand) \| [`StakeWithdrawCommand`](#stakewithdrawcommand) \| [`StakeSplitCommand`](#stakesplitcommand)

#### Defined in

[packages/core/src/families/solana/types.ts:79](https://github.com/LedgerHQ/wallet-api/blob/main/packages/core/src/families/solana/types.ts#L79)

___

### CommandDescriptor

Ƭ **CommandDescriptor**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `command` | [`Command`](#command) |
| `errors` | `Record`<`string`, `Error`\> |
| `fee` | `number` |
| `warnings` | `Record`<`string`, `Error`\> |

#### Defined in

[packages/core/src/families/solana/types.ts:89](https://github.com/LedgerHQ/wallet-api/blob/main/packages/core/src/families/solana/types.ts#L89)

___

### CosmosOperationMode

Ƭ **CosmosOperationMode**: `z.infer`<typeof `schemaCosmosOperationMode`\>

#### Defined in

[packages/core/src/families/cosmos/types.ts:9](https://github.com/LedgerHQ/wallet-api/blob/main/packages/core/src/families/cosmos/types.ts#L9)

___

### CryptoCurrency

Ƭ **CryptoCurrency**: `z.infer`<typeof [`schemaCryptoCurrency`](#schemacryptocurrency)\>

Crypto currency model

#### Defined in

[packages/core/src/currencies/types.ts:23](https://github.com/LedgerHQ/wallet-api/blob/main/packages/core/src/currencies/types.ts#L23)

___

### Currency

Ƭ **Currency**: `z.infer`<typeof [`schemaCurrency`](#schemacurrency)\>

#### Defined in

[packages/core/src/currencies/types.ts:30](https://github.com/LedgerHQ/wallet-api/blob/main/packages/core/src/currencies/types.ts#L30)

___

### CurrencyList

Ƭ **CurrencyList**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `params` | `z.infer`<typeof `schemaCurrencyListParams`\> |
| `result` | `z.infer`<typeof `schemaCurrencyListResult`\> |

#### Defined in

[packages/core/src/spec/types/CurrencyList.ts:19](https://github.com/LedgerHQ/wallet-api/blob/main/packages/core/src/spec/types/CurrencyList.ts#L19)

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

[packages/core/src/spec/types/CurrencyList.ts:24](https://github.com/LedgerHQ/wallet-api/blob/main/packages/core/src/spec/types/CurrencyList.ts#L24)

___

### CurrencyNotFound

Ƭ **CurrencyNotFound**: `z.infer`<typeof [`schemaCurrencyNotFound`](#schemacurrencynotfound)\>

#### Defined in

[packages/core/src/errors/types.ts:61](https://github.com/LedgerHQ/wallet-api/blob/main/packages/core/src/errors/types.ts#L61)

___

### CurrencyType

Ƭ **CurrencyType**: `z.infer`<typeof [`schemaCurrencyType`](#schemacurrencytype)\>

Currency types

#### Defined in

[packages/core/src/currencies/types.ts:13](https://github.com/LedgerHQ/wallet-api/blob/main/packages/core/src/currencies/types.ts#L13)

___

### DeviceClose

Ƭ **DeviceClose**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `params` | `z.infer`<typeof `schemaDeviceCloseParams`\> |
| `result` | `z.infer`<typeof `schemaDeviceCloseResults`\> |

#### Defined in

[packages/core/src/spec/types/DeviceClose.ts:16](https://github.com/LedgerHQ/wallet-api/blob/main/packages/core/src/spec/types/DeviceClose.ts#L16)

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

[packages/core/src/spec/types/DeviceClose.ts:21](https://github.com/LedgerHQ/wallet-api/blob/main/packages/core/src/spec/types/DeviceClose.ts#L21)

___

### DeviceExchange

Ƭ **DeviceExchange**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `params` | `z.infer`<typeof `schemaDeviceExchangeParams`\> |
| `result` | `z.infer`<typeof `schemaDeviceExchangeResults`\> |

#### Defined in

[packages/core/src/spec/types/DeviceExchange.ts:17](https://github.com/LedgerHQ/wallet-api/blob/main/packages/core/src/spec/types/DeviceExchange.ts#L17)

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

[packages/core/src/spec/types/DeviceExchange.ts:22](https://github.com/LedgerHQ/wallet-api/blob/main/packages/core/src/spec/types/DeviceExchange.ts#L22)

___

### DeviceInfo

Ƭ **DeviceInfo**: `Object`

Information about a device

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `modelId` | [`DeviceModel`](enums/DeviceModel.md) | The [[DeviceModel \| model]] of the device |
| `version` | `string` | The version of the firmware |

#### Defined in

[packages/core/src/types/index.ts:47](https://github.com/LedgerHQ/wallet-api/blob/main/packages/core/src/types/index.ts#L47)

___

### DeviceOpen

Ƭ **DeviceOpen**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `params` | `z.infer`<typeof `schemaDeviceOpenParams`\> |
| `result` | `z.infer`<typeof `schemaDeviceOpenResults`\> |

#### Defined in

[packages/core/src/spec/types/DeviceOpen.ts:17](https://github.com/LedgerHQ/wallet-api/blob/main/packages/core/src/spec/types/DeviceOpen.ts#L17)

___

### DeviceOpenHandler

Ƭ **DeviceOpenHandler**: (`params`: [`DeviceOpen`](#deviceopen)[``"params"``]) => [`DeviceOpen`](#deviceopen)[``"result"``]

#### Type declaration

▸ (`params`): [`DeviceOpen`](#deviceopen)[``"result"``]

##### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`DeviceOpen`](#deviceopen)[``"params"``] |

##### Returns

[`DeviceOpen`](#deviceopen)[``"result"``]

#### Defined in

[packages/core/src/spec/types/DeviceOpen.ts:22](https://github.com/LedgerHQ/wallet-api/blob/main/packages/core/src/spec/types/DeviceOpen.ts#L22)

___

### DeviceSelect

Ƭ **DeviceSelect**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `params` | `z.infer`<typeof `schemaDeviceSelectParams`\> |
| `result` | `z.infer`<typeof `schemaDeviceSelectResults`\> |

#### Defined in

[packages/core/src/spec/types/DeviceSelect.ts:36](https://github.com/LedgerHQ/wallet-api/blob/main/packages/core/src/spec/types/DeviceSelect.ts#L36)

___

### DeviceSelectHandler

Ƭ **DeviceSelectHandler**: (`params`: [`DeviceSelect`](#deviceselect)[``"params"``]) => [`DeviceSelect`](#deviceselect)[``"result"``]

#### Type declaration

▸ (`params`): [`DeviceSelect`](#deviceselect)[``"result"``]

##### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`DeviceSelect`](#deviceselect)[``"params"``] |

##### Returns

[`DeviceSelect`](#deviceselect)[``"result"``]

#### Defined in

[packages/core/src/spec/types/DeviceSelect.ts:41](https://github.com/LedgerHQ/wallet-api/blob/main/packages/core/src/spec/types/DeviceSelect.ts#L41)

___

### DeviceTransport

Ƭ **DeviceTransport**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `params` | `z.infer`<typeof `schemaDeviceTransportParams`\> |
| `result` | `z.infer`<typeof `schemaDeviceTransportResults`\> |

#### Defined in

[packages/core/src/spec/types/DeviceTransport.ts:36](https://github.com/LedgerHQ/wallet-api/blob/main/packages/core/src/spec/types/DeviceTransport.ts#L36)

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

[packages/core/src/spec/types/DeviceTransport.ts:41](https://github.com/LedgerHQ/wallet-api/blob/main/packages/core/src/spec/types/DeviceTransport.ts#L41)

___

### DeviceType

Ƭ **DeviceType**: `z.infer`<typeof [`schemaDeviceType`](#schemadevicetype)\>

#### Defined in

[packages/core/src/spec/types/Device.ts:11](https://github.com/LedgerHQ/wallet-api/blob/main/packages/core/src/spec/types/Device.ts#L11)

___

### ERC20TokenCurrency

Ƭ **ERC20TokenCurrency**: `z.infer`<typeof [`schemaERC20TokenCurrency`](#schemaerc20tokencurrency)\>

ERC20 token currency model

#### Defined in

[packages/core/src/currencies/types.ts:28](https://github.com/LedgerHQ/wallet-api/blob/main/packages/core/src/currencies/types.ts#L28)

___

### EcdsaSignature

Ƭ **EcdsaSignature**: `Buffer`

The ECDSA signature of the [[ExchangePayload | payload]]

#### Defined in

[packages/core/src/types/index.ts:13](https://github.com/LedgerHQ/wallet-api/blob/main/packages/core/src/types/index.ts#L13)

___

### ExchangeComplete

Ƭ **ExchangeComplete**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `params` | `z.infer`<typeof `schemaExchangeCompleteParams`\> |
| `result` | `z.infer`<typeof `schemaExchangeCompleteResults`\> |

#### Defined in

[packages/core/src/spec/types/ExchangeComplete.ts:46](https://github.com/LedgerHQ/wallet-api/blob/main/packages/core/src/spec/types/ExchangeComplete.ts#L46)

___

### ExchangeCompleteHandler

Ƭ **ExchangeCompleteHandler**: (`params`: [`ExchangeComplete`](#exchangecomplete)[``"params"``]) => [`ExchangeComplete`](#exchangecomplete)[``"result"``]

#### Type declaration

▸ (`params`): [`ExchangeComplete`](#exchangecomplete)[``"result"``]

##### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`ExchangeComplete`](#exchangecomplete)[``"params"``] |

##### Returns

[`ExchangeComplete`](#exchangecomplete)[``"result"``]

#### Defined in

[packages/core/src/spec/types/ExchangeComplete.ts:51](https://github.com/LedgerHQ/wallet-api/blob/main/packages/core/src/spec/types/ExchangeComplete.ts#L51)

___

### ExchangeDeviceTxId

Ƭ **ExchangeDeviceTxId**: `string`

A transaction ID used to complete the exchange process

#### Defined in

[packages/core/src/types/index.ts:18](https://github.com/LedgerHQ/wallet-api/blob/main/packages/core/src/types/index.ts#L18)

___

### ExchangePayload

Ƭ **ExchangePayload**: `Buffer`

Metadata used to describe a secure exchange between a Ledger device
and a partner (for sell, swap and funding)
@ref: https://github.com/LedgerHQ/app-exchange/blob/master/src/proto/protocol.proto

#### Defined in

[packages/core/src/types/index.ts:8](https://github.com/LedgerHQ/wallet-api/blob/main/packages/core/src/types/index.ts#L8)

___

### ExchangeStart

Ƭ **ExchangeStart**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `params` | `z.infer`<typeof `schemaExchangeStartParams`\> |
| `result` | `z.infer`<typeof `schemaExchangeStartResults`\> |

#### Defined in

[packages/core/src/spec/types/ExchangeStart.ts:18](https://github.com/LedgerHQ/wallet-api/blob/main/packages/core/src/spec/types/ExchangeStart.ts#L18)

___

### ExchangeStartHandler

Ƭ **ExchangeStartHandler**: (`params`: [`ExchangeStart`](#exchangestart)[``"params"``]) => [`ExchangeStart`](#exchangestart)[``"result"``]

#### Type declaration

▸ (`params`): [`ExchangeStart`](#exchangestart)[``"result"``]

##### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`ExchangeStart`](#exchangestart)[``"params"``] |

##### Returns

[`ExchangeStart`](#exchangestart)[``"result"``]

#### Defined in

[packages/core/src/spec/types/ExchangeStart.ts:23](https://github.com/LedgerHQ/wallet-api/blob/main/packages/core/src/spec/types/ExchangeStart.ts#L23)

___

### Families

Ƭ **Families**: `z.infer`<typeof [`schemaFamilies`](#schemafamilies)\>

Supported coin families

#### Defined in

[packages/core/src/families/types.ts:27](https://github.com/LedgerHQ/wallet-api/blob/main/packages/core/src/families/types.ts#L27)

___

### MessageHandler

Ƭ **MessageHandler**: (`message`: `string`) => `void`

#### Type declaration

▸ (`message`): `void`

Simple contract for handling a Message received through a [[Transport]] protocol

##### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` |

##### Returns

`void`

#### Defined in

[packages/core/src/transports/types.ts:6](https://github.com/LedgerHQ/wallet-api/blob/main/packages/core/src/transports/types.ts#L6)

___

### MessageSign

Ƭ **MessageSign**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `params` | `z.infer`<typeof `schemaMessageSignParams`\> |
| `result` | `z.infer`<typeof `schemaMessageSignResults`\> |

#### Defined in

[packages/core/src/spec/types/MessageSign.ts:18](https://github.com/LedgerHQ/wallet-api/blob/main/packages/core/src/spec/types/MessageSign.ts#L18)

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

[packages/core/src/spec/types/MessageSign.ts:23](https://github.com/LedgerHQ/wallet-api/blob/main/packages/core/src/spec/types/MessageSign.ts#L23)

___

### MethodId

Ƭ **MethodId**: `z.infer`<typeof [`schemaRPCMethod`](#schemarpcmethod)\>

#### Defined in

[packages/core/src/spec/methods.ts:3](https://github.com/LedgerHQ/wallet-api/blob/main/packages/core/src/spec/methods.ts#L3)

___

### NotImplementedByWallet

Ƭ **NotImplementedByWallet**: `z.infer`<typeof [`schemaNotImplementedByWallet`](#schemanotimplementedbywallet)\>

#### Defined in

[packages/core/src/errors/types.ts:31](https://github.com/LedgerHQ/wallet-api/blob/main/packages/core/src/errors/types.ts#L31)

___

### Permission

Ƭ **Permission**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `currencyIds` | `string`[] |
| `methodIds` | `string`[] |

#### Defined in

[packages/core/src/types/index.ts:81](https://github.com/LedgerHQ/wallet-api/blob/main/packages/core/src/types/index.ts#L81)

___

### PermissionDenied

Ƭ **PermissionDenied**: `z.infer`<typeof [`schemaPermissionDenied`](#schemapermissiondenied)\>

#### Defined in

[packages/core/src/errors/types.ts:75](https://github.com/LedgerHQ/wallet-api/blob/main/packages/core/src/errors/types.ts#L75)

___

### PolkadotOperationMode

Ƭ **PolkadotOperationMode**: `z.infer`<typeof `schemaPolkadotOperationMode`\>

#### Defined in

[packages/core/src/families/polkadot/types.ts:9](https://github.com/LedgerHQ/wallet-api/blob/main/packages/core/src/families/polkadot/types.ts#L9)

___

### Promisable

Ƭ **Promisable**<`T`\>: `T` \| `PromiseLike`<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

[packages/core/src/types/index.ts:1](https://github.com/LedgerHQ/wallet-api/blob/main/packages/core/src/types/index.ts#L1)

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

[packages/client/src/WalletAPIClient.ts:22](https://github.com/LedgerHQ/wallet-api/blob/main/packages/client/src/WalletAPIClient.ts#L22)

___

### RawAccount

Ƭ **RawAccount**: `z.infer`<typeof [`schemaRawAccount`](#schemarawaccount)\>

The raw representation of the [[Account]] type

**`See`**

[[Account]] for information regarding individual fields. Each field type is the serialized version of the corresponding [[Account]] type

#### Defined in

[packages/core/src/accounts/types.ts:53](https://github.com/LedgerHQ/wallet-api/blob/main/packages/core/src/accounts/types.ts#L53)

___

### RawAlgorandTransaction

Ƭ **RawAlgorandTransaction**: `z.infer`<typeof `schemaRawAlgorandTransaction`\>

#### Defined in

[packages/core/src/families/algorand/types.ts:19](https://github.com/LedgerHQ/wallet-api/blob/main/packages/core/src/families/algorand/types.ts#L19)

___

### RawBitcoinTransaction

Ƭ **RawBitcoinTransaction**: `z.infer`<typeof `schemaRawBitcoinTransaction`\>

#### Defined in

[packages/core/src/families/bitcoin/types.ts:12](https://github.com/LedgerHQ/wallet-api/blob/main/packages/core/src/families/bitcoin/types.ts#L12)

___

### RawCardanoTransaction

Ƭ **RawCardanoTransaction**: `z.infer`<typeof `schemaRawCardanoTransaction`\>

#### Defined in

[packages/core/src/families/cardano/types.ts:13](https://github.com/LedgerHQ/wallet-api/blob/main/packages/core/src/families/cardano/types.ts#L13)

___

### RawCeloTransaction

Ƭ **RawCeloTransaction**: `z.infer`<typeof `schemaRawCeloTransaction`\>

#### Defined in

[packages/core/src/families/celo/types.ts:13](https://github.com/LedgerHQ/wallet-api/blob/main/packages/core/src/families/celo/types.ts#L13)

___

### RawCosmosTransaction

Ƭ **RawCosmosTransaction**: `z.infer`<typeof `schemaRawCosmosTransaction`\>

#### Defined in

[packages/core/src/families/cosmos/types.ts:19](https://github.com/LedgerHQ/wallet-api/blob/main/packages/core/src/families/cosmos/types.ts#L19)

___

### RawCryptoOrgTransaction

Ƭ **RawCryptoOrgTransaction**: `z.infer`<typeof `schemaRawCryptoOrgTransaction`\>

#### Defined in

[packages/core/src/families/crypto_org/types.ts:12](https://github.com/LedgerHQ/wallet-api/blob/main/packages/core/src/families/crypto_org/types.ts#L12)

___

### RawElrondTransaction

Ƭ **RawElrondTransaction**: `z.infer`<typeof `schemaRawElrondTransaction`\>

#### Defined in

[packages/core/src/families/elrond/types.ts:17](https://github.com/LedgerHQ/wallet-api/blob/main/packages/core/src/families/elrond/types.ts#L17)

___

### RawEthereumTransaction

Ƭ **RawEthereumTransaction**: `z.infer`<typeof `schemaRawEthereumTransaction`\>

#### Defined in

[packages/core/src/families/ethereum/types.ts:16](https://github.com/LedgerHQ/wallet-api/blob/main/packages/core/src/families/ethereum/types.ts#L16)

___

### RawFilecoinTransaction

Ƭ **RawFilecoinTransaction**: `z.infer`<typeof `schemaRawFilecoinTransaction`\>

#### Defined in

[packages/core/src/families/filecoin/types.ts:18](https://github.com/LedgerHQ/wallet-api/blob/main/packages/core/src/families/filecoin/types.ts#L18)

___

### RawHederaTransaction

Ƭ **RawHederaTransaction**: `z.infer`<typeof `schemaRawHederaTransaction`\>

#### Defined in

[packages/core/src/families/hedera/types.ts:10](https://github.com/LedgerHQ/wallet-api/blob/main/packages/core/src/families/hedera/types.ts#L10)

___

### RawNearTransaction

Ƭ **RawNearTransaction**: `z.infer`<typeof `schemaRawNearTransaction`\>

#### Defined in

[packages/core/src/families/near/types.ts:12](https://github.com/LedgerHQ/wallet-api/blob/main/packages/core/src/families/near/types.ts#L12)

___

### RawNeoTransaction

Ƭ **RawNeoTransaction**: `z.infer`<typeof `schemaRawNeoTransaction`\>

#### Defined in

[packages/core/src/families/neo/types.ts:9](https://github.com/LedgerHQ/wallet-api/blob/main/packages/core/src/families/neo/types.ts#L9)

___

### RawPolkadotTransaction

Ƭ **RawPolkadotTransaction**: `z.infer`<typeof `schemaRawPolkadotTransaction`\>

#### Defined in

[packages/core/src/families/polkadot/types.ts:18](https://github.com/LedgerHQ/wallet-api/blob/main/packages/core/src/families/polkadot/types.ts#L18)

___

### RawRippleTransaction

Ƭ **RawRippleTransaction**: `z.infer`<typeof `schemaRawRippleTransaction`\>

#### Defined in

[packages/core/src/families/ripple/types.ts:12](https://github.com/LedgerHQ/wallet-api/blob/main/packages/core/src/families/ripple/types.ts#L12)

___

### RawSolanaTransaction

Ƭ **RawSolanaTransaction**: `z.infer`<typeof `schemaRawSolanaTransaction`\>

#### Defined in

[packages/core/src/families/solana/types.ts:172](https://github.com/LedgerHQ/wallet-api/blob/main/packages/core/src/families/solana/types.ts#L172)

___

### RawStellarTransaction

Ƭ **RawStellarTransaction**: `z.infer`<typeof `schemaRawStellarTransaction`\>

#### Defined in

[packages/core/src/families/stellar/types.ts:16](https://github.com/LedgerHQ/wallet-api/blob/main/packages/core/src/families/stellar/types.ts#L16)

___

### RawTezosTransaction

Ƭ **RawTezosTransaction**: `z.infer`<typeof `schemaRawTezosTransaction`\>

#### Defined in

[packages/core/src/families/tezos/types.ts:18](https://github.com/LedgerHQ/wallet-api/blob/main/packages/core/src/families/tezos/types.ts#L18)

___

### RawTransaction

Ƭ **RawTransaction**: `z.infer`<typeof [`schemaRawTransaction`](#schemarawtransaction)\>

The raw representation of the generic [[Transaction]] type.

#### Defined in

[packages/core/src/families/types.ts:57](https://github.com/LedgerHQ/wallet-api/blob/main/packages/core/src/families/types.ts#L57)

___

### RawTransactionCommon

Ƭ **RawTransactionCommon**: `z.infer`<typeof [`schemaRawTransaction`](#schemarawtransaction)\>

The raw representation of the common transaction fields found in [[TransactionCommon]] type

**`See`**

[[TransactionCommon]] for information regarding individual fields. Each field type is the serialized version of the corresponding [[TransactionCommon]] type

#### Defined in

[packages/core/src/families/types.ts:33](https://github.com/LedgerHQ/wallet-api/blob/main/packages/core/src/families/types.ts#L33)

___

### RawTronTransaction

Ƭ **RawTronTransaction**: `z.infer`<typeof `schemaRawTronTransaction`\>

#### Defined in

[packages/core/src/families/tron/types.ts:20](https://github.com/LedgerHQ/wallet-api/blob/main/packages/core/src/families/tron/types.ts#L20)

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

[packages/core/src/JSONRPC/types.ts:106](https://github.com/LedgerHQ/wallet-api/blob/main/packages/core/src/JSONRPC/types.ts#L106)

___

### ServerErrorCode

Ƭ **ServerErrorCode**: `z.infer`<typeof [`schemaServerErrorCode`](#schemaservererrorcode)\>

#### Defined in

[packages/core/src/errors/types.ts:17](https://github.com/LedgerHQ/wallet-api/blob/main/packages/core/src/errors/types.ts#L17)

___

### ServerErrorData

Ƭ **ServerErrorData**: `z.infer`<typeof [`schemaServerErrorData`](#schemaservererrordata)\>

#### Defined in

[packages/core/src/errors/types.ts:118](https://github.com/LedgerHQ/wallet-api/blob/main/packages/core/src/errors/types.ts#L118)

___

### StakeCreateAccountCommand

Ƭ **StakeCreateAccountCommand**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `amount` | `number` |
| `delegate` | { `voteAccAddress`: `string`  } |
| `delegate.voteAccAddress` | `string` |
| `fromAccAddress` | `string` |
| `kind` | ``"stake.createAccount"`` |
| `seed` | `string` |
| `stakeAccAddress` | `string` |
| `stakeAccRentExemptAmount` | `number` |

#### Defined in

[packages/core/src/families/solana/types.ts:20](https://github.com/LedgerHQ/wallet-api/blob/main/packages/core/src/families/solana/types.ts#L20)

___

### StakeCreateAccountTransaction

Ƭ **StakeCreateAccountTransaction**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `kind` | ``"stake.createAccount"`` |
| `uiState` | { `delegate`: { `voteAccAddress`: `string`  }  } |
| `uiState.delegate` | { `voteAccAddress`: `string`  } |
| `uiState.delegate.voteAccAddress` | `string` |

#### Defined in

[packages/core/src/families/solana/types.ts:118](https://github.com/LedgerHQ/wallet-api/blob/main/packages/core/src/families/solana/types.ts#L118)

___

### StakeDelegateCommand

Ƭ **StakeDelegateCommand**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `authorizedAccAddr` | `string` |
| `kind` | ``"stake.delegate"`` |
| `stakeAccAddr` | `string` |
| `voteAccAddr` | `string` |

#### Defined in

[packages/core/src/families/solana/types.ts:32](https://github.com/LedgerHQ/wallet-api/blob/main/packages/core/src/families/solana/types.ts#L32)

___

### StakeDelegateTransaction

Ƭ **StakeDelegateTransaction**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `kind` | ``"stake.delegate"`` |
| `uiState` | { `stakeAccAddr`: `string` ; `voteAccAddr`: `string`  } |
| `uiState.stakeAccAddr` | `string` |
| `uiState.voteAccAddr` | `string` |

#### Defined in

[packages/core/src/families/solana/types.ts:127](https://github.com/LedgerHQ/wallet-api/blob/main/packages/core/src/families/solana/types.ts#L127)

___

### StakeSplitCommand

Ƭ **StakeSplitCommand**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `amount` | `number` |
| `authorizedAccAddr` | `string` |
| `kind` | ``"stake.split"`` |
| `seed` | `string` |
| `splitStakeAccAddr` | `string` |
| `stakeAccAddr` | `string` |

#### Defined in

[packages/core/src/families/solana/types.ts:53](https://github.com/LedgerHQ/wallet-api/blob/main/packages/core/src/families/solana/types.ts#L53)

___

### StakeSplitTransaction

Ƭ **StakeSplitTransaction**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `kind` | ``"stake.split"`` |
| `uiState` | { `stakeAccAddr`: `string`  } |
| `uiState.stakeAccAddr` | `string` |

#### Defined in

[packages/core/src/families/solana/types.ts:149](https://github.com/LedgerHQ/wallet-api/blob/main/packages/core/src/families/solana/types.ts#L149)

___

### StakeUndelegateCommand

Ƭ **StakeUndelegateCommand**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `authorizedAccAddr` | `string` |
| `kind` | ``"stake.undelegate"`` |
| `stakeAccAddr` | `string` |

#### Defined in

[packages/core/src/families/solana/types.ts:39](https://github.com/LedgerHQ/wallet-api/blob/main/packages/core/src/families/solana/types.ts#L39)

___

### StakeUndelegateTransaction

Ƭ **StakeUndelegateTransaction**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `kind` | ``"stake.undelegate"`` |
| `uiState` | { `stakeAccAddr`: `string`  } |
| `uiState.stakeAccAddr` | `string` |

#### Defined in

[packages/core/src/families/solana/types.ts:135](https://github.com/LedgerHQ/wallet-api/blob/main/packages/core/src/families/solana/types.ts#L135)

___

### StakeWithdrawCommand

Ƭ **StakeWithdrawCommand**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `amount` | `number` |
| `authorizedAccAddr` | `string` |
| `kind` | ``"stake.withdraw"`` |
| `stakeAccAddr` | `string` |
| `toAccAddr` | `string` |

#### Defined in

[packages/core/src/families/solana/types.ts:45](https://github.com/LedgerHQ/wallet-api/blob/main/packages/core/src/families/solana/types.ts#L45)

___

### StakeWithdrawTransaction

Ƭ **StakeWithdrawTransaction**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `kind` | ``"stake.withdraw"`` |
| `uiState` | { `stakeAccAddr`: `string`  } |
| `uiState.stakeAccAddr` | `string` |

#### Defined in

[packages/core/src/families/solana/types.ts:142](https://github.com/LedgerHQ/wallet-api/blob/main/packages/core/src/families/solana/types.ts#L142)

___

### StellarMemoType

Ƭ **StellarMemoType**: `z.infer`<typeof `stellarMemoTypeEnum`\>

#### Defined in

[packages/core/src/families/stellar/types.ts:18](https://github.com/LedgerHQ/wallet-api/blob/main/packages/core/src/families/stellar/types.ts#L18)

___

### StorageGet

Ƭ **StorageGet**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `params` | `z.infer`<typeof `schemaStorageGetParams`\> |
| `result` | `z.infer`<typeof `schemaStorageGetResults`\> |

#### Defined in

[packages/core/src/spec/types/StorageGet.ts:17](https://github.com/LedgerHQ/wallet-api/blob/main/packages/core/src/spec/types/StorageGet.ts#L17)

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

[packages/core/src/spec/types/StorageGet.ts:22](https://github.com/LedgerHQ/wallet-api/blob/main/packages/core/src/spec/types/StorageGet.ts#L22)

___

### StorageSet

Ƭ **StorageSet**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `params` | `z.infer`<typeof `schemaStorageSetParams`\> |
| `result` | `z.infer`<typeof `schemaStorageSetResults`\> |

#### Defined in

[packages/core/src/spec/types/StorageSet.ts:16](https://github.com/LedgerHQ/wallet-api/blob/main/packages/core/src/spec/types/StorageSet.ts#L16)

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

[packages/core/src/spec/types/StorageSet.ts:21](https://github.com/LedgerHQ/wallet-api/blob/main/packages/core/src/spec/types/StorageSet.ts#L21)

___

### TezosOperationMode

Ƭ **TezosOperationMode**: `z.infer`<typeof `schemaTezosOperationMode`\>

#### Defined in

[packages/core/src/families/tezos/types.ts:9](https://github.com/LedgerHQ/wallet-api/blob/main/packages/core/src/families/tezos/types.ts#L9)

___

### TokenCreateATACommand

Ƭ **TokenCreateATACommand**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `associatedTokenAccountAddress` | `string` |
| `kind` | ``"token.createATA"`` |
| `mint` | `string` |
| `owner` | `string` |

#### Defined in

[packages/core/src/families/solana/types.ts:13](https://github.com/LedgerHQ/wallet-api/blob/main/packages/core/src/families/solana/types.ts#L13)

___

### TokenCreateATATransaction

Ƭ **TokenCreateATATransaction**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `kind` | ``"token.createATA"`` |
| `uiState` | { `tokenId`: `string`  } |
| `uiState.tokenId` | `string` |

#### Defined in

[packages/core/src/families/solana/types.ts:111](https://github.com/LedgerHQ/wallet-api/blob/main/packages/core/src/families/solana/types.ts#L111)

___

### TokenRecipientDescriptor

Ƭ **TokenRecipientDescriptor**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `shouldCreateAsAssociatedTokenAccount` | `boolean` |
| `tokenAccAddress` | `string` |
| `walletAddress` | `string` |

#### Defined in

[packages/core/src/families/solana/types.ts:62](https://github.com/LedgerHQ/wallet-api/blob/main/packages/core/src/families/solana/types.ts#L62)

___

### TokenStandard

Ƭ **TokenStandard**: `z.infer`<typeof [`schemaTokenStandard`](#schematokenstandard)\>

Token standards

#### Defined in

[packages/core/src/currencies/types.ts:18](https://github.com/LedgerHQ/wallet-api/blob/main/packages/core/src/currencies/types.ts#L18)

___

### TokenTransferCommand

Ƭ **TokenTransferCommand**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `amount` | `number` |
| `kind` | ``"token.transfer"`` |
| `memo?` | `string` |
| `mintAddress` | `string` |
| `mintDecimals` | `number` |
| `ownerAddress` | `string` |
| `ownerAssociatedTokenAccountAddress` | `string` |
| `recipientDescriptor` | [`TokenRecipientDescriptor`](#tokenrecipientdescriptor) |

#### Defined in

[packages/core/src/families/solana/types.ts:68](https://github.com/LedgerHQ/wallet-api/blob/main/packages/core/src/families/solana/types.ts#L68)

___

### TokenTransferTransaction

Ƭ **TokenTransferTransaction**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `kind` | ``"token.transfer"`` |
| `uiState` | { `memo?`: `string` ; `subAccountId`: `string`  } |
| `uiState.memo?` | `string` |
| `uiState.subAccountId` | `string` |

#### Defined in

[packages/core/src/families/solana/types.ts:103](https://github.com/LedgerHQ/wallet-api/blob/main/packages/core/src/families/solana/types.ts#L103)

___

### Transaction

Ƭ **Transaction**: [`EthereumTransaction`](interfaces/EthereumTransaction.md) \| [`BitcoinTransaction`](interfaces/BitcoinTransaction.md) \| [`AlgorandTransaction`](interfaces/AlgorandTransaction.md) \| [`CryptoOrgTransaction`](interfaces/CryptoOrgTransaction.md) \| [`HederaTransaction`](interfaces/HederaTransaction.md) \| [`FilecoinTransaction`](interfaces/FilecoinTransaction.md) \| [`RippleTransaction`](interfaces/RippleTransaction.md) \| [`CeloTransaction`](interfaces/CeloTransaction.md) \| [`CosmosTransaction`](interfaces/CosmosTransaction.md) \| [`TezosTransaction`](interfaces/TezosTransaction.md) \| [`PolkadotTransaction`](interfaces/PolkadotTransaction.md) \| [`StellarTransaction`](interfaces/StellarTransaction.md) \| [`TronTransaction`](interfaces/TronTransaction.md) \| [`NearTransaction`](interfaces/NearTransaction.md) \| [`NeoTransaction`](interfaces/NeoTransaction.md) \| [`ElrondTransaction`](interfaces/ElrondTransaction.md) \| [`CardanoTransaction`](interfaces/CardanoTransaction.md) \| [`SolanaTransaction`](interfaces/SolanaTransaction.md)

Description of an unsigned transaction. This type is used to build
transactions and then sign them with a Ledger device and finally broadcast
them to the network upon user validation.

#### Defined in

[packages/core/src/families/types.ts:64](https://github.com/LedgerHQ/wallet-api/blob/main/packages/core/src/families/types.ts#L64)

___

### TransactionModel

Ƭ **TransactionModel**: { `commandDescriptor?`: [`CommandDescriptor`](#commanddescriptor)  } & [`TransferTransaction`](#transfertransaction) \| [`TokenTransferTransaction`](#tokentransfertransaction) \| [`TokenCreateATATransaction`](#tokencreateatatransaction) \| [`StakeCreateAccountTransaction`](#stakecreateaccounttransaction) \| [`StakeDelegateTransaction`](#stakedelegatetransaction) \| [`StakeUndelegateTransaction`](#stakeundelegatetransaction) \| [`StakeWithdrawTransaction`](#stakewithdrawtransaction) \| [`StakeSplitTransaction`](#stakesplittransaction)

#### Defined in

[packages/core/src/families/solana/types.ts:156](https://github.com/LedgerHQ/wallet-api/blob/main/packages/core/src/families/solana/types.ts#L156)

___

### TransactionSign

Ƭ **TransactionSign**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `params` | `z.infer`<typeof `schemaTransactionSignParams`\> |
| `result` | `z.infer`<typeof `schemaTransactionSignResults`\> |

#### Defined in

[packages/core/src/spec/types/TransactionSign.ts:24](https://github.com/LedgerHQ/wallet-api/blob/main/packages/core/src/spec/types/TransactionSign.ts#L24)

___

### TransactionSignAndBroadcast

Ƭ **TransactionSignAndBroadcast**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `params` | `z.infer`<typeof `schemaTransactionSignAndBroadcastParams`\> |
| `result` | `z.infer`<typeof `schemaTransactionSignAndBroadcastResults`\> |

#### Defined in

[packages/core/src/spec/types/TransactionSignAndBroadcast.ts:24](https://github.com/LedgerHQ/wallet-api/blob/main/packages/core/src/spec/types/TransactionSignAndBroadcast.ts#L24)

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

[packages/core/src/spec/types/TransactionSignAndBroadcast.ts:29](https://github.com/LedgerHQ/wallet-api/blob/main/packages/core/src/spec/types/TransactionSignAndBroadcast.ts#L29)

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

[packages/core/src/spec/types/TransactionSign.ts:29](https://github.com/LedgerHQ/wallet-api/blob/main/packages/core/src/spec/types/TransactionSign.ts#L29)

___

### TransferCommand

Ƭ **TransferCommand**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `amount` | `number` |
| `kind` | ``"transfer"`` |
| `memo?` | `string` |
| `recipient` | `string` |
| `sender` | `string` |

#### Defined in

[packages/core/src/families/solana/types.ts:5](https://github.com/LedgerHQ/wallet-api/blob/main/packages/core/src/families/solana/types.ts#L5)

___

### TransferTransaction

Ƭ **TransferTransaction**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `kind` | ``"transfer"`` |
| `uiState` | { `memo?`: `string`  } |
| `uiState.memo?` | `string` |

#### Defined in

[packages/core/src/families/solana/types.ts:96](https://github.com/LedgerHQ/wallet-api/blob/main/packages/core/src/families/solana/types.ts#L96)

___

### TronOperationMode

Ƭ **TronOperationMode**: `z.infer`<typeof `schemaTronOperationMode`\>

#### Defined in

[packages/core/src/families/tron/types.ts:9](https://github.com/LedgerHQ/wallet-api/blob/main/packages/core/src/families/tron/types.ts#L9)

___

### TronResource

Ƭ **TronResource**: `z.infer`<typeof `schemaTronResource`\>

#### Defined in

[packages/core/src/families/tron/types.ts:11](https://github.com/LedgerHQ/wallet-api/blob/main/packages/core/src/families/tron/types.ts#L11)

___

### UnauthorizedStore

Ƭ **UnauthorizedStore**: `z.infer`<typeof [`schemaUnauthorizedStore`](#schemaunauthorizedstore)\>

#### Defined in

[packages/core/src/errors/types.ts:107](https://github.com/LedgerHQ/wallet-api/blob/main/packages/core/src/errors/types.ts#L107)

___

### UnknownError

Ƭ **UnknownError**: `z.infer`<typeof [`schemaUnknownError`](#schemaunknownerror)\>

#### Defined in

[packages/core/src/errors/types.ts:93](https://github.com/LedgerHQ/wallet-api/blob/main/packages/core/src/errors/types.ts#L93)

___

### WalletCapabilities

Ƭ **WalletCapabilities**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `params` | `z.infer`<typeof `schemaWalletCapabilitiesParams`\> |
| `result` | `z.infer`<typeof `schemaWalletCapabilitiesResults`\> |

#### Defined in

[packages/core/src/spec/types/WalletCapabilities.ts:14](https://github.com/LedgerHQ/wallet-api/blob/main/packages/core/src/spec/types/WalletCapabilities.ts#L14)

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

[packages/core/src/spec/types/WalletCapabilities.ts:19](https://github.com/LedgerHQ/wallet-api/blob/main/packages/core/src/spec/types/WalletCapabilities.ts#L19)

___

### WalletInfo

Ƭ **WalletInfo**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `params` | `z.infer`<typeof `schemaWalletInfoParams`\> |
| `result` | `z.infer`<typeof `schemaWalletInfoResults`\> |

#### Defined in

[packages/core/src/spec/types/WalletInfo.ts:18](https://github.com/LedgerHQ/wallet-api/blob/main/packages/core/src/spec/types/WalletInfo.ts#L18)

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

[packages/core/src/spec/types/WalletInfo.ts:23](https://github.com/LedgerHQ/wallet-api/blob/main/packages/core/src/spec/types/WalletInfo.ts#L23)

___

### WalletUserId

Ƭ **WalletUserId**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `params` | `z.infer`<typeof `schemaWalletUserIdParams`\> |
| `result` | `z.infer`<typeof `schemaWalletUserIdResults`\> |

#### Defined in

[packages/core/src/spec/types/WalletUserId.ts:14](https://github.com/LedgerHQ/wallet-api/blob/main/packages/core/src/spec/types/WalletUserId.ts#L14)

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

[packages/core/src/spec/types/WalletUserId.ts:19](https://github.com/LedgerHQ/wallet-api/blob/main/packages/core/src/spec/types/WalletUserId.ts#L19)

## Variables

### FAMILIES

• `Const` **FAMILIES**: readonly [``"bitcoin"``, ``"ethereum"``, ``"algorand"``, ``"crypto_org"``, ``"ripple"``, ``"cosmos"``, ``"ripple"``, ``"celo"``, ``"cosmos"``, ``"hedera"``, ``"filecoin"``, ``"tezos"``, ``"polkadot"``, ``"stellar"``, ``"tron"``, ``"near"``, ``"neo"``, ``"elrond"``, ``"cardano"``, ``"solana"``]

#### Defined in

[packages/core/src/families/common.ts:8](https://github.com/LedgerHQ/wallet-api/blob/main/packages/core/src/families/common.ts#L8)

___

### schemaAccountList

• `Const` **schemaAccountList**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `params` | `ZodOptional`<`ZodObject`<{ `currencyIds`: `ZodOptional`<`ZodArray`<`ZodString`, ``"many"``\>\>  }, ``"strip"``, `ZodTypeAny`, { `currencyIds?`: `string`[]  }, { `currencyIds?`: `string`[]  }\>\> |
| `result` | `ZodObject`<{ `rawAccounts`: `ZodArray`<`ZodObject`<{ `address`: `ZodString` ; `balance`: `ZodString` ; `blockHeight`: `ZodNumber` ; `currency`: `ZodString` ; `id`: `ZodString` ; `lastSyncDate`: `ZodString` ; `name`: `ZodString` ; `spendableBalance`: `ZodString`  }, ``"strip"``, `ZodTypeAny`, { `address`: `string` ; `balance`: `string` ; `blockHeight`: `number` ; `currency`: `string` ; `id`: `string` ; `lastSyncDate`: `string` ; `name`: `string` ; `spendableBalance`: `string`  }, { `address`: `string` ; `balance`: `string` ; `blockHeight`: `number` ; `currency`: `string` ; `id`: `string` ; `lastSyncDate`: `string` ; `name`: `string` ; `spendableBalance`: `string`  }\>, ``"many"``\>  }, ``"strip"``, `ZodTypeAny`, { `rawAccounts`: { id: string; address: string; name: string; currency: string; balance: string; spendableBalance: string; blockHeight: number; lastSyncDate: string; }[]  }, { `rawAccounts`: { id: string; address: string; name: string; currency: string; balance: string; spendableBalance: string; blockHeight: number; lastSyncDate: string; }[]  }\> |

#### Defined in

[packages/core/src/spec/types/AccountList.ts:14](https://github.com/LedgerHQ/wallet-api/blob/main/packages/core/src/spec/types/AccountList.ts#L14)

___

### schemaAccountNotFound

• `Const` **schemaAccountNotFound**: `ZodObject`<{ `code`: `ZodLiteral`<``"ACCOUNT_NOT_FOUND"``\> ; `data`: `ZodObject`<{ `accountId`: `ZodString`  }, ``"strip"``, `ZodTypeAny`, { `accountId`: `string`  }, { `accountId`: `string`  }\> ; `message`: `ZodString`  }, ``"strip"``, `ZodTypeAny`, { `code`: ``"ACCOUNT_NOT_FOUND"`` ; `data`: { accountId: string; } ; `message`: `string`  }, { `code`: ``"ACCOUNT_NOT_FOUND"`` ; `data`: { accountId: string; } ; `message`: `string`  }\>

#### Defined in

[packages/core/src/errors/types.ts:39](https://github.com/LedgerHQ/wallet-api/blob/main/packages/core/src/errors/types.ts#L39)

___

### schemaAccountReceive

• `Const` **schemaAccountReceive**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `params` | `ZodObject`<{ `accountId`: `ZodString`  }, ``"strip"``, `ZodTypeAny`, { `accountId`: `string`  }, { `accountId`: `string`  }\> |
| `result` | `ZodObject`<{ `address`: `ZodString`  }, ``"strip"``, `ZodTypeAny`, { `address`: `string`  }, { `address`: `string`  }\> |

#### Defined in

[packages/core/src/spec/types/AccountReceive.ts:11](https://github.com/LedgerHQ/wallet-api/blob/main/packages/core/src/spec/types/AccountReceive.ts#L11)

___

### schemaAccountRequest

• `Const` **schemaAccountRequest**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `params` | `ZodObject`<{ `currencyIds`: `ZodOptional`<`ZodArray`<`ZodString`, ``"many"``\>\>  }, ``"strip"``, `ZodTypeAny`, { `currencyIds?`: `string`[]  }, { `currencyIds?`: `string`[]  }\> |
| `result` | `ZodObject`<{ `rawAccount`: `ZodObject`<{ `address`: `ZodString` ; `balance`: `ZodString` ; `blockHeight`: `ZodNumber` ; `currency`: `ZodString` ; `id`: `ZodString` ; `lastSyncDate`: `ZodString` ; `name`: `ZodString` ; `spendableBalance`: `ZodString`  }, ``"strip"``, `ZodTypeAny`, { `address`: `string` ; `balance`: `string` ; `blockHeight`: `number` ; `currency`: `string` ; `id`: `string` ; `lastSyncDate`: `string` ; `name`: `string` ; `spendableBalance`: `string`  }, { `address`: `string` ; `balance`: `string` ; `blockHeight`: `number` ; `currency`: `string` ; `id`: `string` ; `lastSyncDate`: `string` ; `name`: `string` ; `spendableBalance`: `string`  }\> = schemaRawAccount }, ``"strip"``, `ZodTypeAny`, { `rawAccount`: { id: string; address: string; name: string; currency: string; balance: string; spendableBalance: string; blockHeight: number; lastSyncDate: string; } = schemaRawAccount }, { `rawAccount`: { id: string; address: string; name: string; currency: string; balance: string; spendableBalance: string; blockHeight: number; lastSyncDate: string; } = schemaRawAccount }\> |

#### Defined in

[packages/core/src/spec/types/AccountRequest.ts:12](https://github.com/LedgerHQ/wallet-api/blob/main/packages/core/src/spec/types/AccountRequest.ts#L12)

___

### schemaBaseCurrency

• `Const` **schemaBaseCurrency**: `ZodObject`<{ `color`: `ZodString` ; `decimals`: `ZodNumber` ; `id`: `ZodString` ; `name`: `ZodString` ; `ticker`: `ZodString`  }, ``"strip"``, `ZodTypeAny`, { `color`: `string` ; `decimals`: `number` ; `id`: `string` ; `name`: `string` ; `ticker`: `string`  }, { `color`: `string` ; `decimals`: `number` ; `id`: `string` ; `name`: `string` ; `ticker`: `string`  }\>

#### Defined in

[packages/core/src/currencies/validation.ts:7](https://github.com/LedgerHQ/wallet-api/blob/main/packages/core/src/currencies/validation.ts#L7)

___

### schemaBitcoinGetXPub

• `Const` **schemaBitcoinGetXPub**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `params` | `ZodObject`<{ `accountId`: `ZodString`  }, ``"strip"``, `ZodTypeAny`, { `accountId`: `string`  }, { `accountId`: `string`  }\> |
| `result` | `ZodObject`<{ `xPub`: `ZodString`  }, ``"strip"``, `ZodTypeAny`, { `xPub`: `string`  }, { `xPub`: `string`  }\> |

#### Defined in

[packages/core/src/spec/types/BitcoinGetXPub.ts:11](https://github.com/LedgerHQ/wallet-api/blob/main/packages/core/src/spec/types/BitcoinGetXPub.ts#L11)

___

### schemaCryptoCurrency

• `Const` **schemaCryptoCurrency**: `ZodObject`<{ `color`: `ZodString` ; `decimals`: `ZodNumber` ; `family`: `ZodEnum`<[``"bitcoin"``, ``"ethereum"``, ``"algorand"``, ``"crypto_org"``, ``"ripple"``, ``"cosmos"``, ``"ripple"``, ``"celo"``, ``"cosmos"``, ``"hedera"``, ``"filecoin"``, ``"tezos"``, ``"polkadot"``, ``"stellar"``, ``"tron"``, ``"near"``, ``"neo"``, ``"elrond"``, ``"cardano"``, ``"solana"``]\> = schemaFamilies; `id`: `ZodString` ; `name`: `ZodString` ; `ticker`: `ZodString` ; `type`: `ZodLiteral`<``"CryptoCurrency"``\>  }, ``"strip"``, `ZodTypeAny`, { `color`: `string` ; `decimals`: `number` ; `family`: ``"bitcoin"`` \| ``"ethereum"`` \| ``"algorand"`` \| ``"crypto_org"`` \| ``"ripple"`` \| ``"cosmos"`` \| ``"celo"`` \| ``"hedera"`` \| ``"filecoin"`` \| ``"tezos"`` \| ``"polkadot"`` \| ``"stellar"`` \| ``"tron"`` \| ``"near"`` \| ``"neo"`` \| ``"elrond"`` \| ``"cardano"`` \| ``"solana"`` = schemaFamilies; `id`: `string` ; `name`: `string` ; `ticker`: `string` ; `type`: ``"CryptoCurrency"``  }, { `color`: `string` ; `decimals`: `number` ; `family`: ``"bitcoin"`` \| ``"ethereum"`` \| ``"algorand"`` \| ``"crypto_org"`` \| ``"ripple"`` \| ``"cosmos"`` \| ``"celo"`` \| ``"hedera"`` \| ``"filecoin"`` \| ``"tezos"`` \| ``"polkadot"`` \| ``"stellar"`` \| ``"tron"`` \| ``"near"`` \| ``"neo"`` \| ``"elrond"`` \| ``"cardano"`` \| ``"solana"`` = schemaFamilies; `id`: `string` ; `name`: `string` ; `ticker`: `string` ; `type`: ``"CryptoCurrency"``  }\>

#### Defined in

[packages/core/src/currencies/validation.ts:15](https://github.com/LedgerHQ/wallet-api/blob/main/packages/core/src/currencies/validation.ts#L15)

___

### schemaCurrency

• `Const` **schemaCurrency**: `ZodDiscriminatedUnion`<``"type"``, [`ZodObject`<{ `color`: `ZodString` ; `decimals`: `ZodNumber` ; `family`: `ZodEnum`<[``"bitcoin"``, ``"ethereum"``, ``"algorand"``, ``"crypto_org"``, ``"ripple"``, ``"cosmos"``, ``"ripple"``, ``"celo"``, ``"cosmos"``, ``"hedera"``, ``"filecoin"``, ``"tezos"``, ``"polkadot"``, ``"stellar"``, ``"tron"``, ``"near"``, ``"neo"``, ``"elrond"``, ``"cardano"``, ``"solana"``]\> = schemaFamilies; `id`: `ZodString` ; `name`: `ZodString` ; `ticker`: `ZodString` ; `type`: `ZodLiteral`<``"CryptoCurrency"``\>  }, ``"strip"``, `ZodTypeAny`, { `color`: `string` ; `decimals`: `number` ; `family`: ``"bitcoin"`` \| ``"ethereum"`` \| ``"algorand"`` \| ``"crypto_org"`` \| ``"ripple"`` \| ``"cosmos"`` \| ``"celo"`` \| ``"hedera"`` \| ``"filecoin"`` \| ``"tezos"`` \| ``"polkadot"`` \| ``"stellar"`` \| ``"tron"`` \| ``"near"`` \| ``"neo"`` \| ``"elrond"`` \| ``"cardano"`` \| ``"solana"`` = schemaFamilies; `id`: `string` ; `name`: `string` ; `ticker`: `string` ; `type`: ``"CryptoCurrency"``  }, { `color`: `string` ; `decimals`: `number` ; `family`: ``"bitcoin"`` \| ``"ethereum"`` \| ``"algorand"`` \| ``"crypto_org"`` \| ``"ripple"`` \| ``"cosmos"`` \| ``"celo"`` \| ``"hedera"`` \| ``"filecoin"`` \| ``"tezos"`` \| ``"polkadot"`` \| ``"stellar"`` \| ``"tron"`` \| ``"near"`` \| ``"neo"`` \| ``"elrond"`` \| ``"cardano"`` \| ``"solana"`` = schemaFamilies; `id`: `string` ; `name`: `string` ; `ticker`: `string` ; `type`: ``"CryptoCurrency"``  }\>, `ZodObject`<{ `color`: `ZodString` ; `contract`: `ZodString` ; `decimals`: `ZodNumber` ; `id`: `ZodString` ; `name`: `ZodString` ; `parent`: `ZodString` ; `standard`: `ZodEnum`<[``"ERC20"``]\> = schemaTokenStandard; `ticker`: `ZodString` ; `type`: `ZodLiteral`<``"TokenCurrency"``\>  }, ``"strip"``, `ZodTypeAny`, { `color`: `string` ; `contract`: `string` ; `decimals`: `number` ; `id`: `string` ; `name`: `string` ; `parent`: `string` ; `standard`: ``"ERC20"`` = schemaTokenStandard; `ticker`: `string` ; `type`: ``"TokenCurrency"``  }, { `color`: `string` ; `contract`: `string` ; `decimals`: `number` ; `id`: `string` ; `name`: `string` ; `parent`: `string` ; `standard`: ``"ERC20"`` = schemaTokenStandard; `ticker`: `string` ; `type`: ``"TokenCurrency"``  }\>]\>

#### Defined in

[packages/core/src/currencies/validation.ts:30](https://github.com/LedgerHQ/wallet-api/blob/main/packages/core/src/currencies/validation.ts#L30)

___

### schemaCurrencyList

• `Const` **schemaCurrencyList**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `params` | `ZodOptional`<`ZodObject`<{ `currencyIds`: `ZodOptional`<`ZodArray`<`ZodString`, ``"many"``\>\>  }, ``"strip"``, `ZodTypeAny`, { `currencyIds?`: `string`[]  }, { `currencyIds?`: `string`[]  }\>\> |
| `result` | `ZodObject`<{ `currencies`: `ZodArray`<`ZodDiscriminatedUnion`<``"type"``, [`ZodObject`<{ `color`: `ZodString` ; `decimals`: `ZodNumber` ; `family`: `ZodEnum`<[``"bitcoin"``, ``"ethereum"``, ``"algorand"``, ``"crypto_org"``, ``"ripple"``, ``"cosmos"``, ``"ripple"``, ``"celo"``, ``"cosmos"``, ``"hedera"``, ``"filecoin"``, ``"tezos"``, ``"polkadot"``, ``"stellar"``, ``"tron"``, ``"near"``, ``"neo"``, ``"elrond"``, ``"cardano"``, ``"solana"``]\> = schemaFamilies; `id`: `ZodString` ; `name`: `ZodString` ; `ticker`: `ZodString` ; `type`: `ZodLiteral`<``"CryptoCurrency"``\>  }, ``"strip"``, `ZodTypeAny`, { `color`: `string` ; `decimals`: `number` ; `family`: ``"bitcoin"`` \| ``"ethereum"`` \| ``"algorand"`` \| ``"crypto_org"`` \| ``"ripple"`` \| ``"cosmos"`` \| ``"celo"`` \| ``"hedera"`` \| ``"filecoin"`` \| ``"tezos"`` \| ``"polkadot"`` \| ``"stellar"`` \| ``"tron"`` \| ``"near"`` \| ``"neo"`` \| ``"elrond"`` \| ``"cardano"`` \| ``"solana"`` = schemaFamilies; `id`: `string` ; `name`: `string` ; `ticker`: `string` ; `type`: ``"CryptoCurrency"``  }, { `color`: `string` ; `decimals`: `number` ; `family`: ``"bitcoin"`` \| ``"ethereum"`` \| ``"algorand"`` \| ``"crypto_org"`` \| ``"ripple"`` \| ``"cosmos"`` \| ``"celo"`` \| ``"hedera"`` \| ``"filecoin"`` \| ``"tezos"`` \| ``"polkadot"`` \| ``"stellar"`` \| ``"tron"`` \| ``"near"`` \| ``"neo"`` \| ``"elrond"`` \| ``"cardano"`` \| ``"solana"`` = schemaFamilies; `id`: `string` ; `name`: `string` ; `ticker`: `string` ; `type`: ``"CryptoCurrency"``  }\>, `ZodObject`<{ `color`: `ZodString` ; `contract`: `ZodString` ; `decimals`: `ZodNumber` ; `id`: `ZodString` ; `name`: `ZodString` ; `parent`: `ZodString` ; `standard`: `ZodEnum`<[``"ERC20"``]\> = schemaTokenStandard; `ticker`: `ZodString` ; `type`: `ZodLiteral`<``"TokenCurrency"``\>  }, ``"strip"``, `ZodTypeAny`, { `color`: `string` ; `contract`: `string` ; `decimals`: `number` ; `id`: `string` ; `name`: `string` ; `parent`: `string` ; `standard`: ``"ERC20"`` = schemaTokenStandard; `ticker`: `string` ; `type`: ``"TokenCurrency"``  }, { `color`: `string` ; `contract`: `string` ; `decimals`: `number` ; `id`: `string` ; `name`: `string` ; `parent`: `string` ; `standard`: ``"ERC20"`` = schemaTokenStandard; `ticker`: `string` ; `type`: ``"TokenCurrency"``  }\>]\>, ``"many"``\>  }, ``"strip"``, `ZodTypeAny`, { `currencies`: ({ `color`: `string` ; `decimals`: `number` ; `family`: ``"bitcoin"`` \| ``"ethereum"`` \| ``"algorand"`` \| ``"crypto_org"`` \| ``"ripple"`` \| ``"cosmos"`` \| ``"celo"`` \| ``"hedera"`` \| ``"filecoin"`` \| ``"tezos"`` \| ``"polkadot"`` \| ``"stellar"`` \| ``"tron"`` \| ``"near"`` \| ``"neo"`` \| ``"elrond"`` \| ``"cardano"`` \| ``"solana"`` = schemaFamilies; `id`: `string` ; `name`: `string` ; `ticker`: `string` ; `type`: ``"CryptoCurrency"``  } \| { `color`: `string` ; `contract`: `string` ; `decimals`: `number` ; `id`: `string` ; `name`: `string` ; `parent`: `string` ; `standard`: ``"ERC20"`` = schemaTokenStandard; `ticker`: `string` ; `type`: ``"TokenCurrency"``  })[]  }, { `currencies`: ({ `color`: `string` ; `decimals`: `number` ; `family`: ``"bitcoin"`` \| ``"ethereum"`` \| ``"algorand"`` \| ``"crypto_org"`` \| ``"ripple"`` \| ``"cosmos"`` \| ``"celo"`` \| ``"hedera"`` \| ``"filecoin"`` \| ``"tezos"`` \| ``"polkadot"`` \| ``"stellar"`` \| ``"tron"`` \| ``"near"`` \| ``"neo"`` \| ``"elrond"`` \| ``"cardano"`` \| ``"solana"`` = schemaFamilies; `id`: `string` ; `name`: `string` ; `ticker`: `string` ; `type`: ``"CryptoCurrency"``  } \| { `color`: `string` ; `contract`: `string` ; `decimals`: `number` ; `id`: `string` ; `name`: `string` ; `parent`: `string` ; `standard`: ``"ERC20"`` = schemaTokenStandard; `ticker`: `string` ; `type`: ``"TokenCurrency"``  })[]  }\> |

#### Defined in

[packages/core/src/spec/types/CurrencyList.ts:14](https://github.com/LedgerHQ/wallet-api/blob/main/packages/core/src/spec/types/CurrencyList.ts#L14)

___

### schemaCurrencyNotFound

• `Const` **schemaCurrencyNotFound**: `ZodObject`<{ `code`: `ZodLiteral`<``"CURRENCY_NOT_FOUND"``\> ; `data`: `ZodObject`<{ `currencyId`: `ZodString`  }, ``"strip"``, `ZodTypeAny`, { `currencyId`: `string`  }, { `currencyId`: `string`  }\> ; `message`: `ZodString`  }, ``"strip"``, `ZodTypeAny`, { `code`: ``"CURRENCY_NOT_FOUND"`` ; `data`: { currencyId: string; } ; `message`: `string`  }, { `code`: ``"CURRENCY_NOT_FOUND"`` ; `data`: { currencyId: string; } ; `message`: `string`  }\>

#### Defined in

[packages/core/src/errors/types.ts:53](https://github.com/LedgerHQ/wallet-api/blob/main/packages/core/src/errors/types.ts#L53)

___

### schemaCurrencyType

• `Const` **schemaCurrencyType**: `ZodEnum`<[``"CryptoCurrency"``, ``"TokenCurrency"``]\>

#### Defined in

[packages/core/src/currencies/validation.ts:4](https://github.com/LedgerHQ/wallet-api/blob/main/packages/core/src/currencies/validation.ts#L4)

___

### schemaDeviceClose

• `Const` **schemaDeviceClose**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `params` | `ZodObject`<{ `transportId`: `ZodString`  }, ``"strip"``, `ZodTypeAny`, { `transportId`: `string`  }, { `transportId`: `string`  }\> |
| `result` | `ZodObject`<{ `transportId`: `ZodString`  }, ``"strip"``, `ZodTypeAny`, { `transportId`: `string`  }, { `transportId`: `string`  }\> |

#### Defined in

[packages/core/src/spec/types/DeviceClose.ts:11](https://github.com/LedgerHQ/wallet-api/blob/main/packages/core/src/spec/types/DeviceClose.ts#L11)

___

### schemaDeviceExchange

• `Const` **schemaDeviceExchange**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `params` | `ZodObject`<{ `apduHex`: `ZodString` ; `transportId`: `ZodString`  }, ``"strip"``, `ZodTypeAny`, { `apduHex`: `string` ; `transportId`: `string`  }, { `apduHex`: `string` ; `transportId`: `string`  }\> |
| `result` | `ZodObject`<{ `responseHex`: `ZodString`  }, ``"strip"``, `ZodTypeAny`, { `responseHex`: `string`  }, { `responseHex`: `string`  }\> |

#### Defined in

[packages/core/src/spec/types/DeviceExchange.ts:12](https://github.com/LedgerHQ/wallet-api/blob/main/packages/core/src/spec/types/DeviceExchange.ts#L12)

___

### schemaDeviceOpen

• `Const` **schemaDeviceOpen**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `params` | `ZodObject`<{ `deviceId`: `ZodString`  }, ``"strip"``, `ZodTypeAny`, { `deviceId`: `string`  }, { `deviceId`: `string`  }\> |
| `result` | `ZodObject`<{ `transportId`: `ZodString`  }, ``"strip"``, `ZodTypeAny`, { `transportId`: `string`  }, { `transportId`: `string`  }\> |

#### Defined in

[packages/core/src/spec/types/DeviceOpen.ts:12](https://github.com/LedgerHQ/wallet-api/blob/main/packages/core/src/spec/types/DeviceOpen.ts#L12)

___

### schemaDeviceSelect

• `Const` **schemaDeviceSelect**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `params` | `ZodObject`<{ `appName`: `ZodOptional`<`ZodString`\> ; `appVersionRange`: `ZodOptional`<`ZodString`\> ; `devices`: `ZodOptional`<`ZodArray`<`ZodEnum`<[``"blue"``, ``"nanoS"``, ``"nanoSP"``, ``"nanoX"``, ``"stax"``]\>, ``"atleastone"``\>\> ; `firmwareVersionRange`: `ZodOptional`<`ZodString`\> ; `seeded`: `ZodOptional`<`ZodBoolean`\>  }, ``"strip"``, `ZodTypeAny`, { `appName?`: `string` ; `appVersionRange?`: `string` ; `devices?`: [``"blue"`` \| ``"nanoS"`` \| ``"nanoSP"`` \| ``"nanoX"`` \| ``"stax"``, ...("blue" \| "nanoS" \| "nanoSP" \| "nanoX" \| "stax")[]] ; `firmwareVersionRange?`: `string` ; `seeded?`: `boolean`  }, { `appName?`: `string` ; `appVersionRange?`: `string` ; `devices?`: [``"blue"`` \| ``"nanoS"`` \| ``"nanoSP"`` \| ``"nanoX"`` \| ``"stax"``, ...("blue" \| "nanoS" \| "nanoSP" \| "nanoX" \| "stax")[]] ; `firmwareVersionRange?`: `string` ; `seeded?`: `boolean`  }\> |
| `result` | `ZodObject`<{ `deviceId`: `ZodString`  }, ``"strip"``, `ZodTypeAny`, { `deviceId`: `string`  }, { `deviceId`: `string`  }\> |

#### Defined in

[packages/core/src/spec/types/DeviceSelect.ts:31](https://github.com/LedgerHQ/wallet-api/blob/main/packages/core/src/spec/types/DeviceSelect.ts#L31)

___

### schemaDeviceTransport

• `Const` **schemaDeviceTransport**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `params` | `ZodObject`<{ `appName`: `ZodOptional`<`ZodString`\> ; `appVersionRange`: `ZodOptional`<`ZodString`\> ; `devices`: `ZodOptional`<`ZodArray`<`ZodEnum`<[``"blue"``, ``"nanoS"``, ``"nanoSP"``, ``"nanoX"``, ``"stax"``]\>, ``"atleastone"``\>\> ; `firmwareVersionRange`: `ZodOptional`<`ZodString`\> ; `seeded`: `ZodOptional`<`ZodBoolean`\>  }, ``"strip"``, `ZodTypeAny`, { `appName?`: `string` ; `appVersionRange?`: `string` ; `devices?`: [``"blue"`` \| ``"nanoS"`` \| ``"nanoSP"`` \| ``"nanoX"`` \| ``"stax"``, ...("blue" \| "nanoS" \| "nanoSP" \| "nanoX" \| "stax")[]] ; `firmwareVersionRange?`: `string` ; `seeded?`: `boolean`  }, { `appName?`: `string` ; `appVersionRange?`: `string` ; `devices?`: [``"blue"`` \| ``"nanoS"`` \| ``"nanoSP"`` \| ``"nanoX"`` \| ``"stax"``, ...("blue" \| "nanoS" \| "nanoSP" \| "nanoX" \| "stax")[]] ; `firmwareVersionRange?`: `string` ; `seeded?`: `boolean`  }\> |
| `result` | `ZodObject`<{ `transportId`: `ZodString`  }, ``"strip"``, `ZodTypeAny`, { `transportId`: `string`  }, { `transportId`: `string`  }\> |

#### Defined in

[packages/core/src/spec/types/DeviceTransport.ts:31](https://github.com/LedgerHQ/wallet-api/blob/main/packages/core/src/spec/types/DeviceTransport.ts#L31)

___

### schemaDeviceType

• `Const` **schemaDeviceType**: `ZodEnum`<[``"blue"``, ``"nanoS"``, ``"nanoSP"``, ``"nanoX"``, ``"stax"``]\>

#### Defined in

[packages/core/src/spec/types/Device.ts:3](https://github.com/LedgerHQ/wallet-api/blob/main/packages/core/src/spec/types/Device.ts#L3)

___

### schemaERC20TokenCurrency

• `Const` **schemaERC20TokenCurrency**: `ZodObject`<{ `color`: `ZodString` ; `contract`: `ZodString` ; `decimals`: `ZodNumber` ; `id`: `ZodString` ; `name`: `ZodString` ; `parent`: `ZodString` ; `standard`: `ZodEnum`<[``"ERC20"``]\> = schemaTokenStandard; `ticker`: `ZodString` ; `type`: `ZodLiteral`<``"TokenCurrency"``\>  }, ``"strip"``, `ZodTypeAny`, { `color`: `string` ; `contract`: `string` ; `decimals`: `number` ; `id`: `string` ; `name`: `string` ; `parent`: `string` ; `standard`: ``"ERC20"`` = schemaTokenStandard; `ticker`: `string` ; `type`: ``"TokenCurrency"``  }, { `color`: `string` ; `contract`: `string` ; `decimals`: `number` ; `id`: `string` ; `name`: `string` ; `parent`: `string` ; `standard`: ``"ERC20"`` = schemaTokenStandard; `ticker`: `string` ; `type`: ``"TokenCurrency"``  }\>

#### Defined in

[packages/core/src/currencies/validation.ts:25](https://github.com/LedgerHQ/wallet-api/blob/main/packages/core/src/currencies/validation.ts#L25)

___

### schemaExchangeComplete

• `Const` **schemaExchangeComplete**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `params` | `ZodDiscriminatedUnion`<``"exchangeType"``, [`ZodObject`<{ `exchangeType`: `ZodLiteral`<``"FUND"``\> ; `feeStrategy`: `ZodEnum`<[``"SLOW"``, ``"MEDIUM"``, ``"FAST"``]\> = schemaFeeStrategyType; `fromAccountId`: `ZodString` ; `hexBinaryPayload`: `ZodString` ; `hexSignature`: `ZodString` ; `provider`: `ZodString` ; `rawTransaction`: `ZodDiscriminatedUnion`<``"family"``, [`ZodObject`<{ amount: ZodString; recipient: ZodString; family: ZodLiteral<"algorand"\>; mode: ZodEnum<["send", "optIn", "claimReward", "optOut"]\>; fees: ZodOptional<...\>; assetId: ZodOptional<...\>; memo: ZodOptional<...\>; }, ``"strip"``, `ZodTypeAny`, { family: "algorand"; amount: string; recipient: string; mode: "send" \| "optIn" \| "claimReward" \| "optOut"; fees?: string \| undefined; assetId?: string \| undefined; memo?: string \| undefined; }, { family: "algorand"; amount: string; recipient: string; mode: "send" \| "optIn" \| "claimReward" \| "optOut"; fees?: string \| undefined; assetId?: string \| undefined; memo?: string \| undefined; }\>, `ZodObject`<{ amount: ZodString; recipient: ZodString; family: ZodLiteral<"bitcoin"\>; feePerByte: ZodOptional<ZodString\>; opReturnDataHex: ZodOptional<...\>; }, ``"strip"``, `ZodTypeAny`, { family: "bitcoin"; amount: string; recipient: string; feePerByte?: string \| undefined; opReturnDataHex?: string \| undefined; }, { family: "bitcoin"; amount: string; recipient: string; feePerByte?: string \| undefined; opReturnDataHex?: string \| undefined; }\>, `ZodObject`<{ amount: ZodString; recipient: ZodString; family: ZodLiteral<"celo"\>; fees: ZodNullable<ZodOptional<ZodString\>\>; mode: ZodEnum<...\>; index: ZodNullable<...\>; }, ``"strip"``, `ZodTypeAny`, { family: "celo"; amount: string; recipient: string; mode: "send" \| "lock" \| "unlock" \| "withdraw" \| "vote" \| "revoke" \| "activate" \| "register"; fees?: string \| null \| undefined; index?: number \| ... 1 more ... \| undefined; }, { family: "celo"; amount: string; recipient: string; mode: "send" \| "lock" \| "unlock" \| "withdraw" \| "vote" \| "revoke" \| "activate" \| "register"; fees?: string \| null \| undefined; index?: number \| ... 1 more ... \| undefined; }\>]\> = schemaRawTransaction }, ``"strip"``, `ZodTypeAny`, { `exchangeType`: ``"FUND"`` ; `feeStrategy`: ``"SLOW"`` \| ``"MEDIUM"`` \| ``"FAST"`` = schemaFeeStrategyType; `fromAccountId`: `string` ; `hexBinaryPayload`: `string` ; `hexSignature`: `string` ; `provider`: `string` ; `rawTransaction`: { family: "algorand"; amount: string; recipient: string; mode: "send" \| "optIn" \| "claimReward" \| "optOut"; fees?: string \| undefined; assetId?: string \| undefined; memo?: string \| undefined; } \| { family: "bitcoin"; amount: string; recipient: string; feePerByte?: string \| undefined; opReturnDataHex?: string \| undefined; } \| { family: "celo"; amount: string; recipient: string; mode: "send" \| "lock" \| "unlock" \| "withdraw" \| "vote" \| "revoke" \| "activate" \| "register"; fees?: string \| null \| undefined; index?: number \| ... 1 more ... \| undefined; } \| { family: "cosmos"; amount: string; recipient: string; mode: "send" \| "claimReward" \| "delegate" \| "undelegate" \| "redelegate" \| "claimRewardCompound"; fees?: string \| undefined; gas?: string \| undefined; memo?: string \| undefined; } \| { family: "crypto\_org"; amount: string; recipient: string; mode: string; fees?: string \| undefined; } \| { family: "ethereum"; amount: string; recipient: string; nonce?: number \| undefined; data?: string \| undefined; gasPrice?: string \| undefined; gasLimit?: string \| undefined; maxPriorityFeePerGas?: string \| undefined; maxFeePerGas?: string \| undefined; } \| { family: "hedera"; amount: string; recipient: string; memo?: string \| undefined; } \| { method: number; nonce: number; family: "filecoin"; amount: string; recipient: string; gasLimit: number; gasFeeCap: string; gasPremium: string; version: number; data?: string \| undefined; params?: string \| undefined; } \| { family: "near"; amount: string; recipient: string; mode: string; fees?: string \| undefined; } \| { family: "neo"; amount: string; recipient: string; } \| { family: "polkadot"; amount: string; recipient: string; mode: "send" \| "claimReward" \| "bond" \| "unbond" \| "rebond" \| "withdrawUnbonded" \| "setController" \| "nominate" \| "chill"; fee?: string \| undefined; era?: number \| undefined; } \| { family: "ripple"; amount: string; recipient: string; tag: number; fee?: string \| undefined; } \| { family: "stellar"; amount: string; recipient: string; fees?: string \| undefined; memoType?: "MEMO\_TEXT" \| "MEMO\_ID" \| "MEMO\_HASH" \| "MEMO\_RETURN" \| undefined; memoValue?: string \| undefined; } \| { family: "tezos"; amount: string; recipient: string; mode: "send" \| "delegate" \| "undelegate"; fees?: string \| undefined; gasLimit?: string \| undefined; } \| { family: "tron"; amount: string; recipient: string; mode: "send" \| "claimReward" \| "vote" \| "freeze" \| "unfreeze"; resource?: "BANDWIDTH" \| "ENERGY" \| undefined; duration?: number \| undefined; } \| { family: "elrond"; amount: string; recipient: string; mode: "send" \| "withdraw" \| "delegate" \| "reDelegateRewards" \| "unDelegate" \| "claimRewards"; gasLimit: number; fees?: string \| undefined; data?: string \| undefined; } \| { family: "cardano"; amount: string; recipient: string; mode: string; fees?: string \| undefined; memo?: string \| undefined; } \| { family: "solana"; amount: string; recipient: string; model: string; } & `undefined` \| { family: "algorand"; amount: string; recipient: string; mode: "send" \| "optIn" \| "claimReward" \| "optOut"; fees?: string \| undefined; assetId?: string \| undefined; memo?: string \| undefined; } \| { family: "bitcoin"; amount: string; recipient: string; feePerByte?: string \| undefined; opReturnDataHex?: string \| undefined; } \| { family: "celo"; amount: string; recipient: string; mode: "send" \| "lock" \| "unlock" \| "withdraw" \| "vote" \| "revoke" \| "activate" \| "register"; fees?: string \| null \| undefined; index?: number \| ... 1 more ... \| undefined; } \| { family: "cosmos"; amount: string; recipient: string; mode: "send" \| "claimReward" \| "delegate" \| "undelegate" \| "redelegate" \| "claimRewardCompound"; fees?: string \| undefined; gas?: string \| undefined; memo?: string \| undefined; } \| { family: "crypto\_org"; amount: string; recipient: string; mode: string; fees?: string \| undefined; } \| { family: "ethereum"; amount: string; recipient: string; nonce?: number \| undefined; data?: string \| undefined; gasPrice?: string \| undefined; gasLimit?: string \| undefined; maxPriorityFeePerGas?: string \| undefined; maxFeePerGas?: string \| undefined; } \| { family: "hedera"; amount: string; recipient: string; memo?: string \| undefined; } \| { method: number; nonce: number; family: "filecoin"; amount: string; recipient: string; gasLimit: number; gasFeeCap: string; gasPremium: string; version: number; data?: string \| undefined; params?: string \| undefined; } \| { family: "near"; amount: string; recipient: string; mode: string; fees?: string \| undefined; } \| { family: "neo"; amount: string; recipient: string; } \| { family: "polkadot"; amount: string; recipient: string; mode: "send" \| "claimReward" \| "bond" \| "unbond" \| "rebond" \| "withdrawUnbonded" \| "setController" \| "nominate" \| "chill"; fee?: string \| undefined; era?: number \| undefined; } \| { family: "ripple"; amount: string; recipient: string; tag: number; fee?: string \| undefined; } \| { family: "stellar"; amount: string; recipient: string; fees?: string \| undefined; memoType?: "MEMO\_TEXT" \| "MEMO\_ID" \| "MEMO\_HASH" \| "MEMO\_RETURN" \| undefined; memoValue?: string \| undefined; } \| { family: "tezos"; amount: string; recipient: string; mode: "send" \| "delegate" \| "undelegate"; fees?: string \| undefined; gasLimit?: string \| undefined; } \| { family: "tron"; amount: string; recipient: string; mode: "send" \| "claimReward" \| "vote" \| "freeze" \| "unfreeze"; resource?: "BANDWIDTH" \| "ENERGY" \| undefined; duration?: number \| undefined; } \| { family: "elrond"; amount: string; recipient: string; mode: "send" \| "withdraw" \| "delegate" \| "reDelegateRewards" \| "unDelegate" \| "claimRewards"; gasLimit: number; fees?: string \| undefined; data?: string \| undefined; } \| { family: "cardano"; amount: string; recipient: string; mode: string; fees?: string \| undefined; memo?: string \| undefined; } \| { family: "solana"; amount: string; recipient: string; model: string; } = schemaRawTransaction }, { `exchangeType`: ``"FUND"`` ; `feeStrategy`: ``"SLOW"`` \| ``"MEDIUM"`` \| ``"FAST"`` = schemaFeeStrategyType; `fromAccountId`: `string` ; `hexBinaryPayload`: `string` ; `hexSignature`: `string` ; `provider`: `string` ; `rawTransaction`: { family: "algorand"; amount: string; recipient: string; mode: "send" \| "optIn" \| "claimReward" \| "optOut"; fees?: string \| undefined; assetId?: string \| undefined; memo?: string \| undefined; } \| { family: "bitcoin"; amount: string; recipient: string; feePerByte?: string \| undefined; opReturnDataHex?: string \| undefined; } \| { family: "celo"; amount: string; recipient: string; mode: "send" \| "lock" \| "unlock" \| "withdraw" \| "vote" \| "revoke" \| "activate" \| "register"; fees?: string \| null \| undefined; index?: number \| ... 1 more ... \| undefined; } \| { family: "cosmos"; amount: string; recipient: string; mode: "send" \| "claimReward" \| "delegate" \| "undelegate" \| "redelegate" \| "claimRewardCompound"; fees?: string \| undefined; gas?: string \| undefined; memo?: string \| undefined; } \| { family: "crypto\_org"; amount: string; recipient: string; mode: string; fees?: string \| undefined; } \| { family: "ethereum"; amount: string; recipient: string; nonce?: number \| undefined; data?: string \| undefined; gasPrice?: string \| undefined; gasLimit?: string \| undefined; maxPriorityFeePerGas?: string \| undefined; maxFeePerGas?: string \| undefined; } \| { family: "hedera"; amount: string; recipient: string; memo?: string \| undefined; } \| { method: number; nonce: number; family: "filecoin"; amount: string; recipient: string; gasLimit: number; gasFeeCap: string; gasPremium: string; version: number; data?: string \| undefined; params?: string \| undefined; } \| { family: "near"; amount: string; recipient: string; mode: string; fees?: string \| undefined; } \| { family: "neo"; amount: string; recipient: string; } \| { family: "polkadot"; amount: string; recipient: string; mode: "send" \| "claimReward" \| "bond" \| "unbond" \| "rebond" \| "withdrawUnbonded" \| "setController" \| "nominate" \| "chill"; fee?: string \| undefined; era?: number \| undefined; } \| { family: "ripple"; amount: string; recipient: string; tag: number; fee?: string \| undefined; } \| { family: "stellar"; amount: string; recipient: string; fees?: string \| undefined; memoType?: "MEMO\_TEXT" \| "MEMO\_ID" \| "MEMO\_HASH" \| "MEMO\_RETURN" \| undefined; memoValue?: string \| undefined; } \| { family: "tezos"; amount: string; recipient: string; mode: "send" \| "delegate" \| "undelegate"; fees?: string \| undefined; gasLimit?: string \| undefined; } \| { family: "tron"; amount: string; recipient: string; mode: "send" \| "claimReward" \| "vote" \| "freeze" \| "unfreeze"; resource?: "BANDWIDTH" \| "ENERGY" \| undefined; duration?: number \| undefined; } \| { family: "elrond"; amount: string; recipient: string; mode: "send" \| "withdraw" \| "delegate" \| "reDelegateRewards" \| "unDelegate" \| "claimRewards"; gasLimit: number; fees?: string \| undefined; data?: string \| undefined; } \| { family: "cardano"; amount: string; recipient: string; mode: string; fees?: string \| undefined; memo?: string \| undefined; } \| { family: "solana"; amount: string; recipient: string; model: string; } & `undefined` \| { family: "algorand"; amount: string; recipient: string; mode: "send" \| "optIn" \| "claimReward" \| "optOut"; fees?: string \| undefined; assetId?: string \| undefined; memo?: string \| undefined; } \| { family: "bitcoin"; amount: string; recipient: string; feePerByte?: string \| undefined; opReturnDataHex?: string \| undefined; } \| { family: "celo"; amount: string; recipient: string; mode: "send" \| "lock" \| "unlock" \| "withdraw" \| "vote" \| "revoke" \| "activate" \| "register"; fees?: string \| null \| undefined; index?: number \| ... 1 more ... \| undefined; } \| { family: "cosmos"; amount: string; recipient: string; mode: "send" \| "claimReward" \| "delegate" \| "undelegate" \| "redelegate" \| "claimRewardCompound"; fees?: string \| undefined; gas?: string \| undefined; memo?: string \| undefined; } \| { family: "crypto\_org"; amount: string; recipient: string; mode: string; fees?: string \| undefined; } \| { family: "ethereum"; amount: string; recipient: string; nonce?: number \| undefined; data?: string \| undefined; gasPrice?: string \| undefined; gasLimit?: string \| undefined; maxPriorityFeePerGas?: string \| undefined; maxFeePerGas?: string \| undefined; } \| { family: "hedera"; amount: string; recipient: string; memo?: string \| undefined; } \| { method: number; nonce: number; family: "filecoin"; amount: string; recipient: string; gasLimit: number; gasFeeCap: string; gasPremium: string; version: number; data?: string \| undefined; params?: string \| undefined; } \| { family: "near"; amount: string; recipient: string; mode: string; fees?: string \| undefined; } \| { family: "neo"; amount: string; recipient: string; } \| { family: "polkadot"; amount: string; recipient: string; mode: "send" \| "claimReward" \| "bond" \| "unbond" \| "rebond" \| "withdrawUnbonded" \| "setController" \| "nominate" \| "chill"; fee?: string \| undefined; era?: number \| undefined; } \| { family: "ripple"; amount: string; recipient: string; tag: number; fee?: string \| undefined; } \| { family: "stellar"; amount: string; recipient: string; fees?: string \| undefined; memoType?: "MEMO\_TEXT" \| "MEMO\_ID" \| "MEMO\_HASH" \| "MEMO\_RETURN" \| undefined; memoValue?: string \| undefined; } \| { family: "tezos"; amount: string; recipient: string; mode: "send" \| "delegate" \| "undelegate"; fees?: string \| undefined; gasLimit?: string \| undefined; } \| { family: "tron"; amount: string; recipient: string; mode: "send" \| "claimReward" \| "vote" \| "freeze" \| "unfreeze"; resource?: "BANDWIDTH" \| "ENERGY" \| undefined; duration?: number \| undefined; } \| { family: "elrond"; amount: string; recipient: string; mode: "send" \| "withdraw" \| "delegate" \| "reDelegateRewards" \| "unDelegate" \| "claimRewards"; gasLimit: number; fees?: string \| undefined; data?: string \| undefined; } \| { family: "cardano"; amount: string; recipient: string; mode: string; fees?: string \| undefined; memo?: string \| undefined; } \| { family: "solana"; amount: string; recipient: string; model: string; } = schemaRawTransaction }\>, `ZodObject`<{ `exchangeType`: `ZodLiteral`<``"SELL"``\> ; `feeStrategy`: `ZodEnum`<[``"SLOW"``, ``"MEDIUM"``, ``"FAST"``]\> = schemaFeeStrategyType; `fromAccountId`: `ZodString` ; `hexBinaryPayload`: `ZodString` ; `hexSignature`: `ZodString` ; `provider`: `ZodString` ; `rawTransaction`: `ZodDiscriminatedUnion`<``"family"``, [`ZodObject`<{ amount: ZodString; recipient: ZodString; family: ZodLiteral<"algorand"\>; mode: ZodEnum<["send", "optIn", "claimReward", "optOut"]\>; fees: ZodOptional<...\>; assetId: ZodOptional<...\>; memo: ZodOptional<...\>; }, ``"strip"``, `ZodTypeAny`, { family: "algorand"; amount: string; recipient: string; mode: "send" \| "optIn" \| "claimReward" \| "optOut"; fees?: string \| undefined; assetId?: string \| undefined; memo?: string \| undefined; }, { family: "algorand"; amount: string; recipient: string; mode: "send" \| "optIn" \| "claimReward" \| "optOut"; fees?: string \| undefined; assetId?: string \| undefined; memo?: string \| undefined; }\>, `ZodObject`<{ amount: ZodString; recipient: ZodString; family: ZodLiteral<"bitcoin"\>; feePerByte: ZodOptional<ZodString\>; opReturnDataHex: ZodOptional<...\>; }, ``"strip"``, `ZodTypeAny`, { family: "bitcoin"; amount: string; recipient: string; feePerByte?: string \| undefined; opReturnDataHex?: string \| undefined; }, { family: "bitcoin"; amount: string; recipient: string; feePerByte?: string \| undefined; opReturnDataHex?: string \| undefined; }\>, `ZodObject`<{ amount: ZodString; recipient: ZodString; family: ZodLiteral<"celo"\>; fees: ZodNullable<ZodOptional<ZodString\>\>; mode: ZodEnum<...\>; index: ZodNullable<...\>; }, ``"strip"``, `ZodTypeAny`, { family: "celo"; amount: string; recipient: string; mode: "send" \| "lock" \| "unlock" \| "withdraw" \| "vote" \| "revoke" \| "activate" \| "register"; fees?: string \| null \| undefined; index?: number \| ... 1 more ... \| undefined; }, { family: "celo"; amount: string; recipient: string; mode: "send" \| "lock" \| "unlock" \| "withdraw" \| "vote" \| "revoke" \| "activate" \| "register"; fees?: string \| null \| undefined; index?: number \| ... 1 more ... \| undefined; }\>]\> = schemaRawTransaction }, ``"strip"``, `ZodTypeAny`, { `exchangeType`: ``"SELL"`` ; `feeStrategy`: ``"SLOW"`` \| ``"MEDIUM"`` \| ``"FAST"`` = schemaFeeStrategyType; `fromAccountId`: `string` ; `hexBinaryPayload`: `string` ; `hexSignature`: `string` ; `provider`: `string` ; `rawTransaction`: { family: "algorand"; amount: string; recipient: string; mode: "send" \| "optIn" \| "claimReward" \| "optOut"; fees?: string \| undefined; assetId?: string \| undefined; memo?: string \| undefined; } \| { family: "bitcoin"; amount: string; recipient: string; feePerByte?: string \| undefined; opReturnDataHex?: string \| undefined; } \| { family: "celo"; amount: string; recipient: string; mode: "send" \| "lock" \| "unlock" \| "withdraw" \| "vote" \| "revoke" \| "activate" \| "register"; fees?: string \| null \| undefined; index?: number \| ... 1 more ... \| undefined; } \| { family: "cosmos"; amount: string; recipient: string; mode: "send" \| "claimReward" \| "delegate" \| "undelegate" \| "redelegate" \| "claimRewardCompound"; fees?: string \| undefined; gas?: string \| undefined; memo?: string \| undefined; } \| { family: "crypto\_org"; amount: string; recipient: string; mode: string; fees?: string \| undefined; } \| { family: "ethereum"; amount: string; recipient: string; nonce?: number \| undefined; data?: string \| undefined; gasPrice?: string \| undefined; gasLimit?: string \| undefined; maxPriorityFeePerGas?: string \| undefined; maxFeePerGas?: string \| undefined; } \| { family: "hedera"; amount: string; recipient: string; memo?: string \| undefined; } \| { method: number; nonce: number; family: "filecoin"; amount: string; recipient: string; gasLimit: number; gasFeeCap: string; gasPremium: string; version: number; data?: string \| undefined; params?: string \| undefined; } \| { family: "near"; amount: string; recipient: string; mode: string; fees?: string \| undefined; } \| { family: "neo"; amount: string; recipient: string; } \| { family: "polkadot"; amount: string; recipient: string; mode: "send" \| "claimReward" \| "bond" \| "unbond" \| "rebond" \| "withdrawUnbonded" \| "setController" \| "nominate" \| "chill"; fee?: string \| undefined; era?: number \| undefined; } \| { family: "ripple"; amount: string; recipient: string; tag: number; fee?: string \| undefined; } \| { family: "stellar"; amount: string; recipient: string; fees?: string \| undefined; memoType?: "MEMO\_TEXT" \| "MEMO\_ID" \| "MEMO\_HASH" \| "MEMO\_RETURN" \| undefined; memoValue?: string \| undefined; } \| { family: "tezos"; amount: string; recipient: string; mode: "send" \| "delegate" \| "undelegate"; fees?: string \| undefined; gasLimit?: string \| undefined; } \| { family: "tron"; amount: string; recipient: string; mode: "send" \| "claimReward" \| "vote" \| "freeze" \| "unfreeze"; resource?: "BANDWIDTH" \| "ENERGY" \| undefined; duration?: number \| undefined; } \| { family: "elrond"; amount: string; recipient: string; mode: "send" \| "withdraw" \| "delegate" \| "reDelegateRewards" \| "unDelegate" \| "claimRewards"; gasLimit: number; fees?: string \| undefined; data?: string \| undefined; } \| { family: "cardano"; amount: string; recipient: string; mode: string; fees?: string \| undefined; memo?: string \| undefined; } \| { family: "solana"; amount: string; recipient: string; model: string; } & `undefined` \| { family: "algorand"; amount: string; recipient: string; mode: "send" \| "optIn" \| "claimReward" \| "optOut"; fees?: string \| undefined; assetId?: string \| undefined; memo?: string \| undefined; } \| { family: "bitcoin"; amount: string; recipient: string; feePerByte?: string \| undefined; opReturnDataHex?: string \| undefined; } \| { family: "celo"; amount: string; recipient: string; mode: "send" \| "lock" \| "unlock" \| "withdraw" \| "vote" \| "revoke" \| "activate" \| "register"; fees?: string \| null \| undefined; index?: number \| ... 1 more ... \| undefined; } \| { family: "cosmos"; amount: string; recipient: string; mode: "send" \| "claimReward" \| "delegate" \| "undelegate" \| "redelegate" \| "claimRewardCompound"; fees?: string \| undefined; gas?: string \| undefined; memo?: string \| undefined; } \| { family: "crypto\_org"; amount: string; recipient: string; mode: string; fees?: string \| undefined; } \| { family: "ethereum"; amount: string; recipient: string; nonce?: number \| undefined; data?: string \| undefined; gasPrice?: string \| undefined; gasLimit?: string \| undefined; maxPriorityFeePerGas?: string \| undefined; maxFeePerGas?: string \| undefined; } \| { family: "hedera"; amount: string; recipient: string; memo?: string \| undefined; } \| { method: number; nonce: number; family: "filecoin"; amount: string; recipient: string; gasLimit: number; gasFeeCap: string; gasPremium: string; version: number; data?: string \| undefined; params?: string \| undefined; } \| { family: "near"; amount: string; recipient: string; mode: string; fees?: string \| undefined; } \| { family: "neo"; amount: string; recipient: string; } \| { family: "polkadot"; amount: string; recipient: string; mode: "send" \| "claimReward" \| "bond" \| "unbond" \| "rebond" \| "withdrawUnbonded" \| "setController" \| "nominate" \| "chill"; fee?: string \| undefined; era?: number \| undefined; } \| { family: "ripple"; amount: string; recipient: string; tag: number; fee?: string \| undefined; } \| { family: "stellar"; amount: string; recipient: string; fees?: string \| undefined; memoType?: "MEMO\_TEXT" \| "MEMO\_ID" \| "MEMO\_HASH" \| "MEMO\_RETURN" \| undefined; memoValue?: string \| undefined; } \| { family: "tezos"; amount: string; recipient: string; mode: "send" \| "delegate" \| "undelegate"; fees?: string \| undefined; gasLimit?: string \| undefined; } \| { family: "tron"; amount: string; recipient: string; mode: "send" \| "claimReward" \| "vote" \| "freeze" \| "unfreeze"; resource?: "BANDWIDTH" \| "ENERGY" \| undefined; duration?: number \| undefined; } \| { family: "elrond"; amount: string; recipient: string; mode: "send" \| "withdraw" \| "delegate" \| "reDelegateRewards" \| "unDelegate" \| "claimRewards"; gasLimit: number; fees?: string \| undefined; data?: string \| undefined; } \| { family: "cardano"; amount: string; recipient: string; mode: string; fees?: string \| undefined; memo?: string \| undefined; } \| { family: "solana"; amount: string; recipient: string; model: string; } = schemaRawTransaction }, { `exchangeType`: ``"SELL"`` ; `feeStrategy`: ``"SLOW"`` \| ``"MEDIUM"`` \| ``"FAST"`` = schemaFeeStrategyType; `fromAccountId`: `string` ; `hexBinaryPayload`: `string` ; `hexSignature`: `string` ; `provider`: `string` ; `rawTransaction`: { family: "algorand"; amount: string; recipient: string; mode: "send" \| "optIn" \| "claimReward" \| "optOut"; fees?: string \| undefined; assetId?: string \| undefined; memo?: string \| undefined; } \| { family: "bitcoin"; amount: string; recipient: string; feePerByte?: string \| undefined; opReturnDataHex?: string \| undefined; } \| { family: "celo"; amount: string; recipient: string; mode: "send" \| "lock" \| "unlock" \| "withdraw" \| "vote" \| "revoke" \| "activate" \| "register"; fees?: string \| null \| undefined; index?: number \| ... 1 more ... \| undefined; } \| { family: "cosmos"; amount: string; recipient: string; mode: "send" \| "claimReward" \| "delegate" \| "undelegate" \| "redelegate" \| "claimRewardCompound"; fees?: string \| undefined; gas?: string \| undefined; memo?: string \| undefined; } \| { family: "crypto\_org"; amount: string; recipient: string; mode: string; fees?: string \| undefined; } \| { family: "ethereum"; amount: string; recipient: string; nonce?: number \| undefined; data?: string \| undefined; gasPrice?: string \| undefined; gasLimit?: string \| undefined; maxPriorityFeePerGas?: string \| undefined; maxFeePerGas?: string \| undefined; } \| { family: "hedera"; amount: string; recipient: string; memo?: string \| undefined; } \| { method: number; nonce: number; family: "filecoin"; amount: string; recipient: string; gasLimit: number; gasFeeCap: string; gasPremium: string; version: number; data?: string \| undefined; params?: string \| undefined; } \| { family: "near"; amount: string; recipient: string; mode: string; fees?: string \| undefined; } \| { family: "neo"; amount: string; recipient: string; } \| { family: "polkadot"; amount: string; recipient: string; mode: "send" \| "claimReward" \| "bond" \| "unbond" \| "rebond" \| "withdrawUnbonded" \| "setController" \| "nominate" \| "chill"; fee?: string \| undefined; era?: number \| undefined; } \| { family: "ripple"; amount: string; recipient: string; tag: number; fee?: string \| undefined; } \| { family: "stellar"; amount: string; recipient: string; fees?: string \| undefined; memoType?: "MEMO\_TEXT" \| "MEMO\_ID" \| "MEMO\_HASH" \| "MEMO\_RETURN" \| undefined; memoValue?: string \| undefined; } \| { family: "tezos"; amount: string; recipient: string; mode: "send" \| "delegate" \| "undelegate"; fees?: string \| undefined; gasLimit?: string \| undefined; } \| { family: "tron"; amount: string; recipient: string; mode: "send" \| "claimReward" \| "vote" \| "freeze" \| "unfreeze"; resource?: "BANDWIDTH" \| "ENERGY" \| undefined; duration?: number \| undefined; } \| { family: "elrond"; amount: string; recipient: string; mode: "send" \| "withdraw" \| "delegate" \| "reDelegateRewards" \| "unDelegate" \| "claimRewards"; gasLimit: number; fees?: string \| undefined; data?: string \| undefined; } \| { family: "cardano"; amount: string; recipient: string; mode: string; fees?: string \| undefined; memo?: string \| undefined; } \| { family: "solana"; amount: string; recipient: string; model: string; } & `undefined` \| { family: "algorand"; amount: string; recipient: string; mode: "send" \| "optIn" \| "claimReward" \| "optOut"; fees?: string \| undefined; assetId?: string \| undefined; memo?: string \| undefined; } \| { family: "bitcoin"; amount: string; recipient: string; feePerByte?: string \| undefined; opReturnDataHex?: string \| undefined; } \| { family: "celo"; amount: string; recipient: string; mode: "send" \| "lock" \| "unlock" \| "withdraw" \| "vote" \| "revoke" \| "activate" \| "register"; fees?: string \| null \| undefined; index?: number \| ... 1 more ... \| undefined; } \| { family: "cosmos"; amount: string; recipient: string; mode: "send" \| "claimReward" \| "delegate" \| "undelegate" \| "redelegate" \| "claimRewardCompound"; fees?: string \| undefined; gas?: string \| undefined; memo?: string \| undefined; } \| { family: "crypto\_org"; amount: string; recipient: string; mode: string; fees?: string \| undefined; } \| { family: "ethereum"; amount: string; recipient: string; nonce?: number \| undefined; data?: string \| undefined; gasPrice?: string \| undefined; gasLimit?: string \| undefined; maxPriorityFeePerGas?: string \| undefined; maxFeePerGas?: string \| undefined; } \| { family: "hedera"; amount: string; recipient: string; memo?: string \| undefined; } \| { method: number; nonce: number; family: "filecoin"; amount: string; recipient: string; gasLimit: number; gasFeeCap: string; gasPremium: string; version: number; data?: string \| undefined; params?: string \| undefined; } \| { family: "near"; amount: string; recipient: string; mode: string; fees?: string \| undefined; } \| { family: "neo"; amount: string; recipient: string; } \| { family: "polkadot"; amount: string; recipient: string; mode: "send" \| "claimReward" \| "bond" \| "unbond" \| "rebond" \| "withdrawUnbonded" \| "setController" \| "nominate" \| "chill"; fee?: string \| undefined; era?: number \| undefined; } \| { family: "ripple"; amount: string; recipient: string; tag: number; fee?: string \| undefined; } \| { family: "stellar"; amount: string; recipient: string; fees?: string \| undefined; memoType?: "MEMO\_TEXT" \| "MEMO\_ID" \| "MEMO\_HASH" \| "MEMO\_RETURN" \| undefined; memoValue?: string \| undefined; } \| { family: "tezos"; amount: string; recipient: string; mode: "send" \| "delegate" \| "undelegate"; fees?: string \| undefined; gasLimit?: string \| undefined; } \| { family: "tron"; amount: string; recipient: string; mode: "send" \| "claimReward" \| "vote" \| "freeze" \| "unfreeze"; resource?: "BANDWIDTH" \| "ENERGY" \| undefined; duration?: number \| undefined; } \| { family: "elrond"; amount: string; recipient: string; mode: "send" \| "withdraw" \| "delegate" \| "reDelegateRewards" \| "unDelegate" \| "claimRewards"; gasLimit: number; fees?: string \| undefined; data?: string \| undefined; } \| { family: "cardano"; amount: string; recipient: string; mode: string; fees?: string \| undefined; memo?: string \| undefined; } \| { family: "solana"; amount: string; recipient: string; model: string; } = schemaRawTransaction }\>, `ZodObject`<{ `exchangeType`: `ZodLiteral`<``"SWAP"``\> ; `feeStrategy`: `ZodEnum`<[``"SLOW"``, ``"MEDIUM"``, ``"FAST"``]\> = schemaFeeStrategyType; `fromAccountId`: `ZodString` ; `hexBinaryPayload`: `ZodString` ; `hexSignature`: `ZodString` ; `provider`: `ZodString` ; `rawTransaction`: `ZodDiscriminatedUnion`<``"family"``, [`ZodObject`<{ amount: ZodString; recipient: ZodString; family: ZodLiteral<"algorand"\>; mode: ZodEnum<["send", "optIn", "claimReward", "optOut"]\>; fees: ZodOptional<...\>; assetId: ZodOptional<...\>; memo: ZodOptional<...\>; }, ``"strip"``, `ZodTypeAny`, { family: "algorand"; amount: string; recipient: string; mode: "send" \| "optIn" \| "claimReward" \| "optOut"; fees?: string \| undefined; assetId?: string \| undefined; memo?: string \| undefined; }, { family: "algorand"; amount: string; recipient: string; mode: "send" \| "optIn" \| "claimReward" \| "optOut"; fees?: string \| undefined; assetId?: string \| undefined; memo?: string \| undefined; }\>, `ZodObject`<{ amount: ZodString; recipient: ZodString; family: ZodLiteral<"bitcoin"\>; feePerByte: ZodOptional<ZodString\>; opReturnDataHex: ZodOptional<...\>; }, ``"strip"``, `ZodTypeAny`, { family: "bitcoin"; amount: string; recipient: string; feePerByte?: string \| undefined; opReturnDataHex?: string \| undefined; }, { family: "bitcoin"; amount: string; recipient: string; feePerByte?: string \| undefined; opReturnDataHex?: string \| undefined; }\>, `ZodObject`<{ amount: ZodString; recipient: ZodString; family: ZodLiteral<"celo"\>; fees: ZodNullable<ZodOptional<ZodString\>\>; mode: ZodEnum<...\>; index: ZodNullable<...\>; }, ``"strip"``, `ZodTypeAny`, { family: "celo"; amount: string; recipient: string; mode: "send" \| "lock" \| "unlock" \| "withdraw" \| "vote" \| "revoke" \| "activate" \| "register"; fees?: string \| null \| undefined; index?: number \| ... 1 more ... \| undefined; }, { family: "celo"; amount: string; recipient: string; mode: "send" \| "lock" \| "unlock" \| "withdraw" \| "vote" \| "revoke" \| "activate" \| "register"; fees?: string \| null \| undefined; index?: number \| ... 1 more ... \| undefined; }\>]\> = schemaRawTransaction; `toAccountId`: `ZodString`  }, ``"strip"``, `ZodTypeAny`, { `exchangeType`: ``"SWAP"`` ; `feeStrategy`: ``"SLOW"`` \| ``"MEDIUM"`` \| ``"FAST"`` = schemaFeeStrategyType; `fromAccountId`: `string` ; `hexBinaryPayload`: `string` ; `hexSignature`: `string` ; `provider`: `string` ; `rawTransaction`: { family: "algorand"; amount: string; recipient: string; mode: "send" \| "optIn" \| "claimReward" \| "optOut"; fees?: string \| undefined; assetId?: string \| undefined; memo?: string \| undefined; } \| { family: "bitcoin"; amount: string; recipient: string; feePerByte?: string \| undefined; opReturnDataHex?: string \| undefined; } \| { family: "celo"; amount: string; recipient: string; mode: "send" \| "lock" \| "unlock" \| "withdraw" \| "vote" \| "revoke" \| "activate" \| "register"; fees?: string \| null \| undefined; index?: number \| ... 1 more ... \| undefined; } \| { family: "cosmos"; amount: string; recipient: string; mode: "send" \| "claimReward" \| "delegate" \| "undelegate" \| "redelegate" \| "claimRewardCompound"; fees?: string \| undefined; gas?: string \| undefined; memo?: string \| undefined; } \| { family: "crypto\_org"; amount: string; recipient: string; mode: string; fees?: string \| undefined; } \| { family: "ethereum"; amount: string; recipient: string; nonce?: number \| undefined; data?: string \| undefined; gasPrice?: string \| undefined; gasLimit?: string \| undefined; maxPriorityFeePerGas?: string \| undefined; maxFeePerGas?: string \| undefined; } \| { family: "hedera"; amount: string; recipient: string; memo?: string \| undefined; } \| { method: number; nonce: number; family: "filecoin"; amount: string; recipient: string; gasLimit: number; gasFeeCap: string; gasPremium: string; version: number; data?: string \| undefined; params?: string \| undefined; } \| { family: "near"; amount: string; recipient: string; mode: string; fees?: string \| undefined; } \| { family: "neo"; amount: string; recipient: string; } \| { family: "polkadot"; amount: string; recipient: string; mode: "send" \| "claimReward" \| "bond" \| "unbond" \| "rebond" \| "withdrawUnbonded" \| "setController" \| "nominate" \| "chill"; fee?: string \| undefined; era?: number \| undefined; } \| { family: "ripple"; amount: string; recipient: string; tag: number; fee?: string \| undefined; } \| { family: "stellar"; amount: string; recipient: string; fees?: string \| undefined; memoType?: "MEMO\_TEXT" \| "MEMO\_ID" \| "MEMO\_HASH" \| "MEMO\_RETURN" \| undefined; memoValue?: string \| undefined; } \| { family: "tezos"; amount: string; recipient: string; mode: "send" \| "delegate" \| "undelegate"; fees?: string \| undefined; gasLimit?: string \| undefined; } \| { family: "tron"; amount: string; recipient: string; mode: "send" \| "claimReward" \| "vote" \| "freeze" \| "unfreeze"; resource?: "BANDWIDTH" \| "ENERGY" \| undefined; duration?: number \| undefined; } \| { family: "elrond"; amount: string; recipient: string; mode: "send" \| "withdraw" \| "delegate" \| "reDelegateRewards" \| "unDelegate" \| "claimRewards"; gasLimit: number; fees?: string \| undefined; data?: string \| undefined; } \| { family: "cardano"; amount: string; recipient: string; mode: string; fees?: string \| undefined; memo?: string \| undefined; } \| { family: "solana"; amount: string; recipient: string; model: string; } & `undefined` \| { family: "algorand"; amount: string; recipient: string; mode: "send" \| "optIn" \| "claimReward" \| "optOut"; fees?: string \| undefined; assetId?: string \| undefined; memo?: string \| undefined; } \| { family: "bitcoin"; amount: string; recipient: string; feePerByte?: string \| undefined; opReturnDataHex?: string \| undefined; } \| { family: "celo"; amount: string; recipient: string; mode: "send" \| "lock" \| "unlock" \| "withdraw" \| "vote" \| "revoke" \| "activate" \| "register"; fees?: string \| null \| undefined; index?: number \| ... 1 more ... \| undefined; } \| { family: "cosmos"; amount: string; recipient: string; mode: "send" \| "claimReward" \| "delegate" \| "undelegate" \| "redelegate" \| "claimRewardCompound"; fees?: string \| undefined; gas?: string \| undefined; memo?: string \| undefined; } \| { family: "crypto\_org"; amount: string; recipient: string; mode: string; fees?: string \| undefined; } \| { family: "ethereum"; amount: string; recipient: string; nonce?: number \| undefined; data?: string \| undefined; gasPrice?: string \| undefined; gasLimit?: string \| undefined; maxPriorityFeePerGas?: string \| undefined; maxFeePerGas?: string \| undefined; } \| { family: "hedera"; amount: string; recipient: string; memo?: string \| undefined; } \| { method: number; nonce: number; family: "filecoin"; amount: string; recipient: string; gasLimit: number; gasFeeCap: string; gasPremium: string; version: number; data?: string \| undefined; params?: string \| undefined; } \| { family: "near"; amount: string; recipient: string; mode: string; fees?: string \| undefined; } \| { family: "neo"; amount: string; recipient: string; } \| { family: "polkadot"; amount: string; recipient: string; mode: "send" \| "claimReward" \| "bond" \| "unbond" \| "rebond" \| "withdrawUnbonded" \| "setController" \| "nominate" \| "chill"; fee?: string \| undefined; era?: number \| undefined; } \| { family: "ripple"; amount: string; recipient: string; tag: number; fee?: string \| undefined; } \| { family: "stellar"; amount: string; recipient: string; fees?: string \| undefined; memoType?: "MEMO\_TEXT" \| "MEMO\_ID" \| "MEMO\_HASH" \| "MEMO\_RETURN" \| undefined; memoValue?: string \| undefined; } \| { family: "tezos"; amount: string; recipient: string; mode: "send" \| "delegate" \| "undelegate"; fees?: string \| undefined; gasLimit?: string \| undefined; } \| { family: "tron"; amount: string; recipient: string; mode: "send" \| "claimReward" \| "vote" \| "freeze" \| "unfreeze"; resource?: "BANDWIDTH" \| "ENERGY" \| undefined; duration?: number \| undefined; } \| { family: "elrond"; amount: string; recipient: string; mode: "send" \| "withdraw" \| "delegate" \| "reDelegateRewards" \| "unDelegate" \| "claimRewards"; gasLimit: number; fees?: string \| undefined; data?: string \| undefined; } \| { family: "cardano"; amount: string; recipient: string; mode: string; fees?: string \| undefined; memo?: string \| undefined; } \| { family: "solana"; amount: string; recipient: string; model: string; } = schemaRawTransaction; `toAccountId`: `string`  }, { `exchangeType`: ``"SWAP"`` ; `feeStrategy`: ``"SLOW"`` \| ``"MEDIUM"`` \| ``"FAST"`` = schemaFeeStrategyType; `fromAccountId`: `string` ; `hexBinaryPayload`: `string` ; `hexSignature`: `string` ; `provider`: `string` ; `rawTransaction`: { family: "algorand"; amount: string; recipient: string; mode: "send" \| "optIn" \| "claimReward" \| "optOut"; fees?: string \| undefined; assetId?: string \| undefined; memo?: string \| undefined; } \| { family: "bitcoin"; amount: string; recipient: string; feePerByte?: string \| undefined; opReturnDataHex?: string \| undefined; } \| { family: "celo"; amount: string; recipient: string; mode: "send" \| "lock" \| "unlock" \| "withdraw" \| "vote" \| "revoke" \| "activate" \| "register"; fees?: string \| null \| undefined; index?: number \| ... 1 more ... \| undefined; } \| { family: "cosmos"; amount: string; recipient: string; mode: "send" \| "claimReward" \| "delegate" \| "undelegate" \| "redelegate" \| "claimRewardCompound"; fees?: string \| undefined; gas?: string \| undefined; memo?: string \| undefined; } \| { family: "crypto\_org"; amount: string; recipient: string; mode: string; fees?: string \| undefined; } \| { family: "ethereum"; amount: string; recipient: string; nonce?: number \| undefined; data?: string \| undefined; gasPrice?: string \| undefined; gasLimit?: string \| undefined; maxPriorityFeePerGas?: string \| undefined; maxFeePerGas?: string \| undefined; } \| { family: "hedera"; amount: string; recipient: string; memo?: string \| undefined; } \| { method: number; nonce: number; family: "filecoin"; amount: string; recipient: string; gasLimit: number; gasFeeCap: string; gasPremium: string; version: number; data?: string \| undefined; params?: string \| undefined; } \| { family: "near"; amount: string; recipient: string; mode: string; fees?: string \| undefined; } \| { family: "neo"; amount: string; recipient: string; } \| { family: "polkadot"; amount: string; recipient: string; mode: "send" \| "claimReward" \| "bond" \| "unbond" \| "rebond" \| "withdrawUnbonded" \| "setController" \| "nominate" \| "chill"; fee?: string \| undefined; era?: number \| undefined; } \| { family: "ripple"; amount: string; recipient: string; tag: number; fee?: string \| undefined; } \| { family: "stellar"; amount: string; recipient: string; fees?: string \| undefined; memoType?: "MEMO\_TEXT" \| "MEMO\_ID" \| "MEMO\_HASH" \| "MEMO\_RETURN" \| undefined; memoValue?: string \| undefined; } \| { family: "tezos"; amount: string; recipient: string; mode: "send" \| "delegate" \| "undelegate"; fees?: string \| undefined; gasLimit?: string \| undefined; } \| { family: "tron"; amount: string; recipient: string; mode: "send" \| "claimReward" \| "vote" \| "freeze" \| "unfreeze"; resource?: "BANDWIDTH" \| "ENERGY" \| undefined; duration?: number \| undefined; } \| { family: "elrond"; amount: string; recipient: string; mode: "send" \| "withdraw" \| "delegate" \| "reDelegateRewards" \| "unDelegate" \| "claimRewards"; gasLimit: number; fees?: string \| undefined; data?: string \| undefined; } \| { family: "cardano"; amount: string; recipient: string; mode: string; fees?: string \| undefined; memo?: string \| undefined; } \| { family: "solana"; amount: string; recipient: string; model: string; } & `undefined` \| { family: "algorand"; amount: string; recipient: string; mode: "send" \| "optIn" \| "claimReward" \| "optOut"; fees?: string \| undefined; assetId?: string \| undefined; memo?: string \| undefined; } \| { family: "bitcoin"; amount: string; recipient: string; feePerByte?: string \| undefined; opReturnDataHex?: string \| undefined; } \| { family: "celo"; amount: string; recipient: string; mode: "send" \| "lock" \| "unlock" \| "withdraw" \| "vote" \| "revoke" \| "activate" \| "register"; fees?: string \| null \| undefined; index?: number \| ... 1 more ... \| undefined; } \| { family: "cosmos"; amount: string; recipient: string; mode: "send" \| "claimReward" \| "delegate" \| "undelegate" \| "redelegate" \| "claimRewardCompound"; fees?: string \| undefined; gas?: string \| undefined; memo?: string \| undefined; } \| { family: "crypto\_org"; amount: string; recipient: string; mode: string; fees?: string \| undefined; } \| { family: "ethereum"; amount: string; recipient: string; nonce?: number \| undefined; data?: string \| undefined; gasPrice?: string \| undefined; gasLimit?: string \| undefined; maxPriorityFeePerGas?: string \| undefined; maxFeePerGas?: string \| undefined; } \| { family: "hedera"; amount: string; recipient: string; memo?: string \| undefined; } \| { method: number; nonce: number; family: "filecoin"; amount: string; recipient: string; gasLimit: number; gasFeeCap: string; gasPremium: string; version: number; data?: string \| undefined; params?: string \| undefined; } \| { family: "near"; amount: string; recipient: string; mode: string; fees?: string \| undefined; } \| { family: "neo"; amount: string; recipient: string; } \| { family: "polkadot"; amount: string; recipient: string; mode: "send" \| "claimReward" \| "bond" \| "unbond" \| "rebond" \| "withdrawUnbonded" \| "setController" \| "nominate" \| "chill"; fee?: string \| undefined; era?: number \| undefined; } \| { family: "ripple"; amount: string; recipient: string; tag: number; fee?: string \| undefined; } \| { family: "stellar"; amount: string; recipient: string; fees?: string \| undefined; memoType?: "MEMO\_TEXT" \| "MEMO\_ID" \| "MEMO\_HASH" \| "MEMO\_RETURN" \| undefined; memoValue?: string \| undefined; } \| { family: "tezos"; amount: string; recipient: string; mode: "send" \| "delegate" \| "undelegate"; fees?: string \| undefined; gasLimit?: string \| undefined; } \| { family: "tron"; amount: string; recipient: string; mode: "send" \| "claimReward" \| "vote" \| "freeze" \| "unfreeze"; resource?: "BANDWIDTH" \| "ENERGY" \| undefined; duration?: number \| undefined; } \| { family: "elrond"; amount: string; recipient: string; mode: "send" \| "withdraw" \| "delegate" \| "reDelegateRewards" \| "unDelegate" \| "claimRewards"; gasLimit: number; fees?: string \| undefined; data?: string \| undefined; } \| { family: "cardano"; amount: string; recipient: string; mode: string; fees?: string \| undefined; memo?: string \| undefined; } \| { family: "solana"; amount: string; recipient: string; model: string; } = schemaRawTransaction; `toAccountId`: `string`  }\>]\> |
| `result` | `ZodObject`<{ `transactionHash`: `ZodString`  }, ``"strip"``, `ZodTypeAny`, { `transactionHash`: `string`  }, { `transactionHash`: `string`  }\> |

#### Defined in

[packages/core/src/spec/types/ExchangeComplete.ts:41](https://github.com/LedgerHQ/wallet-api/blob/main/packages/core/src/spec/types/ExchangeComplete.ts#L41)

___

### schemaExchangeStart

• `Const` **schemaExchangeStart**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `params` | `ZodObject`<{ `exchangeType`: `ZodEnum`<[``"SWAP"``, ``"SELL"``, ``"FUND"``]\> = schemaExchangeType }, ``"strip"``, `ZodTypeAny`, { `exchangeType`: ``"FUND"`` \| ``"SELL"`` \| ``"SWAP"`` = schemaExchangeType }, { `exchangeType`: ``"FUND"`` \| ``"SELL"`` \| ``"SWAP"`` = schemaExchangeType }\> |
| `result` | `ZodObject`<{ `transactionId`: `ZodString`  }, ``"strip"``, `ZodTypeAny`, { `transactionId`: `string`  }, { `transactionId`: `string`  }\> |

#### Defined in

[packages/core/src/spec/types/ExchangeStart.ts:13](https://github.com/LedgerHQ/wallet-api/blob/main/packages/core/src/spec/types/ExchangeStart.ts#L13)

___

### schemaFamilies

• `Const` **schemaFamilies**: `ZodEnum`<[``"bitcoin"``, ``"ethereum"``, ``"algorand"``, ``"crypto_org"``, ``"ripple"``, ``"cosmos"``, ``"ripple"``, ``"celo"``, ``"cosmos"``, ``"hedera"``, ``"filecoin"``, ``"tezos"``, ``"polkadot"``, ``"stellar"``, ``"tron"``, ``"near"``, ``"neo"``, ``"elrond"``, ``"cardano"``, ``"solana"``]\>

#### Defined in

[packages/core/src/families/common.ts:31](https://github.com/LedgerHQ/wallet-api/blob/main/packages/core/src/families/common.ts#L31)

___

### schemaMessageSign

• `Const` **schemaMessageSign**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `params` | `ZodObject`<{ `accountId`: `ZodString` ; `hexMessage`: `ZodString` ; `meta`: `ZodOptional`<`ZodRecord`<`ZodString`, `ZodUnknown`\>\>  }, ``"strip"``, `ZodTypeAny`, { `accountId`: `string` ; `hexMessage`: `string` ; `meta?`: `Record`<`string`, `unknown`\>  }, { `accountId`: `string` ; `hexMessage`: `string` ; `meta?`: `Record`<`string`, `unknown`\>  }\> |
| `result` | `ZodObject`<{ `hexSignedMessage`: `ZodString`  }, ``"strip"``, `ZodTypeAny`, { `hexSignedMessage`: `string`  }, { `hexSignedMessage`: `string`  }\> |

#### Defined in

[packages/core/src/spec/types/MessageSign.ts:13](https://github.com/LedgerHQ/wallet-api/blob/main/packages/core/src/spec/types/MessageSign.ts#L13)

___

### schemaNotImplementedByWallet

• `Const` **schemaNotImplementedByWallet**: `ZodObject`<{ `code`: `ZodLiteral`<``"NOT_IMPLEMENTED_BY_WALLET"``\> ; `data`: `ZodObject`<{ `methodId`: `ZodString`  }, ``"strip"``, `ZodTypeAny`, { `methodId`: `string`  }, { `methodId`: `string`  }\> ; `message`: `ZodString`  }, ``"strip"``, `ZodTypeAny`, { `code`: ``"NOT_IMPLEMENTED_BY_WALLET"`` ; `data`: { methodId: string; } ; `message`: `string`  }, { `code`: ``"NOT_IMPLEMENTED_BY_WALLET"`` ; `data`: { methodId: string; } ; `message`: `string`  }\>

#### Defined in

[packages/core/src/errors/types.ts:23](https://github.com/LedgerHQ/wallet-api/blob/main/packages/core/src/errors/types.ts#L23)

___

### schemaPermissionDenied

• `Const` **schemaPermissionDenied**: `ZodObject`<{ `code`: `ZodLiteral`<``"PERMISSION_DENIED"``\> ; `data`: `ZodObject`<{ `methodId`: `ZodString`  }, ``"strip"``, `ZodTypeAny`, { `methodId`: `string`  }, { `methodId`: `string`  }\> ; `message`: `ZodString`  }, ``"strip"``, `ZodTypeAny`, { `code`: ``"PERMISSION_DENIED"`` ; `data`: { methodId: string; } ; `message`: `string`  }, { `code`: ``"PERMISSION_DENIED"`` ; `data`: { methodId: string; } ; `message`: `string`  }\>

#### Defined in

[packages/core/src/errors/types.ts:67](https://github.com/LedgerHQ/wallet-api/blob/main/packages/core/src/errors/types.ts#L67)

___

### schemaRPCCall

• `Const` **schemaRPCCall**: `ZodUnion`<[`ZodObject`<{ `id`: `ZodOptional`<`ZodUnion`<[`ZodString`, `ZodNumber`, `ZodNull`]\>\> ; `jsonrpc`: `ZodLiteral`<``"2.0"``\> ; `method`: `ZodString` ; `params`: `ZodAny`  }, ``"strict"``, `ZodTypeAny`, { `id?`: ``null`` \| `string` \| `number` ; `jsonrpc`: ``"2.0"`` ; `method`: `string` ; `params?`: `any`  }, { `id?`: ``null`` \| `string` \| `number` ; `jsonrpc`: ``"2.0"`` ; `method`: `string` ; `params?`: `any`  }\>, `ZodUnion`<[`ZodObject`<{ `error`: `ZodObject`<{ `code`: `ZodNumber` ; `data`: `ZodOptional`<`ZodAny`\> ; `message`: `ZodString`  }, ``"strict"``, `ZodTypeAny`, { `code`: `number` ; `data?`: `any` ; `message`: `string`  }, { `code`: `number` ; `data?`: `any` ; `message`: `string`  }\> = schemaRPCResponseErrorData; `id`: `ZodUnion`<[`ZodString`, `ZodNumber`, `ZodNull`]\> = schemaRPCId; `jsonrpc`: `ZodLiteral`<``"2.0"``\>  }, ``"strict"``, `ZodTypeAny`, { `error`: { code: number; message: string; data?: any; } = schemaRPCResponseErrorData; `id`: ``null`` \| `string` \| `number` = schemaRPCId; `jsonrpc`: ``"2.0"``  }, { `error`: { code: number; message: string; data?: any; } = schemaRPCResponseErrorData; `id`: ``null`` \| `string` \| `number` = schemaRPCId; `jsonrpc`: ``"2.0"``  }\>, `ZodObject`<{ `id`: `ZodUnion`<[`ZodString`, `ZodNumber`, `ZodNull`]\> = schemaRPCId; `jsonrpc`: `ZodLiteral`<``"2.0"``\> ; `result`: `ZodObject`<{}, ``"passthrough"``, `ZodTypeAny`, `objectOutputType`<{}, `ZodTypeAny`, ``"passthrough"``\>, `objectInputType`<{}, `ZodTypeAny`, ``"passthrough"``\>\>  }, ``"strict"``, `ZodTypeAny`, { `id`: ``null`` \| `string` \| `number` = schemaRPCId; `jsonrpc`: ``"2.0"`` ; `result`: {} & { `[k: string]`: `unknown`;  }  }, { `id`: ``null`` \| `string` \| `number` = schemaRPCId; `jsonrpc`: ``"2.0"`` ; `result`: {} & { `[k: string]`: `unknown`;  }  }\>]\>]\>

#### Defined in

[packages/core/src/JSONRPC/validation.ts:43](https://github.com/LedgerHQ/wallet-api/blob/main/packages/core/src/JSONRPC/validation.ts#L43)

___

### schemaRPCMethod

• `Const` **schemaRPCMethod**: `ZodEnum`<[``"account.list"``, ``"account.receive"``, ``"account.request"``, ``"currency.list"``, ``"device.close"``, ``"device.exchange"``, ``"device.transport"``, ``"message.sign"``, ``"transaction.sign"``, ``"transaction.signAndBroadcast"``, ``"wallet.capabilities"``, ``"wallet.info"``, ``"wallet.userId"``]\>

#### Defined in

[packages/core/src/spec/methods.ts:5](https://github.com/LedgerHQ/wallet-api/blob/main/packages/core/src/spec/methods.ts#L5)

___

### schemaRPCRequest

• `Const` **schemaRPCRequest**: `ZodObject`<{ `id`: `ZodOptional`<`ZodUnion`<[`ZodString`, `ZodNumber`, `ZodNull`]\>\> ; `jsonrpc`: `ZodLiteral`<``"2.0"``\> ; `method`: `ZodString` ; `params`: `ZodAny`  }, ``"strict"``, `ZodTypeAny`, { `id?`: ``null`` \| `string` \| `number` ; `jsonrpc`: ``"2.0"`` ; `method`: `string` ; `params?`: `any`  }, { `id?`: ``null`` \| `string` \| `number` ; `jsonrpc`: ``"2.0"`` ; `method`: `string` ; `params?`: `any`  }\>

#### Defined in

[packages/core/src/JSONRPC/validation.ts:5](https://github.com/LedgerHQ/wallet-api/blob/main/packages/core/src/JSONRPC/validation.ts#L5)

___

### schemaRPCResponse

• `Const` **schemaRPCResponse**: `ZodUnion`<[`ZodObject`<{ `error`: `ZodObject`<{ `code`: `ZodNumber` ; `data`: `ZodOptional`<`ZodAny`\> ; `message`: `ZodString`  }, ``"strict"``, `ZodTypeAny`, { `code`: `number` ; `data?`: `any` ; `message`: `string`  }, { `code`: `number` ; `data?`: `any` ; `message`: `string`  }\> = schemaRPCResponseErrorData; `id`: `ZodUnion`<[`ZodString`, `ZodNumber`, `ZodNull`]\> = schemaRPCId; `jsonrpc`: `ZodLiteral`<``"2.0"``\>  }, ``"strict"``, `ZodTypeAny`, { `error`: { code: number; message: string; data?: any; } = schemaRPCResponseErrorData; `id`: ``null`` \| `string` \| `number` = schemaRPCId; `jsonrpc`: ``"2.0"``  }, { `error`: { code: number; message: string; data?: any; } = schemaRPCResponseErrorData; `id`: ``null`` \| `string` \| `number` = schemaRPCId; `jsonrpc`: ``"2.0"``  }\>, `ZodObject`<{ `id`: `ZodUnion`<[`ZodString`, `ZodNumber`, `ZodNull`]\> = schemaRPCId; `jsonrpc`: `ZodLiteral`<``"2.0"``\> ; `result`: `ZodObject`<{}, ``"passthrough"``, `ZodTypeAny`, `objectOutputType`<{}, `ZodTypeAny`, ``"passthrough"``\>, `objectInputType`<{}, `ZodTypeAny`, ``"passthrough"``\>\>  }, ``"strict"``, `ZodTypeAny`, { `id`: ``null`` \| `string` \| `number` = schemaRPCId; `jsonrpc`: ``"2.0"`` ; `result`: {} & { `[k: string]`: `unknown`;  }  }, { `id`: ``null`` \| `string` \| `number` = schemaRPCId; `jsonrpc`: ``"2.0"`` ; `result`: {} & { `[k: string]`: `unknown`;  }  }\>]\>

#### Defined in

[packages/core/src/JSONRPC/validation.ts:38](https://github.com/LedgerHQ/wallet-api/blob/main/packages/core/src/JSONRPC/validation.ts#L38)

___

### schemaRPCResponseError

• `Const` **schemaRPCResponseError**: `ZodObject`<{ `error`: `ZodObject`<{ `code`: `ZodNumber` ; `data`: `ZodOptional`<`ZodAny`\> ; `message`: `ZodString`  }, ``"strict"``, `ZodTypeAny`, { `code`: `number` ; `data?`: `any` ; `message`: `string`  }, { `code`: `number` ; `data?`: `any` ; `message`: `string`  }\> = schemaRPCResponseErrorData; `id`: `ZodUnion`<[`ZodString`, `ZodNumber`, `ZodNull`]\> = schemaRPCId; `jsonrpc`: `ZodLiteral`<``"2.0"``\>  }, ``"strict"``, `ZodTypeAny`, { `error`: { code: number; message: string; data?: any; } = schemaRPCResponseErrorData; `id`: ``null`` \| `string` \| `number` = schemaRPCId; `jsonrpc`: ``"2.0"``  }, { `error`: { code: number; message: string; data?: any; } = schemaRPCResponseErrorData; `id`: ``null`` \| `string` \| `number` = schemaRPCId; `jsonrpc`: ``"2.0"``  }\>

#### Defined in

[packages/core/src/JSONRPC/validation.ts:30](https://github.com/LedgerHQ/wallet-api/blob/main/packages/core/src/JSONRPC/validation.ts#L30)

___

### schemaRPCResponseErrorData

• `Const` **schemaRPCResponseErrorData**: `ZodObject`<{ `code`: `ZodNumber` ; `data`: `ZodOptional`<`ZodAny`\> ; `message`: `ZodString`  }, ``"strict"``, `ZodTypeAny`, { `code`: `number` ; `data?`: `any` ; `message`: `string`  }, { `code`: `number` ; `data?`: `any` ; `message`: `string`  }\>

#### Defined in

[packages/core/src/JSONRPC/validation.ts:14](https://github.com/LedgerHQ/wallet-api/blob/main/packages/core/src/JSONRPC/validation.ts#L14)

___

### schemaRPCResponseSuccess

• `Const` **schemaRPCResponseSuccess**: `ZodObject`<{ `id`: `ZodUnion`<[`ZodString`, `ZodNumber`, `ZodNull`]\> = schemaRPCId; `jsonrpc`: `ZodLiteral`<``"2.0"``\> ; `result`: `ZodObject`<{}, ``"passthrough"``, `ZodTypeAny`, `objectOutputType`<{}, `ZodTypeAny`, ``"passthrough"``\>, `objectInputType`<{}, `ZodTypeAny`, ``"passthrough"``\>\>  }, ``"strict"``, `ZodTypeAny`, { `id`: ``null`` \| `string` \| `number` = schemaRPCId; `jsonrpc`: ``"2.0"`` ; `result`: {} & { `[k: string]`: `unknown`;  }  }, { `id`: ``null`` \| `string` \| `number` = schemaRPCId; `jsonrpc`: ``"2.0"`` ; `result`: {} & { `[k: string]`: `unknown`;  }  }\>

#### Defined in

[packages/core/src/JSONRPC/validation.ts:22](https://github.com/LedgerHQ/wallet-api/blob/main/packages/core/src/JSONRPC/validation.ts#L22)

___

### schemaRawAccount

• `Const` **schemaRawAccount**: `ZodObject`<{ `address`: `ZodString` ; `balance`: `ZodString` ; `blockHeight`: `ZodNumber` ; `currency`: `ZodString` ; `id`: `ZodString` ; `lastSyncDate`: `ZodString` ; `name`: `ZodString` ; `spendableBalance`: `ZodString`  }, ``"strip"``, `ZodTypeAny`, { `address`: `string` ; `balance`: `string` ; `blockHeight`: `number` ; `currency`: `string` ; `id`: `string` ; `lastSyncDate`: `string` ; `name`: `string` ; `spendableBalance`: `string`  }, { `address`: `string` ; `balance`: `string` ; `blockHeight`: `number` ; `currency`: `string` ; `id`: `string` ; `lastSyncDate`: `string` ; `name`: `string` ; `spendableBalance`: `string`  }\>

#### Defined in

[packages/core/src/accounts/validation.ts:3](https://github.com/LedgerHQ/wallet-api/blob/main/packages/core/src/accounts/validation.ts#L3)

___

### schemaRawTransaction

• `Const` **schemaRawTransaction**: `ZodDiscriminatedUnion`<``"family"``, [`ZodObject`<{ `amount`: `ZodString` ; `assetId`: `ZodOptional`<`ZodString`\> ; `family`: `ZodLiteral`<``"algorand"``\> ; `fees`: `ZodOptional`<`ZodString`\> ; `memo`: `ZodOptional`<`ZodString`\> ; `mode`: `ZodEnum`<[``"send"``, ``"optIn"``, ``"claimReward"``, ``"optOut"``]\> = schemaAlgorandOperationMode; `recipient`: `ZodString`  }, ``"strip"``, `ZodTypeAny`, { `amount`: `string` ; `assetId?`: `string` ; `family`: ``"algorand"`` ; `fees?`: `string` ; `memo?`: `string` ; `mode`: ``"send"`` \| ``"optIn"`` \| ``"claimReward"`` \| ``"optOut"`` = schemaAlgorandOperationMode; `recipient`: `string`  }, { `amount`: `string` ; `assetId?`: `string` ; `family`: ``"algorand"`` ; `fees?`: `string` ; `memo?`: `string` ; `mode`: ``"send"`` \| ``"optIn"`` \| ``"claimReward"`` \| ``"optOut"`` = schemaAlgorandOperationMode; `recipient`: `string`  }\>, `ZodObject`<{ `amount`: `ZodString` ; `family`: `ZodLiteral`<``"bitcoin"``\> ; `feePerByte`: `ZodOptional`<`ZodString`\> ; `opReturnDataHex`: `ZodOptional`<`ZodString`\> ; `recipient`: `ZodString`  }, ``"strip"``, `ZodTypeAny`, { `amount`: `string` ; `family`: ``"bitcoin"`` ; `feePerByte?`: `string` ; `opReturnDataHex?`: `string` ; `recipient`: `string`  }, { `amount`: `string` ; `family`: ``"bitcoin"`` ; `feePerByte?`: `string` ; `opReturnDataHex?`: `string` ; `recipient`: `string`  }\>, `ZodObject`<{ `amount`: `ZodString` ; `family`: `ZodLiteral`<``"celo"``\> ; `fees`: `ZodNullable`<`ZodOptional`<`ZodString`\>\> ; `index`: `ZodNullable`<`ZodOptional`<`ZodNumber`\>\> ; `mode`: `ZodEnum`<[``"send"``, ``"lock"``, ``"unlock"``, ``"withdraw"``, ``"vote"``, ``"revoke"``, ``"activate"``, ``"register"``]\> = schemaOperationMode; `recipient`: `ZodString`  }, ``"strip"``, `ZodTypeAny`, { `amount`: `string` ; `family`: ``"celo"`` ; `fees?`: ``null`` \| `string` ; `index?`: ``null`` \| `number` ; `mode`: ``"send"`` \| ``"lock"`` \| ``"unlock"`` \| ``"withdraw"`` \| ``"vote"`` \| ``"revoke"`` \| ``"activate"`` \| ``"register"`` = schemaOperationMode; `recipient`: `string`  }, { `amount`: `string` ; `family`: ``"celo"`` ; `fees?`: ``null`` \| `string` ; `index?`: ``null`` \| `number` ; `mode`: ``"send"`` \| ``"lock"`` \| ``"unlock"`` \| ``"withdraw"`` \| ``"vote"`` \| ``"revoke"`` \| ``"activate"`` \| ``"register"`` = schemaOperationMode; `recipient`: `string`  }\>]\>

#### Defined in

[packages/core/src/families/validation.ts:21](https://github.com/LedgerHQ/wallet-api/blob/main/packages/core/src/families/validation.ts#L21)

___

### schemaServerErrorCode

• `Const` **schemaServerErrorCode**: `ZodEnum`<[``"NOT_IMPLEMENTED_BY_WALLET"``, ``"ACCOUNT_NOT_FOUND"``, ``"CURRENCY_NOT_FOUND"``, ``"PERMISSION_DENIED"``, ``"UNKNOWN_ERROR"``, ``"UNAUTHORIZED_STORE"``]\>

#### Defined in

[packages/core/src/errors/types.ts:8](https://github.com/LedgerHQ/wallet-api/blob/main/packages/core/src/errors/types.ts#L8)

___

### schemaServerErrorData

• `Const` **schemaServerErrorData**: `ZodDiscriminatedUnion`<``"code"``, [`ZodObject`<{ `code`: `ZodLiteral`<``"NOT_IMPLEMENTED_BY_WALLET"``\> ; `data`: `ZodObject`<{ `methodId`: `ZodString`  }, ``"strip"``, `ZodTypeAny`, { `methodId`: `string`  }, { `methodId`: `string`  }\> ; `message`: `ZodString`  }, ``"strip"``, `ZodTypeAny`, { `code`: ``"NOT_IMPLEMENTED_BY_WALLET"`` ; `data`: { methodId: string; } ; `message`: `string`  }, { `code`: ``"NOT_IMPLEMENTED_BY_WALLET"`` ; `data`: { methodId: string; } ; `message`: `string`  }\>, `ZodObject`<{ `code`: `ZodLiteral`<``"ACCOUNT_NOT_FOUND"``\> ; `data`: `ZodObject`<{ `accountId`: `ZodString`  }, ``"strip"``, `ZodTypeAny`, { `accountId`: `string`  }, { `accountId`: `string`  }\> ; `message`: `ZodString`  }, ``"strip"``, `ZodTypeAny`, { `code`: ``"ACCOUNT_NOT_FOUND"`` ; `data`: { accountId: string; } ; `message`: `string`  }, { `code`: ``"ACCOUNT_NOT_FOUND"`` ; `data`: { accountId: string; } ; `message`: `string`  }\>, `ZodObject`<{ `code`: `ZodLiteral`<``"CURRENCY_NOT_FOUND"``\> ; `data`: `ZodObject`<{ `currencyId`: `ZodString`  }, ``"strip"``, `ZodTypeAny`, { `currencyId`: `string`  }, { `currencyId`: `string`  }\> ; `message`: `ZodString`  }, ``"strip"``, `ZodTypeAny`, { `code`: ``"CURRENCY_NOT_FOUND"`` ; `data`: { currencyId: string; } ; `message`: `string`  }, { `code`: ``"CURRENCY_NOT_FOUND"`` ; `data`: { currencyId: string; } ; `message`: `string`  }\>]\>

#### Defined in

[packages/core/src/errors/types.ts:109](https://github.com/LedgerHQ/wallet-api/blob/main/packages/core/src/errors/types.ts#L109)

___

### schemaStorageGet

• `Const` **schemaStorageGet**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `params` | `ZodObject`<{ `key`: `ZodString` ; `storeId`: `ZodOptional`<`ZodString`\>  }, ``"strip"``, `ZodTypeAny`, { `key`: `string` ; `storeId?`: `string`  }, { `key`: `string` ; `storeId?`: `string`  }\> |
| `result` | `ZodObject`<{ `value`: `ZodOptional`<`ZodString`\>  }, ``"strip"``, `ZodTypeAny`, { `value?`: `string`  }, { `value?`: `string`  }\> |

#### Defined in

[packages/core/src/spec/types/StorageGet.ts:12](https://github.com/LedgerHQ/wallet-api/blob/main/packages/core/src/spec/types/StorageGet.ts#L12)

___

### schemaStorageSet

• `Const` **schemaStorageSet**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `params` | `ZodObject`<{ `key`: `ZodString` ; `storeId`: `ZodOptional`<`ZodString`\> ; `value`: `ZodString`  }, ``"strip"``, `ZodTypeAny`, { `key`: `string` ; `storeId?`: `string` ; `value`: `string`  }, { `key`: `string` ; `storeId?`: `string` ; `value`: `string`  }\> |
| `result` | `ZodVoid` |

#### Defined in

[packages/core/src/spec/types/StorageSet.ts:11](https://github.com/LedgerHQ/wallet-api/blob/main/packages/core/src/spec/types/StorageSet.ts#L11)

___

### schemaTokenCurrency

• `Const` **schemaTokenCurrency**: `ZodObject`<{ `color`: `ZodString` ; `decimals`: `ZodNumber` ; `id`: `ZodString` ; `name`: `ZodString` ; `parent`: `ZodString` ; `ticker`: `ZodString` ; `type`: `ZodLiteral`<``"TokenCurrency"``\>  }, ``"strip"``, `ZodTypeAny`, { `color`: `string` ; `decimals`: `number` ; `id`: `string` ; `name`: `string` ; `parent`: `string` ; `ticker`: `string` ; `type`: ``"TokenCurrency"``  }, { `color`: `string` ; `decimals`: `number` ; `id`: `string` ; `name`: `string` ; `parent`: `string` ; `ticker`: `string` ; `type`: ``"TokenCurrency"``  }\>

#### Defined in

[packages/core/src/currencies/validation.ts:20](https://github.com/LedgerHQ/wallet-api/blob/main/packages/core/src/currencies/validation.ts#L20)

___

### schemaTokenStandard

• `Const` **schemaTokenStandard**: `ZodEnum`<[``"ERC20"``]\>

#### Defined in

[packages/core/src/currencies/validation.ts:5](https://github.com/LedgerHQ/wallet-api/blob/main/packages/core/src/currencies/validation.ts#L5)

___

### schemaTransactionCommon

• `Const` **schemaTransactionCommon**: `ZodObject`<{ `amount`: `ZodString` ; `recipient`: `ZodString`  }, ``"strip"``, `ZodTypeAny`, { `amount`: `string` ; `recipient`: `string`  }, { `amount`: `string` ; `recipient`: `string`  }\>

#### Defined in

[packages/core/src/families/common.ts:3](https://github.com/LedgerHQ/wallet-api/blob/main/packages/core/src/families/common.ts#L3)

___

### schemaTransactionSign

• `Const` **schemaTransactionSign**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `params` | `ZodObject`<{ `accountId`: `ZodString` ; `meta`: `ZodOptional`<`ZodRecord`<`ZodString`, `ZodUnknown`\>\> ; `options`: `ZodOptional`<`ZodObject`<{ `hwAppId`: `ZodOptional`<`ZodString`\>  }, ``"strip"``, `ZodTypeAny`, { `hwAppId?`: `string`  }, { `hwAppId?`: `string`  }\>\> ; `rawTransaction`: `ZodDiscriminatedUnion`<``"family"``, [`ZodObject`<{ `amount`: `ZodString` ; `assetId`: `ZodOptional`<`ZodString`\> ; `family`: `ZodLiteral`<``"algorand"``\> ; `fees`: `ZodOptional`<`ZodString`\> ; `memo`: `ZodOptional`<`ZodString`\> ; `mode`: `ZodEnum`<[``"send"``, ``"optIn"``, ``"claimReward"``, ``"optOut"``]\> = schemaAlgorandOperationMode; `recipient`: `ZodString`  }, ``"strip"``, `ZodTypeAny`, { `amount`: `string` ; `assetId?`: `string` ; `family`: ``"algorand"`` ; `fees?`: `string` ; `memo?`: `string` ; `mode`: ``"send"`` \| ``"optIn"`` \| ``"claimReward"`` \| ``"optOut"`` = schemaAlgorandOperationMode; `recipient`: `string`  }, { `amount`: `string` ; `assetId?`: `string` ; `family`: ``"algorand"`` ; `fees?`: `string` ; `memo?`: `string` ; `mode`: ``"send"`` \| ``"optIn"`` \| ``"claimReward"`` \| ``"optOut"`` = schemaAlgorandOperationMode; `recipient`: `string`  }\>, `ZodObject`<{ `amount`: `ZodString` ; `family`: `ZodLiteral`<``"bitcoin"``\> ; `feePerByte`: `ZodOptional`<`ZodString`\> ; `opReturnDataHex`: `ZodOptional`<`ZodString`\> ; `recipient`: `ZodString`  }, ``"strip"``, `ZodTypeAny`, { `amount`: `string` ; `family`: ``"bitcoin"`` ; `feePerByte?`: `string` ; `opReturnDataHex?`: `string` ; `recipient`: `string`  }, { `amount`: `string` ; `family`: ``"bitcoin"`` ; `feePerByte?`: `string` ; `opReturnDataHex?`: `string` ; `recipient`: `string`  }\>, `ZodObject`<{ `amount`: `ZodString` ; `family`: `ZodLiteral`<``"celo"``\> ; `fees`: `ZodNullable`<`ZodOptional`<`ZodString`\>\> ; `index`: `ZodNullable`<`ZodOptional`<`ZodNumber`\>\> ; `mode`: `ZodEnum`<[``"send"``, ``"lock"``, ``"unlock"``, ``"withdraw"``, ``"vote"``, ``"revoke"``, ``"activate"``, ``"register"``]\> = schemaOperationMode; `recipient`: `ZodString`  }, ``"strip"``, `ZodTypeAny`, { `amount`: `string` ; `family`: ``"celo"`` ; `fees?`: ``null`` \| `string` ; `index?`: ``null`` \| `number` ; `mode`: ``"send"`` \| ``"lock"`` \| ``"unlock"`` \| ``"withdraw"`` \| ``"vote"`` \| ``"revoke"`` \| ``"activate"`` \| ``"register"`` = schemaOperationMode; `recipient`: `string`  }, { `amount`: `string` ; `family`: ``"celo"`` ; `fees?`: ``null`` \| `string` ; `index?`: ``null`` \| `number` ; `mode`: ``"send"`` \| ``"lock"`` \| ``"unlock"`` \| ``"withdraw"`` \| ``"vote"`` \| ``"revoke"`` \| ``"activate"`` \| ``"register"`` = schemaOperationMode; `recipient`: `string`  }\>]\> = schemaRawTransaction }, ``"strip"``, `ZodTypeAny`, { `accountId`: `string` ; `meta?`: `Record`<`string`, `unknown`\> ; `options?`: { hwAppId?: string \| undefined; } ; `rawTransaction`: { `amount`: `string` ; `assetId?`: `string` ; `family`: ``"algorand"`` ; `fees?`: `string` ; `memo?`: `string` ; `mode`: ``"send"`` \| ``"optIn"`` \| ``"claimReward"`` \| ``"optOut"`` = schemaAlgorandOperationMode; `recipient`: `string`  } \| { `amount`: `string` ; `family`: ``"bitcoin"`` ; `feePerByte?`: `string` ; `opReturnDataHex?`: `string` ; `recipient`: `string`  } \| { `amount`: `string` ; `family`: ``"celo"`` ; `fees?`: ``null`` \| `string` ; `index?`: ``null`` \| `number` ; `mode`: ``"send"`` \| ``"lock"`` \| ``"unlock"`` \| ``"withdraw"`` \| ``"vote"`` \| ``"revoke"`` \| ``"activate"`` \| ``"register"`` = schemaOperationMode; `recipient`: `string`  } \| { `amount`: `string` ; `family`: ``"cosmos"`` ; `fees?`: `string` ; `gas?`: `string` ; `memo?`: `string` ; `mode`: ``"send"`` \| ``"claimReward"`` \| ``"delegate"`` \| ``"undelegate"`` \| ``"redelegate"`` \| ``"claimRewardCompound"`` = schemaCosmosOperationMode; `recipient`: `string`  } \| { `amount`: `string` ; `family`: ``"crypto_org"`` ; `fees?`: `string` ; `mode`: `string` ; `recipient`: `string`  } \| { `amount`: `string` ; `data?`: `string` ; `family`: ``"ethereum"`` ; `gasLimit?`: `string` ; `gasPrice?`: `string` ; `maxFeePerGas?`: `string` ; `maxPriorityFeePerGas?`: `string` ; `nonce?`: `number` ; `recipient`: `string`  } \| { `amount`: `string` ; `family`: ``"hedera"`` ; `memo?`: `string` ; `recipient`: `string`  } \| { `amount`: `string` ; `data?`: `string` ; `family`: ``"filecoin"`` ; `gasFeeCap`: `string` ; `gasLimit`: `number` ; `gasPremium`: `string` ; `method`: `number` ; `nonce`: `number` ; `params?`: `string` ; `recipient`: `string` ; `version`: `number`  } \| { `amount`: `string` ; `family`: ``"near"`` ; `fees?`: `string` ; `mode`: `string` ; `recipient`: `string`  } \| { `amount`: `string` ; `family`: ``"neo"`` ; `recipient`: `string`  } \| { `amount`: `string` ; `era?`: `number` ; `family`: ``"polkadot"`` ; `fee?`: `string` ; `mode`: ``"send"`` \| ``"claimReward"`` \| ``"bond"`` \| ``"unbond"`` \| ``"rebond"`` \| ``"withdrawUnbonded"`` \| ``"setController"`` \| ``"nominate"`` \| ``"chill"`` = schemaPolkadotOperationMode; `recipient`: `string`  } \| { `amount`: `string` ; `family`: ``"ripple"`` ; `fee?`: `string` ; `recipient`: `string` ; `tag`: `number`  } \| { `amount`: `string` ; `family`: ``"stellar"`` ; `fees?`: `string` ; `memoType?`: ``"MEMO_TEXT"`` \| ``"MEMO_ID"`` \| ``"MEMO_HASH"`` \| ``"MEMO_RETURN"`` ; `memoValue?`: `string` ; `recipient`: `string`  } \| { `amount`: `string` ; `family`: ``"tezos"`` ; `fees?`: `string` ; `gasLimit?`: `string` ; `mode`: ``"send"`` \| ``"delegate"`` \| ``"undelegate"`` = schemaTezosOperationMode; `recipient`: `string`  } \| { `amount`: `string` ; `duration?`: `number` ; `family`: ``"tron"`` ; `mode`: ``"send"`` \| ``"claimReward"`` \| ``"vote"`` \| ``"freeze"`` \| ``"unfreeze"`` = schemaTronOperationMode; `recipient`: `string` ; `resource?`: ``"BANDWIDTH"`` \| ``"ENERGY"``  } \| { `amount`: `string` ; `data?`: `string` ; `family`: ``"elrond"`` ; `fees?`: `string` ; `gasLimit`: `number` ; `mode`: ``"send"`` \| ``"withdraw"`` \| ``"delegate"`` \| ``"reDelegateRewards"`` \| ``"unDelegate"`` \| ``"claimRewards"`` ; `recipient`: `string`  } \| { `amount`: `string` ; `family`: ``"cardano"`` ; `fees?`: `string` ; `memo?`: `string` ; `mode`: `string` ; `recipient`: `string`  } \| { `amount`: `string` ; `family`: ``"solana"`` ; `model`: `string` ; `recipient`: `string`  } & `undefined` \| { `amount`: `string` ; `assetId?`: `string` ; `family`: ``"algorand"`` ; `fees?`: `string` ; `memo?`: `string` ; `mode`: ``"send"`` \| ``"optIn"`` \| ``"claimReward"`` \| ``"optOut"`` = schemaAlgorandOperationMode; `recipient`: `string`  } \| { `amount`: `string` ; `family`: ``"bitcoin"`` ; `feePerByte?`: `string` ; `opReturnDataHex?`: `string` ; `recipient`: `string`  } \| { `amount`: `string` ; `family`: ``"celo"`` ; `fees?`: ``null`` \| `string` ; `index?`: ``null`` \| `number` ; `mode`: ``"send"`` \| ``"lock"`` \| ``"unlock"`` \| ``"withdraw"`` \| ``"vote"`` \| ``"revoke"`` \| ``"activate"`` \| ``"register"`` = schemaOperationMode; `recipient`: `string`  } \| { `amount`: `string` ; `family`: ``"cosmos"`` ; `fees?`: `string` ; `gas?`: `string` ; `memo?`: `string` ; `mode`: ``"send"`` \| ``"claimReward"`` \| ``"delegate"`` \| ``"undelegate"`` \| ``"redelegate"`` \| ``"claimRewardCompound"`` = schemaCosmosOperationMode; `recipient`: `string`  } \| { `amount`: `string` ; `family`: ``"crypto_org"`` ; `fees?`: `string` ; `mode`: `string` ; `recipient`: `string`  } \| { `amount`: `string` ; `data?`: `string` ; `family`: ``"ethereum"`` ; `gasLimit?`: `string` ; `gasPrice?`: `string` ; `maxFeePerGas?`: `string` ; `maxPriorityFeePerGas?`: `string` ; `nonce?`: `number` ; `recipient`: `string`  } \| { `amount`: `string` ; `family`: ``"hedera"`` ; `memo?`: `string` ; `recipient`: `string`  } \| { `amount`: `string` ; `data?`: `string` ; `family`: ``"filecoin"`` ; `gasFeeCap`: `string` ; `gasLimit`: `number` ; `gasPremium`: `string` ; `method`: `number` ; `nonce`: `number` ; `params?`: `string` ; `recipient`: `string` ; `version`: `number`  } \| { `amount`: `string` ; `family`: ``"near"`` ; `fees?`: `string` ; `mode`: `string` ; `recipient`: `string`  } \| { `amount`: `string` ; `family`: ``"neo"`` ; `recipient`: `string`  } \| { `amount`: `string` ; `era?`: `number` ; `family`: ``"polkadot"`` ; `fee?`: `string` ; `mode`: ``"send"`` \| ``"claimReward"`` \| ``"bond"`` \| ``"unbond"`` \| ``"rebond"`` \| ``"withdrawUnbonded"`` \| ``"setController"`` \| ``"nominate"`` \| ``"chill"`` = schemaPolkadotOperationMode; `recipient`: `string`  } \| { `amount`: `string` ; `family`: ``"ripple"`` ; `fee?`: `string` ; `recipient`: `string` ; `tag`: `number`  } \| { `amount`: `string` ; `family`: ``"stellar"`` ; `fees?`: `string` ; `memoType?`: ``"MEMO_TEXT"`` \| ``"MEMO_ID"`` \| ``"MEMO_HASH"`` \| ``"MEMO_RETURN"`` ; `memoValue?`: `string` ; `recipient`: `string`  } \| { `amount`: `string` ; `family`: ``"tezos"`` ; `fees?`: `string` ; `gasLimit?`: `string` ; `mode`: ``"send"`` \| ``"delegate"`` \| ``"undelegate"`` = schemaTezosOperationMode; `recipient`: `string`  } \| { `amount`: `string` ; `duration?`: `number` ; `family`: ``"tron"`` ; `mode`: ``"send"`` \| ``"claimReward"`` \| ``"vote"`` \| ``"freeze"`` \| ``"unfreeze"`` = schemaTronOperationMode; `recipient`: `string` ; `resource?`: ``"BANDWIDTH"`` \| ``"ENERGY"``  } \| { `amount`: `string` ; `data?`: `string` ; `family`: ``"elrond"`` ; `fees?`: `string` ; `gasLimit`: `number` ; `mode`: ``"send"`` \| ``"withdraw"`` \| ``"delegate"`` \| ``"reDelegateRewards"`` \| ``"unDelegate"`` \| ``"claimRewards"`` ; `recipient`: `string`  } \| { `amount`: `string` ; `family`: ``"cardano"`` ; `fees?`: `string` ; `memo?`: `string` ; `mode`: `string` ; `recipient`: `string`  } \| { `amount`: `string` ; `family`: ``"solana"`` ; `model`: `string` ; `recipient`: `string`  } = schemaRawTransaction }, { `accountId`: `string` ; `meta?`: `Record`<`string`, `unknown`\> ; `options?`: { hwAppId?: string \| undefined; } ; `rawTransaction`: { `amount`: `string` ; `assetId?`: `string` ; `family`: ``"algorand"`` ; `fees?`: `string` ; `memo?`: `string` ; `mode`: ``"send"`` \| ``"optIn"`` \| ``"claimReward"`` \| ``"optOut"`` = schemaAlgorandOperationMode; `recipient`: `string`  } \| { `amount`: `string` ; `family`: ``"bitcoin"`` ; `feePerByte?`: `string` ; `opReturnDataHex?`: `string` ; `recipient`: `string`  } \| { `amount`: `string` ; `family`: ``"celo"`` ; `fees?`: ``null`` \| `string` ; `index?`: ``null`` \| `number` ; `mode`: ``"send"`` \| ``"lock"`` \| ``"unlock"`` \| ``"withdraw"`` \| ``"vote"`` \| ``"revoke"`` \| ``"activate"`` \| ``"register"`` = schemaOperationMode; `recipient`: `string`  } \| { `amount`: `string` ; `family`: ``"cosmos"`` ; `fees?`: `string` ; `gas?`: `string` ; `memo?`: `string` ; `mode`: ``"send"`` \| ``"claimReward"`` \| ``"delegate"`` \| ``"undelegate"`` \| ``"redelegate"`` \| ``"claimRewardCompound"`` = schemaCosmosOperationMode; `recipient`: `string`  } \| { `amount`: `string` ; `family`: ``"crypto_org"`` ; `fees?`: `string` ; `mode`: `string` ; `recipient`: `string`  } \| { `amount`: `string` ; `data?`: `string` ; `family`: ``"ethereum"`` ; `gasLimit?`: `string` ; `gasPrice?`: `string` ; `maxFeePerGas?`: `string` ; `maxPriorityFeePerGas?`: `string` ; `nonce?`: `number` ; `recipient`: `string`  } \| { `amount`: `string` ; `family`: ``"hedera"`` ; `memo?`: `string` ; `recipient`: `string`  } \| { `amount`: `string` ; `data?`: `string` ; `family`: ``"filecoin"`` ; `gasFeeCap`: `string` ; `gasLimit`: `number` ; `gasPremium`: `string` ; `method`: `number` ; `nonce`: `number` ; `params?`: `string` ; `recipient`: `string` ; `version`: `number`  } \| { `amount`: `string` ; `family`: ``"near"`` ; `fees?`: `string` ; `mode`: `string` ; `recipient`: `string`  } \| { `amount`: `string` ; `family`: ``"neo"`` ; `recipient`: `string`  } \| { `amount`: `string` ; `era?`: `number` ; `family`: ``"polkadot"`` ; `fee?`: `string` ; `mode`: ``"send"`` \| ``"claimReward"`` \| ``"bond"`` \| ``"unbond"`` \| ``"rebond"`` \| ``"withdrawUnbonded"`` \| ``"setController"`` \| ``"nominate"`` \| ``"chill"`` = schemaPolkadotOperationMode; `recipient`: `string`  } \| { `amount`: `string` ; `family`: ``"ripple"`` ; `fee?`: `string` ; `recipient`: `string` ; `tag`: `number`  } \| { `amount`: `string` ; `family`: ``"stellar"`` ; `fees?`: `string` ; `memoType?`: ``"MEMO_TEXT"`` \| ``"MEMO_ID"`` \| ``"MEMO_HASH"`` \| ``"MEMO_RETURN"`` ; `memoValue?`: `string` ; `recipient`: `string`  } \| { `amount`: `string` ; `family`: ``"tezos"`` ; `fees?`: `string` ; `gasLimit?`: `string` ; `mode`: ``"send"`` \| ``"delegate"`` \| ``"undelegate"`` = schemaTezosOperationMode; `recipient`: `string`  } \| { `amount`: `string` ; `duration?`: `number` ; `family`: ``"tron"`` ; `mode`: ``"send"`` \| ``"claimReward"`` \| ``"vote"`` \| ``"freeze"`` \| ``"unfreeze"`` = schemaTronOperationMode; `recipient`: `string` ; `resource?`: ``"BANDWIDTH"`` \| ``"ENERGY"``  } \| { `amount`: `string` ; `data?`: `string` ; `family`: ``"elrond"`` ; `fees?`: `string` ; `gasLimit`: `number` ; `mode`: ``"send"`` \| ``"withdraw"`` \| ``"delegate"`` \| ``"reDelegateRewards"`` \| ``"unDelegate"`` \| ``"claimRewards"`` ; `recipient`: `string`  } \| { `amount`: `string` ; `family`: ``"cardano"`` ; `fees?`: `string` ; `memo?`: `string` ; `mode`: `string` ; `recipient`: `string`  } \| { `amount`: `string` ; `family`: ``"solana"`` ; `model`: `string` ; `recipient`: `string`  } & `undefined` \| { `amount`: `string` ; `assetId?`: `string` ; `family`: ``"algorand"`` ; `fees?`: `string` ; `memo?`: `string` ; `mode`: ``"send"`` \| ``"optIn"`` \| ``"claimReward"`` \| ``"optOut"`` = schemaAlgorandOperationMode; `recipient`: `string`  } \| { `amount`: `string` ; `family`: ``"bitcoin"`` ; `feePerByte?`: `string` ; `opReturnDataHex?`: `string` ; `recipient`: `string`  } \| { `amount`: `string` ; `family`: ``"celo"`` ; `fees?`: ``null`` \| `string` ; `index?`: ``null`` \| `number` ; `mode`: ``"send"`` \| ``"lock"`` \| ``"unlock"`` \| ``"withdraw"`` \| ``"vote"`` \| ``"revoke"`` \| ``"activate"`` \| ``"register"`` = schemaOperationMode; `recipient`: `string`  } \| { `amount`: `string` ; `family`: ``"cosmos"`` ; `fees?`: `string` ; `gas?`: `string` ; `memo?`: `string` ; `mode`: ``"send"`` \| ``"claimReward"`` \| ``"delegate"`` \| ``"undelegate"`` \| ``"redelegate"`` \| ``"claimRewardCompound"`` = schemaCosmosOperationMode; `recipient`: `string`  } \| { `amount`: `string` ; `family`: ``"crypto_org"`` ; `fees?`: `string` ; `mode`: `string` ; `recipient`: `string`  } \| { `amount`: `string` ; `data?`: `string` ; `family`: ``"ethereum"`` ; `gasLimit?`: `string` ; `gasPrice?`: `string` ; `maxFeePerGas?`: `string` ; `maxPriorityFeePerGas?`: `string` ; `nonce?`: `number` ; `recipient`: `string`  } \| { `amount`: `string` ; `family`: ``"hedera"`` ; `memo?`: `string` ; `recipient`: `string`  } \| { `amount`: `string` ; `data?`: `string` ; `family`: ``"filecoin"`` ; `gasFeeCap`: `string` ; `gasLimit`: `number` ; `gasPremium`: `string` ; `method`: `number` ; `nonce`: `number` ; `params?`: `string` ; `recipient`: `string` ; `version`: `number`  } \| { `amount`: `string` ; `family`: ``"near"`` ; `fees?`: `string` ; `mode`: `string` ; `recipient`: `string`  } \| { `amount`: `string` ; `family`: ``"neo"`` ; `recipient`: `string`  } \| { `amount`: `string` ; `era?`: `number` ; `family`: ``"polkadot"`` ; `fee?`: `string` ; `mode`: ``"send"`` \| ``"claimReward"`` \| ``"bond"`` \| ``"unbond"`` \| ``"rebond"`` \| ``"withdrawUnbonded"`` \| ``"setController"`` \| ``"nominate"`` \| ``"chill"`` = schemaPolkadotOperationMode; `recipient`: `string`  } \| { `amount`: `string` ; `family`: ``"ripple"`` ; `fee?`: `string` ; `recipient`: `string` ; `tag`: `number`  } \| { `amount`: `string` ; `family`: ``"stellar"`` ; `fees?`: `string` ; `memoType?`: ``"MEMO_TEXT"`` \| ``"MEMO_ID"`` \| ``"MEMO_HASH"`` \| ``"MEMO_RETURN"`` ; `memoValue?`: `string` ; `recipient`: `string`  } \| { `amount`: `string` ; `family`: ``"tezos"`` ; `fees?`: `string` ; `gasLimit?`: `string` ; `mode`: ``"send"`` \| ``"delegate"`` \| ``"undelegate"`` = schemaTezosOperationMode; `recipient`: `string`  } \| { `amount`: `string` ; `duration?`: `number` ; `family`: ``"tron"`` ; `mode`: ``"send"`` \| ``"claimReward"`` \| ``"vote"`` \| ``"freeze"`` \| ``"unfreeze"`` = schemaTronOperationMode; `recipient`: `string` ; `resource?`: ``"BANDWIDTH"`` \| ``"ENERGY"``  } \| { `amount`: `string` ; `data?`: `string` ; `family`: ``"elrond"`` ; `fees?`: `string` ; `gasLimit`: `number` ; `mode`: ``"send"`` \| ``"withdraw"`` \| ``"delegate"`` \| ``"reDelegateRewards"`` \| ``"unDelegate"`` \| ``"claimRewards"`` ; `recipient`: `string`  } \| { `amount`: `string` ; `family`: ``"cardano"`` ; `fees?`: `string` ; `memo?`: `string` ; `mode`: `string` ; `recipient`: `string`  } \| { `amount`: `string` ; `family`: ``"solana"`` ; `model`: `string` ; `recipient`: `string`  } = schemaRawTransaction }\> |
| `result` | `ZodObject`<{ `signedTransactionHex`: `ZodString`  }, ``"strip"``, `ZodTypeAny`, { `signedTransactionHex`: `string`  }, { `signedTransactionHex`: `string`  }\> |

#### Defined in

[packages/core/src/spec/types/TransactionSign.ts:19](https://github.com/LedgerHQ/wallet-api/blob/main/packages/core/src/spec/types/TransactionSign.ts#L19)

___

### schemaTransactionSignAndBroadcast

• `Const` **schemaTransactionSignAndBroadcast**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `params` | `ZodObject`<{ `accountId`: `ZodString` ; `meta`: `ZodOptional`<`ZodRecord`<`ZodString`, `ZodUnknown`\>\> ; `options`: `ZodOptional`<`ZodObject`<{ `hwAppId`: `ZodOptional`<`ZodString`\>  }, ``"strip"``, `ZodTypeAny`, { `hwAppId?`: `string`  }, { `hwAppId?`: `string`  }\>\> ; `rawTransaction`: `ZodDiscriminatedUnion`<``"family"``, [`ZodObject`<{ `amount`: `ZodString` ; `assetId`: `ZodOptional`<`ZodString`\> ; `family`: `ZodLiteral`<``"algorand"``\> ; `fees`: `ZodOptional`<`ZodString`\> ; `memo`: `ZodOptional`<`ZodString`\> ; `mode`: `ZodEnum`<[``"send"``, ``"optIn"``, ``"claimReward"``, ``"optOut"``]\> = schemaAlgorandOperationMode; `recipient`: `ZodString`  }, ``"strip"``, `ZodTypeAny`, { `amount`: `string` ; `assetId?`: `string` ; `family`: ``"algorand"`` ; `fees?`: `string` ; `memo?`: `string` ; `mode`: ``"send"`` \| ``"optIn"`` \| ``"claimReward"`` \| ``"optOut"`` = schemaAlgorandOperationMode; `recipient`: `string`  }, { `amount`: `string` ; `assetId?`: `string` ; `family`: ``"algorand"`` ; `fees?`: `string` ; `memo?`: `string` ; `mode`: ``"send"`` \| ``"optIn"`` \| ``"claimReward"`` \| ``"optOut"`` = schemaAlgorandOperationMode; `recipient`: `string`  }\>, `ZodObject`<{ `amount`: `ZodString` ; `family`: `ZodLiteral`<``"bitcoin"``\> ; `feePerByte`: `ZodOptional`<`ZodString`\> ; `opReturnDataHex`: `ZodOptional`<`ZodString`\> ; `recipient`: `ZodString`  }, ``"strip"``, `ZodTypeAny`, { `amount`: `string` ; `family`: ``"bitcoin"`` ; `feePerByte?`: `string` ; `opReturnDataHex?`: `string` ; `recipient`: `string`  }, { `amount`: `string` ; `family`: ``"bitcoin"`` ; `feePerByte?`: `string` ; `opReturnDataHex?`: `string` ; `recipient`: `string`  }\>, `ZodObject`<{ `amount`: `ZodString` ; `family`: `ZodLiteral`<``"celo"``\> ; `fees`: `ZodNullable`<`ZodOptional`<`ZodString`\>\> ; `index`: `ZodNullable`<`ZodOptional`<`ZodNumber`\>\> ; `mode`: `ZodEnum`<[``"send"``, ``"lock"``, ``"unlock"``, ``"withdraw"``, ``"vote"``, ``"revoke"``, ``"activate"``, ``"register"``]\> = schemaOperationMode; `recipient`: `ZodString`  }, ``"strip"``, `ZodTypeAny`, { `amount`: `string` ; `family`: ``"celo"`` ; `fees?`: ``null`` \| `string` ; `index?`: ``null`` \| `number` ; `mode`: ``"send"`` \| ``"lock"`` \| ``"unlock"`` \| ``"withdraw"`` \| ``"vote"`` \| ``"revoke"`` \| ``"activate"`` \| ``"register"`` = schemaOperationMode; `recipient`: `string`  }, { `amount`: `string` ; `family`: ``"celo"`` ; `fees?`: ``null`` \| `string` ; `index?`: ``null`` \| `number` ; `mode`: ``"send"`` \| ``"lock"`` \| ``"unlock"`` \| ``"withdraw"`` \| ``"vote"`` \| ``"revoke"`` \| ``"activate"`` \| ``"register"`` = schemaOperationMode; `recipient`: `string`  }\>]\> = schemaRawTransaction }, ``"strip"``, `ZodTypeAny`, { `accountId`: `string` ; `meta?`: `Record`<`string`, `unknown`\> ; `options?`: { hwAppId?: string \| undefined; } ; `rawTransaction`: { `amount`: `string` ; `assetId?`: `string` ; `family`: ``"algorand"`` ; `fees?`: `string` ; `memo?`: `string` ; `mode`: ``"send"`` \| ``"optIn"`` \| ``"claimReward"`` \| ``"optOut"`` = schemaAlgorandOperationMode; `recipient`: `string`  } \| { `amount`: `string` ; `family`: ``"bitcoin"`` ; `feePerByte?`: `string` ; `opReturnDataHex?`: `string` ; `recipient`: `string`  } \| { `amount`: `string` ; `family`: ``"celo"`` ; `fees?`: ``null`` \| `string` ; `index?`: ``null`` \| `number` ; `mode`: ``"send"`` \| ``"lock"`` \| ``"unlock"`` \| ``"withdraw"`` \| ``"vote"`` \| ``"revoke"`` \| ``"activate"`` \| ``"register"`` = schemaOperationMode; `recipient`: `string`  } \| { `amount`: `string` ; `family`: ``"cosmos"`` ; `fees?`: `string` ; `gas?`: `string` ; `memo?`: `string` ; `mode`: ``"send"`` \| ``"claimReward"`` \| ``"delegate"`` \| ``"undelegate"`` \| ``"redelegate"`` \| ``"claimRewardCompound"`` = schemaCosmosOperationMode; `recipient`: `string`  } \| { `amount`: `string` ; `family`: ``"crypto_org"`` ; `fees?`: `string` ; `mode`: `string` ; `recipient`: `string`  } \| { `amount`: `string` ; `data?`: `string` ; `family`: ``"ethereum"`` ; `gasLimit?`: `string` ; `gasPrice?`: `string` ; `maxFeePerGas?`: `string` ; `maxPriorityFeePerGas?`: `string` ; `nonce?`: `number` ; `recipient`: `string`  } \| { `amount`: `string` ; `family`: ``"hedera"`` ; `memo?`: `string` ; `recipient`: `string`  } \| { `amount`: `string` ; `data?`: `string` ; `family`: ``"filecoin"`` ; `gasFeeCap`: `string` ; `gasLimit`: `number` ; `gasPremium`: `string` ; `method`: `number` ; `nonce`: `number` ; `params?`: `string` ; `recipient`: `string` ; `version`: `number`  } \| { `amount`: `string` ; `family`: ``"near"`` ; `fees?`: `string` ; `mode`: `string` ; `recipient`: `string`  } \| { `amount`: `string` ; `family`: ``"neo"`` ; `recipient`: `string`  } \| { `amount`: `string` ; `era?`: `number` ; `family`: ``"polkadot"`` ; `fee?`: `string` ; `mode`: ``"send"`` \| ``"claimReward"`` \| ``"bond"`` \| ``"unbond"`` \| ``"rebond"`` \| ``"withdrawUnbonded"`` \| ``"setController"`` \| ``"nominate"`` \| ``"chill"`` = schemaPolkadotOperationMode; `recipient`: `string`  } \| { `amount`: `string` ; `family`: ``"ripple"`` ; `fee?`: `string` ; `recipient`: `string` ; `tag`: `number`  } \| { `amount`: `string` ; `family`: ``"stellar"`` ; `fees?`: `string` ; `memoType?`: ``"MEMO_TEXT"`` \| ``"MEMO_ID"`` \| ``"MEMO_HASH"`` \| ``"MEMO_RETURN"`` ; `memoValue?`: `string` ; `recipient`: `string`  } \| { `amount`: `string` ; `family`: ``"tezos"`` ; `fees?`: `string` ; `gasLimit?`: `string` ; `mode`: ``"send"`` \| ``"delegate"`` \| ``"undelegate"`` = schemaTezosOperationMode; `recipient`: `string`  } \| { `amount`: `string` ; `duration?`: `number` ; `family`: ``"tron"`` ; `mode`: ``"send"`` \| ``"claimReward"`` \| ``"vote"`` \| ``"freeze"`` \| ``"unfreeze"`` = schemaTronOperationMode; `recipient`: `string` ; `resource?`: ``"BANDWIDTH"`` \| ``"ENERGY"``  } \| { `amount`: `string` ; `data?`: `string` ; `family`: ``"elrond"`` ; `fees?`: `string` ; `gasLimit`: `number` ; `mode`: ``"send"`` \| ``"withdraw"`` \| ``"delegate"`` \| ``"reDelegateRewards"`` \| ``"unDelegate"`` \| ``"claimRewards"`` ; `recipient`: `string`  } \| { `amount`: `string` ; `family`: ``"cardano"`` ; `fees?`: `string` ; `memo?`: `string` ; `mode`: `string` ; `recipient`: `string`  } \| { `amount`: `string` ; `family`: ``"solana"`` ; `model`: `string` ; `recipient`: `string`  } & `undefined` \| { `amount`: `string` ; `assetId?`: `string` ; `family`: ``"algorand"`` ; `fees?`: `string` ; `memo?`: `string` ; `mode`: ``"send"`` \| ``"optIn"`` \| ``"claimReward"`` \| ``"optOut"`` = schemaAlgorandOperationMode; `recipient`: `string`  } \| { `amount`: `string` ; `family`: ``"bitcoin"`` ; `feePerByte?`: `string` ; `opReturnDataHex?`: `string` ; `recipient`: `string`  } \| { `amount`: `string` ; `family`: ``"celo"`` ; `fees?`: ``null`` \| `string` ; `index?`: ``null`` \| `number` ; `mode`: ``"send"`` \| ``"lock"`` \| ``"unlock"`` \| ``"withdraw"`` \| ``"vote"`` \| ``"revoke"`` \| ``"activate"`` \| ``"register"`` = schemaOperationMode; `recipient`: `string`  } \| { `amount`: `string` ; `family`: ``"cosmos"`` ; `fees?`: `string` ; `gas?`: `string` ; `memo?`: `string` ; `mode`: ``"send"`` \| ``"claimReward"`` \| ``"delegate"`` \| ``"undelegate"`` \| ``"redelegate"`` \| ``"claimRewardCompound"`` = schemaCosmosOperationMode; `recipient`: `string`  } \| { `amount`: `string` ; `family`: ``"crypto_org"`` ; `fees?`: `string` ; `mode`: `string` ; `recipient`: `string`  } \| { `amount`: `string` ; `data?`: `string` ; `family`: ``"ethereum"`` ; `gasLimit?`: `string` ; `gasPrice?`: `string` ; `maxFeePerGas?`: `string` ; `maxPriorityFeePerGas?`: `string` ; `nonce?`: `number` ; `recipient`: `string`  } \| { `amount`: `string` ; `family`: ``"hedera"`` ; `memo?`: `string` ; `recipient`: `string`  } \| { `amount`: `string` ; `data?`: `string` ; `family`: ``"filecoin"`` ; `gasFeeCap`: `string` ; `gasLimit`: `number` ; `gasPremium`: `string` ; `method`: `number` ; `nonce`: `number` ; `params?`: `string` ; `recipient`: `string` ; `version`: `number`  } \| { `amount`: `string` ; `family`: ``"near"`` ; `fees?`: `string` ; `mode`: `string` ; `recipient`: `string`  } \| { `amount`: `string` ; `family`: ``"neo"`` ; `recipient`: `string`  } \| { `amount`: `string` ; `era?`: `number` ; `family`: ``"polkadot"`` ; `fee?`: `string` ; `mode`: ``"send"`` \| ``"claimReward"`` \| ``"bond"`` \| ``"unbond"`` \| ``"rebond"`` \| ``"withdrawUnbonded"`` \| ``"setController"`` \| ``"nominate"`` \| ``"chill"`` = schemaPolkadotOperationMode; `recipient`: `string`  } \| { `amount`: `string` ; `family`: ``"ripple"`` ; `fee?`: `string` ; `recipient`: `string` ; `tag`: `number`  } \| { `amount`: `string` ; `family`: ``"stellar"`` ; `fees?`: `string` ; `memoType?`: ``"MEMO_TEXT"`` \| ``"MEMO_ID"`` \| ``"MEMO_HASH"`` \| ``"MEMO_RETURN"`` ; `memoValue?`: `string` ; `recipient`: `string`  } \| { `amount`: `string` ; `family`: ``"tezos"`` ; `fees?`: `string` ; `gasLimit?`: `string` ; `mode`: ``"send"`` \| ``"delegate"`` \| ``"undelegate"`` = schemaTezosOperationMode; `recipient`: `string`  } \| { `amount`: `string` ; `duration?`: `number` ; `family`: ``"tron"`` ; `mode`: ``"send"`` \| ``"claimReward"`` \| ``"vote"`` \| ``"freeze"`` \| ``"unfreeze"`` = schemaTronOperationMode; `recipient`: `string` ; `resource?`: ``"BANDWIDTH"`` \| ``"ENERGY"``  } \| { `amount`: `string` ; `data?`: `string` ; `family`: ``"elrond"`` ; `fees?`: `string` ; `gasLimit`: `number` ; `mode`: ``"send"`` \| ``"withdraw"`` \| ``"delegate"`` \| ``"reDelegateRewards"`` \| ``"unDelegate"`` \| ``"claimRewards"`` ; `recipient`: `string`  } \| { `amount`: `string` ; `family`: ``"cardano"`` ; `fees?`: `string` ; `memo?`: `string` ; `mode`: `string` ; `recipient`: `string`  } \| { `amount`: `string` ; `family`: ``"solana"`` ; `model`: `string` ; `recipient`: `string`  } = schemaRawTransaction }, { `accountId`: `string` ; `meta?`: `Record`<`string`, `unknown`\> ; `options?`: { hwAppId?: string \| undefined; } ; `rawTransaction`: { `amount`: `string` ; `assetId?`: `string` ; `family`: ``"algorand"`` ; `fees?`: `string` ; `memo?`: `string` ; `mode`: ``"send"`` \| ``"optIn"`` \| ``"claimReward"`` \| ``"optOut"`` = schemaAlgorandOperationMode; `recipient`: `string`  } \| { `amount`: `string` ; `family`: ``"bitcoin"`` ; `feePerByte?`: `string` ; `opReturnDataHex?`: `string` ; `recipient`: `string`  } \| { `amount`: `string` ; `family`: ``"celo"`` ; `fees?`: ``null`` \| `string` ; `index?`: ``null`` \| `number` ; `mode`: ``"send"`` \| ``"lock"`` \| ``"unlock"`` \| ``"withdraw"`` \| ``"vote"`` \| ``"revoke"`` \| ``"activate"`` \| ``"register"`` = schemaOperationMode; `recipient`: `string`  } \| { `amount`: `string` ; `family`: ``"cosmos"`` ; `fees?`: `string` ; `gas?`: `string` ; `memo?`: `string` ; `mode`: ``"send"`` \| ``"claimReward"`` \| ``"delegate"`` \| ``"undelegate"`` \| ``"redelegate"`` \| ``"claimRewardCompound"`` = schemaCosmosOperationMode; `recipient`: `string`  } \| { `amount`: `string` ; `family`: ``"crypto_org"`` ; `fees?`: `string` ; `mode`: `string` ; `recipient`: `string`  } \| { `amount`: `string` ; `data?`: `string` ; `family`: ``"ethereum"`` ; `gasLimit?`: `string` ; `gasPrice?`: `string` ; `maxFeePerGas?`: `string` ; `maxPriorityFeePerGas?`: `string` ; `nonce?`: `number` ; `recipient`: `string`  } \| { `amount`: `string` ; `family`: ``"hedera"`` ; `memo?`: `string` ; `recipient`: `string`  } \| { `amount`: `string` ; `data?`: `string` ; `family`: ``"filecoin"`` ; `gasFeeCap`: `string` ; `gasLimit`: `number` ; `gasPremium`: `string` ; `method`: `number` ; `nonce`: `number` ; `params?`: `string` ; `recipient`: `string` ; `version`: `number`  } \| { `amount`: `string` ; `family`: ``"near"`` ; `fees?`: `string` ; `mode`: `string` ; `recipient`: `string`  } \| { `amount`: `string` ; `family`: ``"neo"`` ; `recipient`: `string`  } \| { `amount`: `string` ; `era?`: `number` ; `family`: ``"polkadot"`` ; `fee?`: `string` ; `mode`: ``"send"`` \| ``"claimReward"`` \| ``"bond"`` \| ``"unbond"`` \| ``"rebond"`` \| ``"withdrawUnbonded"`` \| ``"setController"`` \| ``"nominate"`` \| ``"chill"`` = schemaPolkadotOperationMode; `recipient`: `string`  } \| { `amount`: `string` ; `family`: ``"ripple"`` ; `fee?`: `string` ; `recipient`: `string` ; `tag`: `number`  } \| { `amount`: `string` ; `family`: ``"stellar"`` ; `fees?`: `string` ; `memoType?`: ``"MEMO_TEXT"`` \| ``"MEMO_ID"`` \| ``"MEMO_HASH"`` \| ``"MEMO_RETURN"`` ; `memoValue?`: `string` ; `recipient`: `string`  } \| { `amount`: `string` ; `family`: ``"tezos"`` ; `fees?`: `string` ; `gasLimit?`: `string` ; `mode`: ``"send"`` \| ``"delegate"`` \| ``"undelegate"`` = schemaTezosOperationMode; `recipient`: `string`  } \| { `amount`: `string` ; `duration?`: `number` ; `family`: ``"tron"`` ; `mode`: ``"send"`` \| ``"claimReward"`` \| ``"vote"`` \| ``"freeze"`` \| ``"unfreeze"`` = schemaTronOperationMode; `recipient`: `string` ; `resource?`: ``"BANDWIDTH"`` \| ``"ENERGY"``  } \| { `amount`: `string` ; `data?`: `string` ; `family`: ``"elrond"`` ; `fees?`: `string` ; `gasLimit`: `number` ; `mode`: ``"send"`` \| ``"withdraw"`` \| ``"delegate"`` \| ``"reDelegateRewards"`` \| ``"unDelegate"`` \| ``"claimRewards"`` ; `recipient`: `string`  } \| { `amount`: `string` ; `family`: ``"cardano"`` ; `fees?`: `string` ; `memo?`: `string` ; `mode`: `string` ; `recipient`: `string`  } \| { `amount`: `string` ; `family`: ``"solana"`` ; `model`: `string` ; `recipient`: `string`  } & `undefined` \| { `amount`: `string` ; `assetId?`: `string` ; `family`: ``"algorand"`` ; `fees?`: `string` ; `memo?`: `string` ; `mode`: ``"send"`` \| ``"optIn"`` \| ``"claimReward"`` \| ``"optOut"`` = schemaAlgorandOperationMode; `recipient`: `string`  } \| { `amount`: `string` ; `family`: ``"bitcoin"`` ; `feePerByte?`: `string` ; `opReturnDataHex?`: `string` ; `recipient`: `string`  } \| { `amount`: `string` ; `family`: ``"celo"`` ; `fees?`: ``null`` \| `string` ; `index?`: ``null`` \| `number` ; `mode`: ``"send"`` \| ``"lock"`` \| ``"unlock"`` \| ``"withdraw"`` \| ``"vote"`` \| ``"revoke"`` \| ``"activate"`` \| ``"register"`` = schemaOperationMode; `recipient`: `string`  } \| { `amount`: `string` ; `family`: ``"cosmos"`` ; `fees?`: `string` ; `gas?`: `string` ; `memo?`: `string` ; `mode`: ``"send"`` \| ``"claimReward"`` \| ``"delegate"`` \| ``"undelegate"`` \| ``"redelegate"`` \| ``"claimRewardCompound"`` = schemaCosmosOperationMode; `recipient`: `string`  } \| { `amount`: `string` ; `family`: ``"crypto_org"`` ; `fees?`: `string` ; `mode`: `string` ; `recipient`: `string`  } \| { `amount`: `string` ; `data?`: `string` ; `family`: ``"ethereum"`` ; `gasLimit?`: `string` ; `gasPrice?`: `string` ; `maxFeePerGas?`: `string` ; `maxPriorityFeePerGas?`: `string` ; `nonce?`: `number` ; `recipient`: `string`  } \| { `amount`: `string` ; `family`: ``"hedera"`` ; `memo?`: `string` ; `recipient`: `string`  } \| { `amount`: `string` ; `data?`: `string` ; `family`: ``"filecoin"`` ; `gasFeeCap`: `string` ; `gasLimit`: `number` ; `gasPremium`: `string` ; `method`: `number` ; `nonce`: `number` ; `params?`: `string` ; `recipient`: `string` ; `version`: `number`  } \| { `amount`: `string` ; `family`: ``"near"`` ; `fees?`: `string` ; `mode`: `string` ; `recipient`: `string`  } \| { `amount`: `string` ; `family`: ``"neo"`` ; `recipient`: `string`  } \| { `amount`: `string` ; `era?`: `number` ; `family`: ``"polkadot"`` ; `fee?`: `string` ; `mode`: ``"send"`` \| ``"claimReward"`` \| ``"bond"`` \| ``"unbond"`` \| ``"rebond"`` \| ``"withdrawUnbonded"`` \| ``"setController"`` \| ``"nominate"`` \| ``"chill"`` = schemaPolkadotOperationMode; `recipient`: `string`  } \| { `amount`: `string` ; `family`: ``"ripple"`` ; `fee?`: `string` ; `recipient`: `string` ; `tag`: `number`  } \| { `amount`: `string` ; `family`: ``"stellar"`` ; `fees?`: `string` ; `memoType?`: ``"MEMO_TEXT"`` \| ``"MEMO_ID"`` \| ``"MEMO_HASH"`` \| ``"MEMO_RETURN"`` ; `memoValue?`: `string` ; `recipient`: `string`  } \| { `amount`: `string` ; `family`: ``"tezos"`` ; `fees?`: `string` ; `gasLimit?`: `string` ; `mode`: ``"send"`` \| ``"delegate"`` \| ``"undelegate"`` = schemaTezosOperationMode; `recipient`: `string`  } \| { `amount`: `string` ; `duration?`: `number` ; `family`: ``"tron"`` ; `mode`: ``"send"`` \| ``"claimReward"`` \| ``"vote"`` \| ``"freeze"`` \| ``"unfreeze"`` = schemaTronOperationMode; `recipient`: `string` ; `resource?`: ``"BANDWIDTH"`` \| ``"ENERGY"``  } \| { `amount`: `string` ; `data?`: `string` ; `family`: ``"elrond"`` ; `fees?`: `string` ; `gasLimit`: `number` ; `mode`: ``"send"`` \| ``"withdraw"`` \| ``"delegate"`` \| ``"reDelegateRewards"`` \| ``"unDelegate"`` \| ``"claimRewards"`` ; `recipient`: `string`  } \| { `amount`: `string` ; `family`: ``"cardano"`` ; `fees?`: `string` ; `memo?`: `string` ; `mode`: `string` ; `recipient`: `string`  } \| { `amount`: `string` ; `family`: ``"solana"`` ; `model`: `string` ; `recipient`: `string`  } = schemaRawTransaction }\> |
| `result` | `ZodObject`<{ `transactionHash`: `ZodString`  }, ``"strip"``, `ZodTypeAny`, { `transactionHash`: `string`  }, { `transactionHash`: `string`  }\> |

#### Defined in

[packages/core/src/spec/types/TransactionSignAndBroadcast.ts:19](https://github.com/LedgerHQ/wallet-api/blob/main/packages/core/src/spec/types/TransactionSignAndBroadcast.ts#L19)

___

### schemaUnauthorizedStore

• `Const` **schemaUnauthorizedStore**: `ZodObject`<{ `code`: `ZodLiteral`<``"UNAUTHORIZED_STORE"``\> ; `data`: `ZodObject`<{ `storeId`: `ZodString`  }, ``"strip"``, `ZodTypeAny`, { `storeId`: `string`  }, { `storeId`: `string`  }\> ; `message`: `ZodString`  }, ``"strip"``, `ZodTypeAny`, { `code`: ``"UNAUTHORIZED_STORE"`` ; `data`: { storeId: string; } ; `message`: `string`  }, { `code`: ``"UNAUTHORIZED_STORE"`` ; `data`: { storeId: string; } ; `message`: `string`  }\>

#### Defined in

[packages/core/src/errors/types.ts:99](https://github.com/LedgerHQ/wallet-api/blob/main/packages/core/src/errors/types.ts#L99)

___

### schemaUnknownError

• `Const` **schemaUnknownError**: `ZodObject`<{ `code`: `ZodLiteral`<``"UNKNOWN_ERROR"``\> ; `data`: `ZodObject`<{ `cause`: `ZodOptional`<`ZodUnknown`\> ; `code`: `ZodOptional`<`ZodString`\> ; `message`: `ZodOptional`<`ZodString`\> ; `name`: `ZodOptional`<`ZodString`\> ; `stack`: `ZodOptional`<`ZodString`\>  }, ``"strip"``, `ZodTypeAny`, { `cause?`: `unknown` ; `code?`: `string` ; `message?`: `string` ; `name?`: `string` ; `stack?`: `string`  }, { `cause?`: `unknown` ; `code?`: `string` ; `message?`: `string` ; `name?`: `string` ; `stack?`: `string`  }\> ; `message`: `ZodString`  }, ``"strip"``, `ZodTypeAny`, { `code`: ``"UNKNOWN_ERROR"`` ; `data`: { name?: string \| undefined; message?: string \| undefined; stack?: string \| undefined; cause?: unknown; code?: string \| undefined; } ; `message`: `string`  }, { `code`: ``"UNKNOWN_ERROR"`` ; `data`: { name?: string \| undefined; message?: string \| undefined; stack?: string \| undefined; cause?: unknown; code?: string \| undefined; } ; `message`: `string`  }\>

#### Defined in

[packages/core/src/errors/types.ts:81](https://github.com/LedgerHQ/wallet-api/blob/main/packages/core/src/errors/types.ts#L81)

___

### schemaWalletCapabilities

• `Const` **schemaWalletCapabilities**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `params` | `ZodObject`<{}, ``"strip"``, `ZodTypeAny`, {}, {}\> |
| `result` | `ZodObject`<{ `methodIds`: `ZodArray`<`ZodString`, ``"many"``\>  }, ``"strip"``, `ZodTypeAny`, { `methodIds`: `string`[]  }, { `methodIds`: `string`[]  }\> |

#### Defined in

[packages/core/src/spec/types/WalletCapabilities.ts:9](https://github.com/LedgerHQ/wallet-api/blob/main/packages/core/src/spec/types/WalletCapabilities.ts#L9)

___

### schemaWalletInfo

• `Const` **schemaWalletInfo**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `params` | `ZodObject`<{}, ``"strip"``, `ZodTypeAny`, {}, {}\> |
| `result` | `ZodObject`<{ `tracking`: `ZodBoolean` ; `wallet`: `ZodObject`<{ `name`: `ZodString` ; `version`: `ZodString`  }, ``"strip"``, `ZodTypeAny`, { `name`: `string` ; `version`: `string`  }, { `name`: `string` ; `version`: `string`  }\>  }, ``"strip"``, `ZodTypeAny`, { `tracking`: `boolean` ; `wallet`: { name: string; version: string; }  }, { `tracking`: `boolean` ; `wallet`: { name: string; version: string; }  }\> |

#### Defined in

[packages/core/src/spec/types/WalletInfo.ts:13](https://github.com/LedgerHQ/wallet-api/blob/main/packages/core/src/spec/types/WalletInfo.ts#L13)

___

### schemaWalletUserId

• `Const` **schemaWalletUserId**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `params` | `ZodObject`<{}, ``"strip"``, `ZodTypeAny`, {}, {}\> |
| `result` | `ZodObject`<{ `userId`: `ZodString`  }, ``"strip"``, `ZodTypeAny`, { `userId`: `string`  }, { `userId`: `string`  }\> |

#### Defined in

[packages/core/src/spec/types/WalletUserId.ts:9](https://github.com/LedgerHQ/wallet-api/blob/main/packages/core/src/spec/types/WalletUserId.ts#L9)

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

[packages/core/src/errors/creators.ts:42](https://github.com/LedgerHQ/wallet-api/blob/main/packages/core/src/errors/creators.ts#L42)

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

[packages/core/src/errors/creators.ts:32](https://github.com/LedgerHQ/wallet-api/blob/main/packages/core/src/errors/creators.ts#L32)

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

[packages/core/src/errors/creators.ts:10](https://github.com/LedgerHQ/wallet-api/blob/main/packages/core/src/errors/creators.ts#L10)

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

[packages/core/src/errors/creators.ts:22](https://github.com/LedgerHQ/wallet-api/blob/main/packages/core/src/errors/creators.ts#L22)

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

[packages/core/src/JSONRPC/helpers.ts:39](https://github.com/LedgerHQ/wallet-api/blob/main/packages/core/src/JSONRPC/helpers.ts#L39)

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

[packages/core/src/JSONRPC/helpers.ts:57](https://github.com/LedgerHQ/wallet-api/blob/main/packages/core/src/JSONRPC/helpers.ts#L57)

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

[packages/core/src/errors/creators.ts:60](https://github.com/LedgerHQ/wallet-api/blob/main/packages/core/src/errors/creators.ts#L60)

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

[packages/core/src/errors/creators.ts:52](https://github.com/LedgerHQ/wallet-api/blob/main/packages/core/src/errors/creators.ts#L52)

___

### deserializeAccount

▸ **deserializeAccount**(`rawAccount`): [`Account`](#account)

Deserialize a [[RawAccount]] object after it has been received over JSON-RPC
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

[packages/core/src/accounts/serializers.ts:41](https://github.com/LedgerHQ/wallet-api/blob/main/packages/core/src/accounts/serializers.ts#L41)

___

### deserializeTransaction

▸ **deserializeTransaction**(`rawTransaction`): [`Transaction`](#transaction)

Deserialize a [[RawTransaction]] object after it has been received over
JSON-RPC protocol from the Ledger Live platform

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `rawTransaction` | { `amount`: `string` ; `assetId?`: `string` ; `family`: ``"algorand"`` ; `fees?`: `string` ; `memo?`: `string` ; `mode`: ``"send"`` \| ``"optIn"`` \| ``"claimReward"`` \| ``"optOut"`` = schemaAlgorandOperationMode; `recipient`: `string`  } \| { `amount`: `string` ; `family`: ``"bitcoin"`` ; `feePerByte?`: `string` ; `opReturnDataHex?`: `string` ; `recipient`: `string`  } \| { `amount`: `string` ; `family`: ``"celo"`` ; `fees?`: ``null`` \| `string` ; `index?`: ``null`` \| `number` ; `mode`: ``"send"`` \| ``"lock"`` \| ``"unlock"`` \| ``"withdraw"`` \| ``"vote"`` \| ``"revoke"`` \| ``"activate"`` \| ``"register"`` = schemaOperationMode; `recipient`: `string`  } \| { `amount`: `string` ; `family`: ``"cosmos"`` ; `fees?`: `string` ; `gas?`: `string` ; `memo?`: `string` ; `mode`: ``"send"`` \| ``"claimReward"`` \| ``"delegate"`` \| ``"undelegate"`` \| ``"redelegate"`` \| ``"claimRewardCompound"`` = schemaCosmosOperationMode; `recipient`: `string`  } \| { `amount`: `string` ; `family`: ``"crypto_org"`` ; `fees?`: `string` ; `mode`: `string` ; `recipient`: `string`  } \| { `amount`: `string` ; `data?`: `string` ; `family`: ``"ethereum"`` ; `gasLimit?`: `string` ; `gasPrice?`: `string` ; `maxFeePerGas?`: `string` ; `maxPriorityFeePerGas?`: `string` ; `nonce?`: `number` ; `recipient`: `string`  } \| { `amount`: `string` ; `family`: ``"hedera"`` ; `memo?`: `string` ; `recipient`: `string`  } \| { `amount`: `string` ; `data?`: `string` ; `family`: ``"filecoin"`` ; `gasFeeCap`: `string` ; `gasLimit`: `number` ; `gasPremium`: `string` ; `method`: `number` ; `nonce`: `number` ; `params?`: `string` ; `recipient`: `string` ; `version`: `number`  } \| { `amount`: `string` ; `family`: ``"near"`` ; `fees?`: `string` ; `mode`: `string` ; `recipient`: `string`  } \| { `amount`: `string` ; `family`: ``"neo"`` ; `recipient`: `string`  } \| { `amount`: `string` ; `era?`: `number` ; `family`: ``"polkadot"`` ; `fee?`: `string` ; `mode`: ``"send"`` \| ``"claimReward"`` \| ``"bond"`` \| ``"unbond"`` \| ``"rebond"`` \| ``"withdrawUnbonded"`` \| ``"setController"`` \| ``"nominate"`` \| ``"chill"`` = schemaPolkadotOperationMode; `recipient`: `string`  } \| { `amount`: `string` ; `family`: ``"ripple"`` ; `fee?`: `string` ; `recipient`: `string` ; `tag`: `number`  } \| { `amount`: `string` ; `family`: ``"stellar"`` ; `fees?`: `string` ; `memoType?`: ``"MEMO_TEXT"`` \| ``"MEMO_ID"`` \| ``"MEMO_HASH"`` \| ``"MEMO_RETURN"`` ; `memoValue?`: `string` ; `recipient`: `string`  } \| { `amount`: `string` ; `family`: ``"tezos"`` ; `fees?`: `string` ; `gasLimit?`: `string` ; `mode`: ``"send"`` \| ``"delegate"`` \| ``"undelegate"`` = schemaTezosOperationMode; `recipient`: `string`  } \| { `amount`: `string` ; `duration?`: `number` ; `family`: ``"tron"`` ; `mode`: ``"send"`` \| ``"claimReward"`` \| ``"vote"`` \| ``"freeze"`` \| ``"unfreeze"`` = schemaTronOperationMode; `recipient`: `string` ; `resource?`: ``"BANDWIDTH"`` \| ``"ENERGY"``  } \| { `amount`: `string` ; `data?`: `string` ; `family`: ``"elrond"`` ; `fees?`: `string` ; `gasLimit`: `number` ; `mode`: ``"send"`` \| ``"withdraw"`` \| ``"delegate"`` \| ``"reDelegateRewards"`` \| ``"unDelegate"`` \| ``"claimRewards"`` ; `recipient`: `string`  } \| { `amount`: `string` ; `family`: ``"cardano"`` ; `fees?`: `string` ; `memo?`: `string` ; `mode`: `string` ; `recipient`: `string`  } \| { `amount`: `string` ; `family`: ``"solana"`` ; `model`: `string` ; `recipient`: `string`  } | The raw transaction representation to deserialize |

#### Returns

[`Transaction`](#transaction)

The object transaction of the provided raw transaction representation

#### Defined in

[packages/core/src/families/serializer.ts:129](https://github.com/LedgerHQ/wallet-api/blob/main/packages/core/src/families/serializer.ts#L129)

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

[packages/core/src/JSONRPC/helpers.ts:11](https://github.com/LedgerHQ/wallet-api/blob/main/packages/core/src/JSONRPC/helpers.ts#L11)

___

### serializeAccount

▸ **serializeAccount**(`account`): [`RawAccount`](#rawaccount)

Serialize an [[Account]] object in order to send it over JSON-RPC protocol
to the Ledger Live platform

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `account` | [`Account`](#account) | The account object to serialize |

#### Returns

[`RawAccount`](#rawaccount)

The raw representation of the provided account object

#### Defined in

[packages/core/src/accounts/serializers.ts:12](https://github.com/LedgerHQ/wallet-api/blob/main/packages/core/src/accounts/serializers.ts#L12)

___

### serializeTransaction

▸ **serializeTransaction**(`transaction`): [`RawTransaction`](#rawtransaction)

Serialize an [[Transaction]] object in order to send it over JSON-RPC
protocol to the Ledger Live platform

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `transaction` | [`Transaction`](#transaction) | The transaction object to serialize |

#### Returns

[`RawTransaction`](#rawtransaction)

The raw representation of the provided transaction object

#### Defined in

[packages/core/src/families/serializer.ts:76](https://github.com/LedgerHQ/wallet-api/blob/main/packages/core/src/families/serializer.ts#L76)
