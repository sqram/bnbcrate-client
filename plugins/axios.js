export default function ({ $axios,env, redirect }) {
  
  $axios.onRequest(config => {    

    config.headers.common['X-environment'] = env

    // Add x-jwt to outgoing request headers, if vuex.jwt exists in localstore
    const jwt = JSON.parse(window.localStorage.getItem('vuex'))    
    if (jwt && jwt.user)
    {
      config.headers.common['X-jwt'] = jwt.user.jwt
    }
  })
}