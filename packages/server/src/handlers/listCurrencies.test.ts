import {
  CryptoCurrency,
  Currency,
  CurrencyType,
  ERC20TokenCurrency,
  Logger,
  TokenStandard,
} from "@ledgerhq/wallet-api-core";
import listCurrencies from "./listCurrencies";

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

const cryptoCurrencies: CryptoCurrency[] = [BITCOIN_CRYPTO, ETHEREUM_CRYPTO];

const tokenCurrencies: ERC20TokenCurrency[] = [USDC_TOKEN];

const serverCurrencies: Currency[] = [...cryptoCurrencies, ...tokenCurrencies];

describe("listCurrencies", () => {
  const params = { params: { params: { includeTokens: true } } };
  const defaultLogger = new Logger("Wallet-API-Server");

  test("should return empty array if no server params provided", () => {
    expect(listCurrencies(params, undefined)).toEqual([]);
  });

  test("should return empty array if no currencies available in server params", () => {
    expect(listCurrencies(params, { logger: defaultLogger })).toEqual([]);
  });

  test("should return server currencies if no JSON RPC params provided", () => {
    const res = listCurrencies(undefined, {
      logger: defaultLogger,
      currencies: serverCurrencies,
    }) as Currency[];

    expect(res).toEqual(serverCurrencies);
  });

  test("should return server currencies if no input params provided", () => {
    const res = listCurrencies(
      {},
      {
        logger: defaultLogger,
        currencies: serverCurrencies,
      }
    ) as Currency[];

    expect(res).toEqual(serverCurrencies);
  });

  test("should not include tokens when includeTokens not provided", () => {
    const res = listCurrencies(
      { params: {} },
      {
        logger: defaultLogger,
        currencies: serverCurrencies,
      }
    ) as Currency[];

    expect(res).toEqual(cryptoCurrencies);
  });

  test("should include all currencies when includeTokens provided", () => {
    const res = listCurrencies(
      { params: { includeTokens: true } },
      {
        logger: defaultLogger,
        currencies: serverCurrencies,
      }
    ) as Currency[];

    expect(res).toEqual(serverCurrencies);
  });

  describe("currencies filter", () => {
    test("should return all currencies if no currencies filter is provided", () => {
      const res = listCurrencies(
        { params: { includeTokens: true, currencies: undefined } },
        {
          logger: defaultLogger,
          currencies: serverCurrencies,
        }
      ) as Currency[];

      expect(res).toEqual(serverCurrencies);
    });

    test("should filter currencies with name", () => {
      const res = listCurrencies(
        {
          params: {
            includeTokens: true,
            currencies: ["bitcoin"],
          },
        },
        {
          logger: defaultLogger,
          currencies: serverCurrencies,
        }
      ) as Currency[];

      expect(res).toEqual([BITCOIN_CRYPTO]);
    });

    test("should filter currencies with regex", () => {
      const res = listCurrencies(
        { params: { includeTokens: true, currencies: ["ethereum/*"] } },
        {
          logger: defaultLogger,
          currencies: serverCurrencies,
        }
      ) as Currency[];

      expect(res).toEqual(tokenCurrencies);
    });

    test("should include currency and tokens when filtering with currency name", () => {
      const res = listCurrencies(
        { params: { includeTokens: true, currencies: ["ethereum"] } },
        {
          logger: defaultLogger,
          currencies: serverCurrencies,
        }
      ) as Currency[];

      expect(res).toEqual([ETHEREUM_CRYPTO, USDC_TOKEN]);
    });
  });
});
