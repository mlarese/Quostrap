<template>
    <div>
    <div class="panel panel-default">
        <div class="panel-body">
            <a href="#" class="text-muted pull-right"><em class="fa fa-arrow-right"></em></a>
            <div class="text-info">{{$t('Average Monthly Uploads')}}</div>
            <div class="text-center pv-xl">
                <div data-size="145" data-line-cap="round" data-line-width="10" data-scale-color="false" data-track-color="rgba(200,200,200,0.4)" data-bar-color="#23b7e5" data-animate="{\"duration\":="" \"800\",="" \"enabled\":="" \"true\"}"="" data-percent="70" data-easypiechart="" class="easypie-chart easypie-chart-lg">
                <span>{{percentage}}</span>
            </div>
        </div>
        <div data-values="5,4,8,7,8,5,4,6,5,5,9,4,6,3,4,7,5,4,7" data-bar-spacing="2" data-bar-width="5" data-height="30" data-bar-color="#23b7e5" data-sparkline="" class="text-center"></div>
    </div>
    <div class="panel-footer"><p class="text-muted"><em class="fa fa-upload fa-fw"></em><span>{{monthDate}}</span><span class="text-dark">{{value}}</span></p>
    </div></div>
</template>

<script>
  export default {
    props: {
      percentage: {default: '60%'},
      monthDate: {default: 'Last Month'},
      value: {default: '1200 GB'}
    }
  }
</script>

<style>

</style>