import custom from "@ledgerhq/eslint-config-custom";

// Root flat config. Per-workspace `eslint.config.mjs` files own their own
// linting under turbo; this root config is what `lint-staged` uses when it runs
// `eslint --fix` on individual staged files from the repo root.
export default [
  {
    ignores: [
      "**/dist/**",
      "**/lib/**",
      "**/lib-es/**",
      "**/bin/**",
      "**/.next/**",
      "**/coverage/**",
      "**/public/_pagefind/**",
    ],
  },
  ...custom,
  {
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      parserOptions: {
        // projectService resolves each staged file's nearest tsconfig, which is
        // what we need when eslint is invoked from the repo root.
        project: false,
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
];
