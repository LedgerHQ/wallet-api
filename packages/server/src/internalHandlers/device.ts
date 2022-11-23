import {
  DeviceClose,
  DeviceExchange,
  DeviceTransport,
  RpcError,
  schemaDeviceClose,
  schemaDeviceExchange,
  schemaDeviceTransport,
} from "@ledgerhq/wallet-api-core";
import { NOT_IMPLEMENTED_BY_WALLET } from "../errors";
import type { RPCHandler } from "../types";

export const close: RPCHandler<DeviceClose["result"]> = async (
  req,
  _,
  handlers
) => {
  const safeParams = schemaDeviceClose.params.parse(req.params);

  const walletHandler = handlers["device.close"];

  if (!walletHandler) {
    throw new RpcError(NOT_IMPLEMENTED_BY_WALLET);
  }

  const deviceId = await walletHandler({
    deviceId: safeParams.deviceId,
  });

  return {
    deviceId,
  };
};

export const exchange: RPCHandler<DeviceExchange["result"]> = async (
  req,
  _,
  handlers
) => {
  const safeParams = schemaDeviceExchange.params.parse(req.params);

  const walletHandler = handlers["device.exchange"];

  if (!walletHandler) {
    throw new RpcError(NOT_IMPLEMENTED_BY_WALLET);
  }

  const responseHex = await walletHandler({
    apduHex: safeParams.apduHex,
    deviceId: safeParams.deviceId,
  });

  return {
    responseHex,
  };
};

export const transport: RPCHandler<DeviceTransport["result"]> = async (
  req,
  _,
  handlers
) => {
  const safeParams = schemaDeviceTransport.params.parse(req.params);

  const walletHandler = handlers["device.transport"];

  if (!walletHandler) {
    throw new RpcError(NOT_IMPLEMENTED_BY_WALLET);
  }

  const deviceId = await walletHandler({
    appName: safeParams.appName,
  });

  return {
    deviceId,
  };
};
