<p align="center">
 <img src="https://user-images.githubusercontent.com/9203826/154288895-670f5c23-81a1-4307-a080-1af83f7f8356.svg" align="center" alt="Ledger" />
 <h2 align="center">@ledgerhq/wallet-api-manifest-validator</h2>
 <p align="center">Verify your Live App manifest</p>
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
    <a href="https://github.com/LedgerHQ/wallet-api/issues/new/choose">Report Bug</a>
    ·
    <a href="https://github.com/LedgerHQ/wallet-api/issues/new/choose">Request Feature</a>
  </p>
</p>

## Quick intro

The manifest Validator is a typescript package that checks if your `manifest.json` file meets the requirements for a Wallet App manifest submission.

To achieve this, the package uses [JSON Schema](https://json-schema.org/), a vocabulary for annotating and validating JSON documents.

In top of that, we use the [AJV](https://ajv.js.org/) and [AJV-errors](https://www.npmjs.com/package/ajv-errors) libraries which provides more possibilities (please refer to [AJV Github](https://github.com/ajv-validator/ajv) to know which version of JSON Schema we use).

## Installation

```bash
npm i @ledgerhq/wallet-api-manifest-validator

```

_Can also be used globaly:_

```bash
npm i -g @ledgerhq/wallet-api-manifest-validator
```

## How to use

#### Import

```typescript
import { validateManifest } from "@ledgerhq/wallet-api-manifest-validator";
import MyjsonManifestFile from "./manifest.json";

const result: boolean = validateManifest(MyjsonManifestFile);
```

#### CLI

Once you have installed it, use the command:

```bash
npm run validate <*fileOrDirectoryName*>
```

_Or if you have installed it in global:_

```bash
validate <*fileOrDirectoryName*>
```

help command

```bash
npm run validate -h
```

#### More info about the validator options

The validateManifest function takes 1 mandatory argument and options.

**Arguments**

|   Args   |  Type  | Description                                                   |
| :------: | :----: | ------------------------------------------------------------- |
| manifest |  JSON  | Your JSON file. <span style="color:red">NOT your path</span>. |
| options  | Object | More details bellow                                           |

**Options**

|   Options   |  Type   | Description                                                                                 |
| :---------: | :-----: | ------------------------------------------------------------------------------------------- |
|   details   | boolean | describe errors when they occur                                                             |
| enableState | boolean | result description (e.g. show in console "The JSON file does not correspond to the schema") |
|  fileName   | string  | file name, practical to validate multiple files via multiple calls                          |

Imported in source code:

```typescript
validateManifest(MyjsonManifestFile, { details, enableState, fileName });
```

_Cli command don't allow you to use the fileName option._
_--throwError option is only available on cli._

Using CLI:

```bash
npm run validate *fileOrDirectoryName* --details --enableState --throwError
```                                                                                                                                          

</br>
</br>
</br>

more infos about the manifest here:

https://developers.ledger.com/docs/dapp/manifest/
https://developers.ledger.com/docs/non-dapp/tutorial/2-manifest/