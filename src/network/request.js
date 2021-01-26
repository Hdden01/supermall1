import axios from "axios";
export async function request(config) {
    // 创建axios实例
    const instance=axios.create({
        baseURL:'http://152.136.185.210:7878/api/m5',
        timeout:5000
    });
    // 响应拦截
    instance.interceptors.response.use(res=>{
        return res.data;
    },err=>{
        return err;
    })
    // 发送真正的网络请求
    return await instance(config);

}