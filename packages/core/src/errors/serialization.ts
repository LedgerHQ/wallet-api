import type { UnknownErrorData } from "./types";

export function serializeError(
  error: unknown,
): UnknownErrorData | string | null | undefined {
  if (error instanceof Error) {
    return { name: error.name, message: error.message, stack: error.stack };
  }
  if (typeof error === "string") return error;
  return error as UnknownErrorData | null | undefined;
}

// returns undefined when data has no name/message — e.g. `throw undefined` round-trips as {}
export function deserializeError(
  data: UnknownErrorData | null | undefined,
): Error | undefined {
  if (!data) return undefined;
  if (data.message === undefined && data.name === undefined) return undefined;
  const error = new Error(data.message);
  if (data.name) error.name = data.name;
  if (data.stack) error.stack = data.stack;
  return error;
}
