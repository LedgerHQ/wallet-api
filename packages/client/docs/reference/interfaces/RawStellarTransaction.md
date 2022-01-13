[@ledgerhq/live-app-sdk](../README.md) / [Exports](../modules.md) / RawStellarTransaction

# Interface: RawStellarTransaction

## Hierarchy

- [`RawTransactionCommon`](RawTransactionCommon.md)

  ↳ **`RawStellarTransaction`**

## Table of contents

### Properties

- [amount](RawStellarTransaction.md#amount)
- [family](RawStellarTransaction.md#family)
- [fees](RawStellarTransaction.md#fees)
- [memoType](RawStellarTransaction.md#memotype)
- [memoValue](RawStellarTransaction.md#memovalue)
- [recipient](RawStellarTransaction.md#recipient)

## Properties

### amount

• **amount**: `string`

#### Inherited from

[RawTransactionCommon](RawTransactionCommon.md).[amount](RawTransactionCommon.md#amount)

#### Defined in

[rawTypes.ts:35](https://github.com/LedgerHQ/live-app-sdk/blob/1d8d8d5/src/rawTypes.ts#L35)

___

### family

• `Readonly` **family**: [`STELLAR`](../enums/FAMILIES.md#stellar)

#### Overrides

[RawTransactionCommon](RawTransactionCommon.md).[family](RawTransactionCommon.md#family)

#### Defined in

[families/stellar/types.ts:16](https://github.com/LedgerHQ/live-app-sdk/blob/1d8d8d5/src/families/stellar/types.ts#L16)

___

### fees

• `Optional` **fees**: `string`

#### Defined in

[families/stellar/types.ts:17](https://github.com/LedgerHQ/live-app-sdk/blob/1d8d8d5/src/families/stellar/types.ts#L17)

___

### memoType

• `Optional` **memoType**: `string`

#### Defined in

[families/stellar/types.ts:18](https://github.com/LedgerHQ/live-app-sdk/blob/1d8d8d5/src/families/stellar/types.ts#L18)

___

### memoValue

• `Optional` **memoValue**: `string`

#### Defined in

[families/stellar/types.ts:19](https://github.com/LedgerHQ/live-app-sdk/blob/1d8d8d5/src/families/stellar/types.ts#L19)

___

### recipient

• **recipient**: `string`

#### Inherited from

[RawTransactionCommon](RawTransactionCommon.md).[recipient](RawTransactionCommon.md#recipient)

#### Defined in

[rawTypes.ts:36](https://github.com/LedgerHQ/live-app-sdk/blob/1d8d8d5/src/rawTypes.ts#L36)
