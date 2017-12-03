module.exports = {
    entry: __dirname + '/main.js',
    output: {
      path: __dirname + '/dist',
      filename: 'bundle.js',
    },
    module: {
        loaders:[
            {
                test:/\.js$/,
                exclude: /node_modules/,
                loaders: 'babel-loader',
                query: {
                    presets:['es2015']
                }
            },
            {
                test:/\.css$/,
                exclude: /node_modules/,
                loaders: ['style-loader', 'css-loader']
            }
        ]
    }
};