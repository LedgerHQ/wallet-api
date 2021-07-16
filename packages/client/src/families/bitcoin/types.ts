import type BigNumber from "bignumber.js";

import type { RawTransactionCommon } from "../../rawTypes";
import type { TransactionCommon } from "../../types";

export interface BitcoinTransaction extends TransactionCommon {
  family: "bitcoin";
  feePerByte?: BigNumber;
}

export interface RawBitcoinTransaction extends RawTransactionCommon {
  family: "bitcoin";
  feePerByte?: string;
}
