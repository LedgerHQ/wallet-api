import {
  maybe,
  objectOf,
  primitives,
  anyOf,
  enumOf,
} from "@altostra/type-validations";
import { MethodId } from "../types/RFC";
import type { RpcRequest, RpcResponse, RpcResponseError } from "./types";

const isRPCId = anyOf(primitives.number, primitives.string, primitives.null);

export const isRpcMethod = enumOf<MethodId>(
  MethodId.ACCOUNT_LIST,
  MethodId.ACCOUNT_RECEIVE,
  MethodId.ACCOUNT_REQUEST,
  MethodId.CURRENCY_LIST,
  MethodId.EXCHANGE_COMPLETE,
  MethodId.EXCHANGE_START,
  MethodId.MESSAGE_SIGN,
  MethodId.TRANSACTION_SIGN,
  MethodId.TRANSACTION_SIGN_AND_BROADCAST
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
