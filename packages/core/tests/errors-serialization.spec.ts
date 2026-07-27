import { deserializeError, serializeError } from "../src";

describe("serializeError", () => {
  it("serializes an Error to name/message/stack", () => {
    const out = serializeError(new Error("boom"));
    expect(out).toMatchObject({ name: "Error", message: "boom" });
    expect(typeof out.stack).toBe("string");
  });

  it("preserves a custom name and code", () => {
    class MyError extends Error {
      override name = "MyError";
      code = "E_CUSTOM";
    }
    expect(serializeError(new MyError("x"))).toMatchObject({
      name: "MyError",
      message: "x",
      code: "E_CUSTOM",
    });
  });

  it("preserves cause", () => {
    const out = serializeError(
      Object.assign(new Error("outer"), { cause: new Error("inner") }),
    );
    expect(out.cause).toBeInstanceOf(Error);
  });

  it("wraps a thrown string as { message }", () => {
    expect(serializeError("nope")).toEqual({ message: "nope" });
  });

  it("returns {} for primitives / null / undefined", () => {
    expect(serializeError(42)).toEqual({});
    expect(serializeError(null)).toEqual({});
    expect(serializeError(undefined)).toEqual({});
  });
});

describe("deserializeError", () => {
  it("round-trips a serialized Error, including code", () => {
    const wire = serializeError(
      Object.assign(new Error("boom"), { code: "E_CUSTOM" }),
    );
    const out = deserializeError(wire);
    expect(out).toBeInstanceOf(Error);
    expect(out?.message).toBe("boom");
    expect(out?.code).toBe("E_CUSTOM");
  });

  it("returns undefined when payload has no name or message", () => {
    expect(deserializeError({})).toBeUndefined();
  });

  it("returns undefined for null/undefined (e.g. `throw undefined`)", () => {
    expect(deserializeError(undefined)).toBeUndefined();
    expect(deserializeError(null)).toBeUndefined();
  });
});
