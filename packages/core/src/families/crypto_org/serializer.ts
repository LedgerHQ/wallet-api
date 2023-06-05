import BigNumber from "bignumber.js";
import type { CryptoOrgTransaction, RawCryptoOrgTransaction } from "./types";

export const serializeCryptoOrgTransaction = ({
  family,
  mode,
  fees,
  amount,
  recipient,
}: CryptoOrgTransaction): RawCryptoOrgTransaction => ({
  family,
  amount: amount.toString(),
  recipient,
  fees: fees ? fees.toString() : undefined,
  mode,
});

export const deserializeCryptoOrgTransaction = ({
  family,
  mode,
  fees,
  amount,
  recipient,
}: RawCryptoOrgTransaction): CryptoOrgTransaction => ({
  family,
  amount: new BigNumber(amount),
  recipient,
  fees: fees ? new BigNumber(fees) : undefined,
  mode,
});
