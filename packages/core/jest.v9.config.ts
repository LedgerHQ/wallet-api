import type { JestConfigWithTsJest } from "ts-jest";

const config: JestConfigWithTsJest = {
  preset: "@ledgerhq/jest-shared-config",
  moduleNameMapper: {
    "^bignumber\\.js$": "bignumber.js-v9",
  },
};

export default config;
