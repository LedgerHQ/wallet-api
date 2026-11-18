import BigNumber from "bignumber.js";
import type { Account, AccountBalance, RawAccount } from "./types";

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
  publicKey,
  readiness,
  balances,
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
    publicKey,
    readiness,
    balances: balances?.map(serializeAccountBalance),
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
  publicKey,
  readiness,
  balances,
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
    publicKey,
    readiness,
    balances: balances?.map(deserializeAccountBalance),
  };
}

function serializeAccountBalance({
  value,
  locked,
  pool,
  private: isPrivate,
}: AccountBalance): NonNullable<RawAccount["balances"]>[number] {
  return {
    // `toFixed` never switches to exponent notation, which the schema rejects.
    value: value.toFixed(),
    ...(locked !== undefined && { locked: locked.toFixed() }),
    ...(pool !== undefined && { pool }),
    ...(isPrivate !== undefined && { private: isPrivate }),
  };
}

function deserializeAccountBalance({
  value,
  locked,
  pool,
  private: isPrivate,
}: NonNullable<RawAccount["balances"]>[number]): AccountBalance {
  return {
    value: new BigNumber(value),
    ...(locked !== undefined && { locked: new BigNumber(locked) }),
    ...(pool !== undefined && { pool }),
    ...(isPrivate !== undefined && { private: isPrivate }),
  };
}
