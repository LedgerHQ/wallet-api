# Ledger Wallet Simulator Documentation

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
  - [Custom Handlers (Optional)](#custom-handlers-optional)
  - [Using the Simulator](#using-the-simulator)
  - [Transactions Example](#transactions-example)

---

## Installation

To install the Ledger Wallet Simulator, you'll first need to include the necessary dependencies in your project.

```bash
npm install @ledgerhq/wallet-api-client
```

Then, install the simulator package:

```bash
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
Create a  `createClient` function that return a new client. The provided simulated transport should be passed to the `WalletAPIClient()` as a parameter to effectively interact with the `WalletAPIClient`. Normally, `WalletAPIClient` only works with real transport, but the simulator provides a simulated transport for this purpose.

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
  yourInfo: "yourValue" // Add any custom information here.
};
```

---

## Custom Handlers (Optional)

If you wish to introduce custom behaviors into the simulator, you can define and use custom handlers. These handlers enable additional functionalities, allowing for a broader range of testing scenarios.

 **Logging**: Logs a message and expects a `{ res: "hello" }` response.

 **Device Handling**: Opens a device with a specific ID.


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

---

## Transactions Example
