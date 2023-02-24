// TODO: reimplement all methods

import {
  AppHandlers,
  Logger,
  RpcError,
  RpcErrorCode,
  RpcNode,
  RpcRequest,
  Transport,
  WalletHandlers,
} from "@ledgerhq/wallet-api-core";
import { AccountModule } from "./modules/Account";
import { BitcoinModule } from "./modules/Bitcoin";
import { CurrencyModule } from "./modules/Currency";
import { DeviceModule } from "./modules/Device";
import { MessageModule } from "./modules/Message";
import { StorageModule } from "./modules/Storage";
import { TransactionModule } from "./modules/Transaction";
import { WalletModule } from "./modules/Wallet";

const defaultLogger = new Logger("LL-PlatformSDK");

export type RPCHandler<Result> = (request: RpcRequest) => Promise<Result>;

type ReturnTypeOfMethod<T> = T extends (...args: Array<unknown>) => unknown
  ? ReturnType<T>
  : unknown;
type ReturnTypeOfMethodIfExists<T, S> = S extends keyof T
  ? ReturnTypeOfMethod<T[S]>
  : unknown;

export type TransformHandler<T> = {
  [K in keyof T]: RPCHandler<ReturnTypeOfMethodIfExists<T, K>>;
};

/**
 * WalletAPI Client which rely on WindowMessage communication
 */
export class WalletAPIClient extends RpcNode<
  Partial<TransformHandler<AppHandlers>>,
  WalletHandlers
> {
  /**
   * Instance of the Account module
   */
  public account: AccountModule;

  /**
   * Instance of the Bitcoin module
   */
  public bitcoin: BitcoinModule;

  /**
   * Instance of the Currency module
   */
  public currency: CurrencyModule;

  /**
   * Instance of the Device module
   */
  public device: DeviceModule;

  /**
   * Instance of the Message module
   */
  public message: MessageModule;

  /**
   * Instance of the Storage module
   */
  public storage: StorageModule;

  /**
   * Instance of the Transaction module
   */
  public transaction: TransactionModule;

  /**
   * Instance of the Wallet module
   */
  public wallet: WalletModule;

  private logger: Logger;

  public appHandlers: Partial<TransformHandler<AppHandlers>>;

  constructor(transport: Transport, logger: Logger = defaultLogger) {
    const appHandlers: Partial<TransformHandler<AppHandlers>> = {};
    super(transport, appHandlers);
    this.appHandlers = appHandlers;
    this.logger = logger;
    this.account = new AccountModule(this);
    this.bitcoin = new BitcoinModule(this);
    this.currency = new CurrencyModule(this);
    this.device = new DeviceModule(this);
    this.message = new MessageModule(this);
    this.storage = new StorageModule(this);
    this.transaction = new TransactionModule(this);
    this.wallet = new WalletModule(this);
  }

  protected async onRequest(
    request: RpcRequest<string, unknown>
  ): Promise<unknown> {
    this.logger.log(request.method);
    const methodId = request.method as keyof typeof this.requestHandlers;

    const handler = this.requestHandlers[methodId];
    if (!handler) {
      throw new RpcError({
        code: RpcErrorCode.METHOD_NOT_FOUND,
        message: "method not found",
      });
    }

    return handler(request);
  }
}
