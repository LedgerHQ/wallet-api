module.exports = {
  extends: ["@ledgerhq/eslint-config-custom/next"],
  parserOptions: {
    project: ["./tsconfig.json"],
    tsconfigRootDir: __dirname,
    babelOptions: {
      presets: [require.resolve("next/babel")], // https://github.com/vercel/next.js/issues/40687#issuecomment-1264177674
    },
  },
  overrides: [
    {
      files: ["next-env.d.ts"],
      rules: {
        "@typescript-eslint/triple-slash-reference": "off",
      },
    },
  ],
  rules: {},
};
