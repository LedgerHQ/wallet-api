---
id: "BitcoinTransaction"
title: "Interface: BitcoinTransaction"
sidebar_label: "BitcoinTransaction"
sidebar_position: 0
custom_edit_url: null
---

Common fields for all cryptocurrency transactions

## Hierarchy

- [`TransactionCommon`](TransactionCommon.md)

  ↳ **`BitcoinTransaction`**

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

### family

• `Readonly` **family**: ``"bitcoin"``

The family of the transaction

#### Overrides

[TransactionCommon](TransactionCommon.md).[family](TransactionCommon.md#family)

#### Defined in

[packages/core/src/families/bitcoin/types.ts:7](https://github.com/LedgerHQ/wallet-api/blob/main/packages/core/src/families/bitcoin/types.ts#L7)

___

### feePerByte

• `Optional` **feePerByte**: `BigNumber`

#### Defined in

[packages/core/src/families/bitcoin/types.ts:8](https://github.com/LedgerHQ/wallet-api/blob/main/packages/core/src/families/bitcoin/types.ts#L8)

___

### opReturnData

• `Optional` **opReturnData**: `Buffer`

#### Defined in

[packages/core/src/families/bitcoin/types.ts:9](https://github.com/LedgerHQ/wallet-api/blob/main/packages/core/src/families/bitcoin/types.ts#L9)

___

### recipient

• **recipient**: `string`

The address of the transaction's recipient

#### Inherited from

[TransactionCommon](TransactionCommon.md).[recipient](TransactionCommon.md#recipient)

#### Defined in

[packages/core/src/families/types.ts:51](https://github.com/LedgerHQ/wallet-api/blob/main/packages/core/src/families/types.ts#L51)
