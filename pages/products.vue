<template>
    <div class="bound_box ST2-book STSS__accList">
        <!-- product-list :products="shop"/ -->
            titolo dentro la pagina {{title}}<br>
        <input type="text" v-model="title"><br>

        <div style="margin-bottom: 10px">
            {{shop[3]}}
        </div>


        <product-form :product="shop[3]" :title="title" />

    </div>
</template>

<script>
  import ProductForm from '../components/productform/ProductForm'
  import ProductList from '../components/productlist/ProductList'
  import ProductItem from '../components/productitem/ProductItem'
  export default {
    components: {ProductList, ProductItem, ProductForm},
    props: {
      title: {default: 'Prodotti'},
      shop: {default: () => [
        {id: 21, name: 'computer', description: 'computer da tavolo senza mouse', price: 1000, inventory: 0, detail: 'courage is a good boy'},
        {id: 62, name: 'notebook', description: 'notebook da tavolo senza mouse', price: 2000, inventory: 5, detail: 'brand new notebook'},
        {id: 93, name: 'Macbook', description: 'Macbook da tavolo senza mouse', price: 4000, inventory: 2, detail: 'sconto alla grande'},
        {id: 664, name: 'Televisione', description: 'Televisione Samsung', price: 1200, inventory: 0, detail: 'tutto fuori'}
      ]}
    }
  }
</script>

<style lang="scss">
    @import "../node_modules/bootstrap-sass/assets/stylesheets/bootstrap/mixins";
    @import "../node_modules/bootstrap-sass/assets/stylesheets/bootstrap/variables";
    @import '../node_modules/select2/src/scss/core';

    @import "../assets/scss/vars";
    @import "../assets/scss/utils";
    @import "../assets/scss/loader";

    @import '../assets/scss/typography';

    @import '../assets/scss/steps';
    @import "../assets/scss/step1Body";
    @import "../assets/scss/step2Body";
    @import "../assets/scss/step2Resume";
    @import "../assets/scss/stepSSBody";
    @import '../assets/scss/step3Body';
    @import '../assets/scss/step4Body';
    @import "../assets/scss/modalCarousel";
</style>