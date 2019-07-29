
export default function ({ $axios, redirect }) {
  
  $axios.onRequest(config => {    
    config.headers.common['X-environment'] = 'development'    

    // Add x-jwt to outgoing request headers, if vuex.jwt exists in localstore
    const jwt = JSON.parse(window.localStorage.getItem('vuex'))    
    if (jwt && jwt.user)
    {
      config.headers.common['X-jwt'] = jwt.user.jwt
    }
  })
}