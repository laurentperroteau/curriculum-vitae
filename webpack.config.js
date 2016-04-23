// used to resolve absolute path to project's root directory
const path = require('path')

// PostCSS plugin
const autoprefixer = require('autoprefixer')
const precss      = require('precss')
const cssnext     = require('cssnext')
const normalize     = require('postcss-normalize')

module.exports = {
    context: __dirname,
    entry: ['./app.js'],
    output: {
        filename: './app/appBundle.js'
    },
    module: {
        preLoaders: [
            {
                test: /\.js$/, 
                loader: "eslint-loader", 
                exclude: /node_modules|libs/
            }
        ],
        loaders: [
            {
                test: /\.js/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    cacheDirectory: true, 
                    presets: ['es2015']
                }
            },
            {
                test:   /\.css$/,
                loader: "style-loader!css-loader!postcss-loader"
            },
            {
                test: /\.html$/,
                loader: 'mustache'
                // loader: 'mustache?minify'
                // loader: 'mustache?{ minify: { removeComments: false } }'
                // loader: 'mustache?noShortcut'
            }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.json'],
        alias: {
            // Alias of dir
            // @use => import getAsyncJson from 'myComponents/...'
            // @use => require('myComponents/...')
            myComponents: path.resolve( __dirname, 'components'),
            myScreens: path.resolve( __dirname, 'screens'), 
            Prims: './libs/prims/prism.js'
        }
    },
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