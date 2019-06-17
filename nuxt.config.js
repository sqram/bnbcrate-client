const pkg = require('./package')
const VuetifyLoaderPlugin = require('vuetify-loader/lib/plugin')


var envfile
  , apiUrl
  , apiHeaders

// From netlify.toml


// Define variables based on environment
if (process.env.NODE_ENV == 'production')
{
  envfile = '.env.prod'
  apiUrl = 'https://us-central1-bnbcrate1.cloudfunctions.net/'
  apiHeaders = { 'X-environment' : 'prod' }
}
else
{
  envfile = '.env.dev'
  apiUrl = 'http://localhost:8080/'
  apiHeaders = { 'X-environment' : 'dev' }
}


require('dotenv').config({ path: envfile }); 



module.exports = {
  // Allows us to use .env variables in the client
  env: {
    STRIPE_PUBLIC_KEY: process.env.STRIPE_PUBLIC_KEY,    
  },

  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons'
      }
    ],
    script: [
      { src: 'https://js.stripe.com/v3/', body: true}
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#00BCD4' },

  /*
  ** Global CSS
  */
  css: [
    '~/assets/style/app.styl'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    // Axios plugins sets header. currently not needed - was needed for GCFunctions
    //{ src: '~/plugins/axios.js'}
    { src: '~/plugins/localStorage.js', ssr: false }
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/axios',
    ['@nuxtjs/vuetify', { treeShake: false }]
  ],

  // Axios settings
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
    browserBaseURL: apiUrl,
    timeout: 1000
  },

  // Config for vuetify modules
  vuetify: {    
    theme: {
      primary: '#389ab9',
      secondary: '#b0bec5',
      accent: '#cd5c5c',    
    }
  },



  /*
  ** Build configuration
  */
  build: {
    transpile: ['vuetify/lib'],
    plugins: [new VuetifyLoaderPlugin()],
    loaders: {
      stylus: {
        import: ['~assets/style/variables.styl']
      }
    },
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  }
}
