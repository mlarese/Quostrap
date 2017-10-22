<template>
    <div class="panel panel-primary">
        <div class="panel-heading">
            <div class="row">
                <div class="col-xs-3">
                    <em class="fa fa-comments fa-5x"></em>
                </div>
                <div class="col-xs-9 text-right">
                    <div class="text-lg">{{number}}</div>
                    <p class="m0">{{description}}</p>
                </div>
            </div>
        </div>
        <a href="#" class="panel-footer bg-gray-dark bt0 clearfix btn-block">
            <span class="pull-left">{{$t('View Details')}}</span>
            <span class="pull-right">
                <em :class="iconFooter"></em>
            </span>
        </a>
    </div>
</template>

<script>
  export default {
    props: {
      number: {default: 43},
      name: {default: 'New Comments'},
      iconFooter: {default: 'fa fa-chevron-circle-left'}
    }
  }
</script>

<style>

</style>