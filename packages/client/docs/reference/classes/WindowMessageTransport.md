[@ledgerhq/live-app-sdk](../README.md) / [Exports](../modules.md) / WindowMessageTransport

# Class: WindowMessageTransport

## Implements

- [`Transport`](../interfaces/Transport.md)

## Table of contents

### Constructors

- [constructor](WindowMessageTransport.md#constructor)

### Properties

- [_onMessage](WindowMessageTransport.md#_onmessage)
- [logger](WindowMessageTransport.md#logger)
- [target](WindowMessageTransport.md#target)

### Accessors

- [onMessage](WindowMessageTransport.md#onmessage)

### Methods

- [_onMessageEvent](WindowMessageTransport.md#_onmessageevent)
- [connect](WindowMessageTransport.md#connect)
- [disconnect](WindowMessageTransport.md#disconnect)
- [send](WindowMessageTransport.md#send)

## Constructors

### constructor

• **new WindowMessageTransport**(`target?`, `logger?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `Window` |
| `logger` | `default` |

#### Defined in

[transports/windowMessageTransport.ts:14](https://github.com/LedgerHQ/live-app-sdk/blob/1d8d8d5/src/transports/windowMessageTransport.ts#L14)

## Properties

### \_onMessage

• `Private` `Optional` **\_onMessage**: [`MessageHandler`](../modules.md#messagehandler)

#### Defined in

[transports/windowMessageTransport.ts:12](https://github.com/LedgerHQ/live-app-sdk/blob/1d8d8d5/src/transports/windowMessageTransport.ts#L12)

___

### logger

• `Private` **logger**: `default`

#### Defined in

[transports/windowMessageTransport.ts:10](https://github.com/LedgerHQ/live-app-sdk/blob/1d8d8d5/src/transports/windowMessageTransport.ts#L10)

___

### target

• `Private` **target**: `Window`

#### Defined in

[transports/windowMessageTransport.ts:8](https://github.com/LedgerHQ/live-app-sdk/blob/1d8d8d5/src/transports/windowMessageTransport.ts#L8)

## Accessors

### onMessage

• `get` **onMessage**(): `undefined` \| [`MessageHandler`](../modules.md#messagehandler)

A function to handle new messages coming from the Ledger Live platform

#### Returns

`undefined` \| [`MessageHandler`](../modules.md#messagehandler)

#### Implementation of

[Transport](../interfaces/Transport.md).[onMessage](../interfaces/Transport.md#onmessage)

#### Defined in

[transports/windowMessageTransport.ts:79](https://github.com/LedgerHQ/live-app-sdk/blob/1d8d8d5/src/transports/windowMessageTransport.ts#L79)

• `set` **onMessage**(`handler`): `void`

A function to handle new messages coming from the Ledger Live platform

#### Parameters

| Name | Type |
| :------ | :------ |
| `handler` | `undefined` \| [`MessageHandler`](../modules.md#messagehandler) |

#### Returns

`void`

#### Implementation of

[Transport](../interfaces/Transport.md).[onMessage](../interfaces/Transport.md#onmessage)

#### Defined in

[transports/windowMessageTransport.ts:75](https://github.com/LedgerHQ/live-app-sdk/blob/1d8d8d5/src/transports/windowMessageTransport.ts#L75)

## Methods

### \_onMessageEvent

▸ **_onMessageEvent**(`event`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `MessageEvent`<`any`\> |

#### Returns

`void`

#### Defined in

[transports/windowMessageTransport.ts:41](https://github.com/LedgerHQ/live-app-sdk/blob/1d8d8d5/src/transports/windowMessageTransport.ts#L41)

___

### connect

▸ **connect**(): `void`

Connect the transport instance

#### Returns

`void`

#### Implementation of

[Transport](../interfaces/Transport.md).[connect](../interfaces/Transport.md#connect)

#### Defined in

[transports/windowMessageTransport.ts:19](https://github.com/LedgerHQ/live-app-sdk/blob/1d8d8d5/src/transports/windowMessageTransport.ts#L19)

___

### disconnect

▸ **disconnect**(): `void`

Disconnect the transport instance

#### Returns

`void`

#### Implementation of

[Transport](../interfaces/Transport.md).[disconnect](../interfaces/Transport.md#disconnect)

#### Defined in

[transports/windowMessageTransport.ts:30](https://github.com/LedgerHQ/live-app-sdk/blob/1d8d8d5/src/transports/windowMessageTransport.ts#L30)

___

### send

▸ **send**(`response`): `Promise`<`void`\>

A function to send new messages to the Ledger Live platform

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `unknown` |

#### Returns

`Promise`<`void`\>

#### Implementation of

[Transport](../interfaces/Transport.md).[send](../interfaces/Transport.md#send)

#### Defined in

[transports/windowMessageTransport.ts:83](https://github.com/LedgerHQ/live-app-sdk/blob/1d8d8d5/src/transports/windowMessageTransport.ts#L83)
