import {
  StorageGet,
  StorageSet,
  RpcError,
  schemaStorageGet,
  schemaStorageSet,
} from "@ledgerhq/wallet-api-core";
import { NOT_IMPLEMENTED_BY_WALLET } from "../errors";
import type { RPCHandler } from "../types";

export const set: RPCHandler<StorageSet["result"]> = async (
  req,
  context,
  handlers
) => {
  const walletHandler = handlers["storage.set"];

  if (!walletHandler) {
    throw new RpcError(NOT_IMPLEMENTED_BY_WALLET);
  }

  const safeParams = schemaStorageSet.params.parse(req.params);

  const { key, value, storeId: optionalStoreId } = safeParams;

  const storeId = optionalStoreId || context.appId;

  return walletHandler({ key, value, storeId });
};

export const get: RPCHandler<StorageGet["result"]> = async (
  req,
  context,
  handlers
) => {
  const walletHandler = handlers["storage.get"];

  if (!walletHandler) {
    throw new RpcError(NOT_IMPLEMENTED_BY_WALLET);
  }

  const safeParams = schemaStorageGet.params.parse(req.params);

  const { key, storeId: optionalStoreId } = safeParams;

  const storeId = optionalStoreId || context.appId;

  return {
    value: await walletHandler({ key, storeId }),
  };
};
