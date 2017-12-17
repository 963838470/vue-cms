'use strict';
const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        main: "./src/index.js"
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'build.js'
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: 'style-loader!css-loader!autoprefixer-loader' },
            { test: /\.less$/, loader: 'style-loader!css-loader!autoprefixer-loader!less-loader' },
            { test: /\.(jpg|png|svg|gif|ttf|woff|woff2)/, loader: 'url-loader', options: { limit: 4096, name: '[hash:8].[name].[ext]' } },
            { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader',  },
            { test: /\.vue$/, loader: 'vue-loader' },
            { test: /\.(eot)$/, loader: 'file-loader', options: { limit: 4096, name: '[name].[ext]' } },
            {
                test: /vue-preview.src.*?js$/,
                loader: 'babel-loader'
            }
        ]
    },
    plugins: [
        new htmlWebpackPlugin({ template: './src/index.html' })
    ]
}
