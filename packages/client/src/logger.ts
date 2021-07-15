export default class Logger {
  private prefix = "";

  constructor(namespace?: string) {
    this.prefix = namespace ? `[${namespace}] ` : "";
  }

  log(message: string, ...args: any) {
    console.log(
      `%c${this.prefix}${message}`,
      "background: #6490f1; color: #fff",
      ...args
    );
  }

  warn(message: string, ...args: any) {
    console.warn(
      `%c${this.prefix}${message}`,
      "background: #6490f1; color: #f80",
      ...args
    );
  }

  debug(message: string, ...args: any) {
    console.debug(
      `%c${this.prefix}${message}`,
      "background: #6490f1; color: #777",
      ...args
    );
  }

  error(message: string, ...args: any) {
    console.error(
      `%c${this.prefix}${message}`,
      "background: #6490f1; color: #f00",
      ...args
    );
  }
}
