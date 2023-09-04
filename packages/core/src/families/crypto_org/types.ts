import type BigNumber from "bignumber.js";
import type { z } from "zod";
import type { TransactionCommon } from "../index";
import type { schemaRawCryptoOrgTransaction } from "./validation";

export type CryptoOrgTransaction = TransactionCommon & {
  readonly family: RawCryptoOrgTransaction["family"];
  mode: string;
  fees?: BigNumber;
};

export type RawCryptoOrgTransaction = z.infer<
  typeof schemaRawCryptoOrgTransaction
>;
