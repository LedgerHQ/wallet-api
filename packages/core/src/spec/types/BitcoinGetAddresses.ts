import { z } from "zod";

const schemaBitcoinGetAddressesParams = z.object({
  accountId: z.string(),
  intentions: z.array(z.enum(["payment", "ordinal"])).optional(),
});

const schemaBitcoinGetAddressesResultItem = z.object({
  address: z.string(),
  publicKey: z.string().optional(),
  path: z.string().optional(),
  intention: z.string().optional(),
});

const schemaBitcoinGetAddressesResults = z.object({
  addresses: z.array(schemaBitcoinGetAddressesResultItem),
});

export const schemaBitcoinGetAddresses = {
  params: schemaBitcoinGetAddressesParams,
  result: schemaBitcoinGetAddressesResults,
};

export type BitcoinGetAddresses = {
  params: z.infer<typeof schemaBitcoinGetAddressesParams>;
  result: z.infer<typeof schemaBitcoinGetAddressesResults>;
};

export type BitcoinGetAddressesHandler = (
  params: BitcoinGetAddresses["params"],
) => BitcoinGetAddresses["result"];
