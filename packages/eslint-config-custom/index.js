module.exports = {
  extends: [
    "airbnb-base",
    "plugin:import/recommended",
    "plugin:prettier/recommended",
    "turbo",
  ],
  overrides: [
    {
      files: ["**/*.{ts,tsx}"],
      parser: "@typescript-eslint/parser",
      extends: [
        "airbnb-typescript/base",
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
        "plugin:prettier/recommended",
      ],
      // parserOptions: {
      //   project: ["./packages/**/tsconfig.json"],
      //   // tsconfigRootDir: __dirname,
      // },
      rules: {
        "import/prefer-default-export": "off",
        "no-void": "off",
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
    },
  ],
};
