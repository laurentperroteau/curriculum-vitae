module.exports = {
  entry: ["./app.js"],
  output: {
    filename: "./app/appBundle.js"
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
        presets: ['es2015'] 
      }
    }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.json'],
    alias : {
        jquery: './jquery/jquery-1.12.0.min.js'
    }
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