import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import './index.css'

Vue.config.devtools = true
Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
