module.exports = {
    entry: ['babel-polyfill', './app.js'],
    output: {
        filename: './app/appBundle.js'
    },
    module: {
    preLoaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'jshint-loader'
            }
        ],
        loaders: [
            {
                test: /\.js/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    cacheDirectory: true, 
                    presets: ['es2015'],
                    plugins: ['transform-async-to-generator', 'syntax-async-functions']
                }
            }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.json']
    },
    // more options in the optional jshint object
    jshint: {
        // any jshint option http://www.jshint.com/docs/options/
        // i. e.
        browser:   true,
        esversion: 6,
        asi:       true,

        // jshint errors are displayed by default as warnings
        // set emitErrors to true to display them as errors
        emitErrors: false,

        // jshint to not interrupt the compilation
        // if you want any file with jshint errors to fail
        // set failOnHint to true
        failOnHint: false,

        // custom reporter function
        reporter: function(errors) {

            // console.log( errors );
        }
    }
}