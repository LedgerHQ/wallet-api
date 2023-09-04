import { z } from "zod";

const schemaWalletUserIdParams = z.object({});

const schemaWalletUserIdResults = z.object({
  userId: z.string(),
});

export const schemaWalletUserId = {
  params: schemaWalletUserIdParams,
  result: schemaWalletUserIdResults,
};

export type WalletUserId = {
  params: z.infer<typeof schemaWalletUserIdParams>;
  result: z.infer<typeof schemaWalletUserIdResults>;
};

export type WalletUserIdHandler = (
  params: WalletUserId["params"],
) => WalletUserId["result"];
