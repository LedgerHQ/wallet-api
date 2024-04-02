import { Logger } from "@ledgerhq/wallet-api-core";
import Ajv, { ErrorObject } from "ajv";
import ajvErrors from "ajv-errors";
import addFormats from "ajv-formats";
import { schema } from "./schema/schema";

export type OptionsParams = {
  details: boolean;
  enableState: boolean;
  fileName: string;
};

const ajv = new Ajv({ allErrors: true });
const ajvWithFormats = addFormats(ajv);
const validate = ajvErrors(ajvWithFormats).compile(schema);

/**
 *  Verify if your JSON meets the requirements for Wallet App manifest submission
 *  @param {JSON} manifest - json file.
 *  @returns {boolean}
 *
 *  @param {ValidateManifestParams=} options :
 *      @param {boolean=} details - describe errors when they occur
 *      @param {boolean=} enableState - enable result description (e.g. show in console "The JSON file do not correspond to the schema")
 *      @param {string=} fileName - file name, practical to validate multiple files via multiple calls
 */
export function validateManifest(
  manifest: JSON,
  { details, enableState, fileName }: Partial<OptionsParams> = {
    details: false,
    enableState: false,
    fileName: "",
  },
): boolean {
  const log = new Logger();

  if (validate(manifest)) {
    if (fileName !== undefined && fileName !== "")
      log.debug(`\x1b[32m \u2714 ${fileName}`);
    if (enableState) log.debug("No errors detected.");
    return true;
  }

  if (fileName !== undefined && fileName !== "")
    log.debug(`\x1b[31m \u2718 ${fileName}`);
  if (details && validate.errors) {
    const errorsPerCategories = validate.errors.reduce(
      (acc: Record<string, string[]>, e: ErrorObject<string>) => {
        if (e.instancePath !== undefined && e.message !== undefined) {
          if (acc[e.instancePath] === undefined)
            acc[e.instancePath] = [e.message];
          else acc[e.instancePath]?.push(e.message);
        }
        return acc;
      },
      {},
    );

    log.warn(`\n${Object.keys(errorsPerCategories).length} errors detected:`);

    Object.keys(errorsPerCategories).forEach((key) => {
      log.warn(`\n-----\nWhere? ${key}`);
      errorsPerCategories[key]?.forEach((message) => {
        log.warn(`Error message: ${message}`);
      });
    });
  } else if (enableState)
    log.log("The JSON file does not correspond to the schema.");
  return false;
}
