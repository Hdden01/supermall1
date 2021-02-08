import { request } from './request'
export  function getDetail(iid) {
    return request({
        url: '/detail',
        // 根据参数传递对应的数据
        params: {
            iid
        }
    })
};
export function getRecommend() { 
    return request({
        url:'recommend'
    })
 }
// 1.使用实例化对象存储获取的数据
// 商品信息
export class Goods {
    constructor(itemInfo, columns, services) {
        this.title = itemInfo.title;
        this.desc = itemInfo.desc;
        this.newPrice = itemInfo.price;
        this.oldPrice = itemInfo.oldPrice;
        this.discount = itemInfo.discountDesc;
        this.discountBgColor = itemInfo.discountBgColor;
        this.columns = columns;
        this.services = services;
        this.realPrice = itemInfo.lowPrice;
    }
}
// 1.使用class类实例化对象
// 店铺信息
export class Shop {
    constructor(shopInfo) {
        this.log = shopInfo.shopLogo;
        this.name = shopInfo.name;
        this.fans = shopInfo.cFans;
        this.sells = shopInfo.cSells;
        this.score = shopInfo.score;
        this.goodsCount = shopInfo.cGoods;
    }
}
// 1.商品详细信息参数
export class GoodsParam {
    constructor(info, rule) {
        // 注:images可能没有值(某些商品有值，某些没有值)
        this.image = info.images ? info.images[0] : '';
        this.infos = info.set;
        this.sizes = rule.tables;
    }
}