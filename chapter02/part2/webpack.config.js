// 引入一个包
const path = require('path');

// 引入html插件
const HTMLWebpackPlugin = require('html-webpack-plugin');

const {CleanWebpackPlugin} = require('clean-webpack-plugin')

module.exports = {
  // 指定入口文件
  entry: "./src/index.ts",
  //指定打包文件所在目录
  // 指定打包文件所在目录
  output: {
    // 指定打包文件的目录
    path: path.resolve(__dirname, 'dist'),
    // 打包后文件的文件
    filename: "bundle.js",
    // 告诉webpack不使用箭头
    environment: {
      arrowFunction: false,
      const:false
    }
  },
  //指定webpack打包时所使用的模块
  module: {
    rules: [
      {
        //test指定的是规则生效的文件
        test: /\.ts$/,
        use: [
          //配置babel
          {
            // 指定加载器
            loader: 'babel-loader',
            //设置babel
            options: {
              //设置预先的环境
              presets: [
                [
                  "@babel/preset-env",
                  //配置信息
                  {
                    targets: {
                      "chrome": "58",
                      "ie": "11"
                    },
                    //指定corejs的版本
                    "corejs": "3",
                    //使用corejs方式，"useage" 表示按需加载
                    "useBuiltIns": "usage"
                  }
                ]
              ]
            }
          },
          'ts-loader'
        ],
        exclude: /node_modules/
      },
      {
        test: /\.less$/,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [
                  [
                    "postcss-preset-env",
                    {
                      browsers: 'last 2 versions'
                    }
                  ]

                ]
              }
            }
          },
          "less-loader"
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HTMLWebpackPlugin({
      // title:'AprilEcho'
      template: './src/index.html'
    })
  ],
  resolve: {
    extensions: ['.ts', '.js']
  },
  mode: "development"
}