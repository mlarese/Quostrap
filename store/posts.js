const state = () => ({
  postList: [],
  loading: false,
  currentPost: -1
})

const mutations = {
  setPostList (state, payLoad) {
    state.postList = payLoad
  },
  setLoading (state, payLoad) {
    state.loading = payLoad
  },
  setCurrentPost (state, payLoad) {
    state.currentPost = payLoad
  },

}

const actions = {
  loadPostList ({commit, dispatch}) {
    dispatch('defineLoading', true)
    return dispatch('api/get', {url: '/posts'})
      .then(response => {
        commit ('postList', response.data)
        dispatch('defineLoading', false)
        dispatch('defineCurrentPost', 2)
    })

  },
  defineLoading ({commit, dispatch}) {
    commit('setLoading', false )
  },
  defineCurrentPost ({commit, dispatch},index) {
    commit ('setCurrentPost', index)
  }
}

const getters = {
  getCurrentPost: state => state.postList[state.currentPost]
}