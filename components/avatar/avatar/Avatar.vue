<template>
    <div>
        <div class="row">
            <img :src="avatar" class="img-circle" style="height: 200px; width: 200px; float: left;" alt="User Image"></div>
        <div class="row ">
            CODICE UTENTI {{code}}
        </div>
        <div class="row">
            Iscritto dal  {{date}}</div>
    </div>
</template>

<script>
  export default {
    props: ['avatar', 'code', 'date']
  }
</script>

<style>
    .row{
        border-bottom: 1px solid silver;

    }

</style>