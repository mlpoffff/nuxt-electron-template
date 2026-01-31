// https://nuxt.com/docs/api/configuration/nuxt-config
const buildMode = process.env.BUILD_MODE

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',

  app: {
    head: {
      title: 'project-name'
    },
    baseURL: './',
    buildAssetsDir: 'assets',
  },

  ssr: false,

  nitro: {
    preset: buildMode === 'static'
        ? 'static'
        : 'node-server',
  },

  devtools: { enabled: true }
})
