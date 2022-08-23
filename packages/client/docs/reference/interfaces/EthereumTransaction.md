[@ledgerhq/live-app-sdk](../README.md) / [Exports](../modules.md) / EthereumTransaction

# Interface: EthereumTransaction

## Hierarchy

- [`TransactionCommon`](TransactionCommon.md)

  ↳ **`EthereumTransaction`**

## Table of contents

### Properties

- [amount](EthereumTransaction.md#amount)
- [data](EthereumTransaction.md#data)
- [family](EthereumTransaction.md#family)
- [gasLimit](EthereumTransaction.md#gaslimit)
- [gasPrice](EthereumTransaction.md#gasprice)
- [nonce](EthereumTransaction.md#nonce)
- [recipient](EthereumTransaction.md#recipient)

## Properties

### amount

• **amount**: `BigNumber`

The amount of token to send in the transaction, denoted in the smallest cryptocurrency's magnitude
For example in BTC, a tx with an 'amount' field of 1 will correspond to a tx corresponding to 0.00000001 BTC

#### Inherited from

[TransactionCommon](TransactionCommon.md).[amount](TransactionCommon.md#amount)

#### Defined in

[types.ts:92](https://github.com/LedgerHQ/live-app-sdk/blob/main/src/types.ts#L92)

___

### data

• `Optional` **data**: `Buffer`

#### Defined in

[families/ethereum/types.ts:11](https://github.com/LedgerHQ/live-app-sdk/blob/main/src/families/ethereum/types.ts#L11)

___

### family

• `Readonly` **family**: [`ETHEREUM`](../enums/FAMILIES.md#ethereum)

#### Defined in

[families/ethereum/types.ts:9](https://github.com/LedgerHQ/live-app-sdk/blob/main/src/families/ethereum/types.ts#L9)

___

### gasLimit

• `Optional` **gasLimit**: `BigNumber`

#### Defined in

[families/ethereum/types.ts:13](https://github.com/LedgerHQ/live-app-sdk/blob/main/src/families/ethereum/types.ts#L13)

___

### gasPrice

• `Optional` **gasPrice**: `BigNumber`

#### Defined in

[families/ethereum/types.ts:12](https://github.com/LedgerHQ/live-app-sdk/blob/main/src/families/ethereum/types.ts#L12)

___

### nonce

• `Optional` **nonce**: `number`

#### Defined in

[families/ethereum/types.ts:10](https://github.com/LedgerHQ/live-app-sdk/blob/main/src/families/ethereum/types.ts#L10)

___

### recipient

• **recipient**: `string`

The address of the transaction's recipient

#### Inherited from

[TransactionCommon](TransactionCommon.md).[recipient](TransactionCommon.md#recipient)

#### Defined in

[types.ts:96](https://github.com/LedgerHQ/live-app-sdk/blob/main/src/types.ts#L96)
