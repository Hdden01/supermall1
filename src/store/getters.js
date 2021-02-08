export default {
    cartLength(state) {
        return state.cartList.length;
    },
    // 将数据返回出去方便组件使用
    cartList(state){
        return state.cartList;
    }
}