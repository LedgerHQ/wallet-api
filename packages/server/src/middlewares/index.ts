import type { JSONRPCServerMiddleware } from "json-rpc-2.0";
import type { ServerParams } from "..";
import type { RPCMiddleware } from "../types";

export const logMiddleware: RPCMiddleware = (request, context) => {
  serverParams?.logger.log(`Received ${JSON.stringify(request)}`);
  return next(request, serverParams).then((response) => {
    serverParams?.logger.log(`Responding ${JSON.stringify(response)}`);
    return response;
  });
};

export const permissionMiddleware: JSONRPCServerMiddleware<
  ServerParams
> = async (next, request, serverParams) => {
  // TODO
  serverParams?.logger.error("To be implemented");
  return next(request, serverParams);
};
