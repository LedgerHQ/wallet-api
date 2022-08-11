[@ledgerhq/live-app-sdk](README.md) / Exports

# @ledgerhq/live-app-sdk

## Table of contents

### Enumerations

- [CurrencyType](enums/CurrencyType.md)
- [DeviceModel](enums/DeviceModel.md)
- [ExchangeType](enums/ExchangeType.md)
- [FAMILIES](enums/FAMILIES.md)
- [FeesLevel](enums/FeesLevel.md)
- [TokenStandard](enums/TokenStandard.md)

### Classes

- [LedgerLivePlatformSDK](classes/LedgerLivePlatformSDK.md)
- [Mock](classes/Mock.md)
- [WindowMessageTransport](classes/WindowMessageTransport.md)

### Interfaces

- [AlgorandTransaction](interfaces/AlgorandTransaction.md)
- [BitcoinTransaction](interfaces/BitcoinTransaction.md)
- [CosmosTransaction](interfaces/CosmosTransaction.md)
- [CryptoOrgTransaction](interfaces/CryptoOrgTransaction.md)
- [EthereumTransaction](interfaces/EthereumTransaction.md)
- [PolkadotTransaction](interfaces/PolkadotTransaction.md)
- [RawAlgorandTransaction](interfaces/RawAlgorandTransaction.md)
- [RawBitcoinTransaction](interfaces/RawBitcoinTransaction.md)
- [RawCosmosTransaction](interfaces/RawCosmosTransaction.md)
- [RawCryptoOrgTransaction](interfaces/RawCryptoOrgTransaction.md)
- [RawEthereumTransaction](interfaces/RawEthereumTransaction.md)
- [RawPolkadotTransaction](interfaces/RawPolkadotTransaction.md)
- [RawRippleTransaction](interfaces/RawRippleTransaction.md)
- [RawStellarTransaction](interfaces/RawStellarTransaction.md)
- [RawTezosTransaction](interfaces/RawTezosTransaction.md)
- [RawTransactionCommon](interfaces/RawTransactionCommon.md)
- [RawTronTransaction](interfaces/RawTronTransaction.md)
- [RippleTransaction](interfaces/RippleTransaction.md)
- [StellarTransaction](interfaces/StellarTransaction.md)
- [TezosTransaction](interfaces/TezosTransaction.md)
- [TransactionCommon](interfaces/TransactionCommon.md)
- [Transport](interfaces/Transport.md)
- [TronTransaction](interfaces/TronTransaction.md)

### Type Aliases

