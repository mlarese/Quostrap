<template>
    <div class="panel widget">
        <div class="panel-body bg-purple text-center">
            <p><img alt="" :src="avatarBody" class="img-rounded thumb80"></p>
            <p><strong>{{avatarName}}</strong><span> {{$t('is now following you')}}</span></p>
        </div>
    </div>
</template>

<script>
  export default {
    props: {
      avatarBody: {default: '../images/img_service01.jpg'},
      avatarName: {default: 'Picasso'}
    }
  }
</script>

<style>

</style>