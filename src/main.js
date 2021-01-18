import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import router from './router'
import AmountInput from './components/AmountInput'
import Button from './components/Button'
import WinLoseAlert from './components/WinLoseAlert'

Vue.config.productionTip = false

Vue.component('AmountInput', AmountInput)
Vue.component('Button', Button)
Vue.component('WinLoseAlert', WinLoseAlert)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
