import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
import mutations from './mutations'
import actions from './actions'
import getters from './getters'
const store = new Vuex.Store({
    state: {
        // 存储添加的商品
        cartList:[]
    },
    mutations,
    actions,
    getters

})
export default store;