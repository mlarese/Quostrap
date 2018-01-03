<template>
<div>
    listComponent
    <button @click="add">add</button>
</div>
</template>

<script>
  import {mapActions} from 'vuex'
  export default {
    methods: {
      ...mapActions('patients', ['add'])
    }
  }
</script>

<style>

</style>