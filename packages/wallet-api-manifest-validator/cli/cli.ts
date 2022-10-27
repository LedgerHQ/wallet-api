#!/usr/bin/env node
import { Command, Option, runExit } from "clipanion";
import * as fs from "fs";
import path from "path";
import { validateManifest } from "../src/validator";

// eslint-disable-next-line @typescript-eslint/no-floating-promises
runExit(
  class ValidateFile extends Command {
    static paths = [[`validate -h |`], Command.Default];

    fileOrDir = Option.String();

    details = Option.Boolean(`--details, -details`);

    enableState = Option.Boolean(`--enableState, -enableState`);

    throwError = Option.Boolean(`--throwError, -throwError`);

    SchemaJSON!: JSON;

    // TODO: Add the URL once the schema.json is pushed on the repo
    url = "SchemaURL";

    static usage = Command.Usage({
      category: `Help`,
      description: `The manifest Validator is a typescript package that checks if your manifest.json file meets the requirements for Ledger Live App manifest submission.`,
      examples: [
        [`blank : Simple validator test`, `$0 validate <MyFileOrDirectory>`],
        [
          `--details : Adding details`,
          `$0 validate <MyFileOrDirectory> --details`,
        ],
        [
          `--enableState : Adding little description`,
          `$0 validate <MyFileOrDirectory> --enableState`,
        ],
        [
          `--throwError : throw error if the test don't pass`,
          `$0 validate <MyFileOrDirectory> --throwError`,
        ],
      ],
    });

    processRecursivlyFilesInDeepFirstSearchPostOrder = (
      _depth: number,
      _fileOrDir: string
    ) => {
      if (fs.lstatSync(_fileOrDir).isFile()) {
        if (
          !validateManifest(
            JSON.parse(fs.readFileSync(path.join(_fileOrDir), "utf-8")) as JSON,
            {
              details: this.details,
              enableState: this.enableState,
              fileName: `${path.basename(
                path.dirname(_fileOrDir)
              )} : ${path.basename(_fileOrDir)}`,
            }
          ) &&
          this.throwError
        )
          throw new Error(
            "A least one of the JSON files dont correspond to the schema"
          );
      } else {
        const depth = _depth + 1;
        fs.readdir(_fileOrDir, (_err, filesOrDirs) => {
          filesOrDirs.forEach((element) => {
            this.processRecursivlyFilesInDeepFirstSearchPostOrder(
              depth,
              path.join(_fileOrDir, element)
            );
          });
        });
      }
    };

    async execute() {
      this.processRecursivlyFilesInDeepFirstSearchPostOrder(
        0,
        path.join(process.cwd(), this.fileOrDir)
      );
    }
  }
);
