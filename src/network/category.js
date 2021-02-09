import { request } from './request';
// 分类左侧菜单导航
export function getCategoryData() {
    return request({
        url: '/category'
    })
}
export function getCategorySubData(maitKey){
    let url="/subcategory"
    return request({
        url,
        params:{
            maitKey
        }
    })
}
