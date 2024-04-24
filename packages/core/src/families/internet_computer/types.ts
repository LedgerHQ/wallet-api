import type { z } from "zod";
import type { TransactionCommon } from "../index";
import type { schemaRawInternetComputerTransaction } from "./validation";
import type BigNumber from "bignumber.js";

export type InternetComputerTransaction = TransactionCommon & {
  readonly family: RawInternetComputerTransaction["family"];
  fees: BigNumber;
  memo?: string;
};

export type RawInternetComputerTransaction = z.infer<
  typeof schemaRawInternetComputerTransaction
>;
