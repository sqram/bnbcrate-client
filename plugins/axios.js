export default function ({ $axios,env, redirect }) {
  
  $axios.onRequest(config => {    
    config.headers.common['X-Environment'] = env.NODE_ENV
    // Add x-jwt to outgoing request headers, if vuex.jwt exists in localstore
    const jwt = JSON.parse(window.localStorage.getItem('vuex'))    
    if (jwt && jwt.user.id)
    {      
      config.headers.common['X-Jwt'] = jwt.user.jwt
    } else {
      console.log('No jwt or no user id')
    }
  })
}