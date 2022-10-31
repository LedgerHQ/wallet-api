import type BigNumber from "bignumber.js";
import type { z } from "zod";
import type { TransactionCommon } from "../index";
import type { schemaRawStellarTransaction } from "./validation";

export interface StellarTransaction extends TransactionCommon {
  readonly family: RawStellarTransaction["family"];
  fees?: BigNumber;
  memoType?: string;
  memoValue?: string;
}

export type RawStellarTransaction = z.infer<typeof schemaRawStellarTransaction>;
