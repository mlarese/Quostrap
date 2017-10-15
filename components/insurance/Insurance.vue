<template>
    <div class="STSS__roomsNew__acc col-xs-12"><div>
        <a href="#" class="STSS__roomsNew__item__ssr__remove">
            <icon-tick />
        </a>
        <div class="STSS__roomsNew__acc__price text-right">
            <b class="STSS__roomsNew__total__label">{{$t('Total insurance')}}</b>
            <em class="STSS__roomsNew__total__price"> {{totalAmount}}<sup>,{{decimalAmount}}</sup></em>
        </div>
        <i class="STSS__roomsNew__acc__msg">{{textMsg}}</i>
        <div class="STSS__roomsNew__send text-center"><button class="btn form-control text-uppercase">{{$t('continue')}}</button>
        </div>
    </div>
    </div>
</template>

<script>
  import IconTick from '../../Icons/IconTick'
  export default {
    props: {
      textMsg: {default: 'il pagamento della polizza assicurativa avviene in modi separato'},
      totalAmount: {default: '£900'},
      decimalAmount: {default: 67}
    },
    components: {IconTick}
  }
</script>

<style>

</style>