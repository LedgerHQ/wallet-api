---
id: "Transport"
title: "Interface: Transport"
sidebar_label: "Transport"
sidebar_position: 0
custom_edit_url: null
---

A transport protocol used to communicate with the Ledger Live platform

## Implemented by

- [`WindowMessageTransport`](../classes/WindowMessageTransport.md)

## Properties

### onMessage

• **onMessage**: `undefined` \| [`MessageHandler`](../#messagehandler)

A function to handle new messages coming from the Ledger Live platform

#### Defined in

[packages/core/src/transports/types.ts:17](https://github.com/LedgerHQ/wallet-api/blob/main/packages/core/src/transports/types.ts#L17)

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

[packages/core/src/transports/types.ts:21](https://github.com/LedgerHQ/wallet-api/blob/main/packages/core/src/transports/types.ts#L21)
