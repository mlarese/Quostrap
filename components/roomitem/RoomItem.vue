<template>
    <div class="row" style="background-color: lightgrey">
    <img :src="image" class="pull-left STSS__roomsNew__item__image">
    <h4 class="STSS__roomsNew__item__title text-uppercase">{{description}}</h4>
    <div class="STSS__roomsNew__item__desc">
        <icon-tick />
        <span>{{detailedDescription}}</span></div>
            <div class="STSS__roomsNew__item__price"><del> {{previousAmount}}</del><span> {{discount}}%</span>
                <em> {{totalAmount}}<sup>,{{decimalAmount}}</sup></em></div>
    </div>
</template>

<script>
  import IconTick from '../../Icons/IconTick'
  export default {
    props: {
      name: {default: 'TRIPLIA DELUXE'},
      image: {default: '../images/rooms_01.jpg'},
      price: {default: '£453'},
      decimalAmount: {default: 99},
      previousAmount: {default: '£546'},
      discount: {default: 20},
      detailedDescription: {default: 'Mezza Penzione'}
    },
    components: {IconTick}
  }
</script>

<style>

</style>