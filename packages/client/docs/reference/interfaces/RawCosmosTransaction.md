[@ledgerhq/live-app-sdk](../README.md) / [Exports](../modules.md) / RawCosmosTransaction

# Interface: RawCosmosTransaction

## Hierarchy

- [`RawTransactionCommon`](RawTransactionCommon.md)

  ↳ **`RawCosmosTransaction`**

## Table of contents

### Properties

- [amount](RawCosmosTransaction.md#amount)
- [family](RawCosmosTransaction.md#family)
- [fees](RawCosmosTransaction.md#fees)
- [gas](RawCosmosTransaction.md#gas)
- [memo](RawCosmosTransaction.md#memo)
- [mode](RawCosmosTransaction.md#mode)
- [recipient](RawCosmosTransaction.md#recipient)

## Properties

### amount

• **amount**: `string`

#### Inherited from

[RawTransactionCommon](RawTransactionCommon.md).[amount](RawTransactionCommon.md#amount)

#### Defined in

[rawTypes.ts:35](https://github.com/LedgerHQ/live-app-sdk/blob/dc89379/src/rawTypes.ts#L35)

___

### family

• `Readonly` **family**: [`COSMOS`](../enums/FAMILIES.md#cosmos)

#### Overrides

[RawTransactionCommon](RawTransactionCommon.md).[family](RawTransactionCommon.md#family)

#### Defined in

[families/cosmos/types.ts:25](https://github.com/LedgerHQ/live-app-sdk/blob/dc89379/src/families/cosmos/types.ts#L25)

___

### fees

• `Optional` **fees**: `string`

#### Defined in

[families/cosmos/types.ts:27](https://github.com/LedgerHQ/live-app-sdk/blob/dc89379/src/families/cosmos/types.ts#L27)

___

### gas

• `Optional` **gas**: `string`

#### Defined in

[families/cosmos/types.ts:28](https://github.com/LedgerHQ/live-app-sdk/blob/dc89379/src/families/cosmos/types.ts#L28)

___

### memo

• `Optional` **memo**: `string`

#### Defined in

[families/cosmos/types.ts:29](https://github.com/LedgerHQ/live-app-sdk/blob/dc89379/src/families/cosmos/types.ts#L29)

___

### mode

• **mode**: [`CosmosOperationMode`](../modules.md#cosmosoperationmode)

#### Defined in

[families/cosmos/types.ts:26](https://github.com/LedgerHQ/live-app-sdk/blob/dc89379/src/families/cosmos/types.ts#L26)

___

### recipient

• **recipient**: `string`

#### Inherited from

[RawTransactionCommon](RawTransactionCommon.md).[recipient](RawTransactionCommon.md#recipient)

#### Defined in

[rawTypes.ts:36](https://github.com/LedgerHQ/live-app-sdk/blob/dc89379/src/rawTypes.ts#L36)
