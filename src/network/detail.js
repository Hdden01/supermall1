import {request} from './request'
export async function getDetail(iid){
    return request({
        url:'/detail',
        // 根据参数传递对应的数据
        params:{
            iid
        }
    })
}