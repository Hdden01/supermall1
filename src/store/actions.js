
export default {
    addCart(context,playload){
         // 方式一：
        // let oldProduct=null;
        // for(let item of state.cartList){
        //     if(item.iid==playload.iid){
        //         oldProduct=item;
        //     }
        // }
        // 若oldProduct有值说明重复了
        // 此时的oldProduct等于一个对象
        
        // 方式二:  满足条件就将当前对象返回给变量
      
       return new Promise((resolve,reject)=>{
        let oldProduct=context.state.cartList.find(item=>{
            return item.iid==playload.iid;
        })
        // 添加商品数量
        if(oldProduct){
            // 在对象内添加属性名和属性值
            // oldProduct.count+=1;
            // counter计数器、count总数
            context.commit('muAddCounter',oldProduct)
            resolve('当前商品数量加一');
        }else{
            // 添加商品
            playload.count=1;
            context.commit('muAddCart',playload)
            // context.state.cartList.push(playload);
            resolve('商品添加到购物车');
        }
       })
    }
}