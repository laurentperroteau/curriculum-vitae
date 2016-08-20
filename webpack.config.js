
/**
 * Developement webpack config
 * ===========================
 */

const Webpack = require('webpack')

// Parts of config
const myWebpackModule = require('./config/webpack.module.js')
const myWebpackResolve = require('./config/webpack.resolve.js')

// PostCSS plugin
const autoprefixer = require('autoprefixer')
const precss       = require('precss')
const cssnext      = require('cssnext')
const normalize    = require('postcss-normalize')

module.exports = {
    context: __dirname,
    entry: {
        app: './app.js'
    },
    output: {
        filename: './[name]/[name]Bundle.js'
    },
    module: myWebpackModule,
    resolve: myWebpackResolve,
    eslint: {
        configFile: './.eslintrc'
    },
    postcss: function () {

        // List of postcss plugin (require above)
        return [
            precss, 
            cssnext,
            autoprefixer,
            normalize
        ]
    }
}