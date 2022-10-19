import Ajv from "ajv";
import ajvErrors from "ajv-errors";
import { redBright as error, greenBright as success } from "cli-color";
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
    fileName: false,
    ...options,
  };

  const validate = ajvErrors(new Ajv({ allErrors: true })).compile(SchemaJSON);

  if (validate(manifest)) {
    if (fileName) console.log(success(fileName));
    if (enableState) console.log(success("No errors detected."));
    return true;
  }

  if (fileName) console.log(error(fileName));
  if (details && validate.errors) {
    console.log(`\n${validate.errors?.length} errors detected :`);
    validate.errors?.forEach((e) => {
      console.log(
        `-----\nWhere ? ${
          e.instancePath ? e.instancePath : "root"
        }\nError message : ${e.message ? e.message : ""}`
      );
    });
  } else if (enableState)
    console.log("The JSON file do not correspond to the schema.");
  return false;
}
