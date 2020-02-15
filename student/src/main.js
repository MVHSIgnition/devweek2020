import Vue from 'vue'
import App from './App.vue'
import router from './router'
import AgoraRTM from 'agora-rtm-sdk';
Object.defineProperty(Vue.prototype, '$client', { value: AgoraRTM });

Vue.config.productionTip = false

new Vue({
  router,
  render: function (h) { return h(App) }
}).$mount('#app')
