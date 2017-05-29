module.exports = config => {
  config.set({
    frameworks: ['jasmine'],

    files: [
      'node_modules/sinon/pkg/sinon-2.2.0.js',
      'karma.entry.js'
    ],

    preprocessors: {
      'karma.entry.js': ['webpack', 'sourcemap']
    },

    webpack: require('./webpack.config'),

    webpackServer: {
      noInfo: true
    },

    reporters: [
      config.singleRun ? 'mocha' : 'dots',
      'coverage'
    ],

    coverageReporter: {
      dir: 'coverage',
      subdir: '.',
      reporters: [
        {type: 'lcov'},
        {type: 'text-summary'}
      ]
    },

    logLevel: config.LOG_INFO,

    autoWatch: true,

    singleRun: false,

    browsers: ['Chrome']
  });
};
