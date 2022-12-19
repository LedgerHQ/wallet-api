[@ledgerhq/wallet-api-client](../README.md) / [Exports](../modules.md) / RpcResponseError

# Interface: RpcResponseError<TErrorData\>

When a rpc call encounters an error,
the Response Object MUST contain the error member with a value that is that object

## Type parameters

| Name | Type |
| :------ | :------ |
| `TErrorData` | `unknown` |

## Table of contents

### Properties

- [code](RpcResponseError.md#code)
- [data](RpcResponseError.md#data)
- [message](RpcResponseError.md#message)

## Properties

### code

• **code**: `number`

A Number that indicates the error type that occurred.

#### Defined in

packages/core/lib/JSONRPC/types.d.ts:61

___

### data

• `Optional` **data**: `TErrorData`

A Primitive or Structured value that contains additional information about the error.
The value of this member is defined by the Server
(e.g. detailed error information, nested errors etc.).

#### Defined in

packages/core/lib/JSONRPC/types.d.ts:71

___

### message

• **message**: `string`

A String providing a short description of the error.

#### Defined in

packages/core/lib/JSONRPC/types.d.ts:65
