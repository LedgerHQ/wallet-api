import BigNumber from "bignumber.js";

import type { RawAccount, RawSignedTransaction } from "./rawTypes";
import type { Account, SignedTransaction } from "./types";

export function serializeSignedTransaction({
  operation,
  signature,
  expirationDate,
  signatureRaw,
}: SignedTransaction): RawSignedTransaction {
  return {
    operation: operation,
    signature: signature,
    expirationDate: expirationDate ? expirationDate.toString() : null,
    signatureRaw: signatureRaw,
  };
}

export function deserializeAccount(rawAccount: RawAccount): Account {
  return {
    id: rawAccount.id,
    name: rawAccount.name,
    address: rawAccount.address,
    currency: rawAccount.currency,
    balance: new BigNumber(rawAccount.balance),
    spendableBalance: new BigNumber(rawAccount.spendableBalance),
    blockHeight: rawAccount.blockHeight,
    lastSyncDate: new Date(rawAccount.lastSyncDate),
  };
}
