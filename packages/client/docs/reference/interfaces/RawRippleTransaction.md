[@ledgerhq/live-app-sdk](../README.md) / [Exports](../modules.md) / RawRippleTransaction

# Interface: RawRippleTransaction

## Hierarchy

- [`RawTransactionCommon`](RawTransactionCommon.md)

  ↳ **`RawRippleTransaction`**

## Table of contents

### Properties

- [amount](RawRippleTransaction.md#amount)
- [family](RawRippleTransaction.md#family)
- [fee](RawRippleTransaction.md#fee)
- [recipient](RawRippleTransaction.md#recipient)
- [tag](RawRippleTransaction.md#tag)

## Properties

### amount

• **amount**: `string`

#### Inherited from

[RawTransactionCommon](RawTransactionCommon.md).[amount](RawTransactionCommon.md#amount)

#### Defined in

[rawTypes.ts:35](https://github.com/LedgerHQ/live-app-sdk/blob/main/src/rawTypes.ts#L35)

___

### family

• `Readonly` **family**: [`RIPPLE`](../enums/FAMILIES.md#ripple)

#### Overrides

[RawTransactionCommon](RawTransactionCommon.md).[family](RawTransactionCommon.md#family)

#### Defined in

[families/ripple/types.ts:15](https://github.com/LedgerHQ/live-app-sdk/blob/main/src/families/ripple/types.ts#L15)

___

### fee

• `Optional` **fee**: `string`

#### Defined in

[families/ripple/types.ts:16](https://github.com/LedgerHQ/live-app-sdk/blob/main/src/families/ripple/types.ts#L16)

___

### recipient

• **recipient**: `string`

#### Inherited from

[RawTransactionCommon](RawTransactionCommon.md).[recipient](RawTransactionCommon.md#recipient)

#### Defined in

[rawTypes.ts:36](https://github.com/LedgerHQ/live-app-sdk/blob/main/src/rawTypes.ts#L36)

___

### tag

• **tag**: `number`

#### Defined in

[families/ripple/types.ts:17](https://github.com/LedgerHQ/live-app-sdk/blob/main/src/families/ripple/types.ts#L17)
