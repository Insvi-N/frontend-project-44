import { defineConfig } from "eslint/config";
import globals from "globals";
import js from "@eslint/js";
import stylistic from '@stylistic/eslint-plugin'

export default defineConfig([
  { 
    files: ["**/*.js"], 
    languageOptions: { globals: globals.browser } 
  },
  { 
    files: ["**/*.js"], 
    plugins: { 
      js, 
      '@stylistic': stylistic 
    }, 
    extends: [
      "js/recommended"
    ], 
    rules: {
      '@stylistic/indent': ['error', 2]
    }
  },
]);
