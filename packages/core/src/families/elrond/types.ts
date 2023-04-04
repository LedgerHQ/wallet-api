import type BigNumber from "bignumber.js";
import type { z } from "zod";
import type { TransactionCommon } from "../index";
import type {
  schemaRawElrondTransaction,
  ElrondOperationMode,
} from "./validation";

export interface ElrondTransaction extends TransactionCommon {
  readonly family: RawElrondTransaction["family"];
  mode: ElrondOperationMode;
  data?: Buffer;
  fees: BigNumber | null | undefined;
  gasLimit: BigNumber;
}

export type RawElrondTransaction = z.infer<typeof schemaRawElrondTransaction>;