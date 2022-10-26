import type { JestConfigWithTsJest } from "ts-jest";

import client from "./packages/client/package.json"
import core from "./packages/core/package.json"

export default async (): Promise<JestConfigWithTsJest> => {
  const transform = {
    "^.+\\.ts$": "ts-jest"
  };

  return {
    preset: "ts-jest",
    testRunner: "jest-circus/runner",
    projects: [
      {
        displayName: client.name,
        testMatch: testMatch("client"),
        testEnvironment: "jsdom",
        transform,
      },
      {
        displayName: core.name,
        testMatch: testMatch("core"),
        transform,
        // ignore transport tests for now
        testPathIgnorePatterns: ["packages/core/tests/transports"]
      }
    ]
  }
}

function testMatch(name: string): JestConfigWithTsJest["testMatch"] {
  return [`<rootDir>/packages/${name}/tests/**/*.spec.ts`];
}
