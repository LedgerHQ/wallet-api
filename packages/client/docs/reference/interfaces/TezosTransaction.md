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

The amount of token to send in the transaction, denoted in the smallest cryptocurrency's magnitude
For example in BTC, a tx with an 'amount' field of 1 will correspond to a tx corresponding to 0.00000001 BTC

#### Inherited from

[TransactionCommon](TransactionCommon.md).[amount](TransactionCommon.md#amount)

#### Defined in

[types.ts:77](https://github.com/LedgerHQ/live-app-sdk/blob/7a3b814/src/types.ts#L77)

___

### family

• `Readonly` **family**: [`TEZOS`](../enums/FAMILIES.md#tezos)

#### Defined in

[families/tezos/types.ts:11](https://github.com/LedgerHQ/live-app-sdk/blob/7a3b814/src/families/tezos/types.ts#L11)

___

### fees

• `Optional` **fees**: `BigNumber`

#### Defined in

[families/tezos/types.ts:13](https://github.com/LedgerHQ/live-app-sdk/blob/7a3b814/src/families/tezos/types.ts#L13)

___

### gasLimit

• `Optional` **gasLimit**: `BigNumber`

#### Defined in

[families/tezos/types.ts:14](https://github.com/LedgerHQ/live-app-sdk/blob/7a3b814/src/families/tezos/types.ts#L14)

___

### mode

• **mode**: [`TezosOperationMode`](../modules.md#tezosoperationmode)

#### Defined in

[families/tezos/types.ts:12](https://github.com/LedgerHQ/live-app-sdk/blob/7a3b814/src/families/tezos/types.ts#L12)

___

### recipient

• **recipient**: `string`

The address of the transaction's recipient

#### Inherited from

[TransactionCommon](TransactionCommon.md).[recipient](TransactionCommon.md#recipient)

#### Defined in

[types.ts:81](https://github.com/LedgerHQ/live-app-sdk/blob/7a3b814/src/types.ts#L81)
