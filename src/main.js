import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './assets/css/index.css'

Vue.config.productionTip = false

/**
 * Imports and prototypes
 */
import {Store} from "./application/Store";
Vue.prototype.$store = Store;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
