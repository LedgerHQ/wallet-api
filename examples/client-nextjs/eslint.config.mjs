import nextCoreWebVitals from "eslint-config-next/core-web-vitals";
import testingLibrary from "eslint-plugin-testing-library";

export default [
  // Mirror the previous `next/core-web-vitals` extend: the base config sets the
  // Next rules to "warn", while this preset enforces them as errors.
  ...nextCoreWebVitals,
  {
    // Pin the React version: eslint-plugin-react's auto-detection calls the
    // `context.getFilename()` API that ESLint 10 removed, which crashes the run.
    settings: {
      react: {
        version: "19",
      },
    },
  },
  {
    // Only use Testing Library lint rules in test files.
    files: ["**/__tests__/**/*.[jt]s?(x)", "**/?(*.)+(spec|test).[jt]s?(x)"],
    ...testingLibrary.configs["flat/react"],
  },
];
