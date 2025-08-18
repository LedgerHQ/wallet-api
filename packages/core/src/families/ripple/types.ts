import type BigNumber from "bignumber.js";
import type { z } from "zod";
import type { TransactionCommon } from "../index";
import type { schemaRawRippleTransaction } from "./validation";

export type RippleTransaction = TransactionCommon & {
  readonly family: RawRippleTransaction["family"];
  fee?: BigNumber;
  tag: number;
  // TODO: document
  tx_json?: string;
};

export type RawRippleTransaction = z.infer<typeof schemaRawRippleTransaction>;
