
module.exports = {
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
            loader: 'html-loader'
        }
    ]
}