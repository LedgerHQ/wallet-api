import type BigNumber from "bignumber.js";
import type { z } from "zod";
import type { TransactionCommon } from "../index";
import type { schemaRawBitcoinTransaction } from "./validation";

export type BitcoinTransaction = TransactionCommon & {
  readonly family: RawBitcoinTransaction["family"];
  feePerByte?: BigNumber;
  opReturnData?: Buffer;
};

export type RawBitcoinTransaction = z.infer<typeof schemaRawBitcoinTransaction>;
