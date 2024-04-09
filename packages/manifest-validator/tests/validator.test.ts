/* eslint-disable */
import { validateManifest } from "../src/validator";

import * as fs from "fs";
import path from "path";

const manifestDapp = JSON.parse(
  fs.readFileSync(
    path.join(__dirname, "manifests/dapp/dapp-manifest.test.json"),
    "utf-8",
  ),
);

const invalidManifestDapp = JSON.parse(
  fs.readFileSync(
    path.join(__dirname, "manifests/dapp/invalid-dapp-manifest.test.json"),
    "utf-8",
  ),
);

const manifestWalletApp = JSON.parse(
  fs.readFileSync(
    path.join(__dirname, "manifests/walletApp/walletApp-manifest.test.json"),
    "utf-8",
  ),
);
const invalidManifestWalletApp = JSON.parse(
  fs.readFileSync(
    path.join(
      __dirname,
      "manifests/walletApp/invalid-walletApp-manifest.test.json",
    ),
    "utf-8",
  ),
);

const manifestNativeDapp = JSON.parse(
  fs.readFileSync(
    path.join(__dirname, "manifests/nativeDapp/nativeDapp-manifest.test.json"),
    "utf-8",
  ),
);

const invalidManifestNativeDapp = JSON.parse(
  fs.readFileSync(
    path.join(
      __dirname,
      "manifests/nativeDapp/invalid-nativeDapp-manifest.test.json",
    ),
    "utf-8",
  ),
);

test("Dapp's Manifest base is OK", () => {
  expect(validateManifest(manifestDapp)).toBe(true);
  expect(validateManifest(invalidManifestDapp)).toBe(false);
});

test("WalletApp's Manifest base is OK", () => {
  expect(validateManifest(manifestWalletApp)).toBe(true);
  expect(validateManifest(invalidManifestWalletApp)).toBe(false);
});

test("native dapp's Manifest base is OK", () => {
  expect(validateManifest(manifestNativeDapp)).toBe(true);
  expect(validateManifest(invalidManifestNativeDapp)).toBe(false);
});
