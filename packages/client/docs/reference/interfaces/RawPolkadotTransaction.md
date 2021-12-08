[@ledgerhq/live-app-sdk](../README.md) / [Exports](../modules.md) / RawPolkadotTransaction

# Interface: RawPolkadotTransaction

## Hierarchy

- [`RawTransactionCommon`](RawTransactionCommon.md)

  ↳ **`RawPolkadotTransaction`**

## Table of contents

### Properties

- [amount](RawPolkadotTransaction.md#amount)
- [era](RawPolkadotTransaction.md#era)
- [family](RawPolkadotTransaction.md#family)
- [fee](RawPolkadotTransaction.md#fee)
- [mode](RawPolkadotTransaction.md#mode)
- [recipient](RawPolkadotTransaction.md#recipient)

## Properties

### amount

• **amount**: `string`

#### Inherited from

[RawTransactionCommon](RawTransactionCommon.md).[amount](RawTransactionCommon.md#amount)

#### Defined in

[rawTypes.ts:35](https://github.com/LedgerHQ/live-app-sdk/blob/dc89379/src/rawTypes.ts#L35)

___

### era

• `Optional` **era**: `number`

#### Defined in

[families/polkadot/types.ts:30](https://github.com/LedgerHQ/live-app-sdk/blob/dc89379/src/families/polkadot/types.ts#L30)

___

### family

• `Readonly` **family**: [`POLKADOT`](../enums/FAMILIES.md#polkadot)

#### Overrides

[RawTransactionCommon](RawTransactionCommon.md).[family](RawTransactionCommon.md#family)

#### Defined in

[families/polkadot/types.ts:27](https://github.com/LedgerHQ/live-app-sdk/blob/dc89379/src/families/polkadot/types.ts#L27)

___

### fee

• `Optional` **fee**: `string`

#### Defined in

[families/polkadot/types.ts:29](https://github.com/LedgerHQ/live-app-sdk/blob/dc89379/src/families/polkadot/types.ts#L29)

___

### mode

• **mode**: [`PolkadotOperationMode`](../modules.md#polkadotoperationmode)

#### Defined in

[families/polkadot/types.ts:28](https://github.com/LedgerHQ/live-app-sdk/blob/dc89379/src/families/polkadot/types.ts#L28)

___

### recipient

• **recipient**: `string`

#### Inherited from

[RawTransactionCommon](RawTransactionCommon.md).[recipient](RawTransactionCommon.md#recipient)

#### Defined in

[rawTypes.ts:36](https://github.com/LedgerHQ/live-app-sdk/blob/dc89379/src/rawTypes.ts#L36)
