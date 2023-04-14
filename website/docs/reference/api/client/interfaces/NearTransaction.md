---
id: "NearTransaction"
title: "Interface: NearTransaction"
sidebar_label: "NearTransaction"
sidebar_position: 0
custom_edit_url: null
---

Common fields for all cryptocurrency transactions

## Hierarchy

- [`TransactionCommon`](TransactionCommon.md)

  ↳ **`NearTransaction`**

## Properties

### amount

• **amount**: `BigNumber`

The amount of token to send in the transaction, denoted in the smallest cryptocurrency's magnitude
For example in BTC, a tx with an 'amount' field of 1 will correspond to a tx corresponding to 0.00000001 BTC

#### Inherited from

[TransactionCommon](TransactionCommon.md).[amount](TransactionCommon.md#amount)

#### Defined in

packages/core/lib/families/types.d.ts:45

___

### family

• `Readonly` **family**: ``"near"``

The family of the transaction

#### Overrides

[TransactionCommon](TransactionCommon.md).[family](TransactionCommon.md#family)

#### Defined in

packages/core/lib/families/near/types.d.ts:6

___

### fees

• `Optional` **fees**: `BigNumber`

#### Defined in

packages/core/lib/families/near/types.d.ts:8

___

### mode

• **mode**: `string`

#### Defined in

packages/core/lib/families/near/types.d.ts:7

___

### recipient

• **recipient**: `string`

The address of the transaction's recipient

#### Inherited from

[TransactionCommon](TransactionCommon.md).[recipient](TransactionCommon.md#recipient)

#### Defined in

packages/core/lib/families/types.d.ts:49
