export const state = () => ({
  productsList: [],
  currentProduct: -1,
  userLanguageCode: 'en'
})

export const mutations = {
  setProductsList (state, payload) {
    state.productsList = payload
  },
  setCurrentProduct (state, payload) {
    state.currentProduct = payload
  },
  setUserLanguageCode (state, payload) {
    state.userLanguageCode = payload
  }
}

export const actions = {
  loadProductsList ({commit, dispatch}) {
    return dispatch('api/get', {url: '/products1'})
      .then(response => {
        commit('setProductsList', response.data)
        dispatch('defineCurrentProduct', 4)
        return response
      })
  },
  defineCurrentProduct ({commit, dispatch, state}, index) {
    commit('setCurrentroduct', index)
  }
}
