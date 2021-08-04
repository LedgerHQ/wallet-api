import BigNumber from "bignumber.js";
import { CryptoOrgTransaction, RawCryptoOrgTransaction } from "./types";

export const serializeCryptoOrgTransaction = ({
  family,
  mode,
  fees,
  amount,
  recipient,
}: CryptoOrgTransaction): RawCryptoOrgTransaction => {
  return {
    family,
    amount: amount.toString(),
    recipient,
    fees: fees ? fees.toString() : undefined,
    mode,
  };
};

export const deserializeCryptoOrgTransaction = ({
  family,
  mode,
  fees,
  amount,
  recipient,
}: RawCryptoOrgTransaction): CryptoOrgTransaction => {
  return {
    family,
    amount: new BigNumber(amount),
    recipient,
    fees: fees ? new BigNumber(fees) : undefined,
    mode,
  };
};
