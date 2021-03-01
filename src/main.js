import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

import Home from './components/Home'
import Login from './components/Login'
import Signup from './components/Signup'
import Criptocoins from './components/Criptocoins'
import Exchange from './components/Exchange'

Vue.config.productionTip = false
Vue.use(VueRouter)

const routes = [
  { path: '/', component: Home },
  { path: '/login', component: Login },
  { path: '/signup', component: Signup },
  { path: '/criptomoedas', component: Criptocoins },
  { path: '/exchange', component: Exchange }
]

const router = new VueRouter({
  routes
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
