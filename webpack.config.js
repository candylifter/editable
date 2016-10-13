var path = require('path')

var config = {
  devtool: 'eval-source-map',
  entry: {
    'editor.global': path.join(__dirname, 'src/js/global.js'),
    'editor.module': path.join(__dirname, 'src/js/module.js')
  },
  output: {
    path: path.join(__dirname, '/dist/'),
    filename: '[name].js',
    publicPath: '/'
  },
  module: {
    loaders: [{
      test: /\.js?$/,
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        presets: ['es2015']
      }
    }, {
      test: /\.css$/,
      loader: 'style!css'
    }, {
      test: /\.scss$/,
      loader: 'style!css!sass'
    }]
  },
  resolve: {
    root: __dirname,
    modulesDirectories: [
      'node_modules'
    ],
    alias: {
      styles: 'src/scss/editor.scss',
      editor: 'src/js/editor.js'
    },
    extensions: ['', '.js']
  }
}

module.exports = config
