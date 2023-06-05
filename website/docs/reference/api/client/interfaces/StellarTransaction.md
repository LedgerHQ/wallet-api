---
id: "StellarTransaction"
title: "Interface: StellarTransaction"
sidebar_label: "StellarTransaction"
sidebar_position: 0
custom_edit_url: null
---

Common fields for all cryptocurrency transactions

## Hierarchy

- [`TransactionCommon`](TransactionCommon.md)

  ↳ **`StellarTransaction`**

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

• `Readonly` **family**: ``"stellar"``

The family of the transaction

#### Overrides

[TransactionCommon](TransactionCommon.md).[family](TransactionCommon.md#family)

#### Defined in

[packages/core/src/families/stellar/types.ts:10](https://github.com/LedgerHQ/wallet-api/blob/main/packages/core/src/families/stellar/types.ts#L10)

___

### fees

• `Optional` **fees**: `BigNumber`

#### Defined in

[packages/core/src/families/stellar/types.ts:11](https://github.com/LedgerHQ/wallet-api/blob/main/packages/core/src/families/stellar/types.ts#L11)

___

### memoType

• `Optional` **memoType**: ``"MEMO_TEXT"`` \| ``"MEMO_ID"`` \| ``"MEMO_HASH"`` \| ``"MEMO_RETURN"``

#### Defined in

[packages/core/src/families/stellar/types.ts:12](https://github.com/LedgerHQ/wallet-api/blob/main/packages/core/src/families/stellar/types.ts#L12)

___

### memoValue

• `Optional` **memoValue**: `string`

#### Defined in

[packages/core/src/families/stellar/types.ts:13](https://github.com/LedgerHQ/wallet-api/blob/main/packages/core/src/families/stellar/types.ts#L13)

___

### recipient

• **recipient**: `string`

The address of the transaction's recipient

#### Inherited from

[TransactionCommon](TransactionCommon.md).[recipient](TransactionCommon.md#recipient)

#### Defined in

[packages/core/src/families/types.ts:51](https://github.com/LedgerHQ/wallet-api/blob/main/packages/core/src/families/types.ts#L51)
