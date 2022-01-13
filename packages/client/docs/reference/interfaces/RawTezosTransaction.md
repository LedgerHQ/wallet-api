[@ledgerhq/live-app-sdk](../README.md) / [Exports](../modules.md) / RawTezosTransaction

# Interface: RawTezosTransaction

## Hierarchy

- [`RawTransactionCommon`](RawTransactionCommon.md)

  ↳ **`RawTezosTransaction`**

## Table of contents

### Properties

- [amount](RawTezosTransaction.md#amount)
- [family](RawTezosTransaction.md#family)
- [fees](RawTezosTransaction.md#fees)
- [gasLimit](RawTezosTransaction.md#gaslimit)
- [mode](RawTezosTransaction.md#mode)
- [recipient](RawTezosTransaction.md#recipient)

## Properties

### amount

• **amount**: `string`

#### Inherited from

[RawTransactionCommon](RawTransactionCommon.md).[amount](RawTransactionCommon.md#amount)

#### Defined in

[rawTypes.ts:35](https://github.com/LedgerHQ/live-app-sdk/blob/1d8d8d5/src/rawTypes.ts#L35)

___

### family

• `Readonly` **family**: [`TEZOS`](../enums/FAMILIES.md#tezos)

#### Overrides

[RawTransactionCommon](RawTransactionCommon.md).[family](RawTransactionCommon.md#family)

#### Defined in

[families/tezos/types.ts:18](https://github.com/LedgerHQ/live-app-sdk/blob/1d8d8d5/src/families/tezos/types.ts#L18)

___

### fees

• `Optional` **fees**: `string`

#### Defined in

[families/tezos/types.ts:20](https://github.com/LedgerHQ/live-app-sdk/blob/1d8d8d5/src/families/tezos/types.ts#L20)

___

### gasLimit

• `Optional` **gasLimit**: `string`

#### Defined in

[families/tezos/types.ts:21](https://github.com/LedgerHQ/live-app-sdk/blob/1d8d8d5/src/families/tezos/types.ts#L21)

___

### mode

• **mode**: [`TezosOperationMode`](../modules.md#tezosoperationmode)

#### Defined in

[families/tezos/types.ts:19](https://github.com/LedgerHQ/live-app-sdk/blob/1d8d8d5/src/families/tezos/types.ts#L19)

___

### recipient

• **recipient**: `string`

#### Inherited from

[RawTransactionCommon](RawTransactionCommon.md).[recipient](RawTransactionCommon.md#recipient)

#### Defined in

[rawTypes.ts:36](https://github.com/LedgerHQ/live-app-sdk/blob/1d8d8d5/src/rawTypes.ts#L36)
