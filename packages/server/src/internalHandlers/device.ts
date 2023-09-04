import {
  createNotImplementedByWallet,
  DeviceClose,
  DeviceExchange,
  DeviceOpen,
  DeviceSelect,
  DeviceTransport,
  schemaDeviceClose,
  schemaDeviceExchange,
  schemaDeviceOpen,
  schemaDeviceSelect,
  schemaDeviceTransport,
  ServerError,
} from "@ledgerhq/wallet-api-core";
import type { RPCHandler } from "../types";

const DEVICE_CLOSE = "device.close";
export const close: RPCHandler<DeviceClose["result"]> = async (
  req,
  _,
  handlers,
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
  handlers,
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

const DEVICE_OPEN = "device.open";
export const open: RPCHandler<DeviceOpen["result"]> = async (
  req,
  _,
  handlers,
) => {
  const safeParams = schemaDeviceOpen.params.parse(req.params);

  const walletHandler = handlers[DEVICE_OPEN];

  if (!walletHandler) {
    throw new ServerError(createNotImplementedByWallet(DEVICE_OPEN));
  }

  const transportId = await walletHandler(safeParams);

  return {
    transportId,
  };
};

const DEVICE_SELECT = "device.select";
export const select: RPCHandler<DeviceSelect["result"]> = async (
  req,
  _,
  handlers,
) => {
  const safeParams = schemaDeviceSelect.params.parse(req.params);

  const walletHandler = handlers[DEVICE_SELECT];

  if (!walletHandler) {
    throw new ServerError(createNotImplementedByWallet(DEVICE_SELECT));
  }

  const deviceId = await walletHandler(safeParams);

  return {
    deviceId,
  };
};

const DEVICE_TRANSPORT = "device.transport";
export const transport: RPCHandler<DeviceTransport["result"]> = async (
  req,
  _,
  handlers,
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
