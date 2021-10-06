import Vue from 'vue'
import Vuex from 'vuex'
import webSocketPlugin from './webSocketPlugin'
import socket from '../plugins/socket'

Vue.use(Vuex)
const webSocket = webSocketPlugin(socket)

export default new Vuex.Store({
  plugins: [webSocket],
  state: {
    user: null,
    token: null,
    loader: {
      status: false,
      message: ''
    },
    announcement: {
      status: false,
      message: '',
      background: ''
    }
  },
  mutations: {
    initializeapp(state) {
      const getBearer = JSON.parse(localStorage.getItem('bearer'))
      if (getBearer) {
        state.user = getBearer.user
        state.token = getBearer.token
      }
    },
    setUser (state, value) {
      state.user = value
    },
    setToken (state, value) {
      state.token = value
    },
    setLoader (state, value) {
      state.loader = value
    },
    setAnnouncement (state, value) {
      state.announcement = value
    }
  },
  actions: {
    setUser ({ commit }, params) {
      commit('setUser', params)
    },
    setToken ({ commit }, params) {
      commit('setToken', params)
    },
    setLoader ({ commit }, params) {
      commit('setLoader', JSON.parse(params))
    },
    setAnnouncement ({ commit }, params) {
      setTimeout(() => {
        commit('setAnnouncement', JSON.parse(params))
      }, 1500)
      setTimeout(() => {
        commit('setAnnouncement', JSON.stringify({
          status: false,
          message: '',
          background: ''
        }))
      }, 6500)
    },
    logout ({ commit }, params = false) {
      if (params) {
        commit('setUser', null)
        commit('setToken', null)
        localStorage.removeItem('bearer')
      }
    }
  },
  getters: {
    user: state => state.user,
    token: state => state.token,
    loader: state => state.loader,
    announcement: state => state.announcement
  }
})
