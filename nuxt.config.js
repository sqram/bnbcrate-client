const VuetifyLoaderPlugin = require('vuetify-loader/lib/plugin')


var envfile
  , apiUrl


// Define variables based on environment
if (process.env.NODE_ENV == 'production')
{
  // .env file not used in prod - was used when this was in appengine
  // Since it's Function based now, .env doesn't load.
  //envfile = '.env.prod'
  apiUrl = 'https://us-central1-bnbcrate1.cloudfunctions.net/app/'
  apiHeaders = { 'X-environment' : 'production' }
}
else
{
  // this env file still used for dev
  envfile = '.env.dev'
  apiUrl = 'http://localhost:8080/'
  apiHeaders = { 'X-environment' : 'development' }
}

// If netlify is building this, and BUILD_SOURCE is 'netlify',
// always use dev endpoint
if (process.env.BUILD_SOURCE == 'netlify')
{
  apiHeaders = { 'X-environment' : 'development' }
  apiUrl = 'https://us-central1-bnbcrate-dev.cloudfunctions.net/app/'
}

require('dotenv').config({ path: envfile }); 

console.log('----------------------')
console.log(process.env.NODE_ENV )
console.log(`Build Source: ${process.env.BUILD_SOURCE}`)





module.exports = {
  // Allows us to use .env variables in the client
  // process.env.STRIPE_PUBLIC_KEY will be set by the .env.dev file when in dev
  env: {
    STRIPE_PUBLIC_KEY: process.env.STRIPE_PUBLIC_KEY || 'pk_live_caRggoikgPngiPfPqRzdGgta',
    NODE_ENV: (process.env.NODE_ENV  === 'development') ? 'development' : 'production'
  },

  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: 'bnbcrate',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'toiletries for airbnb, vrbo, homeaway' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Material+Icons'
        //href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons'
      }
    ],
    script: [
      { src: 'https://js.stripe.com/v3/', body: true},      
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
    // Axios plugins sets header
    { src: '~/plugins/axios.js'},
    //{ src: '~/plugins/vuetify.js'},
    { src: '~/plugins/localStorage.js', ssr: false }
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [    
    '@nuxtjs/axios',    
    //['@nuxtjs/vuetify', { treeShake: false }]
  ],

  buildModules: [
    ['@nuxtjs/google-analytics', {
      id: 'UA-76274804-7'
    }]
  ],
  // To see google analyitcs in dev mode:
  debug: {
    enabled: true,
    sendHitTask: true
  },

  devModules: [
    '@nuxtjs/vuetify'
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
      themes: {
        light: {
          primary: '#389ab9', // primary blue (buttons, etc)
          secondary: '#b0bec5', // used for subtle text
          accent: '#cd5c5c'
        }
      }
    }
  },



  /*
  ** Build configuration
  */
  build: {
    
    
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
