var path = require('path');

module.exports = function (config) {
  config.set({
    browsers: ['Chrome'],
    coverageReporter: {
      reporters: [
        { type: 'html', subdir: 'html' },
        { type: 'lcovonly', subdir: '.' },
      ],
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
      module: {
        /*preLoaders: [
          {
            test: /-test\.js$/,
            include: /src/,
            exclude: /(bower_components|node_modules)/,
            loader: 'babel',
            query: {
              cacheDirectory: true,
            },
          },
          {
            test: /\.js?$/,
            include: /src/,
            exclude: /(node_modules|bower_components|__tests__)/,
            loader: 'babel-istanbul',
            query: {
              cacheDirectory: true,
            },
          },
        ],*/
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
                loader: 'html-loader'
            }
        ]
      },
      resolve: {
        extensions: ['', '.js', '.json'],
        alias: {
            config: './config.js',
            // Alias of dir
            // @use => import getAsync from 'myComponents/...'
            // @use => require('myComponents/...')
            myComponents: path.resolve( __dirname, 'components'),
            myScreens: path.resolve( __dirname, 'screens'), 
            myFiles: path.resolve( __dirname, 'tree'), 
            // Global lib
            prims: './libs/prims/prism.js',
            markdown: './node_modules/markdown/lib/markdown.js'
        }
    },
    },
  });
};
