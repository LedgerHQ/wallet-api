import Logger from "../../src/logger";

class LoggerMock extends Logger {
  log() {}

  warn() {}

  debug() {}

  error() {}
}

export default new LoggerMock();
