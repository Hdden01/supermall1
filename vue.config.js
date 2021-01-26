module.exports = {
  // 配置网络包  [kənˈfɪɡə(r)]
  configureWebpack: {
    resolve: {
      // 扩展
      extensions:['.js','.css','.vue'] ,
      //   别名
      alias: {
        'components': '@/components',
        'content': 'components/content',
        'common': 'components/common',
        'assets': '@/assets',
        'network': '@/network',
        'views': '@/views',
      }
    }
  }
}
