[@ledgerhq/live-app-sdk](../README.md) / [Exports](../modules.md) / RawEthereumTransaction

# Interface: RawEthereumTransaction

## Hierarchy

- [`RawTransactionCommon`](RawTransactionCommon.md)

  ↳ **`RawEthereumTransaction`**

## Table of contents

### Properties

- [amount](RawEthereumTransaction.md#amount)
- [data](RawEthereumTransaction.md#data)
- [family](RawEthereumTransaction.md#family)
- [gasLimit](RawEthereumTransaction.md#gaslimit)
- [gasPrice](RawEthereumTransaction.md#gasprice)
- [nonce](RawEthereumTransaction.md#nonce)
- [recipient](RawEthereumTransaction.md#recipient)

## Properties

### amount

• **amount**: `string`

#### Inherited from

[RawTransactionCommon](RawTransactionCommon.md).[amount](RawTransactionCommon.md#amount)

#### Defined in

[rawTypes.ts:35](https://github.com/LedgerHQ/live-app-sdk/blob/main/src/rawTypes.ts#L35)

___

### data

• `Optional` **data**: `string`

#### Defined in

[families/ethereum/types.ts:19](https://github.com/LedgerHQ/live-app-sdk/blob/main/src/families/ethereum/types.ts#L19)

___

### family

• `Readonly` **family**: [`ETHEREUM`](../enums/FAMILIES.md#ethereum)

#### Overrides

[RawTransactionCommon](RawTransactionCommon.md).[family](RawTransactionCommon.md#family)

#### Defined in

[families/ethereum/types.ts:17](https://github.com/LedgerHQ/live-app-sdk/blob/main/src/families/ethereum/types.ts#L17)

___

### gasLimit

• `Optional` **gasLimit**: `string`

#### Defined in

[families/ethereum/types.ts:21](https://github.com/LedgerHQ/live-app-sdk/blob/main/src/families/ethereum/types.ts#L21)

___

### gasPrice

• `Optional` **gasPrice**: `string`

#### Defined in

[families/ethereum/types.ts:20](https://github.com/LedgerHQ/live-app-sdk/blob/main/src/families/ethereum/types.ts#L20)

___

### nonce

• `Optional` **nonce**: `number`

#### Defined in

[families/ethereum/types.ts:18](https://github.com/LedgerHQ/live-app-sdk/blob/main/src/families/ethereum/types.ts#L18)

___

### recipient

• **recipient**: `string`

#### Inherited from

[RawTransactionCommon](RawTransactionCommon.md).[recipient](RawTransactionCommon.md#recipient)

#### Defined in

[rawTypes.ts:36](https://github.com/LedgerHQ/live-app-sdk/blob/main/src/rawTypes.ts#L36)