- [Account](modules.md#account)
- [AlgorandOperationMode](modules.md#algorandoperationmode)
- [ApplicationDetails](modules.md#applicationdetails)
- [BaseCurrency](modules.md#basecurrency)
- [CosmosOperationMode](modules.md#cosmosoperationmode)
- [CryptoCurrency](modules.md#cryptocurrency)
- [Currency](modules.md#currency)
- [DeviceInfo](modules.md#deviceinfo)
- [ERC20TokenCurrency](modules.md#erc20tokencurrency)
- [EcdsaSignature](modules.md#ecdsasignature)
- [ExchangeDeviceTxId](modules.md#exchangedevicetxid)
- [ExchangePayload](modules.md#exchangepayload)
- [MessageHandler](modules.md#messagehandler)
- [PolkadotOperationMode](modules.md#polkadotoperationmode)
- [RawAccount](modules.md#rawaccount)
- [RawSignedTransaction](modules.md#rawsignedtransaction)
- [RawTransaction](modules.md#rawtransaction)
- [TezosOperationMode](modules.md#tezosoperationmode)
- [TokenCurrency](modules.md#tokencurrency)
- [Transaction](modules.md#transaction)
- [TronOperationMode](modules.md#tronoperationmode)
- [TronResource](modules.md#tronresource)
- [Unit](modules.md#unit)

### Functions

- [deserializeAccount](modules.md#deserializeaccount)
- [deserializeTransaction](modules.md#deserializetransaction)
- [serializeAccount](modules.md#serializeaccount)
- [serializeTransaction](modules.md#serializetransaction)

## Type Aliases

### Account

Ƭ **Account**: `Object`

A ledger live cryptocurrency account

**`remarks`**
This is a slightly modified subset of the Account type used by the Ledger Live platform.

**`see`** [Account reference](https://github.com/LedgerHQ/ledger-live-common/blob/master/docs/account.md) in Ledger Live Common doc for more infos

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

[types.ts:162](https://github.com/LedgerHQ/live-app-sdk/blob/5608a83/src/types.ts#L162)

___

### AlgorandOperationMode

Ƭ **AlgorandOperationMode**: ``"send"`` \| ``"optIn"`` \| ``"claimReward"`` \| ``"optOut"``

#### Defined in

[families/algorand/types.ts:8](https://github.com/LedgerHQ/live-app-sdk/blob/5608a83/src/families/algorand/types.ts#L8)

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

[types.ts:200](https://github.com/LedgerHQ/live-app-sdk/blob/5608a83/src/types.ts#L200)

___

### BaseCurrency

Ƭ **BaseCurrency**: `Object`

Base currency model

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `color` | `string` | Used for UI |
| `id` | `string` | The unique internal id of the currency |
| `name` | `string` | The display name of the currency |
| `ticker` | `string` | The ticker name in exchanges / countervalue apis (e.g. BTC, ETH, USDT). |
| `units` | [`Unit`](modules.md#unit)[] | Array of available [units](modules.md#unit) for the currency |

#### Defined in

[types.ts:237](https://github.com/LedgerHQ/live-app-sdk/blob/5608a83/src/types.ts#L237)

___

### CosmosOperationMode

Ƭ **CosmosOperationMode**: ``"send"`` \| ``"delegate"`` \| ``"undelegate"`` \| ``"redelegate"`` \| ``"claimReward"`` \| ``"claimRewardCompound"``

#### Defined in

[families/cosmos/types.ts:8](https://github.com/LedgerHQ/live-app-sdk/blob/5608a83/src/families/cosmos/types.ts#L8)

___

### CryptoCurrency

Ƭ **CryptoCurrency**: [`BaseCurrency`](modules.md#basecurrency) & { `family`: `string` ; `type`: [`CryptoCurrency`](enums/CurrencyType.md#cryptocurrency)  }

Crypto currency model

#### Defined in

[types.ts:263](https://github.com/LedgerHQ/live-app-sdk/blob/5608a83/src/types.ts#L263)

___

### Currency

Ƭ **Currency**: [`CryptoCurrency`](modules.md#cryptocurrency) \| [`ERC20TokenCurrency`](modules.md#erc20tokencurrency)

#### Defined in

[types.ts:304](https://github.com/LedgerHQ/live-app-sdk/blob/5608a83/src/types.ts#L304)

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

[types.ts:134](https://github.com/LedgerHQ/live-app-sdk/blob/5608a83/src/types.ts#L134)

___

### ERC20TokenCurrency

Ƭ **ERC20TokenCurrency**: [`TokenCurrency`](modules.md#tokencurrency) & { `contract`: `string` ; `standard`: [`ERC20`](enums/TokenStandard.md#erc20)  }

ERC20 token currency model

#### Defined in

[types.ts:293](https://github.com/LedgerHQ/live-app-sdk/blob/5608a83/src/types.ts#L293)

___

### EcdsaSignature

Ƭ **EcdsaSignature**: `Buffer`

The ECDSA signature of the [payload](modules.md#exchangepayload)

#### Defined in

[types.ts:53](https://github.com/LedgerHQ/live-app-sdk/blob/5608a83/src/types.ts#L53)

___

### ExchangeDeviceTxId

Ƭ **ExchangeDeviceTxId**: `string`

A transaction ID used to complete the exchange process

#### Defined in

[types.ts:58](https://github.com/LedgerHQ/live-app-sdk/blob/5608a83/src/types.ts#L58)

___

### ExchangePayload

Ƭ **ExchangePayload**: `Buffer`

Metadata used to describe a secure exchange between a Ledger device
and a partner (for sell, swap and funding)

**`ref:`** https://github.com/LedgerHQ/app-exchange/blob/master/src/proto/protocol.proto

#### Defined in

[types.ts:48](https://github.com/LedgerHQ/live-app-sdk/blob/5608a83/src/types.ts#L48)

___

### MessageHandler

Ƭ **MessageHandler**: (`payload`: `unknown`) => `Promise`<`void`\>

#### Type declaration

▸ (`payload`): `Promise`<`void`\>

Simple contract for handling a Message received through a [Transport](interfaces/Transport.md) protocol

**`alpha`**

##### Parameters

| Name | Type |
| :------ | :------ |
| `payload` | `unknown` |

##### Returns

`Promise`<`void`\>

#### Defined in

[types.ts:18](https://github.com/LedgerHQ/live-app-sdk/blob/5608a83/src/types.ts#L18)

___

### PolkadotOperationMode

Ƭ **PolkadotOperationMode**: ``"send"`` \| ``"bond"`` \| ``"unbond"`` \| ``"rebond"`` \| ``"withdrawUnbonded"`` \| ``"setController"`` \| ``"nominate"`` \| ``"chill"`` \| ``"claimReward"``

#### Defined in

[families/polkadot/types.ts:8](https://github.com/LedgerHQ/live-app-sdk/blob/5608a83/src/families/polkadot/types.ts#L8)

___

### RawAccount

Ƭ **RawAccount**: `Object`

The raw representation of the [Account](modules.md#account) type

**`see`** [Account](modules.md#account) for information regarding individual fields. Each field type is the serialized version of the corresponding [Account](modules.md#account) type

#### Type declaration

| Name | Type |
| :------ | :------ |
| `address` | `string` |
| `balance` | `string` |
| `blockHeight` | `number` |
| `currency` | `string` |
| `id` | `string` |
| `lastSyncDate` | `string` |
| `name` | `string` |
| `spendableBalance` | `string` |

#### Defined in

[rawTypes.ts:17](https://github.com/LedgerHQ/live-app-sdk/blob/5608a83/src/rawTypes.ts#L17)

___

### RawSignedTransaction

Ƭ **RawSignedTransaction**: `Object`

The raw representation of a signed transaction returned by the Ledger Live platform

**`remarks`**
This type is returned by Ledger Live when signing with [signTransaction](classes/Mock.md#signtransaction) and is only used as a payload by the [broadcastSignedTransaction](classes/Mock.md#broadcastsignedtransaction) function to actually broadcast the transaction to the blockchain

#### Type declaration

| Name | Type |
| :------ | :------ |
| `expirationDate` | `string` \| ``null`` |
| `operation` | `unknown` |
| `signature` | `string` |
| `signatureRaw?` | `unknown` |

#### Defined in

[rawTypes.ts:60](https://github.com/LedgerHQ/live-app-sdk/blob/5608a83/src/rawTypes.ts#L60)

___

### RawTransaction

Ƭ **RawTransaction**: [`RawEthereumTransaction`](interfaces/RawEthereumTransaction.md) \| [`RawBitcoinTransaction`](interfaces/RawBitcoinTransaction.md) \| [`RawAlgorandTransaction`](interfaces/RawAlgorandTransaction.md) \| [`RawCryptoOrgTransaction`](interfaces/RawCryptoOrgTransaction.md) \| [`RawRippleTransaction`](interfaces/RawRippleTransaction.md) \| [`RawCosmosTransaction`](interfaces/RawCosmosTransaction.md) \| [`RawTezosTransaction`](interfaces/RawTezosTransaction.md) \| [`RawPolkadotTransaction`](interfaces/RawPolkadotTransaction.md) \| [`RawStellarTransaction`](interfaces/RawStellarTransaction.md) \| [`RawTronTransaction`](interfaces/RawTronTransaction.md)

The raw representation of the generic [Transaction](modules.md#transaction) type.

#### Defined in

[rawTypes.ts:42](https://github.com/LedgerHQ/live-app-sdk/blob/5608a83/src/rawTypes.ts#L42)

___

### TezosOperationMode

Ƭ **TezosOperationMode**: ``"send"`` \| ``"delegate"`` \| ``"undelegate"``

#### Defined in

[families/tezos/types.ts:8](https://github.com/LedgerHQ/live-app-sdk/blob/5608a83/src/families/tezos/types.ts#L8)

___

### TokenCurrency

Ƭ **TokenCurrency**: [`BaseCurrency`](modules.md#basecurrency) & { `parent`: `string` ; `type`: [`TokenCurrency`](enums/CurrencyType.md#tokencurrency)  }

Token currency model

#### Defined in

[types.ts:278](https://github.com/LedgerHQ/live-app-sdk/blob/5608a83/src/types.ts#L278)

___

### Transaction

Ƭ **Transaction**: [`EthereumTransaction`](interfaces/EthereumTransaction.md) \| [`BitcoinTransaction`](interfaces/BitcoinTransaction.md) \| [`AlgorandTransaction`](interfaces/AlgorandTransaction.md) \| [`CryptoOrgTransaction`](interfaces/CryptoOrgTransaction.md) \| [`RippleTransaction`](interfaces/RippleTransaction.md) \| [`CosmosTransaction`](interfaces/CosmosTransaction.md) \| [`TezosTransaction`](interfaces/TezosTransaction.md) \| [`PolkadotTransaction`](interfaces/PolkadotTransaction.md) \| [`StellarTransaction`](interfaces/StellarTransaction.md) \| [`TronTransaction`](interfaces/TronTransaction.md)

Description of an unsigned transaction. This type is used to build
transactions and then sign them with a Ledger device and finally broadcast
them to the network upon user validation.

#### Defined in

[types.ts:104](https://github.com/LedgerHQ/live-app-sdk/blob/5608a83/src/types.ts#L104)

___

### TronOperationMode

Ƭ **TronOperationMode**: ``"send"`` \| ``"freeze"`` \| ``"unfreeze"`` \| ``"vote"`` \| ``"claimReward"``

#### Defined in

[families/tron/types.ts:6](https://github.com/LedgerHQ/live-app-sdk/blob/5608a83/src/families/tron/types.ts#L6)

___

### TronResource

Ƭ **TronResource**: ``"BANDWIDTH"`` \| ``"ENERGY"``

#### Defined in

[families/tron/types.ts:13](https://github.com/LedgerHQ/live-app-sdk/blob/5608a83/src/families/tron/types.ts#L13)

___

### Unit

Ƭ **Unit**: `Object`

A unit describes a given representation of a currency for humans. A currency can have many units, for instance, we can assume Euro have euros and cents. We can define Bitcoin to have: bitcoin, mBTC, bit, satoshi (but that's up to us really).

**`remarks`**
This is a slightly modified subset of the Unit type used by the Ledger Live platform.

**`see`** [Unit reference](https://github.com/LedgerHQ/ledger-live-common/blob/master/docs/currency.md#unit) in Ledger Live Common doc for more informations

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `code` | `string` | String to use when formatting the unit. like 'BTC' or 'USD' |
| `magnitude` | `number` | Number of digits after the '.' in context of this unit |
| `name` | `string` | Display name of a given unit (example: satoshi) |

#### Defined in

[types.ts:219](https://github.com/LedgerHQ/live-app-sdk/blob/5608a83/src/types.ts#L219)

## Functions

### deserializeAccount

▸ **deserializeAccount**(`rawAccount`): [`Account`](modules.md#account)

Deserialize a [RawAccount](modules.md#rawaccount) object after it has been received over JSON-RPC
protocol from the Ledger Live platform

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `rawAccount` | [`RawAccount`](modules.md#rawaccount) | The raw account representation to deserialize |

#### Returns

[`Account`](modules.md#account)

The object account of the provided raw account representation

#### Defined in

[serializers.ts:84](https://github.com/LedgerHQ/live-app-sdk/blob/5608a83/src/serializers.ts#L84)

___

### deserializeTransaction

▸ **deserializeTransaction**(`rawTransaction`): [`Transaction`](modules.md#transaction)

Deserialize a [RawTransaction](modules.md#rawtransaction) object after it has been received over
JSON-RPC protocol from the Ledger Live platform

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `rawTransaction` | [`RawTransaction`](modules.md#rawtransaction) | The raw transaction representation to deserialize |

#### Returns

[`Transaction`](modules.md#transaction)

The object transaction of the provided raw transaction representation

#### Defined in

[serializers.ts:147](https://github.com/LedgerHQ/live-app-sdk/blob/5608a83/src/serializers.ts#L147)

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

[serializers.ts:55](https://github.com/LedgerHQ/live-app-sdk/blob/5608a83/src/serializers.ts#L55)

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

[serializers.ts:113](https://github.com/LedgerHQ/live-app-sdk/blob/5608a83/src/serializers.ts#L113)
