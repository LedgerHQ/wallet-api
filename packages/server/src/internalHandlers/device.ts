import {
  createNotImplementedByWallet,
  DeviceClose,
  DeviceExchange,
  DeviceTransport,
  schemaDeviceClose,
  schemaDeviceExchange,
  schemaDeviceTransport,
  ServerError,
} from "@ledgerhq/wallet-api-core";
import type { RPCHandler } from "../types";

const DEVICE_CLOSE = "device.close";
export const close: RPCHandler<DeviceClose["result"]> = async (
  req,
  _,
  handlers
) => {
  const safeParams = schemaDeviceClose.params.parse(req.params);

  const walletHandler = handlers[DEVICE_CLOSE];

  if (!walletHandler) {
    throw new ServerError(createNotImplementedByWallet(DEVICE_CLOSE));
  }

  const transportId = await walletHandler(safeParams);

  return {
    transportId,
  };
};

const DEVICE_EXCHANGE = "device.exchange";
export const exchange: RPCHandler<DeviceExchange["result"]> = async (
  req,
  _,
  handlers
) => {
  const safeParams = schemaDeviceExchange.params.parse(req.params);

  const walletHandler = handlers[DEVICE_EXCHANGE];

  if (!walletHandler) {
    throw new ServerError(createNotImplementedByWallet(DEVICE_EXCHANGE));
  }

  const responseHex = await walletHandler(safeParams);

  return {
    responseHex,
  };
};

const DEVICE_TRANSPORT = "device.transport";
export const transport: RPCHandler<DeviceTransport["result"]> = async (
  req,
  _,
  handlers
) => {
  const safeParams = schemaDeviceTransport.params.parse(req.params);

  const walletHandler = handlers[DEVICE_TRANSPORT];

  if (!walletHandler) {
    throw new ServerError(createNotImplementedByWallet(DEVICE_TRANSPORT));
  }

  const transportId = await walletHandler(safeParams);

  return {
    transportId,
  };
};
