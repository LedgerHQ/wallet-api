<p align="center">
 <img src="https://user-images.githubusercontent.com/9203826/154288895-670f5c23-81a1-4307-a080-1af83f7f8356.svg" align="center" alt="Ledger" />
 <h2 align="center">@ledgerhq/wallet-api-manifest-validator</h2>
 <p align="center">Verify your Live App manifest inside <a href="https://www.ledger.com/ledger-live">Ledger Live</a></p>
</p>
  <p align="center">
    <a href="https://www.npmjs.com/package/">
      <img src="https://img.shields.io/npm/v/" />
    </a>
    <a href="https://discord.gg/y6nZhxv2bC">
      <img alt="Discord" src="https://img.shields.io/discord/885256081289379850?color=1C1CE1&label=Ledger%20%7C%20Discord%20%F0%9F%91%8B%20&style=flat-square" />
    </a>
    <a href="https://opensource.org/licenses/MIT">
      <img alt="lICENCE" src="https://img.shields.io/badge/License-MIT-yellow.svg" />
    </a>

  </p>

  <p align="center">
    <a href="https://developers.ledger.com/docs/dapp/manifest">About the manifest</a>
    ·
    <a href="">Report Bug</a>
    ·
    <a href="">Request Feature</a>
  </p>
</p>

## Quick intro

The manifest Validator is a typescript package that checks if your manifest.json file meets the requirements for Ledger Live App manifest submission. 

To achieve this, the package uses [JSON Schema](https://json-schema.org/), a vocabulary for annotating and validating JSON documents.

In top of that, we us the [AJV](https://ajv.js.org/) and [AJV-errors](https://www.npmjs.com/package/ajv-errors) libraries which provides more possibilities. (please refer to [AJV Github](https://github.com/ajv-validator/ajv) to know which version of JSON Schema we use )


## Installation

```bash
npm i @ledgerhq/wallet-api-manifest-validator

```

_Can also be used globaly :_
```bash
npm i -g @ledgerhq/wallet-api-manifest-validator
```

## How to use
#### Import

```typescript
import {validateManifest} from '@ledgerhq/wallet-api-manifest-validator'

const result: boolean = validateManifest(MyjsonManifestFile)
```

#### CLI

Once you have installed it, use the command :
```bash
npm run validate <*fileOrDirectoryName*>
```
_Or if you have installed it in global :_
```bash
validate <*fileOrDirectoryName*>
```

help command
```bash
npm run validate -h
```

#### More info about the validator options

the validateManifest function takes 1 mandatory argument and options.

**Arguments**


| Args        | Type           | Description  |
| :-------------:|:-----------:| -----        |
| manifest        | JSON       | Your JSON file. <span style="color:red">NOT your path</span>. |
 | options        | Object       | More details bellow |


**Options**

| Options        | Type          | Description  |
| :-------------:|:-----------:  | -----        |
| details        | boolean       | describe errors when they occur |
| enableState    | boolean       |    Result description (e.g. show in console "The JSON file do not correspond to the schema") |
| fileName       | string        |    file name, practical to validate multiple files via multiple calls |

Import : 
```typescript
validateManifest(MyjsonManifestFile, {details, enableState, fileName})
```

_Cli command don't allow you to use the fileName option._
_--throwError option is only available on cli._

CLI : 
```bash
npm run validate *fileOrDirectoryName* --details --enableState --throwError
```

## JSON Schema properties

Extra property are not allowed

| Value | Type | Requirements | Description |
| :-------------: | :-----------:  | :-----: | -----|
| id | string | lowercase <br /> alphabetic <br />max chars : 20<br /> min chars : 1 | The identification of your application|
| private <br />(optional) | boolean | | Privacy of this manifest |
| name | string | alphabetic <br />max chars : 20<br /> min chars : 1  | Name of your application, will be showed as title in LL |
| url | string | URL  | The url of the eth-dapp-browser, either running locally or at https://dapp-browser.apps.ledger.com for the production version |
| homepageUrl | string | URL  | The homepage of your service. For instance, https://www.google.fr/ |
| supportUrl </br> (optional)| string | URL  | The support URL of your service.  |
| icon </br>  (optional) | string | IMG URL | A link to the icon displayed in the Ledger Live Discover section. Will be hosted on Ledger CDN before being released in production. |
| [*params*](#params-object)| Object | {dappUrl, nanoApp, dappName} | dappUrl is the URL of your DApp; nanoApp is the plugin needed to clear sign your DApp; dappName should be the same as nanoApp; networks is the list of networks supported by your DApp, Ledger Live currently only support mainnet, BSC and Polygon, the nodeURL param will be set by Ledger in prod to use your node, for testing purposes, you can replace it with your own. |
| platform| string | "desktop", "mobile" or "all" | To set the platform (desktop, mobile, iOS, Android) on which your service is available. By default, you should set the value to 'all' |
| apiVersion| string |  | The API version, by default 0.0.1 |
| manifestVersion| string |  | The manifest version. By default should be 1 |
| branch | string | "stable", "experimental", "soon" or "debug"| The specific branch used by Ledger to deploy the changes. Can take the values stable | experimental | debug | soon. By default, you should set it to “stable“. The value “soon” will mark your app as “Coming soon” and it won’t be usable. |
| categories | Array of String | "lend", "yield", "swap", "farm", "staking" or "defi"| A JSON array of metadata information about your application. For instance : [“staking“,“defi“]. You can add as many as you want. It is not used for the moment but will be used for filtering in the future. |
| currencies | Array of String | "ethereum", "bitcoin", "polkadot" or ""| A JSON array of the currency/network being used by your application. For instance [”ethereum”,”polygon”]. Leave blank if the App does not require any currency. |
| [*content*](#content-object) | Object | {shortDescription, description} | A description of your service. It will be displayed on the entry card of your application. Type: i18n strings. |
| permissions | Array | | |
| domains | Array | | |



##### Params Object 
| Value | Type | Requirements | Description |
| :-------------: | :-----------:  | :-----: | -----|
|  dappUrl  | string | |  |
|  nanoApp  | string | |  |
|  dappName  | string | |  |
|  [*networks*](#networks-object)  | Array of Object | [{currency, chainID, nodeURL}] |  |

##### Networks Object 

| Value | Type | Requirements | Description |
| :-------------: | :-----------:  | :-----: | -----|
|  currency  | string | "ethereum", "bitcoin" or "polkadot" |  |
|  chainID  | string | |  |
|  nodeURL  | string | URL |  |

##### Content Object 

| Value | Type | Requirements | Description |
| :-------------: | :-----------:  | :-----: | -----|
|  description  | Object | `{fr: "...", en: "..."}` | only i18n properties accepted | 
|  shortDescription  | Object | `{fr: "...", en: "..."}` | only i18n properties accepted |
|  *i18n property </br> (fr, en...)*  | string | |  |

</br>
</br>
</br>

more infos about the manifest here : 

https://developers.ledger.com/docs/dapp/manifest/