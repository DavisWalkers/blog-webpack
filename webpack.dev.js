const path = require('path');
const webpack = require('webpack');
const { merge } = require('webpack-merge');

const commonConfigWebpack = require('./webpack.config.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(commonConfigWebpack, {
  mode: 'development',
  devServer: {
    host: 'localhost',
    port: '8000',
    contentBase: path.resolve(__dirname, 'public'),
    publicPath: '/',
    historyApiFallback: true,
    open: false,
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'template.html',
    }),
  ],
  devtool: 'source-map',
})