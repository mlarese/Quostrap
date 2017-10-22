<template>
    <div class="panel widget">
        <div class="panel-body bg-danger text-center">
            <div class="clearfix">
                <div class="pull-left">{{numberFollowing}} {{$t('Following')}}</div>
                <div class="pull-right">{{numberFollowers}} {{$t('Followers')}}</div>
            </div>
            <img alt="Image" :src="avatarBody" class="img-thumbnail img-circle thumb96">
            <h4 class="mt0">{{avatarName}}</h4>
            <p class="m0">
                <em :class="icon"></em>{{city}}, {{state}}</p>
            <div class="clearfix">
                <div class="pull-left">{{totalLikes}} {{$t('Likes')}}</div>
                <div class="pull-right">{{totalFeeds}} {{$t('Feeds')}}</div>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    props: {
      numberFollowing: {default: '32k'},
      numberFollowers: {default: '32'},
      avatarBody: {default: '../images/img_service01.jpg'},
      avatarName: {default: 'Lucia Picasso'},
      icon: {default: 'fa fa-fw fa-map-market'},
      city: {default: 'Las Vegas'},
      state: {default: 'Nevada'},
      totalLikes: {default: 564},
      totalFeeds: {default: 321}
    }
  }
</script>

<style>

</style>