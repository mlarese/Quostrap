<template>
    <div class="container">
                <div class="col-lg-12">
                    <avatar-with-icon-group/>
                    <personal-info/>
                    <user-info
                        cash-taken="£5868"
                        name="juliet asemota"

                    />
                </div>
    </div>


</template>
<script>
  import TitleBar from '../components/titlebar/TitleBar'
  import UserInfo from '../components/userinfo/UserInfo'
  import PersonalInfo from '../components/userinfo/PersonalInfo'
  import InputGroup from '../components/input-group/InputGroup'
  import InputGroupAmt from '../components/input-group/InputGroupAmt'
  import BtnGroup from '../components/avatar/btngroup/BtnGroup'
  import Prenotations from '../components/prenotations/Prenotations'

  export default {
    components: {TitleBar, UserInfo, PersonalInfo, InputGroup, InputGroupAmt, BtnGroup, Prenotations},
    props: []
  }
</script>

<style>

</style>