---
id: "EthereumTransaction"
title: "Interface: EthereumTransaction"
sidebar_label: "EthereumTransaction"
sidebar_position: 0
custom_edit_url: null
---

Common fields for all cryptocurrency transactions

## Hierarchy

- [`TransactionCommon`](TransactionCommon.md)

  ↳ **`EthereumTransaction`**

## Properties

### amount

• **amount**: `BigNumber`

The amount of token to send in the transaction, denoted in the smallest cryptocurrency's magnitude
For example in BTC, a tx with an 'amount' field of 1 will correspond to a tx corresponding to 0.00000001 BTC

#### Inherited from

[TransactionCommon](TransactionCommon.md).[amount](TransactionCommon.md#amount)

#### Defined in

[packages/core/src/families/types.ts:47](https://github.com/LedgerHQ/wallet-api/blob/main/packages/core/src/families/types.ts#L47)

___

### data

• `Optional` **data**: `Buffer`

#### Defined in

[packages/core/src/families/ethereum/types.ts:9](https://github.com/LedgerHQ/wallet-api/blob/main/packages/core/src/families/ethereum/types.ts#L9)

___

### family

• `Readonly` **family**: ``"ethereum"``

The family of the transaction

#### Overrides

[TransactionCommon](TransactionCommon.md).[family](TransactionCommon.md#family)

#### Defined in

[packages/core/src/families/ethereum/types.ts:7](https://github.com/LedgerHQ/wallet-api/blob/main/packages/core/src/families/ethereum/types.ts#L7)

___

### gasLimit

• `Optional` **gasLimit**: `BigNumber`

#### Defined in

[packages/core/src/families/ethereum/types.ts:11](https://github.com/LedgerHQ/wallet-api/blob/main/packages/core/src/families/ethereum/types.ts#L11)

___

### gasPrice

• `Optional` **gasPrice**: `BigNumber`

#### Defined in

[packages/core/src/families/ethereum/types.ts:10](https://github.com/LedgerHQ/wallet-api/blob/main/packages/core/src/families/ethereum/types.ts#L10)

___

### maxFeePerGas

• `Optional` **maxFeePerGas**: `BigNumber`

#### Defined in

[packages/core/src/families/ethereum/types.ts:13](https://github.com/LedgerHQ/wallet-api/blob/main/packages/core/src/families/ethereum/types.ts#L13)

___

### maxPriorityFeePerGas

• `Optional` **maxPriorityFeePerGas**: `BigNumber`

#### Defined in

[packages/core/src/families/ethereum/types.ts:12](https://github.com/LedgerHQ/wallet-api/blob/main/packages/core/src/families/ethereum/types.ts#L12)

___

### nonce

• `Optional` **nonce**: `number`

#### Defined in

[packages/core/src/families/ethereum/types.ts:8](https://github.com/LedgerHQ/wallet-api/blob/main/packages/core/src/families/ethereum/types.ts#L8)

___

### recipient

• **recipient**: `string`

The address of the transaction's recipient

#### Inherited from

[TransactionCommon](TransactionCommon.md).[recipient](TransactionCommon.md#recipient)

#### Defined in

[packages/core/src/families/types.ts:51](https://github.com/LedgerHQ/wallet-api/blob/main/packages/core/src/families/types.ts#L51)
