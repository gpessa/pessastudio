import { FlatCompat } from '@eslint/eslintrc'
import simpleImportSort from "eslint-plugin-simple-import-sort";


const compat = new FlatCompat({
  // import.meta.dirname is available after Node.js v20.11.0
  baseDirectory: import.meta.dirname,
})

console.log(simpleImportSort);

const eslintConfig = [{
  plugins: {
    'simple-import-sort': simpleImportSort
  },
},
...compat.config({
  extends: ['next'],
  rules: {
    '@typescript-eslint/no-unused-vars': 'off',
    'react/no-unescaped-entities': 'off',
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error'

  },
}),
]

export default eslintConfig