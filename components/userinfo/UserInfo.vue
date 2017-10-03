<template>
    <div class="col-xs-12 col-sm-12 col-md-9 col-lg-9">
        <div class="row">
            <b>{{name}}</b></div>
        <div class="row" style="color: #2aabd2">
            {{noPren}} prenotazioni effetuate-<strong style="color: blue"> Ultima Prenotazione il {{lastPren}}</strong>
            <div class="row">
                <div class="col-xs-6 col-sm-6 col-md-3 col-lg-3">
                    <div class="input-group">
                        <input type="text" class="form-control" placeholder="Saldo Punti" aria-describedby="basic-addon2">
                        <span class="input-group-addon" id="basic-addon2">{{totPoint}}</span>
                    </div>
                </div>
                <div class="col-xs-6 col-sm-6 col-md-3 col-lg-3">
                    <div class="input-group">
                        <input type="text" class="form-control" placeholder="Premi gia ritirati" aria-describedby="basic-addon2">
                        <span class="input-group-addon" id="basic-addon1">{{giftTaken}}</span>
                    </div>
                </div>
                <div class="col-xs-6 col-sm-6 col-md-3 col-lg-3">
                    <div class="input-group">
                        <input type="text" class="form-control" placeholder="Cashback accum." aria-describedby="basic-addon2">
                        <span class="input-group-addon" id="basic-addon3">&euro;{{accumCash}}</span>
                    </div>
                </div>
                <div class="col-xs-6 col-sm-6 col-md-3 col-lg-3">
                    <div class="input-group">
                        <input type="text" class="form-control" placeholder="Cashback Ritirati" aria-describedby="basic-addon2">
                        <span class="input-group-addon" id="basic-addon4">&euro;{{cashTaken}}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    props: [
      'name',
      'noPren',
      'lastPren',
      'totPoint',
      'giftTaken',
      'accumCash',
      'cashTaken'
    ]
  }
</script>

<style>

</style>