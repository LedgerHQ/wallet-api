import { z } from "zod";

const schemaBitcoinGetPublicKeyParams = z.object({
  accountId: z.string(),
  derivationPath: z.string().optional(),
});

const schemaBitcoinGetPublicKeyResults = z.object({
  publicKey: z.string(),
});

export const schemaBitcoinGetPublicKey = {
  params: schemaBitcoinGetPublicKeyParams,
  result: schemaBitcoinGetPublicKeyResults,
};

export type BitcoinGetPublicKey = {
  params: z.infer<typeof schemaBitcoinGetPublicKeyParams>;
  result: z.infer<typeof schemaBitcoinGetPublicKeyResults>;
};

export type BitcoinGetPublicKeyHandler = (
  params: BitcoinGetPublicKey["params"],
) => BitcoinGetPublicKey["result"];
