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
    editClients(state, clientsData){
      const index = state.clients.findIndex(clients => clients.id === clientsData.id);
      if (index !== -1) {
        state.clients.splice(index, 1, clientsData);
      }
    }
  },
  actions: {
    async fetchClients(ctx){
      const clients = await axios.get("http://localhost:3000/clients")
   
      ctx.commit('updateClients', clients.data)
    },
    async addClients({commit},clientsData){
     
      const clients = await axios.post("http://localhost:3000/clients",clientsData);

      commit('newClients',clients.data)
    },
    // async deleteClients({ commit }, id) {
    //   await axios.delete(`http://localhost:3000/clients/${id}`);
  
    //   commit('removeClients', id);
    // },
    async updateClients({ commit }, clientsData) {
      const clients = await axios.put(
        `http://localhost:3000/clients/${clientsData.id}`,
        clientsData
      );
  
      console.log(clients.data);
  
      commit('editClients', clients.data);
    }
  },
  getters:{
    allClients(state){
      return state.clients
    }
  },
}