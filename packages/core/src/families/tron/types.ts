import type { z } from "zod";
import type { TransactionCommon } from "../index";
import type {
  schemaRawTronTransaction,
  schemaTronOperationMode,
  schemaTronResource,
} from "./validation";

export type TronOperationMode = z.infer<typeof schemaTronOperationMode>;

export type TronResource = z.infer<typeof schemaTronResource>;

export interface TronTransaction extends TransactionCommon {
  readonly family: RawTronTransaction["family"];
  mode: TronOperationMode;
  resource?: TronResource;
  duration?: number;
}

export type RawTronTransaction = z.infer<typeof schemaRawTronTransaction>;
