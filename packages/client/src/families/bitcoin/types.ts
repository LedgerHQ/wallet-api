import type BigNumber from "bignumber.js";

import type { TransactionCommon } from "../../types";

export interface BitcoinTransaction extends TransactionCommon {
  family: "bitcoin";
  feePerByte?: BigNumber;
}
