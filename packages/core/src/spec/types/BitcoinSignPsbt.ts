import { z } from "zod";

const schemaBitcoinSignPsbtParams = z.object({
  accountId: z.string(),
  psbt: z.string(),
  broadcast: z.boolean().optional(),
});

const schemaBitcoinSignPsbtResults = z.object({
  psbtSigned: z.string(),
  txHash: z.string().optional(),
});

export const schemaBitcoinSignPsbt = {
  params: schemaBitcoinSignPsbtParams,
  result: schemaBitcoinSignPsbtResults,
};

export type BitcoinSignPsbt = {
  params: z.infer<typeof schemaBitcoinSignPsbtParams>;
  result: z.infer<typeof schemaBitcoinSignPsbtResults>;
};

export type BitcoinSignPsbtHandler = (
  params: BitcoinSignPsbt["params"],
) => BitcoinSignPsbt["result"];
