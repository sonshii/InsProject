import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import './styles/style.css';
import VueRouter from 'vue-router';
import router from './router'
Vue.use(VueRouter)

Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(App),
  router
}).$mount('#app')