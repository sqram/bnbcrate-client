
export default function ({ $axios, redirect }) {
   
  $axios.onRequest(config => {    
    config.headers.common['X-environment'] = 'development'    
  })
}