import type { z } from "zod";
import type { TransactionCommon } from "../index";
import type { schemaRawCasperTransaction } from "./validation";
import type BigNumber from "bignumber.js";

export type CasperTransaction = TransactionCommon & {
  readonly family: RawCasperTransaction["family"];
  fees: BigNumber;
  transferId?: string;
};

export type RawCasperTransaction = z.infer<typeof schemaRawCasperTransaction>;
