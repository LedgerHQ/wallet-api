import nextConfig from "@ledgerhq/eslint-config-custom/next";

export default [
  {
    ignores: [".next/**", "public/_pagefind/**", "*.config.{js,ts,mjs,cjs}"],
  },
  ...nextConfig,
  {
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      parserOptions: {
        project: ["./tsconfig.json"],
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
  {
    files: ["next-env.d.ts"],
    rules: {
      "@typescript-eslint/triple-slash-reference": "off",
    },
  },
];
