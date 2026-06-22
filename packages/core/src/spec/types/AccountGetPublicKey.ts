import { z } from "zod";

const schemaAccountGetPublicKeyParams = z.object({
  accountId: z.string(),
  derivationPath: z.string().optional(),
});

const schemaAccountGetPublicKeyResults = z.object({
  publicKey: z.string(),
});

export const schemaAccountGetPublicKey = {
  params: schemaAccountGetPublicKeyParams,
  result: schemaAccountGetPublicKeyResults,
};

export type AccountGetPublicKey = {
  params: z.infer<typeof schemaAccountGetPublicKeyParams>;
  result: z.infer<typeof schemaAccountGetPublicKeyResults>;
};

export type AccountGetPublicKeyHandler = (
  params: AccountGetPublicKey["params"],
) => AccountGetPublicKey["result"];
