import {
  Logger,
  Promisable,
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
import { CustomModule } from "./modules/Custom";
import { DeviceModule } from "./modules/Device";
import { ExchangeModule } from "./modules/Exchange";
import { MessageModule } from "./modules/Message";
import { StorageModule } from "./modules/Storage";
import { TransactionModule } from "./modules/Transaction";
import { WalletModule } from "./modules/Wallet";

export const defaultLogger = new Logger("Wallet-API-Client");

export type RPCHandler<Result> = (request: RpcRequest) => Promisable<Result>;

export type EventHandlers = Record<`event.${string}`, RPCHandler<unknown>>;

// temporary
const requestHandlers = {
  "event.account.updated": (_request: RpcRequest) => {
    // eslint-disable-next-line no-console
    console.log("accounts updated !");
    return Promise.resolve();
  },
};

export type AnyCustomGetter = (
  client: WalletAPIClient,
) => CustomModule | Record<string, CustomModule>;

/**
 * WalletAPI Client which rely on WindowMessage communication
 */
export class WalletAPIClient<
  CustomGetter extends AnyCustomGetter = AnyCustomGetter,
> extends RpcNode<typeof requestHandlers, WalletHandlers> {
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

  /**
   * Instance of the Custom module
   */
  public custom: CustomGetter extends (
    client: WalletAPIClient,
  ) => infer TCustomModule
    ? TCustomModule
    : ReturnType<CustomGetter>;

  private logger: Logger;

  constructor(
    transport: Transport,
    logger = defaultLogger,
    getCustomModule?: CustomGetter,
    eventHandlers: EventHandlers = {},
  ) {
    super(transport, { ...requestHandlers, ...eventHandlers });
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
    this.custom = (
      getCustomModule ? getCustomModule(this) : {}
    ) as typeof this.custom;
  }

  public setEventHandlers(eventHandlers: EventHandlers) {
    this.requestHandlers = { ...requestHandlers, ...eventHandlers };
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
