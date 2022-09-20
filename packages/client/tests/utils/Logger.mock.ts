/* eslint-disable class-methods-use-this */
import Logger from "@ledgerhq/wallet-api-logger";

class LoggerMock extends Logger {
  override log() {}

  override warn() {}

  override debug() {}

  override error() {}
}

export default new LoggerMock();
