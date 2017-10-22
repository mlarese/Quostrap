<template>
    <div class="panel widget">
        <div class="half-float">
            <img alt="" :src="avatar" class="img-responsive">
            <div class="half-float-bottom">
                <img alt="Image" :src="avatarCircle" class="img-thumbnail img-circle thumb128">
            </div>
        </div>
        <div class="panel-body text-center">
            <h3 class="m0">{{avatarName}}</h3>
            <p class="text-muted">{{title}}</p>
            <p>{{paragraph}}</p>
        </div>
        <div class="panel-body text-center bg-gray-dark">
            <div class="row row-table">
                <div class="col-xs-4">
                    <h3 class="m0">{{totalPhotos}}</h3>
                    <p class="m0">{{$t('Photos')}}</p>
                </div>
                <div class="col-xs-4">
                    <h3 class="m0">{{totalLikes}}</h3>
                    <p class="m0">{{$t('likes')}}</p>
                </div>
                <div class="col-xs-4">
                    <h3 class="m0">{{totalFollowing}}</h3>
                    <p class="m0">{{$t('Following')}}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    props: {
      avatar: {default: '../images/imgDet.jpg'},
      avatarCircle: {default: '../../images/img_service01.jpg'},
      avatarName: {default: 'Mauro Micasso'},
      title: {default: 'Lead Director'},
      paragraph: {default: 'Proin metus justo, commodo in ultrices at, lobortis sit amet dui. Fusce dolor purus, adipiscing a tempus at, gravida vel purus.'},
      totalPhotos: {default: 5434},
      totalLikes: {default: 3432},
      totalFollowing: {default: 4626}
    }
  }
</script>

<style>

</style>