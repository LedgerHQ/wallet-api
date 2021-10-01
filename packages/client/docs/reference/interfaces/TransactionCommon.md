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

The amount of token to send in the transaction

#### Defined in

[types.ts:72](https://github.com/LedgerHQ/live-app-sdk/blob/72b3e13/src/types.ts#L72)

___

### recipient

• **recipient**: `string`

The address of the transaction's recipient

#### Defined in

[types.ts:76](https://github.com/LedgerHQ/live-app-sdk/blob/72b3e13/src/types.ts#L76)
