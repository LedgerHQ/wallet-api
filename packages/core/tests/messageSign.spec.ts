import { schemaMessageSign } from "../src/spec/types/MessageSign";

describe("schemaMessageSign", () => {
  const baseParams = { accountId: "account-id", hexMessage: "68656c6c6f" };

  it("accepts a request without options", () => {
    expect(schemaMessageSign.params.parse(baseParams)).toEqual(baseParams);
  });

  it("accepts options with a derivation path", () => {
    const params = { ...baseParams, options: { path: "m/84'/0'/0'/0/5" } };

    expect(schemaMessageSign.params.parse(params)).toEqual(params);
  });

  it.each([{ path: 84 }, { path: ["84'", "0'"] }])(
    "rejects malformed options %o",
    (options) => {
      expect(() =>
        schemaMessageSign.params.parse({ ...baseParams, options }),
      ).toThrow();
    },
  );
});
