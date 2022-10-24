import * as RFC from "./RFC";
import * as JSONRPC from "./JSONRPC";

export { JSONRPC, RFC };

export type Promisable<T> = T | PromiseLike<T>;

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
 * The raw representation of a signed transaction returned by the Ledger Live platform
 *
 * @remarks
 * This type is returned by Ledger Live when signing with [[signTransaction]] and is only used as a payload by the [[broadcastSignedTransaction]] function to actually broadcast the transaction to the blockchain
 */
export type RawSignedTransaction = {
  operation: unknown;
  signature: string;
  signatureRaw?: unknown;
  expirationDate: string | null;
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
