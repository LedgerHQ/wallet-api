import Ajv, { ErrorObject } from "ajv";
import ajvErrors from "ajv-errors";
import { Logger } from "@ledgerhq/wallet-api-core";
import SchemaJSON from "./schema/schema.json";

export interface OptionsParams {
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
  options?: OptionsParams | undefined
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
    if (fileName !== "") log.debug(`\x1b[32m \u2714 ${fileName}`);
    if (enableState) log.debug("No errors detected.");
    return true;
  }

  if (fileName !== "") log.debug(`\x1b[31m \u2718 ${fileName}`);
  if (details && validate.errors) {
    const errorsPerCategories = validate.errors.reduce(
      (
        acc: {
          [key: string]: string[];
        },
        e: ErrorObject<string>
      ) => {
        if (e.instancePath !== undefined && e.message !== undefined) {
          if (acc[e.instancePath] === undefined)
            acc[e.instancePath] = [e.message];
          else acc[e.instancePath]?.push(e.message);
        }
        return acc;
      },
      {}
    );

    log.warn(`\n${Object.keys(errorsPerCategories).length} errors detected :`);

    Object.keys(errorsPerCategories).forEach((key) => {
      log.warn(`\n-----\nWhere ? ${key}`);
      errorsPerCategories[key]?.forEach((message) => {
        log.warn(`Error message : ${message}`);
      });
    });
  } else if (enableState)
    log.log("The JSON file do not correspond to the schema.");
  return false;
}
