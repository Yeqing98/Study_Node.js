const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: __dirname + "/app/main.js",  // 唯一入口文件
    output: {
        path: __dirname + "/build",  // 打包出口文件
        filename: "bundle.js"   // 打包输出后的文件名
    },

    devServer: {
        contentBase: "./public", // 本地服务器所加载的页面所在的目录
        historyApiFallback: true, // 不跳转
        inline: true  // 实时刷新
    },
    module: {
        rules: [
            {
                test: /(\.jsx|\.js)$/,
                use: {
                    loader: "babel-loader"
                },
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader",
                        options: {
                            modules: true,
                            localIdentName: '[name]__[local]--[hash:base64:5]'
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: __dirname + "/app/index.tmpl.html"
        })
    ]
}

// 注意：__dirname：是node.js中的一个全局变量，他是指向当前执行的脚本文件所在目录