import BigNumber from "bignumber.js";
import type { z } from "zod";
import type { TransactionCommon } from "../index";
import type { schemaTonComment, schemaRawTonTransaction } from "./validation";

export type TonComment = z.infer<typeof schemaTonComment>;

export type TonTransaction = TransactionCommon & {
  readonly family: RawTonTransaction["family"];
  fees: BigNumber;
  comment: TonComment;
};

export type RawTonTransaction = z.infer<typeof schemaRawTonTransaction>;
