<template>
    <div class="container mt-3">
        <div class="row">
            <div class="col-md-4" v-for="product in products" :key="product.id">
                <div class="card mb-3">
                    <div class="card-body text-center">
                        <img :src="product.image" alt="" class="p-img">
                        <p class="my-3 h4 fw-bold">{{ product.title }}</p>
                        <p class="h5 text-muted my-3">$ {{ product.price }}</p>

                        <router-link :to="`/product/${product.id}`" class="btn btn-primary d-block">More Detail -></router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: "ProductHome",
    data() {
        return {
            products: []
        }
    },
    created() {
        axios.get('https://fakestoreapi.com/products')
             .then( response => {
                this.products = response.data;
             } )
    }
}
</script>

<style>

.p-img {
    height: 150px;
}

</style>