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

/**
 * A [[Transport]] message handled function type
 *
 * @alpha
 */
export type MessageHandler = (payload: unknown) => Promise<void>;

/**
 * A transport protocole used to communicate with the Ledger Live platform
 *
 * @alpha
 */
export interface Transport {
  /**
   * Connect the transport instance
   */
  connect(): void;
  /**
   * Disconnect the transport instance
   */
  disconnect(): void;
  /**
   * A function to handle new messages comming from the Ledger Live platform
   */
  onMessage: MessageHandler | undefined;
  /**
   * A function to send new messages to the Ledger Live platform
   */
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

/**
 * Abstract level of fees for a transaction
 */
export enum FeesLevel {
  Slow = "slow",
  Medium = "medium",
  Fast = "fast",
}

/**
 * Common fields for all cryptocurrency transactions
 */
export interface TransactionCommon {
  /**
   * The amount of token to send in the transaction
   */
  amount: BigNumber;
  /**
   * The address of the transaction's recipient
   */
  recipient: string;
}

/**
 * Description of an unsigned transaction. This type is used to build transaction
 * and then sign them by a Ledger device and finally broadcast them to the network
 * upon user validation.
 */
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

export enum DeviceModel {
  /**
   * Represents the Ledger Blue hardware device
   */
  Blue = "blue",
  /**
   * Represents the Ledger Nano S hardware device
   */
  NanoS = "nanoS",
  /**
   * Represents the Ledger Nano X hardware device
   */
  NanoX = "nanoX",
}

/**
 * Information about a device
 */
export type DeviceInfo = {
  /**
   * The [[DeviceModel | model]] of the device
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

/**
 * A ledger live cryptocurency account
 *
 * @remarks
 * This is a slightly modified subset of the Account type used by the Ledger Live platform.
 *
 * @see {@link https://github.com/LedgerHQ/ledger-live-common/blob/master/docs/account.md|Account reference} in Ledger Live Common doc for more infos
 */
export type Account = {
  /**
   * The unique identifier of this account used internally by Ledger Live software
   */
  id: string;
  /**
   * The name of the account that the user has set
   */
  name: string;
  /**
   * The "next" public address where a user should receive funds. In the context of Bitcoin, the address will be "renewed" each time funds were received in order to allow some privacy. In other blockchains, it might never change
   */
  address: string;
  /**
   * The associated cryptocurrency id of the Account
   */
  currency: string;
  /**
   * Represent the total amount of assets that this account holds
   */
  balance: BigNumber;
  /**
   * Represents the subset of balance that can be spent. Most of the time it will be equal to balance but this can vary in some blockchains
   */
  spendableBalance: BigNumber;
  /**
   * Tracks the current blockchain block height
   */
  blockHeight: number;
  /**
   * The date of the last time a synchronisation was performed, in other words tracks how up to date the Account data is
   */
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

/**
 * A unit describes a given representation of a currency for humans. A currency can have many units, for instance, we can assume Euro have euros and cents. We can define Bitcoin to have: bitcoin, mBTC, bit, satoshi (but that's up to us really).
 *
 * @remarks
 * This is a slightly modified subset of the Unit type used by the Ledger Live platform.
 *
 * @see {@link https://github.com/LedgerHQ/ledger-live-common/blob/master/docs/currency.md#unit|Unit reference} in Ledger Live Common doc for more infos
 */
export type Unit = {
  /**
   * display name of a given unit (example: satoshi)
   */
  name: string;
  /**
   * string to use when formatting the unit. like 'BTC' or 'USD'
   */
  code: string;
  /**
   * number of digits after the '.' in context of this unit
   */
  magnitude: number;
};

/**
 * A cryptocurrency model
 */
export type Currency = {
  /**
   * represents the currency type. For now only "CryptoCurrency" is handled
   * @see {@link https://github.com/LedgerHQ/ledgerjs/blob/master/packages/cryptoassets/src/types.ts|cryptoassets types} in ledgerjs for more infos
   */
  type: string;
  /**
   * used for UI
   */
  color: string;
  /**
   * the ticker name in exchanges / countervalue apis (e.g. BTC).
   */
  ticker: string;
  /**
   * unique internal id of the cryptocurrency
   */
  id: string;
  /**
   * display name of the currency
   */
  name: string;
  /**
   * the [[FAMILIES | family]] of the currency
   */
  family: string;
  /**
   * array of available [[Unit | units]] for the cryptocurrency
   */
  units: Unit[];
};
