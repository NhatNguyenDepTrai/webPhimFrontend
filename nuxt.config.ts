// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    loading: {
      color: 'blue',
      height: '5px'
    },
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
    }
  },

  modules: [
    'nuxt-icon',
    '@nuxtjs/seo',
    '@nuxtjs/tailwindcss',
    'nuxt-swiper',
    '@nuxtjs/sitemap',
    'nuxt-simple-robots',
    'nuxt-schema-org',
    '@nuxt/image',
  ],
  sitemap: {
    cacheMaxAgeSeconds: 0,
    sources: ['/api/sitemap'],
  },
  image: {
    quality: 80,
    format: ['webp']
  },
  site: {
    url: 'https://www.ketromphim.com',
  },
  runtimeConfig: {
    public: {
      apiBase: 'https://api.ketromphim.com/api',
      // apiBase: 'http://api.webphim.demo/api',
    },
  },
  css: [
    '@/assets/css/main.css',
  ],
})
