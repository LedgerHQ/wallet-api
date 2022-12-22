---
id: "RpcResponseSuccess"
title: "Interface: RpcResponseSuccess<TResult>"
sidebar_label: "RpcResponseSuccess"
sidebar_position: 0
custom_edit_url: null
---

## Type parameters

| Name | Type |
| :------ | :------ |
| `TResult` | `unknown` |

## Hierarchy

- [`RpcResponseCommon`](RpcResponseCommon.md)

  ↳ **`RpcResponseSuccess`**

## Properties

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

packages/core/lib/JSONRPC/types.d.ts:91

___

### jsonrpc

• **jsonrpc**: ``"2.0"``

A String specifying the version of the JSON-RPC protocol.
**MUST** be exactly "2.0".

#### Inherited from

[RpcResponseCommon](RpcResponseCommon.md).[jsonrpc](RpcResponseCommon.md#jsonrpc)

#### Defined in

packages/core/lib/JSONRPC/types.d.ts:82

___

### result

• **result**: `TResult`

This member is **REQUIRED** on success.
This member **MUST NOT** exist if there was an error invoking the method.
The value of this member is determined by the method invoked on the Server.

#### Defined in

packages/core/lib/JSONRPC/types.d.ts:105
