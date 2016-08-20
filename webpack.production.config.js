
/**
 * Production webpack config
 * =========================
 * @descrition : add strip loader to webpack.config.js
 */

const devConfig = require('./webpack.config.js')

const WebpackStripLoader = require('strip-loader')

const stripLoader = {
    test: [/\.js$/, /\.es6$/],
    exclude: /node_modules/,
    loader: WebpackStripLoader.loader('console.log', 'debug')
}

devConfig.module.loaders.push( stripLoader )

module.exports = devConfig