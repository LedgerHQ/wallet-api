import type BigNumber from "bignumber.js";
import type { z } from "zod";
import type { TransactionCommon } from "../index";
import type {
  schemaCosmosOperationMode,
  schemaRawCosmosTransaction,
} from "./validation";

export type CosmosOperationMode = z.infer<typeof schemaCosmosOperationMode>;

export interface CosmosTransaction extends TransactionCommon {
  readonly family: RawCosmosTransaction["family"];
  mode: CosmosOperationMode;
  fees?: BigNumber;
  gas?: BigNumber;
  memo?: string;
}

export type RawCosmosTransaction = z.infer<typeof schemaRawCosmosTransaction>;
