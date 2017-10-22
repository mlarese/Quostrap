<template>
    <div class="STSS__roomsNew__item__ssr col-xs-12 no-p-r" style="background-color:ghostwhite">
        <div>
     <strong>{{description}}</strong>
    <a href="#" class="STSS__roomsNew__item__ssr__remove">
        <icon-tick />
        </a>

            <div class="STSS__roomsNew__item__ssr__qty pull-left">
                <span class="STSS__roomsNew__item__ssr__qty__label">Q.ta</span>
                <select aria-hidden="true" tabindex="-1" id="accessorySel_3" name="accessorySel[3]" class="STSS__roomsNew__item__ssr__qty__select select2-hidden-accessible">
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    </select><span dir="ltr" class="select2 select2-container select2-container--bootstrap" style="width: 1px;">
                    <span class="selection">
                        <span aria-expanded="false" aria-haspopup="true" role="combobox" tabindex="-1" aria-labelledby="select2-accessorySel_3-container" class="select2-selection select2-selection--single base-select-custom">
                            <span id="select2-accessorySel_3-container" title="0" class="select2-selection__rendered">0</span>
                            <span role="presentation" class="select2-selection__arrow"><b role="presentation"></b></span>
                        </span>
                    </span>
                <span aria-hidden="true" class="dropdown-wrapper">
                </span>
            </span>
            </div>
         <div class="STSS__roomsNew__item__price pull-right"><del>{{previousAmount}}</del><span> {{discount}}%</span><em> {{totalAmount}}<sup>, {{decimalAmount}}</sup></em></div>
     </div>
    </div>
</template>

<script>
  import IconTick from '../../Icons/IconTick'
  export default {
    props: {
      name: {default: 'transfer to aeroporto di vce'},
      previousAmount: {default: '£1020'},
      discount: {default: -32},
      price: {default: '£4200'},
      decimalAmount: {default: 34}
    },
    components: {IconTick}
  }
</script>

<style>

</style>