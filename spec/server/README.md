# Server spec

This file defines the Server spec of the Platform API. This is meant to be implemented by all wallets (we are talking about a wallets like Live, Vault or Connect).

The Server API allows a Wallet to interact with an Application and allows it's features to be used by implementing a bi-directonnal [JSON-RPC 2.0](https://www.jsonrpc.org/specification) server and the specification of the Platform API defined [here](../rpc/README.md).

The Server will allow custom UI to be used when handling RPC calls through the JSON-RPC spec of the Platform API. It will listen for a connection to a Client through a transport layer, deserialize and respond to Application requests with serialized responses or errors.

## Middlewares

The Server allows for middlewares to be used.
With middlewares the wallet is able to do permissions or validation across all RPC calls.

## Serialization and deserialization

All [`Transaction`]()s and [`Account`]()s specific to the Wallet should be serialized before being broadcasted to the Application via RPC.

Similarly, the request received from the Application, formatted as [`RawTransaction`]() and [`RawAccount`]() should be deserialized before being used by the Wallet.

## Errors

The errors returned by the server are defined [here](/spec/core/errors.md).

## Methods
