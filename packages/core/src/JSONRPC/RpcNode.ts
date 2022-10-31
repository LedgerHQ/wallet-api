import { v4 as uuidv4 } from "uuid";
import type { Transport } from "../transports";
import type { MethodId } from "../types/RFC";
import { createRpcRequest, createRpcResponse, parseRPCCall } from "./helpers";
import { RpcError } from "./RPCError";
import type { RpcRequest, RpcResponse } from "./types";

type Resolver = (response: RpcResponse) => void;

export abstract class RpcNode<T> {
  private transport: Transport;

  protected requestHandlers: T;

  private ongoingRequests: { [requestId: number | string]: Resolver } = {};

  constructor(transport: Transport, requestHandlers: T) {
    this.transport = transport;
    this.requestHandlers = requestHandlers;
    this.transport.onMessage = (message) => {
      void this.handleMessage(message);
    };
  }

  public request<R>(method: MethodId, params?: R): Promise<RpcResponse> {
    const requestId = uuidv4();
    return new Promise((resolve) => {
      const request = createRpcRequest({
        id: requestId,
        method,
        params,
      });
      this.transport.send(JSON.stringify(request));
      const resolver: Resolver = (response) => {
        resolve(response);
      };
      this.ongoingRequests[requestId] = resolver;
    });
  }

  public notify<P>(method: MethodId, params?: P): void {
    const rpcRequest = createRpcRequest<P>({
      method,
      params,
    });

    this.transport.send(JSON.stringify(rpcRequest));
  }

  private async handleMessage(message: string) {
    let requestId: number | string | null | undefined;
    try {
      const rpcCall = parseRPCCall(message);
      requestId = rpcCall.id;

      if ("method" in rpcCall) {
        const result = await this.handleRpcRequest(rpcCall);

        if (requestId) {
          // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call
          const response = createRpcResponse({
            id: requestId,
            result,
          });
          this.transport.send(JSON.stringify(response));
        }
        return;
      }
      this.handleRpcResponse(rpcCall);
    } catch (error) {
      if (error instanceof RpcError) {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call
        const errorResponse = createRpcResponse({
          id: requestId || null,
          error: {
            code: error.getCode(),
            message: error.message,
            // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
            data: error.getData(),
          },
        });

        this.transport.send(JSON.stringify(errorResponse));
      }
      throw error;
    }
  }

  protected abstract handleRpcRequest(request: RpcRequest): Promise<unknown>;

  private handleRpcResponse(response: RpcResponse) {
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
