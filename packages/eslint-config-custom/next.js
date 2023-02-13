module.exports = {
  extends: ["next", "turbo", "plugin:prettier/recommended"],
  rules: {
    "@next/next/no-html-link-for-pages": "off",
    "react/jsx-key": "off",
  },
};
