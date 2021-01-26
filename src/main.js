import Vue from 'vue'
import App from './App.vue'
import { Icon } from 'vant';
Vue.use(Icon);
import { Swipe, SwipeItem } from 'vant';
Vue.use(Swipe).use(SwipeItem);
import {Lazyload} from 'vant';
Vue.use(Lazyload);
import router from './router';
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
