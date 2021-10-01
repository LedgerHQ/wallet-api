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

The amount of token to send in the transaction

#### Inherited from

[TransactionCommon](TransactionCommon.md).[amount](TransactionCommon.md#amount)

#### Defined in

[types.ts:72](https://github.com/LedgerHQ/live-app-sdk/blob/72b3e13/src/types.ts#L72)

___

### family

• `Readonly` **family**: [`BITCOIN`](../enums/FAMILIES.md#bitcoin)

#### Defined in

[families/bitcoin/types.ts:9](https://github.com/LedgerHQ/live-app-sdk/blob/72b3e13/src/families/bitcoin/types.ts#L9)

___

### feePerByte

• `Optional` **feePerByte**: `BigNumber`

#### Defined in

[families/bitcoin/types.ts:10](https://github.com/LedgerHQ/live-app-sdk/blob/72b3e13/src/families/bitcoin/types.ts#L10)

___

### recipient

• **recipient**: `string`

The address of the transaction's recipient

#### Inherited from

[TransactionCommon](TransactionCommon.md).[recipient](TransactionCommon.md#recipient)

#### Defined in

[types.ts:76](https://github.com/LedgerHQ/live-app-sdk/blob/72b3e13/src/types.ts#L76)
