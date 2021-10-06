import Vue from 'vue'
import App from './App.vue'
import store from './store'

Vue.config.productionTip = false

// Initialize plugins
import './plugins/axios'
import socket from './plugins/socket'

// Initialize prototype
Vue.prototype.$socket = socket

new Vue({
  store,
  created() { this.$store.commit('initializeapp') },
  render: h => h(App)
}).$mount('#app')
