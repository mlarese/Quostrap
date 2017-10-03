<template>
    <div class="container">

            <div class="col-lg-12">
                <input-group
                        displaytext="saldi punto"
                        number="3208"
                />
            </div>

    </div>


</template>
<script>
  import Avatar from '../components/avatar/Avatar'
  import TitleBar from '../components/titlebar/TitleBar'
  import UserInfo from '../components/userinfo/UserInfo'
  import PersonalInfo from '../components/userinfo/PersonalInfo'
  import InputGroup from '../components/input-group/InputGroup'
  export default {
    components: {Avatar, TitleBar, UserInfo, PersonalInfo, InputGroup},
    props: []
  }
</script>

<style>

</style>