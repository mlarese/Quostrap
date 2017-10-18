<template>
    <div class="row row-table row-flush">
        <div class="col-xs-4 text-center text-info">
            <em :class="icon"></em>
        </div>
        <div class="col-xs-8">
            <div class="panel-body text-center">
                <h4 class="mt0">{{totalVisitors}}</h4>
                <p class="mb0 text-muted">VISITORS</p>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    props: {
      icon: {default: 'fa fa-users fa-2x'},
      totalVisitors: {default: '20k'}
    }
  }
</script>

<style>

</style>