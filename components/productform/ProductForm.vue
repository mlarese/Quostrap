<template>
    <div class="product-form">
        <div>titolo nella form: {{title}}</div>
        <input type="text" v-model="title"><br>
        {{product.name}} <br>
        <input type="text" v-model="product.name"> <br>
        {{product.description}} <br>
        <input type="text" v-model="product.description"> <br>
        {{product.detail}} <br>
        <input type="text" v-model="product.detail"> <br>
        {{product.price}} <br>
        <input type="number" v-model="product.price">
    </div>
</template>

<script>
  export default {
    props: {
      title: {default: ''},
      product: {default: () => ({
        photo: '../images/img_service01.jpg',
        name: 'INGRESSO CENTRO TERMALE',
        description: 'cahshhsajsjjajsh shbjhsa shhsankhkuwhuyu nabshbuwq',
        detail: 'sabjbhajbhjsbjadbjabhdjhbjjhbjh',
        price: '£455',
        decimalAmount: 45,
        inventory: 3
      })}
    }
  }
</script>

<style>

</style>