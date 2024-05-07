import type {
  AccountNotFound,
  CurrencyNotFound,
  NotImplementedByWallet,
  PermissionDenied,
  UnauthorizedStore,
  UnknownError,
  UnknownErrorData,
} from "./types";

export function createNotImplementedByWallet(
  methodId: string,
): NotImplementedByWallet {
  return {
    code: "NOT_IMPLEMENTED_BY_WALLET",
    message: "called method is not implemented in the current wallet",
    data: {
      methodId,
    },
  };
}

export function createPermissionDenied(methodId: string): PermissionDenied {
  return {
    code: "PERMISSION_DENIED",
    message: "you don't have the permission to call this method",
    data: {
      methodId,
    },
  };
}

export function createCurrencyNotFound(currencyId: string): CurrencyNotFound {
  return {
    code: "CURRENCY_NOT_FOUND",
    message: "targeted currency is not supported in the current wallet",
    data: {
      currencyId,
    },
  };
}

export function createAccountNotFound(accountId: string): AccountNotFound {
  return {
    code: "ACCOUNT_NOT_FOUND",
    message: "targeted account was not found in the current wallet",
    data: {
      accountId,
    },
  };
}

export function createUnknownError(error: UnknownErrorData): UnknownError {
  return {
    code: "UNKNOWN_ERROR",
    message: "an unhandled error was thrown",
    data: error,
  };
}

export function createUnauthorizedStore(storeId: string): UnauthorizedStore {
  return {
    code: "UNAUTHORIZED_STORE",
    message: "you don't have the permission to call this method",
    data: {
      storeId,
    },
  };
}
