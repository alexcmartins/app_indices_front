<template>
    <div class="main">
        <div class="card">
        <h5 class="card-title">Criptomoedas</h5>
        <div class="card-body">
        <div class="criptocoins">
            <div class="table-responsive-sm">
            <table class="table table-hover">
                <thead>
                    <tr>
                    <th scope="col">Nome</th>
                    <th scope="col">Preço</th>
                    <th scope="col">Cap. Mercado</th>
                    <th scope="col">Vol. Neg. 24h</th>
                    <th scope="col">Corretoras</th>
                    <th scope="col">Ativos</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="cripto of criptos" :key="cripto.id">
                    <th scope="row">{{cripto.name}}<br>{{cripto.symbol}}</th>
                    <td>{{cripto.price_sale.toLocaleString('en-US', { style: 'currency', currency: 'USD'})}}</td>
                    <td>{{cripto.market_cap.toLocaleString('en-US', { style: 'currency', currency: 'USD'})}}</td>
                    <td>{{cripto.volume_24h.toLocaleString('en-US', { style: 'currency', currency: 'USD'})}}</td>
                    <td>{{cripto.num_market_pairs}}</td>
                    <td>Circulante {{cripto.circulating_supply}} {{cripto.symbol}}
                        <br> Maximo {{cripto.max_supply}} {{cripto.symbol}}</td>
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
    name: 'Criptocoins',

    data() {
        return {
            criptos: []
        }
    },

    mounted() {
        this.getCripto();
    },

    methods: {
        async getCripto(){
            const response = await axios.get('http://cmdev.ddns.net:3000/v1/api/cripto');
            if(response.status == 200){
                
                this.criptos = response.data;
            }else {
                console.error('Ocorreu um erro!')
            }
        }
    },
}
</script>

<style scoped>

</style>