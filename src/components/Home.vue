<template>
    <div class="main">
      <div class="body">
        <div class="table-exchange">
          <Exchange/>
        </div>
        <hr>
        <div class="table-criptocoins">
          <Criptocoins/>
        </div>
        <hr>
      </div>
    </div>  
</template>

<script>
import Exchange from './Exchange'
import Criptocoins from './Criptocoins'

export default {
  name: 'Home',
  components: {
    Exchange,
    Criptocoins
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