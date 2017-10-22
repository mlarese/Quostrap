<template>
    <div class="row row-table row-flush">
        <div class="col-xs-4 text-center text-info">
            <em class="fa fa-users fa-2x"></em>
        </div>
        <div class="col-xs-8">
            <div class="panel-body text-center">
                <h4 class="mt0">{{totalVisitors}}</h4>
                <p class="mb0 text-muted">{{$t('Visitors')}}</p>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    props: {
      totalVisitors: {default: '20k'}
    }
  }
</script>

<style>

</style>