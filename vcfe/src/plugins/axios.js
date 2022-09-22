import Vue from 'vue'
import axios from 'axios'
import store from '../store'

axios.defaults.baseURL = process.env.VUE_APP_API_URL

axios.interceptors.request.use(
  function (config) {
    const token = store.state.token
    config.headers.common['Authorization'] = token ? `Bearer ${token.bearer}` : ''
    config.headers.post['Content-Type'] = 'application/json'
    return config
  },
  function (error) {
    return Promise.reject(error)
  }
)

axios.interceptors.response.use(
  function (response) {
    response = typeof response.data !== undefined ? response.data : response
    return response
  },
  function (error) {
    return Promise.reject(error)
  }
)

Plugin.install = function(Vue) {
  Vue.axios = axios
  window.axios = axios
  Object.defineProperties(Vue.prototype, {
    axios: {
      get() { return axios },
      post() { return axios }
    },
    $axios: {
      get() { return axios },
      post() { return axios }
    }
  })
}

Vue.use(Plugin)

export default Plugin