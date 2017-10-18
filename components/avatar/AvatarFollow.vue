<template>
    <div class="panel widget">
        <div class="panel-body">
            <div class="row row-table">
                <div class="col-xs-6 text-center">
                    <img alt="Image" :src="avatar" class="img-thumbnail img-circle img-responsive thumb96">
                </div>
                <div class="col-xs-6">
                    <div class="pull-right">
                        <a href="#" class="btn btn-success">Follow</a>
                    </div>
                    <h3 class="mt0">{{avatarName}}</h3>
                    <p class="text-muted">{{numberFollowing}} Following / {{numberFollowers}} Followers</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    props: {
      avatar: {default: '../images/img_service02.jpg'},
      avatarName: {default: 'Luigi Picasso'},
      numberFollowing: {default: 23},
      numberFollowers: {default: 87}
    }
  }
</script>

<style>

</style>