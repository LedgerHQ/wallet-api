---
id: "TronTransaction"
title: "Interface: TronTransaction"
sidebar_label: "TronTransaction"
sidebar_position: 0
custom_edit_url: null
---

Common fields for all cryptocurrency transactions

## Hierarchy

- [`TransactionCommon`](TransactionCommon.md)

  ↳ **`TronTransaction`**

## Properties

### amount

• **amount**: `BigNumber`

The amount of token to send in the transaction, denoted in the smallest cryptocurrency's magnitude
For example in BTC, a tx with an 'amount' field of 1 will correspond to a tx corresponding to 0.00000001 BTC

#### Inherited from

[TransactionCommon](TransactionCommon.md).[amount](TransactionCommon.md#amount)

#### Defined in

[packages/core/src/families/types.ts:47](https://github.com/LedgerHQ/wallet-api/blob/main/packages/core/src/families/types.ts#L47)

___

### duration

• `Optional` **duration**: `number`

#### Defined in

[packages/core/src/families/tron/types.ts:17](https://github.com/LedgerHQ/wallet-api/blob/main/packages/core/src/families/tron/types.ts#L17)

___

### family

• `Readonly` **family**: ``"tron"``

The family of the transaction

#### Overrides

[TransactionCommon](TransactionCommon.md).[family](TransactionCommon.md#family)

#### Defined in

[packages/core/src/families/tron/types.ts:14](https://github.com/LedgerHQ/wallet-api/blob/main/packages/core/src/families/tron/types.ts#L14)

___

### mode

• **mode**: ``"send"`` \| ``"claimReward"`` \| ``"vote"`` \| ``"freeze"`` \| ``"unfreeze"``

#### Defined in

[packages/core/src/families/tron/types.ts:15](https://github.com/LedgerHQ/wallet-api/blob/main/packages/core/src/families/tron/types.ts#L15)

___

### recipient

• **recipient**: `string`

The address of the transaction's recipient

#### Inherited from

[TransactionCommon](TransactionCommon.md).[recipient](TransactionCommon.md#recipient)

#### Defined in

[packages/core/src/families/types.ts:51](https://github.com/LedgerHQ/wallet-api/blob/main/packages/core/src/families/types.ts#L51)

___

### resource

• `Optional` **resource**: ``"BANDWIDTH"`` \| ``"ENERGY"``

#### Defined in

[packages/core/src/families/tron/types.ts:16](https://github.com/LedgerHQ/wallet-api/blob/main/packages/core/src/families/tron/types.ts#L16)
