// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'Product Rating Badge Demo',
      meta: [
        { name: 'description', content: 'A demo of the Product Rating Badge component built with Nuxt 3.' },
        { name: 'keywords', content: 'Nuxt 3, Vue, Rating Badge, Demo' },
        { name: 'author', content: 'Saqib Sohail' },
        { property: 'og:title', content: 'Product Rating Badge Demo' },
        { property: 'og:description', content: 'A demo of the Product Rating Badge component built with Nuxt 3.' },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: '' },
        { property: 'og:image', content: '' }
      ]
    }
  },
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxtjs/google-fonts'],
  googleFonts: {
    families: {
      'Open Sans': [400, 600, 700]
    }
  },
  css: ['~/assets/css/main.scss'],
  typescript: {
    strict: true
  }
})
