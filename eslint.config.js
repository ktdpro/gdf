import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import { defineConfig, globalIgnores } from 'eslint/config'
import nextPlugin from '@next/eslint-plugin-next';

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{js,jsx}'],
    extends: [
      js.configs.recommended,
      reactHooks.configs['recommended-latest'],
      // reactRefresh.configs.vite, // Removed Vite-specific config
    ],
    plugins: {
        '@next/next': nextPlugin,
    },
     rules: {
        // Removed incorrect '@next/next/no-unused-vars' rule
        '@next/next/no-html-link-for-pages': 'off', // Or configure as needed
        'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],
    },
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
  },
  {
    files: ['pages/_app.js'],
    rules: {
      'no-unused-vars': 'off',
    },
  },
])