const state = () => ({
  userList: [],
  currentUser: {}
})

const mutations = {
  setUserList (state, payLoad) {
    state.userList = payLoad
  }
}

const actions = {
 loadUserList ({commit, dispatch}) {
   const loadedUsers = [
     {name: 'Courage', surname: 'Larese', birthDate: '1991-05-24'},
     {name: 'Juliet', surname: 'Larese', birthDate: '1993-01-27'},
     {name: 'Sophia', surname: 'Larese', birthDate: '1975-05-19'}
   ]
   commit('setUserList', loadedUsers)
 }
}