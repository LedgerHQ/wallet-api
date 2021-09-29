import type BigNumber from "bignumber.js";
import type { AlgorandTransaction } from "./families/algorand/types";
import type { BitcoinTransaction } from "./families/bitcoin/types";
import type { CosmosTransaction } from "./families/cosmos/types";
import type { CryptoOrgTransaction } from "./families/crypto_org/types";
import type { EthereumTransaction } from "./families/ethereum/types";
import type { PolkadotTransaction } from "./families/polkadot/types";
import type { RippleTransaction } from "./families/ripple/types";
import type { StellarTransaction } from "./families/stellar/types";
import type { TezosTransaction } from "./families/tezos/types";
import type { TronTransaction } from "./families/tron/types";

export type MessageHandler = (payload: unknown) => Promise<void>;

export interface Transport {
  connect(): void;
  disconnect(): void;
  onMessage: MessageHandler | undefined;
  send(payload: unknown): Promise<void>;
}

/**
 * Metadata used to describe a secure exchange between a Ledger device
 * and a partner (for sell, swap and funding), the information is a
 * hex string of a protobuf containing all the data from the exchange
 * @ref: https://github.com/LedgerHQ/app-exchange/blob/master/src/proto/protocol.proto
 */
export type ExchangePayload = string;

export type ExchangeDeviceTxId = string;

export type EcdsaSignature = string;

export enum FeesLevel {
  Slow = "slow",
  Medium = "medium",
  Fast = "fast",
}

export interface TransactionCommon {
  amount: BigNumber;
  recipient: string;
}

export type Transaction =
  | EthereumTransaction
  | BitcoinTransaction
  | AlgorandTransaction
  | CryptoOrgTransaction
  | RippleTransaction
  | CosmosTransaction
  | TezosTransaction
  | PolkadotTransaction
  | StellarTransaction
  | TronTransaction;

export type EstimatedFees = {
  low: number;
  standard: number;
  high: number;
};

export enum DeviceModel {
  Blue = "blue",
  NanoS = "nanoS",
  NanoX = "nanoX",
}

/**
 * Information about a device
 */
export type DeviceDetails = {
  /**
   * The model of the device (Nano S, Nano X...)
   */
  modelId: DeviceModel;
  /**
   * The version of the firmware
   */
  version: string;
};

/**
 * Enum describing the different types of exchanges.
 */
export enum ExchangeType {
  SWAP = 0x00,
  SELL = 0x01,
  FUND = 0x02,
}

export type Account = {
  id: string;
  name: string;
  address: string;
  currency: string;
  balance: BigNumber;
  spendableBalance: BigNumber;
  blockHeight: number;
  lastSyncDate: Date;
};

/**
 * Informations about a device application
 */
export type ApplicationDetails = {
  /**
   * Name of the application
   */
  name: string;
  /**
   * Version of the application (SemVer)
   */
  version: string;
};

export type Unit = {
  name: string;
  code: string;
  magnitude: number;
};

export type Currency = {
  type: string;
  color: string;
  ticker: string;
  id: string;
  name: string;
  family: string;
  units: Unit[];
};
