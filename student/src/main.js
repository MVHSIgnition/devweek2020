import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify';
import AgoraRTM from 'agora-rtm-sdk';
import { LoaderPlugin } from 'vue-google-login';
import { CLIENT_ID } from '@/constants.js';
import { setUserData } from '@/utils.js';
import store from '@/store.js';
Object.defineProperty(Vue.prototype, '$client', { value: AgoraRTM });

Vue.use(LoaderPlugin, {
  client_id: CLIENT_ID,
});

Vue.GoogleAuth.then(auth2 => {
  auth2.isSignedIn.listen((signedIn) => {
    if (signedIn) {
      console.log('USER HAS SIGNED IN! ', auth2.currentUser.get());
      
      setUserData(auth2.currentUser.get());
      if (router.currentRoute.path == '/sign_in')
        router.push('/join');
    } else {
      console.log('USER HAS SIGNED OUT!');
      
      router.push('/sign_in');
    }
  });

  if (auth2.isSignedIn.get()) {
    console.log('currentUser: ', auth2.currentUser.get());
    
    setUserData(auth2.currentUser.get());
    if (router.currentRoute.path == '/sign_in')
      router.push('/join');
  } else {
    router.push('/sign_in');
  }
});

Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
