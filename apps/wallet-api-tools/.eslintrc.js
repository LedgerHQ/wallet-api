module.exports = {
  extends: ["@ledgerhq/eslint-config-custom/next"],
  parserOptions: {
    project: ["./tsconfig.json"],
    tsconfigRootDir: __dirname,
    babelOptions: {
      presets: [require.resolve("next/babel")], // https://github.com/vercel/next.js/issues/40687#issuecomment-1264177674
    },
  },
  rules: {
    "@typescript-eslint/no-unused-vars": [
      "error",
      { ignoreRestSiblings: true },
    ],
  },
};
