[@ledgerhq/wallet-api-client](../README.md) / [Exports](../modules.md) / TransactionCommon

# Interface: TransactionCommon

Common fields for all cryptocurrency transactions

## Hierarchy

- **`TransactionCommon`**

  ↳ [`AlgorandTransaction`](AlgorandTransaction.md)

  ↳ [`BitcoinTransaction`](BitcoinTransaction.md)

  ↳ [`CosmosTransaction`](CosmosTransaction.md)

  ↳ [`CryptoOrgTransaction`](CryptoOrgTransaction.md)

  ↳ [`EthereumTransaction`](EthereumTransaction.md)

  ↳ [`PolkadotTransaction`](PolkadotTransaction.md)

  ↳ [`RippleTransaction`](RippleTransaction.md)

  ↳ [`StellarTransaction`](StellarTransaction.md)

  ↳ [`TezosTransaction`](TezosTransaction.md)

  ↳ [`TronTransaction`](TronTransaction.md)

## Table of contents

### Properties

- [amount](TransactionCommon.md#amount)
- [family](TransactionCommon.md#family)
- [recipient](TransactionCommon.md#recipient)

## Properties

### amount

• **amount**: `BigNumber`

The amount of token to send in the transaction, denoted in the smallest cryptocurrency's magnitude
For example in BTC, a tx with an 'amount' field of 1 will correspond to a tx corresponding to 0.00000001 BTC

#### Defined in

packages/core/lib/families/types.d.ts:37

___

### family

• **family**: ``"algorand"`` \| ``"bitcoin"`` \| ``"cosmos"`` \| ``"crypto_org"`` \| ``"ethereum"`` \| ``"polkadot"`` \| ``"ripple"`` \| ``"stellar"`` \| ``"tezos"`` \| ``"tron"``

The family of the transaction

#### Defined in

packages/core/lib/families/types.d.ts:32

___

### recipient

• **recipient**: `string`

The address of the transaction's recipient

#### Defined in

packages/core/lib/families/types.d.ts:41
