---
id: "RpcRequest"
title: "Interface: RpcRequest<MParam, TParam>"
sidebar_label: "RpcRequest"
sidebar_position: 0
custom_edit_url: null
---

A rpc call is represented by sending a Request object to a Server.

## Type parameters

| Name | Type |
| :------ | :------ |
| `MParam` | `string` |
| `TParam` | `unknown` |

## Properties

### id

• `Optional` **id**: ``null`` \| `string` \| `number`

An identifier established by the Client that **MUST** contain a `String`, `Number`,
or `NULL` value if included.
If it is not included it is assumed to be a notification.
The value **SHOULD** normally not be Null and Numbers **SHOULD NOT** contain fractional parts

#### Defined in

packages/core/lib/JSONRPC/types.d.ts:55

___

### jsonrpc

• **jsonrpc**: ``"2.0"``

A String specifying the version of the JSON-RPC protocol. **MUST** be exactly "2.0".

#### Defined in

packages/core/lib/JSONRPC/types.d.ts:39

___

### method

• **method**: `MParam`

A String containing the name of the method to be invoked.

#### Defined in

packages/core/lib/JSONRPC/types.d.ts:43

___

### params

• `Optional` **params**: `TParam`

A Structured value that holds the parameter values
to be used during the invocation of the method.

#### Defined in

packages/core/lib/JSONRPC/types.d.ts:48
