import type BigNumber from "bignumber.js";

import FAMILIES from "../types";

import type { RawTransactionCommon } from "../../rawTypes";
import type { TransactionCommon } from "../../types";

export interface CryptoOrgTransaction extends TransactionCommon {
  family: FAMILIES.CRYPTO_ORG;
  mode: string;
  fees?: BigNumber;
}

export interface RawCryptoOrgTransaction extends RawTransactionCommon {
  family: FAMILIES.CRYPTO_ORG;
  mode: string;
  fees?: string;
}
