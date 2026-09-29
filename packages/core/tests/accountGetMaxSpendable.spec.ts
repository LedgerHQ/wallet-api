import { schemaAccountGetMaxSpendable } from "../src/spec/types/AccountGetMaxSpendable";

describe("schemaAccountGetMaxSpendable", () => {
  it.each(["0", "42", "10000000000000000000"])(
    "accepts atomic amount %s",
    (maxSpendable) => {
      expect(
        schemaAccountGetMaxSpendable.result.parse({ maxSpendable }),
      ).toEqual({ maxSpendable });
    },
  );

  it.each(["unknown", "Infinity", "-1", "1.5", "", "01"])(
    "rejects %s",
    (maxSpendable) => {
      expect(() =>
        schemaAccountGetMaxSpendable.result.parse({ maxSpendable }),
      ).toThrow();
    },
  );
});
