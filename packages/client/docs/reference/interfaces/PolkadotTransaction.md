[@ledgerhq/live-app-sdk](../README.md) / [Exports](../modules.md) / PolkadotTransaction

# Interface: PolkadotTransaction

## Hierarchy

- [`TransactionCommon`](TransactionCommon.md)

  ↳ **`PolkadotTransaction`**

## Table of contents

### Properties

- [amount](PolkadotTransaction.md#amount)
- [era](PolkadotTransaction.md#era)
- [family](PolkadotTransaction.md#family)
- [fee](PolkadotTransaction.md#fee)
- [mode](PolkadotTransaction.md#mode)
- [recipient](PolkadotTransaction.md#recipient)

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

### era

• `Optional` **era**: `number`

#### Defined in

[families/polkadot/types.ts:23](https://github.com/LedgerHQ/live-app-sdk/blob/1d8d8d5/src/families/polkadot/types.ts#L23)

___

### family

• `Readonly` **family**: [`POLKADOT`](../enums/FAMILIES.md#polkadot)

#### Defined in

[families/polkadot/types.ts:20](https://github.com/LedgerHQ/live-app-sdk/blob/1d8d8d5/src/families/polkadot/types.ts#L20)

___

### fee

• `Optional` **fee**: `BigNumber`

#### Defined in

[families/polkadot/types.ts:22](https://github.com/LedgerHQ/live-app-sdk/blob/1d8d8d5/src/families/polkadot/types.ts#L22)

___

### mode

• **mode**: [`PolkadotOperationMode`](../modules.md#polkadotoperationmode)

#### Defined in

[families/polkadot/types.ts:21](https://github.com/LedgerHQ/live-app-sdk/blob/1d8d8d5/src/families/polkadot/types.ts#L21)

___

### recipient

• **recipient**: `string`

The address of the transaction's recipient

#### Inherited from

[TransactionCommon](TransactionCommon.md).[recipient](TransactionCommon.md#recipient)

#### Defined in

[types.ts:81](https://github.com/LedgerHQ/live-app-sdk/blob/1d8d8d5/src/types.ts#L81)
