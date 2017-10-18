<template>
    <div class="panel widget">
        <div class="panel-body">
            <div class="clearfix">
                <h3 class="pull-left text-muted mt0">{{number}}</h3>
                <em class="pull-right text-muted fa fa-coffee fa-2x"></em>
            </div>
            <div class="pv-lg">
            </div>
            <p><small class="text-muted">Actual progress</small></p>
            <div class="progress progress-xs">
                <div aria-valuemax="100" aria-valuemin="0" :aria-valuenow="80" role="progressbar" class="progress-bar progress-bar-info progress-bar-striped" :style="{width: percentage + '%'}">
                    <span class="sr-only">{{percentage}}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    props: {
      number: {default: 200},
      percentage: {default: 92}
    }
  }
</script>

<style>

</style>