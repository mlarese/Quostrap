<template>
    <div :class="labelColor">{{totalMessages}}</div>
</template>

<script>
  export default {
    props: {
      totalMessages: {default: 7},
      labelColor: {default: 'pull-right label label-danger'}

    }
  }
</script>

<style>

</style>