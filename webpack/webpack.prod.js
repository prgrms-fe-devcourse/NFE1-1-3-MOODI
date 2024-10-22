const { merge } = require('webpack-merge')
const common = require('../webpack.common.js')
const webpack = require('webpack')

module.exports = merge(common, {
  mode: 'production',
  devtool: 'hidden-source-map',
})
