<template>
    <div class="panel panel-default">
        <div class="panel-heading">
            <new-message/>
            <new-message
            labelColor="pull-right label label-success"
            />

            <div class="panel-title">{{$t('Team messages')}}</div>
        </div>
        <div data-scrollable="" data-height="180" class="list-group">
            <user-message/>
            <user-message
            colorCircle="circle circle-danger circle-lg text-left"
            />

        </div>
        <div class="panel-footer clearfix">
            <div class="input-group">
                <input type="text" placeholder="Search message .." class="form-control input-sm">
                <span class="input-group-btn">
                    <button type="submit" class="btn btn-default btn-sm">
                    <i class="fa fa-search"></i>
                    </button>
                </span>
            </div>
        </div>
    </div>
</template>

<script>
  import UserMessage from '../usermessage/UserMessage'
  import NewMessage from '../newmessage/NewMessage'
  export default {
    props: {

    },
    components: {UserMessage, NewMessage}
  }
</script>

<style>

</style>