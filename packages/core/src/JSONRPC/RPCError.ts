import type { RpcErrorCode, RpcResponseError } from "./types";

export class RpcError<TError = unknown> extends Error {
  private readonly err: RpcResponseError<TError>;

  constructor(err: RpcResponseError<TError>) {
    super(err.message);
    this.err = err;
  }

  /**
   * Retrieve error code
   * @returns error code
   */
  public getCode(): RpcErrorCode | number {
    return this.err.code;
  }

  /**
   * Retrieve underlying data info
   * @returns data info
   */
  public getData(): TError | undefined {
    return this.err.data;
  }
}
