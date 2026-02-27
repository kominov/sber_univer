import js from '@eslint/js';
import prettierConfig from 'eslint-config-prettier';
import boundaries from "eslint-plugin-boundaries";
import importPlugin from 'eslint-plugin-import';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import { defineConfig, globalIgnores } from 'eslint/config';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    plugins: {
      boundaries
    },
    extends: [
      js.configs.recommended,
      ...tseslint.configs.recommended,
      boundaries.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
      importPlugin.flatConfigs.recommended,
      importPlugin.flatConfigs.typescript,
      prettierConfig
    ],
    languageOptions: {
      ecmaVersion: 'latest',
      globals: {
        ...globals.browser,
        ...globals.es2020
      },
      parser: tseslint.parser,
      parserOptions: {
        project: './tsconfig.eslint.json',
        tsconfigRootDir: import.meta.dirname
      }
    },
    rules: {
      "import/no-unresolved": ["error", { "ignore": ["\\.(svg|png|jpg|jpeg|gif)$"] }],
      "boundaries/element-types": [2, {
        default: "disallow",
        rules: [
          { from: "features", allow: ["shared", "entities"] },
          { from: "entities", allow: ["shared"] },
          { from: "widgets", allow: ["shared", "features", "entities"] },
          { from: "pages", allow: ["widgets", "features", "entities", "shared"] }
        ]
      }],
      "semi": ['error', 'always'],
      "indent": ['error', 2, { SwitchCase: 1 }]
    },
    settings: {
      react: {
        version: "detect"
      },
      "import/resolver": {
        typescript: true,
        node: true
      },
      "boundaries/elements": [
        { type: "shared", pattern: "src/shared/*" },
        { type: "entities", pattern: "src/entities/*" },
        { type: "features", pattern: "src/features/*" },
        { type: "widgets", pattern: "src/widgets/*" },
        { type: "pages", pattern: "src/pages/*" },
        { type: "app", pattern: "src/app/*" }
      ]
    }
  },
])
