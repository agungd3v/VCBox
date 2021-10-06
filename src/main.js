import Vue from 'vue'
import App from './App.vue'
import store from './store'

Vue.config.productionTip = false

// Initialize plugins
import './plugins/axios'

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
