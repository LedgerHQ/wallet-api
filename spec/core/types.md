<!-- omit in toc -->

# Types

Here we describe the types used in the API.

Some types are defined as _raw_, usually in the form `Raw[TYPE-NAME]`. These types are used for communication between the client and server over JSON-RPC. Each property of a raw type must be a JSON primitive data types as described by the JSON-RPC 2.0 [specification](https://www.jsonrpc.org/specification#parameter_structures) (i.e: Strings, Numbers, Booleans, or Null).

---

<!-- omit in toc -->

## Table of Contents

- [Transactions](#transactions)
  - [Transaction](#transaction)
  - [RawTransaction](#rawtransaction)
  - [TransactionCommon](#transactioncommon)
  - [RawTransactionCommon](#rawtransactioncommon)
  - [AlgorandTransaction](#algorandtransaction)
  - [RawAlgorandTransaction](#rawalgorandtransaction)
  - [BitcoinTransaction](#bitcointransaction)
  - [RawBitcoinTransaction](#rawbitcointransaction)
  - [CosmosTransaction](#cosmostransaction)
  - [RawCosmosTransaction](#rawcosmostransaction)
  - [CryptoOrgTransaction](#cryptoorgtransaction)
  - [RawCryptoOrgTransaction](#rawcryptoorgtransaction)
  - [EthereumTransaction](#ethereumtransaction)
  - [RawEthereumTransaction](#rawethereumtransaction)
  - [PolkadotTransaction](#polkadottransaction)
  - [RawPolkadotTransaction](#rawpolkadottransaction)
  - [RippleTransaction](#rippletransaction)
  - [RawRippleTransaction](#rawrippletransaction)
  - [StellarTransaction](#stellartransaction)
  - [RawStellarTransaction](#rawstellartransaction)
  - [TezosTransaction](#tezostransaction)
  - [RawTezosTransaction](#rawtezostransaction)
  - [TronTransaction](#trontransaction)
  - [RawTronTransaction](#rawtrontransaction)
- [Enums](#enums)
  - [CurrencyType](#currencytype)
  - [ExchangeType](#exchangetype)
  - [FAMILIES](#families)
  - [FeesLevel](#feeslevel)
  - [TokenStandard](#tokenstandard)
- [Account](#account)
- [RawAccount](#rawaccount)
- [TronOperationMode](#tronoperationmode)
- [TronResource](#tronresource)
- [AlgorandOperationMode](#algorandoperationmode)
- [CosmosOperationMode](#cosmosoperationmode)
- [PolkadotOperationMode](#polkadotoperationmode)
- [TezosOperationMode](#tezosoperationmode)
- [StellarMemoType](#stellarmemotype)
- [ApplicationDetails](#applicationdetails)
- [BaseCurrency](#basecurrency)
- [CryptoCurrency](#cryptocurrency)
- [Currency](#currency)
- [DeviceInfo](#deviceinfo)
- [ERC20TokenCurrency](#erc20tokencurrency)
- [EcdsaSignature](#ecdsasignature)
- [ExchangeDeviceTxId](#exchangedevicetxid)
- [ExchangePayload](#exchangepayload)
- [RawSignedTransaction](#rawsignedtransaction)
- [TokenCurrency](#tokencurrency)
- [Unit](#unit)

---

## Transactions

### Transaction

Description of an unsigned transaction. This type is used to build transactions and then sign them with a Ledger device and finally broadcast them to the network upon user validation.

[`EthereumTransaction`](/spec/core/types.md#ethereumtransaction) \| [`BitcoinTransaction`](/spec/core/types.md#bitcointransaction) \| [`AlgorandTransaction`](/spec/core/types.md#algorandtransaction) \| [`CryptoOrgTransaction`](/spec/core/types.md#cryptoorgtransaction) \| [`RippleTransaction`](/spec/core/types.md#rippletransaction) \| [`CosmosTransaction`](/spec/core/types.md#cosmostransaction) \| [`TezosTransaction`](/spec/core/types.md#tezostransaction) \| [`PolkadotTransaction`](/spec/core/types.md#polkadottransaction) \| [`StellarTransaction`](/spec/core/types.md#stellartransaction) \| [`TronTransaction`](/spec/core/types.md#trontransaction)

### RawTransaction

The raw representation of the generic [Transaction](/spec/core/types.md#transaction) type.

[`RawEthereumTransaction`](/spec/core/types.md#rawethereumtransaction) \| [`RawBitcoinTransaction`](/spec/core/types.md#rawbitcointransaction) \| [`RawAlgorandTransaction`](/spec/core/types.md#rawalgorandtransaction) \| [`RawCryptoOrgTransaction`](/spec/core/types.md#rawcryptoorgtransaction) \| [`RawRippleTransaction`](/spec/core/types.md#rawrippletransaction) \| [`RawCosmosTransaction`](/spec/core/types.md#rawcosmostransaction) \| [`RawTezosTransaction`](/spec/core/types.md#rawtezostransaction) \| [`RawPolkadotTransaction`](/spec/core/types.md#rawpolkadottransaction) \| [`RawStellarTransaction`](/spec/core/types.md#rawstellartransaction) \| [`RawTronTransaction`](/spec/core/types.md#rawtrontransaction)

### TransactionCommon

Common fields for all cryptocurrency transactions

| Name        | Type        | Description                                                                                                                                                                                                      |
| ----------- | ----------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `amount`    | `BigNumber` | The amount of token to send in the transaction, denoted in the smallest cryptocurrency's magnitude. For example in BTC, a tx with an 'amount' field of 1 will correspond to a tx corresponding to 0.00000001 BTC |
| `recipient` | `string`    | The address of the transaction's recipient                                                                                                                                                                       |

### RawTransactionCommon

The raw representation of the common transaction fields found in [TransactionCommon](/spec/core/types.md#transactioncommon) type.

| Name        | Type     | Description                                                                                                                                                                                                      |
| ----------- | -------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `amount`    | `string` | The amount of token to send in the transaction, denoted in the smallest cryptocurrency's magnitude. For example in BTC, a tx with an 'amount' field of 1 will correspond to a tx corresponding to 0.00000001 BTC |
| `recipient` | `string` | The address of the transaction's recipient                                                                                                                                                                       |

### AlgorandTransaction

| Name        | Type                                                                 | Description                                                                                                                                                                                                     |
| ----------- | -------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `amount`    | `BigNumber`                                                          | The amount of token to send in the transaction, denoted in the smallest cryptocurrency's magnitude For example in BTC, a tx with an 'amount' field of 1 will correspond to a tx corresponding to 0.00000001 BTC |
| `assetId?`  | `string`                                                             |                                                                                                                                                                                                                 |
| `family`    | [`ALGORAND`](/spec/core/types.md#families)                           |                                                                                                                                                                                                                 |
| `fees?`     | `BigNumber`                                                          |                                                                                                                                                                                                                 |
| `memo?`     | `string`                                                             |                                                                                                                                                                                                                 |
| `mode`      | [`AlgorandOperationMode`](/spec/core/types.md#algorandoperationmode) |                                                                                                                                                                                                                 |
| `recipient` | `string`                                                             | The address of the transaction's recipient                                                                                                                                                                      |

### RawAlgorandTransaction

| Name        | Type                                                                 | Description                                                                                                                                                                                                     |
| ----------- | -------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `amount`    | `string`                                                             | The amount of token to send in the transaction, denoted in the smallest cryptocurrency's magnitude For example in BTC, a tx with an 'amount' field of 1 will correspond to a tx corresponding to 0.00000001 BTC |
| `assetId?`  | `string`                                                             |                                                                                                                                                                                                                 |
| `family`    | [`ALGORAND`](/spec/core/types.md#families)                           |                                                                                                                                                                                                                 |
| `fees?`     | `string`                                                             |                                                                                                                                                                                                                 |
| `memo?`     | `string`                                                             |                                                                                                                                                                                                                 |
| `mode`      | [`AlgorandOperationMode`](/spec/core/types.md#algorandoperationmode) |                                                                                                                                                                                                                 |
| `recipient` | `string`                                                             | The address of the transaction's recipient                                                                                                                                                                      |

### BitcoinTransaction

| Name          | Type                                      | Description                                                                                                                                                                                                     |
| ------------- | ----------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `amount`      | `BigNumber`                               | The amount of token to send in the transaction, denoted in the smallest cryptocurrency's magnitude For example in BTC, a tx with an 'amount' field of 1 will correspond to a tx corresponding to 0.00000001 BTC |
| `family`      | [`BITCOIN`](/spec/core/types.md#families) |                                                                                                                                                                                                                 |
| `feePerByte?` | `BigNumber`                               |                                                                                                                                                                                                                 |
| `recipient`   | `string`                                  | The address of the transaction's recipient                                                                                                                                                                      |

### RawBitcoinTransaction

| Name          | Type                                      | Description                                                                                                                                                                                                     |
| ------------- | ----------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `amount`      | `string`                                  | The amount of token to send in the transaction, denoted in the smallest cryptocurrency's magnitude For example in BTC, a tx with an 'amount' field of 1 will correspond to a tx corresponding to 0.00000001 BTC |
| `family`      | [`BITCOIN`](/spec/core/types.md#families) |                                                                                                                                                                                                                 |
| `feePerByte?` | `string`                                  |                                                                                                                                                                                                                 |
| `recipient`   | `string`                                  | The address of the transaction's recipient                                                                                                                                                                      |

### CosmosTransaction

| Name        | Type                                                             | Description                                                                                                                                                                                                     |
| ----------- | ---------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `amount`    | `BigNumber`                                                      | The amount of token to send in the transaction, denoted in the smallest cryptocurrency's magnitude For example in BTC, a tx with an 'amount' field of 1 will correspond to a tx corresponding to 0.00000001 BTC |
| `family`    | [`COSMOS`](/spec/core/types.md#families)                         |                                                                                                                                                                                                                 |
| `fees?`     | `BigNumber`                                                      |                                                                                                                                                                                                                 |
| `gas`       | `BigNumber`                                                      |                                                                                                                                                                                                                 |
| `memo?`     | `string`                                                         |                                                                                                                                                                                                                 |
| `mode`      | [`CosmosOperationMode`](/spec/core/types.md#cosmosoperationmode) |                                                                                                                                                                                                                 |
| `recipient` | `string`                                                         | The address of the transaction's recipient                                                                                                                                                                      |

### RawCosmosTransaction

| Name        | Type                                                             | Description                                                                                                                                                                                                     |
| ----------- | ---------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `amount`    | `string`                                                         | The amount of token to send in the transaction, denoted in the smallest cryptocurrency's magnitude For example in BTC, a tx with an 'amount' field of 1 will correspond to a tx corresponding to 0.00000001 BTC |
| `family`    | [`COSMOS`](/spec/core/types.md#families)                         |                                                                                                                                                                                                                 |
| `fees?`     | `string`                                                         |                                                                                                                                                                                                                 |
| `gas`       | `string`                                                         |                                                                                                                                                                                                                 |
| `memo?`     | `string`                                                         |                                                                                                                                                                                                                 |
| `mode`      | [`CosmosOperationMode`](/spec/core/types.md#cosmosoperationmode) |                                                                                                                                                                                                                 |
| `recipient` | `string`                                                         | The address of the transaction's recipient                                                                                                                                                                      |

### CryptoOrgTransaction

| Name        | Type                                         | Description                                                                                                                                                                                                     |
| ----------- | -------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `amount`    | `BigNumber`                                  | The amount of token to send in the transaction, denoted in the smallest cryptocurrency's magnitude For example in BTC, a tx with an 'amount' field of 1 will correspond to a tx corresponding to 0.00000001 BTC |
| `family`    | [`CRYPTO_ORG`](/spec/core/types.md#families) |                                                                                                                                                                                                                 |
| `fees?`     | `BigNumber`                                  |                                                                                                                                                                                                                 |
| `mode`      | `string`                                     |                                                                                                                                                                                                                 |
| `recipient` | `string`                                     | The address of the transaction's recipient                                                                                                                                                                      |

### RawCryptoOrgTransaction

| Name        | Type                                       | Description                                                                                                                                                                                                     |
| ----------- | ------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `amount`    | `string`                                   | The amount of token to send in the transaction, denoted in the smallest cryptocurrency's magnitude For example in BTC, a tx with an 'amount' field of 1 will correspond to a tx corresponding to 0.00000001 BTC |
| `family`    | [CRYPTO_ORG](/spec/core/types.md#families) |                                                                                                                                                                                                                 |
| `fees?`     | `string`                                   |                                                                                                                                                                                                                 |
| `mode`      | `string`                                   |                                                                                                                                                                                                                 |
| `recipient` | `string`                                   | The address of the transaction's recipient                                                                                                                                                                      |

### EthereumTransaction

| Name        | Type                                       | Description                                                                                                                                                                                                     |
| ----------- | ------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `amount`    | `BigNumber`                                | The amount of token to send in the transaction, denoted in the smallest cryptocurrency's magnitude For example in BTC, a tx with an 'amount' field of 1 will correspond to a tx corresponding to 0.00000001 BTC |
| `data?`     | `Buffer`                                   |                                                                                                                                                                                                                 |
| `family`    | [`ETHEREUM`](/spec/core/types.md#families) |                                                                                                                                                                                                                 |
| `gasLimit?` | `BigNumber`                                |                                                                                                                                                                                                                 |
| `gasPrice?` | `BigNumber`                                |                                                                                                                                                                                                                 |
| `nonce?`    | `number`                                   |                                                                                                                                                                                                                 |
| `recipient` | `string`                                   | The address of the transaction's recipient                                                                                                                                                                      |

### RawEthereumTransaction

| Name        | Type                                       | Description                                                                                                                                                                                                     |
| ----------- | ------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `amount`    | `string`                                   | The amount of token to send in the transaction, denoted in the smallest cryptocurrency's magnitude For example in BTC, a tx with an 'amount' field of 1 will correspond to a tx corresponding to 0.00000001 BTC |
| `data?`     | `string`                                   |                                                                                                                                                                                                                 |
| `family`    | [`ETHEREUM`](/spec/core/types.md#families) |                                                                                                                                                                                                                 |
| `gasLimit?` | `string`                                   |                                                                                                                                                                                                                 |
| `gasPrice?` | `string`                                   |                                                                                                                                                                                                                 |
| `nonce?`    | `number`                                   |                                                                                                                                                                                                                 |
| `recipient` | `string`                                   | The address of the transaction's recipient                                                                                                                                                                      |

### PolkadotTransaction

| Name        | Type                                                                 | Description                                                                                                                                                                                                     |
| ----------- | -------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `amount`    | `BigNumber`                                                          | The amount of token to send in the transaction, denoted in the smallest cryptocurrency's magnitude For example in BTC, a tx with an 'amount' field of 1 will correspond to a tx corresponding to 0.00000001 BTC |
| `family`    | [`POLKADOT`](/spec/core/types.md#families)                           |                                                                                                                                                                                                                 |
| `era?`      | `number`                                                             |                                                                                                                                                                                                                 |
| `fee?`      | `BigNumber`                                                          |                                                                                                                                                                                                                 |
| `mode`      | [`PolkadotOperationMode`](/spec/core/types.md#polkadotoperationmode) |                                                                                                                                                                                                                 |
| `recipient` | `string`                                                             | The address of the transaction's recipient                                                                                                                                                                      |

### RawPolkadotTransaction

| Name        | Type                                                               | Description                                                                                                                                                                                                     |
| ----------- | ------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `amount`    | `string`                                                           | The amount of token to send in the transaction, denoted in the smallest cryptocurrency's magnitude For example in BTC, a tx with an 'amount' field of 1 will correspond to a tx corresponding to 0.00000001 BTC |
| `family`    | [`POLKADOT`](/spec/core/types.md#families)                         |                                                                                                                                                                                                                 |
| `era?`      | `number`                                                           |                                                                                                                                                                                                                 |
| `fee?`      | `string`                                                           |                                                                                                                                                                                                                 |
| `mode`      | [PolkadotOperationMode](/spec/core/types.md#polkadotoperationmode) |                                                                                                                                                                                                                 |
| `recipient` | `string`                                                           | The address of the transaction's recipient                                                                                                                                                                      |

### RippleTransaction

| Name        | Type                                     | Description                                                                                                                                                                                                     |
| ----------- | ---------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `amount`    | `BigNumber`                              | The amount of token to send in the transaction, denoted in the smallest cryptocurrency's magnitude For example in BTC, a tx with an 'amount' field of 1 will correspond to a tx corresponding to 0.00000001 BTC |
| `family`    | [`RIPPLE`](/spec/core/types.md#families) |                                                                                                                                                                                                                 |
| `tag`       | `number`                                 |                                                                                                                                                                                                                 |
| `fee?`      | `BigNumber`                              |                                                                                                                                                                                                                 |
| `recipient` | `string`                                 | The address of the transaction's recipient                                                                                                                                                                      |

### RawRippleTransaction

| Name        | Type                                     | Description                                                                                                                                                                                                     |
| ----------- | ---------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| amount      | `string`                                 | The amount of token to send in the transaction, denoted in the smallest cryptocurrency's magnitude For example in BTC, a tx with an 'amount' field of 1 will correspond to a tx corresponding to 0.00000001 BTC |
| `family`    | [`RIPPLE`](/spec/core/types.md#families) |                                                                                                                                                                                                                 |
| `tag`       | `number`                                 |                                                                                                                                                                                                                 |
| `fee?`      | `string`                                 |                                                                                                                                                                                                                 |
| `recipient` | `string`                                 | The address of the transaction's recipient                                                                                                                                                                      |

### StellarTransaction

| Name         | Type                                      | Description                                                                                                                                                                                                     |
| ------------ | ----------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `amount`     | `BigNumber`                               | The amount of token to send in the transaction, denoted in the smallest cryptocurrency's magnitude For example in BTC, a tx with an 'amount' field of 1 will correspond to a tx corresponding to 0.00000001 BTC |
| `family`     | [`STELLAR`](/spec/core/types.md#families) |                                                                                                                                                                                                                 |
| `memoType?`  | [`StellarMemoType`](/spec/core/types.md#stellarmemotype)                                 |                                                                                                                                                                                                                 |
| `memoValue?` | `string`                                  |                                                                                                                                                                                                                 |
| `fees?`      | `BigNumber`                               |                                                                                                                                                                                                                 |
| `recipient`  | `string`                                  | The address of the transaction's recipient                                                                                                                                                                      |

### RawStellarTransaction

| Name         | Type                                    | Description                                                                                                                                                                                                     |
| ------------ | --------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `amount`     | `string`                                | The amount of token to send in the transaction, denoted in the smallest cryptocurrency's magnitude For example in BTC, a tx with an 'amount' field of 1 will correspond to a tx corresponding to 0.00000001 BTC |
| `family`     | [STELLAR](/spec/core/types.md#families) |                                                                                                                                                                                                                 |
| `memoType?`  | [`StellarMemoType`](/spec/core/types.md#stellarmemotype)                               |                                                                                                                                                                                                                 |
| `memoValue?` | `string`                                |                                                                                                                                                                                                                 |
| `fees?`      | `string`                                |                                                                                                                                                                                                                 |
| `recipient`  | `string`                                | The address of the transaction's recipient                                                                                                                                                                      |

### TezosTransaction

| Name        | Type                                                           | Description                                                                                                                                                                                                     |
| ----------- | -------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `amount`    | `BigNumber`                                                    | The amount of token to send in the transaction, denoted in the smallest cryptocurrency's magnitude For example in BTC, a tx with an 'amount' field of 1 will correspond to a tx corresponding to 0.00000001 BTC |
| `family`    | [`TEZOS`](/spec/core/types.md#families)                        |                                                                                                                                                                                                                 |
| `gasLimit?` | `BigNumber`                                                    |                                                                                                                                                                                                                 |
| `mode`      | [`TezosOperationMode`](/spec/core/types.md#tezosoperationmode) |                                                                                                                                                                                                                 |
| `fees?`     | `BigNumber`                                                    |                                                                                                                                                                                                                 |
| `recipient` | `string`                                                       | The address of the transaction's recipient                                                                                                                                                                      |

### RawTezosTransaction

| Name        | Type                                                         | Description                                                                                                                                                                                                     |
| ----------- | ------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `amount`    | `string`                                                     | The amount of token to send in the transaction, denoted in the smallest cryptocurrency's magnitude For example in BTC, a tx with an 'amount' field of 1 will correspond to a tx corresponding to 0.00000001 BTC |
| `family`    | [TEZOS](/spec/core/types.md#families)                        |                                                                                                                                                                                                                 |
| `gasLimit?` | `string`                                                     |                                                                                                                                                                                                                 |
| `mode`      | [TezosOperationMode](/spec/core/types.md#tezosoperationmode) |                                                                                                                                                                                                                 |
| `fees?`     | `string`                                                     |                                                                                                                                                                                                                 |
| `recipient` | `string`                                                     | The address of the transaction's recipient                                                                                                                                                                      |

### TronTransaction

| Name        | Type                                                         | Description                                                                                                                                                                                                     |
| ----------- | ------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `amount`    | `BigNumber`                                                  | The amount of token to send in the transaction, denoted in the smallest cryptocurrency's magnitude For example in BTC, a tx with an 'amount' field of 1 will correspond to a tx corresponding to 0.00000001 BTC |
| `family`    | [`TRON`](/spec/core/types.md#families)                       |                                                                                                                                                                                                                 |
| `duration?` | `number`                                                     |                                                                                                                                                                                                                 |
| `mode`      | [`TronOperationMode`](/spec/core/types.md#tronoperationmode) |                                                                                                                                                                                                                 |
| `resource?` | [`TronResource`](/spec/core/types.md#tronresource)           |                                                                                                                                                                                                                 |
| `recipient` | `string`                                                     | The address of the transaction's recipient                                                                                                                                                                      |

### RawTronTransaction

| Name        | Type                                                         | Description                                                                                                                                                                                                     |
| ----------- | ------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `amount`    | `string`                                                     | The amount of token to send in the transaction, denoted in the smallest cryptocurrency's magnitude For example in BTC, a tx with an 'amount' field of 1 will correspond to a tx corresponding to 0.00000001 BTC |
| `family`    | [`TRON`](/spec/core/types.md#families)                       |                                                                                                                                                                                                                 |
| `duration?` | number                                                       |                                                                                                                                                                                                                 |
| `mode`      | [`TronOperationMode`](/spec/core/types.md#tronoperationmode) |                                                                                                                                                                                                                 |
| `resource?` | [`TronResource`](/spec/core/types.md#tronresource)           |                                                                                                                                                                                                                 |
| `recipient` | `string`                                                     | The address of the transaction's recipient                                                                                                                                                                      |

## Enums

### CurrencyType

The available Currency types.

| Name           | Value            |
| -------------- | ---------------- |
| CryptoCurrency | `CryptoCurrency` |
| TokenCurrency  | `TokenCurrency`  |

### ExchangeType

Enum describing the different types of exchanges.

| Name | Value  |
| ---- | ------ |
| FUND | `0x00` |
| SELL | `0x01` |
| SWAP | `0x02` |

### FAMILIES

Supported coin families

| Name       | Value        |
| ---------- | ------------ |
| ALGORAND   | `algorand`   |
| BITCOIN    | `bitcoin`    |
| COSMOS     | `cosmos`     |
| CRYPTO_ORG | `crypto_org` |
| ETHEREUM   | `ethereum`   |
| POLKADOT   | `polkadot`   |
| RIPPLE     | `ripple`     |
| STELLAR    | `stellar`    |
| TEZOS      | `tezos`      |
| TRON       | `tron`       |

### FeesLevel

Abstract level of fees for a transaction

| Name   | Value    |
| ------ | -------- |
| Slow   | `slow`   |
| Medium | `medium` |
| Fast   | `fast`   |

### TokenStandard

Token standards

| Name  | Value   |
| ----- | ------- |
| ERC20 | `ERC20` |

## Account

A cryptocurrency account

| Name               | Type        | Description                                                                                                                                                                                                                        |
| :----------------- | :---------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `address`          | `string`    | The "next" public address where a user should receive funds. In the context of Bitcoin, the address is "renewed" each time funds are received in order to allow some privacy. In other blockchains, the address might never change |
| `balance`          | `BigNumber` | The total amount of assets that this account holds                                                                                                                                                                                 |
| `blockHeight`      | `number`    | Tracks the current blockchain block height                                                                                                                                                                                         |
| `currency`         | `string`    | The associated cryptocurrency id of the Account                                                                                                                                                                                    |
| `id`               | `string`    | The unique identifier of this account used internally by Ledger Live software                                                                                                                                                      |
| `lastSyncDate`     | `Date`      | The date of the last time a synchronization was performed. In other words, tracks how up-to-date the Account data is                                                                                                               |
| `name`             | `string`    | The account’s name set by the user.                                                                                                                                                                                                |
| `spendableBalance` | `BigNumber` | The amount of the balance that can be spent. Most of the time it will be equal to the balance, but this can vary in some blockchains                                                                                               |

## RawAccount

The raw representation of the [Account](/spec/core/types.md#account) type.

| Name               | Type     |
| :----------------- | :------- |
| `address`          | `string` |
| `balance`          | `string` |
| `blockHeight`      | `number` |
| `currency`         | `string` |
| `id`               | `string` |
| `lastSyncDate`     | `string` |
| `name`             | `string` |
| `spendableBalance` | `string` |

## TronOperationMode

`"send"` \| `"freeze"` \| `"unfreeze"` \| `"vote"` \| `"claimReward"`

## TronResource

`"BANDWIDTH"` \| `"ENERGY"`

## AlgorandOperationMode

`"send"` \| `"optIn"` \| `"claimReward"` \| `"optOut"`

## CosmosOperationMode

`"send"` \| `"delegate"` \| `"undelegate"` \| `"redelegate"` \| `"claimReward"` \| `"claimRewardCompound"`

## PolkadotOperationMode

`"send"` \| `"bond"` \| `"unbond"` \| `"rebond"` \| `"withdrawUnbonded"` \| `"setController"` \| `"nominate"` \| `"chill"` \| `"claimReward"`

## TezosOperationMode

`"send"` \| `"delegate"` \| `"undelegate"`

## StellarMemoType

`"MEMO_TEXT"` \| `"MEMO_ID"` \| `"MEMO_HASH"` \| `"MEMO_RETURN"`

## ApplicationDetails

Informations about a device application

| Name      | Type     | Description                         |
| :-------- | :------- | :---------------------------------- |
| `name`    | `string` | Name of the application             |
| `version` | `string` | Version of the application (SemVer) |

## BaseCurrency

Base currency model

| Name     | Type                                 | Description                                                             |
| :------- | :----------------------------------- | :---------------------------------------------------------------------- |
| `color`  | `string`                             | Used for UI                                                             |
| `id`     | `string`                             | The unique internal id of the currency                                  |
| `name`   | `string`                             | The display name of the currency                                        |
| `ticker` | `string`                             | The ticker name in exchanges / countervalue apis (e.g. BTC, ETH, USDT). |
| `units`  | [`Unit`](/spec/core/types.md#unit)[] | Array of available [units](/spec/core/types.md#unit) for the currency   |

## CryptoCurrency

Crypto currency model

[`BaseCurrency`](/spec/core/types.md#basecurrency) & { `family`: `string` ; `type`: [`CryptoCurrency`](/spec/core/types.md#currencytype) }

## Currency

[`CryptoCurrency`](/spec/core/types.md#currencytype) \| [`ERC20TokenCurrency`](/spec/core/types.md#erc20tokencurrency)

## DeviceInfo

Information about a device

| Name      | Type                                             | Description                                                |
| :-------- | :----------------------------------------------- | :--------------------------------------------------------- |
| `modelId` | [`DeviceModel`](/spec/core/types.md#devicemodel) | The [model](/spec/core/types.md#devicemodel) of the device |
| `version` | `string`                                         | The version of the firmware                                |

## ERC20TokenCurrency

ERC20 token currency model

[`TokenCurrency`](/spec/core/types.md#tokencurrency) & { `contract`: `string` ; `standard`: [`ERC20`](/spec/core/types.md#tokenstandard) }

## EcdsaSignature

The ECDSA signature of the [payload](/spec/core/types.md#exchangepayload)

`Buffer`

## ExchangeDeviceTxId

A transaction ID used to complete the exchange process

`string`

## ExchangePayload

Metadata used to describe a secure exchange between a Ledger device
and a partner (for sell, swap and funding)

`Buffer`

**`ref:`** https://github.com/LedgerHQ/app-exchange/blob/master/src/proto/protocol.proto

## RawSignedTransaction

The raw representation of a signed transaction returned by the Ledger Live platform

This type is returned by Ledger Live when signing with `signTransaction` and is only used as a payload by the `broadcastSignedTransaction` function to actually broadcast the transaction to the blockchain

| Name             | Type               |
| :--------------- | :----------------- |
| `expirationDate` | `string` \| `null` |
| `operation`      | `unknown`          |
| `signature`      | `string`           |
| `signatureRaw?`  | `unknown`          |

## TokenCurrency

Token currency model

[`BaseCurrency`](/spec/core/types.md#basecurrency) & { `parent`: `string` ; `type`: [`TokenCurrency`](/spec/core/types.md#tokencurrency) }

## Unit

A unit describes a given representation of a currency for humans. A currency can have many units, for instance, we can assume Euro have euros and cents. We can define Bitcoin to have: bitcoin, mBTC, bit, satoshi (but that's up to us really).

| Name        | Type     | Description                                                 |
| :---------- | :------- | :---------------------------------------------------------- |
| `code`      | `string` | String to use when formatting the unit. like 'BTC' or 'USD' |
| `magnitude` | `number` | Number of digits after the '.' in context of this unit      |
| `name`      | `string` | Display name of a given unit (example: satoshi)             |
