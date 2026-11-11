import { schemaCurrency } from "../src/currencies";

const cryptoCurrency = {
  type: "CryptoCurrency",
  id: "ethereum",
  ticker: "ETH",
  name: "Ethereum",
  family: "ethereum",
  color: "#0ebdcd",
  decimals: 18,
} as const;

const tokenCurrency = {
  type: "TokenCurrency",
  standard: "ERC20",
  id: "ethereum/erc20/usd_tether__erc20_",
  ticker: "USDT",
  name: "Tether USD",
  parent: "ethereum",
  contract: "0xdAC17F958D2ee523a2206206994597C13D831ec7",
  color: "#0ebdcd",
  decimals: 6,
} as const;

describe("schemaCurrency categories", () => {
  it.each([
    ["crypto", cryptoCurrency],
    ["token", tokenCurrency],
  ])("keeps populated categories on a %s currency", (_, currency) => {
    expect(
      schemaCurrency.parse({ ...currency, categories: ["stocks"] }),
    ).toEqual({ ...currency, categories: ["stocks"] });
  });

  it("keeps an empty categories array", () => {
    expect(schemaCurrency.parse({ ...tokenCurrency, categories: [] })).toEqual({
      ...tokenCurrency,
      categories: [],
    });
  });

  it("leaves categories absent when the wallet does not send them", () => {
    expect(schemaCurrency.parse(tokenCurrency)).not.toHaveProperty(
      "categories",
    );
  });

  it.each([[null], [[42]], ["stocks"]])(
    "changes invalid categories %p to undefined",
    (categories) => {
      expect(
        schemaCurrency.parse({ ...tokenCurrency, categories }).categories,
      ).toBeUndefined();
    },
  );
});
