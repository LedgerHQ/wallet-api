[@ledgerhq/wallet-api-client](../README.md) / [Exports](../modules.md) / HWTransport

# Class: HWTransport

Transport defines the generic interface to share between node/u2f impl
A **Descriptor** is a parametric type that is up to be determined for the implementation.
it can be for instance an ID, an file path, a URL,...

## Hierarchy

- **`HWTransport`**

  ↳ [`TransportWalletAPI`](TransportWalletAPI.md)

## Table of contents

### Constructors

- [constructor](HWTransport.md#constructor)

### Properties

- [\_appAPIlock](HWTransport.md#_appapilock)
- [\_events](HWTransport.md#_events)
- [deviceModel](HWTransport.md#devicemodel)
- [exchangeAtomicImpl](HWTransport.md#exchangeatomicimpl)
- [exchangeBusyPromise](HWTransport.md#exchangebusypromise)
- [exchangeTimeout](HWTransport.md#exchangetimeout)
- [send](HWTransport.md#send)
- [unresponsiveTimeout](HWTransport.md#unresponsivetimeout)
- [ErrorMessage\_ListenTimeout](HWTransport.md#errormessage_listentimeout)
- [ErrorMessage\_NoDeviceFound](HWTransport.md#errormessage_nodevicefound)
- [isSupported](HWTransport.md#issupported)
- [list](HWTransport.md#list)
- [listen](HWTransport.md#listen)
- [open](HWTransport.md#open)

### Methods

- [close](HWTransport.md#close)
- [decorateAppAPIMethod](HWTransport.md#decorateappapimethod)
- [decorateAppAPIMethods](HWTransport.md#decorateappapimethods)
- [emit](HWTransport.md#emit)
- [exchange](HWTransport.md#exchange)
- [off](HWTransport.md#off)
- [on](HWTransport.md#on)
- [setDebugMode](HWTransport.md#setdebugmode)
- [setExchangeTimeout](HWTransport.md#setexchangetimeout)
- [setExchangeUnresponsiveTimeout](HWTransport.md#setexchangeunresponsivetimeout)
- [setScrambleKey](HWTransport.md#setscramblekey)
- [create](HWTransport.md#create)

## Constructors

### constructor

• **new HWTransport**()

## Properties

### \_appAPIlock

• **\_appAPIlock**: ``null`` \| `string`

#### Defined in

node_modules/.pnpm/@ledgerhq+hw-transport@6.27.6/node_modules/@ledgerhq/hw-transport/lib/Transport.d.ts:149

___

### \_events

• **\_events**: `EventEmitter`

#### Defined in

node_modules/.pnpm/@ledgerhq+hw-transport@6.27.6/node_modules/@ledgerhq/hw-transport/lib/Transport.d.ts:103

___

### deviceModel

• **deviceModel**: `undefined` \| ``null`` \| `DeviceModel`

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

#### Defined in

node_modules/.pnpm/@ledgerhq+hw-transport@6.27.6/node_modules/@ledgerhq/hw-transport/lib/Transport.d.ts:147

___

### exchangeBusyPromise

• **exchangeBusyPromise**: `undefined` \| ``null`` \| `Promise`<`void`\>

#### Defined in

node_modules/.pnpm/@ledgerhq+hw-transport@6.27.6/node_modules/@ledgerhq/hw-transport/lib/Transport.d.ts:146

___

### exchangeTimeout

• **exchangeTimeout**: `number`

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

#### Defined in

node_modules/.pnpm/@ledgerhq+hw-transport@6.27.6/node_modules/@ledgerhq/hw-transport/lib/Transport.d.ts:137

___

### unresponsiveTimeout

• **unresponsiveTimeout**: `number`

#### Defined in

node_modules/.pnpm/@ledgerhq+hw-transport@6.27.6/node_modules/@ledgerhq/hw-transport/lib/Transport.d.ts:41

___

### ErrorMessage\_ListenTimeout

▪ `Static` **ErrorMessage\_ListenTimeout**: `string`

#### Defined in

node_modules/.pnpm/@ledgerhq+hw-transport@6.27.6/node_modules/@ledgerhq/hw-transport/lib/Transport.d.ts:151

___

### ErrorMessage\_NoDeviceFound

▪ `Static` **ErrorMessage\_NoDeviceFound**: `string`

#### Defined in

node_modules/.pnpm/@ledgerhq+hw-transport@6.27.6/node_modules/@ledgerhq/hw-transport/lib/Transport.d.ts:152

___

### isSupported

▪ `Static` `Readonly` **isSupported**: () => `Promise`<`boolean`\>

#### Type declaration

▸ (): `Promise`<`boolean`\>

Statically check if a transport is supported on the user's platform/browser.

##### Returns

`Promise`<`boolean`\>

#### Defined in

node_modules/.pnpm/@ledgerhq+hw-transport@6.27.6/node_modules/@ledgerhq/hw-transport/lib/Transport.d.ts:46

___

### list

▪ `Static` `Readonly` **list**: () => `Promise`<`any`[]\>

#### Type declaration

▸ (): `Promise`<`any`[]\>

List once all available descriptors. For a better granularity, checkout `listen()`.

**`Example`**

```ts
TransportFoo.list().then(descriptors => ...)
```

##### Returns

`Promise`<`any`[]\>

a promise of descriptors

#### Defined in

node_modules/.pnpm/@ledgerhq+hw-transport@6.27.6/node_modules/@ledgerhq/hw-transport/lib/Transport.d.ts:53

___

### listen

▪ `Static` `Readonly` **listen**: (`observer`: `Readonly`<{ `complete`: () => `unknown` ; `error`: (`e`: `any`) => `unknown` ; `next`: (`event`: `DescriptorEvent`<`any`\>) => `unknown`  }\>) => `Subscription`

#### Type declaration

▸ (`observer`): `Subscription`

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

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `observer` | `Readonly`<{ `complete`: () => `unknown` ; `error`: (`e`: `any`) => `unknown` ; `next`: (`event`: `DescriptorEvent`<`any`\>) => `unknown`  }\> | is an object with a next, error and complete function (compatible with observer pattern) |

##### Returns

`Subscription`

a Subscription object on which you can `.unsubscribe()` to stop listening descriptors.

#### Defined in

node_modules/.pnpm/@ledgerhq+hw-transport@6.27.6/node_modules/@ledgerhq/hw-transport/lib/Transport.d.ts:74

___

### open

▪ `Static` `Readonly` **open**: (`descriptor?`: `any`, `timeout?`: `number`) => `Promise`<[`HWTransport`](HWTransport.md)\>

#### Type declaration

▸ (`descriptor?`, `timeout?`): `Promise`<[`HWTransport`](HWTransport.md)\>

attempt to create a Transport instance with potentially a descriptor.

**`Example`**

```ts
TransportFoo.open(descriptor).then(transport => ...)
```

##### Parameters

| Name | Type |
| :------ | :------ |
| `descriptor?` | `any` |
| `timeout?` | `number` |

##### Returns

`Promise`<[`HWTransport`](HWTransport.md)\>

a Promise of Transport instance

#### Defined in

node_modules/.pnpm/@ledgerhq+hw-transport@6.27.6/node_modules/@ledgerhq/hw-transport/lib/Transport.d.ts:83

## Methods

### close

▸ **close**(): `Promise`<`void`\>

close the exchange with the device.

#### Returns

`Promise`<`void`\>

a Promise that ends when the transport is closed.

#### Defined in

node_modules/.pnpm/@ledgerhq+hw-transport@6.27.6/node_modules/@ledgerhq/hw-transport/lib/Transport.d.ts:102

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

#### Defined in

node_modules/.pnpm/@ledgerhq+hw-transport@6.27.6/node_modules/@ledgerhq/hw-transport/lib/Transport.d.ts:114

___

### exchange

▸ **exchange**(`_apdu`): `Promise`<`Buffer`\>

low level api to communicate with the device
This method is for implementations to implement but should not be directly called.
Instead, the recommanded way is to use send() method

#### Parameters

| Name | Type |
| :------ | :------ |
| `_apdu` | `Buffer` |

#### Returns

`Promise`<`Buffer`\>

a Promise of response data

#### Defined in

node_modules/.pnpm/@ledgerhq+hw-transport@6.27.6/node_modules/@ledgerhq/hw-transport/lib/Transport.d.ts:91

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

#### Defined in

node_modules/.pnpm/@ledgerhq+hw-transport@6.27.6/node_modules/@ledgerhq/hw-transport/lib/Transport.d.ts:109

___

### setDebugMode

▸ **setDebugMode**(): `void`

Enable or not logs of the binary exchange

#### Returns

`void`

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

#### Defined in

node_modules/.pnpm/@ledgerhq+hw-transport@6.27.6/node_modules/@ledgerhq/hw-transport/lib/Transport.d.ts:126

___

### setScrambleKey

▸ **setScrambleKey**(`_key`): `void`

set the "scramble key" for the next exchanges with the device.
Each App can have a different scramble key and they internally will set it at instanciation.

#### Parameters

| Name | Type |
| :------ | :------ |
| `_key` | `string` |

#### Returns

`void`

#### Defined in

node_modules/.pnpm/@ledgerhq+hw-transport@6.27.6/node_modules/@ledgerhq/hw-transport/lib/Transport.d.ts:97

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

#### Defined in

node_modules/.pnpm/@ledgerhq+hw-transport@6.27.6/node_modules/@ledgerhq/hw-transport/lib/Transport.d.ts:145
