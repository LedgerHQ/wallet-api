<!-- omit in toc -->
# Errors

Here we describe the errors used in the API.
Error are returned by the server to the client.

Each error is composed of a title, a description and an error code, defined by the `PlatformError` class:

```ts
class PlatformError {
  title: string;
  description: string;
  errorCode: number;
}
```

To follow the [JSON-RPC specification](https://www.jsonrpc.org/specification), each error should be formated as follow:

```json
{
    "code": errorCode,
    "message": title,
    "data": {
      "description": description
    }
}
```

So when returned as part of a JSON-RPC response, this will equate to:

```json
{
  "jsonrpc": "2.0",
  "id": -1,
  "error": errorObject
}
```

<!-- omit in toc -->
## Table of Contents
- [AccountNotFound](#accountnotfound)
- [AccountNotMain](#accountnotmain)
- [AccountAndTransactionNotLinked](#accountandtransactionnotlinked)
- [TransactionNotProvided](#transactionnotprovided)

## AccountNotFound

Returned by the server when the client request an opperation (for example a transaction signature) with a specific account and this account can't be found on the wallet side.

```ts
title: "AccountNotFound";
description: "The account provided has not been found";
errorCode: 100;
```

## AccountNotMain

Returned by the server when the client is expecting / requesting a main account but a sub account has been selected / used.

```ts
title: "AccountNotMain";
description: "The account provided should not be a sub account";
errorCode: 101;
```

## AccountAndTransactionNotLinked

Returned by the server when the client request an opperation (for example a transaction signature) with a specific account and this account is not from the same family as the provided transaction.

```ts
title: "AccountAndTransactionNotLinked";
description: "Account and transaction must be from the same family";
errorCode: 102;
```

## TransactionNotProvided

Returned by the server when the client request a transaction signature with an invalid transaction object.

```ts
title: "TransactionNotProvided";
description: "Valid transaction required";
errorCode: 103;
```
