<template>
  <div id="app">
    <Navbar/>
      <router-view></router-view>
  </div>
</template>

<script>
import Navbar from './components/Navbar'
//import Exchange from './components/Exchange'


export default {
  name: 'App',
  components: {
    Navbar
  }
}
</script>

<style>

@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;1,700&display=swap');

#app {
  font-family: 'Roboto', Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 5px;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
}
</style>
