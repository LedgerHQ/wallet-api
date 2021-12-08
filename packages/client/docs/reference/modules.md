[@ledgerhq/live-app-sdk](README.md) / Exports

# @ledgerhq/live-app-sdk

## Table of contents

### Enumerations

- [DeviceModel](enums/DeviceModel.md)
- [ExchangeType](enums/ExchangeType.md)
- [FAMILIES](enums/FAMILIES.md)
- [FeesLevel](enums/FeesLevel.md)

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

### Type aliases

- [Account](modules.md#account)
- [AlgorandOperationMode](modules.md#algorandoperationmode)
- [ApplicationDetails](modules.md#applicationdetails)
- [CosmosOperationMode](modules.md#cosmosoperationmode)
- [Currency](modules.md#currency)
- [DeviceInfo](modules.md#deviceinfo)
- [EcdsaSignature](modules.md#ecdsasignature)
- [ExchangeDeviceTxId](modules.md#exchangedevicetxid)
- [ExchangePayload](modules.md#exchangepayload)
- [MessageHandler](modules.md#messagehandler)
- [PolkadotOperationMode](modules.md#polkadotoperationmode)
- [RawAccount](modules.md#rawaccount)
- [RawSignedTransaction](modules.md#rawsignedtransaction)
- [RawTransaction](modules.md#rawtransaction)
- [TezosOperationMode](modules.md#tezosoperationmode)
- [Transaction](modules.md#transaction)
- [TronOperationMode](modules.md#tronoperationmode)
- [TronResource](modules.md#tronresource)
- [Unit](modules.md#unit)

### Functions

- [deserializeAccount](modules.md#deserializeaccount)
- [deserializeTransaction](modules.md#deserializetransaction)
- [serializeAccount](modules.md#serializeaccount)
- [serializeTransaction](modules.md#serializetransaction)

## Type aliases

### Account

Ƭ **Account**: `Object`

A ledger live cryptocurrency account

**`remarks`**
This is a slightly modified subset of the Account type used by the Ledger Live platform.

**`see`** [Account reference](https://github.com/LedgerHQ/ledger-live-common/blob/master/docs/account.md) in Ledger Live Common doc for more infos

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `address` | `string` | The "next" public address where a user should receive funds. In the context of Bitcoin, the address will be "renewed" each time funds were received in order to allow some privacy. In other blockchains, it might never change |
| `balance` | `BigNumber` | Represent the total amount of assets that this account holds |
| `blockHeight` | `number` | Tracks the current blockchain block height |
| `currency` | `string` | The associated cryptocurrency id of the Account |
| `id` | `string` | The unique identifier of this account used internally by Ledger Live software |
| `lastSyncDate` | `Date` | The date of the last time a synchronisation was performed, in other words tracks how up to date the Account data is |
| `name` | `string` | The name of the account that the user has set |
| `spendableBalance` | `BigNumber` | Represents the subset of balance that can be spent. Most of the time it will be equal to balance but this can vary in some blockchains |

#### Defined in

[types.ts:143](https://github.com/LedgerHQ/live-app-sdk/blob/dc89379/src/types.ts#L143)

___

### AlgorandOperationMode

Ƭ **AlgorandOperationMode**: ``"send"`` \| ``"optIn"`` \| ``"claimReward"`` \| ``"optOut"``

#### Defined in

[families/algorand/types.ts:8](https://github.com/LedgerHQ/live-app-sdk/blob/dc89379/src/families/algorand/types.ts#L8)

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

[types.ts:181](https://github.com/LedgerHQ/live-app-sdk/blob/dc89379/src/types.ts#L181)

___

### CosmosOperationMode

Ƭ **CosmosOperationMode**: ``"send"`` \| ``"delegate"`` \| ``"undelegate"`` \| ``"redelegate"`` \| ``"claimReward"`` \| ``"claimRewardCompound"``

#### Defined in

[families/cosmos/types.ts:8](https://github.com/LedgerHQ/live-app-sdk/blob/dc89379/src/families/cosmos/types.ts#L8)

___

### Currency

Ƭ **Currency**: `Object`

A cryptocurrency model

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `color` | `string` | used for UI |
| `family` | `string` | the [family](enums/FAMILIES.md) of the currency |
| `id` | `string` | unique internal id of the cryptocurrency |
| `name` | `string` | display name of the currency |
| `ticker` | `string` | the ticker name in exchanges / countervalue apis (e.g. BTC). |
| `type` | `string` | represents the currency type. For now only "CryptoCurrency" is handled  **`see`** [cryptoassets types](https://github.com/LedgerHQ/ledgerjs/blob/master/packages/cryptoassets/src/types.ts) in ledgerjs for more infos |
| `units` | [`Unit`](modules.md#unit)[] | array of available [units](modules.md#unit) for the cryptocurrency |

#### Defined in

[types.ts:218](https://github.com/LedgerHQ/live-app-sdk/blob/dc89379/src/types.ts#L218)

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

[types.ts:115](https://github.com/LedgerHQ/live-app-sdk/blob/dc89379/src/types.ts#L115)

___

### EcdsaSignature

Ƭ **EcdsaSignature**: `string`

#### Defined in

[types.ts:54](https://github.com/LedgerHQ/live-app-sdk/blob/dc89379/src/types.ts#L54)

___

### ExchangeDeviceTxId

Ƭ **ExchangeDeviceTxId**: `string`

#### Defined in

[types.ts:52](https://github.com/LedgerHQ/live-app-sdk/blob/dc89379/src/types.ts#L52)

___

### ExchangePayload

Ƭ **ExchangePayload**: `string`

Metadata used to describe a secure exchange between a Ledger device
and a partner (for sell, swap and funding), the information is a
hex string of a protobuf containing all the data from the exchange

**`ref:`** https://github.com/LedgerHQ/app-exchange/blob/master/src/proto/protocol.proto

#### Defined in

[types.ts:50](https://github.com/LedgerHQ/live-app-sdk/blob/dc89379/src/types.ts#L50)

___

### MessageHandler

Ƭ **MessageHandler**: (`payload`: `unknown`) => `Promise`<`void`\>

#### Type declaration

▸ (`payload`): `Promise`<`void`\>

A [Transport](interfaces/Transport.md) message handled function type

##### Parameters

| Name | Type |
| :------ | :------ |
| `payload` | `unknown` |

##### Returns

`Promise`<`void`\>

#### Defined in

[types.ts:18](https://github.com/LedgerHQ/live-app-sdk/blob/dc89379/src/types.ts#L18)

___

### PolkadotOperationMode

Ƭ **PolkadotOperationMode**: ``"send"`` \| ``"bond"`` \| ``"unbond"`` \| ``"rebond"`` \| ``"withdrawUnbonded"`` \| ``"setController"`` \| ``"nominate"`` \| ``"chill"`` \| ``"claimReward"``

#### Defined in

[families/polkadot/types.ts:8](https://github.com/LedgerHQ/live-app-sdk/blob/dc89379/src/families/polkadot/types.ts#L8)

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

[rawTypes.ts:17](https://github.com/LedgerHQ/live-app-sdk/blob/dc89379/src/rawTypes.ts#L17)

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

[rawTypes.ts:60](https://github.com/LedgerHQ/live-app-sdk/blob/dc89379/src/rawTypes.ts#L60)

___

### RawTransaction

Ƭ **RawTransaction**: [`RawEthereumTransaction`](interfaces/RawEthereumTransaction.md) \| [`RawBitcoinTransaction`](interfaces/RawBitcoinTransaction.md) \| [`RawAlgorandTransaction`](interfaces/RawAlgorandTransaction.md) \| [`RawCryptoOrgTransaction`](interfaces/RawCryptoOrgTransaction.md) \| [`RawRippleTransaction`](interfaces/RawRippleTransaction.md) \| [`RawCosmosTransaction`](interfaces/RawCosmosTransaction.md) \| [`RawTezosTransaction`](interfaces/RawTezosTransaction.md) \| [`RawPolkadotTransaction`](interfaces/RawPolkadotTransaction.md) \| [`RawStellarTransaction`](interfaces/RawStellarTransaction.md) \| [`RawTronTransaction`](interfaces/RawTronTransaction.md)

The raw representation of the generic [Transaction](modules.md#transaction) type combining each individual cryptocurrency transaction raw representation type

#### Defined in

[rawTypes.ts:42](https://github.com/LedgerHQ/live-app-sdk/blob/dc89379/src/rawTypes.ts#L42)

___

### TezosOperationMode

Ƭ **TezosOperationMode**: ``"send"`` \| ``"delegate"`` \| ``"undelegate"``

#### Defined in

[families/tezos/types.ts:8](https://github.com/LedgerHQ/live-app-sdk/blob/dc89379/src/families/tezos/types.ts#L8)

___

### Transaction

Ƭ **Transaction**: [`EthereumTransaction`](interfaces/EthereumTransaction.md) \| [`BitcoinTransaction`](interfaces/BitcoinTransaction.md) \| [`AlgorandTransaction`](interfaces/AlgorandTransaction.md) \| [`CryptoOrgTransaction`](interfaces/CryptoOrgTransaction.md) \| [`RippleTransaction`](interfaces/RippleTransaction.md) \| [`CosmosTransaction`](interfaces/CosmosTransaction.md) \| [`TezosTransaction`](interfaces/TezosTransaction.md) \| [`PolkadotTransaction`](interfaces/PolkadotTransaction.md) \| [`StellarTransaction`](interfaces/StellarTransaction.md) \| [`TronTransaction`](interfaces/TronTransaction.md)

Description of an unsigned transaction. This type is used to build transaction
and then sign them by a Ledger device and finally broadcast them to the network
upon user validation.

#### Defined in

[types.ts:85](https://github.com/LedgerHQ/live-app-sdk/blob/dc89379/src/types.ts#L85)

___

### TronOperationMode

Ƭ **TronOperationMode**: ``"send"`` \| ``"freeze"`` \| ``"unfreeze"`` \| ``"vote"`` \| ``"claimReward"``

#### Defined in

[families/tron/types.ts:6](https://github.com/LedgerHQ/live-app-sdk/blob/dc89379/src/families/tron/types.ts#L6)

___

### TronResource

Ƭ **TronResource**: ``"BANDWIDTH"`` \| ``"ENERGY"``

#### Defined in

[families/tron/types.ts:13](https://github.com/LedgerHQ/live-app-sdk/blob/dc89379/src/families/tron/types.ts#L13)

___

### Unit

Ƭ **Unit**: `Object`

A unit describes a given representation of a currency for humans. A currency can have many units, for instance, we can assume Euro have euros and cents. We can define Bitcoin to have: bitcoin, mBTC, bit, satoshi (but that's up to us really).

**`remarks`**
This is a slightly modified subset of the Unit type used by the Ledger Live platform.

**`see`** [Unit reference](https://github.com/LedgerHQ/ledger-live-common/blob/master/docs/currency.md#unit) in Ledger Live Common doc for more infos

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `code` | `string` | string to use when formatting the unit. like 'BTC' or 'USD' |
| `magnitude` | `number` | number of digits after the '.' in context of this unit |
| `name` | `string` | display name of a given unit (example: satoshi) |

#### Defined in

[types.ts:200](https://github.com/LedgerHQ/live-app-sdk/blob/dc89379/src/types.ts#L200)

## Functions

### deserializeAccount

▸ **deserializeAccount**(`rawAccount`): [`Account`](modules.md#account)

Deserialize a [RawAccount](modules.md#rawaccount) object after is has been received over JSON-RPC protocol from the Ledger Live platfrom

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `rawAccount` | [`RawAccount`](modules.md#rawaccount) | The raw account representation to deserialize |

#### Returns

[`Account`](modules.md#account)

The object account of the provided raw account representation

#### Defined in

[serializers.ts:82](https://github.com/LedgerHQ/live-app-sdk/blob/dc89379/src/serializers.ts#L82)

___

### deserializeTransaction

▸ **deserializeTransaction**(`rawTransaction`): [`Transaction`](modules.md#transaction)

Deserialize a [RawTransaction](modules.md#rawtransaction) object after is has been received over JSON-RPC protocol from the Ledger Live platfrom

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `rawTransaction` | [`RawTransaction`](modules.md#rawtransaction) | The raw transaction representation to deserialize |

#### Returns

[`Transaction`](modules.md#transaction)

The object transaction of the provided raw transaction representation

#### Defined in

[serializers.ts:143](https://github.com/LedgerHQ/live-app-sdk/blob/dc89379/src/serializers.ts#L143)

___

### serializeAccount

▸ **serializeAccount**(`account`): [`RawAccount`](modules.md#rawaccount)

Serialize an [Account](modules.md#account) object in order to send it over JSON-RPC protocol to the Ledger Live platfrom

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `account` | [`Account`](modules.md#account) | The account object to serialize |

#### Returns

[`RawAccount`](modules.md#rawaccount)

The raw representation of the provided account object

#### Defined in

[serializers.ts:54](https://github.com/LedgerHQ/live-app-sdk/blob/dc89379/src/serializers.ts#L54)

___

### serializeTransaction

▸ **serializeTransaction**(`transaction`): [`RawTransaction`](modules.md#rawtransaction)

Serialize an [Transaction](modules.md#transaction) object in order to send it over JSON-RPC protocol to the Ledger Live platfrom

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `transaction` | [`Transaction`](modules.md#transaction) | The transaction object to serialize |

#### Returns

[`RawTransaction`](modules.md#rawtransaction)

The raw representation of the provided transaction object

#### Defined in

[serializers.ts:110](https://github.com/LedgerHQ/live-app-sdk/blob/dc89379/src/serializers.ts#L110)
