[@ledgerhq/live-app-sdk](../README.md) / [Exports](../modules.md) / RawTronTransaction

# Interface: RawTronTransaction

## Hierarchy

- [`RawTransactionCommon`](RawTransactionCommon.md)

  ↳ **`RawTronTransaction`**

## Table of contents

### Properties

- [amount](RawTronTransaction.md#amount)
- [duration](RawTronTransaction.md#duration)
- [family](RawTronTransaction.md#family)
- [mode](RawTronTransaction.md#mode)
- [recipient](RawTronTransaction.md#recipient)
- [resource](RawTronTransaction.md#resource)

## Properties

### amount

• **amount**: `string`

#### Inherited from

[RawTransactionCommon](RawTransactionCommon.md).[amount](RawTransactionCommon.md#amount)

#### Defined in

[rawTypes.ts:35](https://github.com/LedgerHQ/live-app-sdk/blob/1d8d8d5/src/rawTypes.ts#L35)

___

### duration

• `Optional` **duration**: `number`

#### Defined in

[families/tron/types.ts:26](https://github.com/LedgerHQ/live-app-sdk/blob/1d8d8d5/src/families/tron/types.ts#L26)

___

### family

• `Readonly` **family**: [`TRON`](../enums/FAMILIES.md#tron)

#### Overrides

[RawTransactionCommon](RawTransactionCommon.md).[family](RawTransactionCommon.md#family)

#### Defined in

[families/tron/types.ts:23](https://github.com/LedgerHQ/live-app-sdk/blob/1d8d8d5/src/families/tron/types.ts#L23)

___

### mode

• **mode**: [`TronOperationMode`](../modules.md#tronoperationmode)

#### Defined in

[families/tron/types.ts:24](https://github.com/LedgerHQ/live-app-sdk/blob/1d8d8d5/src/families/tron/types.ts#L24)

___

### recipient

• **recipient**: `string`

#### Inherited from

[RawTransactionCommon](RawTransactionCommon.md).[recipient](RawTransactionCommon.md#recipient)

#### Defined in

[rawTypes.ts:36](https://github.com/LedgerHQ/live-app-sdk/blob/1d8d8d5/src/rawTypes.ts#L36)

___

### resource

• `Optional` **resource**: [`TronResource`](../modules.md#tronresource)

#### Defined in

[families/tron/types.ts:25](https://github.com/LedgerHQ/live-app-sdk/blob/1d8d8d5/src/families/tron/types.ts#L25)
