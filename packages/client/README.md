
   
<p align="center">
 <img src="https://user-images.githubusercontent.com/9203826/154288895-670f5c23-81a1-4307-a080-1af83f7f8356.svg" align="center" alt="Ledger" />
 <h2 align="center">Live App SDK</h2>
 <p align="center">Integrate your application or service inside <a href="https://www.ledger.com/ledger-live">Ledger Live</a></p>
</p>
  <p align="center">
    <a href="https://www.npmjs.com/package/@ledgerhq/live-app-sdk?activeTab=versions">
      <img src="https://img.shields.io/npm/v/@ledgerhq/live-app-sdk.svg?style=flat-square" />
    </a>
    <a href="https://opensource.org/licenses/Apache-2.0">
      <img alt="License" src="https://img.shields.io/badge/License-Apache%202.0-blue.svg" />
    </a>
    <a href="https://github.com/LedgerHQ/live-app-sdk/actions">
      <img alt="Tests Passing" src="https://github.com/LedgerHQ/live-app-sdk/workflows/CI/badge.svg" />
    </a>
    <a href="https://codecov.io/gh/LedgerHQ/live-app-sdk">
      <img src="https://codecov.io/gh/LedgerHQ/live-app-sdk/branch/main/graph/badge.svg" />
    </a>
    <a href="https://github.com/LedgerHQ/live-app-sdk/issues">
      <img alt="Issues" src="https://img.shields.io/github/issues/LedgerHQ/live-app-sdk?color=0088ff" />
    </a>
    <a href="https://github.com/LedgerHQ/live-app-sdk/pulls">
      <img alt="GitHub pull requests" src="https://img.shields.io/github/issues-pr/LedgerHQ/live-app-sdk?color=0088ff" />
    </a>
  </p>

  <p align="center">
    <a href="https://developers.ledger.com/docs/live-app/start-here/">Full documentation</a>
    ·
    <a href="https://github.com/LedgerHQ/live-app-sdk/issues/new/choose">Report Bug</a>
    ·
    <a href="https://github.com/LedgerHQ/live-app-sdk/issues/new/choose">Request Feature</a>
  </p>
</p>




# Contributing

Please read our [contribution guidelines](./CONTRIBUTING.md) before getting
started.

**You need to have a recent [Node.js](https://nodejs.org/) and
[Yarn 1 (Classic)](https://classic.yarnpkg.com/lang/en/) installed.**

### Install dependencies

```bash
yarn
```

### Build

Build the SDK

```bash
yarn build
```

### Format

Check code formatting with

```bash
yarn format:check
```

Format source (`src`) files in-place with

```bash
yarn format:fix
```

### Lint

Check code quality with

```bash
yarn lint:check
```

Automatically fix code quality problems with

```bash
yarn lint:fix
```

# Documentation

You can generate the project's documentation, either in `html` or in `markdown`.

For `markdown` use:

```bash
yarn doc
```

For `html` use:

```bash
yarn doc:html
```

The documentation will be generated in a `docs/markdown` or `docs/html` folder depending on the chosen format.

# Publish

This generated package is hosted on NPM [here](https://www.npmjs.com/package/@ledgerhq/live-app-sdk).

⚠️ Publishing can only be performed by memebers of the [_ledgerhq_ organization](https://www.npmjs.com/org/ledgerhq) having the necessary rights to push to `main` branch ⚠️

In order to publish a new version of this package, please refer to the following steps:

- create and setup you `npm` account (cf. [npm doc](https://docs.npmjs.com/creating-a-new-npm-user-account)) (you must be part of the [_ledgerhq_ organization](https://www.npmjs.com/org/ledgerhq) to publish)
- run `yarn publish` (cf. [doc](https://classic.yarnpkg.com/en/docs/cli/publish/)) on the commit / branch you want to publish (usually the `main` branch) (you will have to specify the new package version, following [semver](https://semver.org/) standard)
- this will update the version in `package.json`, create a new bump commit, a new tag with the latests version and publish the updated package to npm
- don't forget to push this newly generated commit as well as the tag (you must have the necessary rights to push to `main`)

---

[We are hiring, join us! 🚀](https://www.ledger.com/join-us)


### See also:

- [Ledger Live Desktop](https://github.com/ledgerhq/ledger-live-desktop)
- [Ledger Live Mobile](https://github.com/ledgerhq/ledger-live-mobile)
