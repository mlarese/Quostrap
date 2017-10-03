<template>
    <div class="container">

            <div class="col-lg-12">
                <user-info
                   name="Courage Asemota"
                   noPren="3"
                   lastPren="21-2-1991"
                   totPoint="2312"
                   giftTaken="5"
                   accumCash="23,323"
                   cashTaken="1,334"
                />
            </div>
            <div class="col-lg-12">
                <personal-info
                    name="Courage"
                    surname="Asemota"
                    email="acourage91@gmail.com"
                    number="+393927337"
                    sex="male"
                    dateOfBirth="21-1-1992"
                    adressNo="via a. di foro numero 103"
                    city="belluno"
                    travelwith="men in black"
                    cap="21331"
                    reside="belluno"
                    country="Italy"
                    spokenLang="english and italian"

                    />
            </div>
    </div>


</template>
<script>
  import Avatar from '../components/avatar/Avatar'
  import TitleBar from '../components/titlebar/TitleBar'
  import UserInfo from '../components/userinfo/UserInfo'
  import PersonalInfo from '../components/userinfo/PersonalInfo'
  export default {
    components: {Avatar, TitleBar, UserInfo, PersonalInfo},
    props: []
  }
</script>

<style>

</style>