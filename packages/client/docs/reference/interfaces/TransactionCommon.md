[@ledgerhq/live-app-sdk](../README.md) / [Exports](../modules.md) / TransactionCommon

# Interface: TransactionCommon

Common fields for all cryptocurrency transactions

## Hierarchy

- **`TransactionCommon`**

  ↳ [`EthereumTransaction`](EthereumTransaction.md)

  ↳ [`BitcoinTransaction`](BitcoinTransaction.md)

  ↳ [`AlgorandTransaction`](AlgorandTransaction.md)

  ↳ [`CosmosTransaction`](CosmosTransaction.md)

  ↳ [`CryptoOrgTransaction`](CryptoOrgTransaction.md)

  ↳ [`PolkadotTransaction`](PolkadotTransaction.md)

  ↳ [`RippleTransaction`](RippleTransaction.md)

  ↳ [`StellarTransaction`](StellarTransaction.md)

  ↳ [`TezosTransaction`](TezosTransaction.md)

  ↳ [`TronTransaction`](TronTransaction.md)

## Table of contents

### Properties

- [amount](TransactionCommon.md#amount)
- [recipient](TransactionCommon.md#recipient)

## Properties

### amount

• **amount**: `BigNumber`

The amount of token to send in the transaction, denoted in the smallest cryptocurrency's magnitude
For example in BTC, a tx with an 'amount' field of 1 will correspond to a tx corresponding to 0.00000001 BTC

#### Defined in

[types.ts:73](https://github.com/LedgerHQ/live-app-sdk/blob/dc89379/src/types.ts#L73)

___

### recipient

• **recipient**: `string`

The address of the transaction's recipient

#### Defined in

[types.ts:77](https://github.com/LedgerHQ/live-app-sdk/blob/dc89379/src/types.ts#L77)
