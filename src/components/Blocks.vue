<template>
    <div class="main">
      <div class="container">
        <div class="row">
          <div class="col-sm">
            <p>Bitcoin</p>
          </div>
          <div class="col-sm">
            <p>Ethereum</p>
          </div>
          <div class="col-sm">
            <p>Tether</p>
          </div>
          <div class="col-sm">
            <p>Cardano</p>
          </div>
          <div class="col-sm">
            <p>Polkadot</p>
          </div>
          <hr>
        </div>
      </div>
    </div>  
</template>

<script>

export default {
    name: 'Blocks',
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

.col-sm {
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: cadetblue;
  margin: auto;
  border: 5px solid white;
  border-radius: 0px;
}

.col-sm p {
    color: white;
    margin: 0;
}

hr {
  margin-top: 10px;
  margin-bottom: 10px;
}
</style>