---
id: "FilecoinTransaction"
title: "Interface: FilecoinTransaction"
sidebar_label: "FilecoinTransaction"
sidebar_position: 0
custom_edit_url: null
---

Common fields for all cryptocurrency transactions

## Hierarchy

- [`TransactionCommon`](TransactionCommon.md)

  ↳ **`FilecoinTransaction`**

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

[packages/core/src/families/filecoin/types.ts:9](https://github.com/LedgerHQ/wallet-api/blob/main/packages/core/src/families/filecoin/types.ts#L9)

___

### family

• `Readonly` **family**: ``"filecoin"``

The family of the transaction

#### Overrides

[TransactionCommon](TransactionCommon.md).[family](TransactionCommon.md#family)

#### Defined in

[packages/core/src/families/filecoin/types.ts:7](https://github.com/LedgerHQ/wallet-api/blob/main/packages/core/src/families/filecoin/types.ts#L7)

___

### gasFeeCap

• **gasFeeCap**: `BigNumber`

#### Defined in

[packages/core/src/families/filecoin/types.ts:14](https://github.com/LedgerHQ/wallet-api/blob/main/packages/core/src/families/filecoin/types.ts#L14)

___

### gasLimit

• **gasLimit**: `BigNumber`

#### Defined in

[packages/core/src/families/filecoin/types.ts:13](https://github.com/LedgerHQ/wallet-api/blob/main/packages/core/src/families/filecoin/types.ts#L13)

___

### gasPremium

• **gasPremium**: `BigNumber`

#### Defined in

[packages/core/src/families/filecoin/types.ts:15](https://github.com/LedgerHQ/wallet-api/blob/main/packages/core/src/families/filecoin/types.ts#L15)

___

### method

• **method**: `number`

#### Defined in

[packages/core/src/families/filecoin/types.ts:10](https://github.com/LedgerHQ/wallet-api/blob/main/packages/core/src/families/filecoin/types.ts#L10)

___

### nonce

• **nonce**: `number`

#### Defined in

[packages/core/src/families/filecoin/types.ts:8](https://github.com/LedgerHQ/wallet-api/blob/main/packages/core/src/families/filecoin/types.ts#L8)

___

### params

• `Optional` **params**: `string`

#### Defined in

[packages/core/src/families/filecoin/types.ts:12](https://github.com/LedgerHQ/wallet-api/blob/main/packages/core/src/families/filecoin/types.ts#L12)

___

### recipient

• **recipient**: `string`

The address of the transaction's recipient

#### Inherited from

[TransactionCommon](TransactionCommon.md).[recipient](TransactionCommon.md#recipient)

#### Defined in

[packages/core/src/families/types.ts:51](https://github.com/LedgerHQ/wallet-api/blob/main/packages/core/src/families/types.ts#L51)

___

### version

• **version**: `number`

#### Defined in

[packages/core/src/families/filecoin/types.ts:11](https://github.com/LedgerHQ/wallet-api/blob/main/packages/core/src/families/filecoin/types.ts#L11)
