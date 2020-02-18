import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import './styles/style.css';
import VueRouter from 'vue-router';
import router from './router'
import store from './store'
Vue.use(VueRouter)

Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(App),
  store,
  router
}).$mount('#app')