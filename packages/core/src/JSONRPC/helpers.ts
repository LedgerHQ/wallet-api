import { RpcError } from "./RPCError";
import {
  RpcErrorCode,
  RpcRequest,
  RpcResponse,
  RpcResponseError,
} from "./types";
import { isRpcCall } from "./validation";

export function parseRPCCall(data: string): RpcRequest | RpcResponse {
  try {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const call = JSON.parse(data);
    if (!isRpcCall(call)) {
      throw new RpcError({
        code: RpcErrorCode.INVALID_REQUEST,
        message: "invalid request",
      });
    }

    return call;
  } catch (error) {
    if (error instanceof SyntaxError) {
      throw new RpcError({
        code: RpcErrorCode.PARSE_ERROR,
        message: "parse error",
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
  params: CreateRpcRequestParams<T>
): RpcRequest<string, T> {
  return {
    jsonrpc: "2.0",
    ...params,
  };
}

type CreateRpcResponseParams<T, E> = {
  id: string | number | null;
  result?: T;
  error?: RpcResponseError<E>;
};
export function createRpcResponse<T, E>(
  params: CreateRpcResponseParams<T, E>
): RpcResponse<T, E> {
  return {
    jsonrpc: "2.0",
    ...params,
  };
}
