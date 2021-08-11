[![codecov](https://codecov.io/gh/LedgerHQ/ledger-live-platform-sdk/branch/main/graph/badge.svg?token=G9IMCB6mL3)](https://codecov.io/gh/LedgerHQ/ledger-live-platform-sdk)

# Ledger Live Platform SDK

**[We are hiring, join us! 👨‍💻👩‍💻](https://jobs.lever.co/ledger/?department=Engineering)**

<img src="https://user-images.githubusercontent.com/211411/34776833-6f1ef4da-f618-11e7-8b13-f0697901d6a8.png" height="80" />

[![Ledger Devs Slack](https://img.shields.io/badge/Slack-LedgerDevs-yellow.svg?style=flat)](https://ledger-dev.slack.com/)
[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)

Welcome to Ledger Live Platform SDK.

**See also:**

- [Ledger Developer Portal](https://developers.ledger.com/)
- [Ledger Live Desktop](https://github.com/ledgerhq/ledger-live-desktop)
- [Ledger Live Mobile](https://github.com/ledgerhq/ledger-live-mobile)
- [live-common](https://github.com/ledgerhq/ledger-live-common)

## Contributing

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

## Documentation

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
