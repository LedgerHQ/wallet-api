import type { JestConfigWithTsJest } from "ts-jest";

const config: JestConfigWithTsJest = {
  preset: "@ledgerhq/jest-shared-config",
  moduleNameMapper: {
    "^@ledgerhq/wallet-api-(.*)$": "<rootDir>/../../packages/$1/src/index.ts",
    "^bignumber\\.js$": "bignumber.js-v9",
  },
};

export default config;
