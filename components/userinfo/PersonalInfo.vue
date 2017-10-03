<template>
    <div class="container">
    <div class="row">
        <div class="col-xs-4 col-lg-4">
            Nome: <br> <b style="color: blue">{{name}}</b>
        </div>
        <div class="col-xs-4 col-lg-4">
            Cognome: <br> <b style="color: blue">{{cognome}}</b>
        </div>
        <div class="col-xs-4 col-lg-4">
            Indirizo email: <br> <b style="color: blue"> <a href="mailto:mariorosi@gmail.com">{{email}}</a> </b>
        </div>
    </div>
    <div class="row">
        <div class="col-xs-4 col-lg-4">
            Telefono: <br> <b style="color: blue">{{number}}</b>
        </div>
        <div class="col-xs-4 col-lg-4">
            Sesso: <br> <b style="color: blue">{{sex}}</b>
        </div>
        <div class="col-xs-4 col-lg-4">
            Data di Nascita: <br> <b style="color: blue">{{dateOfBirth}}</b>
        </div>
    </div>
    <div class="row">
        <div class="col-xs-4 col-lg-4">
            Indirizo: <br> <b style="color: blue">{{adressNo}}</b>
        </div>
        <div class="col-xs-4 col-lg-4">
            Citta: <br> <b style="color: blue">{{city}}</b>
        </div>
        <div class="col-xs-4 col-lg-4">
            Viaggi con: <br> <b style="color: blue">{{travelwith}}</b>
        </div>
    </div>
    <div class="row">
        <div class="col-xs-4 col-lg-4">
            CAP: <br> <b style="color: blue">{{cap}}</b>
        </div>
        <div class="col-xs-4 col-lg-4">
            Provincia: <br> <b style="color: blue">{{reside}}</b>
        </div>
    </div>
    <div class="row">
        <div class="col-xs-4 col-lg-4">
            Nazione: <br> <b style="color: blue">{{country}}</b>
        </div>
        <div class="col-xs-4 col-lg-4">
            Lingua Parlata: <br> <b style="color: blue">{{spokenLang}}</b>
        </div>
        <br>
    </div>
    <div class="row">
        <div class="col-xs-6 col-lg-12">
            <button type="submit" class="btn btn-default" style="color: #2aabd2">Reset Password</button>
            <i class="fa fa-exclamation-circle" style="font-size:20px"></i>
        </div>
    </div></div>
</template>

<script>
  export default {
    props: ['name', 'surname', 'email', 'number', 'sex', 'dateOfBirth', 'adressNo', 'city', 'travelwith', 'cap', 'reside', 'country', 'spokenLang']
  }
</script>

<style>

</style>