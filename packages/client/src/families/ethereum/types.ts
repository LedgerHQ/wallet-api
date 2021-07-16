import type BigNumber from "bignumber.js";

import type { RawTransactionCommon } from "../../rawTypes";
import type { TransactionCommon } from "../../types";

export interface EthereumTransaction extends TransactionCommon {
  family: "ethereum";
  nonce?: number;
  data?: Buffer;
  gasPrice?: BigNumber;
  gasLimit?: BigNumber;
}

export interface RawEthereumTransaction extends RawTransactionCommon {
  family: "ethereum";
  nonce?: number;
  data?: string;
  gasPrice?: string;
  gasLimit?: string;
}
