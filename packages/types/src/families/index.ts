/**
 * FIXME: enum name and members sould be in UperCamelCase format
 * (i.e: Families, Bitcoin, etc...)
 * cf. https://www.typescriptlang.org/docs/handbook/enums.html
 * Beware, this will be a breaking change, should be done alongside another
 * major release
 */

/**
 * Supported coin families
 */
export enum FAMILIES {
  BITCOIN = "bitcoin",
  ETHEREUM = "ethereum",
  ALGORAND = "algorand",
  CRYPTO_ORG = "crypto_org",
  RIPPLE = "ripple",
  COSMOS = "cosmos",
  TEZOS = "tezos",
  POLKADOT = "polkadot",
  STELLAR = "stellar",
  TRON = "tron",
}

export * from "./algorand/serializer";
export * from "./algorand/types";
export * from "./bitcoin/serializer";
export * from "./bitcoin/types";
export * from "./cosmos/serializer";
export * from "./cosmos/types";
export * from "./crypto_org/serializer";
export * from "./crypto_org/types";
export * from "./ethereum/serializer";
export * from "./ethereum/types";
export * from "./polkadot/serializer";
export * from "./polkadot/types";
export * from "./ripple/serializer";
export * from "./ripple/types";
export * from "./stellar/serializer";
export * from "./stellar/types";
export * from "./tezos/serializer";
export * from "./tezos/types";
export * from "./tron/serializer";
export * from "./tron/types";
