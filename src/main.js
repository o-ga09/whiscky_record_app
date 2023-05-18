import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './index.css'
import axios from 'axios'
import store from '@/store/index.js';

Vue.config.productionTip = false

new Vue({
  axios,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
