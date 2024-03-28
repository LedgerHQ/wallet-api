import { z } from "zod";

export const schemaResponse = z.object({
  id: z.string().optional(),
  result: z.unknown().optional(),
  error: z.unknown().optional(),
  method: z.string().optional(),
});

export type Response = z.infer<typeof schemaResponse>;

export type ResponseResult = Response & {
  jsonrpc: string;
  result: unknown;
};

export type ResponseError = Response & {
  jsonrpc: string;
  error: unknown;
};

export const schemaRequest = z.object({
  method: z.string(),
  params: z.object({}).passthrough(),
});
export type InitialRequest = z.infer<typeof schemaRequest>;

export type Request = InitialRequest & {
  id: string;
  [key: string]: unknown;
};

export type MessageOut = {
  type: "out";
  value: Request;
  date: Date;
};

export type MessageInfo = {
  id: string;
  type: "info" | "error";
  value: string;
  date: Date;
};

export type MessageIn = {
  type: "in";
  value: ResponseResult | ResponseError;
  date: Date;
};

export type MessageGrouped = {
  type: "group";
  id: string;
  date: Date;
  messages: {
    sent: MessageOut;
    received: MessageIn | undefined;
  };
};
