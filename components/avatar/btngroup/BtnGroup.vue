<template>
    <div class="panel-body">
    {{name}}
    <div class="btn-group">
        <button class="btn btn-default btn-xs dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            {{buttonName}} <span class="caret" style="float:right;"></span>
        </button>
    </div>
    </div>
</template>

<script>
  export default {
    props: ['name', 'buttonName']
  }
</script>

<style>
    .panel-body{background-color: cornflowerblue;
        border-right: 1px silver solid;
    }

</style>