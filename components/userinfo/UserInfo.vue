<template>
        <div>
        <div class="row">
            <b>{{name}}</b></div>
        <div class="row" style="color: #2aabd2">
            {{noPren}} prenotazioni effetuate-<strong style="color: blue"> Ultima Prenotazione il {{lastPren}}</strong>
        </div>
         </div>
</template>

<script>
  export default {
    props: [
      'name',
      'noPren',
      'lastPren'

    ]
  }
</script>

<style>

</style>