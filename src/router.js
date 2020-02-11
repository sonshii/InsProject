
import Router from 'vue-router'
import ClientsView from './views/ClientsView';
import GroupsView from './views/GroupsView';

export default new VueRouter({
  mode: 'history',
  routes: [
      {
          path: '/ClientsView', 
          component: ClientsView
      },
      {
          path: '/GroupsView', 
          component: GroupsView
      }
  ],
  
})