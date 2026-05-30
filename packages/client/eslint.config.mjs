import custom from "@ledgerhq/eslint-config-custom";

export default [
  ...custom,
  {
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      parserOptions: {
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
];
