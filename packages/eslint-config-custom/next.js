const nextConfig = require("eslint-config-next");
// eslint-config-turbo/flat is published as an ESM default export, so it arrives
// wrapped as `{ default: [...] }` when loaded through CommonJS `require`.
const turboModule = require("eslint-config-turbo/flat");
const turbo = turboModule.default ?? turboModule;
const eslintConfigPrettier = require("eslint-config-prettier");

// eslint-config-next 16 ships a native flat config (array). It targets ESLint 9
// and works with ESLint 10; it is a dev-only lint dependency and does not
// require the Next.js runtime to be on v16.
module.exports = [
  ...nextConfig,
  ...turbo,
  {
    // Pin the React version: eslint-plugin-react's auto-detection calls the
    // `context.getFilename()` API that ESLint 10 removed, which crashes the run.
    settings: {
      react: {
        version: "19",
      },
    },
    rules: {
      "@next/next/no-html-link-for-pages": "off",
      "react/jsx-key": "off",
    },
  },
  // Must come last: turns off stylistic rules that conflict with Prettier.
  eslintConfigPrettier,
];
