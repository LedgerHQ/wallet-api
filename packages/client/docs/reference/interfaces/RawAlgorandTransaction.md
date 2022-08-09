[@ledgerhq/live-app-sdk](../README.md) / [Exports](../modules.md) / RawAlgorandTransaction

# Interface: RawAlgorandTransaction

## Hierarchy

- [`RawTransactionCommon`](RawTransactionCommon.md)

  ↳ **`RawAlgorandTransaction`**

## Table of contents

### Properties

- [amount](RawAlgorandTransaction.md#amount)
- [assetId](RawAlgorandTransaction.md#assetid)
- [family](RawAlgorandTransaction.md#family)
- [fees](RawAlgorandTransaction.md#fees)
- [memo](RawAlgorandTransaction.md#memo)
- [mode](RawAlgorandTransaction.md#mode)
- [recipient](RawAlgorandTransaction.md#recipient)

## Properties

### amount

• **amount**: `string`

#### Inherited from

[RawTransactionCommon](RawTransactionCommon.md).[amount](RawTransactionCommon.md#amount)

#### Defined in

[rawTypes.ts:35](https://github.com/LedgerHQ/live-app-sdk/blob/65d1ed2/src/rawTypes.ts#L35)

___

### assetId

• `Optional` **assetId**: `string`

#### Defined in

[families/algorand/types.ts:22](https://github.com/LedgerHQ/live-app-sdk/blob/65d1ed2/src/families/algorand/types.ts#L22)

___

### family

• `Readonly` **family**: [`ALGORAND`](../enums/FAMILIES.md#algorand)

#### Overrides

[RawTransactionCommon](RawTransactionCommon.md).[family](RawTransactionCommon.md#family)

#### Defined in

[families/algorand/types.ts:19](https://github.com/LedgerHQ/live-app-sdk/blob/65d1ed2/src/families/algorand/types.ts#L19)

___

### fees

• `Optional` **fees**: `string`

#### Defined in

[families/algorand/types.ts:21](https://github.com/LedgerHQ/live-app-sdk/blob/65d1ed2/src/families/algorand/types.ts#L21)

___

### memo

• `Optional` **memo**: `string`

#### Defined in

[families/algorand/types.ts:23](https://github.com/LedgerHQ/live-app-sdk/blob/65d1ed2/src/families/algorand/types.ts#L23)

___

### mode

• **mode**: [`AlgorandOperationMode`](../modules.md#algorandoperationmode)

#### Defined in

[families/algorand/types.ts:20](https://github.com/LedgerHQ/live-app-sdk/blob/65d1ed2/src/families/algorand/types.ts#L20)

___

### recipient

• **recipient**: `string`

#### Inherited from

[RawTransactionCommon](RawTransactionCommon.md).[recipient](RawTransactionCommon.md#recipient)

#### Defined in

[rawTypes.ts:36](https://github.com/LedgerHQ/live-app-sdk/blob/65d1ed2/src/rawTypes.ts#L36)
