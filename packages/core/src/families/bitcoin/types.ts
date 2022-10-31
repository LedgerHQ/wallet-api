import type BigNumber from "bignumber.js";
import type { z } from "zod";
import type { TransactionCommon } from "../index";
import type { schemaRawBitcoinTransaction } from "./validation";

export interface BitcoinTransaction extends TransactionCommon {
  readonly family: RawBitcoinTransaction["family"];
  feePerByte?: BigNumber;
}

export type RawBitcoinTransaction = z.infer<typeof schemaRawBitcoinTransaction>;
