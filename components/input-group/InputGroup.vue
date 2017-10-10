<template>
    <div class="input-group">
        <input type="text" class="form-control" :placeholder="label" aria-describedby="basic-addon2">
        <span class="input-group-addon" id="basic-addon2" :style="{backgroundColor, color}">{{value}}</span>
    </div>
</template>

<script>
  export default {
    props: {
      label: {default: 'punti presi'},
      value: {default: 23},
      color: {default: 'black'},
      backgroundColor: {default: '#f1f1f1'}
    }
  }
</script>

<style>

</style>