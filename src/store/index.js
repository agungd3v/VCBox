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
    conversation: null,
    lists: [],
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
      }
    },
    setUser (state, value) {
      state.user = value
    },
    setLoader (state, value) {
      state.loader = value
    },
    setAnnouncement (state, value) {
      state.announcement = value
    },
    setConversation (state, value) {
      state.conversation = value
    },
    setLists (state, value) {
      state.lists = value
    }
  },
  actions: {
    setUser ({ commit }, params) {
      commit('setUser', params)
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
    setConversation ({ commit }, params) {
      commit('setConversation', params)
    },
    setLists ({ commit }, params) {
      commit('setLists', params)
    },
    logout ({ commit }, params = false) {
      if (params) {
        commit('setUser', null)
        localStorage.removeItem('bearer')
        return true
      }
    }
  },
  getters: {
    user: state => state.user,
    loader: state => state.loader,
    announcement: state => state.announcement,
    conversation: state => JSON.parse(state.conversation),
    lists: state => state.lists
  }
})
