<template>
    <div class="container mt-5 mb-3">
        <h1 v-if = "loading">Loading...</h1>
        <div v-else class="row">
            <div class="col-md-4 text-center">
                <img :src="product.image" class="img-fluid p-d-img" alt="">
            </div>
            <div class="col-md-8">
                <h2 class="">{{ product.title }}</h2>
                <h5 class="my-5 text-primary">{{ product.price }}Ks</h5>
                <p>{{ product.description}}</p>
                <div class="mt-5"> 
                    <router-link to="/product" class="btn btn-outline-secondary"> Go Back</router-link>
                    <button class="btn btn-primary float-end">Add To Card</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: "ProductDetail",
    data() {
        return {
            loading: true,
            product: {}
        }
    },
    created() {
        this.loading = true
        axios.get(`https://fakestoreapi.com/products/${this.$route.params.id}`)
             .then( response => {
                this.product = response.data;
                this.loading = false
             })
             .catch( error => {
                this.loading = false
             })
    }
}
</script>

<style>
    .p-d-img{
        height: 400px;
    }
</style>