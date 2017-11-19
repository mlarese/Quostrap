const state = () => ({
  list: [],
  search: '',
  orderBy: 'surname',
  record: {},
  mode: 'listMode'
})

const mutations = {
  setList (state, payLoad) {
    state.list = payLoad
  },
  setRecord (state, payLoad) {
    state.record = payLoad
  },
  setOrderBy (state, payload) {
    state.orderBy = payload
  },
  setSearch (state, payload) {
    state.search = payload
  },
  setMode (state, payload) {
    state.mode = payload
  }
}

const actions = {
  search({commit,dispatch}) {
    return dispatch ('api/get', {url: '/patients'})
      .then(response => {
        commit('setList', response.data)
        }
      )
  },
  add({commit,dispatch}) {
    const emptyRecord = {
      name: '',
      surname: '',
      email: '',
      occupation: '',
      birthday: '',
      language: ''
    }
    commit('setRecord',emptyRecord)
    commit('setMode', 'addMode')
  },
  cancel({commit}) {
    commit('setMode', 'listMode')
  },
  edit({commit, dispatch}, record) {
    commit('setRecord', record)
    commit('setRecord', 'editMode')
  },
  save({commit,dispatch,state}){
    if(state.mode === 'editMode') {
      return dispatch ('api/post', {url: '/patients'}, state.record)
    } else {
      return dispatch ('api/put', {url: 'patients'}, state.record)
    }
  }
}

