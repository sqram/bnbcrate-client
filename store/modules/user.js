const state = () => {
  // Use `jwt` to check if user is logged in
  return {
    email: null,
    jwt: null,
    stripeId: null,
    preferences: null,
    addresses: []
  }
}


const actions = {
  
  async register ({ state,commit, rootState }, obj)
  {
    let req = await this.$axios({
      method: 'post',
      url: `/user/register`,
      data: { email: obj.email, password: obj.password }
    })
    
    if (req.data.result)
    {
      commit('SET_USER_DATA', req.data.payload)
      commit('errors/CLEAR_ERRORS', { }, { root: true })
      commit('dialogs/TOGGLE_DIALOG', { show: false }, { root: true })      
      this.$router.push('/dashboard')
    }
    else
    {      
      commit('errors/SET_ERROR', { type: 'register', message: req.data.payload.message }, { root: true })
    }    
  },


  setUserData ({ commit }, obj)
  {    
    commit('SET_USER_DATA', obj)    
  },  
    
  async updateNewsletterSettings ({ commit, dispatch, state }, obj)
  { 
    commit('UPDATE_NEWSLETTER_SETTINGS', obj)           
  },

  /*
  async addAddress ({ commit, dispatch, state }, obj)
  {
    let req = await this.$axios({
      method: 'post',
      url: `/user/address`,
      data: obj
    })
    
    if (req.data.result)
    {
      this.formdata.color = 'success'          
      
      state.addresses.push(res.data.payload.address)                 
      //this.$store.commit('SET_USER_DATA', user)
    }
    else
    {          
      this.formdata.color = 'error'
    }
    this.formdata.show = 1
    this.formdata.text = res.data.payload.message
    this.isSubmitting = false
  
  },
  */

  async getAddresses ({ commit, dispatch })
  {
    let req = await this.$axios({
      url: `/user/addresses`,      
      method: 'get'
    })

    if (!req.data.result)
    {

    }

    if (req.data.payload.addresses.length)
    {

    }
  }

} 
// end actions



const mutations = {

  /**
   * When a user logs in or register, the server's
   * response becomes this data. It's the user's information.
   * Keep in mind that vuexPersistedState will filter out some
   * of the data. It'll only keep the ones we specify via `paths`
   * Since user state data is 1 level deep, `obj` can be just a key:value
   * 
   * @param {Obj} state 
   * @param {Obj} obj - Object of k:v pair received from server
   */
  SET_USER_DATA (state, obj)
  {   
    console.log(obj)
    Object.keys(obj).forEach( key => {
      state[key] = obj[key] 
    })
  },


  /**
   * Update user's preferences, such as
   * receive email updates, etc.
   * 
   * @param {Object} state 
   * @param {Boolean} determines if user newsletter is on or off
   */
  UPDATE_NEWSLETTER_SETTINGS (state, obj)
  {
    state.preferences = obj    
  },


  /**
   * Logs a user out by clearing localStorage
   * 
   * @param {Boolean} obj.true if true, redirects to home page
   */
  LOGOUT (state, obj)
  {
    for (let key in state)
    {
      state[key] = ''
    }    
    
    if (obj.redirect)
    {
      window.location.href = '/'
    }
  }
}


export default {
  namespaced: true,
  state,
  actions,
  mutations
}