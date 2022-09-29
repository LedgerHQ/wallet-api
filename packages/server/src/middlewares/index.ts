import type { JSONRPCServerMiddleware } from "json-rpc-2.0";
import type { ServerParams } from "..";

export const logMiddleware: JSONRPCServerMiddleware<ServerParams> = (
  next,
  request,
  serverParams
) => {
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
