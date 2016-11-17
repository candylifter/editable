var path = require('path')

var config = {
  devtool: 'eval-source-map',
  entry: [
    'node_modules/toastr/build/toastr.min.css',
    'src/js/editable.js',
    'src/js/editor.js'
  ],
  output: {
    path: path.join(__dirname, '/dist/'),
    filename: 'editor.js',
    publicPath: '/',
    libraryTarget: 'var',
    library: 'Editor'
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
      styles: 'src/scss/main.scss',
      editable: 'src/js/editable.js',
      editor: 'src/js/editor.js'
    },
    extensions: ['', '.js']
  }
}

module.exports = config
