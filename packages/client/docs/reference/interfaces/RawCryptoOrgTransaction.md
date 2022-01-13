[@ledgerhq/live-app-sdk](../README.md) / [Exports](../modules.md) / RawCryptoOrgTransaction

# Interface: RawCryptoOrgTransaction

## Hierarchy

- [`RawTransactionCommon`](RawTransactionCommon.md)

  ↳ **`RawCryptoOrgTransaction`**

## Table of contents

### Properties

- [amount](RawCryptoOrgTransaction.md#amount)
- [family](RawCryptoOrgTransaction.md#family)
- [fees](RawCryptoOrgTransaction.md#fees)
- [mode](RawCryptoOrgTransaction.md#mode)
- [recipient](RawCryptoOrgTransaction.md#recipient)

## Properties

### amount

• **amount**: `string`

#### Inherited from

[RawTransactionCommon](RawTransactionCommon.md).[amount](RawTransactionCommon.md#amount)

#### Defined in

[rawTypes.ts:35](https://github.com/LedgerHQ/live-app-sdk/blob/1d8d8d5/src/rawTypes.ts#L35)

___

### family

• `Readonly` **family**: [`CRYPTO_ORG`](../enums/FAMILIES.md#crypto_org)

#### Overrides

[RawTransactionCommon](RawTransactionCommon.md).[family](RawTransactionCommon.md#family)

#### Defined in

[families/crypto_org/types.ts:15](https://github.com/LedgerHQ/live-app-sdk/blob/1d8d8d5/src/families/crypto_org/types.ts#L15)

___

### fees

• `Optional` **fees**: `string`

#### Defined in

[families/crypto_org/types.ts:17](https://github.com/LedgerHQ/live-app-sdk/blob/1d8d8d5/src/families/crypto_org/types.ts#L17)

___

### mode

• **mode**: `string`

#### Defined in

[families/crypto_org/types.ts:16](https://github.com/LedgerHQ/live-app-sdk/blob/1d8d8d5/src/families/crypto_org/types.ts#L16)

___

### recipient

• **recipient**: `string`

#### Inherited from

[RawTransactionCommon](RawTransactionCommon.md).[recipient](RawTransactionCommon.md#recipient)

#### Defined in

[rawTypes.ts:36](https://github.com/LedgerHQ/live-app-sdk/blob/1d8d8d5/src/rawTypes.ts#L36)
