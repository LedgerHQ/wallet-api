[@ledgerhq/live-app-sdk](../README.md) / [Exports](../modules.md) / Transport

# Interface: Transport

A transport protocol used to communicate with the Ledger Live platform

**`alpha`**

## Implemented by

- [`WindowMessageTransport`](../classes/WindowMessageTransport.md)

## Table of contents

### Properties

- [onMessage](Transport.md#onmessage)

### Methods

- [connect](Transport.md#connect)
- [disconnect](Transport.md#disconnect)
- [send](Transport.md#send)

## Properties

### onMessage

• **onMessage**: `undefined` \| [`MessageHandler`](../modules.md#messagehandler)

A function to handle new messages coming from the Ledger Live platform

#### Defined in

[types.ts:37](https://github.com/LedgerHQ/live-app-sdk/blob/4366fd9/src/types.ts#L37)

## Methods

### connect

▸ **connect**(): `void`

Connect the transport instance

#### Returns

`void`

#### Defined in

[types.ts:29](https://github.com/LedgerHQ/live-app-sdk/blob/4366fd9/src/types.ts#L29)

___

### disconnect

▸ **disconnect**(): `void`

Disconnect the transport instance

#### Returns

`void`

#### Defined in

[types.ts:33](https://github.com/LedgerHQ/live-app-sdk/blob/4366fd9/src/types.ts#L33)

___

### send

▸ **send**(`payload`): `Promise`<`void`\>

A function to send new messages to the Ledger Live platform

#### Parameters

| Name | Type |
| :------ | :------ |
| `payload` | `unknown` |

#### Returns

`Promise`<`void`\>

#### Defined in

[types.ts:41](https://github.com/LedgerHQ/live-app-sdk/blob/4366fd9/src/types.ts#L41)
