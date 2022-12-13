[@ledgerhq/wallet-api-client](../README.md) / [Exports](../modules.md) / RpcResponseCommon

# Interface: RpcResponseCommon

## Hierarchy

- **`RpcResponseCommon`**

  ↳ [`RpcResponseSuccess`](RpcResponseSuccess.md)

  ↳ [`RpcResponseFailed`](RpcResponseFailed.md)

## Table of contents

### Properties

- [id](RpcResponseCommon.md#id)
- [jsonrpc](RpcResponseCommon.md#jsonrpc)

## Properties

### id

• **id**: ``null`` \| `string` \| `number`

An identifier established by the Client that **MUST** contain a `String`, `Number`,
or `NULL` value if included.
It **MUST** be the same as the value of the id member in the Request Object.
If there was an error
in detecting the `id` in the Request object (e.g. `Parse error`/`Invalid Request`)
it **MUST** be `Null`.

#### Defined in

packages/core/lib/JSONRPC/types.d.ts:87

___

### jsonrpc

• **jsonrpc**: ``"2.0"``

A String specifying the version of the JSON-RPC protocol.
**MUST** be exactly "2.0".

#### Defined in

packages/core/lib/JSONRPC/types.d.ts:78
