/* eslint-disable */
import { validateManifest } from "../src/validator";

import * as fs from "fs";
import path from "path";

//dApp
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

//WalletApp
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

//WebBrowserApp
const manifestwebBrowser = JSON.parse(
  fs.readFileSync(
    path.join(
      __dirname,
      "manifests/webBrowserApp/webBrowser-manifest.test.json",
    ),
    "utf-8",
  ),
);

const invalidManifestwebBrowser = JSON.parse(
  fs.readFileSync(
    path.join(
      __dirname,
      "manifests/webBrowserApp/invalid-webBrowser-manifest.test.json",
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

test("webBrowser's Manifest base is OK", () => {
  expect(validateManifest(manifestwebBrowser)).toBe(true);
  expect(validateManifest(invalidManifestwebBrowser)).toBe(false);
});
