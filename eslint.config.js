import js from '@eslint/js';
import boundaries from "eslint-plugin-boundaries";
import importPlugin from 'eslint-plugin-import';
import reactPlugin from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import { defineConfig, globalIgnores } from 'eslint/config';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default defineConfig([
  globalIgnores(['dist', 'node_modules', 'public', 'build']),
  {
    files: ['**/*.{ts,tsx}'],
    plugins: {
      boundaries,
      react: reactPlugin
    },
    extends: [
      js.configs.recommended,
      ...tseslint.configs.recommended,
      boundaries.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
      importPlugin.flatConfigs.recommended,
      importPlugin.flatConfigs.typescript,
    ],
    languageOptions: {
      ecmaVersion: 'latest',
      globals: {
        ...globals.browser,
        ...globals.es2020
      },
      parser: tseslint.parser,
      parserOptions: {
        project: './tsconfig.json',
        tsconfigRootDir: import.meta.dirname
      }
    },
    rules: {
      ...js.configs.recommended.rules,
      ...tseslint.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,

      'no-undef': 'off', // отключаем, т.к. TS сам проверяет типы и переменные

      'semi': ['error', 'always'],
      'indent': ['error', 2, {
        SwitchCase: 1,
        MemberExpression: 1,
        FunctionDeclaration: { parameters: 'first' },
        FunctionExpression: { parameters: 'first' },
        CallExpression: { arguments: 'first' },
        ArrayExpression: 'first',
        ObjectExpression: 'first',
        ImportDeclaration: 'first',
        offsetTernaryExpressions:true,
        flatTernaryExpressions: false, 
      }],
      'operator-linebreak': ['error', 'before', {
        overrides: { '?': 'before', ':': 'before' }
      }],
      'space-infix-ops': ['error'],
      'no-prototype-builtins': 'warn',
      'no-unused-vars': 'off', // заменено TS-версией

      '@typescript-eslint/no-unused-expressions': 'off',
      '@typescript-eslint/ban-ts-comment': 'warn',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/ban-types': 'off',
      '@typescript-eslint/no-unused-vars': [
        'error',
        { varsIgnorePattern: '^_', argsIgnorePattern: '^_' },
      ],

      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
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

