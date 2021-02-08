import Vue from 'vue';
import VueRouter from 'vue-router';
const Category = () => import('views/category/Category');
const Home=()=>import('views/home/Home');
const Detail=()=>import('views/detail/Detail');
const Cart=()=>import ('views/cart/Cart');
// 1.安装路由
Vue.use(VueRouter);
const routes = [
    {
        path: "",
        redirect: '/home'
    }
    ,
    {
        path: "/home",
        component: Home
    },
    {
        path:'/category',
        component:Category
    },{
        path:'/detail',
        component:Detail
    },{
        path:'/cart',
        component:Cart
    }
]
// 2.创建实例对象
const router = new VueRouter({
    mode: 'history',
    routes

});
// 3.导出对象
export default router;