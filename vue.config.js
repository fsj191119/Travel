module.exports = {
  devServer: {
    port: 3000, // 端口号
    // host: '192.168.1.4',
    open: true // 配置是否自动启动浏览器
  },

  pluginOptions: {
    quasar: {
      importStrategy: 'kebab',
      rtlSupport: true
    }
  },

  transpileDependencies: [
    'quasar'
  ]
}
