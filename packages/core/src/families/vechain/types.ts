import { Transaction as ThorTransaction } from "thor-devkit";
import type { z } from "zod";
import type { TransactionCommon } from "../index";
import type { schemaRawVechainTransaction } from "./validation";

export type VechainTransaction = TransactionCommon & {
  readonly family: RawVechainTransaction["family"];
  estimatedFees: string;
  body: ThorTransaction.Body;
};

export type RawVechainTransaction = z.infer<typeof schemaRawVechainTransaction>;
