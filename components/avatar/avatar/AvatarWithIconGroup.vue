<template>
    <div class="row"style="background-color: deepskyblue;">
        <div class="col-xs-1 col-lg-1">
            <img class="img-responsive" :src="avatarPic" alt="trypic" style="background-size: cover;">
        </div>
        <div class="col-lg-10">
            <div class="row">
              <div class="col-xs-4 col-lg-4">{{giftName}}</div>
              <div class="col-xs-4 col-lg-4"></div>
              <div class="col-xs-4 col-lg-4">Richiesto il <b>{{dateReq}}</b>
              </div>
            </div>
            <div class="row">
                <div class=" col-xs-4 col-lg-4">
                    <inpu-group
                        label="Saldi Punti"
                        :value="numbers"
                        color="red"
                    />
                </div>
                    <div class=" col-xs-4 col-lg-4">
                        <inpu-group
                        label="CashBack"
                        value="£300"
                        color="white"
                        background-color="blue"
                    />
                    </div>
                </div>

            <div class="row">
                <div class="col-xs-4 col-lg-4">
                    <details>
                        <summary>Visualizza la scheda premio</summary>
                        <p> - User Name.</p>
                        <p>types of gift and content of the gift.</p>
                    </details>
                </div>
            </div>
        </div>

        <div class="col-xs-1 col-lg-1" style="background-color: cadetblue;">
            <i class="fa fa-gift icon" style="text-align: center;">
                <br>INVIO PREMIO <span class="caret"></span>
            </i>
        </div>
    </div>
</template>

<script>
  import InpuGroup from '../input-group/InputGroup'
  export default {
    components: {InpuGroup},
    props: {
      avatarPic: {default: '../images/trypic.jpg'},
      giftName: {default: 'cuffie della sicilia'},
      dateReq: {default: '21-2-3001'},
      label: {default: 'Saldo Punti'},
      numbers: {default: 2013}
    }
  }
</script>

<style>

</style>