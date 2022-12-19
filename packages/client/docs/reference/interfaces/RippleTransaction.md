[@ledgerhq/wallet-api-client](../README.md) / [Exports](../modules.md) / RippleTransaction

# Interface: RippleTransaction

Common fields for all cryptocurrency transactions

## Hierarchy

- [`TransactionCommon`](TransactionCommon.md)

  ↳ **`RippleTransaction`**

## Table of contents

### Properties

- [amount](RippleTransaction.md#amount)
- [family](RippleTransaction.md#family)
- [fee](RippleTransaction.md#fee)
- [recipient](RippleTransaction.md#recipient)
- [tag](RippleTransaction.md#tag)

## Properties

### amount

• **amount**: `BigNumber`

The amount of token to send in the transaction, denoted in the smallest cryptocurrency's magnitude
For example in BTC, a tx with an 'amount' field of 1 will correspond to a tx corresponding to 0.00000001 BTC

#### Inherited from

[TransactionCommon](TransactionCommon.md).[amount](TransactionCommon.md#amount)

#### Defined in

packages/core/lib/families/types.d.ts:37

___

### family

• `Readonly` **family**: ``"ripple"``

The family of the transaction

#### Overrides

[TransactionCommon](TransactionCommon.md).[family](TransactionCommon.md#family)

#### Defined in

packages/core/lib/families/ripple/types.d.ts:6

___

### fee

• `Optional` **fee**: `BigNumber`

#### Defined in

packages/core/lib/families/ripple/types.d.ts:7

___

### recipient

• **recipient**: `string`

The address of the transaction's recipient

#### Inherited from

[TransactionCommon](TransactionCommon.md).[recipient](TransactionCommon.md#recipient)

#### Defined in

packages/core/lib/families/types.d.ts:41

___

### tag

• **tag**: `number`

#### Defined in

packages/core/lib/families/ripple/types.d.ts:8
