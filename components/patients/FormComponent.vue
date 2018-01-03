<template>
    <div>formComponent
        <button @click="cancel">Cancel</button>
    </div>
</template>

<script>
  import {mapActions} from 'vuex'
  export default {
    methods: {
      ...mapActions('patients', ['cancel'])
    }
  }
</script>

<style>

</style>