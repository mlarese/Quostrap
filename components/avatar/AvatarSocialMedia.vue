<template>
    <div class="panel widget">
        <div class="panel-body text-center bg-center" style="background-image: url('img/bg4.jpg')">
            <div class="row row-table">
                <div class="col-xs-12 text-white">
                    <img alt="Image" :src="avatar" class="img-thumbnail img-circle thumb128">
                    <h3 class="m0">{{avatarName}}</h3>
                    <p class="m0"><em class="fa fa-twitter fa-fw"></em>@chris</p>
                </div>
            </div>
        </div>
        <div class="panel-body text-center bg-gray-darker">
            <div class="row row-table">
                <div class="col-xs-4"><a href="#" class="text-white"><em class="fa fa-twitter fa-2x"></em></a>
                </div>
                <div class="col-xs-4"><a href="#" class="text-white"><em class="fa fa-facebook fa-2x"></em></a></div>
                <div class="col-xs-4"><a href="#" class="text-white"><em class="fa fa-comments fa-2x"></em></a></div>
            </div>
        </div>
        <div class="list-group">
            <a href="#" class="list-group-item">
                <span class="label label-primary pull-right">15</span>
                <em class="fa fa-fw fa-clock-o text-muted">
                </em>Recent Activity</a>
            <a href="#" class="list-group-item">
                <span class="label label-primary pull-right">100</span>
                <em class="fa fa-fw fa-user text-muted"></em>Following</a>
            <a href="#" class="list-group-item">
                <span class="label label-primary pull-right">300</span>
                <em class="fa fa-fw fa-folder-open-o text-muted"></em>Photos</a>
        </div>
    </div>
</template>

<script>
  export default {
    props: []
  }
</script>

<style>

</style>