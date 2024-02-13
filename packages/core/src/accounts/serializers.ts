import BigNumber from "bignumber.js";
import type { Account, RawAccount } from "./types";

/**
 * Serialize an [[Account]] object in order to send it over JSON-RPC protocol
 * to the Ledger Live platform
 * @param account - The account object to serialize
 *
 * @returns The raw representation of the provided account object
 */

export function serializeAccount({
  id,
  name,
  address,
  currency,
  balance,
  spendableBalance,
  blockHeight,
  lastSyncDate,
  parentAccountId,
}: Account): RawAccount {
  return {
    id,
    name,
    address,
    currency,
    balance: balance.toString(),
    spendableBalance: spendableBalance.toString(),
    blockHeight,
    lastSyncDate: lastSyncDate.toISOString(),
    parentAccountId,
  };
}

/**
 * Deserialize a [[RawAccount]] object after it has been received over JSON-RPC
 * protocol from the Ledger Live platform
 * @param rawAccount - The raw account representation to deserialize
 *
 * @returns The object account of the provided raw account representation
 */
export function deserializeAccount({
  id,
  name,
  address,
  currency,
  balance,
  spendableBalance,
  blockHeight,
  lastSyncDate,
  parentAccountId,
}: RawAccount): Account {
  return {
    id,
    name,
    address,
    currency,
    balance: new BigNumber(balance),
    spendableBalance: new BigNumber(spendableBalance),
    blockHeight,
    lastSyncDate: new Date(lastSyncDate),
    parentAccountId,
  };
}
