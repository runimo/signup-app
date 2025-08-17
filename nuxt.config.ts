// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      htmlAttrs: {
        lang: 'en',
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { 'http-equiv': 'Content-Language', content: 'en' },
      ],
      title: 'Veterinary Practice Management App',
    },
  },
  compatibilityDate: '2025-07-15',
  css: [
    '@nordhealth/css/lib/nord.min.css', // base nord css
    '@nordhealth/themes/lib/vet.css', // vet theme overrides
  ],
  devtools: {
    enabled: true,
  },
  modules: ['@nuxt/eslint'],
  ssr: false,
  vite: {
    vue: {
      template: {
        compilerOptions: {
          // treat all tags with a dash as custom elements
          isCustomElement: (tag) => tag.includes('-'),
        },
      },
    },
  },
})
