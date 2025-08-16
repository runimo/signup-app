// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'
import prettierPlugin from 'eslint-plugin-prettier'
import prettierConfig from 'eslint-config-prettier'

export default withNuxt({
  plugins: {
    prettier: prettierPlugin,
  },
  ...prettierConfig,
  rules: {
    'prettier/prettier': 'error',
  },
})
