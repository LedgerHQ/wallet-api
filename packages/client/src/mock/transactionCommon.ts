import BigNumber from "bignumber.js";
import { RawTransactionCommon, TransactionCommon } from "..";

export const rawTxCommon: Omit<RawTransactionCommon, "family"> = {
  amount: "1",
  recipient: "[RECIPIENT_ADDRESS]",
};

export const txCommon: Omit<TransactionCommon, "family"> = {
  amount: new BigNumber(1),
  recipient: "[RECIPIENT_ADDRESS]",
};
