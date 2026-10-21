import { schemaBitcoinSignPsbt } from "../src/spec/types/BitcoinSignPsbt";

describe("schemaBitcoinSignPsbt", () => {
  const baseParams = { accountId: "account-id", psbt: "cHNidP8B" };

  it("accepts a request without options", () => {
    expect(schemaBitcoinSignPsbt.params.parse(baseParams)).toEqual(baseParams);
  });

  it("accepts options with hwAppId and dependencies", () => {
    const params = {
      ...baseParams,
      broadcast: false,
      options: { hwAppId: "My App", dependencies: ["Bitcoin"] },
    };

    expect(schemaBitcoinSignPsbt.params.parse(params)).toEqual(params);
  });

  it("accepts empty options", () => {
    const params = { ...baseParams, options: {} };

    expect(schemaBitcoinSignPsbt.params.parse(params)).toEqual(params);
  });

  it.each([
    { hwAppId: 42 },
    { dependencies: "Bitcoin" },
    { dependencies: [1] },
  ])("rejects malformed options %o", (options) => {
    expect(() =>
      schemaBitcoinSignPsbt.params.parse({ ...baseParams, options }),
    ).toThrow();
  });
});
