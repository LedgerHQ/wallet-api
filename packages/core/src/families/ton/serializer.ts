import { Address, Cell } from "@ton/core";
import BigNumber from "bignumber.js";
import type {
  RawTonTransaction,
  TonPayloadFormat,
  TonPayloadFormatRaw,
  TonTransaction,
} from "./types";

export const serializeTonTransaction = ({
  amount,
  recipient,
  family,
  fees,
  comment,
  payload,
}: TonTransaction): RawTonTransaction => ({
  amount: amount.toString(),
  recipient,
  family,
  fees: fees.toString(),
  comment,
  payload: payload ? toTransactionPayloadRaw(payload) : undefined,
});

export const deserializeTonTransaction = ({
  amount,
  recipient,
  family,
  fees,
  comment,
  payload,
}: RawTonTransaction): TonTransaction => ({
  amount: new BigNumber(amount),
  recipient,
  family,
  fees: new BigNumber(fees),
  comment,
  payload: payload ? fromTransactionPayloadRaw(payload) : undefined,
});

const fromTransactionPayloadRaw = (
  payload: TonPayloadFormatRaw,
): TonPayloadFormat => {
  switch (payload.type) {
    case "unsafe":
      return {
        type: payload.type,
        message: Cell.fromBase64(payload.message),
      };
    case "jetton-transfer":
      return {
        type: payload.type,
        queryId: payload.queryId ? BigInt(payload.queryId) : null,
        amount: BigInt(payload.amount),
        destination: Address.parse(payload.destination),
        responseDestination: Address.parse(payload.responseDestination),
        customPayload: payload.customPayload
          ? Cell.fromBase64(payload.customPayload)
          : null,
        forwardAmount: BigInt(payload.forwardAmount),
        forwardPayload: payload.forwardPayload
          ? Cell.fromBase64(payload.forwardPayload)
          : null,
        knownJetton: payload.knownJetton,
      };
    case "nft-transfer":
      return {
        type: payload.type,
        queryId: payload.queryId ? BigInt(payload.queryId) : null,
        newOwner: Address.parse(payload.newOwner),
        responseDestination: Address.parse(payload.responseDestination),
        customPayload: payload.customPayload
          ? Cell.fromBase64(payload.customPayload)
          : null,
        forwardAmount: BigInt(payload.forwardAmount),
        forwardPayload: payload.forwardPayload
          ? Cell.fromBase64(payload.forwardPayload)
          : null,
      };
    case "jetton-burn":
      return {
        type: payload.type,
        queryId: payload.queryId ? BigInt(payload.queryId) : null,
        amount: BigInt(payload.amount),
        responseDestination: Address.parse(payload.responseDestination),
        // Handle customPayload could be a buffer, we should try/catch the fromBase64
        customPayload: payload.customPayload
          ? Cell.fromBase64(payload.customPayload)
          : null,
      };
    case "add-whitelist":
    case "single-nominator-change-validator":
      return {
        type: payload.type,
        queryId: payload.queryId ? BigInt(payload.queryId) : null,
        address: Address.parse(payload.address),
      };
    case "single-nominator-withdraw":
      return {
        type: payload.type,
        queryId: payload.queryId ? BigInt(payload.queryId) : null,
        amount: BigInt(payload.amount),
      };
    case "tonstakers-deposit":
      return {
        type: payload.type,
        queryId: payload.queryId ? BigInt(payload.queryId) : null,
        appId: payload.appId ? BigInt(payload.appId) : null,
      };
    case "vote-for-proposal":
      return {
        type: payload.type,
        queryId: payload.queryId ? BigInt(payload.queryId) : null,
        votingAddress: Address.parse(payload.votingAddress),
        expirationDate: payload.expirationDate,
        vote: payload.vote,
        needConfirmation: payload.needConfirmation,
      };
    case "change-dns-record":
      return {
        type: payload.type,
        queryId: payload.queryId ? BigInt(payload.queryId) : null,
        record:
          payload.record.type === "wallet"
            ? {
                type: payload.record.type,
                value: payload.record.value
                  ? {
                      address: Address.parse(payload.record.value.address),
                      capabilities: payload.record.value.capabilities,
                    }
                  : null,
              }
            : {
                type: payload.record.type,
                key: Buffer.from(payload.record.key, "hex"),
                value: payload.record.value
                  ? Cell.fromBase64(payload.record.value)
                  : null,
              },
      };
    case "token-bridge-pay-swap":
      return {
        type: payload.type,
        queryId: payload.queryId ? BigInt(payload.queryId) : null,
        swapId: Buffer.from(payload.swapId, "hex"),
      };
    case "comment":
      return payload;
  }
};

