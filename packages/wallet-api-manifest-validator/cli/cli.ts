#!/usr/bin/env node
import * as fs from "fs";
import path from "path";
import { validateManifest } from "../src/validator";

const printHelp = (): void =>
  console.log(`
-details : describe errors when they occur
-enableState : Result description (e.g. show in console "The JSON file do not correspond to the schema")
`);

/**
 *  CLI command of the validateManifest function
 *  @returns {void | never}
 */
const validateManifestCli = (): void | never => {
  try {
    if (process.argv[2] !== undefined) {
      const details = process.argv.includes("-details");
      const enableState = process.argv.includes("-enableState");
      if (process.argv[2] === "-help" || process.argv[2] === "-h") printHelp();
      else if (fs.lstatSync(process.argv[2]).isDirectory()) {
        fs.readdir(process.argv[2], (err, files) => {
          files.forEach((fileName) => {
            if (
              !validateManifest(
                JSON.parse(
                  fs.readFileSync(
                    path.join(process.cwd(), process.argv[2], fileName),
                    "utf-8"
                  )
                ) as JSON,
                { details, enableState, fileName }
              )
            ) {
              throw new Error(
                "A least one of the JSON files dont correspond to the schema"
              );
            }
          });
        });
      } else if (fs.lstatSync(process.argv[2]).isFile()) {
        if (
          !validateManifest(
            JSON.parse(
              fs.readFileSync(
                path.join(process.cwd(), process.argv[2]),
                "utf-8"
              )
            ) as JSON,
            { details, enableState, fileName: process.argv[2] }
          )
        ) {
          throw new Error(
            "A least one of the JSON files dont correspond to the schema"
          );
        }
      }
    } else
      throw new Error("Please specify a json file or an manifest directory");
  } catch (e) {
    console.log(e);
  }
};

validateManifestCli();
