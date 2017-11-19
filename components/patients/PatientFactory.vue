<template>
    <component :is="currentComponent">
    </component>
</template>

<script>
  import FormComponent from './FormComponent.vue'
  import ListComponent from './ListComponent.vue'
  import {mapState} from 'vuex'
  export default {
    components: {FormComponent, Listcomponent},
    computed: {
      ...mapState ('patients',['mode']),
      currentComponent () {
        if(this.mode==='listMode') {
          return ListComponent
        }else {
          return FormComponent
        }
      }
    }
  }
</script>

<style>

</style>