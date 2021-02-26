<template>
    <div class="main">
      <div class="body">
        <div class="table-exchange">
          <Exchange/>
        </div>
      </div>
    </div>  
</template>

<script>
import Exchange from './Exchange'

export default {
  name: 'Home',
  components: {
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