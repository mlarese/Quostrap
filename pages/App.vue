<template>
    <div id="app">
        <app-registration @userRegistered="userRegistered" :users="unregisteredUsers"></app-registration>
        <app-registrations @userUnregistered="userUnregistered" :registrations="registrations"></app-registrations>
    </div>
</template>
<script>
    import Registration from '../store/src/components/Registration.vue'
    import Registrations from '../store/src/components/Registrations.vue'
</script>