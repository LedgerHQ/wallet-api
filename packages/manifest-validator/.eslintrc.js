module.exports = {
  env: {
    es2021: true,
    node: true,
    jest: true,
  },
  parserOptions: {
    project: ["./tsconfig.json"],
    tsconfigRootDir: __dirname,
  },
};
