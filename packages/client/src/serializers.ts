import type { RawSignedTransaction } from "./rawTypes";
import type { SignedTransaction } from "./types";

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
