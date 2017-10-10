<template>
        <div>
        <div class="row">
            <b>{{name}}</b></div>
        <div class="row">
            {{noPren}} prenotazioni effetuate-<strong style="color: blue"> Ultima Prenotazione il {{lastPren}}</strong>
        </div>
            <div class="row">
                <div class=" col-xs-3 col-lg-3">
                    <inpu-group
                            label="Saldo Punti"
                            :value="numbers"
                            color="blue"
                            background-color="grey"
                    />
                </div>
                <div class=" col-xs-3 col-lg-3">
                    <inpu-group
                            label="Premi gia Ritirati"
                            :value="giftTaken"
                            color="blue"
                            background-color="grey"
                    />
                </div>
                <div class=" col-xs-3 col-lg-3">
                    <inpu-group
                            label="CashBack Accum"
                            :value="sumCash"
                            color="blue"
                            background-color="grey"
                    />
                </div>
                <div class=" col-xs-3 col-lg-3">
                    <inpu-group
                            label="CashBack Ritirati"
                            :value="cashTaken"
                            color="blue"
                            background-color="grey"
                    />
                </div>
                <div class="panel-footer">
                    <div class="row">
                        <div class="col-lg-6">
                            <sub-info
                                icon="glyphicon glyphicon-search"
                                label="Hai una richiesta di"
                                value="£30"
                                backgroundColor="darkviolet"
                                color="white"
                            />
                        </div>
                        <div class="col-lg-6">
                            <sub-info
                                    icon="glyphicon glyphicon-search"
                                    label="Hai una richiesta di"
                                    value="£30"
                                    backgroundColor="blue"
                                    color="white"
                            />
                        </div>
                    </div>

                </div>
            </div>
         </div>
</template>

<script>
  import InpuGroup from '../input-group/InputGroup'
  import SubInfo from '../userinfo/SubInfo.vue'
  export default {
    components: {InpuGroup, SubInfo},
    props: {
      name: {default: 'asemota Courage'},
      noPren: {default: 4},
      lastPren: {default: '21-2-2017'},
      numbers: {default: 1232},
      giftTaken: {default: 0},
      sumCash: {default: '£345'},
      cashTaken: {default: '£2466'}
    }
  }
</script>

<style>

</style>