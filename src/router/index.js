import Vue from 'vue';
import VueRouter from 'vue-router';
const About = () => import('views/category/Aboout');
const Home=()=>import('views/home/Home');
const Detail=()=>import('views/detail/Detail')
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
        path:'/about',
        component:About
    },{
        path:'/detail/:iid',
        component:Detail
    }
]
// 2.创建实例对象
const router = new VueRouter({
    mode: 'history',
    routes

});
// 3.导出对象
export default router;