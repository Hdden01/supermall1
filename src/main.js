import Vue from 'vue'
import App from './App.vue'
import { Icon } from 'vant';
Vue.use(Icon);
import { Swipe, SwipeItem } from 'vant';
Vue.use(Swipe).use(SwipeItem);
import {Lazyload} from 'vant';
Vue.use(Lazyload);
import router from './router';
import store from './store'
Vue.config.productionTip = false
Vue.prototype.$bus=new Vue();

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
