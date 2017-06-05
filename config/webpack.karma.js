const path = require('path')

// Parts of config
const myWebpackModule = require('./webpack.module.js')
const myWebpackResolve = require('./webpack.resolve.js')

module.exports = function(config) {
    
    config.set({
        basePath: '.',
        browsers: [
            'Chrome'
        ],
        files: [
            '../webpack.test.config.js'
        ],
        frameworks: [
            'jasmine',
        ],
        preprocessors: {
            '../webpack.test.config.js': [
                'webpack'
            ]
        },
        reporters: ['spec'],
        webpack: {
            cache: true,
            module: myWebpackModule,
            resolve: myWebpackResolve,
            devServer: {
                stats: 'errors-only'
            }
        },
        webpackMiddleware: {
          stats: {
            chunks: false,
          }
        },
        //logLevel: config.LOG_DEBUG, //config.LOG_INFO,
    })
}
