import { login } from '@/api/user'
import { getToken, setToken } from '@/utils/auth'

const state = {
  token: getToken(),
  name: '',
  avatar: '',
  introduction: '',
  roles: []
}

const mutations = {
  SET_TOKEN: (state, token) => {
    state.token = token
  },
  SET_INTRODUCTION: (state, introduction) => {
    state.introduction = introduction
  },
  SET_NAME: (state, name) => {
    state.name = name
  },
  SET_ROLES: (state, roles) => {
    state.roles = roles
  }
}

const actions = {
  login({ commit }, userInfo) {
    const { username, password, vcode } = userInfo
    return new Promise((resolve, reject) => {
      login(`username=${username.trim()}&password=${password.trim()}&vcode=${vcode.trim()}`).then(response => {
        const { data } = response
        commit('SET_TOKEN','admin')
        setToken('admin')
        resolve(data)
      }).catch(error => {
        reject(error)
      })
    })
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}
