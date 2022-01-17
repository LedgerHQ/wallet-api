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
enum FAMILIES {
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
export default FAMILIES;
