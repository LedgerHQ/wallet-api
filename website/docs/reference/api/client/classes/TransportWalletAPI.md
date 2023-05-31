---
id: "TransportWalletAPI"
title: "Class: TransportWalletAPI"
sidebar_label: "TransportWalletAPI"
sidebar_position: 0
custom_edit_url: null
---

Wallet API Transport implementation

## Hierarchy

- `default`

  ↳ **`TransportWalletAPI`**

## Constructors

### constructor

• **new TransportWalletAPI**(`walletApi`, `transportId`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `walletApi` | [`WalletAPIClient`](WalletAPIClient.md) |
| `transportId` | `string` |

#### Overrides

Transport.constructor

#### Defined in

[packages/client/src/TransportWalletAPI.ts:16](https://github.com/LedgerHQ/wallet-api/blob/main/packages/client/src/TransportWalletAPI.ts#L16)

## Properties

### \_appAPIlock

• **\_appAPIlock**: ``null`` \| `string`

#### Inherited from

Transport.\_appAPIlock

#### Defined in

node_modules/.pnpm/@ledgerhq+hw-transport@6.28.4/node_modules/@ledgerhq/hw-transport/lib/Transport.d.ts:164

___

### \_events

• **\_events**: `EventEmitter`

#### Inherited from

Transport.\_events

#### Defined in

node_modules/.pnpm/@ledgerhq+hw-transport@6.28.4/node_modules/@ledgerhq/hw-transport/lib/Transport.d.ts:116

___

### deviceModel

• **deviceModel**: `undefined` \| ``null`` \| `DeviceModel`

#### Inherited from

Transport.deviceModel

#### Defined in

node_modules/.pnpm/@ledgerhq+hw-transport@6.28.4/node_modules/@ledgerhq/hw-transport/lib/Transport.d.ts:45

___

### exchangeAtomicImpl

• **exchangeAtomicImpl**: (`f`: () => `Promise`<`void` \| `Buffer`\>) => `Promise`<`void` \| `Buffer`\>

#### Type declaration

▸ (`f`): `Promise`<`void` \| `Buffer`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `f` | () => `Promise`<`void` \| `Buffer`\> |

##### Returns

`Promise`<`void` \| `Buffer`\>

#### Inherited from

Transport.exchangeAtomicImpl

#### Defined in

node_modules/.pnpm/@ledgerhq+hw-transport@6.28.4/node_modules/@ledgerhq/hw-transport/lib/Transport.d.ts:162

___

### exchangeBusyPromise

• **exchangeBusyPromise**: `undefined` \| ``null`` \| `Promise`<`void`\>

#### Inherited from

Transport.exchangeBusyPromise

#### Defined in

node_modules/.pnpm/@ledgerhq+hw-transport@6.28.4/node_modules/@ledgerhq/hw-transport/lib/Transport.d.ts:161

___

### exchangeTimeout

• **exchangeTimeout**: `number`

#### Inherited from

Transport.exchangeTimeout

#### Defined in

node_modules/.pnpm/@ledgerhq+hw-transport@6.28.4/node_modules/@ledgerhq/hw-transport/lib/Transport.d.ts:43

___

### send

• **send**: (`cla`: `number`, `ins`: `number`, `p1`: `number`, `p2`: `number`, `data?`: `Buffer`, `statusList?`: `number`[]) => `Promise`<`Buffer`\>

#### Type declaration

▸ (`cla`, `ins`, `p1`, `p2`, `data?`, `statusList?`): `Promise`<`Buffer`\>

Send data to the device using the higher level API.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `cla` | `number` | The instruction class for the command. |
| `ins` | `number` | The instruction code for the command. |
| `p1` | `number` | The first parameter for the instruction. |
| `p2` | `number` | The second parameter for the instruction. |
| `data?` | `Buffer` | The data to be sent. Defaults to an empty buffer. |
| `statusList?` | `number`[] | A list of acceptable status codes for the response. Defaults to [StatusCodes.OK]. |

##### Returns

`Promise`<`Buffer`\>

A promise that resolves with the response data from the device.

#### Inherited from

Transport.send

#### Defined in

node_modules/.pnpm/@ledgerhq+hw-transport@6.28.4/node_modules/@ledgerhq/hw-transport/lib/Transport.d.ts:152

___

### transportId

• **transportId**: `string`

#### Defined in

[packages/client/src/TransportWalletAPI.ts:14](https://github.com/LedgerHQ/wallet-api/blob/main/packages/client/src/TransportWalletAPI.ts#L14)

___

### unresponsiveTimeout

• **unresponsiveTimeout**: `number`

#### Inherited from

Transport.unresponsiveTimeout

#### Defined in

node_modules/.pnpm/@ledgerhq+hw-transport@6.28.4/node_modules/@ledgerhq/hw-transport/lib/Transport.d.ts:44

___

### walletApi

• **walletApi**: [`WalletAPIClient`](WalletAPIClient.md)

#### Defined in

[packages/client/src/TransportWalletAPI.ts:12](https://github.com/LedgerHQ/wallet-api/blob/main/packages/client/src/TransportWalletAPI.ts#L12)

___

### ErrorMessage\_ListenTimeout

▪ `Static` **ErrorMessage\_ListenTimeout**: `string`

#### Inherited from

Transport.ErrorMessage\_ListenTimeout

#### Defined in

node_modules/.pnpm/@ledgerhq+hw-transport@6.28.4/node_modules/@ledgerhq/hw-transport/lib/Transport.d.ts:166

___

### ErrorMessage\_NoDeviceFound

▪ `Static` **ErrorMessage\_NoDeviceFound**: `string`

#### Inherited from

Transport.ErrorMessage\_NoDeviceFound

#### Defined in

node_modules/.pnpm/@ledgerhq+hw-transport@6.28.4/node_modules/@ledgerhq/hw-transport/lib/Transport.d.ts:167

## Methods

### close

▸ **close**(): `Promise`<`void`\>

Close the current transport communication.

**`Throws`**

[RpcError](RpcError.md) if an error occured on server side

#### Returns

`Promise`<`void`\>

#### Overrides

Transport.close

#### Defined in

[packages/client/src/TransportWalletAPI.ts:79](https://github.com/LedgerHQ/wallet-api/blob/main/packages/client/src/TransportWalletAPI.ts#L79)

___

### decorateAppAPIMethod

▸ **decorateAppAPIMethod**<`R`, `A`\>(`methodName`, `f`, `ctx`, `scrambleKey`): (...`args`: `A`) => `Promise`<`R`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `R` | `R` |
| `A` | extends `any`[] |

#### Parameters

| Name | Type |
| :------ | :------ |
| `methodName` | `string` |
| `f` | (...`args`: `A`) => `Promise`<`R`\> |
| `ctx` | `any` |
| `scrambleKey` | `string` |

#### Returns

`fn`

▸ (`...args`): `Promise`<`R`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `A` |

##### Returns

`Promise`<`R`\>

#### Inherited from

Transport.decorateAppAPIMethod

#### Defined in

node_modules/.pnpm/@ledgerhq+hw-transport@6.28.4/node_modules/@ledgerhq/hw-transport/lib/Transport.d.ts:165

___

### decorateAppAPIMethods

▸ **decorateAppAPIMethods**(`self`, `methods`, `scrambleKey`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `self` | `Record`<`string`, `any`\> |
| `methods` | `string`[] |
| `scrambleKey` | `string` |

#### Returns

`void`

#### Inherited from

Transport.decorateAppAPIMethods

#### Defined in

node_modules/.pnpm/@ledgerhq+hw-transport@6.28.4/node_modules/@ledgerhq/hw-transport/lib/Transport.d.ts:163

___

### emit

▸ **emit**(`event`, `...args`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` |
| `...args` | `any` |

#### Returns

`void`

#### Inherited from

Transport.emit

#### Defined in

node_modules/.pnpm/@ledgerhq+hw-transport@6.28.4/node_modules/@ledgerhq/hw-transport/lib/Transport.d.ts:129

___

### exchange

▸ **exchange**(`apdu`): `Promise`<`Buffer`\>

Exchange with the device using APDU protocol.

**`Throws`**

[RpcError](RpcError.md) if an error occured on server side

#### Parameters

| Name | Type |
| :------ | :------ |
| `apdu` | `Buffer` |

#### Returns

`Promise`<`Buffer`\>

a promise of apdu response

#### Overrides

Transport.exchange

#### Defined in

[packages/client/src/TransportWalletAPI.ts:55](https://github.com/LedgerHQ/wallet-api/blob/main/packages/client/src/TransportWalletAPI.ts#L55)

___

### exchangeBulk

▸ **exchangeBulk**(`apdus`, `observer`): `Subscription`

Send apdus in batch to the device using a low level API.
The default implementation is to call exchange for each apdu.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `apdus` | `Buffer`[] | array of apdus to send. |
| `observer` | `Readonly`<{ `complete`: () => `unknown` ; `error`: (`e`: `unknown`) => `unknown` ; `next`: (`event`: `Buffer`) => `unknown`  }\> | an observer that will receive the response of each apdu. |

#### Returns

`Subscription`

A Subscription object on which you can call ".unsubscribe()" to stop sending apdus.

#### Inherited from

Transport.exchangeBulk

#### Defined in

node_modules/.pnpm/@ledgerhq+hw-transport@6.28.4/node_modules/@ledgerhq/hw-transport/lib/Transport.d.ts:103

___

### off

▸ **off**(`eventName`, `cb`): `void`

Stop listening to an event on an instance of transport.

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `cb` | (...`args`: `any`[]) => `any` |

#### Returns

`void`

#### Inherited from

Transport.off

#### Defined in

node_modules/.pnpm/@ledgerhq+hw-transport@6.28.4/node_modules/@ledgerhq/hw-transport/lib/Transport.d.ts:128

___

### on

▸ **on**(`eventName`, `cb`): `void`

Listen for an event on the transport instance.
Transport implementations may have specific events. Common events include:
"disconnect" : triggered when the transport is disconnected.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventName` | `string` | The name of the event to listen for. |
| `cb` | (...`args`: `any`[]) => `any` | The callback function to be invoked when the event occurs. |

#### Returns

`void`

#### Inherited from

Transport.on

#### Defined in

node_modules/.pnpm/@ledgerhq+hw-transport@6.28.4/node_modules/@ledgerhq/hw-transport/lib/Transport.d.ts:124

___

### setDebugMode

▸ **setDebugMode**(): `void`

Enable or not logs of the binary exchange

#### Returns

`void`

#### Inherited from

Transport.setDebugMode

#### Defined in

node_modules/.pnpm/@ledgerhq+hw-transport@6.28.4/node_modules/@ledgerhq/hw-transport/lib/Transport.d.ts:133

___

### setExchangeTimeout

▸ **setExchangeTimeout**(`exchangeTimeout`): `void`

Set a timeout (in milliseconds) for the exchange call. Only some transport might implement it. (e.g. U2F)

#### Parameters

| Name | Type |
| :------ | :------ |
| `exchangeTimeout` | `number` |

#### Returns

`void`

#### Inherited from

Transport.setExchangeTimeout

#### Defined in

node_modules/.pnpm/@ledgerhq+hw-transport@6.28.4/node_modules/@ledgerhq/hw-transport/lib/Transport.d.ts:137

___

### setExchangeUnresponsiveTimeout

▸ **setExchangeUnresponsiveTimeout**(`unresponsiveTimeout`): `void`

Define the delay before emitting "unresponsive" on an exchange that does not respond

#### Parameters

| Name | Type |
| :------ | :------ |
| `unresponsiveTimeout` | `number` |

#### Returns

`void`

#### Inherited from

Transport.setExchangeUnresponsiveTimeout

#### Defined in

node_modules/.pnpm/@ledgerhq+hw-transport@6.28.4/node_modules/@ledgerhq/hw-transport/lib/Transport.d.ts:141

___

### setScrambleKey

▸ **setScrambleKey**(): `void`

#### Returns

`void`

#### Overrides

Transport.setScrambleKey

#### Defined in

[packages/client/src/TransportWalletAPI.ts:72](https://github.com/LedgerHQ/wallet-api/blob/main/packages/client/src/TransportWalletAPI.ts#L72)

___

### create

▸ `Static` **create**(`openTimeout?`, `listenTimeout?`): `Promise`<`default`\>

create() allows to open the first descriptor available or
throw if there is none or if timeout is reached.
This is a light helper, alternative to using listen() and open() (that you may need for any more advanced usecase)

**`Example`**

```ts
TransportFoo.create().then(transport => ...)
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `openTimeout?` | `number` |
| `listenTimeout?` | `number` |

#### Returns

`Promise`<`default`\>

#### Inherited from

Transport.create

#### Defined in

node_modules/.pnpm/@ledgerhq+hw-transport@6.28.4/node_modules/@ledgerhq/hw-transport/lib/Transport.d.ts:160

___

### isSupported

▸ `Static` **isSupported**(): `Promise`<`boolean`\>

Check if Wallet API transport is supported.

#### Returns

`Promise`<`boolean`\>

#### Overrides

Transport.isSupported

#### Defined in

[packages/client/src/TransportWalletAPI.ts:25](https://github.com/LedgerHQ/wallet-api/blob/main/packages/client/src/TransportWalletAPI.ts#L25)

___

### list

▸ `Static` **list**(): `Promise`<`never`[]\>

This transport is not discoverable

#### Returns

`Promise`<`never`[]\>

#### Overrides

Transport.list

#### Defined in

[packages/client/src/TransportWalletAPI.ts:30](https://github.com/LedgerHQ/wallet-api/blob/main/packages/client/src/TransportWalletAPI.ts#L30)

___

### listen

▸ `Static` **listen**(`_observer`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_observer` | `unknown` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `unsubscribe` | () => `void` |

#### Overrides

Transport.listen

#### Defined in

[packages/client/src/TransportWalletAPI.ts:32](https://github.com/LedgerHQ/wallet-api/blob/main/packages/client/src/TransportWalletAPI.ts#L32)

___

### open

▸ `Static` **open**(`«destructured»`): `Promise`<`default`\>

Create a Ledger transport with the Wallet API transport

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `transportId` | `string` |
| › `walletApi` | [`WalletAPIClient`](WalletAPIClient.md) |

#### Returns

`Promise`<`default`\>

#### Overrides

Transport.open

#### Defined in

[packages/client/src/TransportWalletAPI.ts:39](https://github.com/LedgerHQ/wallet-api/blob/main/packages/client/src/TransportWalletAPI.ts#L39)
