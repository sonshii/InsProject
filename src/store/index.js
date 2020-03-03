import Vue from 'vue'
import Vuex from 'vuex'
import clients from './modules/clients'
import groups from './modules/groups'
Vue.use(Vuex)

export default new Vuex.Store({
  
  modules: {
    clients,
    groups
  }
})
