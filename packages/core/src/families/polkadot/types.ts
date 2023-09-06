import type BigNumber from "bignumber.js";
import type { z } from "zod";
import type { TransactionCommon } from "../index";
import type {
  schemaPolkadotOperationMode,
  schemaRawPolkadotTransaction,
} from "./validation";

export type PolkadotOperationMode = z.infer<typeof schemaPolkadotOperationMode>;

export type PolkadotTransaction = TransactionCommon & {
  readonly family: RawPolkadotTransaction["family"];
  mode: PolkadotOperationMode;
  fee?: BigNumber;
  era?: number;
};

export type RawPolkadotTransaction = z.infer<
  typeof schemaRawPolkadotTransaction
>;
