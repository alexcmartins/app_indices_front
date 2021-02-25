<template>
  <div id="app">
      <router-view></router-view>
  </div>
</template>

<script>
//import Home from './components/Home'
//import Exchange from './components/Exchange'


export default {
  name: 'App',
  components: {
    
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;1,700&display=swap');

#app {
  font-family: 'Roboto', Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
