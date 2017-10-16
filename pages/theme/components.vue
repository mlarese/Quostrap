<template>
    <div class="row">
        <monthly-percentage/>
    </div>
</template>

<script>
  import colorWidget from '../../components/colorWidget/colorWidget'
  import monthlyPercentage from '../../components/monthlypercentage/monthlyPercentage'
  export default {
    components: { colorWidget, monthlyPercentage },
    props: []
  }
</script>
<style lang="scss">
    @import url("//netdna.bootstrapcdn.com/bootstrap/3.0.0/css/bootstrap.min.css");
    @import url("//maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css");
    @import "../../assets/anglecss/app.css";
</style>