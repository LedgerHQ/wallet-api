const js = require("@eslint/js");
const globals = require("globals");
const tseslint = require("typescript-eslint");
const eslintConfigPrettier = require("eslint-config-prettier");
const reactHooks = require("eslint-plugin-react-hooks");
// eslint-config-turbo/flat is published as an ESM default export, so it arrives
// wrapped as `{ default: [...] }` when loaded through CommonJS `require`.
const turboModule = require("eslint-config-turbo/flat");
const turbo = turboModule.default ?? turboModule;

/**
 * Shared flat config (ESLint 9/10). Consumed from each workspace's
 * `eslint.config.mjs` via `import custom from "@ledgerhq/eslint-config-custom"`.
 *
 * Consumers that lint TypeScript must point the type-aware rules at their own
 * tsconfig, e.g.:
 *
 *   languageOptions: {
 *     parserOptions: { project: true, tsconfigRootDir: import.meta.dirname }
 *   }
 */
module.exports = [
  js.configs.recommended,
  ...turbo,
  reactHooks.configs.flat["recommended-latest"],
  {
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: "module",
      globals: {
        ...globals.node,
        ...globals.browser,
        Atomics: "readonly",
        SharedArrayBuffer: "readonly",
      },
    },
  },
  ...tseslint.config({
    files: ["**/*.{ts,tsx}"],
    extends: [
      ...tseslint.configs.recommendedTypeChecked,
      ...tseslint.configs.stylisticTypeChecked,
    ],
    languageOptions: {
      parserOptions: {
        project: true,
      },
    },
    rules: {
      "no-void": "off",
      "no-underscore-dangle": "off",
      "class-methods-use-this": "warn",
      "@typescript-eslint/consistent-type-definitions": ["error", "type"],
      "@typescript-eslint/ban-ts-comment": "warn",
      "@typescript-eslint/no-unsafe-member-access": "warn",
      "@typescript-eslint/no-shadow": "warn",
      "@typescript-eslint/require-await": "warn",
      "@typescript-eslint/no-unsafe-assignment": "warn",
      "@typescript-eslint/no-unsafe-return": "warn",
      "@typescript-eslint/no-unsafe-call": "warn",
      "@typescript-eslint/no-unused-vars": [
        "error",
        { argsIgnorePattern: "^_" },
      ],
    },
  }),
  {
    // Rules newly surfaced as *errors* by the ESLint 10 / typescript-eslint v8 /
    // eslint-plugin-react-hooks v7 upgrade. Downgraded to "warn" so this tooling
    // migration stays free of source/behavioural changes (several of these are
    // not safely auto-fixable in published packages). Triage and fix — then drop
    // this block — in a dedicated lint-cleanup follow-up.
    files: ["**/*.{ts,tsx}"],
    rules: {
      "@typescript-eslint/prefer-promise-reject-errors": "warn",
      "@typescript-eslint/no-misused-promises": "warn",
      "@typescript-eslint/prefer-nullish-coalescing": "warn",
      "@typescript-eslint/no-duplicate-type-constituents": "warn",
      "@typescript-eslint/no-empty-object-type": "warn",
      "@typescript-eslint/no-unnecessary-type-assertion": "warn",
      "@typescript-eslint/no-unused-expressions": "warn",
      "react-hooks/refs": "warn",
    },
  },
  // Must come last: turns off stylistic rules that conflict with Prettier.
  eslintConfigPrettier,
];
