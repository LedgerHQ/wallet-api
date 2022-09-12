<p align="center">
 <img src="https://user-images.githubusercontent.com/9203826/154288895-670f5c23-81a1-4307-a080-1af83f7f8356.svg" align="center" alt="Ledger" />
 <h2 align="center">Wallet API</h2>
 <p align="center">Integrate your application or service inside a Ledger client wallet
</p>
  <p align="center">
  <!-- Update with each individual package version -->
    <a href="https://www.npmjs.com/package/@ledgerhq/platform-sdk">
      <img src="https://img.shields.io/npm/v/@ledgerhq/platform-sdk.svg?style=flat-square" />
    </a>
    <!-- Update with each individual package version (or the monorepo version if applicable) -->
    <a href="https://choosealicense.com/licenses/mit/">
      <img alt="License" src="https://img.shields.io/github/license/LedgerHQ/platform-sdk" />
    </a>
    <!-- Enable and display when CI set up -->
    <!-- <a href="https://github.com/LedgerHQ/platform-sdk/actions">
      <img alt="Tests Passing" src="https://github.com/LedgerHQ/platform-sdk/workflows/CI/badge.svg" />
    </a> -->
    <a href="https://github.com/LedgerHQ/platform-sdk/issues">
      <img alt="Issues" src="https://img.shields.io/github/issues/LedgerHQ/platform-sdk?color=0088ff" />
    </a>
    <a href="https://github.com/LedgerHQ/platform-sdk/pulls">
      <img alt="GitHub pull requests" src="https://img.shields.io/github/issues-pr/LedgerHQ/platform-sdk?color=0088ff" />
    </a>
    <a href="https://discord.gg/y6nZhxv2bC">
      <img alt="Discord" src="https://img.shields.io/discord/885256081289379850?color=1C1CE1&label=Ledger%20%7C%20Discord%20%F0%9F%91%8B%20&style=flat-square" />
    </a>
  </p>

  <p align="center">
    <a href="https://developers.ledger.com/docs/live-app/start-here/">Ledger Developer Portal</a>
    ·
    <a href="https://github.com/LedgerHQ/platform-sdk/issues/new/choose">Report Bug</a>
    ·
    <a href="https://github.com/LedgerHQ/platform-sdk/issues/new/choose">Request Feature</a>
  </p>
  <!-- Also add monorepo docuzaurus doc when available -->
</p>

# About

This monorepo hosts the Wallet API and some reference implementations to allow anyone to seamlessly integrate on top of Ledger ecosystem.

# Get started

To get started, head over to the [specifications](/spec/README.md) part of the documentation to get a  bird's-eye view of the API and its different parts including the [RPC specification](/spec/rpc/README.md), as well as the [client](/spec/client/README.md) and [server](/spec/server/README.md) ones.


# How does it works

The Wallet API defines an interface for applications and wallets to interact within the Ledger ecosystem, allowing cross compatibilitiy between applications and wallets, in a currency agnostic way.

<!-- TODO: link to reference implementations of client and server once available -->
Each wallet and application then needs to implement this interface. In this repo, you will find a reference implementation for the client part of the interface and one for the server parth of the interface, under the `/packages` directory.

<!-- TODO: add a chart illustrating connection / interaction between applications, wallets and API -->


# Where to get help

You can get help by:
- Heading over to our [Ledger Develop Portal](https://developers.ledger.com)
- Joining our [Discord](https://discord.gg/y6nZhxv2bC)
- Opening an issue with the `help wanted` label

# Contributing

Contributions are always welcome! Please read the [contribution guidelines](/CONTRIBUTING.md) first.