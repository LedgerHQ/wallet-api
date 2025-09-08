import { z } from "zod";

const base64Regex =
  /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}(?:==)?|[A-Za-z0-9+/]{3}=?)?$/;

const schemaBitcoinSignPsbtParams = z.object({
  accountId: z.string(),
  psbt: z.string().regex(base64Regex, "psbt must be valid base64"),
});

const schemaBitcoinSignPsbtResults = z.object({
  signedPsbt: z.string(),
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
