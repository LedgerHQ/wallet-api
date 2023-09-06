import {
  ServerError,
  StorageGet,
  StorageSet,
  createNotImplementedByWallet,
  createUnauthorizedStore,
  schemaStorageGet,
  schemaStorageSet,
} from "@ledgerhq/wallet-api-core";
import type { RPCHandler } from "../types";

export const set: RPCHandler<StorageSet["result"]> = async (
  req,
  context,
  handlers,
) => {
  const walletHandler = handlers["storage.set"];

  if (!walletHandler) {
    throw new ServerError(createNotImplementedByWallet("storage.set"));
  }

  const safeParams = schemaStorageSet.params.parse(req.params);

  const { key, value, storeId: optionalStoreId } = safeParams;

  const storeId = optionalStoreId ?? context.config.appId;

  // to improve with a multi store permission system in the future
  if (storeId !== context.config.appId) {
    throw new ServerError(createUnauthorizedStore(storeId));
  }

  return walletHandler({ key, value, storeId });
};

export const get: RPCHandler<StorageGet["result"]> = async (
  req,
  context,
  handlers,
) => {
  const walletHandler = handlers["storage.get"];

  if (!walletHandler) {
    throw new ServerError(createNotImplementedByWallet("storage.get"));
  }

  const safeParams = schemaStorageGet.params.parse(req.params);

  const { key, storeId: optionalStoreId } = safeParams;

  const storeId = optionalStoreId ?? context.config.appId;

  // to improve with a multi store permission system in the future
  if (storeId !== context.config.appId) {
    throw new ServerError(createUnauthorizedStore(storeId));
  }

  return {
    value: await walletHandler({ key, storeId }),
  };
};
