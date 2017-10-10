<template>
    <div class="input-group">
        <input type="text" class="form-control" :placeholder="displaytext" aria-describedby="basic-addon2">
        <span class="input-group-addon" id="basic-addon2">&euro;{{amount}}</span>
    </div>
</template>

<script>
  export default {
    props: ['displaytext', 'amount']
  }
</script>

<style>

</style>