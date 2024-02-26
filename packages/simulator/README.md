<p align="center">
 <img src="https://user-images.githubusercontent.com/9203826/154288895-670f5c23-81a1-4307-a080-1af83f7f8356.svg" align="center" alt="Ledger" />
 <h2 align="center">WalletAPI Simulator</h2>
 <p align="center">Test and develop your application or service without <a href="https://www.ledger.com/ledger-live">Ledger Live</a></p>
</p>
 <p align="center">
  <p align="center">
    <a href="https://www.npmjs.com/package/@ledgerhq/wallet-api-simulator?activeTab=versions">
      <img src="https://img.shields.io/npm/v/@ledgerhq/wallet-api-simulator.svg?style=flat-square" />
    </a>
    <a href="https://opensource.org/licenses/Apache-2.0">
      <img alt="License" src="https://img.shields.io/badge/License-Apache%202.0-blue.svg" />
    </a>
    <a href="https://github.com/LedgerHQ/wallet-api/actions">
      <img alt="Tests Passing" src="https://github.com/LedgerHQ/wallet-api/workflows/Release/badge.svg" />
    </a>
    <a href="https://codecov.io/gh/LedgerHQ/wallet-api">
      <img src="https://codecov.io/gh/LedgerHQ/wallet-api/branch/main/graph/badge.svg" />
    </a>
    <a href="https://github.com/LedgerHQ/wallet-api/issues">
      <img alt="Issues" src="https://img.shields.io/github/issues/LedgerHQ/wallet-api?color=0088ff" />
    </a>
    <a href="https://github.com/LedgerHQ/wallet-api/pulls">
      <img alt="GitHub pull requests" src="https://img.shields.io/github/issues-pr/LedgerHQ/wallet-api?color=0088ff" />
    </a>
    <a href="https://developers.ledger.com/discord-pro">
      <img alt="Discord" src="https://img.shields.io/discord/885256081289379850?color=1C1CE1&label=Ledger%20%7C%20Discord%20%F0%9F%91%8B%20&style=flat-square" />
    </a>
   
   
  </p>

  <p align="center">
    <a href="https://developers.ledger.com/docs/live-app/start-here/">Full documentation</a>
    ·
    <a href="https://github.com/LedgerHQ/wallet-api/issues/new/choose">Report Bug</a>
    ·
    <a href="https://github.com/LedgerHQ/wallet-api/issues/new/choose">Request Feature</a>
  </p>
</p>

## Overview

The Ledger Wallet Simulator is a comprehensive tool designed to emulate the behavior of a Ledger device simulating responses and interactions with the wallet-API. It aids developers in testing and interacting with Ledger-related applications without requiring a physical Ledger device or necessitating the run of your application inside the WebView of the LedgerLive software. This documentation will guide you through the process of setting up and using the simulator.

By following this documentation, you'll be equipped to install, set up, and make the most out of this simulator. If any issues arise or further customization is needed, consider diving deeper into the source code or consulting the official documentation.

## Table of Contents

- [Ledger Wallet Simulator Documentation](#ledger-wallet-simulator-documentation)
  - [Overview](#overview)
  - [Table of Contents](#table-of-contents)
  - [Installation](#installation)
  - [Getting Started](#getting-started)
    - [1. **Setting Up Transport**:](#1-setting-up-transport)
    - [2. **Creating Client**:](#2-creating-client)
  - [Working with Profiles](#working-with-profiles)
  - [Using the Simulator](#using-the-simulator)

---

## Installation

To install the Ledger Wallet Simulator, you'll first need to include the necessary dependencies in your project.

```sh
npm install @ledgerhq/wallet-api-client
```

Then, install the simulator package:

```sh
npm install @ledgerHQ/simulator
```

---

## Getting Started

### 1. **Setting Up Transport**:

Begin by setting up the transport using the `getSimulatorTransport` function.

```typescript
import { getSimulatorTransport, profiles } from "@ledgerHQ/simulator";

const transport = getSimulatorTransport(profiles.STANDARD);
transport.onMessage = handleMessageFunction; // Replace with your message handler.
```

### 2. **Creating Client**:

Create a `createClient` function that return a new client. The provided simulated transport should be passed to the `WalletAPIClient()` as a parameter to effectively interact with the `WalletAPIClient`. Normally, `WalletAPIClient` only works with real transport, but the simulator provides a simulated transport for this purpose.

Here's a basic form:

```typescript
function createClient() {
  // insert the transport created above
  return new WalletAPIClient(transport);
}
```

---

## Working with Profiles

The simulator comes with predefined profiles (`STANDARD` and `DEVICE`), which determine the behavior and data of the simulator. You can easily extend these profiles by spreading inside the profile object:

```typescript
const extendedProfile = {
  ...profiles.STANDARD,
  yourInfo: "yourValue", // Add any custom information here.
};
```

---

## Using the Simulator

The primary use case for the simulator is to emulate a Ledger device's behavior for development and testing purposes. Here's a basic example:

```typescript
// Create a client
const client = createClient();

// List accounts
const response = await client.transaction.list();

console.log(response);
```
