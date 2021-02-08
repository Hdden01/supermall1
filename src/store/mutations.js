export default {
    muAddCounter(state,playload){
        // 商品重复数量加一
        playload.count++;
     },
     muAddCart(state,playload){
        //  记录商品状态  是否选中
         playload.checked=false;
        // 点击加入购物车商品无重复
         state.cartList.push(playload)
     }
}