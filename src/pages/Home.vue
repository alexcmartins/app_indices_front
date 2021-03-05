<template>
    <div class="main">
      <div class="container">
        <Blocks/>
      </div>
    </div>  
</template>

<script>
import Blocks from '../components/Blocks'
//import Criptocoins from './Criptocoins'

export default {
  name: 'Home',
  components: {
    Blocks
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