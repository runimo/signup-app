// @ts-check
import pluginVueA11y from 'eslint-plugin-vuejs-accessibility'
import prettierPlugin from 'eslint-plugin-prettier'
import prettierConfig from 'eslint-config-prettier'
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
  ...pluginVueA11y.configs['flat/recommended'],
  {
    plugins: {
      prettier: prettierPlugin,
    },
    rules: {
      'prettier/prettier': 'error',
      'vue/no-deprecated-slot-attribute': 'off',
    },
  },
  prettierConfig,
)
