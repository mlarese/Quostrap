const state = () => ({
  specialServicesList: [],
  specialServicesUser: -1,
  structureId: 3,
  portalId: 2,
  userLanguageCode: 'IT'
})

const mutations = {
  setSpecialservicesList (state, payload) {
    state.specialServiceList = payload
  },
  setSpecialServicesUser (state, payload) {
    state.specialServicesUser = payload
  },
  setStructureId (state, payload) {
    state.structureId = payload
  },
  setPortalId (state, payload) {
    state.portalId = payload
  },
  setUserLanguageCode (state, payload) {
    state.userLanguageCode = payload
  }
}

const actions = {
  loadSpecialservicesList ({commit, dispatch}) {
    return dispatch('api/get', {url: '/specialservices'})
      .then (response => {
        commit('setSpecialServicesList', response.data)
        dispatch('setSpecialServicesUser', 4)
        return response
      })
  },
  defineSpecialServicesUser ({commit, dispatch, state}, index) {
    commit('setSpecialServicesUser', index)
  }
}

const getters = {
  getSpecialServicesUser: state => state.specialServicesList[state.specialServicesUser]
}