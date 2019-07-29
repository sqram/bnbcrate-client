
const state = () => {

  return {
    show: false,
    content: 'login',   
  }  
}


/**
 * Toggles a dialog (shown/hidden), and changes
 * the content inside. Even though this isn't async,
 * we have an action for this because we clear errors
 * when dialog is toggled off. And we can't `commit(errors/CLEAR_ERROR)
 * from mutations. 
 * 
 * @param {Object} obj - object representing dialogs state
 * @param {Boolean} Obj.show  - true | false
 * @param {String} Obj.content - login | register | newAddress, etc
 */

const actions = {
  async toggleDialog ({ state,commit, rootState }, obj)
  {
    commit('TOGGLE_DIALOG', obj)
    if (obj.show)
    {
      // This can't go in `mutations`. If feature one day arrives,
      // get rid of this entire action and clear errors from this
      // this module's mutation
      commit('errors/CLEAR_ERRORS', {}, { root: true })
    }    
  }
}

/**
 * Toggles a dialog (shown/hidden), and changes
 * the content inside
 * 
 * @param {Object} obj - object representing dialogs state
 * @param {Boolean} Obj.show  - true | false
 * @param {String} Obj.content - login | register | newAddress, etc
 */
const mutations = {
  TOGGLE_DIALOG (state, obj)
  { 
    state.show = obj.show
    state.content = obj.content || null    
  },
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}