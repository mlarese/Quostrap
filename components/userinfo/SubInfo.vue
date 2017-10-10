<template>
    <div class="row">
        <div class="col-xs-1 col-lg-1"> <span :class="icon" :style="{backgroundColor, color}" ></span></div>
        <div class="col-xs-8 col-lg-8" :style="{backgroundColor, color}">{{label}} <br> {{value}}
            </div>
        <div class="col-xs-2 col-lg-3" :style="{backgroundColor, color}">Gestici <span class="caret"></span></div>
    </div>
</template>

<script>
  export default {
    props: {
      icon: {default: 'glyphicon glyphicon-search'},
      label: {default: 'Hai una richiesta di CashBack di'},
      value: {default: '£500'},
      backgroundColor: {default: 'darkviolet'},
      color: {default: 'white'}
    }
  }
</script>

<style>

</style>