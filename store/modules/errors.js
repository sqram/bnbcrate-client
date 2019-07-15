const state = () => {
  // Use `email` to check if user is logged in
  return {       
    login: '',
    register: ''    
  }
}



const mutations = {

  /**
   * Sets either a login error or a register error.
   * `obj.type` must be the type of error: 'login' or 'register'
   * `obj.message` is a string of the error message
   * 
   * @param {Object} state  this module's state
   * @param {Object} obj  an object with the type, and message
   */
  SET_ERROR (state, obj)
  {
    state[obj.type] = obj.message
  },

  /**
   * Clears all errors.
   * 
   * @param {Object} state  this module's state
   */
  CLEAR_ERRORS (state)
  {
    for (let key in state)
    {
      state[key] = ''
    }    
  }


}


export default {
  namespaced: true,
  state,
  mutations
}