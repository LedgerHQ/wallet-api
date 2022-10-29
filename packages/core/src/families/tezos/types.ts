import type BigNumber from "bignumber.js";
import type { z } from "zod";
import type { TransactionCommon } from "../index";
import type {
  schemaRawTezosTransaction,
  schemaTezosOperationMode,
} from "./validation";

export type TezosOperationMode = z.infer<typeof schemaTezosOperationMode>;

export interface TezosTransaction extends TransactionCommon {
  readonly family: RawTezosTransaction["family"];
  mode: TezosOperationMode;
  fees?: BigNumber;
  gasLimit?: BigNumber;
}

export type RawTezosTransaction = z.infer<typeof schemaRawTezosTransaction>;
