// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    'nuxt-font-loader',
  ],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/_mixins.scss" as *;'
        }
      }
    }
  },
  fontLoader: {
    autoImport : true,
    local: [{
        src: '/fonts/SFProDisplay/SFPRODISPLAYREGULAR.OTF',
        family: 'SF Pro Display',
        class: 'font-sfpro'
      }]
  },
  })