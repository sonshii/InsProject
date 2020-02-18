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
    fetchGroups(ctx){
      const groups =  [
        { name: "Группа-1" },
        { name: "Группа-2" },
        { name: "Группа-3" },
        { name: "Группа-4" },
        { name: "Группа-5" },
        { name: "Группа-6" },
        { name: "Группа-7" },
        { name: "Группа-8" },
        { name: "Группа-9" },
        { name: "Группа-10" }
      ]

      ctx.commit('updateGroups', groups)
    }
  },
  getters:{
    allGroups(state){
      return state.groups
    }
  },
}