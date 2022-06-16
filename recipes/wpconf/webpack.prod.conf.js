const { merge } = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.conf.js')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = merge(baseWebpackConfig, {
  mode: 'production',
  stats: 'none',
  plugins: [new CleanWebpackPlugin()],
})
