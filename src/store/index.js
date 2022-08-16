import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions.js'
import mutations from './mutations.js'
import getters from './getters'
Vue.use(Vuex)
let state = {
  cartList: []
}
export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
  modules: {
  }
})
