import { Promisable } from "../../types";

export type CustomRequestHandler<P, R> = (params: P) => Promisable<R>;
