<template>
    <div class="panel widget">
        <img alt="Image" :src="avatar" class="img-responsive">
        <div class="panel-body">
            <div class="row row-table text-center">
                <div class="col-xs-4">
                    <p>Comments</p>
                    <h3 class="m0 text-primary">{{totalComments}}</h3>
                </div>
                <div class="col-xs-4">
                    <p>Likes</p>
                    <h3 class="m0 text-primary">{{totalLikes}}</h3>
                </div><div class="col-xs-4">
                <p>Shots</p>
                <h3 class="m0 text-primary">{{totalShots}}</h3>
            </div>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    props: {
      avatar: {default: '../images/img_service01.jpg'},
      totalComments: {default: 34},
      totalLikes: {default: 241},
      totalShots: {default: 32}
    }
  }
</script>

<style>

</style>