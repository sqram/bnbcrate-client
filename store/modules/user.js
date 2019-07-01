const state = () => {
  // Use `email` to check if user is logged in
  return {
    email: null,
    jwt: null,
    stripeId: null,
    preferences: null,
    addresses: [],
    errors: {
      login: '',
      register: ''
    }
  }
}


const actions = {
  
  async register ({ commit, rootState }, obj)
  {
    let req = await this.$axios({
      method: 'post',
      url: `/user/register`,
      data: { email: obj.email, password: obj.password }
    })

    
    if (req.data.result)
    {
      commit('SET_USER_DATA', {
        email: req.data.email,
        jwt: req.data.payload.jwt,
        stripeId: req.data.payload.stripeId,
        addresses: req.data.payload.addresses,
        preferences: req.data.payload.preferences
      })

      commit('CLEAR_ERRORS')
      commit('dialogs/TOGGLE_DIALOG', {
         show: false,
      })
    }
    else
    {
      commit('SET_ERROR', { type: 'register', message: req.data.payload.message })
    }

    //this.$router.push('/dashboard')            
  },


  setUserData ({ commit }, obj)
  {    
    commit('SET_USER_DATA', obj)    
  },  
    
  updatePreferences ({ commit, dispatch, state }, obj)
  { 
    commit('UPDATE_PREFERENCES', obj)           
  },

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
    Object.keys(obj).forEach( key => {
      state[key] = obj[key] 
    })
  },

  /**
   * Update user's preferences, such as
   * receive email updates, etc.
   * 
   * @param {Obj} state 
   * @param {Obj} obj object of user's preferences
   */
  UPDATE_PREFERENCES (state, obj)
  {
    state.preferences = obj    
  },


  /**
   * Logs a user out by clearing localStorage
   * @param {Bool} obj.true if true, redirects to home page
   */
  LOGOUT (state, obj)
  {
    console.log('LOGGING USER OUT')
    window.localStorage.clear()
    for( let key in state)
    {
      state[key] = ''
    }
    if (obj.redirect)
    {
      window.location.href = '/'
    }
  },


  /**
   * Sets either a login error or a register error.
   * `obj.type` must be the type of error: 'login' or 'register'
   * `obj.message` is a string of the error message
   * 
   * @param {*} state 
   * @param {*} obj  an object with the type, and message.
   */
  SET_ERROR (state, obj)
  {
    state.errors[obj.type] = obj.message
  },

  CLEAR_ERRORS (state) {
    state.errors = {}
  }


}


export default {
  namespaced: true,
  state,
  actions,
  mutations
}