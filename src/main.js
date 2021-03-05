import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Cripto from './pages/Cripto'
import Quotation from './pages/Quotation'

Vue.config.productionTip = false
Vue.use(VueRouter)

const routes = [
  { path: '/', component: Home },
  { path: '/login', component: Login },
  { path: '/signup', component: Signup },
  { path: '/cripto', component: Cripto },
  { path: '/quotation', component: Quotation }
]

const router = new VueRouter({
  routes
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
