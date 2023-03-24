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

[server/src/types.ts:61](https://github.com/LedgerHQ/wallet-api/blob/main/packages/server/src/types.ts#L61)

___

### account.request

• **account.request**: (`params`: { `accounts$`: `Observable`<`Account`[]\> ; `currencies$`: `Observable`<({ `color`: `string` ; `decimals`: `number` ; `family`: ``"bitcoin"`` \| ``"ethereum"`` \| ``"algorand"`` \| ``"crypto_org"`` \| ``"ripple"`` \| ``"cosmos"`` \| ``"celo"`` \| ``"hedera"`` \| ``"filecoin"`` \| ``"tezos"`` \| ``"polkadot"`` \| ``"stellar"`` \| ``"tron"`` ; `id`: `string` ; `name`: `string` ; `ticker`: `string` ; `type`: ``"CryptoCurrency"``  } \| { `color`: `string` ; `contract`: `string` ; `decimals`: `number` ; `id`: `string` ; `name`: `string` ; `parent`: `string` ; `standard`: ``"ERC20"`` ; `ticker`: `string` ; `type`: ``"TokenCurrency"``  })[]\>  }) => `Promisable`<`Account`\>

#### Type declaration

▸ (`params`): `Promisable`<`Account`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `params` | `Object` |
| `params.accounts$` | `Observable`<`Account`[]\> |
| `params.currencies$` | `Observable`<({ `color`: `string` ; `decimals`: `number` ; `family`: ``"bitcoin"`` \| ``"ethereum"`` \| ``"algorand"`` \| ``"crypto_org"`` \| ``"ripple"`` \| ``"cosmos"`` \| ``"celo"`` \| ``"hedera"`` \| ``"filecoin"`` \| ``"tezos"`` \| ``"polkadot"`` \| ``"stellar"`` \| ``"tron"`` ; `id`: `string` ; `name`: `string` ; `ticker`: `string` ; `type`: ``"CryptoCurrency"``  } \| { `color`: `string` ; `contract`: `string` ; `decimals`: `number` ; `id`: `string` ; `name`: `string` ; `parent`: `string` ; `standard`: ``"ERC20"`` ; `ticker`: `string` ; `type`: ``"TokenCurrency"``  })[]\> |

##### Returns

`Promisable`<`Account`\>

#### Defined in

[server/src/types.ts:57](https://github.com/LedgerHQ/wallet-api/blob/main/packages/server/src/types.ts#L57)

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

[server/src/types.ts:88](https://github.com/LedgerHQ/wallet-api/blob/main/packages/server/src/types.ts#L88)

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

[server/src/types.ts:76](https://github.com/LedgerHQ/wallet-api/blob/main/packages/server/src/types.ts#L76)

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

[server/src/types.ts:77](https://github.com/LedgerHQ/wallet-api/blob/main/packages/server/src/types.ts#L77)

___

### device.transport

• **device.transport**: (`params`: { `appName?`: `string` ; `appVersionRange?`: `string` ; `devices?`: [``"blue"`` \| ``"nanoS"`` \| ``"nanoSP"`` \| ``"nanoX"`` \| ``"stax"``, ...("blue" \| "nanoS" \| "nanoSP" \| "nanoX" \| "stax")[]] ; `firmwareVersionRange?`: `string` ; `seeded?`: `boolean`  }) => `Promisable`<`string`\>

#### Type declaration

▸ (`params`): `Promisable`<`string`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `params` | `Object` |
| `params.appName?` | `string` |
| `params.appVersionRange?` | `string` |
| `params.devices?` | [``"blue"`` \| ``"nanoS"`` \| ``"nanoSP"`` \| ``"nanoX"`` \| ``"stax"``, ...("blue" \| "nanoS" \| "nanoSP" \| "nanoX" \| "stax")[]] |
| `params.firmwareVersionRange?` | `string` |
| `params.seeded?` | `boolean` |

##### Returns

`Promisable`<`string`\>

#### Defined in

[server/src/types.ts:78](https://github.com/LedgerHQ/wallet-api/blob/main/packages/server/src/types.ts#L78)

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

[server/src/types.ts:90](https://github.com/LedgerHQ/wallet-api/blob/main/packages/server/src/types.ts#L90)

___

### exchange.start

• **exchange.start**: (`params`: { `exchangeType`: ``"FUND"`` \| ``"SELL"`` \| ``"SWAP"``  }) => `Promisable`<`string`\>

#### Type declaration

▸ (`params`): `Promisable`<`string`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `params` | `Object` |
| `params.exchangeType` | ``"FUND"`` \| ``"SELL"`` \| ``"SWAP"`` |

##### Returns

`Promisable`<`string`\>

#### Defined in

[server/src/types.ts:89](https://github.com/LedgerHQ/wallet-api/blob/main/packages/server/src/types.ts#L89)

___

### message.sign

• **message.sign**: (`params`: { `account`: `Account` ; `message`: `Buffer`  }) => `Promisable`<`Buffer`\>

#### Type declaration

▸ (`params`): `Promisable`<`Buffer`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `params` | `Object` |
| `params.account` | `Account` |
| `params.message` | `Buffer` |

##### Returns

`Promisable`<`Buffer`\>

#### Defined in

[server/src/types.ts:62](https://github.com/LedgerHQ/wallet-api/blob/main/packages/server/src/types.ts#L62)

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

[server/src/types.ts:84](https://github.com/LedgerHQ/wallet-api/blob/main/packages/server/src/types.ts#L84)

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

[server/src/types.ts:79](https://github.com/LedgerHQ/wallet-api/blob/main/packages/server/src/types.ts#L79)

___

### transaction.sign

• **transaction.sign**: (`params`: { `account`: `Account` ; `options?`: { `hwAppId?`: `string`  } ; `transaction`: `Transaction`  }) => `Promisable`<`Buffer`\>

#### Type declaration

▸ (`params`): `Promisable`<`Buffer`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `params` | `Object` |
| `params.account` | `Account` |
| `params.options?` | `Object` |
| `params.options.hwAppId?` | `string` |
| `params.transaction` | `Transaction` |

##### Returns

`Promisable`<`Buffer`\>

#### Defined in

[server/src/types.ts:66](https://github.com/LedgerHQ/wallet-api/blob/main/packages/server/src/types.ts#L66)

___

### transaction.signAndBroadcast

• **transaction.signAndBroadcast**: (`params`: { `account`: `Account` ; `options?`: { `hwAppId?`: `string`  } ; `transaction`: `Transaction`  }) => `Promisable`<`string`\>

#### Type declaration

▸ (`params`): `Promisable`<`string`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `params` | `Object` |
| `params.account` | `Account` |
| `params.options?` | `Object` |
| `params.options.hwAppId?` | `string` |
| `params.transaction` | `Transaction` |

##### Returns

`Promisable`<`string`\>

#### Defined in

[server/src/types.ts:71](https://github.com/LedgerHQ/wallet-api/blob/main/packages/server/src/types.ts#L71)
