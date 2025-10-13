// eslint.config.js
import js from "@eslint/js";
import globals from "globals";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import tseslint from "typescript-eslint";
import prettier from "eslint-plugin-prettier";

export default [
  js.configs.recommended,

  // JavaScript + JSX rules
  {
    files: ["**/*.{js,jsx}"],
    ignores: [
      "dist/**",
      "build/**",
      "node_modules/**",
      "eslint.config.js",
      "vite.config.js",
      "tailwind.config.js",
      "postcss.config.js",
    ],
    languageOptions: {
      ecmaVersion: "latest",
      globals: globals.browser,
      parserOptions: {
        ecmaFeatures: { jsx: true },
        sourceType: "module",
      },
    },
    plugins: { react, "react-hooks": reactHooks, prettier },
    rules: {
      ...react.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      "react/react-in-jsx-scope": "off",
      "react/prop-types": "off",
      "no-unused-vars": "off",
      "prettier/prettier": "warn",
    },
    settings: { react: { version: "detect" } },
  },

  // TypeScript + TSX rules
  {
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        projectService: true, // automatically finds tsconfig.json
      },
      globals: globals.browser,
    },
    plugins: { "@typescript-eslint": tseslint.plugin, prettier },
    rules: {
      ...tseslint.configs.recommended.rules,
      "@typescript-eslint/no-unused-vars": ["warn"],
      "prettier/prettier": "warn",
    },
  },
];
