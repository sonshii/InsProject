import Vue from 'vue'

import App from './App.vue'
import vuetify from './plugins/vuetify';
import './styles/style.css';


import router from './router'
import VueRouter from 'vue-router';
Vue.use(VueRouter)

import store from './store'



Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(App),
  store,
  router,
}).$mount('#app')