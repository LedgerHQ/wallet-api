---
id: "WindowMessageTransport"
title: "Class: WindowMessageTransport"
sidebar_label: "WindowMessageTransport"
sidebar_position: 0
custom_edit_url: null
---

A transport protocol used to communicate with the Ledger Live platform

## Implements

- [`Transport`](../interfaces/Transport.md)

## Constructors

### constructor

• **new WindowMessageTransport**(`target?`, `logger?`)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `target` | `Window` | `window` |
| `logger` | `Logger` | `defaultLogger` |

#### Defined in

[packages/core/src/transports/WindowMessageTransport.ts:13](https://github.com/LedgerHQ/wallet-api/blob/main/packages/core/src/transports/WindowMessageTransport.ts#L13)

## Properties

### \_onMessage

• `Private` **\_onMessage**: `undefined` \| [`MessageHandler`](../#messagehandler)

#### Defined in

[packages/core/src/transports/WindowMessageTransport.ts:11](https://github.com/LedgerHQ/wallet-api/blob/main/packages/core/src/transports/WindowMessageTransport.ts#L11)

___

### logger

• `Private` **logger**: `Logger`

#### Defined in

[packages/core/src/transports/WindowMessageTransport.ts:9](https://github.com/LedgerHQ/wallet-api/blob/main/packages/core/src/transports/WindowMessageTransport.ts#L9)

___

### target

• `Private` **target**: `Window`

#### Defined in

[packages/core/src/transports/WindowMessageTransport.ts:7](https://github.com/LedgerHQ/wallet-api/blob/main/packages/core/src/transports/WindowMessageTransport.ts#L7)

## Accessors

### onMessage

• `get` **onMessage**(): `undefined` \| [`MessageHandler`](../#messagehandler)

A function to handle new messages coming from the Ledger Live platform

#### Returns

`undefined` \| [`MessageHandler`](../#messagehandler)

#### Implementation of

[Transport](../interfaces/Transport.md).[onMessage](../interfaces/Transport.md#onmessage)

#### Defined in

[packages/core/src/transports/WindowMessageTransport.ts:82](https://github.com/LedgerHQ/wallet-api/blob/main/packages/core/src/transports/WindowMessageTransport.ts#L82)

• `set` **onMessage**(`handler`): `void`

A function to handle new messages coming from the Ledger Live platform

#### Parameters

| Name | Type |
| :------ | :------ |
| `handler` | `undefined` \| [`MessageHandler`](../#messagehandler) |

#### Returns

`void`

#### Implementation of

[Transport](../interfaces/Transport.md).[onMessage](../interfaces/Transport.md#onmessage)

#### Defined in

[packages/core/src/transports/WindowMessageTransport.ts:78](https://github.com/LedgerHQ/wallet-api/blob/main/packages/core/src/transports/WindowMessageTransport.ts#L78)

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

[packages/core/src/transports/WindowMessageTransport.ts:40](https://github.com/LedgerHQ/wallet-api/blob/main/packages/core/src/transports/WindowMessageTransport.ts#L40)

___

### connect

▸ **connect**(): `void`

#### Returns

`void`

#### Defined in

[packages/core/src/transports/WindowMessageTransport.ts:18](https://github.com/LedgerHQ/wallet-api/blob/main/packages/core/src/transports/WindowMessageTransport.ts#L18)

___

### disconnect

▸ **disconnect**(): `void`

#### Returns

`void`

#### Defined in

[packages/core/src/transports/WindowMessageTransport.ts:29](https://github.com/LedgerHQ/wallet-api/blob/main/packages/core/src/transports/WindowMessageTransport.ts#L29)

___

### send

▸ **send**(`message`): `Promise`<`void`\>

A function to send new messages to the Ledger Live platform

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` |

#### Returns

`Promise`<`void`\>

#### Implementation of

[Transport](../interfaces/Transport.md).[send](../interfaces/Transport.md#send)

#### Defined in

[packages/core/src/transports/WindowMessageTransport.ts:86](https://github.com/LedgerHQ/wallet-api/blob/main/packages/core/src/transports/WindowMessageTransport.ts#L86)
