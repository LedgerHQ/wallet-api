import custom from "@ledgerhq/eslint-config-custom";

export default [
  {
    ignores: ["dist/**", "*.config.{js,ts,mjs,cjs}"],
  },
  ...custom,
  {
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      parserOptions: {
        project: ["./tsconfig.json"],
        tsconfigRootDir: import.meta.dirname,
      },
    },
    rules: {
      "@typescript-eslint/no-unused-vars": [
        "error",
        { ignoreRestSiblings: true },
      ],
    },
  },
];
