import type { z } from "zod";
import type { TransactionCommon } from "../index";
import type {
  schemaRawTronTransaction,
  schemaTronOperationMode,
  schemaTronResource,
  schemaTronVotes,
} from "./validation";

export type TronOperationMode = z.infer<typeof schemaTronOperationMode>;

export type TronResource = z.infer<typeof schemaTronResource>;
export type TronVote = z.infer<typeof schemaTronVotes>;

export type TronTransaction = TransactionCommon & {
  readonly family: RawTronTransaction["family"];
  mode: TronOperationMode;
  resource?: TronResource;
  duration?: number;
  votes?: TronVote[];
};

export type RawTronTransaction = z.infer<typeof schemaRawTronTransaction>;
