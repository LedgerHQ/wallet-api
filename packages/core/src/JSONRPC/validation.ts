import { z } from "zod";

const schemaRPCId = z.union([z.string(), z.number(), z.null()]);

export const schemaRPCRequest = z.object({
  jsonrpc: z.literal("2.0"),
  method: z.string(),
  params: z.any(),
  id: schemaRPCId.optional(),
});

export const schemaRPCResponseErrorData = z.object({
  code: z.number(),
  message: z.string(),
  data: z.any().optional(),
});

export const schemaRPCResponseSuccess = z.object({
  jsonrpc: z.literal("2.0"),
  id: schemaRPCId,
  result: z.unknown().optional(),
});

export const schemaRPCResponseError = z.object({
  jsonrpc: z.literal("2.0"),
  id: schemaRPCId,
  error: schemaRPCResponseErrorData,
});

export const schemaRPCResponse = z.union([
  schemaRPCResponseSuccess,
  schemaRPCResponseError,
]);

export const schemaRPCCall = z.union([schemaRPCRequest, schemaRPCResponse]);
