import { RpcErrorCode, RpcResponseError } from "@ledgerhq/wallet-api-core";

export const NOT_IMPLEMENTED_BY_WALLET: RpcResponseError = {
  code: RpcErrorCode.SERVER_ERROR,
  message: "This method is not implemented by the wallet",
};

export const ACCOUNT_NOT_FOUND: RpcResponseError = {
  code: RpcErrorCode.SERVER_ERROR,
  message: "The specified account was not found in this wallet",
};

export const CURRENCY_NOT_FOUND: RpcResponseError = {
  code: RpcErrorCode.SERVER_ERROR,
  message: "The specified currency was not found in this wallet",
};

export const PERMISSION_DENIED: RpcResponseError = {
  code: RpcErrorCode.SERVER_ERROR,
  message: "This app doesn't have access to this method",
};
