---
id: "RpcErrorCode"
title: "Enumeration: RpcErrorCode"
sidebar_label: "RpcErrorCode"
sidebar_position: 0
custom_edit_url: null
---

Error code that may occur during WalletAPI server communication

## Enumeration Members

### INTERNAL\_ERROR

• **INTERNAL\_ERROR** = ``-32603``

Internal JSON-RPC error.

#### Defined in

[packages/core/src/JSONRPC/types.ts:26](https://github.com/LedgerHQ/wallet-api/blob/main/packages/core/src/JSONRPC/types.ts#L26)

___

### INVALID\_PARAMS

• **INVALID\_PARAMS** = ``-32602``

Invalid method parameter(s).

#### Defined in

[packages/core/src/JSONRPC/types.ts:22](https://github.com/LedgerHQ/wallet-api/blob/main/packages/core/src/JSONRPC/types.ts#L22)

___

### INVALID\_REQUEST

• **INVALID\_REQUEST** = ``-32600``

The JSON sent is not a valid Request object.

#### Defined in

[packages/core/src/JSONRPC/types.ts:14](https://github.com/LedgerHQ/wallet-api/blob/main/packages/core/src/JSONRPC/types.ts#L14)

___

### METHOD\_NOT\_FOUND

• **METHOD\_NOT\_FOUND** = ``-32601``

The method does not exist / is not available.

#### Defined in

[packages/core/src/JSONRPC/types.ts:18](https://github.com/LedgerHQ/wallet-api/blob/main/packages/core/src/JSONRPC/types.ts#L18)

___

### PARSE\_ERROR

• **PARSE\_ERROR** = ``-32700``

Invalid JSON was received by the server.
or An error occurred on the server while parsing the JSON text.

#### Defined in

[packages/core/src/JSONRPC/types.ts:10](https://github.com/LedgerHQ/wallet-api/blob/main/packages/core/src/JSONRPC/types.ts#L10)

___

### SERVER\_ERROR

• **SERVER\_ERROR** = ``-32000``

Reserved for implementation-defined server-errors.

#### Defined in

[packages/core/src/JSONRPC/types.ts:30](https://github.com/LedgerHQ/wallet-api/blob/main/packages/core/src/JSONRPC/types.ts#L30)
