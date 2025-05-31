import globals from 'globals'
import pluginJs from '@eslint/js'
import stylistic from '@stylistic/eslint-plugin'

export default [
  pluginJs.configs.recommended,
  stylistic.configs.recommended,
  {
    files: ['**/*.js'],
  },
  {
    ignores: ['dist/'],
  },
  {
    languageOptions: {
      globals: globals.node,
    },
    rules: {
      'no-unused-vars': 'off',
    },
  },
]
