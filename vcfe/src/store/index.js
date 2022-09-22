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
    gconversation: null,
    ingroup: false,
    lists: [],
    loader: {
      status: false,
      message: ''
    },
    announcement: {
      status: false,
      message: '',
      background: ''
    },
    loadconversation: false,
    loadlists: false
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
    setGconversation (state, value) {
      state.gconversation = value
    },
    setIngroup (state, value) {
      state.ingroup = value
    },
    setLists (state, value) {
      state.lists = value
    },
    setLoadconversation (state, value) {
      state.loadconversation = value
    },
    setLoadlists (state, value) {
      state.loadlists = value
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
    setGconversation ({ commit }, params) {
      commit('setGconversation', params)
    },
    setIngroup ({ commit }, params) {
      commit('setIngroup', params)
    },
    setLists ({ commit }, params) {
      commit('setLists', params)
    },
    setLoadconversation({ commit }, params) {
      commit('setLoadconversation', params)
    },
    setLoadlists({ commit }, params) {
      commit('setLoadlists', params)
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
    gconversation: state => JSON.parse(state.gconversation),
    ingroup: state => state.ingroup,
    lists: state => state.lists,
    loadconversation: state => state.loadconversation,
    loadlists: state => state.loadlists
  }
})
