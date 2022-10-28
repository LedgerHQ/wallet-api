import {
  maybe,
  objectOf,
  primitives,
  anyOf,
  enumOf,
} from "@altostra/type-validations";
import type { MethodId } from "../types/RFC";
import type { RpcRequest, RpcResponse, RpcResponseError } from "./types";

const isRPCId = anyOf(primitives.number, primitives.string, primitives.null);

export const isRpcMethod = enumOf<MethodId>(
  "account.list",
  "account.receive",
  "account.request",
  "currency.list",
  "message.sign",
  "transaction.sign",
  "transaction.signAndBroadcast"
);

export const isRpcRequest = objectOf<RpcRequest>({
  jsonrpc: primitives.string,
  method: primitives.string,
  params: primitives.any,
  id: maybe(isRPCId),
});

export const isRpcResponseError = objectOf<RpcResponseError>({
  code: primitives.number,
  message: primitives.string,
  data: maybe(primitives.any),
});

export const isRpcResponse = objectOf<RpcResponse>({
  jsonrpc: primitives.string,
  result: maybe(primitives.any),
  error: maybe(isRpcResponseError),
  id: isRPCId,
});

export const isRpcCall = anyOf(isRpcRequest, isRpcResponse);
