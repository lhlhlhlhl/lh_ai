// webpack的配置文件
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/main.jsx',//申明入口，webpack整理依赖关系，并打包
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    clean: true//每次打包会把之前的dist删掉
  },
  mode: 'development',//以开发模式打包
  target: 'web',//打包成web的代码
  module: {//webpack支持解析的模块文件
    rules: [
      {
        test: /\.css$/i,//css文件在这里处理，正则去匹配所有以css为后缀的文件，i表示区分大小写
        use: ['style-loader', 'css-loader'],//use数组中的loader从右往左执行
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react']
          }
        }
      }
    ]

  },
  plugins: [//插件
    new HtmlWebpackPlugin({//加载html文件，作为首页挂载点
      template: path.resolve(__dirname, 'public/index.html'),
      filename: 'index.html'
    })
  ],
  devServer: {
    port: 8080,
    open: true,//打包完成后，自动打开浏览器
    hot: true,//开启热更新
    static: {
      directory: path.resolve(__dirname, 'dist')//将dist结果目录启动起来
    }
  },

}
