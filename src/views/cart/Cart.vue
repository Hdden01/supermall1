<template>
    <div class='cart'>
        <!-- 导航 -->
        <NavBar class="navbar">
            <template v-slot:center>购物车({{Length}})</template>
        </NavBar>
        <!-- 商品列表展示 -->
        <CartList class="list"/>
        <!-- 底部汇总 -->
       <CartBottomBar/>
    </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import CartList from 'views/cart/childComps/CartList';
import CartBottomBar from 'views/cart/childComps/CartBottomBar';
import {mapGetters} from 'vuex'
export default {
    name: 'Cart',
    components: { NavBar ,CartList,CartBottomBar},
    computed: {
        // 两种语法
        // 写法一
        // ...mapGetters(['cartLength'])
        // 写法二
        ...mapGetters({Length:'cartLength'})
    
    }
};
</script>

<style scoped>
.navbar{
    position: fixed;
    width: 100%;
    background: var( --color-tint);
    color: #fff;
    font-weight: bold;
    font-size: 20px;
    box-shadow: 0 1px 1px rgba(100, 100, 100, .1);
    z-index: 1;
}
</style>