const state = () => ({
  userList: [],
  currentUser: -1
})

const mutations = {
  setUserList (state, payLoad) {
    state.userList = payLoad
  },
  setCurrentUser (state, payLoad) {
    state.currentUser = payLoad
  }
}

const actions = {
 loadUserList ({commit, dispatch}) {
   return dispatch('api/get', {url: '/users'})
     .then(response => {
       commit('setUserList', response.data)
       dispatch('defineCurrentUser', 0)
       return response
     })

 },
 defineCurrentUser ({commit, dispatch, state}, index) {
   commit('setCurrentUser', index)
 }
}