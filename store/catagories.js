const state = () => ({
  categoryList: [],
  currentCategory: -1,
  shopID: 2,
  userLanguageCode: 'en',
  partnerId: -1
})

const mutations = {
  setCategoryList (state, payload) {
    state.categoryList = payload
},setCurrentCategory (state, payload) {
    state.currentCategory = payload
},
  setShopId (state, payload) {
    state.shopID = payload
  },
  setUserLanguageCode (state, payload) {
    state.userLanguageCode = payload
  },
  setPartnerId (state, payload) {
    state.partnerId = payload
  }
}

const actions = {
loadCategoryList ({commit, dispatch}) {
  return dispatch('api/get', {url: '/categories'})
    .then (response => {
      commit ('setCategoryList', response.data)
      dispatch ('defineCurrentCategery', 2)
      return response
    })
},
  defineCurrentCategory ({commit, dispatch, state}, index) {
  commit('setCurrentCategory', index)
  }
}