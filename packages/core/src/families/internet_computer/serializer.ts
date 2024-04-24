import BigNumber from "bignumber.js";
import type {
  RawInternetComputerTransaction,
  InternetComputerTransaction,
} from "./types";

export const serializeInternetComputerTransaction = ({
  amount,
  recipient,
  family,
  fees,
  memo,
}: InternetComputerTransaction): RawInternetComputerTransaction => ({
  amount: amount.toFixed(),
  recipient,
  family,
  fees: fees.toString(),
  memo,
});

export const deserializeInternetComputerTransaction = ({
  amount,
  recipient,
  family,
  fees,
  memo,
}: RawInternetComputerTransaction): InternetComputerTransaction => ({
  amount: new BigNumber(amount),
  recipient,
  family,
  fees: new BigNumber(fees),
  memo,
});
