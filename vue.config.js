const { defineConfig } = require('@vue/cli-service')
// 打包 使用gzip压缩
const CompressionWebpackPlugin = require('compression-webpack-plugin')

module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    externals: {
      vue: 'Vue',
      'element-ui': 'ELEMENT',
      Vuex: 'Vuex',
      axios: 'axios'
    },
    plugins: [
      new CompressionWebpackPlugin({
        test: /\.js|\.css/ // 对匹配的文件类型进行压缩
      })
    ]
  }
})
