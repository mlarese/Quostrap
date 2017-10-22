<template>
    <div class="panel widget">
        <div class="row row-table row-flush">
            <div class="col-xs-5">
                <picture class="lateral-picture">
                    <img alt="" :src="avatar">
                </picture>
            </div>
            <div class="col-xs-7 align-middle p-lg">
                <div class="pull-right"><a href="#" class="btn btn-primary btn-sm">{{$t('Register')}}</a>
                </div>
                <p><span class="text-lg">{{day}}</span>{{month}}</p>
                <p><strong>{{description}}</strong></p>
                <p>{{paragraph}}</p>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    props: {
      avatar: {default: '../images/img_service02.jpg'},
      day: {default: 31},
      month: {default: 'Mag'},
      description: {default: 'Donec posuere neque in elit luctus tempor consequat enim egestas. Nulla dictum egestas leo at lobortis.'},
      name: {default: 'EVENT INVITATION'}
    }
  }
</script>

<style>

</style>