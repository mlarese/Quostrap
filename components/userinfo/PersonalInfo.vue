<template>
    <div>
    <div class="row">
        <div class="col-xs-4 col-lg-4">
            Nome: <br> <b style="color: blue">{{record.name}}</b>
        </div>
        <div class="col-xs-4 col-lg-4">
            Cognome: <br> <b style="color: blue">{{record.surname}}</b>
        </div>
        <div class="col-xs-4 col-lg-4">
            Indirizo email: <br> <b style="color: blue"> <a href="mailto:mariorosi@gmail.com">{{record.email}}</a> </b>
        </div>
    </div>
    <div class="row">
        <div class="col-xs-4 col-lg-4">
            Telefono: <br> <b style="color: blue">{{record.number}}</b>
        </div>
        <div class="col-xs-4 col-lg-4">
            Sesso: <br> <b style="color: blue">{{record.sex}}</b>
        </div>
        <div class="col-xs-4 col-lg-4">
            Data di Nascita: <br> <b style="color: blue">{{record.dateOfBirth}}</b>
        </div>
    </div>
    <div class="row">
        <div class="col-xs-4 col-lg-4">
            Indirizo: <br> <b style="color: blue">{{record.adressNo}}</b>
        </div>
        <div class="col-xs-4 col-lg-4">
            Citta: <br> <b style="color: blue">{{record.city}}</b>
        </div>
        <div class="col-xs-4 col-lg-4">
            Viaggi con: <br> <b style="color: blue">{{record.travelwith}}</b>
        </div>
    </div>
    <div class="row">
        <div class="col-xs-4 col-lg-4">
            CAP: <br> <b style="color: blue">{{record.cap}}</b>
        </div>
        <div class="col-xs-4 col-lg-4">
            Provincia: <br> <b style="color: blue">{{record.reside}}</b>
        </div>
    </div>
    <div class="row">
        <div class="col-xs-4 col-lg-4">
            Nazione: <br> <b style="color: blue">{{record.country}}</b>
        </div>
        <div class="col-xs-4 col-lg-4">
            Lingua Parlata: <br> <b style="color: blue">{{record.spokenLang}}</b>
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
    props: {
      record: {
        default: () => ({
          name: 'superCourage',
          surname: 'SuperLarese',
          email: 'acourage',
          sex: 'male',
          adressNo: 'via a. di foro no103',
          city: 'belluno'
        })
      }
    }
  }
</script>

<style>

</style>