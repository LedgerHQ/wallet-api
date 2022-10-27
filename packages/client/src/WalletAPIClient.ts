// TODO: reimplement all methods

import {
  Logger,
  RpcRequest,
  Transport,
  RpcError,
  RpcErrorCode,
  RpcNode,
  RFC,
} from "@ledgerhq/wallet-api-core";

const defaultLogger = new Logger("LL-PlatformSDK");

export type RPCHandler<Result> = (request: RpcRequest) => Promise<Result>;

// temporary
const requestHandlers = {
  [RFC.MethodId.ACCOUNT_LIST]: async (request: RpcRequest) => {
    console.log(request);
  },
};

export class WalletAPIClient extends RpcNode<typeof requestHandlers> {
  private logger: Logger;

  constructor(transport: Transport, logger: Logger = defaultLogger) {
    super(transport, requestHandlers);
    this.logger = logger;
  }

  protected handleRpcRequest(request: RpcRequest) {
    this.logger.log(request.method);
    const handler =
      this.requestHandlers[request.method as keyof typeof this.requestHandlers];

    if (!handler) {
      throw new RpcError({
        code: RpcErrorCode.METHOD_NOT_FOUND,
        message: "method not found",
      });
    }

    return handler(request);
  }
}
