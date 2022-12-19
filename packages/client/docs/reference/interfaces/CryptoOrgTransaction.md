[@ledgerhq/wallet-api-client](../README.md) / [Exports](../modules.md) / CryptoOrgTransaction

# Interface: CryptoOrgTransaction

Common fields for all cryptocurrency transactions

## Hierarchy

- [`TransactionCommon`](TransactionCommon.md)

  ↳ **`CryptoOrgTransaction`**

## Table of contents

### Properties

- [amount](CryptoOrgTransaction.md#amount)
- [family](CryptoOrgTransaction.md#family)
- [fees](CryptoOrgTransaction.md#fees)
- [mode](CryptoOrgTransaction.md#mode)
- [recipient](CryptoOrgTransaction.md#recipient)

## Properties

### amount

• **amount**: `BigNumber`

The amount of token to send in the transaction, denoted in the smallest cryptocurrency's magnitude
For example in BTC, a tx with an 'amount' field of 1 will correspond to a tx corresponding to 0.00000001 BTC

#### Inherited from

[TransactionCommon](TransactionCommon.md).[amount](TransactionCommon.md#amount)

#### Defined in

packages/core/lib/families/types.d.ts:37

___

### family

• `Readonly` **family**: ``"crypto_org"``

The family of the transaction

#### Overrides

[TransactionCommon](TransactionCommon.md).[family](TransactionCommon.md#family)

#### Defined in

packages/core/lib/families/crypto_org/types.d.ts:6

___

### fees

• `Optional` **fees**: `BigNumber`

#### Defined in

packages/core/lib/families/crypto_org/types.d.ts:8

___

### mode

• **mode**: `string`

#### Defined in

packages/core/lib/families/crypto_org/types.d.ts:7

___

### recipient

• **recipient**: `string`

The address of the transaction's recipient

#### Inherited from

[TransactionCommon](TransactionCommon.md).[recipient](TransactionCommon.md#recipient)

#### Defined in

packages/core/lib/families/types.d.ts:41
