---
id: "RpcResponseCommon"
title: "Interface: RpcResponseCommon"
sidebar_label: "RpcResponseCommon"
sidebar_position: 0
custom_edit_url: null
---

## Hierarchy

- **`RpcResponseCommon`**

  ↳ [`RpcResponseSuccess`](RpcResponseSuccess.md)

  ↳ [`RpcResponseFailed`](RpcResponseFailed.md)

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

[packages/core/src/JSONRPC/types.ts:98](https://github.com/LedgerHQ/wallet-api/blob/main/packages/core/src/JSONRPC/types.ts#L98)

___

### jsonrpc

• **jsonrpc**: ``"2.0"``

A String specifying the version of the JSON-RPC protocol.
**MUST** be exactly "2.0".

#### Defined in

[packages/core/src/JSONRPC/types.ts:88](https://github.com/LedgerHQ/wallet-api/blob/main/packages/core/src/JSONRPC/types.ts#L88)
