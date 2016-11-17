'use strict'

var path = require('path')
var webpack = require('webpack')
var webpackConfig = require('./webpack.config')

webpackConfig.devtool = 'source-map'

webpackConfig.output = {
  path: path.join(__dirname, '/dist/'),
  filename: 'editor.min.js',
  publicPath: '/',
  libraryTarget: 'var',
  library: 'Editor'
}

webpackConfig.plugins = [
  new webpack.optimize.OccurenceOrderPlugin(),
  new webpack.optimize.UglifyJsPlugin({
    compressor: {
      warnings: false,
      screw_ie8: true
    }
  }),
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
  })
]

module.exports = webpackConfig
