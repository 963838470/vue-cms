'use strict';
const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const webpack = require("webpack")
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
    entry: {
        main: "./src/index.js",
        vendors: ["vue", "vue-router", "moment", "axios", 'vue-preview']
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/',
        filename: 'js/[chunkhash:6].[name].js'
    },
    module: {
        loaders: [
            // { test: /\.css$/, loader: 'style-loader!css-loader!autoprefixer-loader' },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader!autoprefixer-loader"
                })
            },
            { test: /\.less$/, loader: 'style-loader!css-loader!autoprefixer-loader!less-loader' },
            { test: /\.(jpg|png|svg|gif|ttf|woff|woff2)/, loader: 'url-loader', options: { limit: 4096, name: 'assets/[hash:6].[name].[ext]' } },
            { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
            { test: /vue-preview.src.*?js$/, loader: 'babel-loader' },
            { test: /\.vue$/, loader: 'vue-loader' },
            { test: /\.(eot)$/, loader: 'file-loader', options: { limit: 4096, name: '[name].[ext]' } },
        ]
    },
    plugins: [
        new htmlWebpackPlugin({ template: 'src/index.html' }),
        new ExtractTextPlugin("css/[contenthash:6].css"),
        new webpack.optimize.CommonsChunkPlugin({ name: "vendors", minChunks: Infinity }),
        new UglifyJsPlugin(),
        new webpack.DefinePlugin({ 'process.env': { NODE_ENV: '"production"' } }), // 去除警告
    ]
}
