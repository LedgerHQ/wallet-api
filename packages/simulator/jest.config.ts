import type { JestConfigWithTsJest } from "ts-jest";

const config: JestConfigWithTsJest = {
  preset: "@ledgerhq/jest-shared-config",
  moduleNameMapper: {
    "^@ledgerhq/wallet-api-(.*)$": "<rootDir>/../../packages/$1/src/index.ts",
  },
};

export default config;
