
// Used to resolve absolute path to project's root directory
const path = require('path')

module.exports =  {
    extensions: ['', '.js', '.json'],
    alias: {
        config: './config.js',
        // Alias of dir
        // @use => import getAsync from 'myComponents/...'
        // @use => require('myComponents/...')
        myComponents: path.resolve( '${__dirname}/..', 'components'),
        myScreens: path.resolve( '${__dirname}/..', 'screens'), 
        myFiles: path.resolve( '${__dirname}/..', 'tree'), 
        // Global lib
        prims: './libs/prims/prism.js',
        markdown: './node_modules/markdown/lib/markdown.js'
    }
}