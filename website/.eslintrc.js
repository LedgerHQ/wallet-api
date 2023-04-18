module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  parserOptions: {
    project: ["./tsconfig.json"],
    tsconfigRootDir: __dirname,
  },
};
