[@ledgerhq/wallet-api-client](../README.md) / [Exports](../modules.md) / RpcErrorCode

# Enumeration: RpcErrorCode

## Table of contents

### Enumeration Members

- [INTERNAL\_ERROR](RpcErrorCode.md#internal_error)
- [INVALID\_PARAMS](RpcErrorCode.md#invalid_params)
- [INVALID\_REQUEST](RpcErrorCode.md#invalid_request)
- [METHOD\_NOT\_FOUND](RpcErrorCode.md#method_not_found)
- [PARSE\_ERROR](RpcErrorCode.md#parse_error)
- [SERVER\_ERROR](RpcErrorCode.md#server_error)

## Enumeration Members

### INTERNAL\_ERROR

• **INTERNAL\_ERROR** = ``-32603``

Internal JSON-RPC error.

#### Defined in

packages/core/lib/JSONRPC/types.d.ts:22

___

### INVALID\_PARAMS

• **INVALID\_PARAMS** = ``-32602``

Invalid method parameter(s).

#### Defined in

packages/core/lib/JSONRPC/types.d.ts:18

___

### INVALID\_REQUEST

• **INVALID\_REQUEST** = ``-32600``

The JSON sent is not a valid Request object.

#### Defined in

packages/core/lib/JSONRPC/types.d.ts:10

___

### METHOD\_NOT\_FOUND

• **METHOD\_NOT\_FOUND** = ``-32601``

The method does not exist / is not available.

#### Defined in

packages/core/lib/JSONRPC/types.d.ts:14

___

### PARSE\_ERROR

• **PARSE\_ERROR** = ``-32700``

Invalid JSON was received by the server.
or An error occurred on the server while parsing the JSON text.

#### Defined in

packages/core/lib/JSONRPC/types.d.ts:6

___

### SERVER\_ERROR

• **SERVER\_ERROR** = ``-32000``

Reserved for implementation-defined server-errors.

#### Defined in

packages/core/lib/JSONRPC/types.d.ts:26
