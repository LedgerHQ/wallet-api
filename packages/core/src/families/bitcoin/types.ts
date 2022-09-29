import type BigNumber from "bignumber.js";
import type {
  FAMILIES,
  RawTransactionCommon,
  TransactionCommon,
} from "../index";

export interface BitcoinTransaction extends TransactionCommon {
  readonly family: FAMILIES.Bitcoin;
  feePerByte?: BigNumber;
}

export interface RawBitcoinTransaction extends RawTransactionCommon {
  readonly family: FAMILIES.Bitcoin;
  feePerByte?: string;
}
