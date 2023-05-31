---
id: "HederaTransaction"
title: "Interface: HederaTransaction"
sidebar_label: "HederaTransaction"
sidebar_position: 0
custom_edit_url: null
---

Common fields for all cryptocurrency transactions

## Hierarchy

- [`TransactionCommon`](TransactionCommon.md)

  ↳ **`HederaTransaction`**

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

• `Readonly` **family**: ``"hedera"``

The family of the transaction

#### Overrides

[TransactionCommon](TransactionCommon.md).[family](TransactionCommon.md#family)

#### Defined in

[packages/core/src/families/hedera/types.ts:6](https://github.com/LedgerHQ/wallet-api/blob/main/packages/core/src/families/hedera/types.ts#L6)

___

### memo

• `Optional` **memo**: `string`

#### Defined in

[packages/core/src/families/hedera/types.ts:7](https://github.com/LedgerHQ/wallet-api/blob/main/packages/core/src/families/hedera/types.ts#L7)

___

### recipient

• **recipient**: `string`

The address of the transaction's recipient

#### Inherited from

[TransactionCommon](TransactionCommon.md).[recipient](TransactionCommon.md#recipient)

#### Defined in

[packages/core/src/families/types.ts:51](https://github.com/LedgerHQ/wallet-api/blob/main/packages/core/src/families/types.ts#L51)
