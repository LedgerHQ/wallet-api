module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  parserOptions: {
    project: true,
    tsconfigRootDir: __dirname,
  },
  rules: {
    "no-underscore-dangle": "off",
    "class-methods-use-this": "warn",
  },
};
