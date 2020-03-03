import axios from 'axios'
export default{
  state: {
    clients: []
  },
  mutations: {
    updateClients(state, clients){
      state.clients = clients
    },
    newClients(state, client){
      state.clients.push(client);
    },
    //removeClients: (state,id) => state.clients = state.clients.filter(clients => clients.id !== id)

  },
  actions: {
    async fetchClients(ctx){
      const clients = await axios.get("http://localhost:3000/clients")
   
      ctx.commit('updateClients', clients.data)
    },
    async addClients({commit},clientsData){
     
      const clients = await axios.post("http://localhost:3000/clients",{name: clientsData.name,isActive: clientsData.isActive,group:clientsData.group,email: clientsData.email,phone: clientsData.phone,address: clientsData.address});

      commit('newClients',clients.data)
    },
    async deleteClients({ commit }, id) {
      await axios.delete(`http://localhost:3000/clients/${id}`);
  
      commit('removeClients', id);
    },
  },
  getters:{
    allClients(state){
      return state.clients
    }
  },
}