import type BigNumber from "bignumber.js";
import type {
  FAMILIES,
  RawTransactionCommon,
  TransactionCommon,
} from "../index";

export interface EthereumTransaction extends TransactionCommon {
  readonly family: FAMILIES.Ethereum;
  nonce?: number;
  data?: Buffer;
  gasPrice?: BigNumber;
  gasLimit?: BigNumber;
}

export interface RawEthereumTransaction extends RawTransactionCommon {
  readonly family: FAMILIES.Ethereum;
  nonce?: number;
  data?: string;
  gasPrice?: string;
  gasLimit?: string;
}
