var webpackConfig = require('./webpack.config.js')

var configuration = {
  browsers: ['Chrome'],
  singleRun: true,
  frameworks: ['mocha'],
  files: [
    'node_modules/jquery/dist/jquery.min.js',
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
  customLaunchers: {
    Chrome_travis_ci: {
      base: 'Chrome',
      flags: ['--no-sandbox']
    }
  }
}

module.exports = function (config) {
  config.set(configuration)
  if (process.env.TRAVIS) {
    config.browsers = ['Chrome_travis.ci']
  }
}