const toTransactionPayloadRaw = (
  payload: TonPayloadFormat,
): TonPayloadFormatRaw => {
  switch (payload.type) {
    case "unsafe":
      return {
        type: payload.type,
        message: payload.message.toBoc().toString("base64"),
      };
    case "jetton-transfer":
      return {
        type: payload.type,
        queryId: payload.queryId ? payload.queryId.toString() : null,
        amount: payload.amount.toString(),
        destination: payload.destination.toRawString(),
        responseDestination: payload.responseDestination.toRawString(),
        customPayload: payload.customPayload
          ? payload.customPayload.toBoc().toString("base64")
          : null,
        forwardAmount: payload.forwardAmount.toString(),
        forwardPayload: payload.forwardPayload
          ? payload.forwardPayload.toBoc().toString("base64")
          : null,
        knownJetton: payload.knownJetton,
      };
    case "nft-transfer":
      return {
        type: payload.type,
        queryId: payload.queryId ? payload.queryId.toString() : null,
        newOwner: payload.newOwner.toRawString(),
        responseDestination: payload.responseDestination.toRawString(),
        customPayload: payload.customPayload
          ? payload.customPayload.toBoc().toString("base64")
          : null,
        forwardAmount: payload.forwardAmount.toString(),
        forwardPayload: payload.forwardPayload
          ? payload.forwardPayload.toBoc().toString("base64")
          : null,
      };
    case "jetton-burn":
      return {
        type: payload.type,
        queryId: payload.queryId ? payload.queryId.toString() : null,
        amount: payload.amount.toString(),
        responseDestination: payload.responseDestination.toRawString(),
        customPayload:
          payload.customPayload && "toBoc" in payload.customPayload
            ? payload.customPayload.toBoc().toString("base64")
            : payload.customPayload
              ? payload.customPayload.toString("hex")
              : null,
      };
    case "add-whitelist":
    case "single-nominator-change-validator":
      return {
        type: payload.type,
        queryId: payload.queryId ? payload.queryId.toString() : null,
        address: payload.address.toRawString(),
      };
    case "single-nominator-withdraw":
      return {
        type: payload.type,
        queryId: payload.queryId ? payload.queryId.toString() : null,
        amount: payload.amount.toString(),
      };
    case "tonstakers-deposit":
      return {
        type: payload.type,
        queryId: payload.queryId ? payload.queryId.toString() : null,
        appId: payload.appId ? payload.appId.toString() : null,
      };
    case "vote-for-proposal":
      return {
        type: payload.type,
        queryId: payload.queryId ? payload.queryId.toString() : null,
        votingAddress: payload.votingAddress.toRawString(),
        expirationDate: payload.expirationDate,
        vote: payload.vote,
        needConfirmation: payload.needConfirmation,
      };
    case "change-dns-record":
      return {
        type: payload.type,
        queryId: payload.queryId ? payload.queryId.toString() : null,
        record:
          payload.record.type === "wallet"
            ? {
                type: payload.record.type,
                value: payload.record.value
                  ? {
                      address: payload.record.value.address.toRawString(),
                      capabilities: payload.record.value.capabilities,
                    }
                  : null,
              }
            : {
                type: payload.record.type,
                key: payload.record.key.toString("hex"),
                value: payload.record.value
                  ? payload.record.value.toBoc().toString("base64")
                  : null,
              },
      };
    case "token-bridge-pay-swap":
      return {
        type: payload.type,
        queryId: payload.queryId ? payload.queryId.toString() : null,
        swapId: payload.swapId.toString("hex"),
      };
    case "comment":
      return payload;
  }
};
