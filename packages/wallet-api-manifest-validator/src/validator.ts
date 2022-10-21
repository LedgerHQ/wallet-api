import Ajv from "ajv";
import ajvErrors from "ajv-errors";
import { Logger } from "@ledgerhq/wallet-api-core";
import SchemaJSON from "./schema/schema.json";

export interface ValidateManifestParams {
  details?: boolean;
  enableState?: boolean;
  fileName?: string;
}

/**
 *  Verify if your JSON meets the requirements for Ledger Live App manifest submission
 *  @param {JSON} manifest - json file.
 *  @returns {boolean}
 *
 *  @param {ValidateManifestParams=} options :
 *      @param {boolean=} details - describe errors when they occur
 *      @param {boolean=} enableState - Result description (e.g. show in console "The JSON file do not correspond to the schema")
 *      @param {string=} fileName - file name, practical to validate multiple files via multiple calls
 */
export function validateManifest(
  manifest: JSON,
  options?: ValidateManifestParams | undefined
): boolean {
  const { details, enableState, fileName } = {
    details: false,
    enableState: false,
    fileName: "",
    ...options,
  };

  const validate = ajvErrors(new Ajv({ allErrors: true })).compile(SchemaJSON);
  const log = new Logger();

  if (validate(manifest)) {
    if (fileName !== "") log.debug(`\u2714 ${fileName}`);
    if (enableState) log.debug("No errors detected.");
    return true;
  }

  if (fileName !== "") log.debug(`\u2718 ${fileName}`);
  if (details && validate.errors) {
    log.warn(`\n${validate.errors?.length} errors detected :`);
    validate.errors?.forEach((e) => {
      log.warn(
        `-----\nWhere ? ${
          e.instancePath ? e.instancePath : "root"
        }\nError message : ${e.message ? e.message : ""}\n`
      );
    });
  } else if (enableState)
    log.log("The JSON file do not correspond to the schema.");
  return false;
}
