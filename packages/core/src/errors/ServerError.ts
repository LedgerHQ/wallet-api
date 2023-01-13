import type { ServerErrorData } from "./types";

export class ServerError extends Error {
  private readonly errorData: ServerErrorData;

  constructor(errorData: ServerErrorData) {
    super(errorData.message);
    this.errorData = errorData;
  }

  /**
   * Retrieve error code
   * @returns error code
   */
  public getCode(): ServerErrorData["code"] {
    return this.errorData.code;
  }

  /**
   * Retrieve underlying data info
   * @returns data info
   */
  public getData(): ServerErrorData {
    return this.errorData;
  }
}
