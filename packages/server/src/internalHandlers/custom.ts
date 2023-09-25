import {
  CustomRequest,
  Promisable,
  schemaCustomRequest,
} from "@ledgerhq/wallet-api-core";
import type { RPCHandler } from "../types";

export const customWrapper: (
  handler: (
    params: CustomRequest["params"],
  ) => Promisable<CustomRequest["result"]>,
) => RPCHandler<CustomRequest["result"]> = (handler) => async (req) => {
  const safeParams = schemaCustomRequest.params.parse(req.params);

  return handler(safeParams);
};
