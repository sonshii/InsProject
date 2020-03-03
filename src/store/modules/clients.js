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
    async addClients({commit},name,isActive,group,email,phone,address){
      console.log(this.name,this.isActive,
        this.group,
        this.email,
        this.phone,
        this.address);
      
      const clients = await axios.post("http://localhost:3000/clients",{name, isActive,group, email, phone, address});

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