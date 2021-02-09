import Toast from './Toast';
const obj={}
// 传递进去Vue对象
obj.install=function (Vue) {
    // document.body.appendChild(Toast.$el);  组件还没挂载
    // Vue.prototype.$toast=Toast;
    // 1.创建组件构造器
    const toastConstructor=Vue.extend(Toast);
    // console.log(11);
    // 2.new的方式，根据组件构造器，可以创建出来一个组件对象
    const toast=new toastConstructor();
    // 3.将组建对象手动挂载到某一个元素(div)上
    console.log(Toast);
    toast.$mount(document.createElement('div'));
    // 4.toast.$el对应的就是div
    document.body.appendChild(toast.$el);
    Vue.prototype.$toast=toast;
}
export default obj