import type { z } from "zod";
import type { TransactionCommon } from "../index";
import type { schemaRawStacksTransaction } from "./validation";
import type BigNumber from "bignumber.js";
import type { AnchorMode } from "@stacks/transactions";

export type StacksNetworks = "mainnet" | "testnet";

export type StacksTransaction = TransactionCommon & {
  readonly family: RawStacksTransaction["family"];
  fee?: BigNumber;
  nonce?: BigNumber;
  memo?: string;
  network: StacksNetworks;
  anchorMode: AnchorMode;
};

export type RawStacksTransaction = z.infer<typeof schemaRawStacksTransaction>;
