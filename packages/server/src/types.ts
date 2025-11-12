import type {
  Account,
  BitcoinGetAddress,
  BitcoinGetPublicKey,
  BitcoinGetXPub,
  Currency,
  DeviceClose,
  DeviceExchange,
  DeviceOpen,
  DeviceSelect,
  DeviceTransport,
  ExchangeStart,
  MessageSign,
  Promisable,
  RpcRequest,
  Transaction,
  TransactionSign,
  TransactionSignAndBroadcast,
  TransactionSignRaw,
} from "@ledgerhq/wallet-api-core";

export type WalletContext = {
  config: ServerConfig;
};

export type RPCHandler<TResult, TParam = unknown> = (
  request: RpcRequest<string, TParam>,
  context: WalletContext,
  handlers: Partial<WalletHandlers>,
) => Promisable<TResult>;

type ExchangeBaseParams = {
  provider: string;
  fromAccountId: string;
  transaction: Transaction;
  binaryPayload: Buffer;
  signature: Buffer;
  feeStrategy: string;
  tokenCurrency?: string;
};

type ExchangeFundParams = {
  exchangeType: "FUND";
} & ExchangeBaseParams;

type ExchangeSellParams = {
  exchangeType: "SELL";
} & ExchangeBaseParams;

type ExchangeSwapParams = {
  exchangeType: "SWAP";
  toAccountId: string;
  swapId: string;
  rate: number;
} & ExchangeBaseParams;

type ExchangeParams =
  | ExchangeFundParams
  | ExchangeSellParams
  | ExchangeSwapParams;

export type WalletHandlers = {
  "account.request": (params: {
    currencyIds?: string[];
    showAccountFilter?: boolean;
    drawerConfiguration?: {
      assets?: {
        filter?: string;
        leftElement?: string;
        rightElement?: string;
      };
      networks?: {
        leftElement?: string;
        rightElement?: string;
      };
    };
    useCase?: string;
    areCurrenciesFiltered?: boolean;
  }) => Promisable<Account>;
  "account.receive": (params: {
    accountId: string;
    tokenCurrency?: string;
  }) => Promisable<string>;
  "account.list": (params: { currencyIds?: string[] }) => Promisable<Account[]>;
  "currency.list": (params: {
    currencyIds?: string[];
  }) => Promisable<Currency[]>;
  "message.sign": (params: {
    accountId: string;
    message: Buffer;
    options?: MessageSign["params"]["options"];
    meta: Record<string, unknown> | undefined;
    tokenCurrency?: string;
  }) => Promisable<Buffer>;
  "transaction.sign": (params: {
    accountId: string;
    transaction: Transaction;
    options?: TransactionSign["params"]["options"];
    meta: Record<string, unknown> | undefined;
    tokenCurrency?: string;
  }) => Promisable<Buffer>;
  "transaction.signRaw": (params: {
    accountId: string;
    transaction: string;
    broadcast?: boolean;
    options?: TransactionSignRaw["params"]["options"];
    meta: Record<string, unknown> | undefined;
  }) => Promisable<{ signedTransactionHex: string; transactionHash?: string }>;
  "transaction.signAndBroadcast": (params: {
    accountId: string;
    transaction: Transaction;
    options?: TransactionSignAndBroadcast["params"]["options"];
    meta: Record<string, unknown> | undefined;
    tokenCurrency?: string;
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
  "bitcoin.getAddress": (
    params: BitcoinGetAddress["params"],
  ) => Promisable<string>;
  "bitcoin.getPublicKey": (
    params: BitcoinGetPublicKey["params"],
  ) => Promisable<string>;
  "bitcoin.getXPub": (params: BitcoinGetXPub["params"]) => Promisable<string>;
  "bitcoin.signPsbt": (params: {
    accountId: string;
    psbt: string;
    broadcast?: boolean;
  }) => Promisable<{ psbtSigned: string; txHash?: string }>;
  "exchange.start": (params: ExchangeStart["params"]) => Promisable<string>;
  "exchange.complete": (params: ExchangeParams) => Promisable<string>;
};

type ReturnTypeOfMethod<T> = T extends (...args: unknown[]) => unknown
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

export type ClientContext = ClientParams;

export type WalletInfo = {
  name: string;
  version: string;
};

export type ServerConfig = {
  userId: string;
  tracking: boolean;
  wallet: WalletInfo;
  appId: string;
  mevProtected?: boolean;
};

export type CustomHandlers = Record<
  `custom.${string}`,
  // Need the any for the CustomHandlers passed to the Client with types
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  RPCHandler<unknown, any>
>;
