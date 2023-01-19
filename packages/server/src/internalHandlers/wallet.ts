import type {
  MethodId,
  WalletCapabilities,
  WalletUserId,
  WalletInfo,
} from "@ledgerhq/wallet-api-core";
import type { RPCHandler } from "../types";

export const capabilities: RPCHandler<WalletCapabilities["result"]> = async (
  _req,
  _context,
  handlers
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

  return {
    methodIds,
  };
};

export const userId: RPCHandler<WalletUserId["result"]> = async (
  _req,
  context
) => {
  const { userId } = context.config;

  return {
    userId,
  };
};

export const info: RPCHandler<WalletInfo["result"]> = async (_req, context) => {
  const { wallet, tracking } = context.config;

  return {
    tracking,
    wallet,
  };
};
