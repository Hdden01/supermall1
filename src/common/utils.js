//防抖函数
// export function debouce(func, delay) {
//     let timer = null;
//     return function (...args) {
//         if (timer) {
//             clearTimeout(timer);
//         }
//         timer = setTimeout(() => {
//             func(...args)
//         }, delay)
//     }
// }
// 格式化时间戳
export function formatDate(date, fmt) {
    // 获取年份
    // +表示至少一个或多个
    // test(string)检测字符串是否匹配某个模式
    // 如果字符串 string 中含有与 RegExpObject 匹配的文本，则返回 true，否则返回 false。
    // RegExp.$1获取正则的第一组
    /**
     * const r = /^(\d{4})-(\d{1,2})-(\d{1,2})$/
       r.exec('2019-10-08')    
       console.log(RegExp.$1)  // 2019
       console.log(RegExp.$2)  // 10
       console.log(RegExp.$3)  // 08
     */
    // (date.getFullYear() + '')将数字转成字符串
    // RegExp.$1 yyyy    用后面的替换成前面的
    // substr进行截取  因为传入的y不一定有几个
    if (/(y+)/.test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
    }
    //2.获取月日时分秒 
    let o = {
        'M+': date.getMonth() + 1,
        'd+': date.getDate(),
        'h+': date.getHours(),
        'm+': date.getMinutes(),
        's+': date.getSeconds()
    }
    for (let k in o) {
        //    // RegExp对象用于存储检索模式
        // `(${k})`用于拼接字符串  里面的${k}js代码一样执行
        if (new RegExp(`(${k})`).test(fmt)) {
            let str = o[k] + '';
            // (RegExp.$1.length === 1) ? str : paLeftZero(str)
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : paLeftZero(str));
        }
    }
    return fmt;
};
// 防止数据为4:4:4确保为=>04:04:04
function paLeftZero(str) {
    // 在字符串中抽取从指定下标(第一个参数 必选)开始的指定数目的字符(第二个参数 可选)
    // 例如'00'04   从第下标二开始04
    return ('00' + str).substr(str.length)
}