var webpackConfig = require('./webpack.config.js')
console.log(`ENV: ${process.env.NODE_ENV}`)

var configuration = {
  browsers: ['PhantomJS'],
  singleRun: process.env.NODE_ENV !== 'development',
  autoWatch: process.env.NODE_ENV === 'development',
  frameworks: ['mocha'],
  files: [
    'src/tests/**/*.test.js'
  ],
  preprocessors: {
    'src/tests/**/*.test.js': ['webpack', 'sourcemap']
  },
  reporters: ['mocha'],
  client: {
    mocha: {
      timeout: '5000'
    }
  },
  webpack: webpackConfig,
  webpackServer: {
    noInfo: true
  },
  phantomjsLauncher: {
    exitOnResourceError: true
  }
}

module.exports = function (config) {
  config.set(configuration)
}
