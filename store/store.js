import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export const store = new Vuex.store({
  state: {
    registrations: [],
    users: [
      {id: 1, name: 'Max', regsistered: false},
      {id: 2, name: 'courage', regsistered: false},
      {id: 3, name: 'Juliet', regsistered: false},
      {id: 4, name: 'Paul', regsistered: false}
    ]
  }
})