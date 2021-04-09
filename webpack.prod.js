const { merge } = require('webpack-merge');

const commonConfigWebpack = require('./webpack.config.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(commonConfigWebpack, {
  mode: 'production',
  devtool: 'hidden-source-map',
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'template.html',
    }),
  ],
});