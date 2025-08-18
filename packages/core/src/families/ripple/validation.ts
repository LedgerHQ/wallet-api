import { z } from "zod";
import { schemaFamilies, schemaTransactionCommon } from "../common";

// ---- helpers ----
const rippleBase58 = /^[rXT][1-9A-HJ-NP-Za-km-z]{24,58}$/; // classic r..., or X-/T-Address
const hexOf = (n: number) =>
  z.string().regex(new RegExp(`^[0-9A-Fa-f]{${n}}$`), `expected ${n}-char hex`);
const hex = z
  .string()
  .regex(/^[0-9A-Fa-f]*$/)
  .refine((s) => s.length % 2 === 0, "hex must have even length");

const drops = z
  .string()
  .regex(/^\d+$/, "Fee must be a string of drops (integer)");

const UInt32 = z.number().int().min(0);
const AccountID = z.string().regex(rippleBase58, "Invalid XRPL address");

// XRPL Memo shape: [{ Memo: { MemoType?, MemoFormat?, MemoData? } }]
const memoSchema = z.object({
  Memo: z
    .object({
      MemoType: hex.optional(),
      MemoFormat: hex.optional(),
      MemoData: hex.optional(),
    })
    .passthrough(), // allow any extra memo fields
});

// Minimal signer shape (keep loose so mul-sig payloads pass), https://xrpl.org/docs/references/protocol/transactions/types/signerlistset
// NOTE: not using it for now
// const signerSchema = z.object({
//   Signer: z
//     .object({
//       Account: AccountID.optional(),
//       SigningPubKey: hex.optional(),
//       TxnSignature: hex.optional(),
//     })
//     .passthrough(),
// });

// ---- tx_json common fields ----
export const schemaTxJsonCommon = z
  .object({
    // required
    Account: AccountID,
    TransactionType: z.string(),

    // "auto-fillable" ,optional here
    Fee: drops.optional(),
    Sequence: UInt32.optional(),

    // optional common fields
    AccountTxnID: hexOf(64).optional(),
    Delegate: AccountID.optional(),
    Flags: UInt32.optional(),
    LastLedgerSequence: UInt32.optional(),
    Memos: z.array(memoSchema).optional(),
    NetworkID: UInt32.optional(), // NOTE: must be omitted on mainnet; app logic should enforce per-network
    // Signers: z.array(signerSchema).optional(), // Check https://xrpl.org/docs/references/protocol/transactions/types/signerlistset
    Signers: z.array(z.any()).optional(), // Check https://xrpl.org/docs/references/protocol/transactions/types/signerlistset
    SourceTag: UInt32.optional(),
    SigningPubKey: hex.optional(), // auto-added when signing (empty string means multisig); allow hex here
    TicketSequence: UInt32.optional(),
    TxnSignature: hex.optional(), // auto-added when signing
  })
  .passthrough(); // allow type-specific fields (Payment, OfferCreate, TrustSet, etc.)

// ---- full raw ripple tx wrapper ----
export const schemaRawRippleTransaction = schemaTransactionCommon.extend({
  family: z.literal(schemaFamilies.enum.ripple),
  fee: z.string().optional(), // keep for outer "common" wrapper if needed
  tag: z.number(),
  tx_json: schemaTxJsonCommon,
});

// (Optional) Inferred TypeScript type
export type TxJsonCommon = z.infer<typeof schemaTxJsonCommon>;
export type RawRippleTransaction = z.infer<typeof schemaRawRippleTransaction>;
