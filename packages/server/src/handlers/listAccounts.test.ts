import {
  Account,
  CryptoCurrency,
  Currency,
  CurrencyType,
  ERC20TokenCurrency,
  Logger,
  TokenStandard,
} from "@ledgerhq/wallet-api-core";
import BigNumber from "bignumber.js";
import listAccounts from "./listAccounts";

const BITCOIN_CRYPTO: CryptoCurrency = {
  type: CurrencyType.CryptoCurrency,
  family: "bitcoin",
  color: "color",
  id: "bitcoin",
  ticker: "BTC",
  name: "Bitcoin",
  units: [
    {
      name: "bitcoin",
      code: "BTC",
      magnitude: 8,
    },
  ],
};

const ETHEREUM_CRYPTO: CryptoCurrency = {
  type: CurrencyType.CryptoCurrency,
  family: "ethereum",
  color: "color",
  id: "ethereum",
  ticker: "ETH",
  name: "Ethereum",
  units: [
    {
      name: "ether",
      code: "ETH",
      magnitude: 18,
    },
  ],
};

const USDC_TOKEN: ERC20TokenCurrency = {
  type: CurrencyType.TokenCurrency,
  parent: "ethereum",
  color: "color",
  id: "ethereum/erc20/usdc",
  ticker: "USDC",
  name: "USDC",
  units: [
    {
      name: "ether",
      code: "ETH",
      magnitude: 18,
    },
  ],
  contract: "constractAddress",
  standard: TokenStandard.ERC20,
};

const cryptoAccounts: Account[] = [
  {
    id: "account-btc-1",
    name: "Bitcoin 1",
    address: "address",
    currency: "bitcoin",
    balance: new BigNumber(42),
    spendableBalance: new BigNumber(42),
    blockHeight: 1,
    lastSyncDate: new Date("1995-12-17T03:24:00"),
  },
  {
    id: "account-eth-1",
    name: "Ethereum 1",
    address: "address",
    currency: "ethereum",
    balance: new BigNumber(42),
    spendableBalance: new BigNumber(42),
    blockHeight: 1,
    lastSyncDate: new Date("1995-12-17T03:24:00"),
  },
];

const tokenAccounts: Account[] = [
  {
    id: "account-usdc-1",
    name: "USDC 1",
    address: "address",
    currency: "ethereum/erc20/usdc",
    balance: new BigNumber(42),
    spendableBalance: new BigNumber(42),
    blockHeight: 1,
    lastSyncDate: new Date("1995-12-17T03:24:00"),
  },
];

const serverAccounts: Account[] = [...cryptoAccounts, ...tokenAccounts];

const cryptoCurrencies: CryptoCurrency[] = [BITCOIN_CRYPTO, ETHEREUM_CRYPTO];

const tokenCurrencies: ERC20TokenCurrency[] = [USDC_TOKEN];

const serverCurrencies: Currency[] = [...cryptoCurrencies, ...tokenCurrencies];

describe("listAccounts", () => {
  const params = { params: { params: { includeTokens: true } } };
  const defaultLogger = new Logger("Wallet-API-Server");

  test("should return empty array if no server params provided", () => {
    expect(listAccounts(params, undefined)).toEqual([]);
  });

  test("should return empty array if no currencies or accounts available in server params", () => {
    expect(listAccounts(params, { logger: defaultLogger })).toEqual([]);
  });

  test("should return server accounts if no JSON RPC params provided", () => {
    const res = listAccounts(undefined, {
      logger: defaultLogger,
      accounts: serverAccounts,
      currencies: serverCurrencies,
    }) as Currency[];

    expect(res).toEqual(serverAccounts);
  });

  test("should return server accounts if no input params provided", () => {
    const res = listAccounts(
      {},
      {
        logger: defaultLogger,
        accounts: serverAccounts,
        currencies: serverCurrencies,
      }
    ) as Currency[];

    expect(res).toEqual(serverAccounts);
  });

  test("should not include tokens accounts when includeTokens not provided", () => {
    const res = listAccounts(
      { params: {} },
      {
        logger: defaultLogger,
        accounts: serverAccounts,
        currencies: serverCurrencies,
      }
    ) as Currency[];

    expect(res).toEqual(cryptoAccounts);
  });

  test("should include all accounts when includeTokens provided", () => {
    const res = listAccounts(
      { params: { includeTokens: true } },
      {
        logger: defaultLogger,
        accounts: serverAccounts,
        currencies: serverCurrencies,
      }
    ) as Currency[];

    expect(res).toEqual(serverAccounts);
  });

  describe("currencies filter", () => {
    test("should return all accounts if no currencies filter is provided", () => {
      const res = listAccounts(
        { params: { includeTokens: true, currencies: undefined } },
        {
          logger: defaultLogger,
          accounts: serverAccounts,
          currencies: serverCurrencies,
        }
      ) as Currency[];

      expect(res).toEqual(serverAccounts);
    });

    test("should filter accounts with currency name", () => {
      const res = listAccounts(
        {
          params: {
            includeTokens: true,
            currencies: ["bitcoin"],
          },
        },
        {
          logger: defaultLogger,
          accounts: serverAccounts,
          currencies: serverCurrencies,
        }
      ) as Currency[];

      expect(res).toEqual([cryptoAccounts[0]]);
    });

    test("should filter accounts with currency regex", () => {
      const res = listAccounts(
        { params: { includeTokens: true, currencies: ["ethereum/*"] } },
        {
          logger: defaultLogger,
          accounts: serverAccounts,
          currencies: serverCurrencies,
        }
      ) as Currency[];

      expect(res).toEqual(tokenAccounts);
    });

    test("should include currency and tokens accounts when filtering with currency name", () => {
      const res = listAccounts(
        { params: { includeTokens: true, currencies: ["ethereum"] } },
        {
          logger: defaultLogger,
          accounts: serverAccounts,
          currencies: serverCurrencies,
        }
      ) as Currency[];

      expect(res).toEqual([cryptoAccounts[1], ...tokenAccounts]);
    });
  });
});
