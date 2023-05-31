import {
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
import { ExchangeModule } from "./modules/Exchange";

const defaultLogger = new Logger("LL-PlatformSDK");

export type RPCHandler<Result> = (request: RpcRequest) => Promise<Result>;

// temporary
const requestHandlers = {
  "event.account.updated": (_request: RpcRequest) => {
    // eslint-disable-next-line no-console
    console.log("accounts updated !");
    return Promise.resolve();
  },
};

/**
 * WalletAPI Client which rely on WindowMessage communication
 */
export class WalletAPIClient extends RpcNode<
  typeof requestHandlers,
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

  /**
   * Instance of the Wallet module
   */
  public exchange: ExchangeModule;

  private logger: Logger;

  constructor(transport: Transport, logger: Logger = defaultLogger) {
    super(transport, requestHandlers);
    this.logger = logger;
    this.account = new AccountModule(this);
    this.bitcoin = new BitcoinModule(this);
    this.currency = new CurrencyModule(this);
    this.device = new DeviceModule(this);
    this.message = new MessageModule(this);
    this.storage = new StorageModule(this);
    this.transaction = new TransactionModule(this);
    this.wallet = new WalletModule(this);
    this.exchange = new ExchangeModule(this);
  }

  protected onRequest(request: RpcRequest) {
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
