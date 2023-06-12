import type {
  Account,
  BitcoinGetXPub,
  Currency,
  DeviceClose,
  DeviceExchange,
  DeviceOpen,
  DeviceSelect,
  DeviceTransport,
  ExchangeStart,
  Promisable,
  RpcRequest,
  Transaction,
  TransactionSign,
  TransactionSignAndBroadcast,
} from "@ledgerhq/wallet-api-core";
import type { BehaviorSubject, Observable } from "rxjs";

export type WalletContext = {
  currencies$: Observable<Currency[]>;
  accounts$: Observable<Account[]>;
  config: ServerConfig;
};

export type RPCHandler<TResult> = (
  request: RpcRequest<string, unknown>,
  context: WalletContext,
  handlers: Partial<WalletHandlers>
) => Promise<TResult>;

type ExchangeBaseParams = {
  provider: string;
  fromAccount: Account;
  transaction: Transaction;
  binaryPayload: Buffer;
  signature: Buffer;
  feeStrategy: string;
};

type ExchangeFundParams = {
  exchangeType: "FUND";
} & ExchangeBaseParams;

type ExchangeSellParams = {
  exchangeType: "SELL";
} & ExchangeBaseParams;

type ExchangeSwapParams = {
  exchangeType: "SWAP";
  toAccount: Account;
} & ExchangeBaseParams;

type ExchangeParams =
  | ExchangeFundParams
  | ExchangeSellParams
  | ExchangeSwapParams;

export interface WalletHandlers {
  "account.request": (params: {
    currencies$: Observable<Currency[]>;
    accounts$: Observable<Account[]>;
  }) => Promisable<Account>;
  "account.receive": (params: { account: Account }) => Promisable<string>;
  "message.sign": (params: {
    account: Account;
    message: Buffer;
    meta: Record<string, unknown> | undefined;
  }) => Promisable<Buffer>;
  "transaction.sign": (params: {
    account: Account;
    transaction: Transaction;
    options?: TransactionSign["params"]["options"];
    meta: Record<string, unknown> | undefined;
  }) => Promisable<Buffer>;
  "transaction.signAndBroadcast": (params: {
    account: Account;
    transaction: Transaction;
    options?: TransactionSignAndBroadcast["params"]["options"];
    meta: Record<string, unknown> | undefined;
  }) => Promisable<string>;
  "device.close": (params: DeviceClose["params"]) => Promisable<string>;
  "device.exchange": (params: DeviceExchange["params"]) => Promisable<string>;
  "device.open": (params: DeviceOpen["params"]) => Promisable<string>;
  "device.select": (params: DeviceSelect["params"]) => Promisable<string>;
  "device.transport": (params: DeviceTransport["params"]) => Promisable<string>;
  "storage.set": (params: {
    key: string;
    value: string;
    storeId: string;
  }) => Promisable<void>;
  "storage.get": (params: {
    key: string;
    storeId: string;
  }) => Promisable<string | undefined>;
  "bitcoin.getXPub": (params: BitcoinGetXPub["params"]) => Promisable<string>;
  "exchange.start": (params: ExchangeStart["params"]) => Promisable<string>;
  "exchange.complete": (params: ExchangeParams) => Promisable<string>;
}

type ReturnTypeOfMethod<T> = T extends (...args: Array<unknown>) => unknown
  ? ReturnType<T>
  : unknown;
type ReturnTypeOfMethodIfExists<T, S> = S extends keyof T
  ? ReturnTypeOfMethod<T[S]>
  : unknown;

export type TransformHandler<T> = {
  [K in keyof T]: RPCHandler<ReturnTypeOfMethodIfExists<T, K>>;
};

export type ClientParams = {
  id: string;
  permissions: {
    currencies: string[];
    methods: string[];
  };
};

export type ClientContext = {
  currencies$: BehaviorSubject<Currency[]>;
  accounts$: BehaviorSubject<Account[]>;
} & ClientParams;

export type WalletInfo = {
  name: string;
  version: string;
};

export type ServerConfig = {
  userId: string;
  tracking: boolean;
  wallet: WalletInfo;
  appId: string;
};
