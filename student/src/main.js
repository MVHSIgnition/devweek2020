import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify';
import AgoraRTM from 'agora-rtm-sdk';
Object.defineProperty(Vue.prototype, '$client', { value: AgoraRTM });

Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  render: function (h) { return h(App) }
}).$mount('#app')
