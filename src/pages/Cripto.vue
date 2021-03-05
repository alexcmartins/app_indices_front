<template>
    <div class="main">
      <div class="container">
        <TableCriptocoins/>
      </div>
    </div>  
</template>

<script>
import TableCriptocoins from '../components/TableCriptocoins'


export default {
  name: 'Home',
  components: {
    TableCriptocoins
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