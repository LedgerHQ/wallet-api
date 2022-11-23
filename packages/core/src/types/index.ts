export type Promisable<T> = T | PromiseLike<T>;

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

export type Permission = {
  currencyIds: string[];
  methodIds: string[];
};
