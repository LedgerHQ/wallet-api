import type BigNumber from "bignumber.js";
import type { z } from "zod";
import type { TransactionCommon } from "../index";
import type {
  schemaAptosOperationMode,
  schemaRawAptosTransaction,
} from "./validation";

export type AptosOperationMode = z.infer<typeof schemaAptosOperationMode>;

export type AptosTransaction = TransactionCommon & {
  readonly family: RawAptosTransaction["family"];
  mode: AptosOperationMode;
  fees?: BigNumber;
};

export type RawAptosTransaction = z.infer<typeof schemaRawAptosTransaction>;
