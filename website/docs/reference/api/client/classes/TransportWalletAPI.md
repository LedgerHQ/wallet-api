---
id: "TransportWalletAPI"
title: "Class: TransportWalletAPI"
sidebar_label: "TransportWalletAPI"
sidebar_position: 0
custom_edit_url: null
---

Wallet API Transport implementation

## Hierarchy

- [`HWTransport`](HWTransport.md)

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

[HWTransport](HWTransport.md).[constructor](HWTransport.md#constructor)

#### Defined in

[packages/client/src/TransportWalletAPI.ts:16](https://github.com/LedgerHQ/wallet-api/blob/main/packages/client/src/TransportWalletAPI.ts#L16)

## Properties

### \_appAPIlock

• **\_appAPIlock**: ``null`` \| `string`

#### Inherited from

[HWTransport](HWTransport.md).[_appAPIlock](HWTransport.md#_appapilock)

#### Defined in

node_modules/.pnpm/@ledgerhq+hw-transport@6.27.6/node_modules/@ledgerhq/hw-transport/lib/Transport.d.ts:149

___

### \_events

• **\_events**: `EventEmitter`

#### Inherited from

[HWTransport](HWTransport.md).[_events](HWTransport.md#_events)

#### Defined in

node_modules/.pnpm/@ledgerhq+hw-transport@6.27.6/node_modules/@ledgerhq/hw-transport/lib/Transport.d.ts:103

___

### deviceModel

• **deviceModel**: `undefined` \| ``null`` \| `DeviceModel`

#### Inherited from

[HWTransport](HWTransport.md).[deviceModel](HWTransport.md#devicemodel)

#### Defined in

node_modules/.pnpm/@ledgerhq+hw-transport@6.27.6/node_modules/@ledgerhq/hw-transport/lib/Transport.d.ts:42

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

[HWTransport](HWTransport.md).[exchangeAtomicImpl](HWTransport.md#exchangeatomicimpl)

#### Defined in

node_modules/.pnpm/@ledgerhq+hw-transport@6.27.6/node_modules/@ledgerhq/hw-transport/lib/Transport.d.ts:147

___

### exchangeBusyPromise

• **exchangeBusyPromise**: `undefined` \| ``null`` \| `Promise`<`void`\>

#### Inherited from

[HWTransport](HWTransport.md).[exchangeBusyPromise](HWTransport.md#exchangebusypromise)

#### Defined in

node_modules/.pnpm/@ledgerhq+hw-transport@6.27.6/node_modules/@ledgerhq/hw-transport/lib/Transport.d.ts:146

___

### exchangeTimeout

• **exchangeTimeout**: `number`

#### Inherited from

[HWTransport](HWTransport.md).[exchangeTimeout](HWTransport.md#exchangetimeout)

#### Defined in

node_modules/.pnpm/@ledgerhq+hw-transport@6.27.6/node_modules/@ledgerhq/hw-transport/lib/Transport.d.ts:40

___

### send

• **send**: (`cla`: `number`, `ins`: `number`, `p1`: `number`, `p2`: `number`, `data?`: `Buffer`, `statusList?`: `number`[]) => `Promise`<`Buffer`\>

#### Type declaration

▸ (`cla`, `ins`, `p1`, `p2`, `data?`, `statusList?`): `Promise`<`Buffer`\>

wrapper on top of exchange to simplify work of the implementation.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `cla` | `number` |  |
| `ins` | `number` |  |
| `p1` | `number` |  |
| `p2` | `number` |  |
| `data?` | `Buffer` |  |
| `statusList?` | `number`[] | is a list of accepted status code (shorts). [0x9000] by default |

##### Returns

`Promise`<`Buffer`\>

a Promise of response buffer

#### Inherited from

[HWTransport](HWTransport.md).[send](HWTransport.md#send)

#### Defined in

node_modules/.pnpm/@ledgerhq+hw-transport@6.27.6/node_modules/@ledgerhq/hw-transport/lib/Transport.d.ts:137

___

### transportId

• **transportId**: `string`

#### Defined in

[packages/client/src/TransportWalletAPI.ts:14](https://github.com/LedgerHQ/wallet-api/blob/main/packages/client/src/TransportWalletAPI.ts#L14)

___

### unresponsiveTimeout

• **unresponsiveTimeout**: `number`

#### Inherited from

[HWTransport](HWTransport.md).[unresponsiveTimeout](HWTransport.md#unresponsivetimeout)

#### Defined in

node_modules/.pnpm/@ledgerhq+hw-transport@6.27.6/node_modules/@ledgerhq/hw-transport/lib/Transport.d.ts:41

___

### walletApi

• **walletApi**: [`WalletAPIClient`](WalletAPIClient.md)

#### Defined in

[packages/client/src/TransportWalletAPI.ts:12](https://github.com/LedgerHQ/wallet-api/blob/main/packages/client/src/TransportWalletAPI.ts#L12)

___

### ErrorMessage\_ListenTimeout

▪ `Static` **ErrorMessage\_ListenTimeout**: `string`

#### Inherited from

[HWTransport](HWTransport.md).[ErrorMessage_ListenTimeout](HWTransport.md#errormessage_listentimeout)

#### Defined in

node_modules/.pnpm/@ledgerhq+hw-transport@6.27.6/node_modules/@ledgerhq/hw-transport/lib/Transport.d.ts:151

___

### ErrorMessage\_NoDeviceFound

▪ `Static` **ErrorMessage\_NoDeviceFound**: `string`

#### Inherited from

[HWTransport](HWTransport.md).[ErrorMessage_NoDeviceFound](HWTransport.md#errormessage_nodevicefound)

#### Defined in

node_modules/.pnpm/@ledgerhq+hw-transport@6.27.6/node_modules/@ledgerhq/hw-transport/lib/Transport.d.ts:152

## Methods

### close

▸ **close**(): `Promise`<`void`\>

Close the current transport communication.

**`Throws`**

[RpcError](RpcError.md) if an error occured on server side

#### Returns

`Promise`<`void`\>

#### Overrides

[HWTransport](HWTransport.md).[close](HWTransport.md#close)

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

[HWTransport](HWTransport.md).[decorateAppAPIMethod](HWTransport.md#decorateappapimethod)

#### Defined in

node_modules/.pnpm/@ledgerhq+hw-transport@6.27.6/node_modules/@ledgerhq/hw-transport/lib/Transport.d.ts:150

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

[HWTransport](HWTransport.md).[decorateAppAPIMethods](HWTransport.md#decorateappapimethods)

#### Defined in

node_modules/.pnpm/@ledgerhq+hw-transport@6.27.6/node_modules/@ledgerhq/hw-transport/lib/Transport.d.ts:148

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

[HWTransport](HWTransport.md).[emit](HWTransport.md#emit)

#### Defined in

node_modules/.pnpm/@ledgerhq+hw-transport@6.27.6/node_modules/@ledgerhq/hw-transport/lib/Transport.d.ts:114

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

[HWTransport](HWTransport.md).[exchange](HWTransport.md#exchange)

#### Defined in

[packages/client/src/TransportWalletAPI.ts:55](https://github.com/LedgerHQ/wallet-api/blob/main/packages/client/src/TransportWalletAPI.ts#L55)

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

[HWTransport](HWTransport.md).[off](HWTransport.md#off)

#### Defined in

node_modules/.pnpm/@ledgerhq+hw-transport@6.27.6/node_modules/@ledgerhq/hw-transport/lib/Transport.d.ts:113

___

### on

▸ **on**(`eventName`, `cb`): `void`

Listen to an event on an instance of transport.
Transport implementation can have specific events. Here is the common events:
* `"disconnect"` : triggered if Transport is disconnected

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `cb` | (...`args`: `any`[]) => `any` |

#### Returns

`void`

#### Inherited from

[HWTransport](HWTransport.md).[on](HWTransport.md#on)

#### Defined in

node_modules/.pnpm/@ledgerhq+hw-transport@6.27.6/node_modules/@ledgerhq/hw-transport/lib/Transport.d.ts:109

___

### setDebugMode

▸ **setDebugMode**(): `void`

Enable or not logs of the binary exchange

#### Returns

`void`

#### Inherited from

[HWTransport](HWTransport.md).[setDebugMode](HWTransport.md#setdebugmode)

#### Defined in

node_modules/.pnpm/@ledgerhq+hw-transport@6.27.6/node_modules/@ledgerhq/hw-transport/lib/Transport.d.ts:118

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

[HWTransport](HWTransport.md).[setExchangeTimeout](HWTransport.md#setexchangetimeout)

#### Defined in

node_modules/.pnpm/@ledgerhq+hw-transport@6.27.6/node_modules/@ledgerhq/hw-transport/lib/Transport.d.ts:122

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

[HWTransport](HWTransport.md).[setExchangeUnresponsiveTimeout](HWTransport.md#setexchangeunresponsivetimeout)

#### Defined in

node_modules/.pnpm/@ledgerhq+hw-transport@6.27.6/node_modules/@ledgerhq/hw-transport/lib/Transport.d.ts:126

___

### setScrambleKey

▸ **setScrambleKey**(): `void`

set the "scramble key" for the next exchanges with the device.
Each App can have a different scramble key and they internally will set it at instanciation.

#### Returns

`void`

#### Overrides

[HWTransport](HWTransport.md).[setScrambleKey](HWTransport.md#setscramblekey)

#### Defined in

[packages/client/src/TransportWalletAPI.ts:72](https://github.com/LedgerHQ/wallet-api/blob/main/packages/client/src/TransportWalletAPI.ts#L72)

___

### create

▸ `Static` **create**(`openTimeout?`, `listenTimeout?`): `Promise`<[`HWTransport`](HWTransport.md)\>

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

`Promise`<[`HWTransport`](HWTransport.md)\>

#### Inherited from

[HWTransport](HWTransport.md).[create](HWTransport.md#create)

#### Defined in

node_modules/.pnpm/@ledgerhq+hw-transport@6.27.6/node_modules/@ledgerhq/hw-transport/lib/Transport.d.ts:145

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

Listen all device events for a given Transport. The method takes an Obverver of DescriptorEvent and returns a Subscription (according to Observable paradigm https://github.com/tc39/proposal-observable )
a DescriptorEvent is a `{ descriptor, type }` object. type can be `"add"` or `"remove"` and descriptor is a value you can pass to `open(descriptor)`.
each listen() call will first emit all potential device already connected and then will emit events can come over times,
for instance if you plug a USB device after listen() or a bluetooth device become discoverable.

**`Example`**

```ts
const sub = TransportFoo.listen({
next: e => {
 if (e.type==="add") {
   sub.unsubscribe();
   const transport = await TransportFoo.open(e.descriptor);
   ...
 }
},
error: error => {},
complete: () => {}
})
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_observer` | `unknown` | is an object with a next, error and complete function (compatible with observer pattern) |

#### Returns

`Object`

a Subscription object on which you can `.unsubscribe()` to stop listening descriptors.

| Name | Type |
| :------ | :------ |
| `unsubscribe` | () => `void` |

#### Overrides

Transport.listen

#### Defined in

[packages/client/src/TransportWalletAPI.ts:32](https://github.com/LedgerHQ/wallet-api/blob/main/packages/client/src/TransportWalletAPI.ts#L32)

___

### open

▸ `Static` **open**(`«destructured»`): `Promise`<[`HWTransport`](HWTransport.md)\>

Create a Ledger transport with the Wallet API transport

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `transportId` | `string` |
| › `walletApi` | [`WalletAPIClient`](WalletAPIClient.md) |

#### Returns

`Promise`<[`HWTransport`](HWTransport.md)\>

#### Overrides

Transport.open

#### Defined in

[packages/client/src/TransportWalletAPI.ts:39](https://github.com/LedgerHQ/wallet-api/blob/main/packages/client/src/TransportWalletAPI.ts#L39)
