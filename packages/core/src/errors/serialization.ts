import type { UnknownErrorData } from "./types";

// Always returns a valid wire shape — callers never need to normalize.
export function serializeError(error: unknown): UnknownErrorData {
  if (error instanceof Error) {
    const serialized: UnknownErrorData = {
      name: error.name,
      message: error.message,
      stack: error.stack,
    };
    // preserve the extra fields the wire schema advertises
    // (read via cast: the DOM-only `lib` here lacks ES2022 `Error.cause`)
    const { code, cause } = error as { code?: unknown; cause?: unknown };
    if (typeof code === "string") serialized.code = code;
    if (cause !== undefined) serialized.cause = cause;
    return serialized;
  }
  if (typeof error === "string") return { message: error };
  if (error !== null && typeof error === "object") {
    return error;
  }
  // primitives, null, undefined
  return {};
}

// returns undefined when data has no name/message — e.g. `throw undefined` round-trips as {}
export function deserializeError(
  data: UnknownErrorData | null | undefined,
): Error | undefined {
  if (!data) return undefined;
  if (data.message === undefined && data.name === undefined) return undefined;
  const error = new Error(data.message) as Error & {
    code?: string;
    cause?: unknown;
  };
  if (data.name) error.name = data.name;
  if (data.stack) error.stack = data.stack;
  // complete the round-trip for the same extra fields
  if (data.code !== undefined) error.code = data.code;
  if (data.cause !== undefined) error.cause = data.cause;
  return error;
}
