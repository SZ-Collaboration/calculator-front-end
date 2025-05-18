import js from "@eslint/js";
import globals from "globals";

export default [
  {
    files: ["/*.js"],
    languageOptions: {
      globals: {
        ...globals.browser,
      },
    },
    rules: {
      ...js.configs.recommended.rules,
      "no-unused-vars": ["error", { vars: "all" }],
    },
  },
];
