const state = () => ({
    productsList: [],
    productsSpecification: -1,
    loading: false
})

const mutations = {
  setProductsList (state, payload) {
    state.productsList = payload
  },
  setProductsSpecification (state, payload) {
    state.productsSpecification = payload
  },
  setLoading (state,payload) {
    state.loading = payload
  }
}

const actions = {
  loadProductsList ({commit, dispatch}) {
    dispatch ('defineLoading', true)
    return dispatch ('api/get', {url: '/products'})
      .then(response => {
        commit ('productsList', response.data)
        dispatch ('defineLoading', false)
        dispatch ('defineProductsSpecification', 2)
      })
  },
  defineLoading ({commit, dispatch}) {
    commit('setLoading', false)
  },
  defineProductsSpecifiction ({commit, dispatch}, index) {
    commit('setProductsSpecification', index)
  }
}

const getters = {
  getProductsSpecification: state => state.productsList[state.productsSpecification]
}
