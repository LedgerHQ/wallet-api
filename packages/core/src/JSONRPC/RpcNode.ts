import { deserializeError, serializeError } from "@ledgerhq/errors";
import { v4 as uuidv4 } from "uuid";
import { z } from "zod";
import {
  ServerError,
  createUnknownError,
  schemaServerErrorData,
} from "../errors";
import type { Transport } from "../transports";
import { RpcError } from "./RPCError";
import { createRpcResponse, parseRPCCall } from "./helpers";
import { RpcErrorCode, RpcRequest, RpcResponse } from "./types";

type Resolver<T> = (response: T) => void;

type ReturnTypeOfMethod<T> = T extends (...args: unknown[]) => unknown
  ? ReturnType<T>
  : unknown;
type ReturnTypeOfMethodIfExists<T, S> = S extends keyof T
  ? ReturnTypeOfMethod<T[S]>
  : unknown;
type MethodParams<T> = T extends (...args: infer P) => unknown ? P[0] : T;
type MethodParamsIfExists<T, S> = S extends keyof T ? MethodParams<T[S]> : S;

export abstract class RpcNode<TSHandlers, TCHandlers> {
  private transport: Transport;

  protected requestHandlers: TSHandlers;

  private ongoingRequests: Record<
    number | string,
    Resolver<
      RpcResponse<
        ReturnTypeOfMethodIfExists<TCHandlers, keyof TCHandlers>,
        unknown
      >
    >
  > = {};

  constructor(transport: Transport, requestHandlers: TSHandlers) {
    this.transport = transport;
    this.requestHandlers = requestHandlers;
    this.transport.onMessage = (message) => {
      void this.handleMessage(message);
    };
  }

  private _request<K extends keyof TCHandlers>(
    request: RpcRequest<K, MethodParamsIfExists<TCHandlers, K>>,
  ): Promise<ReturnTypeOfMethodIfExists<TCHandlers, K> | undefined> {
    return new Promise((resolve, reject) => {
      if (!request.id) {
        reject(new Error("requests need to have an id"));
        return;
      }
      const resolver: Resolver<
        RpcResponse<ReturnTypeOfMethodIfExists<TCHandlers, K>>
      > = (response) => {
        if ("error" in response) {
          if (response.error.code === RpcErrorCode.SERVER_ERROR) {
            const serverErrorData = schemaServerErrorData.parse(
              response.error.data,
            );

            if (serverErrorData.code === "UNKNOWN_ERROR") {
              reject(deserializeError(serverErrorData.data));
              return;
            }

            reject(new ServerError(serverErrorData));
            return;
          }
          reject(new RpcError(response.error));
          return;
        }
        resolve(response.result);
      };
      this.ongoingRequests[request.id] = resolver;

      this.transport.send(JSON.stringify(request));
    });
  }

  private _notify<K extends keyof TCHandlers>(
    request: RpcRequest<K, MethodParamsIfExists<TCHandlers, K>>,
  ): void {
    this.transport.send(JSON.stringify(request));
  }

  public request<K extends keyof TCHandlers>(
    method: K,
    params: MethodParamsIfExists<TCHandlers, K>,
  ): Promise<ReturnTypeOfMethodIfExists<TCHandlers, K> | undefined> {
    const requestId = uuidv4();
    return this._request({
      id: requestId,
      jsonrpc: "2.0",
      method,
      params,
    });
  }

  public notify<K extends keyof TCHandlers>(
    method: K,
    params: MethodParamsIfExists<TCHandlers, K>,
  ): void {
    return this._notify({
      jsonrpc: "2.0",
      method,
      params,
    });
  }

  private async handleRpcRequest(request: RpcRequest) {
    try {
      const result = await this.onRequest(request);

      if (request.id) {
        const response = createRpcResponse({
          id: request.id,
          result,
        });
        this.transport.send(JSON.stringify(response));
      }
    } catch (error) {
      if (error instanceof z.ZodError) {
        throw new RpcError({
          code: RpcErrorCode.INVALID_PARAMS,
          message: error.message,
          data: error.flatten(),
        });
      }
      if (error instanceof ServerError) {
        throw new RpcError({
          code: RpcErrorCode.SERVER_ERROR,
          message: "unexpected server error",
          data: error.getData(),
        });
      }
      if (error instanceof RpcError) {
        throw error;
      }

      let serializedError = serializeError(
        error as Parameters<typeof serializeError>[0],
      );
      serializedError =
        typeof serializedError === "string" || !serializedError
          ? { message: serializedError }
          : serializedError;
      throw new RpcError({
        code: RpcErrorCode.SERVER_ERROR,
        message: "unexpected server error",
        data: createUnknownError(serializedError),
      });
    }
  }

  private async handleMessage(message: string) {
    let isResponse = false;
    let callId: string | number | null | undefined;

    try {
      const rpcCall = parseRPCCall(message);
      callId = rpcCall.id;

      if ("method" in rpcCall) {
        // message is a request
        await this.handleRpcRequest(rpcCall);
      } else {
        // message is a response
        isResponse = true;
        this.handleRpcResponse(
          rpcCall as RpcResponse<
            ReturnTypeOfMethodIfExists<TCHandlers, keyof TCHandlers>,
            unknown
          >,
        );
      }
    } catch (error) {
      if (isResponse) {
        throw error;
      }
      if (error instanceof RpcError) {
        const errorResponse = createRpcResponse({
          id: callId ?? null,
          error: {
            code: error.getCode(),
            message: error.message,
            // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
            data: error.getData(),
          },
        });
        this.transport.send(JSON.stringify(errorResponse));
        return;
      }
      // TODO handle no RpcError (that should not happen btw)
      throw error;
    }
  }

  protected abstract onRequest(request: RpcRequest): Promise<unknown>;

  private handleRpcResponse(
    response: RpcResponse<
      ReturnTypeOfMethodIfExists<TCHandlers, keyof TCHandlers>,
      unknown
    >,
  ) {
    if (!response.id) {
      return;
    }
    const resolver = this.ongoingRequests[response.id];

    if (!resolver) {
      throw new Error(`no ongoingRequest ${response.id}`);
    }

    resolver(response);
  }
}
