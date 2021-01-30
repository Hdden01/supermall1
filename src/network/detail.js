import {request} from './request'
export async function getDetail(iid){
    return request({
        url:'/detail',
        // 根据参数传递对应的数据
        params:{
            iid
        }
    })
};
// 使用实例化对象存储获取的数据
// 商品信息
export class Goods{
    constructor(itemInfo,columns,services){
        this.title=itemInfo.title;
        this.desc=itemInfo.desc;
        this.newPrice=itemInfo.price;
        this.oldPrice=itemInfo.oldPrice;
        this.discount=itemInfo.discountDesc;
        this.discountBgColor=itemInfo.discountBgColor;
        this.columns=columns;
        this.services=services;
        this.realPrice=itemInfo.lowPrice;
    }
}
export class Shop{
    constructor(shopInfo){
        this.log=shopInfo.shopLogo;
        this.name=shopInfo.name;
        this.fans=shopInfo.cFans;
        this.sells=shopInfo.cSells;
        this.score=shopInfo.score;
        this.goodsCount=shopInfo.cGoods;
    }
}