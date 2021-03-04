import Vue from 'vue'
import Vuesax from 'vuesax'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import 'vuesax/dist/vuesax.css'
import './plyr.css'
import './App.css'
import VueSocketIOExt from 'vue-socket.io-extended';
import { io } from 'socket.io-client';
const socket = io("http://localhost:3000");

Vue.use(VueSocketIOExt, socket)
Vue.config.productionTip = false
Vue.use(Vuesax);
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
