import type BigNumber from "bignumber.js";
import type { z } from "zod";
import type { TransactionCommon } from "../index";
import type {
  ElrondOperationMode,
  schemaRawElrondTransaction,
} from "./validation";

export type ElrondTransaction = TransactionCommon & {
  readonly family: RawElrondTransaction["family"];
  mode: ElrondOperationMode;
  data?: string;
  fees?: BigNumber;
  gasLimit: number;
};

export type RawElrondTransaction = z.infer<typeof schemaRawElrondTransaction>;
