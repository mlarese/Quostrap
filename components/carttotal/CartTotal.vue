<template>
    <div class="STSS__roomsNew__total text-right">
        <a href="#" class="STSS__roomsNew__total__link">Condizioni di prenotazione</a>
        <strong class="STSS__roomsNew__total__label">Totale soggiorno</strong>
        <em class="STSS__roomsNew__total__price">{{totPrc}}<sup>,{{decAmt}}</sup></em>
        <span class="STSS__roomsNew__total__highlight">Stai risparmiando {{saveAmt}}</span>
    </div>
</template>

<script>
  export default {
    props: {
      totPrc: {default: '£ 233'},
      decAmt: {default: 56},
      saveAmt: {default: '£ 542'}
    }
  }
</script>

<style>

</style>