import type { JestConfigWithTsJest } from "ts-jest";
import { baseConfig } from "../../jest.base.config";

export default async (): Promise<JestConfigWithTsJest> => {
  return baseConfig
}
