<template>
    <div class="row">
        <div class="col-lg-12">
            <value-panel/>
        </div>
        <div class="col-lg-12">
            <avatar-user/>
        </div>
        <div class="col-lg-12">
            <comments/>
        </div>
        <div class="col-lg-12">
            <avatar-follow/>
        </div>
        <div class="col-lg-12">
            <reminder-date/>
        </div>
        <div class="col-lg-12">
            <avatar-info/>
        </div>
        <div class="col-lg-12">
            <avatar-details/>
        </div>
        <div class="col-lg-12">
            <avatar-description/>
        </div>
        <div class="col-lg-12">
            <weather/>
        </div>
        <div class="col-lg-12">
            <icon-info/>
        </div>
        <div class="col-lg-12">
            <avatar-list/>
        </div>
        <div class="col-lg-12">
            <icon-list/>
        </div>
        <div class="col-lg-12">
            <avatar-social-media/>
        </div>
        <div class="col-lg-12">
            <progress-bar/>
        </div>

    </div>
</template>

<script>
  import ColorWidget from '../../components/colorwidget/ColorWidget'
  import ValuePanel from '../../components/valuepanel/ValuePanel'
  import AvatarUser from '../../components/avatar/AvatarUser'
  import Comments from '../../components/comments/Comments'
  import AvatarFollow from '../../components/avatar/AvatarFollow'
  import ReminderDate from '../../components/reminderdate/ReminderDate'
  import AvatarInfo from '../../components/avatar/AvatarInfo'
  import AvatarDetails from '../../components/avatar/AvatarDetails'
  import AvatarDescription from '../../components/avatar/AvatarDescription'
  import Weather from '../../components/weather/Weather'
  import IconInfo from '../../components/iconlist/IconInfo'
  import AvatarList from '../../components/avatarlist/AvatarList'
  import IconList from '../../components/iconlist/IconList'
  import AvatarSocialMedia from '../../components/avatar/AvatarSocialMedia'
  import ProgressBar from '../../components/progressbar/ProgressBar'
  export default {
    components: { ColorWidget, ValuePanel, AvatarUser, Comments, AvatarFollow, ReminderDate, AvatarInfo, AvatarDetails, AvatarDescription, Weather, IconInfo, AvatarList, IconList, AvatarSocialMedia, ProgressBar },
    props: []
  }
</script>
<style lang="scss">
    @import url("//netdna.bootstrapcdn.com/bootstrap/3.0.0/css/bootstrap.min.css");
    @import url("//maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css");
    @import "../../assets/anglecss/app.css";
</style>