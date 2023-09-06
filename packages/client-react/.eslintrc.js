module.exports = {
  env: {
    es2021: true,
    node: true,
    browser: true,
  },
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  parserOptions: {
    project: true,
    tsconfigRootDir: __dirname,
  },
  settings: {
    "import/resolver": {
      node: {
        extensions: [".ts", ".tsx"],
      },
    },
  },
  rules: {
    "no-underscore-dangle": "off",
    "class-methods-use-this": "warn",
  },
};
