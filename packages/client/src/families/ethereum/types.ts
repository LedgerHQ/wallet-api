import type BigNumber from "bignumber.js";

import FAMILIES from "../types";

import type { RawTransactionCommon } from "../../rawTypes";
import type { TransactionCommon } from "../../types";

export interface EthereumTransaction extends TransactionCommon {
  readonly family: FAMILIES.ETHEREUM;
  nonce?: number;
  data?: Buffer;
  gasPrice?: BigNumber;
  gasLimit?: BigNumber;
}

export interface RawEthereumTransaction extends RawTransactionCommon {
  readonly family: FAMILIES.ETHEREUM;
  nonce?: number;
  data?: string;
  gasPrice?: string;
  gasLimit?: string;
}
