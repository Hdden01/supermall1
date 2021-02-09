import axios from "axios";
export  function request(config) {
    // 创建axios实例
    const instance=axios.create({
        baseURL:'http://152.136.185.210:7878/api/m5',
        timeout:8000
    });
    // 响应拦截
    instance.interceptors.response.use(res=>{
        return res.data;
    },err=>{
        console.log('来到了response拦截failure中');
        console.log(err);
        if (err && err.response) {
                  switch (err.response.status) {
                      case 400:
                          err.message = '请求错误'
                          break
                      case 401:
                          err.message = '未授权的访问'
                          break
                  }
              }
        return err;
    })
    // 发送真正的网络请求
    return  instance(config);

}