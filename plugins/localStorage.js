import createPersistedState from 'vuex-persistedstate'

export default ({ store, isHMR }) => {
  if (isHMR) return;
  window.onNuxtReady(() => {
    createPersistedState({        
      paths: ['user',  'cart', 'checkout'],
      storage: sessionStorage 
    })(store)
  })
}