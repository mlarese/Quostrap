<template>
    <div class="STSS__roomsNew__total text-right">
        <a href="#" class="STSS__roomsNew__total__link">Condizioni di prenotazione</a>
        <strong class="STSS__roomsNew__total__label">Totale soggiorno</strong>
        <em class="STSS__roomsNew__total__price">{{totalAmount}}<sup>,{{decimalAmount}}</sup></em>
        <span class="STSS__roomsNew__total__highlight">Stai risparmiando {{savedAmount}}</span>
    </div>
</template>

<script>
  export default {
    props: {
      totalAmount: {default: '£233'},
      decimalAmount: {default: 56},
      savedAmount: {default: '£ 542'}
    }
  }
</script>

<style>

</style>