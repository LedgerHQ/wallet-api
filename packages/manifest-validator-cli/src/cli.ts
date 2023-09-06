#!/usr/bin/env node
import { Command, Option, runExit } from "clipanion";
import * as fs from "fs";
import path from "path";
import { validateManifest } from "@ledgerhq/wallet-api-manifest-validator";

void runExit(
  class ValidateFile extends Command {
    static override paths: string[][] = [[`validate -h |`], Command.Default];

    fileOrDir = Option.String();

    details = Option.Boolean(`--details, -d`);

    enableState = Option.Boolean(`--enableState, -s`);

    throwError = Option.Boolean(`--throwError, -e`);

    static override usage = Command.Usage({
      category: `Help`,
      description: `The manifest Validator is a typescript package that checks if your manifest.json file meets the requirements for a Wallet App manifest submission.`,
      examples: [
        [`blank: Simple validator test`, `$0 validate <MyFileOrDirectory>`],
        [
          `--details: Adding details`,
          `$0 validate <MyFileOrDirectory> --details`,
        ],
        [
          `--enableState: Adding little description`,
          `$0 validate <MyFileOrDirectory> --enableState`,
        ],
        [
          `--throwError: Throws error if the test doesn't pass`,
          `$0 validate <MyFileOrDirectory> --throwError`,
        ],
      ],
    });

    processRecursivlyFilesInDeepFirstSearchPostOrder = (
      _depth: number,
      _fileOrDir: string,
    ) => {
      if (fs.lstatSync(_fileOrDir).isFile()) {
        if (
          !validateManifest(
            JSON.parse(fs.readFileSync(path.join(_fileOrDir), "utf-8")) as JSON,
            {
              details: this.details,
              enableState: this.enableState,
              fileName: `${path.basename(
                path.dirname(_fileOrDir),
              )} : ${path.basename(_fileOrDir)}`,
            },
          ) &&
          this.throwError
        )
          throw new Error(
            "A least one of the JSON files doesn't correspond to the schema",
          );
      } else {
        const depth = _depth + 1;
        fs.readdir(_fileOrDir, (_err, filesOrDirs) => {
          filesOrDirs.forEach((element) => {
            this.processRecursivlyFilesInDeepFirstSearchPostOrder(
              depth,
              path.join(_fileOrDir, element),
            );
          });
        });
      }
    };

    execute() {
      return Promise.resolve(
        this.processRecursivlyFilesInDeepFirstSearchPostOrder(
          0,
          path.join(process.cwd(), this.fileOrDir),
        ),
      );
    }
  },
);
