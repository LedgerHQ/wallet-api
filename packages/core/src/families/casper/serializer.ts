import BigNumber from "bignumber.js";
import type { RawCasperTransaction, CasperTransaction } from "./types";

export const serializeCasperTransaction = ({
  amount,
  recipient,
  family,
  fees,
  transferId,
}: CasperTransaction): RawCasperTransaction => ({
  amount: amount.toFixed(),
  recipient,
  family,
  fees: fees.toString(),
  transferId,
});

export const deserializeCasperTransaction = ({
  amount,
  recipient,
  family,
  fees,
  transferId,
}: RawCasperTransaction): CasperTransaction => ({
  amount: new BigNumber(amount),
  recipient,
  family,
  fees: new BigNumber(fees),
  transferId,
});
