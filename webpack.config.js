var path = require('path')

var config = {
  devtool: 'eval-source-map',
  entry: [
    path.join(__dirname, 'src/js/editor.js')
  ],
  output: {
    path: path.join(__dirname, '/dist/'),
    filename: 'editor.js',
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
    }]
  },
  resolve: {
    root: __dirname,
    modulesDirectories: [
      'node_modules'
    ],
    extensions: ['', '.js']
  }
}

module.exports = config
