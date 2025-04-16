import type { Address, Cell } from "@ton/core";
import BigNumber from "bignumber.js";
import type { z } from "zod";
import type { TransactionCommon } from "../index";
import type {
  schemaRawTonTransaction,
  schemaTonComment,
  schemaTonPayloadAddWhitelistRaw,
  schemaTonPayloadChangeDnsRecordRaw,
  schemaTonPayloadCommentRaw,
  schemaTonPayloadFormatRaw,
  schemaTonPayloadJettonBurnRaw,
  schemaTonPayloadJettonTransferRaw,
  schemaTonPayloadNftTransferRaw,
  schemaTonPayloadSingleNominatorChangeValidatorRaw,
  schemaTonPayloadSingleNominatorWithdrawRaw,
  schemaTonPayloadTokenBridgePaySwapRaw,
  schemaTonPayloadTonStakersDepositRaw,
  schemaTonPayloadUnsafeRaw,
  schemaTonPayloadVoteForProposalRaw,
} from "./validation";

export type TonComment = z.infer<typeof schemaTonComment>;

export type TonTransaction = TransactionCommon & {
  readonly family: RawTonTransaction["family"];
  fees: BigNumber;
  comment: TonComment;
  payload?: TonPayloadFormat;
};

export type RawTonTransaction = z.infer<typeof schemaRawTonTransaction>;

export type TonPayloadJettonTransfer = {
  type: "jetton-transfer";
  queryId: bigint | null;
  amount: bigint;
  destination: Address;
  responseDestination: Address;
  customPayload: Cell | null;
  forwardAmount: bigint;
  forwardPayload: Cell | null;
  knownJetton: {
    jettonId: number;
    workchain: number;
  } | null;
};

export type TonPayloadJettonTransferRaw = z.infer<
  typeof schemaTonPayloadJettonTransferRaw
>;

export type TonPayloadNftTransfer = {
  type: "nft-transfer";
  queryId: bigint | null;
  newOwner: Address;
  responseDestination: Address;
  customPayload: Cell | null;
  forwardAmount: bigint;
  forwardPayload: Cell | null;
};

export type TonPayloadNftTransferRaw = z.infer<
  typeof schemaTonPayloadNftTransferRaw
>;

export type TonPayloadComment = {
  type: "comment";
  text: string;
};

export type TonPayloadCommentRaw = z.infer<typeof schemaTonPayloadCommentRaw>;

export type TonPayloadUnsafe = {
  type: "unsafe";
  message: Cell;
};

export type TonPayloadUnsafeRaw = z.infer<typeof schemaTonPayloadUnsafeRaw>;

export type TonPayloadJettonBurn = {
  type: "jetton-burn";
  queryId: bigint | null;
  amount: bigint;
  responseDestination: Address;
  customPayload: Cell | Buffer | null;
};

export type TonPayloadJettonBurnRaw = z.infer<
  typeof schemaTonPayloadJettonBurnRaw
>;

export type TonPayloadAddWhitelist = {
  type: "add-whitelist";
  queryId: bigint | null;
  address: Address;
};

export type TonPayloadAddWhitelistRaw = z.infer<
  typeof schemaTonPayloadAddWhitelistRaw
>;

export type TonPayloadSingleNominatorWithdraw = {
  type: "single-nominator-withdraw";
  queryId: bigint | null;
  amount: bigint;
};

export type TonPayloadSingleNominatorWithdrawRaw = z.infer<
  typeof schemaTonPayloadSingleNominatorWithdrawRaw
>;

export type TonPayloadSingleNominatorChangeValidator = {
  type: "single-nominator-change-validator";
  queryId: bigint | null;
  address: Address;
};

export type TonPayloadSingleNominatorChangeValidatorRaw = z.infer<
  typeof schemaTonPayloadSingleNominatorChangeValidatorRaw
>;

export type TonPayloadTonStakersDeposit = {
  type: "tonstakers-deposit";
  queryId: bigint | null;
  appId: bigint | null;
};

export type TonPayloadTonStakersDepositRaw = z.infer<
  typeof schemaTonPayloadTonStakersDepositRaw
>;

export type TonPayloadVoteForProposal = {
  type: "vote-for-proposal";
  queryId: bigint | null;
  votingAddress: Address;
  expirationDate: number;
  vote: boolean;
  needConfirmation: boolean;
};

export type TonPayloadVoteForProposalRaw = z.infer<
  typeof schemaTonPayloadVoteForProposalRaw
>;

export type TonPayloadChangeDnsRecord = {
  type: "change-dns-record";
  queryId: bigint | null;
  record:
    | {
        type: "wallet";
        value: {
          address: Address;
          capabilities: {
            isWallet: boolean;
          } | null;
        } | null;
      }
    | {
        type: "unknown";
        key: Buffer;
        value: Cell | null;
      };
};

export type TonPayloadChangeDnsRecordRaw = z.infer<
  typeof schemaTonPayloadChangeDnsRecordRaw
>;

export type TonPayloadTokenBridgePaySwap = {
  type: "token-bridge-pay-swap";
  queryId: bigint | null;
  swapId: Buffer;
};

export type TonPayloadTokenBridgePaySwapRaw = z.infer<
  typeof schemaTonPayloadTokenBridgePaySwapRaw
>;

export type TonPayloadFormat =
  | TonPayloadComment
  | TonPayloadJettonTransfer
  | TonPayloadNftTransfer
  | TonPayloadUnsafe
  | TonPayloadJettonBurn
  | TonPayloadAddWhitelist
  | TonPayloadSingleNominatorWithdraw
  | TonPayloadSingleNominatorChangeValidator
  | TonPayloadTonStakersDeposit
  | TonPayloadVoteForProposal
  | TonPayloadChangeDnsRecord
  | TonPayloadTokenBridgePaySwap;

export type TonPayloadFormatRaw = z.infer<typeof schemaTonPayloadFormatRaw>;
