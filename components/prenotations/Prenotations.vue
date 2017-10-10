<template>
    <div class="row">
        <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4">
            <strong>{{name}}</strong>
        </div>
        <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4">
            effetuata il <strong>{{date}}</strong>
        </div>
        <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4">
            <div class="input-group">
                <input type="text" class="form-control" :placeholder="displaytext" aria-describedby="basic-addon2">
                <span class="input-group-addon" id="basic-addon2">{{numbers}}</span>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    props: ['name', 'date', 'displaytext', 'numbers']
  }
</script>

<style>
    .row{border-bottom: 1px silver solid;}
    .input-group{margin-bottom: 2px;}
</style>