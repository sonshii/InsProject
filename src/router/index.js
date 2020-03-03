import Vue from 'vue'
import VueRouter from 'vue-router'
import ClientsView from '../views/ClientsView.vue'
import GroupsView from '../views/GroupsView.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/ClientsView',
    name: 'Клиенты',
    component: ClientsView
  },
  {
    path: '/GroupsView',
    name: 'Группы',
    component: GroupsView
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router