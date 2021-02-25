<template>
    <div class="main">
      <Navbar/>
      <div class="body">
        <div class="table">
          <Exchange/>
        </div>
      </div>
    </div>  
</template>

<script>
import Navbar from './Navbar'
import Exchange from './Exchange'

export default {
  name: 'Home',
  components: {
    Navbar,
    Exchange
  }
}    
</script>

<style scoped>
.main {
    display: flex;
    height: 100%;
    flex-direction: column;
}

.body {
  width: 100%;
}


</style>