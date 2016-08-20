const path = require('path')

// Parts of config
const myWebpackModule = require('./config/webpack.module.js')
const myWebpackResolve = require('./config/webpack.resolve.js')

module.exports = function(config) {
    
    config.set({
        browsers: ['Chrome'],
        coverageReporter: {
            reporters: [
                {
                    type: 'html',
                    subdir: 'html'
                }, {
                    type: 'lcovonly',
                    subdir: '.'
                }
            ]
        },
        files: [
            'tests.webpack.js',
        ],
        frameworks: [
            'jasmine',
        ],
        preprocessors: {
            'tests.webpack.js': ['webpack', 'sourcemap'],
        },
        reporters: ['mocha', 'coverage'],
        webpack: {
            cache: true,
            devtool: 'inline-source-map',
            module: myWebpackModule,
            resolve: myWebpackResolve,
        }
    })
}