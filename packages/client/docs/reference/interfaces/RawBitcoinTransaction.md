[@ledgerhq/live-app-sdk](../README.md) / [Exports](../modules.md) / RawBitcoinTransaction

# Interface: RawBitcoinTransaction

## Hierarchy

- [`RawTransactionCommon`](RawTransactionCommon.md)

  ↳ **`RawBitcoinTransaction`**

## Table of contents

### Properties

- [amount](RawBitcoinTransaction.md#amount)
- [family](RawBitcoinTransaction.md#family)
- [feePerByte](RawBitcoinTransaction.md#feeperbyte)
- [recipient](RawBitcoinTransaction.md#recipient)

## Properties

### amount

• **amount**: `string`

#### Inherited from

[RawTransactionCommon](RawTransactionCommon.md).[amount](RawTransactionCommon.md#amount)

#### Defined in

[rawTypes.ts:35](https://github.com/LedgerHQ/live-app-sdk/blob/7a3b814/src/rawTypes.ts#L35)

___

### family

• `Readonly` **family**: [`BITCOIN`](../enums/FAMILIES.md#bitcoin)

#### Overrides

[RawTransactionCommon](RawTransactionCommon.md).[family](RawTransactionCommon.md#family)

#### Defined in

[families/bitcoin/types.ts:14](https://github.com/LedgerHQ/live-app-sdk/blob/7a3b814/src/families/bitcoin/types.ts#L14)

___

### feePerByte

• `Optional` **feePerByte**: `string`

#### Defined in

[families/bitcoin/types.ts:15](https://github.com/LedgerHQ/live-app-sdk/blob/7a3b814/src/families/bitcoin/types.ts#L15)

___

### recipient

• **recipient**: `string`

#### Inherited from

[RawTransactionCommon](RawTransactionCommon.md).[recipient](RawTransactionCommon.md#recipient)

#### Defined in

[rawTypes.ts:36](https://github.com/LedgerHQ/live-app-sdk/blob/7a3b814/src/rawTypes.ts#L36)
