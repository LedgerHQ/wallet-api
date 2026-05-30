module.exports = {
  extends: ["@ledgerhq/eslint-config-custom"],
  env: {
    node: true,
    browser: true,
  },
  parserOptions: {
    project: ["./tsconfig.json"],
    tsconfigRootDir: __dirname,
  },
  rules: {
    "@typescript-eslint/no-unused-vars": [
      "error",
      { ignoreRestSiblings: true },
    ],
  },
};
