import type BigNumber from "bignumber.js";
import type { z } from "zod";
import type { TransactionCommon } from "../index";
import type { schemaRawKaspaTransaction } from "./validation";

export type KaspaTransaction = TransactionCommon & {
  readonly family: RawKaspaTransaction["family"];
  customFeeRate?: BigNumber | undefined;
};

export type RawKaspaTransaction = z.infer<typeof schemaRawKaspaTransaction>;
