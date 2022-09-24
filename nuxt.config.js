export default {
  loading: '~/components/Loading.vue',
  router: {
    extendRoutes(routes) {
      routes.push({
        path: '/',
        component: '~/pages/loqigue/index.vue',
      })
    },
  },
  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  mode: 'spa',
  ssr: false,
  server: {
    port: process.env.PORT || 3000,
    host: process.env.HOST || 'localhost',
  },
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: 'server',
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    title: 'Logique',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || '',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/icon.jpg' }],
  },
  /*
   ** Global CSS
   */
  css: [
    '~/assets/scss/app.scss',
    'quill/dist/quill.core.css',
    'quill/dist/quill.snow.css',
    'quill/dist/quill.bubble.css',
    '~/assets/css/styles.css',
    '~layouts/global.css',
  ],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: [
    '~/plugins/fireauth.js',
    '~/plugins/fakeauth.js',
    '~/plugins/simplebar.js',
    '~/plugins/vue-click-outside.js',
    '~/plugins/vuelidate.js',
    '~/plugins/draggable.js',
    '~/plugins/vue-slidebar.js',
    '~/plugins/tour.js',
    '~/plugins/vue-lightbox.js',
    '~/plugins/mask.js',
    '~/plugins/quill-editor.js',
    '~/plugins/chartist.js',
    '~/plugins/vue-googlemap.js',
    '~/plugins/string-filter',
    '~/plugins/vue-select.js',
    '~/plugins/vue-debounce.js',
    '~/plugins/vue-good-table.js',
    '~/plugins/axios-port.js',
    // '~/plugins/vue-terbilang.js',
  ],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: ['@nuxtjs/eslint-module'],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://bootstrap-vue.js.org
    'bootstrap-vue/nuxt',
    'nuxt-i18n',
    '@nuxtjs/auth-next',
    '@nuxtjs/axios',
    '@nuxtjs/moment',
  ],
  i18n: {
    locales: ['en', 'fr', 'es', 'ar'],
    defaultLocale: 'en',
    vueI18n: {
      fallbackLocale: 'en',
      messages: {
        en: require('./locales/en.json'),
        fr: require('./locales/fr.json'),
        es: require('./locales/es.json'),
        ar: require('./locales/ar.json'),
        zh: require('./locales/zh.json'),
      },
    },
  },
  axios: {
    baseURL: process.env.API_URL, // Used as fallback if no runtime config is provided
  },
  // auth: {
  //   rewriteRedirects: true,
  //   redirect: {
  //     login: '/auth/login/',
  //     logout: '/auth/login/',
  //     // home: '/dashboard/',
  //   },
  //   strategies: {
  //     local: {
  //       token: {
  //         property: 'jwt',
  //         required: true,
  //         type: 'Bearer',
  //       },
  //       user: false,
  //       endpoints: {
  //         login: {
  //           url: 'api/auth/local',
  //           method: 'post',
  //         },
  //         logout: {},
  //         user: { url: '/api/users/me', method: 'get' },
  //       },
  //     },
  //   },
  // },
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {},
  env: {
    auth: process.env.VUE_APP_DEFAULT_AUTH,
    apikey: process.env.VUE_APP_APIKEY,
    authdomain: process.env.VUE_APP_AUTHDOMAIN,
    databaseurl: process.env.VUE_APP_DATABASEURL,
    projectid: process.env.VUE_APP_PROJECTId,
    storgebucket: process.env.VUE_APP_STORAGEBUCKET,
    message: process.env.VUE_APP_MESSAGINGSENDERID,
    appid: process.env.VUE_APP_APPId,
    measurement: process.env.VUE_APP_MEASUREMENTID,
  },
  publicRuntimeConfig: {
    API_URL: process.env.API_URL,
  },
}
