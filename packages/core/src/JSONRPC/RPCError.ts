import type { RpcErrorCode, RpcResponseError } from "./types";

export class RpcError<TError = unknown> extends Error {
  constructor(private readonly err: RpcResponseError<TError>) {
    super();
    super.message = err.message;
  }

  public getCode(): RpcErrorCode | number {
    return this.err.code;
  }

  public getData(): TError | undefined {
    return this.err.data;
  }
}
