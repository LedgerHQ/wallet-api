import { z } from "zod";
import { RpcError } from "./RPCError";
import {
  RpcErrorCode,
  RpcRequest,
  RpcResponse,
  RpcResponseError,
} from "./types";
import { schemaRPCCall } from "./validation";

export function parseRPCCall(data: string): RpcRequest | RpcResponse {
  try {
    const parsedData = JSON.parse(data) as unknown;

    const rpcCall = schemaRPCCall.parse(parsedData);
    return rpcCall;
  } catch (error) {
    if (error instanceof SyntaxError) {
      throw new RpcError({
        code: RpcErrorCode.PARSE_ERROR,
        message: "parse error",
      });
    }
    if (error instanceof z.ZodError) {
      throw new RpcError({
        code: RpcErrorCode.INVALID_REQUEST,
        message: "invalid request",
      });
    }
    throw error;
  }
}

type CreateRpcRequestParams<T> = {
  id?: string | number | null;
  method: string;
  params?: T;
};
export function createRpcRequest<T>(
  params: CreateRpcRequestParams<T>,
): RpcRequest<string, T> {
  return {
    jsonrpc: "2.0",
    ...params,
  };
}

type CreateRpcResponseParams<T, E> =
  | {
      id: string | number | null;
      result?: T;
    }
  | {
      id: string | number | null;
      error: RpcResponseError<E>;
    };
export function createRpcResponse<T, E>(
  params: CreateRpcResponseParams<T, E>,
): RpcResponse<T, E> {
  return {
    jsonrpc: "2.0",
    ...params,
  };
}
