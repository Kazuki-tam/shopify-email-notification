const eslint = require("@eslint/js");
const tseslint = require("typescript-eslint");
const jestPlugin = require("eslint-plugin-jest");
const globals = require("globals");

module.exports = tseslint.config(
  {
    ignores: [
      "**/coverage/",
      "**/node_modules/",
      "**/*.min.js",
      "*.config.js",
      "*.config.ts",
      ".eslintrc.js",
      "tsconfig.json",
    ],
  },
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  ...tseslint.configs.recommendedTypeChecked,
  {
    languageOptions: {
      parserOptions: {
        project: "./tsconfig.json",
        tsconfigRootDir: __dirname,
      },
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
  },
  {
    files: ["**/*.spec.ts", "**/*.test.ts", "**/__tests__/**/*.ts"],
    ...jestPlugin.configs['flat/recommended'],
    rules: {
      ...jestPlugin.configs['flat/recommended'].rules,
      "jest/prefer-expect-assertions": "off",
    },
  },
  {
    rules: {
      "no-var": "error",
      "no-console": "warn",
    },
  }
);
