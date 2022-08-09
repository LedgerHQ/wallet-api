[@ledgerhq/live-app-sdk](../README.md) / [Exports](../modules.md) / AlgorandTransaction

# Interface: AlgorandTransaction

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

[types.ts:92](https://github.com/LedgerHQ/live-app-sdk/blob/65d1ed2/src/types.ts#L92)

___

### assetId

• `Optional` **assetId**: `string`

#### Defined in

[families/algorand/types.ts:14](https://github.com/LedgerHQ/live-app-sdk/blob/65d1ed2/src/families/algorand/types.ts#L14)

___

### family

• `Readonly` **family**: [`ALGORAND`](../enums/FAMILIES.md#algorand)

#### Defined in

[families/algorand/types.ts:11](https://github.com/LedgerHQ/live-app-sdk/blob/65d1ed2/src/families/algorand/types.ts#L11)

___

### fees

• `Optional` **fees**: `BigNumber`

#### Defined in

[families/algorand/types.ts:13](https://github.com/LedgerHQ/live-app-sdk/blob/65d1ed2/src/families/algorand/types.ts#L13)

___

### memo

• `Optional` **memo**: `string`

#### Defined in

[families/algorand/types.ts:15](https://github.com/LedgerHQ/live-app-sdk/blob/65d1ed2/src/families/algorand/types.ts#L15)

___

### mode

• **mode**: [`AlgorandOperationMode`](../modules.md#algorandoperationmode)

#### Defined in

[families/algorand/types.ts:12](https://github.com/LedgerHQ/live-app-sdk/blob/65d1ed2/src/families/algorand/types.ts#L12)

___

### recipient

• **recipient**: `string`

The address of the transaction's recipient

#### Inherited from

[TransactionCommon](TransactionCommon.md).[recipient](TransactionCommon.md#recipient)

#### Defined in

[types.ts:96](https://github.com/LedgerHQ/live-app-sdk/blob/65d1ed2/src/types.ts#L96)
