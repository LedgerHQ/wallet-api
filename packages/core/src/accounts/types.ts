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
};

/**
 * The raw representation of the [[Account]] type
 *
 * @see [[Account]] for information regarding individual fields. Each field type is the serialized version of the corresponding [[Account]] type
 */
export type RawAccount = z.infer<typeof schemaRawAccount>;
