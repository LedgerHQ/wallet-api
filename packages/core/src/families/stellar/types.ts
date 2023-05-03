import type BigNumber from "bignumber.js";
import type { z } from "zod";
import type { TransactionCommon } from "../index";
import type {
  schemaRawStellarTransaction,
  stellarMemoTypeEnum,
} from "./validation";

export interface StellarTransaction extends TransactionCommon {
  readonly family: RawStellarTransaction["family"];
  fees?: BigNumber;
  memoType?: StellarMemoType;
  memoValue?: string;
}

export type RawStellarTransaction = z.infer<typeof schemaRawStellarTransaction>;

export type StellarMemoType = z.infer<typeof stellarMemoTypeEnum>;
