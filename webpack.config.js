// webpack.config.js
const path = require('path')
module.exports = {
  mode:"development",
  entry: path.join(__dirname, '/src/index.js'), // 入口文件
  output: {
    path: path.join(__dirname, '/dist'), //打包后的文件存放的地方
    filename: 'bundle.js' //打包后输出文件的文件名
  },
  devServer: {
    // host:"0.0.0.0",
    // contentBase: './dist', // 本地服务器所加载文件的目录
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    port: '8088', // 设置端口号为8088
    // inline: true, // 文件修改后实时刷新
    hot:true,
    historyApiFallback: true, //不跳转
    proxy: { // 配置代理（只在本地开发有效，上线无效）
      
    }
  }
}