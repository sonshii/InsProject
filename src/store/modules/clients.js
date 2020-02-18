export default{
  state: {
    clients: []
  },
  mutations: {
    updateClients(state, clients){
      state.clients = clients
    }
  },
  actions: {
    fetchClients(ctx){
      const clients = [
        {
          name: "1",
          number: "+7 (912) 632-32-32",
          group: "ГАЗПРОМ"
        },
        {
          name: "2",
          number: "+7 (912) 632-32-32",
          group: "ГАЗПРОМ"
        },
        {
          name: "3",
          number: "+7 (912) 632-32-32",
          group: "ГАЗПРОМ"
        },
        {
          name: "4",
          number: "+7 (912) 632-32-32",
          group: "ГАЗПРОМ"
        },
        {
          name: "5",
          number: "+7 (912) 632-32-32",
          group: "ГАЗПРОМ"
        },
        {
          name: "6",
          number: "+7 (912) 632-32-32",
          group: "ГАЗПРОМ"
        },
        {
          name: "7",
          number: "+7 (912) 632-32-32",
          group: "ГАЗПРОМ"
        },
        {
          name: "8",
          number: "+7 (912) 632-32-32",
          group: "ГАЗПРОМ"
        },
        {
          name: "9",
          number: "+7 (912) 632-32-32",
          group: "ГАЗПРОМ"
        },
        {
          name: "10",
          number: "+7 (912) 632-32-32",
          group: "ГАЗПРОМ"
        }
      ]
      ctx.commit('updateClients', clients)
    }
  },
  getters:{
    allClients(state){
      return state.clients
    }
  },
}