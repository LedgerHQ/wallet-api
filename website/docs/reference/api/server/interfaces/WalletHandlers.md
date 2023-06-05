---
id: "WalletHandlers"
title: "Interface: WalletHandlers"
sidebar_label: "WalletHandlers"
sidebar_position: 0
custom_edit_url: null
---

## Properties

### account.receive

• **account.receive**: (`params`: { `account`: `Account`  }) => `Promisable`<`string`\>

#### Type declaration

▸ (`params`): `Promisable`<`string`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `params` | `Object` |
| `params.account` | `Account` |

##### Returns

`Promisable`<`string`\>

#### Defined in

[packages/server/src/types.ts:63](https://github.com/LedgerHQ/wallet-api/blob/main/packages/server/src/types.ts#L63)

___

### account.request

• **account.request**: (`params`: { `accounts$`: `Observable`<`Account`[]\> ; `currencies$`: `Observable`<({ `color`: `string` ; `decimals`: `number` ; `family`: ``"bitcoin"`` \| ``"ethereum"`` \| ``"algorand"`` \| ``"crypto_org"`` \| ``"ripple"`` \| ``"cosmos"`` \| ``"celo"`` \| ``"hedera"`` \| ``"filecoin"`` \| ``"tezos"`` \| ``"polkadot"`` \| ``"stellar"`` \| ``"tron"`` \| ``"near"`` \| ``"neo"`` \| ``"elrond"`` \| ``"cardano"`` \| ``"solana"`` = schemaFamilies; `id`: `string` ; `name`: `string` ; `ticker`: `string` ; `type`: ``"CryptoCurrency"``  } \| { `color`: `string` ; `contract`: `string` ; `decimals`: `number` ; `id`: `string` ; `name`: `string` ; `parent`: `string` ; `standard`: ``"ERC20"`` = schemaTokenStandard; `ticker`: `string` ; `type`: ``"TokenCurrency"``  })[]\>  }) => `Promisable`<`Account`\>

#### Type declaration

▸ (`params`): `Promisable`<`Account`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `params` | `Object` |
| `params.accounts$` | `Observable`<`Account`[]\> |
| `params.currencies$` | `Observable`<({ `color`: `string` ; `decimals`: `number` ; `family`: ``"bitcoin"`` \| ``"ethereum"`` \| ``"algorand"`` \| ``"crypto_org"`` \| ``"ripple"`` \| ``"cosmos"`` \| ``"celo"`` \| ``"hedera"`` \| ``"filecoin"`` \| ``"tezos"`` \| ``"polkadot"`` \| ``"stellar"`` \| ``"tron"`` \| ``"near"`` \| ``"neo"`` \| ``"elrond"`` \| ``"cardano"`` \| ``"solana"`` = schemaFamilies; `id`: `string` ; `name`: `string` ; `ticker`: `string` ; `type`: ``"CryptoCurrency"``  } \| { `color`: `string` ; `contract`: `string` ; `decimals`: `number` ; `id`: `string` ; `name`: `string` ; `parent`: `string` ; `standard`: ``"ERC20"`` = schemaTokenStandard; `ticker`: `string` ; `type`: ``"TokenCurrency"``  })[]\> |

##### Returns

`Promisable`<`Account`\>

#### Defined in

[packages/server/src/types.ts:59](https://github.com/LedgerHQ/wallet-api/blob/main/packages/server/src/types.ts#L59)

___

### bitcoin.getXPub

• **bitcoin.getXPub**: (`params`: { `accountId`: `string`  }) => `Promisable`<`string`\>

#### Type declaration

▸ (`params`): `Promisable`<`string`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `params` | `Object` |
| `params.accountId` | `string` |

##### Returns

`Promisable`<`string`\>

#### Defined in

[packages/server/src/types.ts:95](https://github.com/LedgerHQ/wallet-api/blob/main/packages/server/src/types.ts#L95)

___

### device.close

• **device.close**: (`params`: { `transportId`: `string`  }) => `Promisable`<`string`\>

#### Type declaration

▸ (`params`): `Promisable`<`string`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `params` | `Object` |
| `params.transportId` | `string` |

##### Returns

`Promisable`<`string`\>

#### Defined in

[packages/server/src/types.ts:81](https://github.com/LedgerHQ/wallet-api/blob/main/packages/server/src/types.ts#L81)

___

### device.exchange

• **device.exchange**: (`params`: { `apduHex`: `string` ; `transportId`: `string`  }) => `Promisable`<`string`\>

#### Type declaration

▸ (`params`): `Promisable`<`string`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `params` | `Object` |
| `params.apduHex` | `string` |
| `params.transportId` | `string` |

##### Returns

`Promisable`<`string`\>

#### Defined in

[packages/server/src/types.ts:82](https://github.com/LedgerHQ/wallet-api/blob/main/packages/server/src/types.ts#L82)

___

### device.open

• **device.open**: (`params`: { `deviceId`: `string`  }) => `Promisable`<`string`\>

#### Type declaration

▸ (`params`): `Promisable`<`string`\>

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | `Object` | - |
| `params.deviceId` | `string` | ID of the device to select |

##### Returns

`Promisable`<`string`\>

#### Defined in

[packages/server/src/types.ts:83](https://github.com/LedgerHQ/wallet-api/blob/main/packages/server/src/types.ts#L83)

___

### device.select

• **device.select**: (`params`: { `appName?`: `string` ; `appVersionRange?`: `string` ; `devices?`: [``"blue"`` \| ``"nanoS"`` \| ``"nanoX"`` \| ``"nanoSP"`` \| ``"stax"``, ...("blue" \| "nanoS" \| "nanoX" \| "nanoSP" \| "stax")[]] ; `firmwareVersionRange?`: `string` ; `seeded?`: `boolean`  }) => `Promisable`<`string`\>

#### Type declaration

▸ (`params`): `Promisable`<`string`\>

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | `Object` | - |
| `params.appName?` | `string` | Select the BOLOS App. If undefined selects BOLOS |
| `params.appVersionRange?` | `string` | Checks the BOLOS App version range. If undefined no checks Can be any ranges supported here: https://github.com/npm/node-semver#ranges |
| `params.devices?` | [``"blue"`` \| ``"nanoS"`` \| ``"nanoX"`` \| ``"nanoSP"`` \| ``"stax"``, ...("blue" \| "nanoS" \| "nanoX" \| "nanoSP" \| "stax")[]] | Checks if the device matches one of the types. If undefined no checks |
| `params.firmwareVersionRange?` | `string` | Checks the BOLOS Firmware version range. If undefined no checks Can be any ranges supported here: https://github.com/npm/node-semver#ranges |
| `params.seeded?` | `boolean` | Checks if the device is seeded. If undefined no checks |

##### Returns

`Promisable`<`string`\>

#### Defined in

[packages/server/src/types.ts:84](https://github.com/LedgerHQ/wallet-api/blob/main/packages/server/src/types.ts#L84)

___

### device.transport

• **device.transport**: (`params`: { `appName?`: `string` ; `appVersionRange?`: `string` ; `devices?`: [``"blue"`` \| ``"nanoS"`` \| ``"nanoX"`` \| ``"nanoSP"`` \| ``"stax"``, ...("blue" \| "nanoS" \| "nanoX" \| "nanoSP" \| "stax")[]] ; `firmwareVersionRange?`: `string` ; `seeded?`: `boolean`  }) => `Promisable`<`string`\>

#### Type declaration

▸ (`params`): `Promisable`<`string`\>

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | `Object` | - |
| `params.appName?` | `string` | Select the BOLOS App. If undefined selects BOLOS |
| `params.appVersionRange?` | `string` | Checks the BOLOS App version range. If undefined no checks Can be any ranges supported here: https://github.com/npm/node-semver#ranges |
| `params.devices?` | [``"blue"`` \| ``"nanoS"`` \| ``"nanoX"`` \| ``"nanoSP"`` \| ``"stax"``, ...("blue" \| "nanoS" \| "nanoX" \| "nanoSP" \| "stax")[]] | Checks if the device matches one of the types. If undefined no checks |
| `params.firmwareVersionRange?` | `string` | Checks the BOLOS Firmware version range. If undefined no checks Can be any ranges supported here: https://github.com/npm/node-semver#ranges |
| `params.seeded?` | `boolean` | Checks if the device is seeded. If undefined no checks |

##### Returns

`Promisable`<`string`\>

#### Defined in

[packages/server/src/types.ts:85](https://github.com/LedgerHQ/wallet-api/blob/main/packages/server/src/types.ts#L85)

___

### exchange.complete

• **exchange.complete**: (`params`: `ExchangeParams`) => `Promisable`<`string`\>

#### Type declaration

▸ (`params`): `Promisable`<`string`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `params` | `ExchangeParams` |

##### Returns

`Promisable`<`string`\>

#### Defined in

[packages/server/src/types.ts:97](https://github.com/LedgerHQ/wallet-api/blob/main/packages/server/src/types.ts#L97)

___

### exchange.start

• **exchange.start**: (`params`: { `exchangeType`: ``"FUND"`` \| ``"SELL"`` \| ``"SWAP"`` = schemaExchangeType }) => `Promisable`<`string`\>

#### Type declaration

▸ (`params`): `Promisable`<`string`\>

##### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `params` | `Object` | `undefined` |
| `params.exchangeType` | ``"FUND"`` \| ``"SELL"`` \| ``"SWAP"`` | `schemaExchangeType` |

##### Returns

`Promisable`<`string`\>

#### Defined in

[packages/server/src/types.ts:96](https://github.com/LedgerHQ/wallet-api/blob/main/packages/server/src/types.ts#L96)

___

### message.sign

• **message.sign**: (`params`: { `account`: `Account` ; `message`: `Buffer` ; `meta`: `undefined` \| `Record`<`string`, `unknown`\>  }) => `Promisable`<`Buffer`\>

#### Type declaration

▸ (`params`): `Promisable`<`Buffer`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `params` | `Object` |
| `params.account` | `Account` |
| `params.message` | `Buffer` |
| `params.meta` | `undefined` \| `Record`<`string`, `unknown`\> |

##### Returns

`Promisable`<`Buffer`\>

#### Defined in

[packages/server/src/types.ts:64](https://github.com/LedgerHQ/wallet-api/blob/main/packages/server/src/types.ts#L64)

___

### storage.get

• **storage.get**: (`params`: { `key`: `string` ; `storeId`: `string`  }) => `Promisable`<`undefined` \| `string`\>

#### Type declaration

▸ (`params`): `Promisable`<`undefined` \| `string`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `params` | `Object` |
| `params.key` | `string` |
| `params.storeId` | `string` |

##### Returns

`Promisable`<`undefined` \| `string`\>

#### Defined in

[packages/server/src/types.ts:91](https://github.com/LedgerHQ/wallet-api/blob/main/packages/server/src/types.ts#L91)

___

### storage.set

• **storage.set**: (`params`: { `key`: `string` ; `storeId`: `string` ; `value`: `string`  }) => `Promisable`<`void`\>

#### Type declaration

▸ (`params`): `Promisable`<`void`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `params` | `Object` |
| `params.key` | `string` |
| `params.storeId` | `string` |
| `params.value` | `string` |

##### Returns

`Promisable`<`void`\>

#### Defined in

[packages/server/src/types.ts:86](https://github.com/LedgerHQ/wallet-api/blob/main/packages/server/src/types.ts#L86)

___

### transaction.sign

• **transaction.sign**: (`params`: { `account`: `Account` ; `meta`: `undefined` \| `Record`<`string`, `unknown`\> ; `options?`: { `hwAppId?`: `string`  } ; `transaction`: `Transaction`  }) => `Promisable`<`Buffer`\>

#### Type declaration

▸ (`params`): `Promisable`<`Buffer`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `params` | `Object` |
| `params.account` | `Account` |
| `params.meta` | `undefined` \| `Record`<`string`, `unknown`\> |
| `params.options?` | `Object` |
| `params.options.hwAppId?` | `string` |
| `params.transaction` | `Transaction` |

##### Returns

`Promisable`<`Buffer`\>

#### Defined in

[packages/server/src/types.ts:69](https://github.com/LedgerHQ/wallet-api/blob/main/packages/server/src/types.ts#L69)

___

### transaction.signAndBroadcast

• **transaction.signAndBroadcast**: (`params`: { `account`: `Account` ; `meta`: `undefined` \| `Record`<`string`, `unknown`\> ; `options?`: { `hwAppId?`: `string`  } ; `transaction`: `Transaction`  }) => `Promisable`<`string`\>

#### Type declaration

▸ (`params`): `Promisable`<`string`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `params` | `Object` |
| `params.account` | `Account` |
| `params.meta` | `undefined` \| `Record`<`string`, `unknown`\> |
| `params.options?` | `Object` |
| `params.options.hwAppId?` | `string` |
| `params.transaction` | `Transaction` |

##### Returns

`Promisable`<`string`\>

#### Defined in

[packages/server/src/types.ts:75](https://github.com/LedgerHQ/wallet-api/blob/main/packages/server/src/types.ts#L75)
