
// Used to resolve absolute path to project's root directory
const path = require('path')

module.exports =  {
    extensions: ['', '.js', '.json'],
    alias: {
        config: path.resolve( __dirname, 'global.config.js'),

        // Alias of dir
        // @use => import getAsync from 'myService/...'
        // @use => require('myComponents/...')
        myComponents: path.resolve( '${__dirname}/..', 'components'),
        myScreens: path.resolve( '${__dirname}/..', 'screens'), 
        myService: path.resolve( '${__dirname}/..', 'service'),
        myUtil: path.resolve( '${__dirname}/..', 'util'),

        // Global lib
        prims: './libs/prims/prism.js',
        markdown: './node_modules/markdown/lib/markdown.js'
    }
}