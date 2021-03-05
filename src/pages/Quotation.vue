<template>
    <div class="main">
      <div class="container">
        <TableExchange/>
      </div>
    </div>  
</template>

<script>
import TableExchange from '../components/TableExchange'


export default {
  name: 'Home',
  components: {
    TableExchange
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