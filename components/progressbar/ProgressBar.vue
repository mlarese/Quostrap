<template>
    <div class="panel widget">
        <div class="panel-body">
            <div class="clearfix">
                <h3 class="pull-left text-muted mt0">{{totalNumber}}</h3>
                <em class="pull-right text-muted fa fa-coffee fa-2x"></em>
            </div>
            <div data-resize="true" data-values="1,3,4,7,5,9,4,4,7,5,9,6,4" data-spot-radius="3" data-highlight-line-color="#fff" data-fill-color="" data-max-spot-color="#7266ba" data-min-spot-color="#7266ba" data-spot-color="#888" data-line-color="#7266ba" data-line-width="2" data-width="100%" data-height="80" data-type="line" data-sparkline="" class="pv-lg">
            </div>
            <p><small class="text-muted">Actual progress</small></p>
            <div class="progress progress-xs">
                <div aria-valuemax="100" aria-valuemin="0" :aria-valuenow="80" role="progressbar" class="progress-bar progress-bar-info progress-bar-striped" style="width: 80%">
                    <span class="sr-only">{{totalPercentage}}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    props: {
      totalNumber: {default: 200},
      totalPercentage: {default: '92% Percentage'}
    }
  }
</script>

<style>

</style>