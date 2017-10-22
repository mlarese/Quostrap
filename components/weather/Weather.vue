<template>
    <div class="panel widget">
        <div class="row row-table row-flush">
            <div class="col-xs-8">
                <img alt="" :src="avatar" class="img-responsive">
            </div>
            <div class="col-xs-4 align-middle bg-info" :style="{backgroundColor ,color}">
                <div class="text-center" ><div class="text-lg mt0">{{temperature}}</div>
                    <p>{{description}}</p>
                    <em :class="icon"></em>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    props: {
      avatar: {default: '../images/img_service01.jpg'},
      temperature: {default: '21°'},
      name: {default: 'Sunny Day'},
      icon: {default: 'fa fa-sun-o fa-2x'},
      backgroundColor: {default: 'yellow'},
      color: {default: 'white'}
    }
  }
</script>

<style>

</style>