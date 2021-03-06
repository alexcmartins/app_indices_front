<template>
    <div class="main">
      <div class="container">
        <div class="row">
          <div class="col-sm">
            <p>{{cripto.name}}
                Bitcoin</p>
            
          </div>
          <div class="col-sm">
            <p>Ethereum</p>
            <p>Ethereum</p>
          </div>
          <div class="col-sm">
            <p>Tether</p>
            <p>Tether</p>
          </div>
          <div class="col-sm">
            <p>Cardano</p>
            <p>Cardano</p>
          </div>
          <div class="col-sm">
            <p>Polkadot</p>
            <p>Polkadot</p>
          </div>
          <hr>
          <div class="col-sm">
            <p>Bitcoin
                Bitcoin</p>
            
          </div>
          <div class="col-sm">
            <p>Ethereum</p>
            <p>Ethereum</p>
          </div>
          <div class="col-sm">
            <p>Tether</p>
            <p>Tether</p>
          </div>
          <div class="col-sm">
            <p>Cardano</p>
            <p>Cardano</p>
          </div>
          <div class="col-sm">
            <p>Polkadot</p>
            <p>Polkadot</p>
          </div>
        </div>
      </div>
    </div>  
</template>

<script>
import axios from 'axios'

export default {
    name: 'Blocks',

    data() {
        return {
            coins: [],
            cripto: []
        }
    },

    mounted() {
        this.getCoins();
        this.getCripto()
    },

    methods: {
        async getCoins(){
            const response = await axios.get('http://cmdev.ddns.net:3000/v1/api/exchange');
            if(response.status == 200){
                this.coins = response.data;
            }else {
                console.error('Ocorreu um erro!')
            }
        },

        async getCripto(){
            const response = await axios.get('http://cmdev.ddns.net:3000/v1/api/cripto');
            if(response.status == 200){
                this.cripto = response.data;
            }else {
                console.error('Ocorreu um erro!')
            }
        }
    },

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
    height: 130px;
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