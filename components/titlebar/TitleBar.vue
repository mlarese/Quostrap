<template>
   <div class="row"><h4>{{title}}</h4>
    <i class="fa fa-pencil" aria-hidden="true" style="float: right"></i></div>
</template>

<script>
  export default {
    props: ['title']
  }
</script>

<style>
    .row{
        border-bottom: 1px black solid;
    }
</style>