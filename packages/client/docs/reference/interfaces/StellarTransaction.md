[@ledgerhq/live-app-sdk](../README.md) / [Exports](../modules.md) / StellarTransaction

# Interface: StellarTransaction

## Hierarchy

- [`TransactionCommon`](TransactionCommon.md)

  ↳ **`StellarTransaction`**

## Table of contents

### Properties

- [amount](StellarTransaction.md#amount)
- [family](StellarTransaction.md#family)
- [fees](StellarTransaction.md#fees)
- [memoType](StellarTransaction.md#memotype)
- [memoValue](StellarTransaction.md#memovalue)
- [recipient](StellarTransaction.md#recipient)

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

• `Readonly` **family**: [`STELLAR`](../enums/FAMILIES.md#stellar)

#### Defined in

[families/stellar/types.ts:9](https://github.com/LedgerHQ/live-app-sdk/blob/72b3e13/src/families/stellar/types.ts#L9)

___

### fees

• `Optional` **fees**: `BigNumber`

#### Defined in

[families/stellar/types.ts:10](https://github.com/LedgerHQ/live-app-sdk/blob/72b3e13/src/families/stellar/types.ts#L10)

___

### memoType

• `Optional` **memoType**: `string`

#### Defined in

[families/stellar/types.ts:11](https://github.com/LedgerHQ/live-app-sdk/blob/72b3e13/src/families/stellar/types.ts#L11)

___

### memoValue

• `Optional` **memoValue**: `string`

#### Defined in

[families/stellar/types.ts:12](https://github.com/LedgerHQ/live-app-sdk/blob/72b3e13/src/families/stellar/types.ts#L12)

___

### recipient

• **recipient**: `string`

The address of the transaction's recipient

#### Inherited from

[TransactionCommon](TransactionCommon.md).[recipient](TransactionCommon.md#recipient)

#### Defined in

[types.ts:76](https://github.com/LedgerHQ/live-app-sdk/blob/72b3e13/src/types.ts#L76)
