<template>
    <div class="main">
        <hr>
        <div class="criptocoins">
            <div class="top">
                <h3>Criptomoedas</h3>
            </div>
            <div class="content">
            <table class="table table-hover">
                <thead>
                    <tr>
                    <th scope="col">Nome</th>
                    <th scope="col">Simbolo</th>
                    <th scope="col">Preço</th>
                    <th scope="col">Cap. Mercado</th>
                    <th scope="col">Vol. Neg. 24h</th>
                    <th scope="col">Corretoras</th>
                    <th scope="col">Ativos Circulantes</th>
                    <th scope="col">Ativos Máximos</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="cripto of criptos" :key="cripto.id">
                    <th scope="row">{{cripto.name}}</th>
                    <td>{{cripto.symbol}}</td>
                    <td>U$D {{cripto.price_sale}}</td>
                    <td>U$D {{cripto.market_cap}} </td>
                    <td>USD {{cripto.volume_24h}}</td>
                    <td>{{cripto.num_market_pairs}}</td>
                    <td>USD {{cripto.circulating_supply}}</td>
                    <td>USD {{cripto.max_supply}}</td>
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
                console.log(response.data)
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