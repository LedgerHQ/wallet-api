import { z } from "zod";
import { schemaFamilies, schemaTransactionCommon } from "../common";

export const schemaTonComment = z.object({
  isEncrypted: z.boolean(),
  text: z.string(),
});

export const schemaTonPayloadJettonTransferRaw = z.object({
  type: z.literal("jetton-transfer"),
  queryId: z.union([z.string(), z.null()]),
  amount: z.string(),
  destination: z.string(),
  responseDestination: z.string(),
  customPayload: z.union([z.string(), z.null()]),
  forwardAmount: z.string(),
  forwardPayload: z.union([z.string(), z.null()]),
  knownJetton: z.union([
    z.object({
      jettonId: z.number(),
      workchain: z.number(),
    }),
    z.null(),
  ]),
});

export const schemaTonPayloadNftTransferRaw = z.object({
  type: z.literal("nft-transfer"),
  queryId: z.union([z.string(), z.null()]),
  newOwner: z.string(),
  responseDestination: z.string(),
  customPayload: z.union([z.string(), z.null()]),
  forwardAmount: z.string(),
  forwardPayload: z.union([z.string(), z.null()]),
});

export const schemaTonPayloadCommentRaw = z.object({
  type: z.literal("comment"),
  text: z.string(),
});

export const schemaTonPayloadUnsafeRaw = z.object({
  type: z.literal("unsafe"),
  message: z.string(),
});

export const schemaTonPayloadJettonBurnRaw = z.object({
  type: z.literal("jetton-burn"),
  queryId: z.union([z.string(), z.null()]),
  amount: z.string(),
  responseDestination: z.string(),
  customPayload: z.union([z.string(), z.null()]),
});

export const schemaTonPayloadAddWhitelistRaw = z.object({
  type: z.literal("add-whitelist"),
  queryId: z.union([z.string(), z.null()]),
  address: z.string(),
});

export const schemaTonPayloadSingleNominatorWithdrawRaw = z.object({
  type: z.literal("single-nominator-withdraw"),
  queryId: z.union([z.string(), z.null()]),
  amount: z.string(),
});

export const schemaTonPayloadSingleNominatorChangeValidatorRaw = z.object({
  type: z.literal("single-nominator-change-validator"),
  queryId: z.union([z.string(), z.null()]),
  address: z.string(),
});

export const schemaTonPayloadTonStakersDepositRaw = z.object({
  type: z.literal("tonstakers-deposit"),
  queryId: z.union([z.string(), z.null()]),
  appId: z.union([z.string(), z.null()]),
});

export const schemaTonPayloadVoteForProposalRaw = z.object({
  type: z.literal("vote-for-proposal"),
  queryId: z.union([z.string(), z.null()]),
  votingAddress: z.string(),
  expirationDate: z.number(),
  vote: z.boolean(),
  needConfirmation: z.boolean(),
});

export const schemaTonPayloadChangeDnsRecordRaw = z.object({
  type: z.literal("change-dns-record"),
  queryId: z.union([z.string(), z.null()]),
  record: z.union([
    z.object({
      type: z.literal("wallet"),
      value: z.union([
        z.object({
          address: z.string(),
          capabilities: z.union([
            z.object({
              isWallet: z.boolean(),
            }),
            z.null(),
          ]),
        }),
        z.null(),
      ]),
    }),
    z.object({
      type: z.literal("unknown"),
      key: z.string(),
      value: z.union([z.string(), z.null()]),
    }),
  ]),
});

export const schemaTonPayloadTokenBridgePaySwapRaw = z.object({
  type: z.literal("token-bridge-pay-swap"),
  queryId: z.union([z.string(), z.null()]),
  swapId: z.string(),
});

export const schemaTonPayloadTonWhalesPoolDepositRaw = z.object({
  type: z.literal("tonwhales-pool-deposit"),
  queryId: z.string(),
  gasLimit: z.string(),
});

export const schemaTonPayloadTonWhalesPoolWithdrawRaw = z.object({
  type: z.literal("tonwhales-pool-withdraw"),
  queryId: z.string(),
  gasLimit: z.string(),
  amount: z.string(),
});

export const schemaTonPayloadVestingSendMsgCommentRaw = z.object({
  type: z.literal("vesting-send-msg-comment"),
  queryId: z.union([z.string(), z.null()]),
  sendMode: z.number(),
  value: z.string(),
  destination: z.string(),
  text: z.string(),
});

export const schemaTonPayloadFormatRaw = z.union([
  schemaTonPayloadCommentRaw,
  schemaTonPayloadJettonTransferRaw,
  schemaTonPayloadNftTransferRaw,
  schemaTonPayloadUnsafeRaw,
  schemaTonPayloadJettonBurnRaw,
  schemaTonPayloadAddWhitelistRaw,
  schemaTonPayloadSingleNominatorWithdrawRaw,
  schemaTonPayloadSingleNominatorChangeValidatorRaw,
  schemaTonPayloadTonStakersDepositRaw,
  schemaTonPayloadVoteForProposalRaw,
  schemaTonPayloadChangeDnsRecordRaw,
  schemaTonPayloadTokenBridgePaySwapRaw,
  schemaTonPayloadTonWhalesPoolDepositRaw,
  schemaTonPayloadTonWhalesPoolWithdrawRaw,
  schemaTonPayloadVestingSendMsgCommentRaw,
]);

export const schemaRawTonTransaction = schemaTransactionCommon.extend({
  family: z.literal(schemaFamilies.enum.ton),
  fees: z.string(),
  comment: schemaTonComment,
  payload: schemaTonPayloadFormatRaw.optional(),
});
