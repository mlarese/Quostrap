<template>
    <div class="STSS__roomsNew__acc col-xs-12"><div>
        <a href="#" class="STSS__roomsNew__item__ssr__remove">
            <svg xml:space="preserve" viewBox="0 0 612 612" height="612px" width="612px" y="0px" x="0px" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" version="1.1" class="svg-ico">
                <g><g><g><path d="M415.338,196.662c-7.535-7.535-19.737-7.535-27.253,0l-82.181,82.18l-81.033-81.032c-7.478-7.478-19.584-7.478-27.042,0\n
                c-7.478,7.478-7.478,19.584,0,27.042l81.033,81.033l-81.587,81.587c-7.535,7.535-7.535,19.736,0,27.253s19.737,7.517,27.253,0\n
                l81.588-81.587l81.032,81.032c7.478,7.478,19.584,7.478,27.043,0c7.478-7.478,7.478-19.584,0-27.043l-81.033-81.032l82.181-82.18\n
                C422.873,216.399,422.873,204.179,415.338,196.662z M306,0C136.992,0,0,136.992,0,306s136.992,306,306,306\n
                c168.988,0,306-137.012,306-306S475.008,0,306,0z M306,573.75C158.125,573.75,38.25,453.875,38.25,306\n
                C38.25,158.125,158.125,38.25,306,38.25c147.875,0,267.75,119.875,267.75,267.75C573.75,453.875,453.875,573.75,306,573.75z"></path>
                </g></g></g></svg></a>
        <div class="STSS__roomsNew__acc__price text-right">
            <b class="STSS__roomsNew__total__label">Totale assicurazione</b>
            <em class="STSS__roomsNew__total__price">{{totAmt}}<sup>,{{decAmt}}</sup></em>
        </div>
        <i class="STSS__roomsNew__acc__msg">{{textMsg}}</i>
        <div class="STSS__roomsNew__send text-center"><button class="btn form-control text-uppercase">prosegui</button>
        </div>
    </div>
    </div>
</template>

<script>
  export default {
    props: {
      textMsg: {default: 'il pagamento della polizza assicurativa avviene in modi separato'},
      totAmt: {default: '£900'},
      decAmt: {default: 67}
    }
  }
</script>

<style>

</style>