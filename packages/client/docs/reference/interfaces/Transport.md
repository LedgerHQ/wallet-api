[@ledgerhq/wallet-api-client](../README.md) / [Exports](../modules.md) / Transport

# Interface: Transport

A transport protocol used to communicate with the Ledger Live platform

## Implemented by

- [`WindowMessageTransport`](../classes/WindowMessageTransport.md)

## Table of contents

### Properties

- [onMessage](Transport.md#onmessage)

### Methods

- [send](Transport.md#send)

## Properties

### onMessage

• **onMessage**: `undefined` \| [`MessageHandler`](../modules.md#messagehandler)

A function to handle new messages coming from the Ledger Live platform

#### Defined in

packages/core/lib/transports/types.d.ts:16

## Methods

### send

▸ **send**(`message`): `void`

A function to send new messages to the Ledger Live platform

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` |

#### Returns

`void`

#### Defined in

packages/core/lib/transports/types.d.ts:20
