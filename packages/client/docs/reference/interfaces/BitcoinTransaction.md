[@ledgerhq/live-app-sdk](../README.md) / [Exports](../modules.md) / BitcoinTransaction

# Interface: BitcoinTransaction

## Hierarchy

- [`TransactionCommon`](TransactionCommon.md)

  ↳ **`BitcoinTransaction`**

## Table of contents

### Properties

- [amount](BitcoinTransaction.md#amount)
- [family](BitcoinTransaction.md#family)
- [feePerByte](BitcoinTransaction.md#feeperbyte)
- [recipient](BitcoinTransaction.md#recipient)

## Properties

### amount

• **amount**: `BigNumber`

The amount of token to send in the transaction, denoted in the smallest cryptocurrency's magnitude
For example in BTC, a tx with an 'amount' field of 1 will correspond to a tx corresponding to 0.00000001 BTC

#### Inherited from

[TransactionCommon](TransactionCommon.md).[amount](TransactionCommon.md#amount)

#### Defined in

[types.ts:77](https://github.com/LedgerHQ/live-app-sdk/blob/1d8d8d5/src/types.ts#L77)

___

### family

• `Readonly` **family**: [`BITCOIN`](../enums/FAMILIES.md#bitcoin)

#### Defined in

[families/bitcoin/types.ts:9](https://github.com/LedgerHQ/live-app-sdk/blob/1d8d8d5/src/families/bitcoin/types.ts#L9)

___

### feePerByte

• `Optional` **feePerByte**: `BigNumber`

#### Defined in

[families/bitcoin/types.ts:10](https://github.com/LedgerHQ/live-app-sdk/blob/1d8d8d5/src/families/bitcoin/types.ts#L10)

___

### recipient

• **recipient**: `string`

The address of the transaction's recipient

#### Inherited from

[TransactionCommon](TransactionCommon.md).[recipient](TransactionCommon.md#recipient)

#### Defined in

[types.ts:81](https://github.com/LedgerHQ/live-app-sdk/blob/1d8d8d5/src/types.ts#L81)
