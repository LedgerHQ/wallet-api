import type { JestConfigWithTsJest } from "ts-jest";

import client from "./packages/client/package.json"
// import core from "./packages/core/package.json"

const config: JestConfigWithTsJest = {
  preset: "ts-jest",
  projects: [
    {
      displayName: client.name,
      testMatch: ["<rootDir>/packages/client/tests/**/*.spec.ts"],
      testEnvironment: "jsdom",
      testRunner: "jest-circus/runner",
      transform: {
        // @ts-ignore
        "^.+\\.ts$": ["ts-jest"],
      },
    },
    // {
    //   displayName: core.name,
    //   testMatch: ["<rootDir>/packages/core/tests/**/*.spec.ts"],
    //   testRunner: "jest-circus/runner",
    //   transform: {
    //     // @ts-ignore
    //     "^.+\\.ts$": ["ts-jest"]
    //   },
    // }
  ]
};

export default config;
