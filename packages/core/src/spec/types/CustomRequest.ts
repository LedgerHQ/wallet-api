import { z } from "zod";

const schemaCustomRequestParams = z.any();

const schemaCustomRequestResults = z.any();

export const schemaCustomRequest = {
  params: schemaCustomRequestParams,
  result: schemaCustomRequestResults,
};

export type CustomRequest = {
  params: z.infer<typeof schemaCustomRequestParams>;
  result: z.infer<typeof schemaCustomRequestResults>;
};

export type CustomRequestHandler = (
  params: CustomRequest["params"],
) => CustomRequest["result"];
