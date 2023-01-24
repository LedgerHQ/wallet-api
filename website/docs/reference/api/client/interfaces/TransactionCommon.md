---
id: "TransactionCommon"
title: "Interface: TransactionCommon"
sidebar_label: "TransactionCommon"
sidebar_position: 0
custom_edit_url: null
---

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

## Properties

### amount

• **amount**: `BigNumber`

The amount of token to send in the transaction, denoted in the smallest cryptocurrency's magnitude
For example in BTC, a tx with an 'amount' field of 1 will correspond to a tx corresponding to 0.00000001 BTC

#### Defined in

packages/core/lib/families/types.d.ts:37

___

### family

• **family**: ``"bitcoin"`` \| ``"ethereum"`` \| ``"algorand"`` \| ``"crypto_org"`` \| ``"ripple"`` \| ``"cosmos"`` \| ``"tezos"`` \| ``"polkadot"`` \| ``"stellar"`` \| ``"tron"``

The family of the transaction

#### Defined in

packages/core/lib/families/types.d.ts:32

___

### recipient

• **recipient**: `string`

The address of the transaction's recipient

#### Defined in

packages/core/lib/families/types.d.ts:41
