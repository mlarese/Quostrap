<template>
    <div class="elementAccessories STSS__accItem">
        <div class="col-xs-12 col-sm-7 no-p-l">
            <img :src="avatar" class="pull-left">
            <div class="descriptionAccessories STSS__accItem__desc STSS__accItem__desc--acc">
                <div class="accessoryName text-uppercase">{{minTitle}}</div>
                <div aria-multiselectable="true" role="tablist" class="panel-group">
                    <div class="panel panel-default"><div id="headingOne" role="tab" class="panel-heading">
                        <span class="STSS__accItem__desc__short hidden-xs">{{paragraph}}</span>
                        <a aria-controls="collapse-1" aria-expanded="true" href="#collapse-1" data-parent="#accordion" data-toggle="collapse" role="button" class="collapsed STSS__accItem__desc__tgl">
        Dettagli               </a></div><div aria-labelledby="heading-1" role="tabpanel" id="collapse-1" class="panel-collapse collapse STSS__accItem__desc__tgl-txt">
                        <div class="panel-body"><p>{{detParagraph}}</p></div>
                    </div>
                    </div>
                    <form class="form-horizontal" role="form">
                        <div class="form-group">
                            <label for="basic" class="col-xs-2 col-lg-2 control-label">Select</label>
                            <div class="col-lg-2">
                                <select id="basic" class="selectpicker show-tick form-control">
                                    <option>cow</option>
                                    <option data-subtext="option subtext">bull</option>
                                    <option class="get-class" disabled="">ox</option>
                                    <optgroup label="test" data-subtext="optgroup subtext">
                                        <option>ASD</option>
                                        <option selected="">Bla</option>
                                        <option>Ble</option>
                                    </optgroup>
                                </select>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

        </div>
        <div class="col-xs-12 col-sm-5 STSS__accItem__priceNew STSS__accItem__priceNew--add no-p-l">
            <small>Totale</small>
            <span class="STSS__accItem__qty__label">Quantità</span>
            <em>{{totAmt}}<sup>,{{decAmt}}</sup></em>
            <div class="STSS__accItem__qty pull-left">
                <select aria-hidden="true" tabindex="-1" id="accessorySel_3" name="accessorySel[3]" class="selectAccessories select2-hidden-accessible">
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
                </select>
                <span dir="ltr" class="select2 select2-container select2-container--bootstrap" style="width: 1px;">
                <span class="selection"><span aria-expanded="false" aria-haspopup="true" role="combobox" tabindex="-1" aria-labelledby="select2-accessorySel_3-container" class="select2-selection select2-selection--single base-select-custom">
                    <span id="select2-accessorySel_3-container" title="0" class="select2-selection__rendered">0</span>
                    <span role="presentation" class="select2-selection__arrow"><b role="presentation"></b></span>
                </span>
                </span>
                    <span aria-hidden="true" class="dropdown-wrapper">
                    </span>
                </span>
            </div>
            <button type="submit" class="STSS__accItem__priceNew__button text-uppercase pull-right">
        Aggiunto
        <svg xml:space="preserve" enable-background="new 0 0 78 57" viewBox="0 0 78 57" height="57px" width="78px" y="0px" x="0px" xmlns:a="http://ns.adobe.com/AdobeSVGViewerExtensions/3.0/" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" version="1.1">
            <g>
            <path d="M78.049,8.572l-48.59,48.591c-0.428,0.429-1.121,0.429-1.548,0L0.32,29.572\n
                c-0.427-0.426-0.427-1.119,0-1.547l6.704-6.704c0.428-0.427,1.121-0.427,1.548,0l20.113,20.112L69.798,0.32\n
                c0.43-0.427,1.12-0.427,1.549,0l6.702,6.704C78.478,7.451,78.478,8.144,78.049,8.572">
            </path>
            </g>
        </svg>
            </button>
        </div>
    </div>
</template>

<script>
  export default {
    props: {
      avatar: {default: '../images/img_service01.jpg'},
      minTitle: {default: 'INGRESSO CENTRO TERMALE'},
      paragraph: {default: 'cahshhsajsjjajsh shbjhsa shhsankhkuwhuyu nabshbuwq'},
      detParagraph: {default: 'sabjbhajbhjsbjadbjabhdjhbjjhbjh'},
      totAmt: {default: '£455'},
      decAmt: {default: '45'}
    }
  }
</script>

<style>

</style>