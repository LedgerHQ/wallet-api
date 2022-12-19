[@ledgerhq/wallet-api-client](../README.md) / [Exports](../modules.md) / AlgorandTransaction

# Interface: AlgorandTransaction

Common fields for all cryptocurrency transactions

## Hierarchy

- [`TransactionCommon`](TransactionCommon.md)

  ↳ **`AlgorandTransaction`**

## Table of contents

### Properties

- [amount](AlgorandTransaction.md#amount)
- [assetId](AlgorandTransaction.md#assetid)
- [family](AlgorandTransaction.md#family)
- [fees](AlgorandTransaction.md#fees)
- [memo](AlgorandTransaction.md#memo)
- [mode](AlgorandTransaction.md#mode)
- [recipient](AlgorandTransaction.md#recipient)

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

### assetId

• `Optional` **assetId**: `string`

#### Defined in

packages/core/lib/families/algorand/types.d.ts:10

___

### family

• `Readonly` **family**: ``"algorand"``

The family of the transaction

#### Overrides

[TransactionCommon](TransactionCommon.md).[family](TransactionCommon.md#family)

#### Defined in

packages/core/lib/families/algorand/types.d.ts:7

___

### fees

• `Optional` **fees**: `BigNumber`

#### Defined in

packages/core/lib/families/algorand/types.d.ts:9

___

### memo

• `Optional` **memo**: `string`

#### Defined in

packages/core/lib/families/algorand/types.d.ts:11

___

### mode

• **mode**: ``"send"`` \| ``"optIn"`` \| ``"claimReward"`` \| ``"optOut"``

#### Defined in

packages/core/lib/families/algorand/types.d.ts:8

___

### recipient

• **recipient**: `string`

The address of the transaction's recipient

#### Inherited from

[TransactionCommon](TransactionCommon.md).[recipient](TransactionCommon.md#recipient)

#### Defined in

packages/core/lib/families/types.d.ts:41
