import type {
  MethodId,
  WalletCapabilities,
  WalletUserId,
  WalletInfo,
} from "@ledgerhq/wallet-api-core";
import type { RPCHandler } from "../types";

export const capabilities: RPCHandler<WalletCapabilities["result"]> = (
  _req,
  _context,
  handlers,
) => {
  const walletHandlerIds = Object.keys(handlers) as MethodId[];

  // we add the wallet
  const methodIds: MethodId[] = [
    ...walletHandlerIds,
    "account.list",
    "currency.list",
    "wallet.capabilities",
    "wallet.info",
    "wallet.userId",
  ];

  return Promise.resolve({
    methodIds,
  });
};

export const userId: RPCHandler<WalletUserId["result"]> = (_req, context) =>
  Promise.resolve({
    userId: context.config.userId,
  });

export const info: RPCHandler<WalletInfo["result"]> = (_req, context) => {
  const { wallet, tracking } = context.config;

  return Promise.resolve({
    tracking,
    wallet,
  });
};
