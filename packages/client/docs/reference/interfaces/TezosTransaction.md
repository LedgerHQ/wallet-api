[@ledgerhq/live-app-sdk](../README.md) / [Exports](../modules.md) / TezosTransaction

# Interface: TezosTransaction

## Hierarchy

- [`TransactionCommon`](TransactionCommon.md)

  ↳ **`TezosTransaction`**

## Table of contents

### Properties

- [amount](TezosTransaction.md#amount)
- [family](TezosTransaction.md#family)
- [fees](TezosTransaction.md#fees)
- [gasLimit](TezosTransaction.md#gaslimit)
- [mode](TezosTransaction.md#mode)
- [recipient](TezosTransaction.md#recipient)

## Properties

### amount

• **amount**: `BigNumber`

The amount of token to send in the transaction

#### Inherited from

[TransactionCommon](TransactionCommon.md).[amount](TransactionCommon.md#amount)

#### Defined in

[types.ts:72](https://github.com/LedgerHQ/live-app-sdk/blob/72b3e13/src/types.ts#L72)

___

### family

• `Readonly` **family**: [`TEZOS`](../enums/FAMILIES.md#tezos)

#### Defined in

[families/tezos/types.ts:11](https://github.com/LedgerHQ/live-app-sdk/blob/72b3e13/src/families/tezos/types.ts#L11)

___

### fees

• `Optional` **fees**: `BigNumber`

#### Defined in

[families/tezos/types.ts:13](https://github.com/LedgerHQ/live-app-sdk/blob/72b3e13/src/families/tezos/types.ts#L13)

___

### gasLimit

• `Optional` **gasLimit**: `BigNumber`

#### Defined in

[families/tezos/types.ts:14](https://github.com/LedgerHQ/live-app-sdk/blob/72b3e13/src/families/tezos/types.ts#L14)

___

### mode

• **mode**: [`TezosOperationMode`](../modules.md#tezosoperationmode)

#### Defined in

[families/tezos/types.ts:12](https://github.com/LedgerHQ/live-app-sdk/blob/72b3e13/src/families/tezos/types.ts#L12)

___

### recipient

• **recipient**: `string`

The address of the transaction's recipient

#### Inherited from

[TransactionCommon](TransactionCommon.md).[recipient](TransactionCommon.md#recipient)

#### Defined in

[types.ts:76](https://github.com/LedgerHQ/live-app-sdk/blob/72b3e13/src/types.ts#L76)
