[@ledgerhq/live-app-sdk](../README.md) / [Exports](../modules.md) / RippleTransaction

# Interface: RippleTransaction

## Hierarchy

- [`TransactionCommon`](TransactionCommon.md)

  ↳ **`RippleTransaction`**

## Table of contents

### Properties

- [amount](RippleTransaction.md#amount)
- [family](RippleTransaction.md#family)
- [fee](RippleTransaction.md#fee)
- [recipient](RippleTransaction.md#recipient)
- [tag](RippleTransaction.md#tag)

## Properties

### amount

• **amount**: `BigNumber`

The amount of token to send in the transaction, denoted in the smallest cryptocurrency's magnitude
For example in BTC, a tx with an 'amount' field of 1 will correspond to a tx corresponding to 0.00000001 BTC

#### Inherited from

[TransactionCommon](TransactionCommon.md).[amount](TransactionCommon.md#amount)

#### Defined in

[types.ts:73](https://github.com/LedgerHQ/live-app-sdk/blob/dc89379/src/types.ts#L73)

___

### family

• `Readonly` **family**: [`RIPPLE`](../enums/FAMILIES.md#ripple)

#### Defined in

[families/ripple/types.ts:9](https://github.com/LedgerHQ/live-app-sdk/blob/dc89379/src/families/ripple/types.ts#L9)

___

### fee

• `Optional` **fee**: `BigNumber`

#### Defined in

[families/ripple/types.ts:10](https://github.com/LedgerHQ/live-app-sdk/blob/dc89379/src/families/ripple/types.ts#L10)

___

### recipient

• **recipient**: `string`

The address of the transaction's recipient

#### Inherited from

[TransactionCommon](TransactionCommon.md).[recipient](TransactionCommon.md#recipient)

#### Defined in

[types.ts:77](https://github.com/LedgerHQ/live-app-sdk/blob/dc89379/src/types.ts#L77)

___

### tag

• **tag**: `number`

#### Defined in

[families/ripple/types.ts:11](https://github.com/LedgerHQ/live-app-sdk/blob/dc89379/src/families/ripple/types.ts#L11)
