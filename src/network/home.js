// 存放首页的请求
import{request} from './request'
// Multipledata多个数据，获取首页的多个数据 
export async function getHomeMultipledata() { 
    return await request({
        // 既包含轮播图的数据也包含轮播图下面的数据
        url:'/home/multidata'
    })
 }
//  商品信息展示数据  特殊点根据页面转换数据
export async function getHomeGoodsdata(type,page) {
    return request({
        url:"/home/data",
        // 相当于路由的query传参
        params:{
            type,
            page

        }
    })
    
}