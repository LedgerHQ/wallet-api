import type BigNumber from "bignumber.js";
import type { z } from "zod";
import type { TransactionCommon } from "../index";
import type { schemaRawElrondTransaction } from "./validation";

export type ElrondTransactionMode =
  | "send"
  | "delegate"
  | "reDelegateRewards"
  | "unDelegate"
  | "claimRewards"
  | "withdraw";

export interface ElrondTransaction extends TransactionCommon {
  readonly family: RawElrondTransaction["family"];
  mode: ElrondTransactionMode;
  data?: Buffer;
  fees: BigNumber | null | undefined;
  gasLimit?: BigNumber;
}

export type RawElrondTransaction = z.infer<typeof schemaRawElrondTransaction>;
