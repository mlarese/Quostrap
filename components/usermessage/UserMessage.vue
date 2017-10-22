<template>
    <a href="#" class="list-group-item">
        <div class="media-box">
            <div class="pull-left">
                <img alt="Image" :src="avatar" class="media-box-object img-circle thumb32">
            </div>
            <div class="media-box-body clearfix">
                <small class="pull-right">{{duration}}</small>
                <strong class="media-box-heading text-primary">
                            <span :class="colorCircle">
                            </span>{{avatarName}}</strong>
                <p class="mb-sm"><small>{{paragraph}}</small></p>
            </div>
        </div>
    </a>
</template>

<script>
  export default {
    props: {
      avatar: {default: '../images/img_service01.jpg'},
      duration: {default: '5hrs'},
      avatarName: {default: 'Jessica Picasso'},
      description: {default: 'Cras sit amet nibh libero, in gravida nulla. Nulla facilisi.'},
      colorCircle: {default: 'circle circle-success circle-lg text-left'}
    }
  }
</script>

<style>

</style>