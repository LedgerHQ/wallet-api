---
id: "RpcResponseError"
title: "Interface: RpcResponseError<TErrorData>"
sidebar_label: "RpcResponseError"
sidebar_position: 0
custom_edit_url: null
---

When a rpc call encounters an error,
the Response Object MUST contain the error member with a value that is that object

## Type parameters

| Name | Type |
| :------ | :------ |
| `TErrorData` | `unknown` |

## Properties

### code

• **code**: `number`

A Number that indicates the error type that occurred.

#### Defined in

packages/core/lib/JSONRPC/types.d.ts:65

___

### data

• `Optional` **data**: `TErrorData`

A Primitive or Structured value that contains additional information about the error.
The value of this member is defined by the Server
(e.g. detailed error information, nested errors etc.).

#### Defined in

packages/core/lib/JSONRPC/types.d.ts:75

___

### message

• **message**: `string`

A String providing a short description of the error.

#### Defined in

packages/core/lib/JSONRPC/types.d.ts:69
