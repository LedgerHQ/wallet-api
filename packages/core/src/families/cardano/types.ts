import type BigNumber from "bignumber.js";
import type { z } from "zod";
import type { TransactionCommon } from "../index";
import type { schemaRawCardanoTransaction } from "./validation";

export type CardanoTransaction = TransactionCommon & {
  readonly family: RawCardanoTransaction["family"];
  fees?: BigNumber;
  memo?: string;
  mode: string;
};

export type RawCardanoTransaction = z.infer<typeof schemaRawCardanoTransaction>;
