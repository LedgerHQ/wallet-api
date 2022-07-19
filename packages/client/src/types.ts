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
 * Simple contract for handling a Message received through a [[Transport]] protocol
 *
 * @alpha
 */
export type MessageHandler = (payload: unknown) => Promise<void>;

/**
 * A transport protocol used to communicate with the Ledger Live platform
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
   * A function to handle new messages coming from the Ledger Live platform
   */
  onMessage: MessageHandler | undefined;
  /**
   * A function to send new messages to the Ledger Live platform
   */
  send(payload: unknown): Promise<void>;
}
/**
 * Metadata used to describe a secure exchange between a Ledger device
 * and a partner (for sell, swap and funding)
 * @ref: https://github.com/LedgerHQ/app-exchange/blob/master/src/proto/protocol.proto
 */
export type ExchangePayload = Buffer;

/**
 * The ECDSA signature of the [[ExchangePayload | payload]]
 */
export type EcdsaSignature = Buffer;

/**
 * A transaction ID used to complete the exchange process
 */
export type ExchangeDeviceTxId = string;

/**
 * Abstract level of fees for a transaction
 */
export enum FeesLevel {
  Slow = "slow",
  Medium = "medium",
  Fast = "fast",
}

/**
 * Currency types
 */
export enum CurrencyType {
  CryptoCurrency = "CryptoCurrency",
  TokenCurrency = "TokenCurrency",
}

/**
 * Token standards
 */
export enum TokenStandard {
  ERC20 = "ERC20",
}

/**
 * Common fields for all cryptocurrency transactions
 */
export interface TransactionCommon {
  /**
   * The amount of token to send in the transaction, denoted in the smallest cryptocurrency's magnitude
   * For example in BTC, a tx with an 'amount' field of 1 will correspond to a tx corresponding to 0.00000001 BTC
   */
  amount: BigNumber;
  /**
   * The address of the transaction's recipient
   */
  recipient: string;
}

/**
 * Description of an unsigned transaction. This type is used to build
 * transactions and then sign them with a Ledger device and finally broadcast
 * them to the network upon user validation.
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
 * A ledger live cryptocurrency account
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
   * The account’s name set by the user.
   */
  name: string;
  /**
   * The "next" public address where a user should receive funds. In the context of Bitcoin, the address is "renewed" each time funds are received in order to allow some privacy. In other blockchains, the address might never change
   */
  address: string;
  /**
   * The associated cryptocurrency id of the Account
   */
  currency: string;
  /**
   * The total amount of assets that this account holds
   */
  balance: BigNumber;
  /**
   * The amount of the balance that can be spent. Most of the time it will be equal to the balance, but this can vary in some blockchains
   */
  spendableBalance: BigNumber;
  /**
   * Tracks the current blockchain block height
   */
  blockHeight: number;
  /**
   * The date of the last time a synchronization was performed. In other words, tracks how up-to-date the Account data is
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
 * @see {@link https://github.com/LedgerHQ/ledger-live-common/blob/master/docs/currency.md#unit|Unit reference} in Ledger Live Common doc for more informations
 */
export type Unit = {
  /**
   * Display name of a given unit (example: satoshi)
   */
  name: string;
  /**
   * String to use when formatting the unit. like 'BTC' or 'USD'
   */
  code: string;
  /**
   * Number of digits after the '.' in context of this unit
   */
  magnitude: number;
};

/**
 * Base currency model
 */
export type BaseCurrency = {
  /**
   * Used for UI
   */
  color: string;
  /**
   * The ticker name in exchanges / countervalue apis (e.g. BTC, ETH, USDT).
   */
  ticker: string;
  /**
   * The unique internal id of the currency
   */
  id: string;
  /**
   * The display name of the currency
   */
  name: string;
  /**
   * Array of available [[Unit | units]] for the currency
   */
  units: Unit[];
};

/**
 * Crypto currency model
 */
export type CryptoCurrency = BaseCurrency & {
  /**
   * Represents the currency type.
   * @see {@link https://github.com/LedgerHQ/ledgerjs/blob/master/packages/cryptoassets/src/types.ts|cryptoassets types} in ledgerjs for more infos
   */
  type: CurrencyType.CryptoCurrency;
  /**
   * The [[FAMILIES | family]] of the crypto currency
   */
  family: string;
};

/**
 * Token currency model
 */
export type TokenCurrency = BaseCurrency & {
  /**
   * Represents the currency type.
   * @see {@link https://github.com/LedgerHQ/ledgerjs/blob/master/packages/cryptoassets/src/types.ts|cryptoassets types} in ledgerjs for more infos
   */
  type: CurrencyType.TokenCurrency;
  /**
   * Parent crypto currency
   */
  parent: string;
};

/**
 * ERC20 token currency model
 */
export type ERC20TokenCurrency = TokenCurrency & {
  /**
   * Token Standard
   */
  standard: TokenStandard.ERC20;
  /**
   * EVM contract address
   */
  contract: string;
};

export type Currency = CryptoCurrency | ERC20TokenCurrency;
