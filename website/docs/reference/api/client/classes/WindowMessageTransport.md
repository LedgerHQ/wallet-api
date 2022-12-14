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

| Name | Type |
| :------ | :------ |
| `target?` | `Window` |
| `logger?` | `Logger` |

#### Defined in

packages/core/lib/transports/WindowMessageTransport.d.ts:7

## Properties

### \_onMessage

• `Private` **\_onMessage**: `any`

#### Defined in

packages/core/lib/transports/WindowMessageTransport.d.ts:6

___

### \_onMessageEvent

• **\_onMessageEvent**: (`event`: `MessageEvent`<`any`\>) => `void`

#### Type declaration

▸ (`event`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `MessageEvent`<`any`\> |

##### Returns

`void`

#### Defined in

packages/core/lib/transports/WindowMessageTransport.d.ts:10

___

### connect

• **connect**: () => `void`

#### Type declaration

▸ (): `void`

##### Returns

`void`

#### Defined in

packages/core/lib/transports/WindowMessageTransport.d.ts:8

___

### disconnect

• **disconnect**: () => `void`

#### Type declaration

▸ (): `void`

##### Returns

`void`

#### Defined in

packages/core/lib/transports/WindowMessageTransport.d.ts:9

___

### logger

• `Private` **logger**: `any`

#### Defined in

packages/core/lib/transports/WindowMessageTransport.d.ts:5

___

### send

• **send**: (`message`: `string`) => `Promise`<`void`\>

#### Type declaration

▸ (`message`): `Promise`<`void`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` |

##### Returns

`Promise`<`void`\>

#### Implementation of

[Transport](../interfaces/Transport.md).[send](../interfaces/Transport.md#send)

#### Defined in

packages/core/lib/transports/WindowMessageTransport.d.ts:13

___

### target

• `Private` **target**: `any`

#### Defined in

packages/core/lib/transports/WindowMessageTransport.d.ts:4

## Accessors

### onMessage

• `get` **onMessage**(): `undefined` \| [`MessageHandler`](../#messagehandler)

A function to handle new messages coming from the Ledger Live platform

#### Returns

`undefined` \| [`MessageHandler`](../#messagehandler)

#### Implementation of

[Transport](../interfaces/Transport.md).[onMessage](../interfaces/Transport.md#onmessage)

#### Defined in

packages/core/lib/transports/WindowMessageTransport.d.ts:12

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

packages/core/lib/transports/WindowMessageTransport.d.ts:11
