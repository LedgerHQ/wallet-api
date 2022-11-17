import type { MethodId, WalletCapabilities } from "@ledgerhq/wallet-api-core";
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
  ];

  return {
    methodIds,
  };
};
