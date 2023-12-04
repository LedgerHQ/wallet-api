import BigNumber from "bignumber.js";
import type { z } from "zod";
import { TransactionCommon } from "../types";
import type {
  schemaPolkadotOperationMode,
  schemaPolkadotRewardDestination,
  schemaRawPolkadotTransaction,
} from "./validation";

export type PolkadotOperationMode = z.infer<typeof schemaPolkadotOperationMode>;
export type PolkadotRewardDestination = z.infer<
  typeof schemaPolkadotRewardDestination
>;

export type PolkadotTransaction = TransactionCommon & {
  readonly family: RawPolkadotTransaction["family"];
  mode: PolkadotOperationMode;
  fee?: BigNumber;
  era?: number;
  validators?: string[];
  numOfSlashingSpans?: number;
  rewardDestination?: PolkadotRewardDestination;
};

export type RawPolkadotTransaction = z.infer<
  typeof schemaRawPolkadotTransaction
>;
