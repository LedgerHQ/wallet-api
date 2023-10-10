import { CustomRequestHandler } from "@ledgerhq/wallet-api-core";
import type { RPCHandler } from "../types";

export const customWrapper: <P, R>(
  handler: CustomRequestHandler<P | undefined, R>,
) => RPCHandler<R, P> = (handler) => (req) => {
  return handler(req.params);
};
