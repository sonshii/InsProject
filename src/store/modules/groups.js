import axios from 'axios'
export default{
  state: {
    groups:  []
  },
  mutations: {
    updateGroups(state, groups){
      state.groups = groups
    }
  },
  actions: {
    async fetchGroups(ctx){
      const groups = await axios.get("http://188.18.184.136:8877/api/listGroups")

      ctx.commit('updateGroups', groups.data)
    }
  },
  getters:{
    allGroups(state){
      return state.groups
    }
  },
}