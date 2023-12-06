import { z } from "zod";

const schemaStorageSetParams = z.object({
  key: z.string(),
  value: z.string(),
  storeId: z.string().optional(),
});

const schemaStorageSetResults = z.void().optional();

export const schemaStorageSet = {
  params: schemaStorageSetParams,
  result: schemaStorageSetResults,
};

export type StorageSet = {
  params: z.infer<typeof schemaStorageSetParams>;
  result: z.infer<typeof schemaStorageSetResults>;
};

export type StorageSetHandler = (
  params: StorageSet["params"],
) => StorageSet["result"];
