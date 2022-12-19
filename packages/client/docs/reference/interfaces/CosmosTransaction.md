[@ledgerhq/wallet-api-client](../README.md) / [Exports](../modules.md) / CosmosTransaction

# Interface: CosmosTransaction

Common fields for all cryptocurrency transactions

## Hierarchy

- [`TransactionCommon`](TransactionCommon.md)

  ↳ **`CosmosTransaction`**

## Table of contents

### Properties

- [amount](CosmosTransaction.md#amount)
- [family](CosmosTransaction.md#family)
- [fees](CosmosTransaction.md#fees)
- [gas](CosmosTransaction.md#gas)
- [memo](CosmosTransaction.md#memo)
- [mode](CosmosTransaction.md#mode)
- [recipient](CosmosTransaction.md#recipient)

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

• `Readonly` **family**: ``"cosmos"``

The family of the transaction

#### Overrides

[TransactionCommon](TransactionCommon.md).[family](TransactionCommon.md#family)

#### Defined in

packages/core/lib/families/cosmos/types.d.ts:7

___

### fees

• `Optional` **fees**: `BigNumber`

#### Defined in

packages/core/lib/families/cosmos/types.d.ts:9

___

### gas

• `Optional` **gas**: `BigNumber`

#### Defined in

packages/core/lib/families/cosmos/types.d.ts:10

___

### memo

• `Optional` **memo**: `string`

#### Defined in

packages/core/lib/families/cosmos/types.d.ts:11

___

### mode

• **mode**: ``"send"`` \| ``"claimReward"`` \| ``"delegate"`` \| ``"undelegate"`` \| ``"redelegate"`` \| ``"claimRewardCompound"``

#### Defined in

packages/core/lib/families/cosmos/types.d.ts:8

___

### recipient

• **recipient**: `string`

The address of the transaction's recipient

#### Inherited from

[TransactionCommon](TransactionCommon.md).[recipient](TransactionCommon.md#recipient)

#### Defined in

packages/core/lib/families/types.d.ts:41
