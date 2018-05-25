module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: '国科政信',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: 'http://10.10.10.208:7001/public/favicon-gk.ico' },
      { rel: 'stylesheet', href: 'https://cdn.bootcss.com/animate.css/3.5.2/animate.min.css' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: '~/components/loading.vue',
  // loading: [{ color: 'red' }, '~/components/loading.vue'],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    },
    vendor: ['~/plugins/iView']
  },
  plugins: ['~/plugins/iView'],
  css: [
    '~/css/main.css',
    'iview/dist/styles/iview.css',
    '~/assets/font/iconfont.css'
  ]
}
