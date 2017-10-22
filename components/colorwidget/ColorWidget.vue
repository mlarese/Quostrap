<template>
    <div class="panel widget" :style="{backgroundColor}">
        <div class="row row-table">
            <div class="col-xs-4 text-center pv-lg" :style="{backgroundColor:backgroundColorDark}">
                <em class="icon-globe fa-3x"></em>
            </div>
            <div class="col-xs-8 pv-lg"><div class="h2 mt0" :style="{color}">{{value}}
            <small :style="{color}">{{subValue}}</small>
            </div>
                <div class="text-uppercase":style="{color}">{{description}}</div>
            </div>
         </div>
    </div>
</template>

<script>
  export default {
    props: {
      backgroundColor: {default: 'red'},
      backgroundColorDark: {default: '#564aa3'},
      color: {default: 'white'},
      value: {default: 7257},
      subValue: {default: 'TB'},
      name: {default: 'QUOTA'}
    }
  }
</script>

<style>

</style>