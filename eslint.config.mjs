import { defineConfig } from "eslint/config";
import vue from "eslint-plugin-vue";
import ts from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import prettier from "eslint-config-prettier";
import vueParser from "vue-eslint-parser";

export default defineConfig([
  {
    files: ["**/*.ts", "**/*.js"],
    ignores: ["dist/**", "node_modules/**"],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module"
      }
    },
    plugins: {
      "@typescript-eslint": ts
    },
    rules: {
      "@typescript-eslint/no-unused-vars": "warn",
      "@typescript-eslint/explicit-function-return-type": "off",
      "no-console": ["error", { allow: ["warn", "error"] }],
      "prefer-const": "error",
      semi: ["error", "always"]
    }
  },

  {
    files: ["**/*.vue"],
    languageOptions: {
      parser: vueParser,
      parserOptions: {
        parser: tsParser,
        ecmaVersion: "latest",
        sourceType: "module",
        extraFileExtensions: [".vue"]
      }
    },
    plugins: {
      vue
    },
    rules: {
      "vue/html-indent": ["error", 2],
      "vue/max-attributes-per-line": ["error", { singleline: 3 }],
      "vue/singleline-html-element-content-newline": "off",
      "vue/multi-word-component-names": "off"
    }
  },

  prettier
]);
