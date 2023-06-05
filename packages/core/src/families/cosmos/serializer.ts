import BigNumber from "bignumber.js";
import type { CosmosTransaction, RawCosmosTransaction } from "./types";

export const serializeCosmosTransaction = ({
  amount,
  recipient,
  family,
  mode,
  fees,
  gas,
  memo,
}: CosmosTransaction): RawCosmosTransaction => ({
  amount: amount.toString(),
  recipient,
  family,
  mode,
  fees: fees ? fees.toString() : undefined,
  gas: gas ? gas.toString() : undefined,
  memo,
});

export const deserializeCosmosTransaction = ({
  amount,
  recipient,
  family,
  mode,
  fees,
  gas,
  memo,
}: RawCosmosTransaction): CosmosTransaction => ({
  amount: new BigNumber(amount),
  recipient,
  family,
  mode,
  fees: fees ? new BigNumber(fees) : undefined,
  gas: gas ? new BigNumber(gas) : undefined,
  memo,
});
