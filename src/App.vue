<template>
  <div id="app">
    <Home msg="Cotações de Moedas e Criptomoedas"/>
    <router-view></router-view>
    <Exchange/>
  </div>
</template>

<script>
import Home from './components/Home'
import Exchange from './components/Exchange'


export default {
  name: 'App',
  components: {
    Home,
    Exchange
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
