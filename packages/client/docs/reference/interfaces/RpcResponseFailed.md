[@ledgerhq/wallet-api-client](../README.md) / [Exports](../modules.md) / RpcResponseFailed

# Interface: RpcResponseFailed<TErrorData\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `TErrorData` | `unknown` |

## Hierarchy

- [`RpcResponseCommon`](RpcResponseCommon.md)

  ↳ **`RpcResponseFailed`**

## Table of contents

### Properties

- [error](RpcResponseFailed.md#error)
- [id](RpcResponseFailed.md#id)
- [jsonrpc](RpcResponseFailed.md#jsonrpc)

## Properties

### error

• **error**: [`RpcResponseError`](RpcResponseError.md)<`TErrorData`\>

This member is REQUIRED on error.
This member MUST NOT exist if there was no error triggered during invocation.
The value for this member MUST be an Object of Type `RpcResponseError`.

#### Defined in

packages/core/lib/JSONRPC/types.d.ts:109

___

### id

• **id**: ``null`` \| `string` \| `number`

An identifier established by the Client that **MUST** contain a `String`, `Number`,
or `NULL` value if included.
It **MUST** be the same as the value of the id member in the Request Object.
If there was an error
in detecting the `id` in the Request object (e.g. `Parse error`/`Invalid Request`)
it **MUST** be `Null`.

#### Inherited from

[RpcResponseCommon](RpcResponseCommon.md).[id](RpcResponseCommon.md#id)

#### Defined in

packages/core/lib/JSONRPC/types.d.ts:87

___

### jsonrpc

• **jsonrpc**: ``"2.0"``

A String specifying the version of the JSON-RPC protocol.
**MUST** be exactly "2.0".

#### Inherited from

[RpcResponseCommon](RpcResponseCommon.md).[jsonrpc](RpcResponseCommon.md#jsonrpc)

#### Defined in

packages/core/lib/JSONRPC/types.d.ts:78
