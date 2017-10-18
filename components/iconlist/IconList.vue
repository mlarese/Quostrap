<template>
    <div class="panel panel-default">
        <div class="panel-heading">
            <div class="panel-title">Latest activities</div>
        </div>
        <div class="list-group">
            <icon-activities/>
            <icon-activities
                iconColor="fa fa-circle fa-stack-2x text-info"
                iconType="fa fa-file-text-o fa-stack-1x fa-inverse text-white"
                description="Bootstrap.doc"
                duration="51hrs"
                textColor="text-info m0"
                label="NEW DOCUMENT"
            />
        </div>
        <div class="panel-footer clearfix"><a href="#" class="pull-left"><small>Load more</small></a>
        </div>
    </div>
</template>

<script>
  import IconActivities from '../../Icons/IconActivities'
  export default {
    props: [],
    components: {IconActivities}
  }
</script>

<style>

</style>