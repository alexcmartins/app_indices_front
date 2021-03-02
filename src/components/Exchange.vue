<template>
    <div class="main">
        <div class="card">
        <h5 class="card-title">Moedas</h5>
        <div class="card-body">
        <div class="exchangecoins">
            <div class="table-responsive-sm">
            <table class="table table-hover">
                <thead>
                    <tr>
                    <th scope="col">Nome</th>
                    <th scope="col">Compra</th>
                    <th scope="col">Venda</th>
                    <th scope="col">Ult. Atualização</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="exchange of exchanges" :key="exchange.id">
                    <th scope="row">{{exchange.name}}<br>{{exchange.symbol}}</th>
                    <td>{{exchange.price_buy.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL'})}}</td>
                    <td>{{exchange.price_sale.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL'})}}</td>
                    <td>{{new Intl.DateTimeFormat('pt-BR', {dateStyle: "short"}).format(exchange.last_updated_pric)}}<br>
                        {{new Intl.DateTimeFormat('pt-BR', {timeStyle: "medium"}).format(exchange.last_updated_pric)}}</td>
                    </tr>
                </tbody>
            </table>
            </div>
        </div>
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