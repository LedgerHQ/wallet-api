import type BigNumber from "bignumber.js";
import type {
  FAMILIES,
  RawTransactionCommon,
  TransactionCommon,
} from "../../index";

export interface BitcoinTransaction extends TransactionCommon {
  readonly family: FAMILIES.BITCOIN;
  feePerByte?: BigNumber;
}

export interface RawBitcoinTransaction extends RawTransactionCommon {
  readonly family: FAMILIES.BITCOIN;
  feePerByte?: string;
}
