var path = require('path')

var config = {
  devtool: 'eval-source-map',
  entry: [
    'src/js/editor.js',
    'src/js/ui.js'
  ],
  output: {
    path: path.join(__dirname, '/dist/'),
    filename: 'editor.js',
    publicPath: '/',
    libraryTarget: 'umd',
    library: 'UI'
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
