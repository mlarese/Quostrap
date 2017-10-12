<template>
    <div class="STSS__roomsNew__item__ssr col-xs-12 no-p-r" style="background-color:ghostwhite">
        <div>
     <strong>{{description}}</strong>
    <a href="#" class="STSS__roomsNew__item__ssr__remove">
        <svg xml:space="preserve" viewBox="0 0 612 612" height="612px" width="612px" y="0px" x="0px" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" version="1.1" class="svg-ico">
            <g><g><g><path d="M415.338,196.662c-7.535-7.535-19.737-7.535-27.253,0l-82.181,82.18l-81.033-81.032c-7.478-7.478-19.584-7.478-27.042,0\n
            c-7.478,7.478-7.478,19.584,0,27.042l81.033,81.033l-81.587,81.587c-7.535,7.535-7.535,19.736,0,27.253s19.737,7.517,27.253,0\n
            l81.588-81.587l81.032,81.032c7.478,7.478,19.584,7.478,27.043,0c7.478-7.478,7.478-19.584,0-27.043l-81.033-81.032l82.181-82.18\n
            C422.873,216.399,422.873,204.179,415.338,196.662z M306,0C136.992,0,0,136.992,0,306s136.992,306,306,306\n
            c168.988,0,306-137.012,306-306S475.008,0,306,0z M306,573.75C158.125,573.75,38.25,453.875,38.25,306\n
            C38.25,158.125,158.125,38.25,306,38.25c147.875,0,267.75,119.875,267.75,267.75C573.75,453.875,453.875,573.75,306,573.75z"></path>
            </g></g></g></svg></a>

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
         <div class="STSS__roomsNew__item__price pull-right"><del>{{prevAmt}}</del><span>{{discount}}%</span><em>{{totAmt}}<sup>,{{decAmt}}</sup></em></div>
     </div>
    </div>
</template>

<script>
  export default {
    props: {
      description: {default: 'transfer to aeroporto di vce'},
      previousAmount: {default: '£1020'},
      discount: {default: -32},
      totalAmount: {default: '£4200'},
      decimalAmount: {default: 34}
    }
  }
</script>

<style>

</style>