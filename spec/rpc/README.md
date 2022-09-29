# RPC spec

This file defines the JSON-RPC spec of the Platform API. This is meant to be implemented by all clients.

## Support

|                                 | [Platform-TS](https://github.com/LedgerHQ/platform-sdk/) |
| ------------------------------- | :------------------------------------------------------: |
| JSON-RPC 2.0 (Over postMessage) |                            ✅                            |
| JSON-RPC 2.0 (Over HTTP)        |                            ❌                            |
| JSON-RPC 2.0 (Over HTTPS)       |                            ❌                            |
| JSON-RPC 2.0 (Over WS)          |                            ❌                            |

| Routes                                                    | [Platform-TS](https://github.com/LedgerHQ/platform-sdk/) |
| --------------------------------------------------------- | :------------------------------------------------------: |
| [SignTransaction](#signtransaction)                       |                            ✅                            |
| [SignMessage](#signmessage)                               |                            ✅                            |
| [BroadcastSignedTransaction](#broadcastsignedtransaction) |                            ✅                            |
| [ListAccounts](#listaccounts)                             |                            ✅                            |
| [RequestAccounts](#requestaccounts)                       |                            ✅                            |
| [Receive](#receive)                                       |                            ✅                            |
| [SynchronizeAccount](#synchronizeaccount)                 |                            ❌                            |
| [ListCurrencies](#listcurrencies)                         |                            ✅                            |
| [StartExchange](#startexchange)                           |                            ✅                            |
| [CompleteExchange](#completeexchange)                     |                            ✅                            |
| [GetCapabilities](#getcapabilities)                       |                            ❌                            |

## Info Routes

### SignTransaction

Let the user sign a transaction through Ledger Live

Returns the raw signed transaction to broadcast.

#### Parameters

- `accountId (string)`: Ledger Live id of the account
- `transaction (RawTransaction)`: The transaction object in the currency family-specific format
- `params? (SignParams)`: Parameters for the sign modal
- `params.useApp? (string)`: The name of the Ledger Nano app to use for the signing process

#### Request

```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "method": "transaction.sign",
  "params": {
    "accountId": "",
    "transaction": {},
    "params": {
      "useApp": ""
    }
  }
}
```

#### Response

```json
{
  "jsonrpc": "2.0",
  "id": -1,
  "result": {}
}
```

### SignMessage

Let the user sign the provided message through Ledger Live.
In Ethereum context, this is an [EIP-191 message](https://github.com/ethereum/EIPs/blob/master/EIPS/eip-191.md) or an [EIP-712 message](https://github.com/ethereum/EIPs/blob/master/EIPS/eip-712.md)

Returns the message signed.

#### Parameters

- `accountId (string)`: Ledger Live id of the account
- `message (hexString)`: Message the user should sign

#### Request

```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "method": "message.sign",
  "params": {
    "accountId": "",
    "message": ""
  }
}
```

#### Response

```json
{
  "jsonrpc": "2.0",
  "id": -1,
  "result": {}
}
```

### BroadcastSignedTransaction

Broadcast a previously signed transaction through Ledger Live.

Returns the hash of the transaction.

#### Parameters

- `accountId (string)`: Ledger Live id of the account
- `signedTransaction (hexString)`: A **RawSignedTransaction** returned by Ledger Live when signing with [SignTransaction](#signtransaction)

#### Request

```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "method": "transaction.broadcast",
  "params": {
    "accountId": "",
    "signedTransaction": ""
  }
}
```

#### Response

```json
{
  "jsonrpc": "2.0",
  "id": -1,
  "result": {}
}
```

### ListAccounts

List accounts added by user on Ledger Live.

Returns the list of accounts added by the current user on Ledger Live.

#### Parameters

- `includeTokens? (boolean)`: Allow the user to pick token accounts.

#### Request

```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "method": "account.list",
  "params": {
    "includeTokens": false
  }
}
```

#### Response

```json
{
  "jsonrpc": "2.0",
  "id": -1,
  "result": [{}]
}
```

### RequestAccounts

Let user choose an account in a Ledger Live, providing filters for choosing currency or allowing add account.

Returns the account selected by the user.

#### Parameters

- `currencies? (string[])`: Select a set of currencies by id. Globing is enabled.
- `allowAddAccount? (boolean)`: Allow the user to create a new account during the flow.
- `includeTokens? (boolean)`: Allow the user to pick token accounts.

#### Request

```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "method": "account.request",
  "params": {
    "currencies": [],
    "allowAddAccount": true,
    "includeTokens": false
  }
}
```

#### Response

```json
{
  "jsonrpc": "2.0",
  "id": -1,
  "result": {}
}
```

### Receive

Let user verify it's account address on his device through Ledger Live.

Returns the verified address or an error message if the verification doesn't succeed.

#### Parameters

- `accountId (string)`: Ledger Live id of the account

#### Request

```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "method": "account.receive",
  "params": {
    "accountId": ""
  }
}
```

#### Response

```json
{
  "jsonrpc": "2.0",
  "id": -1,
  "result": ""
}
```

### SynchronizeAccount

Synchronize an account with its network and return an updated view of the account.

Returns an updated view of the account.

#### Parameters

- `accountId (string)`: Ledger Live id of the account

#### Request

```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "method": "account.sync",
  "params": {
    "accountId": ""
  }
}
```

#### Response

```json
{
  "jsonrpc": "2.0",
  "id": -1,
  "result": {}
}
```

### ListCurrencies

List cryptocurrencies supported by Ledger Live, providing filters by name or ticker.

Returns the list of corresponding cryptocurrencies.

#### Parameters

- `currencies? (string[])`: Select a set of currencies by id. Globing is enabled.
- `includeTokens? (boolean)`: Include tokens in the results.

#### Request

```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "method": "currency.list",
  "params": {
    "currencies": [],
    "includeTokens": false
  }
}
```

#### Response

```json
{
  "jsonrpc": "2.0",
  "id": -1,
  "result": [{}]
}
```

### StartExchange

Start the exchange process by generating a nonce on Ledger device.

Returns a transaction ID used to complete the exchange process.

#### Parameters

- `exchangeType (ExchangeType)`: used by the exchange transport to discern between swap/sell/fund

#### Request

```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "method": "exchange.start",
  "params": {
    "exchangeType": "SWAP"
  }
}
```

#### Response

```json
{
  "jsonrpc": "2.0",
  "id": -1,
  "result": {}
}
```

### CompleteExchange

Complete an exchange process by passing by the exchange content and its signature.
User will be prompted on its device to approve the exchange.
If the exchange is validated, the transaction is then signed and broadcasted to the network.

Returns the broadcasted transaction details.

#### Parameters

- `provider (string)`: Used to verify the signature
- `fromAccountId (string)`: Live identifier of the account used as a source for the tx
- `toAccountId (string)`: (Swap) Live identifier of the account used as a destination
- `transaction (RawTransaction)`: Transaction containing the recipient and amount
- `binaryPayload (hexString)`: Blueprint of the data that we'll allow signing
- `signature (hexString)`: Ensures the source of the payload
- `feesStrategy (FeesLevel)`: Slow / Medium / Fast
- `exchangeType (ExchangeType)`: used by the exchange transport to discern between swap/sell/fund

#### Request

```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "method": "exchange.complete",
  "params": {
    "provider": "",
    "fromAccountId": "",
    "toAccountId": "",
    "transaction": {},
    "binaryPayload": "",
    "signature": "",
    "feesStrategy": "medium",
    "exchangeType": "SWAP"
  }
}
```

#### Response

```json
{
  "jsonrpc": "2.0",
  "id": -1,
  "result": {}
}
```

### GetCapabilities

Get capabilities of the server as a list of available rpc calls.

Returns a dictionary of booleans.

#### Parameters

No parameters

#### Request

```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "method": "wallet.getCapabilities",
  "params": {}
}
```

#### Response

```json
{
  "jsonrpc": "2.0",
  "id": -1,
  "result": {
    "transaction.sign": true,
    "transaction.broadcast": true,
    "message.sign": true,
    "currency.list": true
  }
}
```
