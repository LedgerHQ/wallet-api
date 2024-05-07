import { z } from "zod";

/*
    This file define all the "app level" errors, feel free to define new errors
    as we add new features to the Wallet API
*/

export const schemaServerErrorCode = z.enum([
  "NOT_IMPLEMENTED_BY_WALLET",
  "ACCOUNT_NOT_FOUND",
  "CURRENCY_NOT_FOUND",
  "PERMISSION_DENIED",
  "UNKNOWN_ERROR",
  "UNAUTHORIZED_STORE",
]);

export type ServerErrorCode = z.infer<typeof schemaServerErrorCode>;

/*
    NOT_IMPLEMENTED_BY_WALLET
*/

export const schemaNotImplementedByWallet = z.object({
  code: z.literal(schemaServerErrorCode.enum.NOT_IMPLEMENTED_BY_WALLET),
  message: z.string(),
  data: z.object({
    methodId: z.string(),
  }),
});

export type NotImplementedByWallet = z.infer<
  typeof schemaNotImplementedByWallet
>;

/*
    ACCOUNT_NOT_FOUND
*/

export const schemaAccountNotFound = z.object({
  code: z.literal(schemaServerErrorCode.enum.ACCOUNT_NOT_FOUND),
  message: z.string(),
  data: z.object({
    accountId: z.string(),
  }),
});

export type AccountNotFound = z.infer<typeof schemaAccountNotFound>;

/*
    CURRENCY_NOT_FOUND
*/

export const schemaCurrencyNotFound = z.object({
  code: z.literal(schemaServerErrorCode.enum.CURRENCY_NOT_FOUND),
  message: z.string(),
  data: z.object({
    currencyId: z.string(),
  }),
});

export type CurrencyNotFound = z.infer<typeof schemaCurrencyNotFound>;

/*
    PERMISSION_DENIED
*/

export const schemaPermissionDenied = z.object({
  code: z.literal(schemaServerErrorCode.enum.PERMISSION_DENIED),
  message: z.string(),
  data: z.object({
    methodId: z.string(),
  }),
});

export type PermissionDenied = z.infer<typeof schemaPermissionDenied>;

/*
    UNKNOWN_ERROR
*/

export const schemaUnknownErrorData = z.object({
  name: z.string().optional(),
  message: z.string().optional(),
  stack: z.string().optional(),
  cause: z.unknown().optional(),
  code: z.string().optional(),
});

export type UnknownErrorData = z.infer<typeof schemaUnknownErrorData>;

export const schemaUnknownError = z.object({
  code: z.literal(schemaServerErrorCode.enum.UNKNOWN_ERROR),
  message: z.string(),
  data: schemaUnknownErrorData.passthrough(),
});

export type UnknownError = z.infer<typeof schemaUnknownError>;

/*
    UNAUTHORIZED_STORE
*/

export const schemaUnauthorizedStore = z.object({
  code: z.literal(schemaServerErrorCode.enum.UNAUTHORIZED_STORE),
  message: z.string(),
  data: z.object({
    storeId: z.string(),
  }),
});

export type UnauthorizedStore = z.infer<typeof schemaUnauthorizedStore>;

export const schemaServerErrorData = z.discriminatedUnion("code", [
  schemaNotImplementedByWallet,
  schemaAccountNotFound,
  schemaCurrencyNotFound,
  schemaPermissionDenied,
  schemaUnknownError,
  schemaUnauthorizedStore,
]);

export type ServerErrorData = z.infer<typeof schemaServerErrorData>;
