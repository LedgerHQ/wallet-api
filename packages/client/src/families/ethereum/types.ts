import type BigNumber from "bignumber.js";

import type { TransactionCommon } from "../../types";

export interface EthereumTransaction extends TransactionCommon {
  family: "ethereum";
  nonce?: number;
  data?: Buffer;
  gasPrice?: BigNumber;
  gasLimit?: BigNumber;
}
