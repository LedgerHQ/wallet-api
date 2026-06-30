import type BigNumber from "bignumber.js";
import type { z } from "zod";
import type { schemaRawAccount } from "./validation";

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
  blockHeight: number | undefined;
  /**
   * The date of the last time a synchronization was performed. In other words, tracks how up-to-date the Account data is
   */
  lastSyncDate: Date;

  parentAccountId?: string;

  /** @deprecated Use the `account.getPublicKey` method instead. */
  publicKey?: string;

  /**
   * Readiness of the account for outgoing operations (send, swap, etc.).
   *
   * When omitted, the account is assumed to be ready. This preserves the
   * behavior for currencies that have no activation concept.
   *
   * @see [[AccountReadiness]]
   */
  readiness?: AccountReadiness;
};

/**
 * Describes whether an [[Account]] is ready to perform outgoing operations
 * (send, swap, etc.).
 *
 * Some blockchains require a one-time, on-chain activation before an account
 * can transact normally — e.g. Tezos public-key revelation, or Sei address
 * association. Until that happens, outgoing operations may be blocked, carry an
 * extra fee, or be rejected by third-party providers.
 */
export type AccountReadiness = {
  /**
   * Whether the account can currently perform outgoing operations.
   */
  ready: boolean;
  /**
   * Machine-readable reason explaining why the account is not ready, so that a
   * live-app can guide the user (e.g. by showing an activation call-to-action).
   *
   * This is intentionally an open string to remain chain-agnostic: new cases
   * can be introduced without a breaking schema change. Prefer one of the
   * documented values in [[AccountReadinessReason]] when applicable.
   */
  reason?: AccountReadinessReason;
};

/**
 * Documented starter set of values for [[AccountReadiness.reason]].
 *
 * This is not an exhaustive enum: [[AccountReadiness.reason]] accepts any
 * string. These constants exist to give producers and consumers a shared
 * vocabulary for the common cases and to enable editor autocompletion.
 */
export const AccountReadinessReason = {
  /**
   * The account requires a one-time, on-chain activation before it can perform
   * outgoing operations (e.g. Tezos key revelation, Sei address association).
   */
  ActivationRequired: "activationRequired",
} as const;

/**
 * The reason why an account is not ready. One of the documented values in
 * [[AccountReadinessReason]], or any other string to remain extensible.
 */
export type AccountReadinessReason =
  | (typeof AccountReadinessReason)[keyof typeof AccountReadinessReason]
  // Allow arbitrary strings while keeping autocompletion on the known values.
  | (string & {});

/**
 * The raw representation of the [[Account]] type
 *
 * @see [[Account]] for information regarding individual fields. Each field type is the serialized version of the corresponding [[Account]] type
 */
export type RawAccount = z.infer<typeof schemaRawAccount>;
