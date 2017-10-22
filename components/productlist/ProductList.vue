<template>
<div class="product-list">
    <template v-for="item in products">
      <product-item :product="item"/>
    </template>
</div>
</template>

<script>
  import ProductItem from '../productitem/ProductItem'
  export default {
    components: {ProductItem},
    props: {
      products: {default: [
        {id: 1, name: 'computer', description: 'computer da tavolo senza mouse', price: 1000, inventory: 10, detail: 'courage is a good boy'},
        {id: 2, name: 'notebook', description: 'notebook da tavolo senza mouse', price: 2000, inventory: 5, detail: 'brand new notebook'},
        {id: 3, name: 'Macbook', description: 'Macbook da tavolo senza mouse', price: 4000, inventory: 2, detail: 'sconto alla grande'}
      ]}
    }
  }
</script>

<style>

</style>