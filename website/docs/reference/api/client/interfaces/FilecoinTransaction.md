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

packages/core/lib/families/types.d.ts:41

___

### data

• `Optional` **data**: `Buffer`

#### Defined in

packages/core/lib/families/filecoin/types.d.ts:9

___

### family

• `Readonly` **family**: ``"filecoin"``

The family of the transaction

#### Overrides

[TransactionCommon](TransactionCommon.md).[family](TransactionCommon.md#family)

#### Defined in

packages/core/lib/families/filecoin/types.d.ts:7

___

### gasFeeCap

• **gasFeeCap**: `BigNumber`

#### Defined in

packages/core/lib/families/filecoin/types.d.ts:14

___

### gasLimit

• **gasLimit**: `BigNumber`

#### Defined in

packages/core/lib/families/filecoin/types.d.ts:13

___

### gasPremium

• **gasPremium**: `BigNumber`

#### Defined in

packages/core/lib/families/filecoin/types.d.ts:15

___

### method

• **method**: `number`

#### Defined in

packages/core/lib/families/filecoin/types.d.ts:10

___

### nonce

• **nonce**: `number`

#### Defined in

packages/core/lib/families/filecoin/types.d.ts:8

___

### params

• `Optional` **params**: `string`

#### Defined in

packages/core/lib/families/filecoin/types.d.ts:12

___

### recipient

• **recipient**: `string`

The address of the transaction's recipient

#### Inherited from

[TransactionCommon](TransactionCommon.md).[recipient](TransactionCommon.md#recipient)

#### Defined in

packages/core/lib/families/types.d.ts:45

___

### version

• **version**: `number`

#### Defined in

packages/core/lib/families/filecoin/types.d.ts:11
