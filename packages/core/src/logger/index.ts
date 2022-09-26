/* istanbul ignore file */
/* eslint-disable import/prefer-default-export, no-console */
export class Logger {
  private prefix = "";

  constructor(namespace?: string) {
    this.prefix = namespace ? `[${namespace}] ` : "";
  }

  log(message: string, ...args: unknown[]): void {
    console.log(
      `%c${this.prefix}${message}`,
      "background: #6490f1; color: #fff",
      ...args
    );
  }

  warn(message: string, ...args: unknown[]): void {
    console.warn(
      `%c${this.prefix}${message}`,
      "background: #6490f1; color: #f80",
      ...args
    );
  }

  debug(message: string, ...args: unknown[]): void {
    console.debug(
      `%c${this.prefix}${message}`,
      "background: #6490f1; color: #777",
      ...args
    );
  }

  error(message: string, ...args: unknown[]): void {
    console.error(
      `%c${this.prefix}${message}`,
      "background: #6490f1; color: #f00",
      ...args
    );
  }
}
