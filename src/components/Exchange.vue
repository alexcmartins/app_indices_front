<template>
    <div class="main">
        <hr>
        <div class="exchangecoins">
            <div class="top">
                <h3>Moedas</h3>
            </div>
            <div class="content">
            <table class="table table-hover">
                <thead>
                    <tr>
                    <th scope="col">Nome</th>
                    <th scope="col">Simbolo</th>
                    <th scope="col">Compra</th>
                    <th scope="col">Venda</th>
                    <th scope="col">Ult. Atualização</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="exchange of exchanges" :key="exchange.id">
                    <th scope="row">{{exchange.name}}</th>
                    <td>{{exchange.symbol}}</td>
                    <td>R$ {{exchange.price_buy}}</td>
                    <td>R$ {{exchange.price_sale}}</td>
                    <td>{{exchange.last_updated_price}}</td>
                    </tr>
                </tbody>
            </table>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'Exchange',

    data() {
        return {
            exchanges: []
        }
    },

    mounted() {
        this.getExchange();
    },

    methods: {
        async getExchange(){
            const response = await axios.get('http://cmdev.ddns.net:3000/v1/api/exchange');
            if(response.status == 200){
                console.log(response.data)
                this.exchanges = response.data;
            }else {
                console.error('Ocorreu um erro!')
            }
        }
    },
}
</script>

<style scoped>

</style>