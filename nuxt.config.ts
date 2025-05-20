// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  modules: [
      '@pinia/nuxt',
    '@nuxtjs/tailwindcss'
  ],
  app: {
    pageTransition: { name: 'page', mode: 'out-in' , name: 'fade' },
    layoutTransition: { name: 'layout', mode: 'out-in' ,    name: 'bounce',},
    head: {
      title: 'Shopping Store', // Set the default title for your application
      meta: [
        { charset: 'utf-8' },
        { 'http-equiv': 'pragma', content: 'no-cache' },
        { 'http-equiv': 'cache-control', content: 'no-cache' },
        { 'http-equiv': 'expires', content: '0' },
        { content: 'telephone=no', name: 'format-detection' }
      ],
      link: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Quicksand:wght@400;500;600;700&display=swap'
        }
      ],
    },
    pageTransition: {
      name: 'fade',
      mode: 'out-in' // default
    },
    layoutTransition: {
      name: 'slide',
      mode: 'out-in' // default
    },
  },

  runtimeConfig:{
    public:{
      appName:  'Shopping Store',
      instName:  '-----',
      apiBaseUlr: process.env.API_URL ,
      baseUrl: process.env.BASE_URL,
      apiID: process.env.NUXT_PUBLIC_CLIENT_ID,
      apiSecret: process.env.NUXT_PUBLIC_CLIENT_SECRET,

    }
  },

  css:[
    "~/assets/css/app.css",
    "~/assets/fontawesome/css/fontawesome.min.css",
    "~/assets/fontawesome/css/solid.min.css",
    "~/assets/fontawesome/css/brands.min.css",
  ],

})