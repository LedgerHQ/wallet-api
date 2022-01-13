[@ledgerhq/live-app-sdk](../README.md) / [Exports](../modules.md) / CosmosTransaction

# Interface: CosmosTransaction

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

[types.ts:77](https://github.com/LedgerHQ/live-app-sdk/blob/1d8d8d5/src/types.ts#L77)

___

### family

• `Readonly` **family**: [`COSMOS`](../enums/FAMILIES.md#cosmos)

#### Defined in

[families/cosmos/types.ts:17](https://github.com/LedgerHQ/live-app-sdk/blob/1d8d8d5/src/families/cosmos/types.ts#L17)

___

### fees

• `Optional` **fees**: `BigNumber`

#### Defined in

[families/cosmos/types.ts:19](https://github.com/LedgerHQ/live-app-sdk/blob/1d8d8d5/src/families/cosmos/types.ts#L19)

___

### gas

• `Optional` **gas**: `BigNumber`

#### Defined in

[families/cosmos/types.ts:20](https://github.com/LedgerHQ/live-app-sdk/blob/1d8d8d5/src/families/cosmos/types.ts#L20)

___

### memo

• `Optional` **memo**: `string`

#### Defined in

[families/cosmos/types.ts:21](https://github.com/LedgerHQ/live-app-sdk/blob/1d8d8d5/src/families/cosmos/types.ts#L21)

___

### mode

• **mode**: [`CosmosOperationMode`](../modules.md#cosmosoperationmode)

#### Defined in

[families/cosmos/types.ts:18](https://github.com/LedgerHQ/live-app-sdk/blob/1d8d8d5/src/families/cosmos/types.ts#L18)

___

### recipient

• **recipient**: `string`

The address of the transaction's recipient

#### Inherited from

[TransactionCommon](TransactionCommon.md).[recipient](TransactionCommon.md#recipient)

#### Defined in

[types.ts:81](https://github.com/LedgerHQ/live-app-sdk/blob/1d8d8d5/src/types.ts#L81)
