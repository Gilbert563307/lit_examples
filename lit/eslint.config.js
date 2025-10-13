import js from '@eslint/js';
import globals from 'globals';
import { defineConfig } from 'eslint/config';

export default defineConfig([
  {
    files: ['**/*.{js,mjs,cjs}'],
    languageOptions: {
      globals: globals.browser,
      ecmaVersion: 'latest',
    },
    plugins: { js },
    rules: {
      ...js.configs.all.rules,
      'sort-keys': 'off',
      'sort-imports': 'off',
      // 'capitalized-comments': 'warn',
      // 'no-inline-comments': 'warn',
      'one-var': ['error', 'never'],
      'no-warning-comments': 'off',
      'no-console': 'warn',
    }

  },
]);