import Vue from 'vue'
import App from '../.nuxt/App.vue'

import {store} from 'store'

new Vue({
  el: '#app',
  store,
  render: h => h(App)
})