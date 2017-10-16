<template>
    <div>

                <div class="panel widget bg-primary">
                    <div class="row row-table">
                        <div class="col-xs-4 text-center bg-primary-dark pv-lg">
                            <em class="icon-cloud-upload fa-3x"></em>
                        </div>
                        <div class="col-xs-8 pv-lg">
                            <div class="h2 mt0">1700</div>
                            <div class="text-uppercase">Uploads</div>
                        </div>
                    </div>
                </div>


                <div class="panel widget bg-purple">
                    <div class="row row-table">
                        <div class="col-xs-4 text-center bg-purple-dark pv-lg">
                            <em class="icon-globe fa-3x"></em>
                        </div>
                        <div class="col-xs-8 pv-lg">
                            <div class="h2 mt0">700
                                <small>GB</small>
                            </div>
                            <div class="text-uppercase">Quota</div>
                        </div>
                    </div>
                </div>


                <div class="panel widget bg-green">
                    <div class="row row-table">
                        <div class="col-xs-4 text-center bg-green-dark pv-lg">
                            <em class="icon-bubbles fa-3x"></em>
                        </div>
                        <div class="col-xs-8 pv-lg">
                            <div class="h2 mt0">500</div>
                            <div class="text-uppercase">Reviews</div>
                        </div>
                    </div>
                </div>

                <div class="panel widget">
                    <div class="row row-table">
                        <div class="col-xs-4 text-center bg-green pv-lg">
                            <!-- See formats: https://docs.angularjs.org/api/ng/filter/date-->
                            <div class="text-sm" data-format="MMMM" data-now=""></div>
                            <br>
                            <div class="h2 mt0" data-format="D" data-now=""></div>
                        </div>
                        <div class="col-xs-8 pv-lg">
                            <div class="text-uppercase" data-format="dddd" data-now=""></div>
                            <br>
                            <div class="h2 mt0" data-format="h:mm" data-now=""></div>
                            <div class="text-muted text-sm" data-format="a" data-now=""></div>
                        </div>
                    </div>
                </div>

            <div class="panel panel-default">
                <div class="panel-body">
                    <a class="text-muted pull-right" href="#">
                        <em class="fa fa-arrow-right"></em>
                    </a>
                    <div class="text-info">Average Monthly Uploads</div>
                    <div class="text-center pv-xl">
                        <div class="easypie-chart easypie-chart-lg" data-size="145" data-line-cap="round" data-line-width="10" data-scale-color="false" data-track-color="rgba(200,200,200,0.4)" data-bar-color="#23b7e5" data-animate="{&quot;duration&quot;: &quot;800&quot;, &quot;enabled&quot;: &quot;true&quot;}" data-percent="70" data-easypiechart="">
                            <span>70%</span>
                        </div>
                    </div>
                    <div class="text-center" data-values="5,4,8,7,8,5,4,6,5,5,9,4,6,3,4,7,5,4,7" data-bar-spacing="2" data-bar-width="5" data-height="30" data-bar-color="#23b7e5" data-sparkline=""></div>
                </div>
                <div class="panel-footer">
                    <p class="text-muted">
                        <em class="fa fa-upload fa-fw"></em>
                        <span>This Month</span>
                        <span class="text-dark">1000 Gb</span>
                    </p>
                </div>
            </div>

        <div class="panel panel-default">
            <div class="panel-heading">
                <div class="panel-title">Latest activities</div>
            </div>
            <!-- START list group-->
            <div class="list-group">
                <!-- START list group item-->
                <div class="list-group-item">
                    <div class="media-box">
                        <div class="pull-left">
                                 <span class="fa-stack">
                                    <em class="fa fa-circle fa-stack-2x text-purple"></em>
                                    <em class="fa fa-cloud-upload fa-stack-1x fa-inverse text-white"></em>
                                 </span>
                        </div>
                        <div class="media-box-body clearfix">
                            <small class="text-muted pull-right ml">15m</small>
                            <div class="media-box-heading"><a class="text-purple m0" href="#">NEW FILE</a>
                            </div>
                            <p class="m0">
                                <small><a href="#">Bootstrap.xls</a>
                                </small>
                            </p>
                        </div>
                    </div>
                </div>
                <!-- END list group item-->
                <!-- START list group item-->
                <div class="list-group-item">
                    <div class="media-box">
                        <div class="pull-left">
                                 <span class="fa-stack">
                                    <em class="fa fa-circle fa-stack-2x text-info"></em>
                                    <em class="fa fa-file-text-o fa-stack-1x fa-inverse text-white"></em>
                                 </span>
                        </div>
                        <div class="media-box-body clearfix">
                            <small class="text-muted pull-right ml">2h</small>
                            <div class="media-box-heading"><a class="text-info m0" href="#">NEW DOCUMENT</a>
                            </div>
                            <p class="m0">
                                <small><a href="#">Bootstrap.doc</a>
                                </small>
                            </p>
                        </div>
                    </div>
                </div>
                <!-- END list group item-->
                <!-- START list group item-->
                <div class="list-group-item">
                    <div class="media-box">
                        <div class="pull-left">
                                 <span class="fa-stack">
                                    <em class="fa fa-circle fa-stack-2x text-danger"></em>
                                    <em class="fa fa-exclamation fa-stack-1x fa-inverse text-white"></em>
                                 </span>
                        </div>
                        <div class="media-box-body clearfix">
                            <small class="text-muted pull-right ml">5h</small>
                            <div class="media-box-heading"><a class="text-danger m0" href="#">BROADCAST</a>
                            </div>
                            <p class="m0"><a href="#">Read</a>
                            </p>
                        </div>
                    </div>
                </div>
                <!-- END list group item-->
                <!-- START list group item-->
                <div class="list-group-item">
                    <div class="media-box">
                        <div class="pull-left">
                                 <span class="fa-stack">
                                    <em class="fa fa-circle fa-stack-2x text-success"></em>
                                    <em class="fa fa-clock-o fa-stack-1x fa-inverse text-white"></em>
                                 </span>
                        </div>
                        <div class="media-box-body clearfix">
                            <small class="text-muted pull-right ml">15h</small>
                            <div class="media-box-heading"><a class="text-success m0" href="#">NEW MEETING</a>
                            </div>
                            <p class="m0">
                                <small>On
                                    <em>10/12/2015 09:00 am</em>
                                </small>
                            </p>
                        </div>
                    </div>
                </div>
                <!-- END list group item-->
                <!-- START list group item-->
                <div class="list-group-item">
                    <div class="media-box">
                        <div class="pull-left">
                                 <span class="fa-stack">
                                    <em class="fa fa-circle fa-stack-2x text-warning"></em>
                                    <em class="fa fa-tasks fa-stack-1x fa-inverse text-white"></em>
                                 </span>
                        </div>
                        <div class="media-box-body clearfix">
                            <small class="text-muted pull-right ml">1w</small>
                            <div class="media-box-heading"><a class="text-warning m0" href="#">TASKS COMPLETION</a>
                            </div>
                            <div class="progress progress-xs m0">
                                <div class="progress-bar progress-bar-warning progress-bar-striped" style="width: 22%" aria-valuemax="100" aria-valuemin="0" aria-valuenow="22" role="progressbar">
                                    <span class="sr-only">22% Complete</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- END list group item-->
            </div>
            <!-- END list group-->
            <!-- START panel footer-->
            <div class="panel-footer clearfix">
                <a class="pull-left" href="#">
                    <small>Load more</small>
                </a>
            </div>
            <!-- END panel-footer-->
        </div>

        <div class="panel panel-default">
            <div class="panel-heading">
                <div class="pull-right label label-danger">5</div>
                <div class="pull-right label label-success">12</div>
                <div class="panel-title">Team messages</div>
            </div>
            <!-- START list group-->
            <div class="list-group" data-scrollable="" data-height="180">
                <!-- START list group item-->
                <a class="list-group-item" href="#">
                    <div class="media-box">
                        <div class="pull-left">
                            <img class="media-box-object img-circle thumb32" alt="Image" src="img/user/03.jpg">
                        </div>
                        <div class="media-box-body clearfix">
                            <small class="pull-right">3h</small>
                            <strong class="media-box-heading text-primary">
                                <span class="circle circle-success circle-lg text-left"></span>Jessica Silva</strong>
                            <p class="mb-sm">
                                <small>Cras sit amet nibh libero, in gravida nulla. Nulla facilisi.</small>
                            </p>
                        </div>
                    </div>
                </a>
                <!-- END list group item-->
                <!-- START list group item-->
                <a class="list-group-item" href="#">
                    <div class="media-box">
                        <div class="pull-left">
                            <img class="media-box-object img-circle thumb32" alt="Image" src="img/user/09.jpg">
                        </div>
                        <div class="media-box-body clearfix">
                            <small class="pull-right">4h</small>
                            <strong class="media-box-heading text-primary">
                                <span class="circle circle-danger circle-lg text-left"></span>Jessie Wells</strong>
                            <p class="mb-sm">
                                <small>Cras sit amet nibh libero, in gravida nulla. Nulla...</small>
                            </p>
                        </div>
                    </div>
                </a>
            </div>
            <!-- END list group-->
            <!-- START panel footer-->
            <div class="panel-footer clearfix">
                <div class="input-group">
                    <input type="text" class="form-control input-sm" placeholder="Search message ..">
                    <span class="input-group-btn">
                                    <button class="btn btn-default btn-sm" type="submit"><i class="fa fa-search"></i>
                                    </button>
                                 </span>
                </div>
            </div>
            <!-- END panel-footer-->
        </div>

        <div class="panel widget">
            <div class="panel-body">
                <div class="clearfix">
                    <h3 class="pull-left text-muted mt0">300</h3>
                    <em class="pull-right text-muted fa fa-coffee fa-2x"></em>
                </div>
                <div class="pv-lg" data-resize="true" data-values="1,3,4,7,5,9,4,4,7,5,9,6,4" data-spot-radius="3" data-highlight-line-color="#fff" data-fill-color="" data-max-spot-color="#7266ba" data-min-spot-color="#7266ba" data-spot-color="#888" data-line-color="#7266ba" data-line-width="2" data-width="100%" data-height="80" data-type="line" data-sparkline=""></div>
                <p>
                    <small class="text-muted">Actual progress</small>
                </p>
                <div class="progress progress-xs">
                    <div class="progress-bar progress-bar-info progress-bar-striped" style="width: 80%" aria-valuemax="100" aria-valuemin="0" aria-valuenow="80" role="progressbar">
                        <span class="sr-only">80% Complete</span>
                    </div>
                </div>
            </div>
        </div>

        <div class="row row-table row-flush">
            <div class="col-xs-4 text-center text-info">
                <em class="fa fa-users fa-2x"></em>
            </div>
            <div class="col-xs-8">
                <div class="panel-body text-center">
                    <h4 class="mt0">10k</h4>
                    <p class="mb0 text-muted">VISITORS</p>
                </div>
            </div>
        </div>

        <div class="panel widget">
            <div class="row row-table row-flush">
                <div class="col-xs-8">
                    <img class="img-responsive" alt="" src="img/bg1.jpg">
                </div>
                <div class="col-xs-4 align-middle bg-info">
                    <div class="text-center">
                        <div class="text-lg mt0">11°</div>
                        <p>Cold</p>
                        <em class="fa fa-sun-o fa-2x"></em>
                    </div>
                </div>
            </div>
        </div>

        <div class="panel widget">
            <div class="row row-table row-flush">
                <div class="col-xs-5">
                    <picture class="lateral-picture">
                        <img alt="" src="img/bg2.jpg">
                    </picture>
                </div>
                <div class="col-xs-7 align-middle p-lg">
                    <div class="pull-right"><a class="btn btn-primary btn-sm" href="#">Register</a>
                    </div>
                    <p>
                        <span class="text-lg">16</span>Aug</p>
                    <p>
                        <strong>EVENT INVITATION</strong>
                    </p>
                    <p>Donec posuere neque in elit luctus tempor consequat enim egestas. Nulla dictum egestas leo at lobortis.</p>
                </div>
            </div>
        </div>

        <div class="panel widget">
            <div class="panel-body bg-danger text-center">
                <div class="clearfix">
                    <div class="pull-left">200 Following</div>
                    <div class="pull-right">150 Followers</div>
                </div>
                <img class="img-thumbnail img-circle thumb96" alt="Image" src="img/user/06.jpg">
                <h4 class="mt0">Lois Berry</h4>
                <p class="m0">
                    <em class="fa fa-fw fa-map-marker"></em>San Francisco, California</p>
                <div class="clearfix">
                    <div class="pull-left">15k Likes</div>
                    <div class="pull-right">100 Feeds</div>
                </div>
            </div>
        </div>

        <div class="panel widget">
            <img class="img-responsive" alt="Image" src="img/bg1.jpg">
            <div class="panel-body">
                <div class="row row-table text-center">
                    <div class="col-xs-4">
                        <p>Comments</p>
                        <h3 class="m0 text-primary">700</h3>
                    </div>
                    <div class="col-xs-4">
                        <p>Likes</p>
                        <h3 class="m0 text-primary">1500</h3>
                    </div>
                    <div class="col-xs-4">
                        <p>Shots</p>
                        <h3 class="m0 text-primary">300</h3>
                    </div>
                </div>
            </div>
        </div>

        <div class="panel widget">
            <div class="panel-body bg-purple text-center">
                <p>
                    <img class="img-rounded thumb80" alt="" src="img/user/08.jpg">
                </p>
                <p>
                    <strong>Mika</strong>
                    <span>is now following you</span>
                </p>
            </div>
        </div>

        <div class="panel widget">
            <div class="panel-body">
                <div class="row row-table">
                    <div class="col-xs-6 text-center">
                        <img class="img-thumbnail img-circle img-responsive thumb96" alt="Image" src="img/user/06.jpg">
                    </div>
                    <div class="col-xs-6">
                        <div class="pull-right"><a class="btn btn-success" href="#">Follow</a>
                        </div>
                        <h3 class="mt0">Sarah Pierce</h3>
                        <p class="text-muted">150 Following / 100 Followers</p>
                    </div>
                </div>
            </div>
        </div>

        <div class="panel panel-primary">
            <div class="panel-heading">
                <div class="row">
                    <div class="col-xs-3">
                        <em class="fa fa-comments fa-5x"></em>
                    </div>
                    <div class="col-xs-9 text-right">
                        <div class="text-lg">26</div>
                        <p class="m0">New Comments!</p>
                    </div>
                </div>
            </div>
            <a class="panel-footer bg-gray-dark bt0 clearfix btn-block" href="#">
                <span class="pull-left">View Details</span>
                <span class="pull-right">
                           <em class="fa fa-chevron-circle-right"></em>
                        </span>
            </a>
            <!-- END panel-->
        </div>

        <div class="panel widget">
            <div class="panel-body text-center bg-center" style="background-image: url('img/bg4.jpg')">
                <div class="row row-table">
                    <div class="col-xs-12 text-white">
                        <img class="img-thumbnail img-circle thumb128" alt="Image" src="img/user/06.jpg">
                        <h3 class="m0">Chris</h3>
                        <p class="m0">
                            <em class="fa fa-twitter fa-fw"></em>@chris</p>
                    </div>
                </div>
            </div>
            <div class="panel-body text-center bg-gray-darker">
                <div class="row row-table">
                    <div class="col-xs-4">
                        <a class="text-white" href="#">
                            <em class="fa fa-twitter fa-2x"></em>
                        </a>
                    </div>
                    <div class="col-xs-4">
                        <a class="text-white" href="#">
                            <em class="fa fa-facebook fa-2x"></em>
                        </a>
                    </div>
                    <div class="col-xs-4">
                        <a class="text-white" href="#">
                            <em class="fa fa-comments fa-2x"></em>
                        </a>
                    </div>
                </div>
            </div>
            <div class="list-group">
                <a class="list-group-item" href="#">
                    <span class="label label-primary pull-right">15</span>
                    <em class="fa fa-fw fa-clock-o text-muted"></em>Recent Activity</a>
                <a class="list-group-item" href="#">
                    <span class="label label-primary pull-right">100</span>
                    <em class="fa fa-fw fa-user text-muted"></em>Following</a>
                <a class="list-group-item" href="#">
                    <span class="label label-primary pull-right">300</span>
                    <em class="fa fa-fw fa-folder-open-o text-muted"></em>Photos</a>
            </div>
        </div>

        <div class="panel widget">
            <div class="half-float">
                <img class="img-responsive" alt="" src="img/bg3.jpg">
                <div class="half-float-bottom">
                    <img class="img-thumbnail img-circle thumb128" alt="Image" src="img/user/09.jpg">
                </div>
            </div>
            <div class="panel-body text-center">
                <h3 class="m0">Ted Berry</h3>
                <p class="text-muted">Lead director</p>
                <p>Proin metus justo, commodo in ultrices at, lobortis sit amet dui. Fusce dolor purus, adipiscing a tempus at, gravida vel purus.</p>
            </div>
            <div class="panel-body text-center bg-gray-dark">
                <div class="row row-table">
                    <div class="col-xs-4">
                        <h3 class="m0">400</h3>
                        <p class="m0">Photos</p>
                    </div>
                    <div class="col-xs-4">
                        <h3 class="m0">2000</h3>
                        <p class="m0">Likes</p>
                    </div>
                    <div class="col-xs-4">
                        <h3 class="m0">500</h3>
                        <p class="m0">Following</p>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>
<script>
  export default {
    components: {},
    props: []
  }
</script>

<style>
    @import url("//netdna.bootstrapcdn.com/bootstrap/3.0.0/css/bootstrap.min.css");
    @import url("//maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css");
    @import "../../assets/anglecss/app.css";

    .panel{
        margin-bottom: 20px !important;
    }
</style>