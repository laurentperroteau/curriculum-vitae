const path = require('path')

// Parts of config
const myWebpackModule = require('./webpack.module.js')
const myWebpackResolve = require('./webpack.resolve.js')

module.exports = function(config) {
    
    config.set({
        browsers: ['Chrome'],
        files: [
            '../webpack.test.config.js',
        ],
        frameworks: [
            'jasmine',
        ],
        preprocessors: {
            '../webpack.test.config.js': [
                'webpack', 
                'sourcemap'
            ]
        },
        reporters: ['spec'],
        webpack: {
            cache: true,
            devtool: 'inline-source-map',
            module: myWebpackModule,
            resolve: myWebpackResolve,
        }
    })
}