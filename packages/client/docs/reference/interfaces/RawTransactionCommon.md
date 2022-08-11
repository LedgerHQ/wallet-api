[@ledgerhq/live-app-sdk](../README.md) / [Exports](../modules.md) / RawTransactionCommon

# Interface: RawTransactionCommon

The raw representation of the common transaction fields found in [TransactionCommon](TransactionCommon.md) type

**`see`** [TransactionCommon](TransactionCommon.md) for information regarding individual fields. Each field type is the serialized version of the corresponding [TransactionCommon](TransactionCommon.md) type

## Hierarchy

- **`RawTransactionCommon`**

  ↳ [`RawEthereumTransaction`](RawEthereumTransaction.md)

  ↳ [`RawBitcoinTransaction`](RawBitcoinTransaction.md)

  ↳ [`RawAlgorandTransaction`](RawAlgorandTransaction.md)

  ↳ [`RawCosmosTransaction`](RawCosmosTransaction.md)

  ↳ [`RawCryptoOrgTransaction`](RawCryptoOrgTransaction.md)

  ↳ [`RawPolkadotTransaction`](RawPolkadotTransaction.md)

  ↳ [`RawRippleTransaction`](RawRippleTransaction.md)

  ↳ [`RawStellarTransaction`](RawStellarTransaction.md)

  ↳ [`RawTezosTransaction`](RawTezosTransaction.md)

  ↳ [`RawTronTransaction`](RawTronTransaction.md)

## Table of contents

### Properties

- [amount](RawTransactionCommon.md#amount)
- [family](RawTransactionCommon.md#family)
- [recipient](RawTransactionCommon.md#recipient)

## Properties

### amount

• **amount**: `string`

#### Defined in

[rawTypes.ts:35](https://github.com/LedgerHQ/live-app-sdk/blob/5608a83/src/rawTypes.ts#L35)

___

### family

• **family**: `string`

#### Defined in

[rawTypes.ts:34](https://github.com/LedgerHQ/live-app-sdk/blob/5608a83/src/rawTypes.ts#L34)

___

### recipient

• **recipient**: `string`

#### Defined in

[rawTypes.ts:36](https://github.com/LedgerHQ/live-app-sdk/blob/5608a83/src/rawTypes.ts#L36)
