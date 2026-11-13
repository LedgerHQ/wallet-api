import { z } from "zod";
import {
  schemaAmount,
  schemaBigIntString,
  schemaFamilies,
  schemaNullableBigIntString,
  schemaTransactionCommon,
} from "../common";

export const schemaTonComment = z.object({
  isEncrypted: z.boolean(),
  text: z.string(),
});

export const schemaTonPayloadJettonTransferRaw = z.object({
  type: z.literal("jetton-transfer"),
  queryId: schemaNullableBigIntString,
  amount: schemaBigIntString,
  destination: z.string(),
  responseDestination: z.string(),
  customPayload: z.union([z.string(), z.null()]),
  forwardAmount: schemaBigIntString,
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
  queryId: schemaNullableBigIntString,
  newOwner: z.string(),
  responseDestination: z.string(),
  customPayload: z.union([z.string(), z.null()]),
  forwardAmount: schemaBigIntString,
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
  queryId: schemaNullableBigIntString,
  amount: schemaBigIntString,
  responseDestination: z.string(),
  customPayload: z.union([z.string(), z.null()]),
});

export const schemaTonPayloadAddWhitelistRaw = z.object({
  type: z.literal("add-whitelist"),
  queryId: schemaNullableBigIntString,
  address: z.string(),
});

export const schemaTonPayloadSingleNominatorWithdrawRaw = z.object({
  type: z.literal("single-nominator-withdraw"),
  queryId: schemaNullableBigIntString,
  amount: schemaBigIntString,
});

export const schemaTonPayloadSingleNominatorChangeValidatorRaw = z.object({
  type: z.literal("single-nominator-change-validator"),
  queryId: schemaNullableBigIntString,
  address: z.string(),
});

export const schemaTonPayloadTonStakersDepositRaw = z.object({
  type: z.literal("tonstakers-deposit"),
  queryId: schemaNullableBigIntString,
  appId: schemaNullableBigIntString,
});

export const schemaTonPayloadVoteForProposalRaw = z.object({
  type: z.literal("vote-for-proposal"),
  queryId: schemaNullableBigIntString,
  votingAddress: z.string(),
  expirationDate: z.number(),
  vote: z.boolean(),
  needConfirmation: z.boolean(),
});

export const schemaTonPayloadChangeDnsRecordRaw = z.object({
  type: z.literal("change-dns-record"),
  queryId: schemaNullableBigIntString,
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
  queryId: schemaNullableBigIntString,
  swapId: z.string(),
});

export const schemaTonPayloadTonWhalesPoolDepositRaw = z.object({
  type: z.literal("tonwhales-pool-deposit"),
  queryId: schemaBigIntString,
  gasLimit: schemaBigIntString,
});

export const schemaTonPayloadTonWhalesPoolWithdrawRaw = z.object({
  type: z.literal("tonwhales-pool-withdraw"),
  queryId: schemaBigIntString,
  gasLimit: schemaBigIntString,
  amount: schemaBigIntString,
});

export const schemaTonPayloadVestingSendMsgCommentRaw = z.object({
  type: z.literal("vesting-send-msg-comment"),
  queryId: schemaNullableBigIntString,
  sendMode: z.number(),
  value: schemaBigIntString,
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
  fees: schemaAmount,
  comment: schemaTonComment,
  payload: schemaTonPayloadFormatRaw.optional(),
});
