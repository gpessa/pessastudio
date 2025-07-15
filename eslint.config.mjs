import { FlatCompat } from '@eslint/eslintrc';
import simpleImportSort from "eslint-plugin-simple-import-sort";
import eslintPluginSortKeysFix from "eslint-plugin-sort-keys-fix";


const compat = new FlatCompat({
  // import.meta.dirname is available after Node.js v20.11.0
  baseDirectory: import.meta.dirname,
})


const eslintConfig = [
  {
    plugins: {
      'simple-import-sort': simpleImportSort,
    },
  },
  {
    plugins: {
      'sort-keys-fix': eslintPluginSortKeysFix
    },
  },
  ...compat.config({
    extends: ['next'],
    rules: {
      '@typescript-eslint/no-unused-vars': 'off',
      'react/no-unescaped-entities': 'off',
      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error',
      "sort-keys-fix/sort-keys-fix": "warn"

    },
  })
]

export default eslintConfig